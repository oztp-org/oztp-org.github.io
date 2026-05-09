# Agent Zeta

**Status:** Active

Agent Zeta is an AI-powered Zero Trust Architecture advisor. It helps security teams, IT administrators, and organizational leaders understand their current Zero Trust posture and chart a clear path toward higher maturity.

---

## What It Does

- Conducts conversational Zero Trust maturity assessments based on the CISA ZTMM v2.0
- Asks targeted questions across all five pillars and produces a scored maturity report
- Explains each recommendation in plain language — the *why*, not just the *what*
- Prioritizes actions by impact and effort so you focus on what matters most
- Maps every recommendation to specific framework controls (NIST, CISA, CIS)

## Design Principles

**LLM-agnostic.** Agent Zeta works with your choice of AI provider — Anthropic Claude, OpenAI-compatible APIs, or local open source models via Ollama. No AI vendor lock-in.

**Offline capable.** When connected to a local LLM (e.g., Ollama on-premises), Agent Zeta can run entirely without internet access — suitable for air-gapped or high-sensitivity environments.

**Defensive only.** Agent Zeta advises on defensive controls. It does not perform vulnerability scanning, penetration testing, or any offensive security activity.

**Human in the loop.** Agent Zeta recommends. Humans decide. No security settings are changed without explicit approval.

---

## Supported LLM Providers

| Provider | How |
|---|---|
| Anthropic Claude | Official Anthropic SDK |
| OpenAI | OpenAI-compatible API |
| Ollama (local) | OpenAI-compatible endpoint at `localhost:11434` |
| LM Studio | OpenAI-compatible endpoint |
| Any OpenAI-compatible server | Configurable `base_url` |

---

## Try It (CLI — Early Access)

The Agent Zeta command-line tool is available now in the [agent-zeta repository](https://github.com/oztp-org/agent-zeta).

```bash
git clone https://github.com/oztp-org/agent-zeta
cd agent-zeta
pip install -r requirements.txt
cp agent-zeta.example.json agent-zeta.json
# Edit agent-zeta.json with your provider and API key
python run.py
```

### Web Interface

A browser-based version of Agent Zeta is live on this site. Click the **⚡ button** in the bottom-right corner of any page to start a Zero Trust advisory session directly — no installation required.

!!! note "Prompt Safety"
    The web interface includes input validation and rate limiting to prevent misuse. Agent Zeta is scoped to Zero Trust advisory topics only.

---

## What Agent Zeta Is Not

- Not a replacement for a security professional or a formal audit
- Not a penetration testing tool
- Not a product that automatically remediates gaps
- Not tied to any commercial security vendor
