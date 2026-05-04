---
title: OZTP Top 10 Zero Trust Controls
description: Ten high-impact, achievable Zero Trust controls — ranked by impact and achievability, with honest guidance on where to start.
---

# OZTP Top 10 Zero Trust Controls

**The problem with Zero Trust isn't the concept — it's the starting point.**

[NIST](https://csrc.nist.gov/pubs/sp/800/207/final){ target=_blank }, [CISA](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank }, and the [NSA](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZTA.PDF){ target=_blank } all agree: Zero Trust is the right model. But their frameworks are comprehensive by design, built for large agencies with mature security teams. For most organizations, reading them produces paralysis, not progress.

This list cuts through that. Ten controls, ranked by **impact × achievability**, with honest guidance on what each one stops and where to begin. Some you can implement this week. Some take months. All of them matter.

!!! note "How OZTP helps"
    Each entry notes our role honestly: where the [Control Platform](products/control-platform.md) or [Agent Zeta](products/agent-zeta.md) help directly, where we advise, and where we point the way to other solutions. Zero Trust is bigger than any single tool — including ours.

---

## #1 — Require Multi-Factor Authentication on Everything

**Identity · Immediate · Free to start**

**What it stops:** Credential theft, phishing, and password spray attacks. MFA blocks 99.9% of automated account compromise. Nothing else comes close at this price point.

Every access request must prove who is asking — not just once at login, but for sensitive actions. A stolen password alone should never be enough.

!!! tip "Where to start"
    Enable MFA on your email and identity provider today. Use any authenticator app — [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app){ target=_blank }, [Google Authenticator](https://support.google.com/accounts/answer/1066447){ target=_blank }, or [Authy](https://authy.com){ target=_blank }. This takes one afternoon and requires no budget.

    For higher assurance: [FIDO2/passkeys](https://fidoalliance.org/passkeys/){ target=_blank } are phishing-resistant and the NSA's preferred path.

**OZTP:** [Agent Zeta](chat.md) assesses your MFA coverage across the [CISA ZTMM](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } Identity pillar and identifies gaps.

---

## #2 — Know Every Device on Your Network

**Devices · High impact · Low cost**

**What it stops:** Unmanaged devices — personal laptops, IoT devices, contractor machines — accessing your systems without visibility. You cannot apply Zero Trust to assets you don't know exist.

[CIS Controls v8](https://www.cisecurity.org/controls/v8){ target=_blank } puts device inventory first for a reason: every ZT access decision should incorporate device health. An unknown device is an unverifiable one.

!!! tip "Where to start"
    Build a device inventory — spreadsheet first, tooling later. Know: what devices exist, who owns them, and whether they have management software installed. Devices not in inventory should be denied access by default.

**OZTP:** The [Control Platform](products/control-platform.md) and Device Agent do this for Windows endpoints today — automated check-ins, health reporting, and centralized visibility. Free and open source.

---

## #3 — Control What Software Can Run

**Devices + Applications · High impact · Built into Windows**

**What it stops:** Malware, ransomware, and unauthorized tools — even novel zero-day malware cannot execute if the binary isn't on the approved list. Application allowlisting is one of the most effective defenses against ransomware available today.

Zero Trust's "never trust, always verify" applies to software too. An unknown executable is an unverified entity.

!!! tip "Where to start"
    [Windows Defender Application Control (WDAC)](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/){ target=_blank } is built into Windows 10/11 Pro and Enterprise — no purchase required. Start in **audit mode** to understand your software baseline before switching to enforcement.

**OZTP:** The [Control Platform](products/control-platform.md) monitors WDAC posture across your fleet — policy count, enforcement mode, and events — in real time. This is OZTP's flagship capability today.

---

## #4 — Give Everyone the Minimum Access They Need

**Identity + Applications · High impact · Policy and process**

**What it stops:** Lateral movement. When an attacker compromises one account, least privilege determines how far they can go. A tightly scoped account is a dead end; an over-privileged account is a master key.

!!! tip "Where to start"
    Audit your user accounts. Who has admin rights that don't need them? Removing unnecessary admin privileges from standard user accounts is one action that dramatically limits blast radius with zero cost.

    Access should be granted for a specific resource, for a specific reason, for the minimum time required — then revoked.

**OZTP:** [Agent Zeta](chat.md) assesses your least privilege posture and maps gaps to [CISA ZTMM](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } recommendations.

---

## #5 — Protect Admin Accounts Like the Crown Jewels

**Identity · High impact · Practice and policy**

**What it stops:** Admin account compromise leading to complete network takeover. Attackers prioritize privileged accounts because they unlock everything. A compromised admin account is the most common path to catastrophic breaches.

!!! tip "Where to start"
    Separate admin accounts from daily-use accounts. Never use a privileged account for email, web browsing, or routine work. Use a dedicated admin account only when performing administrative tasks — then log out.

    For organizations ready for tooling: Privileged Access Management (PAM) solutions provide just-in-time access, session recording, and automated credential rotation.

**OZTP:** [Agent Zeta](chat.md) advises on privileged access posture. The right PAM solution depends on your environment and scale — we help you identify what fits.

---

## #6 — Encrypt What Matters, Everywhere It Lives

**Data · High impact · Many free options**

**What it stops:** Data exfiltration even when attackers gain access to storage or intercept network traffic. Encrypted data at rest is unreadable without the key — stolen drives, compromised backups, and cloud storage breaches yield nothing.

!!! tip "Where to start"
    Enable [BitLocker](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/){ target=_blank } on Windows endpoints (free, built-in on Pro and Enterprise) and confirm all web-facing services use HTTPS. These two steps cover the most common exposure points for most organizations.

**OZTP:** OZTP infrastructure uses AES-256 encryption at rest and TLS in transit by default. [Agent Zeta](chat.md) assesses your data protection posture against [CISA ZTMM](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } and [ISO/IEC 27001](https://www.iso.org/standard/27001){ target=_blank } controls.

---

## #7 — Divide Your Network — Assume the Attacker Is Already Inside

**Networks · High impact · Moderate complexity**

**What it stops:** Lateral movement. The 2017 NotPetya attack spread across entire flat networks in minutes. Segmentation turns a breach foothold into a dead end rather than a highway to your most critical systems.

!!! tip "Where to start"
    Identify your most sensitive systems — domain controllers, financial data, HR records, backups — and isolate them on separate network segments. Even basic VLAN separation significantly reduces blast radius without requiring new hardware.

    See [NSA's micro-segmentation guidance](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZTA.PDF){ target=_blank } and [CISA's network ZT controls](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } for implementation specifics.

**OZTP:** [Agent Zeta](chat.md) maps your network architecture against CISA ZTMM Network pillar controls and identifies segmentation gaps.

---

## #8 — Log Everything. You Will Need It Later.

**Visibility & Analytics · High impact · Low cost to start**

**What it stops:** Long dwell time. The average attacker spends months inside a network before detection. Comprehensive logging is what makes detection possible — and what makes investigation useful after the fact.

Zero Trust's "assume breach" principle means designing for detection, not just prevention. You cannot detect what you cannot see.

!!! tip "Where to start"
    Centralize your logs. Know what normal looks like — login times, access patterns, data volumes — so anomalies stand out. Free and open source SIEM options include [Wazuh](https://wazuh.com){ target=_blank } and [OpenSearch](https://opensearch.org){ target=_blank }. Even centralized log files are better than siloed ones.

**OZTP:** The [Control Platform](products/control-platform.md) logs device health and WDAC events continuously. [Agent Zeta](chat.md) advises on visibility posture across all five CISA pillars.

---

## #9 — Replace "Connected = Trusted" with Identity-Based Access

**Networks + Identity · High impact · Multi-phase journey**

**What it stops:** The implicit trust that VPNs create. Once connected, users often have access to far more than their job requires. Zero Trust Network Access (ZTNA) grants access to specific applications based on verified identity and device health — not network membership.

!!! tip "Where to start"
    Inventory what your VPN is actually used for, application by application. Many organizations find that 80% of use cases can migrate to identity-based access without a major infrastructure overhaul. Start with one internal application and learn from it.

    See [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final){ target=_blank } for the authoritative architecture reference on ZTNA deployment models.

**OZTP:** [Agent Zeta](chat.md) assesses your network access posture and identifies VPN dependencies mapped to CISA ZTMM. This is a journey measured in phases — we help you map it honestly.

---

## #10 — Machines Have Identities Too. Secure Them.

**Identity + Applications · Growing urgency · Often overlooked**

**What it stops:** Supply chain attacks, compromised automation, and API key theft. Service accounts and machine credentials are often the most over-privileged, least-monitored identities in any environment. The SolarWinds and CircleCI breaches both exploited machine identity weaknesses.

!!! tip "Where to start"
    Audit your service accounts and API keys. Are any shared across teams? Hardcoded in scripts or repositories? When were they last rotated? Finding and removing hardcoded credentials alone eliminates a major, commonly exploited attack surface.

    Tools like [GitHub's secret scanning](https://docs.github.com/en/code-security/secret-scanning){ target=_blank } can identify exposed credentials in your repositories automatically.

**OZTP:** OZTP hashes all API keys at rest, supports key rotation via API, and stores secrets in a dedicated secret manager — we build to the standard we recommend. We share this pattern openly as a reference implementation for secure service authentication.

---

## Framework Mapping

Every control maps to recognized external standards — we don't invent our own maturity models.

| # | Control | CISA ZTMM Pillar | CIS Controls v8 |
|---|---------|-----------------|-----------------|
| 1 | Multi-Factor Authentication | Identity | 6 |
| 2 | Device Inventory & Health | Devices | 1 |
| 3 | Application Control | Devices + Applications | 2 |
| 4 | Least Privilege Access | Identity + Applications | 5, 6 |
| 5 | Privileged Access Management | Identity | 5 |
| 6 | Encryption at Rest & in Transit | Data | 3 |
| 7 | Network Micro-segmentation | Networks | 12 |
| 8 | Logging & Continuous Monitoring | Visibility & Analytics | 8, 13 |
| 9 | Identity-Based Network Access | Networks + Identity | 12, 13 |
| 10 | Non-Human Identity Security | Identity + Applications | 5 |

**Primary references:** [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final){ target=_blank } · [CISA ZTMM v2](https://www.cisa.gov/zero-trust-maturity-model){ target=_blank } · [CIS Controls v8](https://www.cisecurity.org/controls/v8){ target=_blank } · [NSA Zero Trust Guidance](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZTA.PDF){ target=_blank } · [ISO/IEC 27001](https://www.iso.org/standard/27001){ target=_blank }

---

## Ask Agent Zeta

Not sure where your organization stands, or where to begin? Agent Zeta can assess your current posture, map your gaps to the controls above, and suggest a prioritized starting point.

<style>
#zt10-widget {
  border: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  max-width: 720px;
  margin: 1.5rem 0;
}
#zt10-header {
  background: var(--md-primary-fg-color, #3f51b5);
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
#zt10-header h4 { margin: 0; font-size: 0.95rem; font-weight: 700; }
#zt10-header p { margin: 0; font-size: 0.72rem; opacity: 0.8; }
#zt10-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 14px 4px;
  background: var(--md-default-bg-color, #fff);
}
.zt10-chip {
  background: var(--md-default-fg-color--lightest, #eef0f8);
  color: var(--md-primary-fg-color, #3f51b5);
  border: 1px solid var(--md-primary-fg-color, #3f51b5);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.78rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.zt10-chip:hover {
  background: var(--md-primary-fg-color, #3f51b5);
  color: white;
}
#zt10-messages {
  min-height: 80px;
  max-height: 320px;
  overflow-y: auto;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--md-default-bg-color, #fff);
}
.zt10-msg {
  max-width: 85%;
  padding: 9px 13px;
  border-radius: 10px;
  font-size: 0.86rem;
  line-height: 1.55;
  word-break: break-word;
}
.zt10-msg.user {
  align-self: flex-end;
  background: var(--md-primary-fg-color, #3f51b5);
  color: white;
  border-bottom-right-radius: 3px;
}
.zt10-msg.assistant {
  align-self: flex-start;
  background: var(--md-default-fg-color--lightest, #f0f0f0);
  color: var(--md-default-fg-color, #222);
  border-bottom-left-radius: 3px;
}
.zt10-msg.typing { opacity: 0.55; font-style: italic; }
#zt10-input-row {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
  background: var(--md-default-bg-color, #fff);
}
#zt10-input {
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.86rem;
  border: 1px solid var(--md-default-fg-color--lightest, #ccc);
  background: var(--md-default-bg-color, #fff);
  color: var(--md-default-fg-color, #222);
  resize: none;
  outline: none;
  min-height: 36px;
  max-height: 120px;
  font-family: inherit;
}
#zt10-input:focus { border-color: var(--md-primary-fg-color, #3f51b5); }
#zt10-send {
  background: var(--md-primary-fg-color, #3f51b5);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.88rem;
  flex-shrink: 0;
  transition: opacity 0.15s;
}
#zt10-send:disabled { opacity: 0.4; cursor: not-allowed; }
#zt10-disclaimer {
  font-size: 0.62rem;
  text-align: center;
  opacity: 0.4;
  padding: 5px 12px 8px;
  margin: 0;
  background: var(--md-default-bg-color, #fff);
}
</style>

<div id="zt10-widget">
  <div id="zt10-header">
    <div>
      <h4>Agent Zeta</h4>
      <p>AI Zero Trust Advisor · Ask anything about these controls</p>
    </div>
  </div>
  <div id="zt10-suggestions">
    <span class="zt10-chip" onclick="zt10Ask('Where should a small organization start with Zero Trust?')">Where do we start?</span>
    <span class="zt10-chip" onclick="zt10Ask('How do I implement MFA for a small organization with limited budget?')">MFA on a budget</span>
    <span class="zt10-chip" onclick="zt10Ask('How do I get started with WDAC application control on Windows 11?')">Getting started with WDAC</span>
    <span class="zt10-chip" onclick="zt10Ask('What is the biggest Zero Trust mistake organizations make?')">Common mistakes</span>
    <span class="zt10-chip" onclick="zt10Ask('How do I assess my current Zero Trust maturity level?')">Assess my maturity</span>
    <span class="zt10-chip" onclick="zt10Ask('How can I secure service accounts and API keys using Zero Trust principles?')">Securing machine identities</span>
  </div>
  <div id="zt10-messages"></div>
  <div id="zt10-input-row">
    <textarea id="zt10-input" placeholder="Ask about any of these controls…" rows="1"></textarea>
    <button id="zt10-send" onclick="zt10Send()">Send</button>
  </div>
  <p id="zt10-disclaimer">Powered by OZTP · For informational use · Not a substitute for a security audit · Conversations may be stored</p>
</div>

<script>
(function () {
  "use strict";
  const API = "https://oztp-zeta-651946913194.us-east1.run.app/v1/chat";
  let session = null;
  let history = [];
  let busy = false;

  const msgs = document.getElementById("zt10-messages");
  const input = document.getElementById("zt10-input");
  const send = document.getElementById("zt10-send");

  function addMsg(role, text) {
    const d = document.createElement("div");
    d.className = "zt10-msg " + role;
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  async function doSend(text) {
    if (!text || busy) return;
    busy = true;
    send.disabled = true;
    input.value = "";
    input.style.height = "auto";

    addMsg("user", text);
    history.push({ role: "user", content: text });
    if (history.length > 10) history = history.slice(-10);

    const thinking = addMsg("assistant", "…");
    thinking.classList.add("typing");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, session_id: session }),
      });
      const data = await res.json();
      session = data.session_id;
      thinking.classList.remove("typing");
      thinking.textContent = data.reply;
      history.push({ role: "assistant", content: data.reply });
      if (history.length > 10) history = history.slice(-10);
    } catch (e) {
      thinking.classList.remove("typing");
      thinking.textContent = "Sorry, couldn't reach Agent Zeta right now. Please try again.";
      history.pop();
    }

    busy = false;
    send.disabled = false;
    input.focus();
  }

  window.zt10Ask = function(q) { doSend(q); };
  window.zt10Send = function() { doSend(input.value.trim()); };

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); zt10Send(); }
  });
  input.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 120) + "px";
  });
})();
</script>
