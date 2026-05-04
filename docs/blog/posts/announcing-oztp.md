---
date: 2026-05-01
authors:
  - oztp
categories:
  - Announcements
---

# Introducing the Open Zero Trust Project

Zero Trust is not a new idea. The principles have been articulated in NIST SP 800-207, expanded in the CISA Zero Trust Maturity Model, and reinforced by nearly every major security breach of the past decade. The question has never been whether Zero Trust works — it's why so few organizations have actually achieved it.

The answer, in most cases, is resources. Not a lack of motivation or understanding, but a lack of accessible, practical tooling that doesn't require an enterprise budget or a dedicated security team to deploy.

That's the problem OZTP is built to address.

<!-- more -->

## What We're Building

OZTP is building free, open source Zero Trust tools for organizations of every size. Not frameworks and whitepapers — actual software that can be downloaded, installed, and run.

The first release focuses on what we're calling **monitoring first**: give organizations visibility into their current security posture before recommending any changes. Specifically, we're starting with Windows Defender Application Control (WDAC) on Windows 11 Pro — one of the most powerful and underutilized security controls available to Windows environments today.

The initial product set:

- **Control Platform** — a cloud API that devices check into, providing health status and event telemetry across your organization
- **Device Agent** — a lightweight Windows 11 Pro agent that reports WDAC posture and application control events
- **ZT Maturity Assessment** — structured assessments mapped to the CISA ZTMM, coming in a later phase
- **Agent Zeta** — an AI Zero Trust advisor that works with your choice of LLM provider, also coming later

## Why Monitoring First

Security tools that make automatic changes — even good changes — introduce risk when they act without full context. Before we can responsibly recommend or automate anything, we need to see what's actually happening on devices.

Monitoring first also means organizations can start gaining value immediately, without a lengthy change-management process. You install the agent, register the device, and start seeing WDAC posture data. That visibility alone is useful — and it creates the foundation for everything that comes next.

## The Defensive Principle

Most security tools can be used defensively or offensively — that's the nature of the field. OZTP's dedication is to the defensive side. We build blue team solutions: tools that help organizations see clearly, verify continuously, and respond confidently.

## Get Involved

The project is on GitHub at [github.com/oztp-org](https://github.com/oztp-org). The code is open, the roadmap is public, and contributions are welcome.

We're just getting started.
