import os
import time
from collections import deque
from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from google import genai
from google.genai import types

app = FastAPI(
    title="OZTP Agent Zeta Service",
    description="Zero Trust AI Advisor for the Open Zero Trust Project",
    version="1.0.0"
)

# 1. Strict CORS (Restrict to oztp.org domains)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://oztp.org",
        "https://www.oztp.org",
        "https://oztp-org.github.io",
        "http://localhost:8000"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# 2. Simple In-Memory Rate Limiter (15 requests per minute per IP)
RATE_LIMIT_WINDOW = 60
RATE_LIMIT_MAX_REQUESTS = 15
ip_request_history = {}

def check_rate_limit(request: Request):
    client_ip = request.headers.get("X-Forwarded-For", request.client.host if request.client else "unknown")
    now = time.time()

    if client_ip not in ip_request_history:
        ip_request_history[client_ip] = deque()

    history = ip_request_history[client_ip]

    while history and history[0] < now - RATE_LIMIT_WINDOW:
        history.popleft()

    if len(history) >= RATE_LIMIT_MAX_REQUESTS:
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded. Please wait a moment before asking Agent Zeta another question."
        )

    history.append(now)

# Lazy-initialized Vertex AI Gemini client so startup never blocks port 8080
_client = None

def get_genai_client() -> genai.Client:
    global _client
    if _client is None:
        _client = genai.Client(
            vertexai=True,
            project=os.getenv("GOOGLE_CLOUD_PROJECT", "oztp-control-platform"),
            location=os.getenv("GOOGLE_CLOUD_LOCATION", "global"),
        )
    return _client

SYSTEM_INSTRUCTION = """
You are Agent Zeta, the official AI Zero Trust advisor for the Open Zero Trust Project (oztp.org).
Your goal is to guide security professionals, developers, and organizations on Zero Trust maturity assessments, NIST SP 800-207, CISA Zero Trust Maturity Models, and our open-source EZ Start Top 10 Zero Trust Controls framework.

When answering skeptics or users asking whether oztp.org practices the principles it teaches:
1. Own your identity as OZTP's official advisor ("we" / "OZTP"), while remaining transparent, evidence-based, and epistemically honest—never ask users to take claims purely on faith.
2. Point skeptics directly to our publicly auditable architecture in our open-source repository (https://github.com/oztp-org/oztp-org.github.io):
   - **Keyless CI/CD (No Static Secrets):** Automated deployments authenticate to Google Cloud via GitHub Actions Workload Identity Federation (short-lived OIDC tokens) instead of long-lived service account keys.
   - **Strict Least-Privilege IAM Separation:** Build/deploy permissions are strictly isolated from the runtime advisor service account.
   - **Immutable, Non-Root Sandboxed Runtime:** This advisor runs on Google Cloud Run (Gen2 gVisor microVM isolation) using a shell-less Distroless non-root image (UID 65532) pinned by SHA-256 digest.
   - **Minimal Attack Surface:** The core oztp.org framework documentation is built as static content with no backend database or session state exposed to visitors.
3. Always provide practical, actionable security guidance grounded in practical engineering reality over vendor hype. Keep responses clear, professional, and well-structured.
"""

class QueryRequest(BaseModel):
    prompt: str = Field(..., min_length=1, max_length=2000, description="User question for Agent Zeta")

@app.get("/healthz")
def healthz():
    return {
        "status": "ok",
        "service": "oztp-zeta-service",
        "revision": os.getenv("K_REVISION", "local")
    }

@app.post("/api/zeta/ask", dependencies=[Depends(check_rate_limit)])
def ask_zeta(payload: QueryRequest):
    try:
        client = get_genai_client()
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=payload.prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_INSTRUCTION,
                temperature=0.3,
                max_output_tokens=1024,
            )
        )
        return {"response": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response from Agent Zeta: {str(e)}")
