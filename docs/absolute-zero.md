---
title: Absolute Zero — The Zero Trust Maturity Ideal
description: Absolute Zero is OZTP's term for full Zero Trust maturity — the theoretical ideal that organizations pursue continuously, knowing the pursuit itself is the win.
---

# Absolute Zero

*Coined by the Open Zero Trust Project, 2026.*

---

In physics, **absolute zero** (0 Kelvin, −273.15°C) is the theoretical lowest possible temperature — the point at which all thermal motion ceases. Scientists have approached within billionths of a degree. No one has ever reached it. No one ever will.

That is precisely the right model for Zero Trust maturity.

## The Concept

**Absolute Zero** is OZTP's term for the state of full Zero Trust maturity — an organization that has achieved the highest defined maturity level across every recognized framework, implemented continuous improvement processes, and maintains ongoing security assessment as standard practice.

Like its physics counterpart, Absolute Zero in cybersecurity is a theoretical ideal. No organization will ever be perfectly secure. Threats evolve. Technology changes. People make mistakes. The moment an organization stops working on security, the gap begins to reopen.

But the pursuit is not futile — it is the entire point.

Every degree closer to Absolute Zero means:

- Fewer attack surfaces for adversaries to exploit
- Faster detection when breaches occur — and they will occur
- Smaller blast radius when incidents happen
- Greater confidence for the people and organizations you protect

The goal is not perfection. The goal is **continuous, verifiable progress toward a defined ideal**.

## What Absolute Zero Requires

An organization approaching Absolute Zero has achieved — and actively maintains — the highest maturity level across all four major Zero Trust frameworks:

| Framework | Full Maturity Designation |
|-----------|--------------------------|
| [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final){ target=_blank } | Full Zero Trust Architecture implementation |
| [CISA ZTMM v2](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } | **Optimal** across all five pillars |
| [CIS Controls v8](https://www.cisecurity.org/controls/v8){ target=_blank } | **Implementation Group 3** — all 18 control families |
| [ISO/IEC 27001](https://www.iso.org/standard/27001){ target=_blank } | Certified and continuously audited |

And beyond certification: continuous improvement, ongoing internal and third-party assessment, and a security culture where verification is never optional and complacency is never tolerated.

## What Full Maturity Looks Like

The four frameworks that define Absolute Zero each approach Zero Trust from a different angle. Together they cover every dimension of a mature security posture. Here is what reaching the ceiling of each one actually requires.

---

### NIST SP 800-207 — Full Zero Trust Architecture

NIST 800-207 defines Zero Trust through seven core tenets. Full implementation means all seven are operational — not aspirational.

**1. All data sources and computing services are resources.**
Every asset — on-premises or cloud, managed or BYOD — is treated as a resource subject to ZT policy. Nothing is implicitly trusted because it is inside a network perimeter.

**2. All communication is secured regardless of network location.**
Every connection is authenticated and encrypted. There is no "trusted internal network." A device on the corporate LAN is treated identically to one connecting from a coffee shop.

**3. Access to resources is granted per-session.**
No standing access. Each session is evaluated independently. A user authenticated this morning does not carry that trust into the afternoon without re-evaluation.

**4. Access is determined by dynamic policy.**
Policy decisions incorporate the observable state of the requesting identity, device posture, behavioral signals, and environmental context — not just credentials. A device that passed health checks yesterday but failed them today receives a different decision.

**5. All assets are continuously monitored and validated.**
The organization has full visibility into the security posture of every device, every identity, and every workload at all times. Monitoring is continuous, not periodic.

**6. Authentication and authorization are dynamic and strictly enforced.**
A Policy Decision Point (PDP) evaluates every access request. A Policy Enforcement Point (PEP) enforces the decision at the resource boundary. No resource is reachable without passing through this gate.

**7. The enterprise collects data to improve its security posture.**
Security telemetry — access logs, device health, network flows, identity events — is continuously collected, analyzed, and fed back into policy. The architecture learns and adapts.

---

### CISA ZTMM v2 — Optimal Across All Five Pillars

CISA's Zero Trust Maturity Model defines four maturity levels: Traditional, Initial, Advanced, and Optimal. Absolute Zero requires Optimal across all five pillars.

**Identity — Optimal**
Identity is the primary control plane. Access decisions are risk-based and dynamic, incorporating behavioral analytics and continuous re-authentication signals. Identity lifecycle — provisioning, role changes, offboarding — is fully automated. Privileged access is just-in-time, with no standing administrative accounts. Phishing-resistant MFA is universal.

**Devices — Optimal**
Every device accessing organizational resources has a verified identity. Device health is assessed in real time and fed directly into access policy. Non-compliant devices receive reduced or zero access automatically. Hardware attestation (TPM, Secure Boot) is required for high-sensitivity access. Mobile and BYOD devices are enrolled in MDM with enforced baselines.

**Networks and Environments — Optimal**
The network is micro-segmented to the workload level. Lateral movement between segments requires explicit authorization. All traffic — internal and external — is encrypted and inspected. DNS, BGP, and routing infrastructure are hardened. Network access decisions are dynamic and tied to identity and device posture, not IP address or VLAN membership.

**Applications and Workloads — Optimal**
Every application enforces least-privilege access at the resource level, not just the application boundary. Authorization is continuous — a session can be downgraded or terminated mid-use based on risk signals. CI/CD pipelines include security gates (SAST, DAST, dependency scanning). Supply chain integrity is verified. Shadow IT is eliminated or enrolled.

**Data — Optimal**
All data is classified. Classification drives automated protection — encryption, DLP controls, access restrictions — without manual tagging per file. Data access is logged comprehensively and monitored for anomalies. Sensitive data is protected throughout its lifecycle: at rest, in transit, and in use. Data loss prevention controls are enforced at the endpoint, network, and application layers simultaneously.

---

### CIS Controls v8 — Implementation Group 3

CIS Controls v8 organizes 18 control families into three Implementation Groups. IG1 is basic cyber hygiene — the minimum every organization should have. IG2 builds on it for organizations with greater exposure. IG3 is the complete set, designed for organizations with significant regulatory obligations or that are high-value targets.

Reaching IG3 means every safeguard across all 18 control families is implemented and maintained:

| Control Family | What IG3 Adds |
|----------------|---------------|
| **01 – Asset Inventory** | Automated discovery; passive and active scanning; no unmanaged assets |
| **02 – Software Inventory** | Allowlist-based execution; no unauthorized software runs |
| **03 – Data Protection** | Full DLP; data classification tooling; data flow documentation |
| **04 – Secure Configuration** | Automated configuration management; drift detection and remediation |
| **05 – Account Management** | Full PAM; just-in-time privileged access; automated account reviews |
| **06 – Access Control** | Dynamic access based on role, device, and context |
| **07 – Vulnerability Management** | Continuous scanning; SLA-based remediation; risk-based prioritization |
| **08 – Audit Log Management** | Centralized SIEM; log integrity; 12-month retention minimum |
| **09 – Email and Web Protections** | Advanced threat protection; sandboxing; URL rewriting |
| **10 – Malware Defenses** | EDR on all endpoints; behavioral detection; automatic isolation |
| **11 – Data Recovery** | Tested, encrypted, immutable backups; documented RTO/RPO |
| **12 – Network Management** | Segmentation enforced; network flow monitoring; 802.1X or equivalent |
| **13 – Network Monitoring** | Full packet capture capability; IDS/IPS; anomaly detection |
| **14 – Security Awareness** | Role-based training; phishing simulations; security champions program |
| **15 – Service Provider Management** | Third-party risk program; contract security requirements; annual reviews |
| **16 – Application Security** | SAST/DAST in CI/CD; dependency management; pen testing cadence |
| **17 – Incident Response** | Documented, tested IR plan; tabletop exercises; defined escalation paths |
| **18 – Penetration Testing** | Annual third-party pen test; purple team exercises; findings tracked to closure |

---

### ISO/IEC 27001 — Certified and Continuously Audited

ISO 27001 is the international standard for Information Security Management Systems (ISMS). Certification is not a one-time achievement — it requires ongoing surveillance audits and full recertification every three years.

**What certification actually requires:**

An organization achieving ISO 27001 certification has:

- Defined the scope of its ISMS and documented it formally
- Conducted a structured risk assessment covering all in-scope information assets
- Applied a Statement of Applicability (SoA) — a documented decision on each of the 93 controls in Annex A, either implemented or formally excluded with justification
- Established and documented policies, procedures, and controls that address identified risks
- Demonstrated operational effectiveness — not just documented policies, but evidence that controls are working
- Passed an initial Stage 1 (documentation review) and Stage 2 (operational audit) with an accredited certification body

**What continuous compliance requires:**

Certification is maintained through:

- **Annual surveillance audits** — the certification body returns each year to verify continued compliance and review changes
- **3-year recertification** — full re-audit of the entire ISMS scope
- **Internal audits** — the organization conducts its own ISMS audits between external audits
- **Management reviews** — leadership formally reviews ISMS performance, risks, and objectives at defined intervals
- **Nonconformity tracking** — any audit finding triggers a documented corrective action with root cause analysis and closure verification
- **Continual improvement** — the ISMS itself must evolve as threats, technology, and the organization change

At Absolute Zero, ISO 27001 is not a certificate on the wall — it is an embedded operating model.

---

## How the Frameworks Align

The four frameworks are not redundant — they are complementary. Each one approaches security maturity from a different angle. NIST defines the architecture. CISA maps the operational pillars. CIS specifies the controls. ISO governs the management system. Progress in one accelerates progress in the others because they are solving the same underlying problem from different directions.

### Pillar-Level Alignment Map

CISA's five pillars provide the most concrete operational structure, making them the natural anchor for cross-framework alignment.

| CISA ZTMM Pillar | NIST 800-207 Tenets | CIS Controls v8 |
|------------------|---------------------|-----------------|
| **Identity** | Tenet 3 — per-session access<br>Tenet 4 — dynamic policy<br>Tenet 6 — dynamic auth/authz | CIS 5 — Account Management<br>CIS 6 — Access Control |
| **Devices** | Tenet 1 — all sources are resources<br>Tenet 4 — dynamic policy<br>Tenet 5 — continuous monitoring | CIS 1 — Asset Inventory<br>CIS 2 — Software Inventory<br>CIS 4 — Secure Configuration<br>CIS 10 — Malware Defenses |
| **Networks & Environments** | Tenet 2 — all comms secured<br>Tenet 5 — continuous monitoring | CIS 9 — Email and Web Protections<br>CIS 12 — Network Management<br>CIS 13 — Network Monitoring |
| **Applications & Workloads** | Tenet 1 — all sources are resources<br>Tenet 6 — dynamic auth/authz | CIS 2 — Software Inventory<br>CIS 7 — Vulnerability Management<br>CIS 16 — Application Security |
| **Data** | Tenet 2 — all comms secured<br>Tenet 7 — data collection for improvement | CIS 3 — Data Protection<br>CIS 8 — Audit Log Management |
| **Cross-cutting** | Tenet 5 — continuous monitoring<br>Tenet 7 — data collection | CIS 14 — Security Awareness<br>CIS 15 — Service Provider Management<br>CIS 17 — Incident Response<br>CIS 18 — Penetration Testing |

### ISO 27001 as the Governance Layer

ISO 27001 does not map neatly to individual pillars because it operates at a different level — it is the management system that governs all of them. Where NIST, CISA, and CIS tell you *what* to implement, ISO 27001 tells you *how to manage, document, audit, and continuously improve* that implementation.

This distinction matters practically:

- CISA ZTMM advancement requires documented policies and evidence of effectiveness. ISO 27001's ISMS documentation requirements generate exactly that evidence as a byproduct of compliance.
- CIS Controls require implementation. ISO 27001's Statement of Applicability (SoA) provides the formal record of which controls are in place and why.
- NIST 800-207 requires continuous monitoring and data collection. ISO 27001's internal audit and management review cycles provide the governance structure that makes continuous monitoring sustainable.

An organization building toward Absolute Zero can treat ISO 27001 certification as the audit harness that validates and documents everything else.

### Where Progress Compounds

Five relationships where advancing in one framework directly accelerates another:

**1. CIS 1 + 2 unlock CISA Devices advancement.**
You cannot reach CISA Devices Advanced or Optimal without knowing what devices exist and what software runs on them. CIS Controls 1 (Asset Inventory) and 2 (Software Inventory) are the prerequisite data layer. Do them first and CISA Devices progress follows naturally.

**2. CISA Identity Optimal operationalizes NIST Tenets 3, 4, and 6 simultaneously.**
Achieving just-in-time privileged access, risk-based dynamic access decisions, and universal phishing-resistant MFA — the Identity Optimal criteria — directly satisfies NIST's requirements for per-session access, dynamic policy, and dynamic authentication/authorization. One body of work, three tenets checked.

**3. CIS 8 (Audit Log Management) feeds both NIST Tenet 7 and ISO surveillance.**
A centralized SIEM with 12-month log retention and integrity controls satisfies NIST's requirement to collect security telemetry for posture improvement. The same logs are the primary evidence source for ISO 27001 surveillance audits. Building the logging infrastructure once serves both frameworks continuously.

**4. ISO 27001 documentation closes CISA ZTMM evidence gaps.**
CISA ZTMM maturity assessments require organizations to demonstrate — not just claim — that controls are working. ISO 27001's mandatory documentation (policies, procedures, audit records, nonconformity tracking) produces this evidence systematically. Organizations with an active ISMS typically advance faster through CISA ZTMM evaluations because the evidence already exists.

**5. NIST Tenet 5 is the engine behind every CISA Optimal designation.**
Every CISA pillar at Optimal requires real-time visibility and automated response. An organization cannot reach Optimal in any pillar without continuous monitoring infrastructure in place. NIST Tenet 5 (all assets are continuously monitored and validated) is the architectural commitment that makes Optimal achievable across all five pillars.

---

## What Comes Next

OZTP is defining the **Absolute Zero recognition program** — the criteria an organization must demonstrate to earn the designation. This is not a self-assessment checkbox. It is a structured, evidence-based evaluation built on the frameworks above.

If your organization is on this journey — or if you want to help build the recognition program — we want to hear from you.

[Start with the OZTP Top 10 ZT Controls →](top10.md){ .md-button .md-button--primary }
[Take the ZT Maturity Assessment →](products/zt-assessment.md){ .md-button }
[Contact OZTP →](community.md){ .md-button }

---

*The term "Absolute Zero" as applied to Zero Trust security maturity was introduced by the Open Zero Trust Project in 2026.*
