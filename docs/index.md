---
hide:
  - navigation
  - toc
---

<div class="hero">
  <h1>Zero Trust.<br>For Every Organization.</h1>
  <p class="tagline">
    OZTP builds free, open source tools that help organizations pursue Zero Trust security — 
    practical controls, clear guidance, no vendor lock-in.
  </p>

  <div class="framework-strip" style="justify-content:center;">
    <a class="framework-badge" href="frameworks/#nist-sp-800-207">NIST SP 800-207</a>
    <a class="framework-badge" href="frameworks/#cisa-ztmm-v2">CISA ZTMM v2</a>
    <a class="framework-badge" href="frameworks/#cis-controls-v8">CIS Controls v8</a>
    <a class="framework-badge" href="frameworks/#iso-27001">ISO/IEC 27001</a>
  </div>

  <div class="cta-row">
    <a href="products/" class="md-button md-button--primary">Explore Products</a>
    <a href="https://github.com/oztp-org" class="md-button btn-orange">View on GitHub</a>
    <a href="#cyber-news-journal" class="md-button btn-wintergreen">Cyber News Journal &darr;</a>
  </div>
</div>

---

<p class="section-label">Core Principles</p>

<div class="principle-grid">
  <div class="principle-card">
    <div class="icon">🛡️</div>
    <h3>Positive Focus</h3>
    <p>Zero Trust is a journey, not a destination. Every improvement — a new control deployed, a gap identified, a team better informed — is a step in the right direction. OZTP builds tools to support that pursuit at every stage.</p>
  </div>
  <div class="principle-card">
    <div class="icon">🔓</div>
    <h3>Open Source</h3>
    <p>All apps are free to download and open source. Run them on your own infrastructure, or use OZTP-hosted services.</p>
  </div>
  <div class="principle-card">
    <div class="icon">🔗</div>
    <h3>No Vendor Lock-in</h3>
    <p>Products are designed to be infrastructure-agnostic. Organizations choose their own cloud, AI provider, and tooling. OZTP works with what you have.</p>
  </div>
  <div class="principle-card">
    <div class="icon">📐</div>
    <h3>Framework Aligned</h3>
    <p>Every control and recommendation maps to a recognized Zero Trust framework — NIST, CISA, CIS, or ISO. No proprietary maturity models.</p>
  </div>
</div>

---

<p class="section-label">Products</p>

<div class="product-grid">
  <a href="products/control-platform/" class="product-card">
    <span class="status-badge status-active">Active</span>
    <h3>Control Platform</h3>
    <p>Cloud-hosted control plane for device check-ins, WDAC (App Control for Business) telemetry, and health reporting across your organization.</p>
  </a>
  <a href="products/device-agent/" class="product-card">
    <span class="status-badge status-active">Active</span>
    <h3>Device Agent</h3>
    <p>Lightweight Windows 11 Pro and Home agent that reports security posture and application control events to the control platform.</p>
  </a>
  <a href="products/zt-assessment/" class="product-card">
    <span class="status-badge status-active">Active</span>
    <h3>ZT Maturity Assessment</h3>
    <p>Structured assessments mapped to the CISA Zero Trust Maturity Model — know where you stand across all five pillars.</p>
  </a>
  <a href="products/agent-zeta/" class="product-card">
    <span class="status-badge status-active">Active</span>
    <h3>Agent Zeta</h3>
    <p>AI-powered Zero Trust advisor. Ask questions, get prioritized recommendations, and chart a path to higher maturity — using your choice of LLM.</p>
  </a>
</div>

---

<p class="section-label">Concepts</p>

<div class="product-grid">
  <a href="/blog/2026/05/09/stop-the-spof/" class="product-card">
    <h3>Stop the SPOF</h3>
    <p>Every major breach had a single point of failure. See how real incidents unfolded, identify the patterns in your own environment, and learn how Zero Trust eliminates them.</p>
  </a>
  <a href="absolute-zero/" class="product-card">
    <h3>Absolute Zero</h3>
    <p>A composite maturity score across all canonical Zero Trust pillars — a single number that tells you how close you are and where the gaps are.</p>
  </a>
</div>

---

<p class="section-label">Built for the Long Haul</p>

Zero Trust is not a product you buy — it's a security posture you build over time. OZTP exists to support that journey for all organizations, no matter the size of their cybersecurity budget or number of devices.

Start with visibility. Add controls when you're ready. Let the frameworks guide you.

[Get started with the Device Agent →](products/device-agent/){ .md-button }

---

<p class="section-label" id="cyber-news-journal">Cyber Incident Journal</p>

## Emerging Incidents & Zero Trust Lessons Learned

Defensive, anti-hype incident briefs synthesized from authoritative advisories by **Agent Zeta** and vetted with practitioner commentary (**HI + AI**).

<!--
  OZTP Cyber News Journal — Front Page Embed Widget (Clean Light Theme, Strict XSS Hardened)
  Embed this snippet into oztp.org (MkDocs, GitHub Pages, or any HTML template)
  to display the latest published Zero Trust incident briefs.
-->
<div id="oztp-journal-container" class="journal-feed-wrap">
  <div id="oztp-journal-entries">
    <p style="font-style: italic; color: #64748b;">Loading latest Zero Trust incident briefs...</p>
  </div>
</div>

<style>
  .journal-feed-wrap {
    margin: 24px 0 36px 0;
  }
  .journal-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .journal-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  .journal-badge-row {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  .badge-pill {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .badge-pill-hi-ai {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }
  .badge-pill-comb {
    background: #f3e8ff;
    color: #6b21a8;
    border: 1px solid #e9d5ff;
  }
  .journal-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 12px;
  }
  .journal-headline {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
  }
  .journal-date {
    font-size: 0.82rem;
    color: #64748b;
    white-space: nowrap;
  }
  .journal-summary {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #334155;
    background: #f8fafc;
    border-left: 3px solid #0284c7;
    border-radius: 6px;
    padding: 12px 16px;
    margin: 14px 0;
  }
  .journal-dan-box {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 8px;
    padding: 14px 16px;
    margin: 14px 0;
  }
  .journal-dan-title {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    color: #15803d;
    margin-bottom: 6px;
  }
  .journal-dan-text {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #14532d;
    font-style: italic;
    margin: 0;
  }
  .journal-citations {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid #f1f5f9;
    font-size: 0.82rem;
    color: #64748b;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
  .journal-citations strong {
    color: #475569;
  }
  .journal-citations a {
    color: #0284c7;
    text-decoration: underline;
    margin-right: 8px;
  }

  /* Adaptive dark mode support for MkDocs Material slate theme */
  [data-md-color-scheme="slate"] .journal-card {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
  [data-md-color-scheme="slate"] .journal-headline {
    color: #f8fafc;
  }
  [data-md-color-scheme="slate"] .journal-summary {
    background: #0f172a;
    color: #cbd5e1;
    border-left-color: #38bdf8;
  }
  [data-md-color-scheme="slate"] .journal-dan-box {
    background: rgba(20, 83, 45, 0.2);
    border-color: rgba(34, 197, 94, 0.3);
  }
  [data-md-color-scheme="slate"] .journal-dan-title {
    color: #86efac;
  }
  [data-md-color-scheme="slate"] .journal-dan-text {
    color: #dcfce7;
  }
  [data-md-color-scheme="slate"] .journal-citations {
    border-top-color: #334155;
    color: #94a3b8;
  }
  [data-md-color-scheme="slate"] .journal-citations strong {
    color: #cbd5e1;
  }
  [data-md-color-scheme="slate"] .journal-citations a {
    color: #38bdf8;
  }
</style>

<script>
  (function() {
    const PUBLIC_FEED_URL = "https://oztp-control-platform-651946913194.us-east1.run.app/api/v1/journal/public?limit=5";

    async function loadPublicJournal() {
      const container = document.getElementById("oztp-journal-entries");
      if (!container) return;

      try {
        const resp = await fetch(PUBLIC_FEED_URL);
        if (!resp.ok) {
          throw new Error("HTTP " + resp.status);
        }
        const entries = await resp.json();
        renderJournalEntries(entries, container);
      } catch (err) {
        container.textContent = "";
        const errMsg = document.createElement("p");
        errMsg.style.cssText = "color:#64748b; font-style:italic;";
        errMsg.textContent = "Live journal feed temporarily unavailable. Please check back shortly.";
        container.appendChild(errMsg);
      }
    }

    function createSafeLink(rawUrl, text) {
      if (!rawUrl || typeof rawUrl !== "string") return null;
      try {
        const parsed = new URL(rawUrl);
        if (parsed.protocol === "https:" || parsed.protocol === "http:") {
          const a = document.createElement("a");
          a.href = parsed.href;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = text;
          return a;
        }
      } catch (_) {}
      return null;
    }

    function renderJournalEntries(entries, container) {
      container.textContent = "";

      if (!entries || !Array.isArray(entries) || entries.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.style.cssText = "color:#64748b; font-style:italic;";
        emptyMsg.textContent = "No published incidents at this time. Harvesters scan periodically.";
        container.appendChild(emptyMsg);
        return;
      }

      for (const entry of entries) {
        if (!entry || typeof entry !== "object") continue;

        const card = document.createElement("article");
        card.className = "journal-card";

        // 1. Badge Row
        const badgeRow = document.createElement("div");
        badgeRow.className = "journal-badge-row";

        const attrBadge = document.createElement("span");
        attrBadge.className = "badge-pill badge-pill-hi-ai";
        attrBadge.textContent = entry.attribution || "HI + AI";
        badgeRow.appendChild(attrBadge);

        if (entry.is_comb) {
          const combBadge = document.createElement("span");
          combBadge.className = "badge-pill badge-pill-comb";
          combBadge.textContent = "⚡ Multi-Source Comb";
          badgeRow.appendChild(combBadge);
        }
        card.appendChild(badgeRow);

        // 2. Header: Headline & Date
        const header = document.createElement("div");
        header.className = "journal-header";

        const headline = document.createElement("h3");
        headline.className = "journal-headline";
        headline.textContent = entry.headline || "Untitled Brief";
        header.appendChild(headline);

        if (entry.published_at) {
          const dateSpan = document.createElement("span");
          dateSpan.className = "journal-date";
          try {
            dateSpan.textContent = new Date(entry.published_at).toLocaleDateString(undefined, {
              year: "numeric", month: "short", day: "numeric"
            });
          } catch (_) {
            dateSpan.textContent = String(entry.published_at).slice(0, 10);
          }
          header.appendChild(dateSpan);
        }
        card.appendChild(header);

        // 3. Executive Summary (Concise Brief)
        if (entry.executive_summary) {
          const summary = document.createElement("div");
          summary.className = "journal-summary";
          summary.textContent = entry.executive_summary;
          card.appendChild(summary);
        }

        // 4. Dan's Take (Practitioner Note)
        const dansTake = entry.human_note || entry.dans_take;
        if (dansTake) {
          const danBox = document.createElement("div");
          danBox.className = "journal-dan-box";

          const danTitle = document.createElement("div");
          danTitle.className = "journal-dan-title";
          danTitle.textContent = "Dan's Take — Practitioner Note";
          danBox.appendChild(danTitle);

          const danText = document.createElement("p");
          danText.className = "journal-dan-text";
          danText.textContent = `“${dansTake}”`;
          danBox.appendChild(danText);

          card.appendChild(danBox);
        }

        // 5. Corroborating Source Link(s) & Advisory Link
        const citationsBox = document.createElement("div");
        citationsBox.className = "journal-citations";

        const label = document.createElement("strong");
        label.textContent = "Sources:";
        citationsBox.appendChild(label);

        let hasLinks = false;
        if (Array.isArray(entry.citations)) {
          for (const c of entry.citations) {
            if (c && c.url) {
              const srcName = c.source || "Advisory";
              const titleText = c.title ? `${srcName}: ${c.title} ↗` : `${srcName} ↗`;
              const a = createSafeLink(c.url, titleText);
              if (a) {
                citationsBox.appendChild(a);
                hasLinks = true;
              }
            }
          }
        }

        if (entry.zt_advisory_url) {
          const advLink = createSafeLink(entry.zt_advisory_url, "OZTP Advisory Reference →");
          if (advLink) {
            citationsBox.appendChild(advLink);
            hasLinks = true;
          }
        }

        if (hasLinks) {
          card.appendChild(citationsBox);
        }

        container.appendChild(card);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", loadPublicJournal);
    } else {
      loadPublicJournal();
    }
  })();
</script>
