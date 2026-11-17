# syntax=docker/dockerfile:1.7

# ==============================================================================
# Stage 1: Build isolated virtual environment matching Debian 12 Python 3.11
# ==============================================================================
FROM python:3.11-slim-bookworm AS builder

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /build

RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY app/requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ==============================================================================
# Stage 2: Distroless Non-Root Runtime (UID 65532, zero shell, read-only safe)
# ==============================================================================
FROM gcr.io/distroless/python3-debian12:nonroot

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/opt/venv/bin:$PATH" \
    PYTHONPATH="/opt/venv/lib/python3.11/site-packages:/app" \
    PORT=8080

WORKDIR /app

COPY --from=builder --chown=65532:65532 /opt/venv /opt/venv
COPY --chown=65532:65532 app/ /app/

USER 65532:65532

EXPOSE 8080

# Invoke system python3.11 in distroless directly with site-packages on PYTHONPATH
ENTRYPOINT ["/usr/bin/python3", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--no-access-log"]
