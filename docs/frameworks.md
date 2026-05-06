---
hide:
  - toc
---

# Frameworks We Align With

OZTP does not invent its own maturity model. Every control, recommendation, and assessment question maps back to a recognized external standard. This page explains what each framework covers, how OZTP supports your work toward it, and where to read the source.

---

## NIST SP 800-207 — Zero Trust Architecture { #nist-sp-800-207 }

**What it is.** The U.S. National Institute of Standards and Technology's foundational publication defining Zero Trust Architecture (ZTA). It describes the logical components of a ZTA — Policy Engine, Policy Administrator, Policy Enforcement Point — and the trust algorithm that ties them together. It is the conceptual reference that most other Zero Trust guidance builds on.

**How OZTP helps.** Our products are designed around 800-207's separation of concerns. The **Control Platform** acts as a Policy Decision Point for device posture; the **Device Agent** is a Policy Enforcement Point on the endpoint. **Agent Zeta** explains 800-207 concepts in plain language and helps you map your existing controls to its component model.

**Read the source.** [NIST SP 800-207 (PDF, csrc.nist.gov)](https://csrc.nist.gov/publications/detail/sp/800-207/final){ target="_blank" rel="noopener" }

---

## CISA Zero Trust Maturity Model v2 { #cisa-ztmm-v2 }

**What it is.** The Cybersecurity and Infrastructure Security Agency's practical maturity model for Zero Trust, organized around five pillars — Identity, Devices, Networks, Applications & Workloads, and Data — plus three cross-cutting capabilities (Visibility & Analytics, Automation & Orchestration, Governance). Each pillar is graded across four maturity stages: Traditional, Initial, Advanced, Optimal.

**How OZTP helps.** This is the framework most directly reflected in our tooling. The **ZT Maturity Assessment** is structured around CISA's five pillars and four stages. **Agent Zeta** uses ZTMM v2 as its primary advisory framework when answering questions or grading posture. The **Device Agent** focuses on the Devices pillar; the **Control Platform** contributes to Visibility & Analytics.

**Read the source.** [CISA Zero Trust Maturity Model (cisa.gov)](https://www.cisa.gov/zero-trust-maturity-model){ target="_blank" rel="noopener" }

---

## CIS Controls v8 { #cis-controls-v8 }

**What it is.** The Center for Internet Security's prioritized set of 18 cybersecurity controls and 153 safeguards, distilled from real-world attack data. CIS Controls are broader than Zero Trust — they cover the full cybersecurity hygiene baseline — but many controls (asset inventory, secure configuration, access control management, application control) align directly with Zero Trust principles.

**How OZTP helps.** Coverage is partial and intentional. The **Device Agent** contributes evidence for Controls 1 (Inventory of Enterprise Assets), 2 (Inventory and Control of Software Assets), and 4 (Secure Configuration). **Agent Zeta** can answer questions about CIS Controls, but our Zero Trust tooling does not attempt to cover the entire CIS catalog — frameworks like CIS are best paired with broader IT operations practices.

**Read the source.** [CIS Controls v8 (cisecurity.org)](https://www.cisecurity.org/controls/v8){ target="_blank" rel="noopener" }

---

## ISO/IEC 27001 { #iso-27001 }

**What it is.** The international standard for Information Security Management Systems (ISMS). 27001 is a management-system standard — it specifies how an organization establishes, operates, monitors, and improves its security program — paired with Annex A controls drawn from ISO/IEC 27002. It is broader than Zero Trust and is most often used as the basis for formal certification.

**How OZTP helps.** Coverage is advisory, not certification-grade. **Agent Zeta** can map specific Zero Trust controls back to relevant Annex A objectives so your ISMS documentation reflects them, and the **Device Agent's** posture evidence can support technical control objectives (A.5 Access Control, A.8 Asset Management). OZTP is not a substitute for an auditor or a full ISMS implementation.

**Read the source.** [ISO/IEC 27001 (iso.org)](https://www.iso.org/standard/27001){ target="_blank" rel="noopener" }

---

## A Note on Coverage

Two of these frameworks — NIST SP 800-207 and CISA ZTMM v2 — are Zero Trust-specific, and OZTP supports them deeply. The other two — CIS Controls v8 and ISO/IEC 27001 — are broader information-security frameworks that overlap with Zero Trust in important ways but extend well beyond it. We align with the Zero Trust-relevant portions of each and are explicit about what we do not cover.

If you are working toward formal certification or a specific compliance outcome, OZTP is one input alongside your auditor, your GRC tooling, and your broader security program — not a replacement for any of them.
