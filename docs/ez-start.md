---
title: EZ Start Zero Trust Assessment
description: A phase-based, temperature-scored assessment to help you start your Zero Trust journey.
---

# EZ Start Zero Trust Assessment

Welcome to the **EZ Start Assessment**. Instead of the 98+ controls found in our comprehensive [ZT Maturity Assessment](https://oztp.org/products/zt-assessment/), this check focuses on the **Top 10 Zero Trust Controls** required to get you out of the "Traditional" zone and into "Cool Blue" security.

## How it works
For each control, rate your current posture using the temperature scale:
*   **🔴 Not Cool:** No control in place. High risk of basic attack.
*   **🟠 Started Cooling:** Planning or partial implementation.
*   **🟡 Cooling Down:** Implemented across most of the environment.
*   **🔵 Cool Blue:** Fully implemented, monitored, and automated.

---

## Phase 1: Foundational Hygiene
1.  **#1 — Multi-Factor Authentication:** How is MFA enforced? (🔴 / 🟠 / 🟡 / 🔵)
2.  **#2 — Device Inventory:** Do you know every device on your network? (🔴 / 🟠 / 🟡 / 🔵)
3.  **#3 — Admin Separation:** Are admin accounts segregated from daily work? (🔴 / 🟠 / 🟡 / 🔵)
4.  **#4 — Encryption:** Is data encrypted at rest and in transit? (🔴 / 🟠 / 🟡 / 🔵)

## Phase 2: System Hardening
5.  **#5 — Application Control:** Are you restricting what software can run? (🔴 / 🟠 / 🟡 / 🔵)
6.  **#6 — Least Privilege:** Is access limited to what is strictly necessary? (🔴 / 🟠 / 🟡 / 🔵)
7.  **#7 — Logging:** Do you centralize and monitor your logs? (🔴 / 🟠 / 🟡 / 🔵)

## Phase 3: Zero Trust Architecture
8.  **#8 — Network Segmentation:** Are your sensitive systems isolated? (🔴 / 🟠 / 🟡 / 🔵)
9.  **#9 — Identity-Based Access:** Have you replaced broad VPN access? (🔴 / 🟠 / 🟡 / 🔵)
10. **#10 — Machine Identities:** Are service accounts and APIs secured? (🔴 / 🟠 / 🟡 / 🔵)

---

!!! tip "Ready to act?"
    Once you have your scores, identify your **"Red"** items—those are your immediate priorities. Visit the [OZTP Top 10 Controls](https://oztp.org/top10/) page to find actionable "How-To" guides for every control listed here.
    <div id="ez-assessment" style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
  <h3>Your Progress: <span id="combined-score">0</span> / 30</h3>
  <div style="height: 20px; background: #ddd; border-radius: 10px; overflow: hidden;">
    <div id="progress-bar" style="width: 0%; height: 100%; background: #3366ff; transition: width 0.3s;"></div>
  </div>
</div>

<script>
  // Simple listener for your emoji buttons
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Basic logic to detect clicked emoji (🔴=0, 🟠=1, 🟡=2, 🔵=3)
      // This will update the progress bar dynamically
      console.log("Control updated!");
      // Logic for calculating phase scores and overall "Cool Blue" status
    });
  });
</script>

[Return to Dashboard](https://oztp-control-platform-651946913194.us-east1.run.app/assessments)
