---
date: 2026-06-22
authors:
  - oztp
categories:
  - Incidents
  - Identity
---

# When the Door Is Left Open

A recent law enforcement announcement out of Central Florida carries a headline designed to shock: a former government employee now faces the possibility of spending the rest of her life in prison after allegedly warning a fentanyl trafficking organization about active arrest warrants. The perp walk has happened. The charges have been filed.

But there is a second story here — one that no press conference addressed. And from a Zero Trust perspective, it may be the more important one.

<!-- more -->

## This Was a Breach

Let's be precise about what happened. A former juvenile probation officer — terminated from her position in late 2022 — allegedly accessed the Comprehensive Case Information System (CCIS), a statewide government database of court records, 246 times between January and May 2026. She had no active caseload. She had no legitimate business need. She had no current employment with any agency authorized to use the system.

She did, however, have working credentials.

Under any reasonable definition, this is a data breach. Confidential information — active arrest warrants tied to an ongoing drug trafficking investigation — was accessed without authorization, extracted, and shared with a criminal organization. That the access used a technically valid login does not make it authorized. It makes it a textbook example of [MITRE ATT&CK T1078: Valid Accounts](https://attack.mitre.org/techniques/T1078/) — one of the most commonly exploited techniques in the threat landscape precisely because it bypasses perimeter defenses entirely. A fired employee's stale credential looks identical to a legitimate one if no one is checking.

The collection stage maps to [T1213: Data from Information Repositories](https://attack.mitre.org/techniques/T1213/) — systematically querying a government database to harvest actionable intelligence and pass it to an outside party.

This is an insider threat. The human element is real. But the organizational failure that made it possible is the more durable risk.

## Three and a Half Years

The gap between termination and discovery deserves to stand on its own: approximately **three and a half years** elapsed between when this individual's employment ended and when her unauthorized access was detected. Two hundred forty-six discrete access events. During an active criminal investigation. By someone with no current role, no active cases, and no reason to be in the system.

That is not a failure of one person's judgment. That is a failure of identity lifecycle management — and it almost certainly did not happen in isolation. CCIS is a statewide system with users distributed across multiple agencies and jurisdictions. If one former employee retained access for this long without automated detection, the question worth asking is not whether this is a unique case. It is how many similar access paths remain open right now.

## What a Zero Trust Posture Addresses

[CISA's Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model) defines five pillars: **Identity, Devices, Networks, Applications & Workloads, and Data.** This incident is a multi-pillar failure, but it begins and ends with Identity.

**Identity pillar — the root failure.** In a mature Zero Trust posture, identity is not a standing credential. It is a continuously verified relationship between a person, their role, and a legitimate business need. Termination triggers immediate, automated deprovisioning across every connected system — not just the HR record. Employment status is a live signal, not a historical fact. This access would not have survived day one of an offboarding process built on Zero Trust principles.

**Applications & Workloads pillar — the enforcement gap.** CCIS granted access based on an initial authorization that was never revisited. A Zero Trust approach to application access requires periodic revalidation — does this user still have a role that justifies this access? Just-in-time access models tie authorization to an active session with a verified purpose, not a persistent credential that works indefinitely.

**Data pillar — the detection gap.** Two hundred forty-six queries from an account with no active caseload should have been anomalous. A mature data access governance posture includes behavioral baselining — what does normal access look like for this role? — and alerting when that baseline is violated. The absence of an active caseload is a signal. Query volume is a signal. A pattern of access targeting warrant and investigation records is a signal. None of them, apparently, were being monitored in a way that generated an alert.

## The Accountability Gap

Law enforcement deserves credit for identifying and prosecuting this case. The investigation was thorough, the charges are detailed, and the public disclosure is appropriate.

What the public announcement does not address is the systemic question: which agency or agencies were responsible for managing access to CCIS, and what changes are being made to ensure this cannot happen again? An individual faces consequences that will define the rest of her life. The administrative process that left the door open for three and a half years has not been named, has not been audited publicly, and has not been held to account.

This is not an accusation. It is an observation that recurs after nearly every insider threat incident: we are very good at prosecuting the person who walked through the open door, and much slower to ask who left it open.

## The Repeatable Risk

Insider threats enabled by stale credentials are not exotic attacks. They do not require sophisticated malware, nation-state resources, or zero-day exploits. They require only that an organization fail to close an account when someone leaves. That failure is extraordinarily common — across government, healthcare, education, and the private sector — precisely because identity offboarding is treated as an HR process rather than a security control.

Zero Trust reframes that assumption. Access is not a benefit extended at hire and revoked only when someone remembers to revoke it. Access is continuously earned, continuously verified, and automatically terminated when the conditions that justified it no longer exist.

One person is going to prison for walking through a door that should never have been left open. The more durable lesson is about who builds the doors — and who is responsible for closing them.

---

*Source: [WKMG News 6 / ClickOrlando](https://www.clickorlando.com/news/local/2026/06/18/ocso-woman-faces-500-years-in-prison-after-warning-florida-drug-group/)*
