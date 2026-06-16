# Advisory: Zero Trust for Operational Technology — Volt Typhoon and the IT/OT Trust Gap

<div class="advisory-meta">
  <span class="advisory-badge badge-active">NATION-STATE THREAT</span>
  <span class="advisory-badge badge-sector">Critical Infrastructure</span>
  <span class="advisory-meta-text">Published June 16, 2026 &nbsp;·&nbsp; Based on CISA / DoD / FBI / DOE / DOS guidance, April 29, 2026</span>
</div>

[📄 Advisory Brief (2-page printable)](cisa-zt-ot-2026-brief.html){ .md-button target=_blank } [✉ Email to a Colleague](mailto:?subject=ZT%20Advisory%3A%20Zero%20Trust%20for%20OT%20%E2%80%94%20Volt%20Typhoon%20Warning&body=Sharing%20this%20Zero%20Trust%20advisory%20from%20the%20Open%20Zero%20Trust%20Project%20on%20the%20CISA%20Zero%20Trust%20for%20OT%20guidance.%0A%0AKey%20context%3A%20CISA%20has%20confirmed%20Volt%20Typhoon%20is%20actively%20prepositioning%20inside%20U.S.%20critical%20infrastructure%20OT%20networks.%20The%20goal%20is%20not%20immediate%20disruption%20%E2%80%94%20it%20is%20persistence%20for%20future%20physical%20damage%20capability.%0A%0AThe%20advisory%20covers%20the%20IT%2FOT%20convergence%20attack%20path%2C%20Zero%20Trust%20controls%20by%20pillar%2C%20and%20a%2090-day%20hardening%20path.%0A%0Ahttps%3A%2F%2Foztp.org%2Fadvisories%2Fcisa-zt-ot-2026%2F%0A%0AFree%20%E2%80%94%20no%20account%20required.){ .md-button }

---

!!! warning "Active Threat — Not Hypothetical"
    CISA has confirmed that Volt Typhoon — a Chinese state-sponsored group — has been actively prepositioning inside U.S. critical infrastructure networks for years. Their objective is not ransomware-style disruption today. It is persistent access — the ability to cause physical damage to power grids, water systems, pipelines, and communications infrastructure at a time of their choosing.

    On April 29, 2026, CISA, the Department of Defense, FBI, Department of Energy, and Department of State jointly published the first comprehensive federal guidance for applying Zero Trust to Operational Technology environments. This advisory translates that guidance into action.

---

## Executive Brief

For decades, industrial control systems and operational technology were considered safe because they were isolated. Air-gapped. Separate. The machines running a water treatment plant, a power substation, or a manufacturing floor operated on their own networks and spoke protocols that the broader internet had never heard of.

That era is over.

Efficiency demands, remote monitoring, and the cost benefits of connecting OT systems to corporate networks have steadily eroded that isolation. Today, most critical infrastructure environments run some form of IT/OT convergence — operational systems that can be reached, monitored, or managed from the same corporate network that connects to the internet. That convergence is useful. It is also exactly what Volt Typhoon exploits.

The attack is patient and methodical: compromise the corporate IT environment, steal Active Directory credentials, use those credentials to move laterally into adjacent OT networks, and establish persistence. Then wait. Living off the land — using legitimate vendor tools, standard protocols, and authorized accounts — they avoid the signatures that would trigger traditional detection. When the time comes to act, the access is already there.

The fundamental flaw that makes this possible is **implicit trust between IT and OT networks.** Organizations that would never allow a random laptop to access their SCADA systems allow the same access through shared Active Directory accounts, unmonitored vendor remote access, and IT-to-OT network segments with no enforcement layer. Zero Trust exists specifically to close this gap.

This advisory maps the CISA guidance to the five Zero Trust pillars, the [OZTP Top 10 Controls](../top10.md), and a realistic 90-day hardening path for organizations at any stage of OT security maturity.

---

## At a Glance

| | |
|---|---|
| **Issuing Agencies** | CISA, Department of Defense, FBI, Department of Energy, Department of State |
| **Guidance Published** | April 29, 2026 |
| **Named Threat Actor** | Volt Typhoon (Chinese state-sponsored) |
| **Attack Pattern** | IT credential theft → lateral movement into OT via shared identity |
| **Primary Technique** | Living off the Land (LOTL) — legitimate tools, no malware signatures |
| **Sectors at Risk** | Energy, water, manufacturing, transportation, communications, defense industrial base |
| **Consequence of Compromise** | Physical damage to infrastructure — not data loss |
| **Core ZT Failure Mode** | Implicit trust between IT and OT networks; shared Active Directory |
| **Unique OT Challenge** | Legacy systems with 50+ year lifecycles that cannot be patched, scanned, or run security agents |
| **Detection Gap** | LOTL techniques blend with legitimate OT operations; limited native logging on legacy devices |

---

## The Threat: Volt Typhoon's Playbook

Volt Typhoon is not a smash-and-grab operation. The group's known tactics describe a campaign built around patience: months or years of quiet persistence before any action is taken. CISA and its partner agencies have attributed this activity to the People's Republic of China.

The attack chain follows a consistent pattern:

1. **Initial Access via IT Environment** — The group targets the corporate IT network, typically through spearphishing, exposed VPNs, or exploitation of public-facing applications. The goal is not to steal data. It is to get a foothold.

2. **Active Directory Credential Theft** — Once inside the IT environment, attackers harvest Active Directory credentials. In most converged IT/OT environments, enterprise AD credentials provide direct access to OT management systems, HMIs (Human-Machine Interfaces), and engineering workstations.

3. **Lateral Movement into OT** — Using stolen credentials and legitimate tools already present in the environment — vendor software, remote desktop, WMI, PowerShell — attackers move from IT into OT. Because they are using authorized accounts and recognized tools, this traffic looks identical to normal operations.

4. **Persistent Prepositioning** — The group establishes redundant access paths, maps operational systems, and maintains presence over extended periods. They are not triggering alarms. They are waiting.

5. **Future Capability** — The goal is not immediate disruption. It is the ability to cause physical harm — disrupting industrial processes, disabling safety systems, or damaging equipment — at a strategically chosen moment.

!!! danger "The Living off the Land Problem"
    Traditional security detects malware. LOTL attacks use no malware. Volt Typhoon operates through legitimate tools already installed in the environment: standard remote access protocols, authorized vendor software, built-in operating system utilities. In an OT environment where the same vendor technician logs in every Tuesday at 9 AM, an attacker using the same account on Tuesday at 9 AM is nearly invisible. Zero Trust's answer is to verify **every** session, not just the first login.

---

## Why OT Is Not Just Industrial IT

The CISA guidance makes this point explicitly: IT-centric Zero Trust approaches cannot be applied wholesale to OT. The environments are fundamentally different in ways that matter for security design.

| Dimension | IT Environment | OT Reality |
|-----------|---------------|------------|
| **Tolerance for disruption** | Reboots and updates are expected | A forced reboot of a SCADA system can halt physical production or trigger safety incidents |
| **Device lifecycles** | 3–5 years typical | 20–50+ years; devices predate modern networking concepts |
| **Patching** | Monthly patch cycles standard | Patches require engineering review, vendor approval, scheduled downtime, regulatory sign-off |
| **Active scanning** | Safe; standard practice | Can crash or destabilize legacy PLCs and RTUs |
| **Security agents** | Deployed on all endpoints | Hardware constraints and warranty restrictions prohibit additional software |
| **Protocols** | Standard IP protocols with TLS | Modbus, DNP3, EtherNet/IP — no native authentication or encryption |
| **Consequence of compromise** | Data loss, operational slowdown | Physical damage, safety incidents, infrastructure failure |
| **Detection methods** | EDR agents, cloud SIEM | Passive observation at network boundaries; behavioral and specification-based analysis |

This is not a reason to avoid Zero Trust in OT. It is a reason to apply it differently — with passive discovery instead of active scanning, with soft segmentation instead of hard isolation, and with a recognition that availability is a safety requirement, not just an uptime preference.

---

## 5 Actions You Can Take Right Now

These apply to any organization that operates OT systems or manages the IT networks connected to them.

<div class="action-list">
<p><strong>1. Deploy network TAPs at every IT/OT boundary</strong><br>You cannot protect what you cannot see. Network TAPs (Test Access Points) provide passive visibility into traffic crossing the IT/OT boundary without disrupting live systems. This is your first ZT move — establish visibility before attempting enforcement. Active scanning is not appropriate for most OT environments and can crash legacy devices.</p>

<p><strong>2. Enforce MFA on every remote access path into OT — without exception</strong><br>Jump hosts (hardened servers that serve as the single authorized entry point for OT remote access) must require multi-factor authentication for every session. This applies to internal staff, vendors, and contractors. A shared password into a jump host is a single stolen credential away from full OT access.</p>

<p><strong>3. Separate OT Active Directory accounts from enterprise AD immediately</strong><br>Shared Active Directory is the direct enabler of the Volt Typhoon lateral movement path. OT systems should not be accessible using enterprise credentials. If full separation is not immediately feasible, implement conditional access policies that flag OT-bound authentication events and restrict enterprise accounts from OT systems.</p>

<p><strong>4. Audit and scope-limit all vendor and third-party remote access</strong><br>Most OT environments have vendor remote access that was never formally reviewed for scope, session logging, or access duration. Compile a complete list. For each: What systems can this account reach? Are sessions logged? Is access time-limited? Vendors should have read-only access to the minimum required systems, with full session logging — not standing administrative access.</p>

<p><strong>5. Review and table-top your OT incident response plan</strong><br>When Volt Typhoon moves from prepositioning to action, you will need to make decisions about containment under time pressure. "Soft segmentation" — carefully demarcated boundaries that contain a threat without disrupting physical processes — must be pre-planned and pre-authorized. Do not design your OT isolation procedures during an active incident. Build and test them now.</p>
</div>

---

## Zero Trust Controls That Apply

The five ZT pillars provide the structure for this advisory. Each section maps the CISA guidance to the pillar, calls out the specific OZTP Top 10 controls that apply, and describes both immediate and strategic mitigations.

---

### Pillar 1: Identity — Separate, Verify, Expire

**The problem:** In a converged IT/OT environment, enterprise Active Directory credentials often provide direct access to OT management systems. When Volt Typhoon steals credentials from the IT environment, they inherit whatever that credential was authorized to reach — including SCADA, HMIs, and engineering workstations.

**The ZT fix:** Identity in OT must be treated as a distinct domain. OT systems require their own identity infrastructure — separate from enterprise AD — with purpose-built accounts that cannot be used to traverse the IT/OT boundary in either direction. For accounts that must operate across that boundary, apply zero standing privilege: access is granted per-session, scoped to the minimum required, and expired automatically.

Emergency "break-glass" accounts for OT must exist, must be pre-authorized, must be time-limited, and must generate alerts on every use.

> *"Access to individual enterprise resources is granted per-session."*
> — NIST SP 800-207, Tenet 3

**Framework references:** CISA ZTMM Identity Pillar (Advanced) — Just-in-Time provisioning; NIST SP 800-207 §3.3; CIS Controls v8 #6

**OZTP Top 10 — applies directly:**

- **[#1 — Require MFA on Everything](../top10.md):** Jump hosts must enforce MFA for every session. There are no exceptions for convenience, vendor preference, or legacy integration. If the OT remote access system does not support MFA, replacing it is a near-term priority.
- **[#4 — Give Everyone the Minimum Access They Need](../top10.md):** OT accounts should be scoped to specific systems for specific purposes. A vendor account for a building automation system should not reach a SCADA controller in a different zone.
- **[#9 — Replace "Connected = Trusted" with Identity-Based Access](../top10.md):** ZTNA for OT replaces the assumption that anyone on the OT network segment is authorized. Access is verified per identity, per session, per resource — not inherited from network membership.
- **[#10 — Machines Have Identities Too. Secure Them.](../top10.md):** OT service accounts and device certificates require the same lifecycle management as human identities. Remove any hardcoded credentials from OT systems. Break-glass accounts must have pre-defined, time-limited lifespans — not indefinite standing access.

---

### Pillar 2: Devices — Know What You Have Before You Can Protect It

**The problem:** Many OT environments cannot produce a complete inventory of connected devices. Legacy PLCs, RTUs, and sensors were installed years or decades ago without documentation practices suited to a networked environment. Some devices run firmware that hasn't changed since installation. Some cannot be touched without engineering review. And active network scanning — standard practice in IT — risks destabilizing devices that were never designed to respond to probe traffic.

**The ZT fix:** OT asset discovery must be passive. Network TAPs and SPAN ports positioned at IT/OT boundary points and within OT zones capture traffic without touching the devices themselves. This traffic reveals what is communicating, what protocols it speaks, and from where. Passive discovery provides an inventory that active methods cannot safely produce.

The CISA guidance is explicit that initial inventory will be incomplete — and that is acceptable. Build the picture incrementally. Every device that enters the inventory is a device that can be factored into access decisions.

For new procurement, embed ZT requirements in purchasing specifications: any new OT device must support logging, authentication, and SBOM (Software Bill of Materials) disclosure. Devices that cannot meet this standard should not be purchased.

> *"The enterprise monitors and measures the integrity and security posture of all owned and associated assets."*
> — NIST SP 800-207, Tenet 6

**Framework references:** CISA ZTMM Devices Pillar — Asset Inventory; NIST SP 800-207 Tenet 6; CIS Controls v8 #1

**OZTP Top 10 — applies directly:**

- **[#2 — Know Every Device on Your Network](../top10.md):** OT asset visibility is the prerequisite for everything else. You cannot apply access controls to assets you don't know exist. Use passive monitoring via network TAPs — not active scanning. Deploy CISA's open-source [Malcolm SIEM](https://github.com/cisagov/Malcolm) for industrial protocol visibility if you have no existing OT-aware monitoring.

---

### Pillar 3: Networks — The IT/OT Boundary Is Your Most Important Segmentation Line

**The problem:** Most network segmentation efforts in IT focus on lateral movement within the enterprise — separating finance from HR, isolating the guest network, DMZ-ing internet-facing services. The IT/OT boundary often receives far less attention, even though it is the single most important segmentation boundary for critical infrastructure. Volt Typhoon's entire attack path runs through it.

**The ZT fix:** The IT/OT boundary should be treated as a hard enforcement point, not a routing hop. Traffic crossing from IT into OT should be:

- **Logged in full** at the boundary, regardless of whether anything looks suspicious
- **Protocol-aware:** OT protocols (Modbus, DNP3, EtherNet/IP) should be inspected and validated, not just passed through
- **Directionally controlled** where possible: data diodes enforce hardware-level unidirectional communication for OT-to-IT data flows that require no return path
- **Jump host mediated:** all human remote access into OT, whether internal or vendor, should pass through a hardened jump host that enforces MFA, session logging, and access scope

For systems that cannot be fully isolated without disrupting physical operations, soft segmentation defines the containment perimeter. This means pre-planned, pre-authorized network boundaries that can be activated quickly to contain a threat without halting the physical process. These must be designed and tested before an incident — not improvised during one.

> *"All communication is secured regardless of network location."*
> — NIST SP 800-207, Tenet 2

**Framework references:** CISA ZTMM Networks Pillar; NIST SP 800-207 §3.2; CIS Controls v8 #12

**OZTP Top 10 — applies directly:**

- **[#5 — Protect Admin Accounts Like the Crown Jewels](../top10.md):** In OT, the jump host IS the administrative access point. It is the single path through which all human access into OT flows. Harden it accordingly: MFA enforced, session recording enabled, access scoped to minimum required systems, no standing sessions. Compromise of the jump host is effectively compromise of the OT environment.
- **[#7 — Divide Your Network — Assume the Attacker Is Already Inside](../top10.md):** For critical infrastructure, extend this assumption to both networks: assume an attacker is already inside the IT environment. The IT/OT boundary must stop lateral movement even when IT is fully compromised. This is the threat model CISA is designing to.

---

### Pillar 4: Applications & Workloads — Secure the Protocols and the Software

**The problem:** The industrial protocols that OT systems speak — Modbus, DNP3, EtherNet/IP, PROFINET — were designed for reliability and speed in isolated environments. Authentication and encryption were not design requirements. An attacker with access to the OT network can issue legitimate-looking commands to PLCs and RTUs without any credential. There is nothing to steal. There is nothing to bypass. The protocol simply does not check.

At the workstation and HMI (Human-Machine Interface) layer, OT engineering software is often outdated, rarely patched, and runs on Windows systems configured for stability rather than security. Many vendor contracts explicitly restrict security software from being installed.

**The ZT fix:** Legacy protocols cannot be updated in place. The OT-appropriate solution is wrapping: place a secure gateway at the protocol boundary that handles authentication, TLS encryption, and access control externally, without modifying the device. Traffic between the gateway and the legacy device remains in the native protocol; everything between the gateway and the broader network is secured.

For OT workstations where it is feasible, application allowlisting prevents unauthorized code execution. A Windows HMI running only its vendor-specified engineering software has a known, limited attack surface — one that allowlisting can enforce. WDAC (Windows Defender Application Control) provides this capability natively.

Patch management in OT requires a different framework than IT. The CISA guidance recommends Stakeholder-Specific Vulnerability Categorization (SSVC) — a risk-based approach that weighs the actual exploitation risk of a vulnerability against the downtime risk of patching. When immediate patching is not possible, increase monitoring and implement compensating controls around the vulnerable system.

> *"All enterprise resources are authenticated and authorized."*
> — NIST SP 800-207, Tenet 1

**Framework references:** CISA ZTMM Applications & Workloads Pillar; NIST SP 800-207 §3.1; CIS Controls v8 #2, #4

**OZTP Top 10 — applies directly:**

- **[#3 — Control What Software Can Run](../top10.md):** OT engineering workstations and HMIs are prime targets. An allowlist of approved binaries prevents malware execution even on systems that cannot receive regular patches. For OT workstations with fixed, vendor-specified software sets, allowlisting is both highly effective and operationally realistic.
- **[#6 — Encrypt What Matters, Everywhere It Lives](../top10.md):** When native protocol encryption is unavailable (which is most legacy OT), use TLS-enabled gateways at zone boundaries. Prioritize encrypting data flows that cross the IT/OT boundary and any flows that carry OT commands or configuration data. Real-time process values where latency is a safety requirement may not tolerate encryption overhead — design accordingly.

---

### Pillar 5: Data — OT Backups Are Not IT Backups

**The problem:** Standard IT backup practices — daily snapshots, cloud backup of files — are inadequate for OT recovery. When an OT system fails after a cyberattack, restoring a file backup is not enough. The engineering logic that controls physical processes, the I/O lists that define what every sensor and actuator does, the configuration values that represent years of tuning — none of this is typically captured in a standard file backup.

Detection is also a data problem. Legacy OT devices have limited native logging. In an environment built for reliability, logging was often deprioritized. The CISA guidance recommends concentrating logging resources at IT/OT junction points — where visibility is feasible and where the most dangerous traffic crosses — rather than attempting complete logging of every device.

Baseline-based and specification-based detection are the primary methods for environments with limited logging:

- **Baseline-based:** statistical models of normal behavior; deviations trigger alerts
- **Specification-based:** explicit definition of valid behaviors, like a whitelist of valid Modbus function codes; anything outside that specification is flagged

**The ZT fix:** Define and capture OT-specific backup content: engineering logic, ladder diagrams, configuration files, I/O lists, startup values, cause-and-effect matrices. Validate these backups through checksum testing before they are ever needed. Store them offline and protected. Know exactly how long recovery takes from a known-good state — that is your actual recovery time objective.

At IT/OT boundary points, deploy packet capture and logging with OT protocol awareness. CISA's open-source Malcolm SIEM supports industrial protocol parsing and is designed specifically for this use case.

> *"The enterprise collects data about the current state of assets, network infrastructure and communications and uses it to improve its security posture."*
> — NIST SP 800-207, Tenet 7

**Framework references:** CISA ZTMM Visibility & Analytics Pillar; NIST SP 800-207 Tenet 7; CIS Controls v8 #8, #11

**OZTP Top 10 — applies directly:**

- **[#8 — Log Everything. You Will Need It Later.](../top10.md):** In OT, "everything" is constrained by what legacy devices can produce. Start at the boundaries — IT/OT junction points, jump hosts, vendor access gateways — where logging is both feasible and highest value. Work inward from there as visibility improves. An attacker spending months inside an OT environment before acting is detectable if you are watching the right places. The boundary is the right place to start.

---

## Recommended 90-Day Hardening Path

This path applies to any organization with OT systems or IT networks connected to them. Prioritize by threat exposure: organizations in energy, water, manufacturing, or communications sectors with internet-connected OT systems face the highest immediate risk.

| Timeframe | Priority Actions |
|-----------|----------------|
| **Days 1–7** | Deploy network TAPs at IT/OT boundaries · Enforce MFA on all jump hosts and OT remote access · Compile complete list of vendor/third-party OT access accounts · Export IT/OT boundary logs for the last 90 days |
| **Days 8–30** | Conduct passive asset discovery · Separate or isolate OT Active Directory accounts from enterprise AD · Table-top OT incident response plan including soft segmentation procedures · Audit vendor access scope and enable full session logging |
| **Days 31–90** | Deploy Malcolm SIEM or equivalent for industrial protocol visibility · Implement SSVC-based OT patch prioritization process · Add ZT requirements (logging, SBOM, ICAM support) to OT procurement specifications · Document and validate OT-specific backups: engineering logic, I/O lists, configuration files |

[Ask Agent Zeta for OT-specific guidance →](../chat.md){ .md-button }

---

## OZTP Top 10 — Full Mapping for This Advisory

| Top 10 Control | Applicable? | OT-Specific Context |
|----------------|-------------|---------------------|
| [#1 — MFA on Everything](../top10.md) | **Critical** | Jump hosts must enforce MFA without exception. This is the primary access control for OT remote entry. |
| [#2 — Know Every Device](../top10.md) | **Critical** | Passive discovery only — active scanning can crash legacy OT devices. |
| [#3 — Control What Software Can Run](../top10.md) | **High** | OT workstations and HMIs are fixed-function; allowlisting is highly effective. |
| [#4 — Least Privilege](../top10.md) | **Critical** | OT accounts must not carry IT-level scope. Separate AD is the structural enforcement. |
| [#5 — Protect Admin Accounts](../top10.md) | **Critical** | The jump host is the administrative control plane for OT. Treat it accordingly. |
| [#6 — Encrypt What Matters](../top10.md) | **High** | Native encryption unavailable on legacy protocols — use TLS gateways at zone boundaries. |
| [#7 — Divide Your Network](../top10.md) | **Critical** | The IT/OT boundary is the highest-value segmentation line. Assume IT is already compromised. |
| [#8 — Log Everything](../top10.md) | **High** | Logging is limited by legacy device constraints — concentrate at boundaries and junction points first. |
| [#9 — Identity-Based Access](../top10.md) | **Critical** | Network location must never imply authorization in a converged IT/OT environment. |
| [#10 — Machine Identities](../top10.md) | **High** | OT service accounts and break-glass credentials require lifecycle management and automatic expiry. |

---

## Sources

This advisory was published June 16, 2026 and is based on the joint guidance released April 29, 2026 by CISA, the Department of Defense, FBI, Department of Energy, and Department of State.

- [Adapting Zero Trust Principles to Operational Technology — CISA (official guidance page)](https://www.cisa.gov/resources-tools/resources/adapting-zero-trust-principles-operational-technology)
- [CISA and U.S. Government Partners Unveil Guide to Accelerate Zero Trust Adoption in Operational Technology — CISA press release](https://www.cisa.gov/news-events/news/cisa-and-us-government-partners-unveil-guide-accelerate-zero-trust-adoption-operational-technology)
- [CISA Zero Trust for OT — CSA Research Note](https://labs.cloudsecurityalliance.org/research/csa-research-note-cisa-zero-trust-operational-technology-202/)
- [New CISA Guidance Outlines Zero Trust Roadmap for OT Environments — Industrial Cyber](https://industrialcyber.co/zero-trust/new-cisa-guidance-outlines-zero-trust-roadmap-for-ot-environments-facing-legacy-constraints-and-growing-attack-surfaces/)
- [Zero Trust for OT: What the New CISA Guidance Means for Your Industrial Operations — DTS](https://www.dts-solution.com/zero-trust-for-ot-what-the-new-cisa-guidance-means-for-your-industrial-operations/)
- [CISA Zero Trust for OT — WaterISAC advisory note](https://www.waterisac.org/tlpclear-cisa-guidance-adapting-zero-trust-principles-to-operational-technology)
- [Malcolm SIEM — CISA open-source industrial protocol visibility tool](https://github.com/cisagov/Malcolm)
- [NIST SP 800-207 — Zero Trust Architecture](https://doi.org/10.6028/NIST.SP.800-207)
- [CISA Zero Trust Maturity Model v2](https://www.cisa.gov/zero-trust-maturity-model)

---

*ZT Advisories are produced by the Open Zero Trust Project. All framework references are to publicly available standards. This advisory is for informational purposes and does not constitute legal or security consulting advice.*
