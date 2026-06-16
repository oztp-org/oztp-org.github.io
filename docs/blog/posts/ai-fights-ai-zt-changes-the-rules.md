---
date: 2026-06-16
authors:
  - oztp
categories:
  - Zero Trust Concepts
  - AI Security
---

# AI Fights AI. Zero Trust Changes the Rules.

Cynthia Kaiser — former FBI Cyber Deputy Director, now leading ransomware research at Halcyon — put it plainly in a recent LinkedIn comment defending the use of advanced AI models for cyber defense:

> *"The only way to defend against bad actors gaining AI capabilities is to use those same capabilities to stop them."*

She's right. And the events of the past week gave that argument an unintended proof point.

<!-- more -->

---

## The Stakes Just Got Concrete

On June 9, 2026, Anthropic released Claude Fable 5 — a model specifically designed to assist with advanced cybersecurity tasks. By June 12, the U.S. government had ordered Anthropic to disable it globally, citing export-control concerns and a discovered technique to bypass the model's safeguards. A tool built for defenders was shut down because its capabilities were considered too strategically significant to leave unrestricted.

That is not a reason to abandon AI in security. It is evidence of exactly what Kaiser is describing. AI capabilities in cyber are now in the same strategic category as other dual-use technologies — consequential enough for government intervention, powerful enough to matter on both sides of the fight. Defenders who ignore this are not being cautious. They are being outpaced.

The argument for AI-assisted defense is not speculative. It is already the condition.

---

## But the Attack Still Has to Go Somewhere

Here is where Zero Trust adds something the AI arms race argument does not fully address.

An AI-powered attacker can automate spearphishing at scale, discover vulnerabilities faster than any human team, randomize living-off-the-land patterns to evade behavioral detection, and compress the time from initial access to operational disruption to under 24 hours. All of that is real. All of that is happening.

And yet: the attack still needs a valid credential to succeed. It still needs network access to reach what it is targeting. It still needs data to be reachable to exfiltrate it. Lateral movement still requires paths that exist to be traversed.

Zero Trust closes those pathways at the architectural level — before the attack, regardless of what generated it. A network that enforces least-privilege identity verification on every session, segments critical systems from everything else, and requires device health before granting access does not become easier to compromise because the attack is AI-generated. The controls do not know or care how sophisticated the threat model is. They just enforce.

This is what makes Zero Trust different from detection-based defenses. Detection asks: *what is this traffic doing?* Zero Trust asks: *why is this traffic allowed at all?*

---

## The Fable Suspension Is a ZT Lesson

There is an irony worth noting. The disruption of Fable 5 — a tool defenders had begun relying on for security workflows — was itself a demonstration of a Zero Trust failure pattern.

Organizations that treated Fable 5 as a non-replaceable dependency in their security operations found themselves without a critical tool overnight. No warning. No gradual transition. One government directive at 5:21 PM and it was gone globally.

This is the Single Point of Failure pattern in a new form. We document it in the context of VPN credentials, admin accounts, and software supply chains. It applies equally to AI tools. Any capability that is singular, unverified, and assumed to be always available is a SPOF — regardless of how powerful it is.

Zero Trust principles apply to your defensive toolkit too:

- **No single AI model should be a critical operational dependency** — maintain redundancy and fallback workflows
- **AI-generated analysis should be verified** — trust the output in context, not unconditionally
- **Access controls and segmentation must exist independent of AI detection** — detection that is unavailable provides zero protection

---

## The Stack That Ages Well

Kaiser's argument, OZTP's emphasis on ZT controls, and the role of human expertise are not competing positions. They are three layers of the same defense, each doing something the others cannot:

| Layer | What It Does | What It Cannot Do Alone |
|-------|-------------|------------------------|
| **Human Intelligence** | Threat modeling, control design, incident judgment | Scale to volume of modern attack data |
| **AI** | Pattern detection at scale, anomaly triage, accelerated response | Close architectural pathways before attacks traverse them |
| **Zero Trust Controls** | Enforce least privilege, segment systems, verify every session | Detect novel attack patterns or reason about intent |

Remove any one layer and the defense degrades. Keep all three and you have something that continues to function even when the AI arms race shifts — even when a model gets disrupted, even when a novel technique bypasses detection, even when the attacker is well-resourced and patient.

ZT is not a replacement for AI-assisted defense. It is the foundation that makes AI-assisted defense worth having — because it limits what an attacker can reach even when detection fails.

---

## Build the Foundation Now

The AI capabilities available to attackers will continue to improve. The AI capabilities available to defenders will continue to improve. Neither side will achieve a permanent advantage.

Zero Trust architecture is the investment that pays off regardless of how that race resolves. A sound ZT posture does not become obsolete when a new model is released or when a trusted model is taken offline. It just keeps enforcing.

Use AI for defense. Keep humans in the judgment loop. And build the ZT foundation that neither an AI-powered attacker nor a disrupted AI model can take away from you.

---

*OZTP builds free, open source Zero Trust tools for organizations of every size. The [ZT Maturity Assessment](/products/zt-assessment/) maps your current posture across all five CISA pillars. [Agent Zeta](/products/agent-zeta/) is available now to answer your Zero Trust questions — no account required.*

---

Sources:

- [Cynthia Kaiser — After two decades in federal cybersecurity, Cynthia Kaiser hits the private sector](https://www.halcyon.ai/press/after-two-decades-in-federal-cybersecurity-cynthia-kaiser-hits-the-private-sector)
- [Halcyon — From Cybercrime to Conflict: Why Infrastructure Defenders Must Rethink Risk](https://www.halcyon.ai/blog/from-cybercrime-to-conflict-why-infrastructure-defenders-must-rethink-risk)
- [Fortune — Anthropic disables Fable and Mythos AI models after U.S. government bars it from giving foreigners access](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/)
- [Snyk — When a Government Pulls an AI Model: What the Fable 5 and Mythos 5 Suspension Means for Security Teams](https://snyk.io/blog/fable-mythos-suspension-security-takeaways/)
- [TechCrunch — Cybersecurity researchers aren't happy about the guardrails on Anthropic's Fable](https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/)
- [Scientific American — U.S. limits on Anthropic Fable AI could hurt cybersecurity](https://www.scientificamerican.com/article/us-limits-on-anthropic-fable-ai-could-hurt-cybersecurity/)
