# Advisory: YellowKey — BitLocker Bypass via WinRE

<div class="advisory-meta">
  <span class="advisory-badge badge-active">UNPATCHED ZERO-DAY</span>
  <span class="advisory-badge badge-sector">All Windows Organizations</span>
  <span class="advisory-meta-text">Published May 17, 2026 &nbsp;·&nbsp; Monitoring June 10, 2026 (Patch Tuesday)</span>
</div>

[✉ Email to a Colleague](mailto:?subject=ZT%20Advisory%3A%20YellowKey%20%E2%80%94%20BitLocker%20Bypass%20via%20WinRE&body=Sharing%20this%20Zero%20Trust%20advisory%20from%20the%20Open%20Zero%20Trust%20Project%20on%20the%20YellowKey%20BitLocker%20bypass.%0A%0AKey%20facts%3A%20Unpatched%20zero-day%20affecting%20Windows%2011%20and%20Windows%20Server%202022%2F2025.%20An%20attacker%20with%20brief%20physical%20access%20and%20a%20USB%20stick%20can%20read%20the%20full%20contents%20of%20a%20BitLocker-encrypted%20drive.%0A%0AThe%20advisory%20covers%20how%20the%20attack%20works%2C%20immediate%20mitigations%2C%20and%20Zero%20Trust%20controls.%0A%0Ahttps%3A%2F%2Foztp.org%2Fadvisories%2Fyellowkey-2026-05%2F%0A%0AFree%20%E2%80%94%20no%20account%20required.){ .md-button }

---

!!! warning "Status — May 17, 2026: Unpatched, No CVE"
    Microsoft has acknowledged YellowKey but has not released a fix or assigned a CVE. The researcher has indicated a "big surprise" for Microsoft around **June 10, 2026 (Patch Tuesday)**. This advisory will be updated when a patch or CVE is issued.

    **If your Windows devices use BitLocker in TPM-only mode — the default for most deployments — your encrypted drives are accessible to anyone with brief physical access and a USB stick.**

---

## Executive Brief

On May 12, 2026, a security researcher operating as **Chaotic Eclipse** released a working proof-of-concept exploit that defeats **Windows BitLocker drive encryption** on Windows 11, Windows Server 2022, and Windows Server 2025. The attack requires nothing more than physical access to the device and a prepared USB stick — no password, no credentials, no tools beyond a crafted folder.

The technique exploits **Windows Recovery Environment (WinRE)**, a built-in troubleshooting mode present on all Windows devices. By placing a specially crafted folder on a USB stick, an attacker causes WinRE to silently delete the file that controls the recovery shell. The system falls back to a full command prompt — with the BitLocker-protected drive already mounted and readable.

This is not a theoretical attack. A working proof-of-concept has been publicly released. No patch exists as of this publication.

---

## At a Glance

| | |
|---|---|
| **Vulnerability Name** | YellowKey |
| **Researcher** | Chaotic Eclipse / Nightmare-Eclipse |
| **Disclosed** | May 12, 2026 |
| **CVE** | Not assigned |
| **Patch Available** | No — monitoring June 10, 2026 (Patch Tuesday) |
| **Affected Systems** | Windows 11, Windows Server 2022, Windows Server 2025 |
| **Attack Vector** | Physical access + USB drive (< 5 minutes) |
| **What an Attacker Gets** | Full read access to BitLocker-encrypted drive contents |
| **Most Exposed Configuration** | TPM-only BitLocker (the default for most deployments) |
| **TPM+PIN also vulnerable?** | Researcher claims yes — PoC not yet released |
| **CISA Advisory** | None as of publication — will update if issued |
| **PoC Publicly Released?** | Yes |

---

## The Zero Trust Principle This Breaks

> **Physical presence is not trust.**

Zero Trust architecture explicitly rejects the assumption that physical access to a device — or a building — confers any level of trust. NIST SP 800-207 treats every device, every session, and every location as potentially hostile until verified.

YellowKey is a reminder that **encryption at rest is only as strong as the system that enforces it**. A BitLocker-encrypted drive in an unattended laptop, a shared workspace, or an unlocked office is accessible to anyone with a USB stick and a few minutes alone with the machine.

---

## How the Attack Works

Windows Recovery Environment (WinRE) is the troubleshooting mode that boots when Windows encounters a startup problem. It's designed to help repair broken Windows installations and is present on every Windows 11 and Server 2022/2025 system.

WinRE has a built-in behavior: when it starts, it looks for a special folder called `\System Volume Information\FsTx` on attached drives. This folder is part of **Transactional NTFS (TxF)** — a file system feature that logs operations like a database transaction log so they can be replayed or rolled back. Microsoft deprecated TxF around 2012 and told developers to stop using it. It was never removed from Windows.

The YellowKey attack:

1. The attacker places a crafted `FsTx` folder on a USB stick containing a fake transaction log
2. The log instructs Windows to delete `winpeshl.ini` — the file that tells WinRE which recovery interface to load
3. The attacker boots the target device into WinRE while the USB is plugged in (holding Ctrl during boot)
4. WinRE finds the USB, replays the fake TxF log, and deletes `winpeshl.ini`
5. With no `winpeshl.ini` to direct it, WinRE falls back to `cmd.exe`
6. The BitLocker-protected drive is already mounted at this point — WinRE needs drive access for recovery — so everything is readable from the command prompt

The result: a full Windows command prompt with read access to every file on the "encrypted" drive.

!!! info "A DNR Vulnerability"
    TxF (Transactional NTFS) was officially deprecated by Microsoft more than a decade ago. Developers were told to stop using it. But the code was never removed from Windows. YellowKey exploits that gap between "deprecated" and "removed."

    We call this class of vulnerability a **DNR — Deprecated, Never Removed**: features that were officially retired but remained in the codebase, unmaintained, unmonitored, and ultimately exploitable. See our [companion blog post](../blog/posts/dnr-deprecated-never-removed.md) for a deeper look at the DNR pattern and other examples.

---

## Who Is at Risk

**Every Windows 11 and Windows Server 2022/2025 device running BitLocker in TPM-only mode.** This includes:

- Laptops used outside the office, at home, or while traveling
- Devices in shared or publicly accessible spaces
- Unattended workstations
- Servers in co-located or shared data centers
- Any device that could be briefly accessed by an unauthorized person

TPM-only BitLocker is the default configuration for most enterprise deployments. Most users and administrators have it without knowing it.

---

## Immediate Mitigations

No patch exists. These controls reduce your risk today.

<div class="action-list">
<p><strong>1. Enable BitLocker pre-boot PIN (switch from TPM-only to TPM+PIN)</strong><br>
This requires a PIN to be entered before Windows loads — before WinRE can mount the drive. An attacker cannot trigger the exploit without the PIN. This is the single highest-impact action for this vulnerability.<br>
<em>Group Policy: Computer Configuration → Administrative Templates → Windows Components → BitLocker Drive Encryption → Operating System Drives → "Require additional authentication at startup" → Enable → "Require startup PIN with TPM"</em><br>
<strong>Note:</strong> The researcher claims a TPM+PIN bypass also exists but has not released that proof-of-concept. Enabling a PIN significantly raises the bar and is still strongly recommended pending a patch.</p>

<p><strong>2. Set a UEFI/BIOS firmware password</strong><br>
A firmware password prevents an attacker from changing the boot order, disabling Secure Boot, or enabling USB boot without first entering the password. Without this, an attacker can set USB as the boot priority regardless of your current BIOS settings. This is complementary to BitLocker PIN — apply both.</p>

<p><strong>3. Disable USB boot in UEFI settings</strong><br>
If your devices have no legitimate need to boot from USB, disable it in firmware settings. This directly blocks the USB delivery mechanism for YellowKey. Always pair with a firmware password so the setting cannot be changed without authorization.</p>

!!! tip "Default Deny: If Your Org Already Restricts USB"
    Organizations that enforce **default deny on USB devices** at the hardware or OS level — via Group Policy, MDM, endpoint management, or physical port blocking — are already practicing the right posture. That control significantly reduces your attack surface across many threat types.

    However, note that **OS-level USB restrictions and UEFI USB boot are separate controls**. Blocking USB storage devices in Windows (via Group Policy or MDM) does not prevent an attacker from booting from a USB drive — that is controlled independently in UEFI firmware settings. Confirm both are addressed: USB storage restricted at the OS level *and* USB boot disabled in UEFI.

<p><strong>4. Apply physical access controls appropriate to data sensitivity</strong><br>
This attack requires physical access. Devices in publicly accessible areas, shared spaces, or unattended environments carry higher risk. Review where your highest-value endpoints live and apply controls accordingly: cable locks, locked rooms, escort policies for sensitive areas.</p>

<p><strong>5. Monitor for unexpected WinRE entry events</strong><br>
Windows logs WinRE entry in the system event log (Event ID 1796 in the Microsoft-Windows-Diagnostics-Performance log). Establish a baseline of expected recovery mode activity. Any WinRE boot outside of IT support windows — especially on endpoints — should generate an alert.</p>
</div>

---

## Zero Trust Controls That Apply

### Reactive Controls — Do Now

| Control | What to Do | Framework Reference |
|---------|-----------|-------------------|
| **Audit BitLocker mode across all endpoints** | Identify every device running TPM-only mode. Prioritize laptops, remote worker devices, and systems with access to sensitive data. PowerShell: `manage-bde -status` or query via MDM. | CISA ZTMM Devices Pillar — Device Compliance |
| **Enable BitLocker PIN on high-risk devices first** | Start with executive laptops, remote worker devices, and endpoints with access to sensitive or regulated data. Roll out via Group Policy or MDM. | NIST SP 800-207 Tenet 1 — All data sources are resources that must be protected |
| **Lock UEFI boot settings on managed endpoints** | Set firmware passwords and disable USB boot on all managed devices. Include in your device configuration baseline. | CIS Controls v8 #4 — Secure Configuration of Enterprise Assets |
| **Inventory devices in uncontrolled physical environments** | Flag endpoints in shared spaces, public areas, or co-located facilities for priority remediation. Physical exposure = elevated risk. | CISA ZTMM Devices Pillar — Asset Management |

---

### Preventative Controls — ZT Architecture

#### Devices: Verify Continuously, Not Once at Boot

**The problem:** BitLocker TPM-only mode provides a one-time check — the TPM releases the encryption key at boot if the system state looks correct. YellowKey shows that WinRE also triggers key release. The device is never continuously verifying that the person at the console is authorized.

**The ZT fix:** Device trust should be enforced at every authentication event, not assumed from boot-time encryption state. MDM-enforced compliance policies (Microsoft Intune, Jamf, or equivalent) can detect whether a device has the expected BitLocker configuration and block access to corporate resources for non-compliant devices.

> *"All devices used by the enterprise are continuously validated, monitored, and assessed for their cybersecurity posture."*  
> — CISA Zero Trust Maturity Model, Devices Pillar

**Reference:** CISA ZTMM Devices Pillar (Optimal maturity) — Continuous device health validation, compliance-gated access to resources.

---

#### Physical Security Is a Zero Trust Control

**The problem:** Most Zero Trust frameworks focus on network, identity, and application controls. Physical access is often treated as a separate domain. That separation is exactly what this attack exploits.

**The ZT fix:** In a ZT model, physical access to a device is equivalent to network access. If an attacker can hold your laptop for five minutes, they can bypass disk encryption. Physical controls — locked rooms, clean-desk policies, cable locks for high-value endpoints, escort policies in sensitive areas — are not separate from ZT. They are part of the Devices pillar.

> *"The enterprise monitors and measures the integrity and security posture of all owned and associated assets."*  
> — NIST SP 800-207, Tenet 7

**Reference:** NIST SP 800-207 §3.3 — Trust Algorithm inputs include physical location and device state.

---

#### Visibility: Recovery Mode Should Be a Monitored Event

**The problem:** WinRE is a legitimate and frequently used tool — for IT support, recovery after failed updates, and troubleshooting. Most organizations have no monitoring in place for when it runs, for how long, or from what trigger.

**The ZT fix:** Any WinRE boot that does not correspond to a known IT support activity should generate an alert. This does not prevent YellowKey but creates a detection window. If an attacker uses WinRE to access a drive, you want to know — even after the fact.

**Reference:** CISA ZTMM Visibility & Analytics Pillar — Endpoint telemetry and anomaly detection baselines.

---

## Sources

This advisory was published May 17, 2026. It will be updated when a patch or CVE is issued — expected no later than June 10, 2026 (Patch Tuesday).

- [Windows BitLocker zero-day gives access to protected drives, PoC released — BleepingComputer](https://www.bleepingcomputer.com/news/security/windows-bitlocker-zero-day-gives-access-to-protected-drives-poc-released/)
- [Windows Zero-Days Expose BitLocker Bypasses And CTFMON Privilege Escalation — The Hacker News](https://thehackernews.com/2026/05/windows-zero-days-expose-bitlocker.html)
- [BitLocker Bypass Found In Latest Series of Windows Vulns — Privacy Guides](https://www.privacyguides.org/news/2026/05/15/bitlocker-bypass-found-researcher-warns-of-more-unreleased-vulnerabilities/)
- [Researcher Drops YellowKey, GreenPlasma Windows Zero-Days — SecurityWeek](https://www.securityweek.com/researcher-drops-yellowkey-greenplasma-windows-zero-days/)
- [May 2026 Patch Tuesday and the YellowKey BitLocker Bypass — Secure in Seconds](https://www.secureinseconds.com/blog/2026-05-15-patch-tuesday-may-2026-bitlocker-zero-day)
- [Windows BitLocker Zero-Day (YellowKey): What the WinRE Bypass Means for SMBs — Cyber Unit](https://cyberunit.com/insights/windows-bitlocker-zero-day-yellowkey-winre-bypass/)
- [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [CISA Zero Trust Maturity Model v2](https://www.cisa.gov/zero-trust-maturity-model)

---

*ZT Advisories are produced by the Open Zero Trust Project. All framework references are to publicly available standards. This advisory is for informational purposes and does not constitute legal or security consulting advice.*
