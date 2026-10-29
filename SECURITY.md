# Security Policy

## Supported Versions

VI Design Studio maintains the latest release branch with active security patches and dependency updates:

| Version | Supported | Status |
| :--- | :--- | :--- |
| `1.3.x` | Yes | Active production release |
| `1.2.x` | Yes | Maintenance updates |
| `1.1.x` | No | Superseded |
| `1.0.x` | No | Superseded |

---

## Reporting a Vulnerability

The VI Design Studio team takes the security of our design system, edge runtime workers, and component libraries seriously.

If you believe you have discovered a security vulnerability in this project:

1. **Do not create a public GitHub issue.** Public disclosure before verification increases risk for all users.
2. Send a confidential report directly via email to:
   * **Security Contact**: `srievi@tuta.io`
   * **Subject**: `[SECURITY VULNERABILITY] vi-design-studio: <brief description>`
3. Please include the following details in your report:
   * Detailed description of the vulnerability and attack vector
   * Step-by-step instructions or proof-of-concept to reproduce the issue
   * Affected URLs, components, or edge Worker configurations
   * Potential impact (e.g. data exposure, denial of service, prototype pollution)
   * Any suggested remediations or patches

---

## Response Timeline & Disclosure Process

* **Initial Acknowledgment**: Within 48 hours of receipt.
* **Triage & Assessment**: Within 5 business days, validating severity and impact.
* **Fix & Verification**: A security patch will be prepared and tested locally and on a staging edge runtime.
* **Public Release**: A patch release will be published, accompanied by an entry in `CHANGELOG.md` and appropriate credit to the reporter.

---

## Security Engineering Principles

VI Design Studio enforces the following built-in security defenses:

* **Edge Isolation**: Running inside Cloudflare Workers (`workerd`) V8 isolates prevents host filesystem manipulation and operating-system level command injection.
* **Strict Zero-Trust Inputs**: All interactive inputs and search filters are sanitized, preventing Cross-Site Scripting (XSS) and injection vulnerabilities.
* **Explicit Accessible Controls**: All form fields enforce `<label htmlFor="...">` attributes, mitigating UI redressing and accessibility hijacking.
* **Content Security Policy (CSP)**: HTTP response headers on Cloudflare restrict unauthorized scripts, frames, and resource origins.
* **Continuous Dependency Audits**: Dependencies are audited via Dependabot and `npm audit` to detect and patch supply-chain vulnerabilities promptly.
