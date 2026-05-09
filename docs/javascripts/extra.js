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
