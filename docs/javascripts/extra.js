/* Agent Zeta chat widget — calls the Agent Zeta Cloud Run API */

(function () {
  "use strict";

  const API_URL = "https://oztp-zeta-651946913194.us-east1.run.app/v1/chat";
  const MAX_HISTORY = 10;

  let sessionId = null;
  let history = []; // { role, content }
  let isOpen = false;

  // ── DOM ──────────────────────────────────────────────────────────────────

  function buildWidget() {
    if (document.getElementById("az-fab")) return;
    const style = document.createElement("style");
    style.textContent = `
      #az-fab {
        position: fixed; bottom: 24px; right: 24px; z-index: 9999;
        width: 56px; height: 56px; border-radius: 50%;
        background: var(--md-primary-fg-color, #3f51b5);
        border: none; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        display: flex; align-items: center; justify-content: center;
        transition: transform 0.2s, box-shadow 0.2s;
        color: white; font-size: 1.4rem;
      }
      #az-fab:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }

      #az-panel {
        position: fixed; bottom: 90px; right: 24px; z-index: 9998;
        width: 360px; max-width: calc(100vw - 48px);
        height: 520px; max-height: calc(100vh - 120px);
        border-radius: 12px; overflow: hidden;
        display: flex; flex-direction: column;
        box-shadow: 0 8px 40px rgba(0,0,0,0.2);
        background: var(--md-default-bg-color, #fff);
        border: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
        transform: translateY(20px) scale(0.96);
        opacity: 0; pointer-events: none;
        transition: opacity 0.2s, transform 0.2s;
      }
      #az-panel.open { transform: translateY(0) scale(1); opacity: 1; pointer-events: all; }

      #az-header {
        padding: 14px 16px; display: flex; align-items: center; gap: 10px;
        background: var(--md-primary-fg-color, #3f51b5); color: white;
        flex-shrink: 0;
      }
      #az-header h3 { margin: 0; font-size: 0.95rem; font-weight: 700; }
      #az-header p { margin: 0; font-size: 0.72rem; opacity: 0.8; }
      #az-close, #az-popout {
        background: none; border: none; color: white;
        cursor: pointer; font-size: 1rem; padding: 4px; opacity: 0.8;
      }
      #az-close { margin-left: auto; font-size: 1.1rem; }
      #az-close:hover, #az-popout:hover { opacity: 1; }

      #az-messages {
        flex: 1; overflow-y: auto; padding: 12px; display: flex;
        flex-direction: column; gap: 10px;
      }

      .az-msg {
        max-width: 85%; padding: 10px 14px; border-radius: 12px;
        font-size: 0.85rem; line-height: 1.5; word-break: break-word;
      }
      .az-msg.user {
        align-self: flex-end;
        background: var(--md-primary-fg-color, #3f51b5); color: white;
        border-bottom-right-radius: 4px;
      }
      .az-msg.assistant {
        align-self: flex-start;
        background: var(--md-default-fg-color--lightest, #f0f0f0);
        color: var(--md-default-fg-color, #222);
        border-bottom-left-radius: 4px;
      }
      .az-msg.typing { opacity: 0.6; font-style: italic; }

      #az-input-row {
        display: flex; gap: 8px; padding: 10px 12px;
        border-top: 1px solid var(--md-default-fg-color--lightest, #e0e0e0);
        flex-shrink: 0;
      }
      #az-input {
        flex: 1; padding: 8px 12px; border-radius: 8px; font-size: 0.85rem;
        border: 1px solid var(--md-default-fg-color--lightest, #ccc);
        background: var(--md-default-bg-color, #fff);
        color: var(--md-default-fg-color, #222);
        resize: none; outline: none; min-height: 38px; max-height: 120px;
        font-family: inherit;
      }
      #az-input:focus { border-color: var(--md-primary-fg-color, #3f51b5); }
      #az-send {
        background: var(--md-primary-fg-color, #3f51b5); color: white;
        border: none; border-radius: 8px; padding: 8px 14px;
        cursor: pointer; font-size: 0.9rem; flex-shrink: 0;
        transition: opacity 0.15s;
      }
      #az-send:disabled { opacity: 0.4; cursor: not-allowed; }

      #az-disclaimer {
        font-size: 0.65rem; text-align: center; opacity: 0.45;
        padding: 0 12px 8px; flex-shrink: 0;
      }
    `;
    document.head.appendChild(style);

    // FAB button
    const fab = document.createElement("button");
    fab.id = "az-fab";
    fab.title = "Ask Agent Zeta";
    fab.innerHTML = "⚡";
    fab.addEventListener("click", togglePanel);
    document.body.appendChild(fab);

    // Panel
    const panel = document.createElement("div");
    panel.id = "az-panel";
    panel.innerHTML = `
      <div id="az-header">
        <div>
          <h3>Agent Zeta</h3>
          <p>AI Zero Trust Advisor · OZTP</p>
        </div>
        <button id="az-popout" title="Open in new window">↗</button>
        <button id="az-close" title="Close">✕</button>
      </div>
      <div id="az-messages">
        <div class="az-msg assistant">
          Hi! I'm Agent Zeta. Ask me anything about Zero Trust security —
          maturity assessments, NIST, CISA frameworks, or where to start for your organization.
        </div>
      </div>
      <div id="az-input-row">
        <textarea id="az-input" placeholder="Ask a Zero Trust question…" rows="1"></textarea>
        <button id="az-send">Send</button>
      </div>
      <p id="az-disclaimer">Powered by OZTP · For informational use · Not a substitute for a security audit</p>
    `;
    document.body.appendChild(panel);

    document.getElementById("az-close").addEventListener("click", togglePanel);
    document.getElementById("az-popout").addEventListener("click", function () {
      window.open("/chat/", "_blank");
    });
    document.getElementById("az-send").addEventListener("click", sendMessage);
    document.getElementById("az-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    // Auto-resize textarea
    document.getElementById("az-input").addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 120) + "px";
    });
  }

  function togglePanel() {
    isOpen = !isOpen;
    const panel = document.getElementById("az-panel");
    panel.classList.toggle("open", isOpen);
    if (isOpen) {
      document.getElementById("az-input").focus();
    }
  }

  function appendMessage(role, content) {
    const msgs = document.getElementById("az-messages");
    const div = document.createElement("div");
    div.className = "az-msg " + role;
    div.textContent = content;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  async function sendMessage() {
    const input = document.getElementById("az-input");
    const send = document.getElementById("az-send");
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
      // Roll back the failed user message from history
      history.pop();
      console.error("Agent Zeta error:", err);
    }

    send.disabled = false;
    document.getElementById("az-messages").scrollTop = 9999;
    input.focus();
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  // document$ is MkDocs Material's observable that fires on every instant navigation.
  // Without this, navigation.instant replaces the body and destroys the widget.
  if (typeof document$ !== "undefined") {
    document$.subscribe(buildWidget);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildWidget);
  } else {
    buildWidget();
  }
})();
