# Device Agent

**Status:** Active — Windows 11 Pro · Windows 11 Home · Linux Server · Linux Desktop

The OZTP Device Agent is a lightweight background process that reports security posture data to the Control Platform. It answers a question that EDR, IDS, and SIEM tools typically don't: **are your Zero Trust controls actually in place and configured correctly?**

---

## Where It Fits in Your Security Stack

Most security tools watch for active threats. The Device Agent watches for something different — configuration drift from a Zero Trust baseline. These are complementary, not competing.

| Tool | Primary Question |
|---|---|
| EDR (CrowdStrike, Defender for Endpoint) | Is there an active threat on this device? |
| SIEM (Splunk, Sentinel) | What happened across my environment? |
| IDS / IPS | Is something probing or breaching my network? |
| **OZTP Device Agent** | **Are the ZT controls actually in place and configured correctly?** |

A device can pass EDR scans all day while running application control in audit mode with no enforcement policies. EDR won't flag that — the agent will.

**The agent doesn't replace your security stack. It tells you whether your Zero Trust foundation is solid enough for the rest of it to stand on.**

### Fits naturally alongside existing tools

- **With EDR** — EDR detects threats; the agent detects configuration gaps. Run both. They answer different questions.
- **With SIEM** — The Control Platform exposes structured check-in data via API. Orgs running Splunk or Sentinel can pull device posture as a log source, adding ZT configuration context to existing security workflows.
- **Without enterprise tooling** — For organizations that haven't deployed EDR or SIEM yet, the agent provides immediate, structured visibility into device-level ZT posture with no vendor dependencies.

---

## Paired With ZT Maturity Assessments

When your organization conducts a Zero Trust Maturity Assessment — whether through [Agent Zeta](/products/agent-zeta/) or the [ZT Maturity Assessment](/products/zt-assessment/) tool — device agent telemetry gives the assessment real answers instead of self-reported ones.

Rather than asking "Do you have application control policies deployed?" and relying on memory, the Control Platform dashboard shows exactly which devices have controls active, which are in audit vs. enforcement mode, and how many policies are loaded — for every enrolled device, in real time.

Assessment and device data live in the same platform, accessible from a single authenticated dashboard.

---

## What It Does

- Registers the device with the Control Platform and receives a per-device API key
- Performs periodic check-ins with OS-native security posture data
- Reports device health status: `healthy`, `warning`, `attention`, or `unknown`
- Collects application control events and configuration state
- Runs with no cloud connectivity required in local/monitor-only mode

---

## Platform Coverage

The agent leans on OS-native security controls — OZTP enhances them, it does not replace them.

### Windows 11 (Pro and Home)

| Data Collected | Description |
|---|---|
| WDAC / App Control | Whether application control is active, mode (audit vs. enforce), policy count |
| Block/audit events | Recent application control events from the CodeIntegrity log |
| Windows Defender | Real-time protection, antivirus status |
| BitLocker / Device Encryption | Drive encryption status |
| Secure Boot | UEFI Secure Boot state |
| Windows Firewall | Firewall active status |
| UAC | User Account Control level |
| TPM | TPM presence and version |

### Linux Server

| Data Collected | Description |
|---|---|
| AppArmor / SELinux | MAC framework present, mode (enforce vs. audit), profile count |
| UFW / iptables | Firewall active and default posture |
| SSH hardening | Password auth, PermitRootLogin |
| auditd | Audit daemon active |
| fail2ban | Brute-force lockout active |
| LUKS | Full-disk encryption detected |
| Unattended upgrades | Automatic security updates enabled |
| Passwordless sudo | Non-root NOPASSWD entries |

### Linux Desktop

All server checks apply, plus desktop-specific posture:

| Data Collected | Description |
|---|---|
| Screen lock | GNOME / KDE / XFCE / logind — timeout and lock-on-idle |
| SSH server | Flags sshd running on a desktop as a configuration concern |
| Bluetooth | Discoverability and pairable state |
| Guest account | LightDM / GDM3 guest login enabled |
| Password hashing | Flags MD5 or DES hashing in /etc/shadow |
| PAM faillock | Account lockout after failed logins configured |
| Snap confinement | Flags snaps running in classic or devmode |
| Browser AppArmor | Firefox / Chromium AppArmor profile active |
| PowerShell Core | Flags pwsh installed without an AppArmor profile |
| Legacy protocols | telnet, rsh, rlogin — installed or running |
| LOTL indicators | Executables in /tmp or /dev/shm, pipe-to-shell patterns in cron, base64 decode in scheduled tasks |
| SELinux booleans | Risky booleans (user_exec_content, allow_execmem) on RHEL/Fedora |

---

## Platform Roadmap

| Platform | Status |
|---|---|
| Windows 11 Pro | **Active** |
| Windows 11 Home | **Active** |
| Linux Server (Ubuntu/Debian, RHEL/Fedora) | **Active** |
| Linux Desktop (Ubuntu/Debian, RHEL/Fedora) | **Active** |
| Windows Server | Planned |
| macOS | Parked |

Working on a deployment that needs one of the planned platforms sooner? [Open an issue](https://github.com/oztp-org/agent-linux/issues) and we'll factor it into prioritization.

---

## On-Device Credential Security

The agent stores two files locally that contain sensitive credentials:

| File | Contains | Sensitivity |
|---|---|---|
| Config file | `org_api_key` — can register new devices | Higher |
| State file | Per-device API key — used for check-ins only | Lower |

**After first registration, remove or blank the `org_api_key` from your config file.** The agent only needs it once to register the device. After that, it uses the per-device key stored in the state file. Leaving the org key in the config unnecessarily expands the blast radius if the file is ever read by an unauthorized party.

**Restrict permissions** on the agent config directory to administrator/root-only access. Standard users should not be able to read the config or state files.

All data in transit is encrypted via HTTPS. OZTP does not have access to your device's file system — credential protection at rest is the responsibility of the device owner and the organization deploying the agent.

!!! info "Planned: Secure Credential Storage"
    A future release will support Windows Credential Manager and Linux keyring storage so credentials are never stored in plaintext on disk.

---

## What the Agent Does Not Do

- Make configuration changes without explicit human approval
- Scan for vulnerabilities or probe the network
- Collect user activity, keystrokes, or personal data
- Send telemetry to OZTP (data goes to your control platform only)

---

## Requirements

### Windows
- Windows 11 Pro or Home
- PowerShell 5.1+ (built-in on Win 11)
- Python 3.10+ (for running from source) **or** the standalone `.exe` (no Python required)
- Network access to your Control Platform instance

### Linux
- Ubuntu 20.04+ / Debian 11+ or RHEL 8+ / Fedora 36+
- Python 3.10+
- `httpx` Python package (`pip install httpx`)
- Root/sudo for systemd timer installation and shadow file checks
- Network access to your Control Platform instance

---

## Getting Started

### 1. Get an Org Key

Register your organization with your Control Platform instance to get an org key.

### 2. Configure the Agent

=== "Windows"

    ```json title="oztp-agent.json"
    {
      "server_url": "https://your-control-platform.run.app",
      "org_api_key": "org_YOUR_ORG_KEY",
      "device_name": "workstation-01"
    }
    ```

=== "Linux Server"

    ```json title="/etc/oztp/oztp-agent.json"
    {
      "server_url": "https://your-control-platform.run.app",
      "org_api_key": "org_YOUR_ORG_KEY",
      "device_name": "my-linux-server"
    }
    ```

=== "Linux Desktop"

    ```json title="/etc/oztp/oztp-agent-desktop.json"
    {
      "server_url": "https://your-control-platform.run.app",
      "org_api_key": "org_YOUR_ORG_KEY",
      "device_name": "my-linux-desktop"
    }
    ```

### 3. Run the Agent

=== "Windows"

    ```powershell
    python oztp_agent.py --config oztp-agent.json
    ```

=== "Linux Server"

    ```bash
    # One-time run
    sudo python3 oztp_agent_linux.py --config /etc/oztp/oztp-agent.json

    # Install as systemd service (runs every 15 minutes)
    sudo cp oztp_agent_linux.py /opt/oztp/
    sudo cp oztp-agent.service oztp-agent.timer /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable --now oztp-agent.timer
    ```

=== "Linux Desktop"

    ```bash
    # One-time run
    sudo python3 oztp_agent_linux_desktop.py --config /etc/oztp/oztp-agent-desktop.json

    # Install as systemd service (runs every 15 minutes)
    sudo cp oztp_agent_linux_desktop.py /opt/oztp/
    sudo cp oztp-agent-desktop.service oztp-agent-desktop.timer /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable --now oztp-agent-desktop.timer
    ```

---

## Source

- Windows agent: [github.com/oztp-org/oztp-control-platform/tree/main/agent](https://github.com/oztp-org/oztp-control-platform/tree/main/agent)
- Linux agents: [github.com/oztp-org/agent-linux](https://github.com/oztp-org/agent-linux)
