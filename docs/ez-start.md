---
title: EZ Start Zero Trust Assessment
description: A phase-based, temperature-scored assessment to help you start your Zero Trust journey.
---

<style>
  .ez-btn { font-size: 16px; cursor: pointer; padding: 2px 6px; border: 1px solid #ccc; border-radius: 4px; background: #fff; margin: 0 2px; }
  .assessment-container { font-size: 14px; line-height: 1.6; }
</style>

# EZ Start Zero Trust Assessment

Welcome to the **EZ Start Assessment**. This check focuses on the **Top 10 Zero Trust Controls** to get you out of the "Traditional" zone and into "Cool Blue" security.

## How it works
For each control, rate your current posture:
* **🔴 Not Cool:** No control in place.
* **🟠 Started Cooling:** Planning or partial implementation.
* **🟡 Cooling Down:** Implemented across most of the environment.
* **🔵 Cool Blue:** Fully implemented, monitored, and automated.

<div class="assessment-container">

## Phase 1: Foundational Hygiene
<!-- Replace each question's button area with this structure --><br>
1. **#1 — Multi-Factor Authentication:** How is MFA enforced?
   <div class="question-row">
     <button class="ez-btn" onclick="updateScore(this, 0, 'q1')">🔴</button>
     <button class="ez-btn" onclick="updateScore(this, 1, 'q1')">🟠</button>
     <button class="ez-btn" onclick="updateScore(this, 2, 'q1')">🟡</button>
     <button class="ez-btn" onclick="updateScore(this, 3, 'q1')">🔵</button>
   </div> <br>

2. **#2 — Device Inventory:** Do you know every device on your network?
   <div class="question-row">
     <button class="ez-btn" onclick="updateScore(this, 0, 'q2')">🔴</button>
     <button class="ez-btn" onclick="updateScore(this, 1, 'q2')">🟠</button>
     <button class="ez-btn" onclick="updateScore(this, 2, 'q2')">🟡</button>
     <button class="ez-btn" onclick="updateScore(this, 3, 'q2')">🔵</button>
   </div> <br>



3. **#3 — Admin Separation:** Are admin accounts segregated?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q3')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q3')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q3')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q3')">🔵</button>

4. **#4 — Encryption:** Is data encrypted at rest and in transit?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q4')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q4')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q4')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q4')">🔵</button>

## Phase 2: System Hardening
5. **#5 — Application Control:** Restricting what software can run?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q5')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q5')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q5')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q5')">🔵</button>

6. **#6 — Least Privilege:** Is access limited to the necessary?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q6')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q6')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q6')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q6')">🔵</button>

7. **#7 — Logging:** Do you centralize and monitor logs?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q7')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q7')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q7')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q7')">🔵</button>

## Phase 3: Zero Trust Architecture
8. **#8 — Network Segmentation:** Are systems isolated?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q8')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q8')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q8')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q8')">🔵</button>

9. **#9 — Identity-Based Access:** Replaced broad VPN access?
   <button class="ez-btn" onclick="updateScore(this, 0, 'q9')">🔴</button>
   <button class="ez-btn" onclick="updateScore(this, 1, 'q9')">🟠</button>
   <button class="ez-btn" onclick="updateScore(this, 2, 'q9')">🟡</button>
   <button class="ez-btn" onclick="updateScore(this, 3, 'q9')">🔵</button>

10. **#10 — Machine Identities:** Are APIs/services secured?
    <button class="ez-btn" onclick="updateScore(this, 0, 'q10')">🔴</button>
    <button class="ez-btn" onclick="updateScore(this, 1, 'q10')">🟠</button>
    <button class="ez-btn" onclick="updateScore(this, 2, 'q10')">🟡</button>
    <button class="ez-btn" onclick="updateScore(this, 3, 'q10')">🔵</button>
</div>

---

### Your Progress: <span id="combined-score">0</span> / 30
<div style="height: 20px; background: #ddd; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
  <div id="progress-bar" style="width: 0%; height: 100%; background: #3366ff; transition: width 0.3s;"></div>
</div>

<script>
  let scores = {};
  function updateScore(btn, value, id) {
    scores[id] = value;
    let total = Object.values(scores).reduce((a, b) => a + b, 0);
    document.getElementById('combined-score').innerText = total;
    document.getElementById('progress-bar').style.width = (total / 30) * 100 + "%";
    
    // Find the closest row container and only clear buttons within it
    const row = btn.closest('.question-row');
    row.querySelectorAll('button').forEach(b => {
      b.style.backgroundColor = "#fff";
      b.style.borderColor = "#ccc";
    });
    
    // Set clicked button to green
    btn.style.backgroundColor = "#c8e6c9"; 
    btn.style.borderColor = "#2e7d32";
  }
</script>

[Return to Dashboard](https://oztp-control-platform-651946913194.us-east1.run.app/assessments)
