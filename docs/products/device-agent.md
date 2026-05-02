# Device Agent

**Status:** Active — Windows 11 Pro

The OZTP Device Agent is a lightweight background process that runs on Windows 11 Pro endpoints and reports security posture data to the Control Platform.

---

## What It Does

- Registers the device with the Control Platform and receives a per-device API key
- Performs periodic check-ins with WDAC posture data
- Collects and reports Windows Defender Application Control (WDAC) events
- Reports device health status: `healthy`, `warning`, `attention`, or `unknown`
- Runs with no cloud connectivity required in local/monitor-only mode

## Current Focus: WDAC Monitoring

The initial release focuses on Windows Defender Application Control visibility:

| Data Collected | Description |
|---|---|
| WDAC presence | Whether App Control for Business is active on the device |
| Policy mode | Audit mode vs. enforcement mode |
| Policy version | Currently loaded WDAC policy information |
| Block/audit events | Recent application control events from the CodeIntegrity log |
| Device identity | Hostname, OS version, agent version |
| Check-in timestamp | Last successful communication with the control platform |

---

## What the Agent Does Not Do

- Make configuration changes without explicit human approval
- Scan for vulnerabilities or probe the network
- Collect user activity, keystrokes, or personal data
- Send telemetry to OZTP (data goes to your control platform only)

---

## Requirements

- Windows 11 Pro
- PowerShell 5.1+ (built-in on Win 11)
- Python 3.10+ (for running from source) **or** the standalone `.exe` (no Python required)
- Network access to your Control Platform instance

---

## Getting Started

### 1. Get an Org Key

Register your organization with your Control Platform instance to get an `X-Org-Key`.

### 2. Configure the Agent

```json title="oztp-agent.json"
{
  "server_url": "https://your-control-platform.run.app",
  "org_api_key": "org_YOUR_ORG_KEY",
  "device_name": "workstation-01"
}
```

### 3. Run the Agent

```powershell
python oztp_agent.py --config oztp-agent.json
```

Or use the standalone `.exe` (no Python required):

```powershell
.\oztp-agent.exe --config oztp-agent.json
```

!!! note "Coming Soon"
    Standalone Windows executable packaging is in progress.

---

## Source

[github.com/oztp-org/oztp-control-platform/tree/main/agent](https://github.com/oztp-org/oztp-control-platform/tree/main/agent)
