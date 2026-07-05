---
title: AZ Foundations — Learning Objectives
description: The published draft learning objectives for the AZ Foundations certification, part of the Absolute Zero Academy.
---

# Absolute Zero (AZ) Foundations — Learning Objectives

**Status:** Published Draft — Open for Public Feedback  
**Scaffolding:** Bloom’s Taxonomy  
**Format:** Bloom’s Level + Exam Type per objective  
**Audience:** Security professionals and students with baseline security knowledge  

These are the working learning objectives for the **AZ Foundations** certification, the entry tier of the [Absolute Zero Academy](absolute-zero-academy.md). They are published here as a draft, not a final curriculum — we want practitioner feedback before locking them in.

**Have feedback?** Tell us what's missing, what's out of scope for a Foundations-level exam, or where the wording could be sharper. [Contact OZTP →](contact.md)

---

## Domain 1: What is Zero Trust?
*Domain Total: 21 Objectives | PBQ Candidates: 4*

### Section 1.1 — Defining Zero Trust
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 1.1.1 | Define Zero Trust in three sentences or fewer, without vendor or product references | L2 | Knowledge |
| 1.1.2 | State the three core ZT tenets: Never Trust Always Verify, Least Privilege, Assume Breach | L1 | Knowledge |
| 1.1.3 | Explain why "never trust, always verify" applies to users, devices, and network traffic equally | L2 | Knowledge |
| 1.1.4 | Contrast Zero Trust with perimeter-based security and explain why the perimeter model is insufficient in modern environments | L4 | Compare/contrast — PBQ candidate |
| 1.1.5 | Identify the factors that dissolved the traditional perimeter: cloud adoption, remote work, BYOD, SaaS proliferation | L1 | Knowledge |
| 1.1.6 | Explain Default Deny as a foundational ZT posture and contrast it with Default Allow | L2/L4 | Compare/contrast |
| 1.1.7 | Define Least Privilege and describe how it limits blast radius when a breach occurs | L1/L2 | Knowledge |
| 1.1.8 | Explain the Assume Breach mindset and describe how it changes security design decisions | L2 | Knowledge |
| 1.1.9 | Define the "Fail-Closed" paradigm and contrast it with legacy "Fail-Open" architectures regarding confidentiality versus availability | L2 | Knowledge |

### Section 1.2 — ZT Across the Computing Environment
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 1.2.1 | Describe how ZT principles apply at the device level for both physical and virtual machines | L2 | Knowledge |
| 1.2.2 | Explain how ZT applies within a network segment and identify why lateral movement is a primary concern at this scope | L2/L3 | Scenario |
| 1.2.3 | Describe ZT considerations specific to wireless networks (WLAN) including device trust and traffic inspection | L2 | Knowledge |
| 1.2.4 | Explain how ZT extends across a WAN and describe why VPN alone is insufficient as a ZT control | L2/L4 | Compare/contrast |
| 1.2.5 | Describe what org-wide Zero Trust looks like and identify the five pillars that must be addressed at organizational scope | L2/L1 | Knowledge |
| 1.2.6 | Explain why ZT is a philosophy applied consistently across all scopes rather than a product deployed at one layer | L2 | Knowledge |
| 1.2.7 | Identify a Single Point of Failure (SPOF) in a described environment and explain why ZT architecture is designed to survive individual control failures | L1/L2 | Scenario — PBQ candidate |
| 1.2.8 | Describe how legacy Layer 2 infrastructure behaves under confusion (e.g., Unicast Flooding via MAC Flooding) and explain why Zero Trust requires hardware-enforced port security containment | L2/L3 | Scenario — PBQ candidate |

### Section 1.3 — ZT vs. What Came Before
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 1.3.1 | Explain Defense in Depth and describe how ZT extends rather than replaces it | L2 | Knowledge |
| 1.3.2 | Contrast implicit trust (perimeter model) with explicit verification (ZT model) in a given access scenario | L4 | Scenario — PBQ candidate |
| 1.3.3 | Describe the trust assumptions that made perimeter security work historically and explain why those assumptions no longer hold | L2 | Knowledge |
| 1.3.4 | Explain why cloud-hosted services and remote users cannot be protected by a network perimeter | L2 | Knowledge |

---

## Domain 2: Controls, Layered Defense, and the Modern Threat Landscape
*Domain Total: 20 Objectives | PBQ Candidates: 4*

### Section 2.1 — Control Types and Their Roles
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 2.1.1 | Define preventative, detective, and corrective controls and provide a real-world example of each | L1/L2 | Knowledge |
| 2.1.2 | Classify a given control as preventative, detective, or corrective when presented in a scenario | L2 | Scenario |
| 2.1.3 | Classify a given control as technical, administrative, or physical | L2 | Scenario |
| 2.1.4 | Explain why a preventative control that fails without a detective control behind it allows a breach to go undetected | L2 | Knowledge |
| 2.1.5 | Contrast application control (allowlisting) and application containment as preventative controls, and explain the difference in their approach | L4 | Compare/contrast |
| 2.1.6 | Explain how Default Deny implemented at the application layer defeats entire classes of attack without requiring threat signatures | L2 | Knowledge |
| 2.1.7 | Define a protocol downgrade attack and explain how a strict, non-backwards-compatible cryptographic policy enforces a Fail-Closed posture at the edge | L2 | Knowledge |

### Section 2.2 — Layered Defense and Assume Breach
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 2.2.1 | Explain why no single control is sufficient and describe how layered controls reduce overall risk | L2 | Knowledge |
| 2.2.2 | Describe the relationship between preventative and detective controls in an assume-breach architecture | L2 | Knowledge |
| 2.2.3 | Explain the assume-breach mindset and identify how it changes the role of detective controls | L2/L1 | Knowledge |
| 2.2.4 | Apply the assume-breach mindset to a described environment and identify which control layers are absent | L3 | Scenario — PBQ candidate |
| 2.2.5 | Explain why complexity in security architecture increases risk and describe how simple controls applied consistently reduce attack surface | L2 | Knowledge |
| 2.2.6 | Identify a control gap in a described layered security stack and classify what type of control is missing | L3 | Scenario — PBQ candidate |
| 2.2.7 | Explain how to protect a Fail-Closed architecture from intentional weaponization (e.g., malicious trigger-DDoS) using micro-segmentation to isolate blast radius and high-availability redundancy to maintain operations | L3/L4 | Scenario — PBQ candidate |

### Section 2.3 — The Modern Threat Landscape
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 2.3.1 | Describe how cloud adoption, remote work, and SaaS expansion have increased the attack surface organizations must defend | L2 | Knowledge |
| 2.3.2 | Explain Living off the Land (LOtL) attacks and describe why they evade signature-based detection | L2 | Knowledge |
| 2.3.3 | Explain how application control and Default Deny defeat LOtL attacks at the preventative layer | L2 | Knowledge |
| 2.3.4 | Describe how AI-accelerated threats increase attack velocity and explain why assume-breach is the appropriate response posture | L2 | Knowledge |
| 2.3.5 | Explain the role of threat hunting as a detective control and describe why it is necessary in an assume-breach environment | L2 | Knowledge (awareness only) |
| 2.3.6 | Contrast reactive security (respond after detection) with proactive security (assume breach, hunt continuously) | L4 | Compare/contrast |
| 2.3.7 | Describe edge infrastructure exploitation methodologies (e.g., VPNFilter or Volt Typhoon router manipulation) and identify the specific logging and account lockout controls required to expose ongoing stealth attacks | L2/L3 | Scenario — PBQ candidate |

---

## Domain 3: ZT Frameworks and the Five Pillars
*Domain Total: 33 Objectives | PBQ Candidates: 3*

### Section 3.1 — Why Frameworks Matter
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.1.1 | Explain the purpose of a security framework and describe how frameworks provide a common language for assessing and communicating ZT maturity | L2 | Knowledge |
| 3.1.2 | Identify the four primary frameworks used in ZT practice: NIST SP 800-207, CISA ZTMM v2, CIS Controls v8, ISO/IEC 27001 | L1 | Knowledge |
| 3.1.3 | Describe how the four frameworks complement rather than compete with each other | L2 | Knowledge |
| 3.1.4 | Explain the concept of ZT maturity and describe why it is a spectrum rather than a binary state | L2 | Knowledge |

### Section 3.2 — NIST SP 800-207: The ZT Tenets
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.2.1 | State the seven NIST ZT tenets from SP 800-207 | L1 | Knowledge |
| 3.2.2 | Explain each NIST tenet in plain language and relate it to a real-world control or policy | L2 | Knowledge |
| 3.2.3 | Describe the NIST concept of a Policy Decision Point (PDP) and Policy Enforcement Point (PEP) and explain how they implement continuous verification | L2 | Knowledge |
| 3.2.4 | Apply the NIST tenets to a described scenario and identify which tenets are satisfied or violated | L3 | Scenario — PBQ candidate |

### Section 3.3 — CISA ZTMM v2: The Five Pillars
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.3.1 | Name and describe the five CISA ZTMM pillars: Identity, Devices, Networks, Applications, Data | L1/L2 | Knowledge |
| 3.3.2 | Explain the three CISA ZTMM maturity stages — Traditional, Advanced, Optimal — and describe what each looks like in practice | L2 | Knowledge |
| 3.3.3 | Describe the Identity pillar and identify the key controls that advance maturity within it | L2 | Knowledge |
| 3.3.4 | Describe the Devices pillar and identify how device posture verification supports ZT | L2 | Knowledge |
| 3.3.5 | Describe the Networks pillar and explain how microsegmentation and default deny reduce lateral movement | L2 | Knowledge |
| 3.3.6 | Describe the Applications pillar and explain the role of least privilege access and continuous authorization | L2 | Knowledge |
| 3.3.7 | Describe the Data pillar and identify how data classification and encryption support ZT data protection | L2 | Knowledge |
| 3.3.8 | Map a described security control to its primary CISA ZTMM pillar | L3 | Scenario — PBQ candidate |
| 3.3.9 | Explain why a single security event often crosses multiple pillars and provide an example | L2 | Knowledge |

### Section 3.4 — CIS Controls v8
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.4.1 | Explain the purpose of the CIS Controls and describe how Implementation Groups (IG1, IG2, IG3) prioritize controls by organizational size and risk | L2 | Knowledge |
| 3.4.2 | Identify which CIS Controls are most directly aligned with ZT principles | L2 | Knowledge |
| 3.4.3 | Describe IG1 as a minimum baseline and explain why it represents the floor, not the ceiling, for ZT-aligned organizations | L2 | Knowledge |

### Section 3.5 — ISO/IEC 27001: Awareness Level
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.5.1 | Describe the purpose of ISO/IEC 27001 and its role as an information security management framework | L2 | Knowledge |
| 3.5.2 | Explain how ISO 27001 complements ZT by providing governance and auditability structure | L2 | Knowledge |
| 3.5.3 | Distinguish between ISO 27001 certification (organizational) and ZT maturity (architectural) as different but compatible goals | L4 | Compare/contrast |

### Section 3.6 — Networking and Identity Fundamentals Anchored to the Pillars
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 3.6.1 | Identify the seven OSI layers and explain at which layers common ZT network controls operate | L1/L2 | Knowledge |
| 3.6.2 | Describe the TCP/IP model and map it to the OSI model | L2 | Knowledge |
| 3.6.3 | Explain the role of MAC and IP addressing in device identity and network segmentation | L2 | Knowledge |
| 3.6.4 | Describe the function of DNS, TLS, SSH, and LDAP and explain their relevance to ZT network and identity controls | L2 | Knowledge |
| 3.6.5 | Explain PKI — certificate authorities, public/private key pairs, certificate revocation — and describe how PKI underpins ZT identity verification | L2 | Knowledge |
| 3.6.6 | Distinguish between authentication and authorization and apply the distinction to an access control scenario | L4/L3 | Scenario |
| 3.6.7 | Describe the IAM lifecycle and explain the ZT risk posed by orphaned or over-privileged accounts | L2 | Knowledge |
| 3.6.8 | Define MFA, classify common factor types, and explain why MFA is a foundational Identity pillar control | L1/L2 | Knowledge |
| 3.6.9 | Contrast Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) and identify which is more granular | L4 | Compare/contrast |
| 3.6.10 | Contrast a Fail-Open handshake protocol with a Fail-Closed handshake protocol during an abnormal negotiation session (e.g., invalid certificates or degraded ciphers) | L4 | Compare/contrast |

---

## Domain 4: Reading and Assessing Environments
*Domain Total: 22 Objectives | PBQ Candidates: 7*

### Section 4.1 — What a ZT Assessment Is
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 4.1.1 | Explain the purpose of a ZT assessment and describe how it differs from a vulnerability scan or penetration test | L2/L4 | Compare/contrast |
| 4.1.2 | Describe the difference between a self-assessment and a third-party assessment and explain when each is appropriate | L2 | Knowledge |
| 4.1.3 | Explain what a ZT maturity assessment measures and describe how results map to the CISA ZTMM maturity stages | L2 | Knowledge |
| 4.1.4 | Describe the role of continuous assessment in a ZT architecture and explain why point-in-time audits are insufficient | L2 | Knowledge |

### Section 4.2 — Reading Posture Reports and Findings
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 4.2.1 | Interpret a device posture report and identify which findings represent ZT control gaps | L3 | Scenario — PBQ candidate |
| 4.2.2 | Classify a posture finding as a pass, warning, or failure and explain the criteria for each classification | L2/L3 | Scenario |
| 4.2.3 | Identify the difference between a misconfigured control and an absent control in a posture report | L3 | Scenario — PBQ candidate |
| 4.2.4 | Explain what a device health state (healthy, warning, attention) communicates and describe what conditions trigger each state | L2 | Knowledge |
| 4.2.5 | Interpret an assessment result showing pillar-level maturity scores and identify which pillars require immediate attention | L3 | Scenario — PBQ candidate |

### Section 4.3 — Mapping Findings to Pillars and Control Types
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 4.3.1 | Map a described finding or gap to its primary CISA ZTMM pillar | L3 | Scenario |
| 4.3.2 | Explain why a single gap often affects multiple pillars and provide an example | L2 | Knowledge |
| 4.3.3 | Classify a finding as a preventative, detective, or corrective control gap | L3 | Scenario |
| 4.3.4 | Apply the assume-breach mindset to a set of findings and identify which gaps most increase exposure if a breach is already in progress | L3/L4 | Scenario — PBQ candidate |

### Section 4.4 — Risk Prioritization Basics
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 4.4.1 | Explain basic risk prioritization and describe how likelihood and impact together determine which gaps to address first | L2 | Knowledge |
| 4.4.2 | Apply a simple risk matrix to a set of ZT findings and rank them by remediation priority | L3 | Scenario — PBQ candidate |
| 4.4.3 | Explain why a missing preventative control with no detective fallback is higher priority than a misconfigured control with detective coverage | L2 | Knowledge |
| 4.4.4 | Describe the concept of a remediation roadmap and explain how it translates assessment findings into ordered actions | L2 | Knowledge |

### Section 4.5 — Using Assessment Tools
| # | Objective | Bloom's | Exam Type |
| :--- | :--- | :---: | :--- |
| 4.5.1 | Describe the role of automated posture checking in continuous ZT assessment | L2 | Knowledge |
| 4.5.2 | Explain how a device agent contributes to ZT device pillar visibility and identify what data it provides to an assessment | L2 | Knowledge |
| 4.5.3 | Describe how an AI-assisted ZT advisor supports assessment by mapping organization responses to framework maturity levels | L2 | Knowledge |
| 4.5.4 | Distinguish between agent-based posture data (device-level, continuous) and survey-based assessment data (org-level, point-in-time) and explain the value of combining both | L4 | Compare/contrast — PBQ candidate |

---

## Final Blueprint Metrics

| Domain | Objectives | PBQ Candidates |
| :--- | :---: | :---: |
| **D1: What is Zero Trust?** | 21 | 4 |
| **D2: Controls, Layered Defense, Modern Threats** | 20 | 4 |
| **D3: Frameworks and Five Pillars** | 33 | 3 |
| **D4: Reading and Assessing Environments** | 22 | 7 |
| **Total** | **96** | **18** |

---

*Known gaps we're already tracking for a future revision: a dedicated supply-chain-attack section (Domain 2) and OS-native application control coverage — WDAC, AppArmor/SELinux, Gatekeeper (Domain 3). Targeting a review pass in Q4 2026, informed by feedback gathered here.*
