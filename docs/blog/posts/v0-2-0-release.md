---
date: 2026-05-09
authors:
  - oztp
categories:
  - Announcements
  - Release Notes
---

# OZTP v0.2.0 — Launch Release

When we posted our first update a few weeks ago, we had a scaffold and a plan. Today we have a platform.

OZTP v0.2.0 is the first full release — four products, a public site, live infrastructure, and the foundation for everything we're building next. Here's what shipped.

<!-- more -->

---

## Control Platform

The Control Platform is live and accepting device registrations.

Organizations register, receive an org key, and enroll devices. Each device gets its own scoped API key. Check-ins are rate-limited, keys are hashed at rest, and every auth event and key rotation is logged for audit. The dashboard shows device health at a glance — what's healthy, what's in audit mode, what needs attention.

**Privacy note:** We removed raw Windows event payloads from storage this release. Event messages are sanitized to strip file paths that might contain usernames before they ever reach the database. We built for data minimization from the start.

The platform is self-hostable — any container platform with a PostgreSQL database works. Deployment documentation is in the [GitHub repository](https://github.com/oztp-org/oztp-control-platform).

---

## Device Agent

**Windows 11 Pro** — The agent collects App Control for Business posture (presence, mode, active policy count) and CodeIntegrity events directly from the Windows event log. It detects enforcement vs. audit mode, classifies events by type, and reports health state on every check-in.

**Windows 11 Home** — Home support is active as of this release, confirmed with end-to-end testing. The agent collects a full security posture snapshot: Microsoft Defender real-time protection and definition age, Windows Firewall (all profiles), Device Encryption, Secure Boot, TPM, and UAC. Home devices have built-in Microsoft Code Integrity policies — the agent correctly detects and reports them.

The agent is a single Python file with one dependency (`httpx`). No elevated privileges required to run. Installation instructions are in the [device agent docs](../../products/device-agent.md).

---

## ZT Maturity Assessment

Four framework assessments are live on the platform — no account required:

| Framework | Controls |
|-----------|---------|
| CIS Controls v8 IG1 | 45 |
| CISA Zero Trust Maturity Model v2 | 98 |
| NIST SP 800-207 | 47 |
| ISO/IEC 27001:2022 | 53 |

Complete one or all four. Scores are saved in your browser so you can work at your own pace. When you're done, compute the **Absolute Zero (AZ)** composite — a single percentage across all canonical Zero Trust pillars that tells you where you stand overall and which pillars need the most work.

[Launch the ZT Assessment →](../../products/zt-assessment.md){ .md-button .md-button--primary }

---

## Agent Zeta

Agent Zeta is OZTP's AI Zero Trust advisor — available now as a CLI tool and embedded in this site via the **⚡ button** in the bottom-right corner of every page.

Zeta runs structured CISA ZTMM v2 assessments across all five pillars and produces a scored maturity report with prioritized recommendations. It's LLM-agnostic: use Anthropic Claude, any OpenAI-compatible API, or a local model via Ollama.

This release also tightens Zeta's response style — shorter answers, markdown checklists for action items, recommendations before explanations. We're building an advisor, not a lecturer.

The knowledge base includes NIST SP 800-207, CISA ZTMM v2, CIS Controls v8, ISO/IEC 27001, and threat intelligence on recent incidents including the Canvas LMS breach and the LastPass supply chain compromise.

[Try Agent Zeta →](../../chat.md){ .md-button }

---

## ZT Advisories

We launched a new section — **ZT Advisories** — covering real incidents with plain-language summaries and Zero Trust controls mapped to NIST, CISA, and CIS frameworks.

Two advisories are live:

- **[Canvas LMS Breach — ShinyHunters](../../advisories/canvas-2026-05.md)** — Active incident affecting millions of students and thousands of institutions. Includes an interactive incident response checklist.
- **[LastPass Supply Chain Breach](../../advisories/lastpass-2022.md)** — Lessons from the 2022 breach: how a developer's personal device exposed millions of encrypted vaults, what unencrypted metadata means for your organization, and how to evaluate any password manager going forward.

New advisories will be added as significant incidents arise.

---

## What's Next

The 30-day sprint focused on Windows and foundations. The next phase expands the agent to Linux and Windows Server, adds more advisory content, and continues hardening the platform based on real usage.

If you're using OZTP or want to contribute, the repositories are open:

- [oztp-org/oztp-control-platform](https://github.com/oztp-org/oztp-control-platform) — Platform, API, and Windows agent
- [oztp-org/agent-zeta](https://github.com/oztp-org/agent-zeta) — AI Zero Trust advisor

Issues, pull requests, and feedback are welcome. We're building this in the open.
