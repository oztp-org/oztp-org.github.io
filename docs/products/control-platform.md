# Control Platform

**Status:** Active — Phase 2 (Monitoring First)

The OZTP Control Platform is a lightweight cloud API that serves as the central hub for device check-ins, telemetry storage, and health reporting across an organization.

---

## What It Does

- Accepts device registrations and issues per-device API keys
- Receives periodic check-ins from enrolled devices
- Stores WDAC posture data and application control events
- Displays device health status on a web dashboard
- Supports multi-tenant deployments (each org sees only its own devices)

## What It Does Not Do (Yet)

- Push configuration changes to devices
- Generate alerts or notifications
- Aggregate data across organizations

---

## Architecture

The control platform runs as a containerized Python/FastAPI application on GCP Cloud Run, backed by a Cloud SQL PostgreSQL database. It is designed to be self-hostable — any organization can run their own instance.

```
Device Agent  →  HTTPS check-in  →  Control Platform API  →  PostgreSQL
                                           ↕
                                     Web Dashboard
```

**Auth model:**

| Key Type | Used By | Scope |
|---|---|---|
| `X-Org-Key` | Org administrator | Register devices, view all org devices |
| `X-API-Key` | Device agent | Check in, report own status/events |

---

## Self-Hosting

The platform is open source and fully self-hostable. Documentation and deployment instructions are available in the [GitHub repository](https://github.com/oztp-org/oztp-control-platform).

Minimum requirements for self-hosting:
- Any container platform (Cloud Run, Railway, Fly.io, Docker)
- PostgreSQL 14+ database
- HTTPS termination (Cloud Run handles this automatically)

---

## Hosted Instance

OZTP maintains a hosted instance for organizations that prefer not to self-host. Device check-ins and telemetry storage costs are passed through at cost.

!!! note "Coming Soon"
    Hosted instance onboarding documentation is in progress.
