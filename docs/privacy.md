# Privacy Policy

**Effective date:** May 2026  
**Last updated:** May 2026  
**Contact:** [info@oztp.org](mailto:info@oztp.org)

---

## The Short Version

OZTP collects only the security posture data your devices send in. We do not collect personal files, emails, browsing history, or user account information. We do not sell data. You can request deletion at any time.

---

## Who We Are

The Open Zero Trust Project (OZTP) provides free, open source Zero Trust security tools and resources. Our platform helps organizations assess and monitor device security posture. We are a data **processor** — your organization is the data **controller** responsible for the devices you enroll.

---

## What We Collect

### When you register an organization

| Data | Purpose |
|------|---------|
| Organization name | Display in your dashboard |
| Organization API key (stored as a one-way hash) | Authenticate your devices |

No email address, billing information, or personal account is required to use OZTP.

### When a device checks in

| Data | Purpose |
|------|---------|
| Device name (set by your admin) | Identify the device in your dashboard |
| Hostname | Display device identity |
| OS name and version | Platform context for posture assessment |
| Security posture results | WDAC status, Defender, Firewall, Secure Boot, TPM, UAC — pass/warn/fail |
| Security event summaries | WDAC event type, level, and sanitized message |
| Check-in timestamp | Track device activity |

### What we do NOT collect

- Personal files, documents, or user data from enrolled devices
- Email addresses or user account credentials
- Browsing history or application usage
- Keystrokes or screen content
- Social Security numbers, financial data, or health information
- Any data from non-enrolled devices

### Event message sanitization

Windows security event log messages can include file system paths that contain OS usernames (e.g., `C:\Users\johndoe\...`). Before storing any event message, OZTP automatically replaces the username portion with `[user]`. Raw event JSON is never stored.

### Agent Zeta (AI Advisor)

Conversations with Agent Zeta on the OZTP website are sent directly to the AI provider to generate a response. **OZTP does not store chat history.** Each conversation is stateless — nothing is retained after your session ends.

---

## How We Use Data

- To display your organization's device security posture in your dashboard
- To compute health states and posture scores
- To support your Zero Trust assessment and hardening efforts

We do not use your data for advertising, profiling, or any purpose unrelated to the security service you have configured.

---

## Data Retention

| Data type | Retention |
|-----------|-----------|
| Organization and device records | Retained until you request deletion |
| Security posture results | Rolling 90-day window (older records pruned automatically) |
| Security events | Rolling 90-day window |
| Agent Zeta conversations | Not retained |

---

## Data Security

- All data in transit is encrypted via HTTPS/TLS
- Data at rest is encrypted by our cloud infrastructure (Google Cloud SQL)
- API keys are stored as one-way SHA-256 hashes — we cannot recover or display your key after issuance
- Access to your organization's data requires your API key

---

## Your Rights

Regardless of where you are located, you can:

- **Access** — request a summary of data OZTP holds about your organization
- **Delete** — request deletion of your organization and all associated device data
- **Portability** — request an export of your organization's posture data

To exercise any of these rights, email [info@oztp.org](mailto:info@oztp.org) with your organization name.

### GDPR (European Union)

If your organization includes individuals in the EU, OZTP acts as a data processor on your behalf. Our legal basis for processing is **contract performance** (providing the service you have configured) and **legitimate interests** (maintaining service integrity and security).

You have the rights listed above under GDPR Articles 15–20, including the right to erasure (Article 17) and data portability (Article 20).

### CCPA / CPRA (California)

OZTP does not sell personal information. OZTP does not share personal information with third parties for cross-context behavioral advertising. California residents have the right to know what personal information is collected and to request deletion.

---

## Third Parties

| Service | Purpose | Data shared |
|---------|---------|-------------|
| Google Cloud (GCP) | Infrastructure — database and application hosting | Device posture data, stored encrypted |
| Anthropic (Claude API) | Powers Agent Zeta responses | Your chat message only — no org or device data |

We do not share your data with analytics platforms, advertising networks, or data brokers.

---

## Changes to This Policy

If we make material changes, we will update the effective date at the top of this page. Continued use of the platform after changes constitutes acceptance.

---

## Contact

Questions about this policy or data requests:  
[info@oztp.org](mailto:info@oztp.org)  
Open Zero Trust Project
