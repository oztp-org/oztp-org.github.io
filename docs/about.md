# About OZTP

## Mission

The Open Zero Trust Project exists to make Zero Trust security achievable for organizations of every size — not just those with large security teams and large budgets.

We build free, open source tools and resources that translate Zero Trust principles from frameworks and standards into practical, deployable controls. Our work is defensive, transparent, and community-driven.

---

## Why Zero Trust

The traditional security model — trust everything inside the network perimeter, distrust everything outside — has been consistently proven inadequate. Breaches happen. Credentials are stolen. Insiders make mistakes. Lateral movement inside a "trusted" network is how small incidents become major ones.

Zero Trust replaces implicit trust with continuous verification:

- **Verify explicitly** — authenticate and authorize every access request, every time, based on all available signals
- **Use least privilege** — limit access to only what is needed, for only as long as it is needed
- **Assume breach** — design systems as if compromise has already occurred; minimize blast radius and contain damage

These are not abstract ideals. They are implementable controls with well-defined criteria, mapped by NIST, CISA, and CIS into actionable frameworks.

---

## Our Principles

**Defensive only.**
OZTP tools observe, report, and advise. They do not exploit vulnerabilities or make unauthorized configuration changes. Every capability is reviewed against this standard before release.

**Free and open source.**
Software is free to download, use, and modify.

**No vendor lock-in.**
Products are designed to be infrastructure-agnostic. We support multiple cloud providers, multiple AI providers, and multiple operating systems. Organizations should own their security posture, not rent it from a single vendor.

**Human approval before configuration changes.**
Advisory tools explain and recommend. They do not silently change security settings. A human reviews and approves before anything is modified.

**Framework alignment.**
Every recommendation, checklist item, and maturity score maps to a recognized external standard — NIST SP 800-207, the CISA Zero Trust Maturity Model, CIS Controls v8, or ISO/IEC 27001. We don't invent our own maturity models.

---

## Framework Alignment

| Framework | Description |
|---|---|
| [NIST SP 800-207](https://csrc.nist.gov/publications/detail/sp/800-207/final) | Zero Trust Architecture — the foundational standard |
| [CISA ZTMM v2](https://www.cisa.gov/zero-trust-maturity-model) | Zero Trust Maturity Model — 5 pillars, 4 levels |
| [CIS Controls v8](https://www.cisecurity.org/controls/v8) | Prioritized security controls for practical implementation |
| ISO/IEC 27001 | Information security management system standard |
| NIST CSF 2.0 | Cybersecurity Framework — govern, identify, protect, detect, respond, recover |

---

## Status

OZTP is an early-stage open source project. The initial release supports Windows 11 Pro and Home with a focus on device security posture and application control monitoring.

This is intentional. We are starting narrow and verifiable before expanding scope. Additional platforms — Windows Server, Linux desktop, and Linux server — are on the roadmap.

See the [GitHub repository](https://github.com/oztp-org/oztp-control-platform) for current development priorities.

---

## Contact & Contributing

OZTP is developed in the open on GitHub. Contributions that align with the defensive-only principle are welcome.

- GitHub org: [github.com/oztp-org](https://github.com/oztp-org)
- Issues and discussions: [github.com/oztp-org/oztp-control-platform](https://github.com/oztp-org/oztp-control-platform)
