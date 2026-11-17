import os
from collections.abc import AsyncIterator
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from google import genai
from google.genai import types
from google.genai.errors import APIError
from pydantic import BaseModel, Field

PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT", "oztp-control-platform")
LOCATION = os.getenv("GOOGLE_CLOUD_LOCATION", "global")
MODEL_ID = "gemini-4-hydrogen"

SYSTEM_PROMPT = (
    "You are Agent Zeta, the Open Zero Trust Project (OZTP) security advisor. "
    "Provide concise, practical guidance mapped to Zero Trust architecture controls."
)

app = FastAPI(
    title="OZTP Agent Zeta Service",
    version="1.0.0",
    docs_url=None,  # Disable Swagger UI in production to reduce attack surface
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://oztp.org", "https://www.oztp.org"],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

# Uses attached Cloud Run runtime service account (oztp-runtime-sa) automatically
ai_client = genai.Client(
    vertexai=True,
    project=PROJECT_ID,
    location=LOCATION,
)


class PromptRequest(BaseModel):
    prompt: str = Field(..., min_length=1, max_length=4000)


class AdvisorResponse(BaseModel):
    model: str
    reply: str


@app.get("/healthz")
async def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "oztp-zeta"}


@app.post("/api/zeta/ask", response_model=AdvisorResponse)
async def ask_zeta(body: PromptRequest) -> AdvisorResponse:
    try:
        response = await ai_client.aio.models.generate_content(
            model=MODEL_ID,
            contents=body.prompt,
            config=types.GenerateContentConfig(
                temperature=0.2,
                max_output_tokens=2048,
                system_instruction=SYSTEM_PROMPT,
            ),
        )
        return AdvisorResponse(model=MODEL_ID, reply=response.text or "")
    except APIError as exc:
        raise HTTPException(status_code=502, detail=f"Upstream AI error ({exc.code})") from exc


@app.get("/api/zeta/stream")
async def stream_zeta(prompt: str) -> StreamingResponse:
    if not prompt or len(prompt) > 4000:
        raise HTTPException(status_code=400, detail="Prompt must be 1-4000 characters.")

    async def event_generator() -> AsyncIterator[str]:
        try:
            async for chunk in await ai_client.aio.models.generate_content_stream(
                model=MODEL_ID,
                contents=prompt,
                config=types.GenerateContentConfig(
                    temperature=0.3,
                    max_output_tokens=2048,
                    system_instruction=SYSTEM_PROMPT,
                ),
            ):
                if chunk.text:
                    yield f"data: {chunk.text}\n\n"
            yield "data: [DONE]\n\n"
        except APIError as exc:
            yield f"data: [ERROR {exc.code}]\n\n"

    return StreamingResponse(event_generator(), media_type="text/event-stream")
