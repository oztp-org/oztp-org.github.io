---
title: OZTP Top 10 Zero Trust Controls
description: Ten high-impact, achievable Zero Trust controls — ranked by phase, with honest guidance on where to start.
---

# OZTP Top 10 Zero Trust Controls

*The problem with Zero Trust isn't the concept — it's the starting point.*

[NIST](https://csrc.nist.gov/pubs/sp/800/207/final), [CISA](https://www.cisa.gov/zero-trust-maturity-model), and the [NSA](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZTA.PDF) all agree: Zero Trust is the right model. But their frameworks are comprehensive by design, built for large agencies with mature security teams. For most organizations, reading them produces paralysis, not progress.

This list cuts through that. Ten controls, reorganized into a maturity-based progression: **Foundational Hygiene, System Hardening, and Zero Trust Architecture.**

!!! note "How OZTP helps"
    Each entry notes our role honestly: where the [Control Platform](https://oztp.org/products/control-platform/) or [Agent Zeta](https://oztp.org/products/agent-zeta/) help directly, where we advise, and where we point the way to other solutions.

## Phase 1: Foundational Hygiene

### #1 — Require Multi-Factor Authentication on Everything
*Identity · Immediate · Free to start*
*What it stops:* Credential theft, phishing, and password spray attacks.
*Where to start:* Enable MFA on your email and identity provider today. Use any authenticator app—[Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app), [Google Authenticator](https://support.google.com/accounts/answer/1066447), or [Authy](https://authy.com/). For higher assurance, use [FIDO2/passkeys](https://fidoalliance.org/passkeys/).

### #2 — Know Every Device on Your Network
*Devices · High impact · Low cost*
*What it stops:* Unmanaged or unauthorized devices accessing your systems.
*Where to start:* Build a device inventory—spreadsheet first, tooling later. Devices not in inventory should be denied access by default.

### #3 — Protect Admin Accounts Like the Crown Jewels
*Identity · High impact · Practice and policy*
*What it stops:* Admin account compromise leading to complete network takeover.
*Where to start:* Separate admin accounts from daily-use accounts. Never use a privileged account for email, web browsing, or routine work.

### #4 — Encrypt What Matters, Everywhere It Lives
*Data · High impact · Many free options*
*What it stops:* Data exfiltration even when attackers gain access to storage or intercept network traffic.
*Where to start:* Enable [BitLocker](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/) on Windows endpoints and ensure all web-facing services use HTTPS.

---

## Phase 2: System Hardening

### #5 — Control What Software Can Run
*Devices + Applications · High impact · Built into Windows*
*What it stops:* Malware, ransomware, and unauthorized tools.
*Where to start:* [Windows Defender Application Control (WDAC) / App Control for Business](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/) is built into Windows 10/11 Pro and Enterprise. Start in audit mode.

### #6 — Give Everyone the Minimum Access They Need
*Identity + Applications · High impact · Policy and process*
*What it stops:* Lateral movement.
*Where to start:* Audit user accounts and remove unnecessary admin privileges. Access should be granted for a specific resource, for a specific reason, for the minimum time required.

### #7 — Log Everything. You Will Need It Later.
*Visibility & Analytics · High impact · Low cost to start*
*What it stops:* Long dwell time; makes detection and investigation possible.
*Where to start:* Centralize your logs. Free and open source SIEM options include [Wazuh](https://wazuh.com/) and [OpenSearch](https://opensearch.org/).

---

## Phase 3: Zero Trust Architecture

### #8 — Divide Your Network
*Networks · High impact · Moderate complexity*
*What it stops:* Lateral movement. Segmentation turns a breach foothold into a dead end.
*Where to start:* Identify your most sensitive systems and isolate them on separate network segments. Even basic VLAN separation significantly reduces blast radius.

### #9 — Replace "Connected = Trusted" with Identity-Based Access
*Networks + Identity · High impact · Multi-phase journey*
*What it stops:* The implicit trust that VPNs create.
*Where to start:* Inventory what your VPN is actually used for, application by application. Migrate to identity-based access (ZTNA) one application at a time.

### #10 — Machines Have Identities Too. Secure Them.
*Identity + Applications · Growing urgency · Often overlooked*
*What it stops:* Supply chain attacks, compromised automation, and API key theft.
*Where to start:* Audit service accounts and API keys. Use tools like [GitHub's secret scanning](https://docs.github.com/en/code-security/secret-scanning) to find exposed credentials.

---

## Framework Mapping

| # | Control | Phase | CISA ZTMM Pillar | CIS Controls v8 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Multi-Factor Authentication | 1 | Identity | 6 |
| 2 | Device Inventory & Health | 1 | Devices | 1 |
| 3 | Admin Account Separation | 1 | Identity | 5 |
| 4 | Encryption at Rest & in Transit | 1 | Data | 3 |
| 5 | Application Control | 2 | Devices + Applications | 2 |
| 6 | Least Privilege Access | 2 | Identity + Applications | 5, 6 |
| 7 | Logging & Continuous Monitoring | 2 | Visibility & Analytics | 8, 13 |
| 8 | Network Micro-segmentation | 3 | Networks | 12 |
| 9 | Identity-Based Network Access | 3 | Networks + Identity | 12, 13 |
| 10 | Non-Human Identity Security | 3 | Identity + Applications | 5 |

*Primary references: [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final), [CISA ZTMM](https://www.cisa.gov/zero-trust-maturity-model), [CIS Controls v8](https://www.cisecurity.org/controls/v8), [NSA Zero Trust Guidance](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZTA.PDF), [ISO/IEC 27001](https://www.iso.org/standard/27001).*

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
