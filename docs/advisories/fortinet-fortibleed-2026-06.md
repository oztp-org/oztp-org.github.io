# Advisory: FortiBleed — Mass Credential Exposure on Internet-Facing Fortinet Devices

<div class="advisory-meta">
  <span class="advisory-badge badge-active">ACTIVE — NO PATCH APPLIES</span>
  <span class="advisory-badge badge-sector">Firewall &amp; VPN Operators, All Sectors</span>
  <span class="advisory-meta-text">Published July 4, 2026 &nbsp;·&nbsp; Based on CISA Alert, June 18, 2026</span>
</div>

[✉ Email to a Colleague](mailto:?subject=ZT%20Advisory%3A%20FortiBleed%20%E2%80%94%20Mass%20Credential%20Exposure%20on%20Fortinet%20Devices&body=Sharing%20this%20Zero%20Trust%20advisory%20from%20the%20Open%20Zero%20Trust%20Project%20on%20FortiBleed.%0A%0AKey%20facts%3A%20CISA%20confirmed%20roughly%2086%2C644%20internet-facing%20Fortinet%20firewalls%20and%20VPN%20gateways%20have%20had%20admin%20or%20VPN%20credentials%20exposed%20%E2%80%94%20nearly%20half%20of%20all%20internet-facing%20FortiGate%20devices.%20There%20is%20no%20CVE%20and%20no%20patch%3A%20this%20is%20a%20credential%20and%20exposure%20problem%2C%20not%20a%20software%20bug.%0A%0AThe%20advisory%20covers%20how%20the%20exposure%20happened%2C%20immediate%20mitigations%2C%20and%20why%20Zero%20Trust%20matters%20specifically%20for%20perimeter%20devices%20like%20firewalls%20and%20routers.%0A%0Ahttps%3A%2F%2Foztp.org%2Fadvisories%2Ffortinet-fortibleed-2026-06%2F%0A%0AFree%20%E2%80%94%20no%20account%20required.){ .md-button }

---

!!! warning "Status — July 4, 2026: No CVE, No Patch, Ongoing Exploitation"
    FortiBleed is not a software vulnerability. There is no patch that closes it. It is a mass credential exposure — tens of thousands of Fortinet firewall and VPN admin credentials, many of them default or never-rotated, are circulating and being actively tested against internet-facing devices.

    **If your organization runs a FortiGate firewall or Fortinet SSL VPN with an internet-reachable management interface, assume your admin credentials are part of an active target list until you have rotated them and enabled MFA.**

---

## Executive Brief

Between June 13 and June 17, 2026, security researcher **Volodymyr "Bob" Diachenko** discovered a threat actor's own staging server left open on the internet — complete with tooling, cracking scripts, and logs. Inside was a dataset of credentials for **roughly 86,644 unique Fortinet devices across 194 countries**, including FortiGate firewalls and SSL VPN gateways. That figure represents close to **half of all internet-facing Fortinet firewalls** worldwide.

The dataset — now tracked as **FortiBleed** — was not built from a single flaw. Researchers found the attackers combined several techniques: automated credential-reuse attempts (over **1.16 billion login attempts** against more than **320,000 FortiGate targets**), offline cracking of SSL VPN authentication hashes intercepted during login handshakes (using a 45-GPU cluster managed through the open-source Hashtopolis framework), and aggregation of older leaked configuration files, phishing hauls, and malware logs. Roughly **63% of the exposed accounts were default or built-in Fortinet system accounts** — credentials many administrators never changed from the factory default.

On June 18, 2026, **CISA issued an alert** urging every Fortinet customer to treat this as active, not hypothetical: terminate existing admin and VPN sessions, reset every Fortinet credential, enable phishing-resistant MFA, and get management interfaces off the public internet.

The detail that matters most for Zero Trust: **there is no CVE and no patch for this.** FortiBleed is a credential and exposure problem, not a code defect. Patching your FortiGate does nothing to fix it. Only changing *how much trust the device and its admin interface are extended* — by identity, by network position, and by default — closes this gap.

---

## At a Glance

| | |
|---|---|
| **Campaign Name** | FortiBleed |
| **Discovered** | June 13–17, 2026 (researcher Volodymyr "Bob" Diachenko) |
| **CISA Alert** | June 18, 2026 |
| **Confirmed Exposure** | ~86,644 unique Fortinet devices, 194 countries — ~half of internet-facing FortiGate firewalls |
| **Affected Products** | FortiGate firewalls, Fortinet SSL VPN gateways |
| **CVE** | None — this is not a software vulnerability |
| **Patch Available** | No patch closes this. Credential reset + hardening is the only remediation |
| **Attack Vector** | Exposed management interfaces, credential-reuse automation (1.16B+ attempts), offline cracking of intercepted VPN auth hashes |
| **Root Cause** | Internet-exposed admin/VPN interfaces combined with default or never-rotated credentials (~63% of exposed accounts) |
| **What an Attacker Gets** | Administrative control of the firewall or VPN gateway — the network's perimeter enforcement point |

---

## The Zero Trust Principle This Breaks

> **The device that enforces your trust boundary is not exempt from it.**

Most organizations treat their firewall or VPN gateway as the thing that *establishes* trust for everything behind it — not as an asset that itself needs to be verified, monitored, and denied by default. FortiBleed shows exactly what happens when that assumption holds: an attacker who compromises the perimeter device's admin credentials inherits the trust that device was supposed to be gatekeeping.

Zero Trust architecture (NIST SP 800-207) makes no exception for network infrastructure. A firewall, router, or VPN concentrator is a device like any other in the ZT model — its identity, its access, and its administrative sessions must be continuously verified, not assumed safe because of what it does for the rest of the network.

---

## How the Exposure Happened

FortiBleed was not a single exploit. It was the accumulation of weak identity and network hygiene around internet-facing Fortinet devices, harvested through several parallel techniques:

1. **Credential-reuse automation.** Attackers built lists of known and leaked Fortinet credentials and tested them, at scale, against every reachable FortiGate device — an estimated 1.16 billion authentication attempts against more than 320,000 targets.
2. **Offline hash-cracking.** Where reuse failed, attackers intercepted SSL VPN authentication hashes during the login handshake itself and cracked them offline using a dedicated 45-GPU cluster orchestrated with Hashtopolis, an open-source distributed password-cracking framework.
3. **Multi-source aggregation.** Large credential sets like this are rarely built from one event. Researchers found the dataset blended configuration-file leaks, phishing hauls, credential-stuffing lists, and malware infostealer logs collected over time.
4. **Default credentials, never rotated.** Of the exposed accounts, roughly 35% were generic admin accounts, 28.3% were built-in Fortinet system accounts, and 36.7% were organization-specific — meaning nearly two-thirds of everything exposed was default or semi-default access that administrators never changed after initial deployment.

None of this required a zero-day. It required an internet-reachable management interface and a credential an attacker could either guess, reuse, or crack.

---

## Who Is at Risk

**Any organization running a FortiGate firewall or Fortinet SSL VPN gateway** — especially where:

- The administrative web interface or SSH management port is reachable from the public internet
- Admin or VPN accounts use default, shared, or long-unrotated passwords
- No multi-factor authentication is enforced on administrative or VPN logins
- There is no monitoring for configuration exports, unusual admin logins, or new administrator accounts

This spans small businesses running a single branch firewall to large enterprises and government agencies with fleets of FortiGate appliances at every site and remote-access gateway.

---

## Immediate Mitigations

There is no patch. These are the actions CISA is asking every Fortinet customer to take now.

<div class="action-list">
<p><strong>1. Terminate all active SSL VPN and administrative sessions, then reset every Fortinet credential</strong><br>
Assume any existing session or credential may already be compromised. Reset all VPN and administrative passwords — especially on internet-facing systems — and enforce a strong, unique password policy going forward.</p>

<p><strong>2. Enable phishing-resistant multi-factor authentication on every administrative and VPN account</strong><br>
A reused or cracked password stops being useful to an attacker the moment MFA is required. Prioritize FIDO2/hardware-key or certificate-based MFA over SMS or app-based codes where the device supports it.</p>

<p><strong>3. Take the management interface off the public internet</strong><br>
Restrict FortiGate management access (web GUI, SSH, API) to trusted internal networks only. If remote administration is required, place it behind a separate VPN or bastion host — never expose it directly.</p>

<p><strong>4. Remove or disable unauthorized and unnecessary accounts</strong><br>
Audit every administrator account on every device. Remove default accounts that are not in active use, and confirm every remaining account traces back to a known, current administrator.</p>

<p><strong>5. Move to modern credential hashing (PBKDF2) where supported</strong><br>
Older or weaker hashing algorithms make offline cracking faster once a hash is intercepted. Configure devices to use PBKDF2 for stored admin credentials where Fortinet firmware supports it.</p>

<p><strong>6. Review logs for compromise indicators</strong><br>
Treat the following as strong signals of a breach in progress: configuration-file export events to an external destination IP, administrator logins from geographic locations or IP ranges outside your normal management pattern, and new administrator accounts created outside your standard provisioning workflow.</p>
</div>

---

## Zero Trust Controls That Apply

### Reactive Controls — Do Now

| Control | What to Do | Framework Reference |
|---------|-----------|-------------------|
| **Inventory every internet-facing Fortinet device** | Identify every FortiGate firewall and SSL VPN gateway with any management or VPN interface reachable from the public internet. This is your priority list. | CISA ZTMM Devices Pillar — Asset Management |
| **Force credential rotation + MFA on admin/VPN accounts** | Reset every Fortinet admin and VPN password. Enforce phishing-resistant MFA before re-enabling remote administrative access. | CISA ZTMM Identity Pillar — Strong Authentication |
| **Pull management interfaces behind a broker, not the open internet** | Require a VPN, bastion host, or ZTNA gateway to reach any firewall admin interface — never route it directly from the internet. | CISA ZTMM Network Pillar — Network Segmentation |
| **Baseline and alert on admin behavior** | Establish what normal admin login geography, timing, and account provisioning looks like. Alert on deviations — especially config exports to unfamiliar destinations. | CISA ZTMM Visibility & Analytics Pillar |

---

### Preventative Controls — ZT Architecture for Perimeter Devices

FortiBleed is as much a lesson about firewalls and routers generally as it is about Fortinet specifically. Internet-connected network devices are frequently the least-monitored, least-rotated, most-trusted assets in an environment — exactly the opposite of what Zero Trust asks for.

#### Identity: Perimeter Admin Access Deserves the Strongest Authentication, Not the Weakest

**The problem:** The credential that controls your firewall or VPN gateway is one of the highest-value credentials in your environment — full network visibility, the ability to redirect traffic, disable logging, or open new access paths. Yet it is routinely protected by nothing more than a password, sometimes never changed from the factory default.

**The ZT fix:** Treat network-device administrator accounts as privileged identities, governed the same way as domain admin: mandatory phishing-resistant MFA, no standing/always-on access, just-in-time elevation through a privileged access management (PAM) layer, and credential vaulting instead of static passwords memorized or shared among staff.

> *"Access to individual enterprise resources is granted on a per-session basis... using multi-factor authentication."*
> — NIST SP 800-207, §2.1

**Reference:** CISA ZTMM Identity Pillar (Optimal maturity) — Phishing-resistant MFA, continuous identity risk assessment.

---

#### Network: Management Planes Should Never Be Directly Internet-Routable

**The problem:** FortiBleed's entire attack surface depended on management and VPN authentication interfaces being reachable from anywhere on the internet. That reachability is what let credential-stuffing bots and hash interception happen at scale in the first place.

**The ZT fix:** The administrative plane of any firewall, router, or VPN gateway should sit behind its own access broker — a bastion host, a separate management VPN, or a ZTNA proxy that verifies identity and device posture before a single packet reaches the login prompt. Data-plane traffic (the traffic the firewall is protecting) and management-plane traffic (the traffic that configures the firewall) should never share the same exposure.

> *"Macro and micro-segmentation are used to isolate resources... network traffic is filtered per session."*
> — CISA Zero Trust Maturity Model, Network Pillar

**Reference:** CISA ZTMM Network Pillar (Advanced/Optimal maturity) — Segmented, broker-mediated access to management infrastructure.

---

#### Devices: Your Firewall Is a Device Too — Continuously Verify It

**The problem:** Organizations that run continuous compliance checks on every laptop often treat their firewalls and routers as "install and forget" trust anchors — no configuration drift detection, no scheduled credential rotation, no health monitoring of the device itself.

**The ZT fix:** Network infrastructure belongs in the same continuous device-verification program as endpoints: configuration and firmware integrity baselining, scheduled credential rotation (not "set once at deployment"), and automated alerting the moment a device's configuration or admin roster changes outside a known maintenance window.

> *"All devices used by the enterprise are continuously validated, monitored, and assessed for their cybersecurity posture."*
> — CISA Zero Trust Maturity Model, Devices Pillar

**Reference:** CISA ZTMM Devices Pillar (Optimal maturity) — Continuous device health validation, applied to infrastructure, not just endpoints.

---

#### Blast-Radius Containment: Assume the Perimeter Will Eventually Be Breached

**The problem:** In a perimeter-first network design, the firewall isn't just a control point — it's a single point of failure. Once an attacker holds firewall admin access, they frequently inherit visibility and reach into everything the firewall was protecting, because internal traffic was never re-verified once it crossed the boundary.

**The ZT fix:** Zero Trust assumes breach. Internal resources should authenticate and authorize every request on its own merits — regardless of whether the traffic originated "inside" the network the firewall protects. A compromised perimeter device should cost an attacker a foothold, not the whole network. This is the same anti-single-point-of-failure logic behind our [Stop the SPOF](../blog/posts/stop-the-spof.md) analysis of past breaches.

> *"Never trust, always verify... regardless of location relative to enterprise-owned network boundaries."*
> — NIST SP 800-207, §1

**Reference:** NIST SP 800-207 §3.4 — Trust is never granted implicitly based on network location.

---

## Sources

This advisory was published July 4, 2026 and reflects publicly reported information as of that date. It will be updated if CISA issues further guidance or if the confirmed device count materially changes.

- [CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure — CISA](https://www.cisa.gov/news-events/alerts/2026/06/18/cisa-urges-hardening-fortinet-devices-after-reports-credential-exposure)
- [CISA urges device hardening after thousands of Fortinet credentials compromised — Cybersecurity Dive](https://www.cybersecuritydive.com/news/cisa-device-hardening-thousands-fortinet-credentials-compromised/823397/)
- [CISA warns Fortinet users to secure devices after FortiBleed leak — BleepingComputer](https://www.bleepingcomputer.com/news/security/cisa-warns-fortinet-users-to-secure-devices-after-fortibleed-leak/)
- [FortiBleed: 86,000 Fortinet Device Credentials Compromised — SecurityWeek](https://www.securityweek.com/fortibleed-86000-fortinet-device-credentials-compromised/)
- [Technical Advisory: FortiBleed Credential Exposure Campaign Targeting Internet-Facing Fortinet Devices — Bitdefender](https://businessinsights.bitdefender.com/technical-advisory-fortibleed-credential-exposure-campaign-targeting-internet-facing-fortinet-devices)
- [FortiBleed: Default Credential Exploitation and Mass Fortinet Compromise — Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-fortibleed-default-credentials-20260620-cs/)
- [CISA Warns of Active Exploitation Following FortiBleed Leak — Security Affairs](https://securityaffairs.com/193902/hacking/cisa-warns-of-active-exploitation-following-fortibleed-leak.html)
- [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [CISA Zero Trust Maturity Model v2](https://www.cisa.gov/zero-trust-maturity-model)

---

*ZT Advisories are produced by the Open Zero Trust Project. All framework references are to publicly available standards. This advisory is for informational purposes and does not constitute legal or security consulting advice.*
