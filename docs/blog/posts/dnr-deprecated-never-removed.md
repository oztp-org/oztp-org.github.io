---
date: 2026-05-17
authors:
  - oztp
categories:
  - Research
---

# DNR: Deprecated, Never Removed

On May 12, 2026, a security researcher released a working exploit that defeats Windows BitLocker encryption using nothing more than a USB stick and a few minutes of physical access. The vulnerability — named YellowKey — doesn't exploit a new piece of Windows code. It exploits a piece of code that was **supposed to be dead**.

Transactional NTFS (TxF), the Windows file system feature at the heart of YellowKey, was deprecated by Microsoft more than a decade ago. Developers were told to stop using it. No new applications should depend on it. But it was never removed — and in 2026, an attacker can use it to read everything on an "encrypted" drive.

We have a name for this class of vulnerability: **DNR**.

<!-- more -->

## Defining DNR

**DNR — Deprecated, Never Removed**: a vulnerability class in which a software feature, utility, or code path is officially deprecated — announced as retired, discouraged, or superseded — but remains present in the codebase, unmaintained, unmonitored, and ultimately exploitable.

The term borrows its resonance from medicine. A DNR order says: do not attempt to revive this. In software, deprecated features receive the equivalent of a DNR notice — a formal declaration that they're on their way out. The difference is that in medicine, the patient eventually stops breathing. In software, deprecated code often survives indefinitely, accumulating dust and attack surface in equal measure.

The gap between "deprecated" and "removed" is where attackers find their footholds.

---

## YellowKey: The DNR That Unlocks BitLocker

TxF was designed to make file system operations more reliable by applying database-style transaction logging to NTFS. Microsoft deprecated it around 2012, citing complexity and limited adoption. The official guidance was clear: don't build new things on TxF, migrate away if you're using it.

What never happened: removing TxF from Windows.

YellowKey exploits WinRE's behavior of automatically replaying TxF transaction logs found on attached drives. An attacker places a crafted log on a USB stick, boots the target device into WinRE, and the log replay deletes `winpeshl.ini` — the file that controls the recovery shell. Without it, WinRE falls back to `cmd.exe`, with the BitLocker-protected drive already mounted and readable.

A deprecated feature, never removed, just broke one of Windows' core security guarantees.

[Full technical advisory and mitigations →](../../advisories/yellowkey-2026-05.md){ .md-button }

---

## DNR Is a Pattern, Not an Anomaly

YellowKey is the freshest example, but DNR vulnerabilities appear consistently across operating systems, protocols, and frameworks — wherever the cost of *removing* something feels greater than the cost of leaving it in.

### NTLM

Microsoft has been deprecating NTLM — the legacy Windows authentication protocol — for decades. NT LAN Manager was superseded by Kerberos in Windows 2000. It has well-documented vulnerabilities: relay attacks, pass-the-hash, and hash capture via freely available tools like Responder. Formal deprecation guidance has been restated as recently as 2023.

NTLM is still enabled by default in Windows today.

Every Windows penetration test checks for NTLM relay opportunities. The attack surface didn't have to be there — it simply was never removed.

### LLMNR and NetBIOS

Link-Local Multicast Name Resolution (LLMNR) and NetBIOS Name Service (NBT-NS) are name resolution protocols that predate modern DNS. Both have long been superseded. Both are exploitable via poisoning attacks: an attacker on the local network responds to LLMNR or NetBIOS queries with a forged response, capturing NTLMv2 hashes that can then be cracked offline or relayed to other systems.

Both protocols are still enabled by default in Windows.

Combined with NTLM, this creates one of the most common internal network attack chains in penetration testing — an attack that would not exist if deprecated features were actually retired.

### RC4 in TLS

The RC4 stream cipher was deprecated for use in TLS in 2015 (RFC 7465 explicitly prohibits it). By then, multiple practical attacks against RC4 in TLS had been publicly demonstrated. The deprecation was not contested — RC4 was simply broken.

What followed was years of slow removal across browsers, servers, and TLS libraries. Organizations that didn't actively audit their TLS configuration remained exposed long after the official deprecation. RC4 wasn't in use because anyone thought it was safe — it was in use because deprecated doesn't mean gone, and removal requires active work that often doesn't happen.

---

## Why DNR Vulnerabilities Are Persistent

DNR vulnerabilities recur for predictable reasons.

**Backwards compatibility pressure.** Removing deprecated code can break things. Something — a legacy application, an old device, a forgotten integration — might depend on it. The fear of breakage outlasts the security case for removal.

**Deprecation without enforcement.** Deprecating a feature requires a documentation update. Removing it requires testing, validation, and accepting breakage risk. Organizations do the easy part and defer the hard part indefinitely.

**No one owns "actually remove it."** Deprecation is usually driven by an API or product team. Removal is often nobody's explicit responsibility. It falls into the backlog, survives release cycles, and eventually becomes load-bearing in ways no one anticipated.

**Security teams aren't always in the loop.** The decision to deprecate a feature is a product or engineering decision. The security implications of *not* removing it may not surface until an attacker finds the gap — sometimes years or decades later.

---

## What Zero Trust Says About This

Zero Trust architecture has a clear directive that applies here: **continuously minimize attack surface**.

NIST SP 800-207 defines Zero Trust as requiring that "access to individual enterprise resources is granted on a per-session basis" and that "the enterprise collects data about the current state of assets." Neither goal can be fully achieved when systems are running deprecated code paths that can no longer be audited or controlled.

Deprecated features that remain in place are attack surface that was supposed to go away. A ZT hardening program should explicitly include:

- **Inventory deprecated features and protocols** in your environment — not just new capabilities, but what's running that shouldn't be
- **Disable deprecated protocols where not actively required** — LLMNR, NetBIOS, NTLMv1, weak TLS ciphers — these are almost never required and frequently exploitable
- **Test for DNR attack surface** as part of your security assessment — Responder, BloodHound, and similar tools will surface it if it's there
- **Treat deprecation notices as removal timelines**, not indefinite deferrals — put a date on removal and hold to it

YellowKey is the current headline. The next DNR vulnerability is already waiting in a codebase somewhere — deprecated, never removed, patient.

---

## A Starting Point

Agent Zeta can help you map your current device and network configuration against relevant Zero Trust controls, including common DNR attack surfaces.

[Ask Agent Zeta →](../../chat.md){ .md-button }
[Take the ZT Maturity Assessment →](../../products/zt-assessment.md){ .md-button }

---

*DNR (Deprecated, Never Removed) is a vulnerability class term introduced by the Open Zero Trust Project, May 2026. If you reference this term, a link back is appreciated.*
