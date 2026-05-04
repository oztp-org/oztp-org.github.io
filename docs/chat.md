---
title: Chat with Agent Zeta
hide:
  - navigation
  - toc
  - footer
---

<style>
  .md-content { flex: 1; display: flex; flex-direction: column; }
  .md-content__inner { flex: 1; padding: 12px 16px; display: flex; flex-direction: column; margin: 0; }

  #az-fullpage {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    min-height: 520px;
  }
  #az-fp-header {
    padding: 14px 16px; display: flex; align-items: center; gap: 10px;
    background: var(--md-primary-fg-color, #3f51b5); color: white; flex-shrink: 0;
  }
  #az-fp-header h3 { margin: 0; font-size: 1rem; font-weight: 700; }
  #az-fp-header p { margin: 0; font-size: 0.75rem; opacity: 0.8; }
  #az-fp-messages {
    flex: 1; overflow-y: auto; padding: 16px;
    display: flex; flex-direction: column; gap: 12px;
    background: var(--md-default-bg-color, #fff);
  }
  .az-fp-msg {
    max-width: 80%; padding: 10px 14px; border-radius: 12px;
    font-size: 0.88rem; line-height: 1.55; word-break: break-word;
  }
  .az-fp-msg.user {
    align-self: flex-end;
    background: var(--md-primary-fg-color, #3f51b5); color: white;
    border-bottom-right-radius: 4px;
  }
  .az-fp-msg.assistant {
    align-self: flex-start;
    background: var(--md-default-fg-color--lightest, #f0f0f0);
    color: var(--md-default-fg-color, #222);
    border-bottom-left-radius: 4px;
  }
  .az-fp-msg.typing { opacity: 0.6; font-style: italic; }
  #az-fp-input-row {
    display: flex; gap: 8px; padding: 10px 12px; flex-shrink: 0;
    border-top: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
    background: var(--md-default-bg-color, #fff);
  }
  #az-fp-input {
    flex: 1; padding: 8px 12px; border-radius: 8px; font-size: 0.88rem;
    border: 1px solid var(--md-default-fg-color--lightest, #ccc);
    background: var(--md-default-bg-color, #fff);
    color: var(--md-default-fg-color, #222);
    resize: none; outline: none; min-height: 38px; max-height: 140px;
    font-family: inherit;
  }
  #az-fp-input:focus { border-color: var(--md-primary-fg-color, #3f51b5); }
  #az-fp-send {
    background: var(--md-primary-fg-color, #3f51b5); color: white;
    border: none; border-radius: 8px; padding: 8px 18px;
    cursor: pointer; font-size: 0.9rem; flex-shrink: 0; transition: opacity 0.15s;
  }
  #az-fp-send:disabled { opacity: 0.4; cursor: not-allowed; }
  #az-fp-disclaimer {
    font-size: 0.65rem; text-align: center; opacity: 0.45;
    padding: 6px 12px; flex-shrink: 0; margin: 0;
    background: var(--md-default-bg-color, #fff);
  }
</style>

<div id="az-fullpage">
  <div id="az-fp-header">
    <div>
      <h3>Agent Zeta</h3>
      <p>AI Zero Trust Advisor · OZTP</p>
    </div>
  </div>
  <div id="az-fp-messages">
    <div class="az-fp-msg assistant">
      Hi! I'm Agent Zeta. Ask me anything about Zero Trust security —
      maturity assessments, NIST, CISA frameworks, or where to start for your organization.
    </div>
  </div>
  <div id="az-fp-input-row">
    <textarea id="az-fp-input" placeholder="Ask a Zero Trust question…" rows="1"></textarea>
    <button id="az-fp-send">Send</button>
  </div>
  <p id="az-fp-disclaimer">Powered by OZTP · For informational use · Not a substitute for a security audit · Conversations are stored to support session continuity — do not share sensitive organizational data</p>
</div>

<script>
(function () {
  "use strict";
  const API_URL = "https://oztp-zeta-651946913194.us-east1.run.app/v1/chat";
  const MAX_HISTORY = 10;
  let sessionId = null;
  let history = [];

  const msgs = document.getElementById("az-fp-messages");
  const input = document.getElementById("az-fp-input");
  const send = document.getElementById("az-fp-send");

  function appendMessage(role, content) {
    const div = document.createElement("div");
    div.className = "az-fp-msg " + role;
    div.textContent = content;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  async function sendMessage() {
    const text = input.value.trim();
    if (!text || send.disabled) return;
    input.value = "";
    input.style.height = "auto";
    appendMessage("user", text);
    history.push({ role: "user", content: text });
    if (history.length > MAX_HISTORY) history = history.slice(-MAX_HISTORY);

    send.disabled = true;
    const thinking = appendMessage("assistant", "…");
    thinking.classList.add("typing");

    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, session_id: sessionId }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed (" + resp.status + ")");
      }
      const data = await resp.json();
      sessionId = data.session_id;
      thinking.classList.remove("typing");
      thinking.textContent = data.reply;
      history.push({ role: "assistant", content: data.reply });
      if (history.length > MAX_HISTORY) history = history.slice(-MAX_HISTORY);
    } catch (err) {
      thinking.classList.remove("typing");
      thinking.textContent = "Sorry, I couldn't reach the advisor right now. Please try again.";
      history.pop();
      console.error("Agent Zeta error:", err);
    }

    send.disabled = false;
    msgs.scrollTop = msgs.scrollHeight;
    input.focus();
  }

  send.addEventListener("click", sendMessage);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  input.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 140) + "px";
  });
  input.focus();
})();
</script>
