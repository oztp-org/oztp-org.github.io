---
date: 2026-05-19
authors:
  - oztp
categories:
  - Incidents
---

# Accidents Happen. Even at CISA.

Last weekend, a security researcher discovered that a CISA contractor had pushed a public GitHub repository containing AWS GovCloud administrative credentials, plaintext passwords for dozens of internal systems, and access to CISA's internal artifact registry. The contractor had also manually disabled GitHub's built-in secret scanning.

Brian Krebs has the full story: [CISA Admin Leaked AWS GovCloud Keys on Github →](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/)

<!-- more -->

Before the pile-on starts: this was almost certainly not malicious. A contractor stored credentials somewhere convenient, pushed to a repo that should have been private, and silenced an alert that was probably getting in the way. Accidents like this happen at every organization — including the ones responsible for national cybersecurity guidance.

That's exactly the point.

**Zero Trust isn't just designed for attackers — it's designed for accidents.** The model doesn't assume your people will never make mistakes. It assumes mistakes *will* happen, and builds layers so that no single mistake becomes a catastrophic one. Secrets in a manager instead of a CSV file. Scoped, time-limited contractor access instead of standing admin keys. Secret scanning as a policy, not a personal toggle.

None of those controls require malicious intent to matter. They matter most precisely when intent is good and a judgment call goes wrong.

This is the anti-SPOF argument at its clearest. Not "don't hire bad people" — but "don't build a system where one bad day becomes everyone's worst week."

[See our SPOF incident archive and Zero Trust checklist →](/blog/2026/05/09/stop-the-spof/){ .md-button }
