# VI Design Studio

> Authoritative Design System, System Architecture Prompts Library & Bilingual Course Discovery Platform

[![Runtime](https://img.shields.io/badge/Runtime-Cloudflare%20Workers-orange.svg)](https://workers.cloudflare.com/)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2015.5-black.svg)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Zero Emoji](https://img.shields.io/badge/Policy-Zero%20Emoji-10B981.svg)](./CONTRIBUTING.md)

* **Live Edge Gateway**: [https://vi-design-studio.shiliaiwei.workers.dev](https://vi-design-studio.shiliaiwei.workers.dev)
* **GitHub Repository**: [https://github.com/shiliaiwei/vi-design-studio](https://github.com/shiliaiwei/vi-design-studio)

---

## 1. Overview / សេចក្តីផ្តើម

`vi-design-studio` is a high-performance design engineering platform and repository of reusable architecture standards branded for the VI (Srievi) design identity. It operates on modern serverless edge architecture, combining an authoritative component laboratory, a 53-item prompt library for distributed system resilience, a curated bilingual course catalogue, and an ultra-minimalist dark cyber glitch holding mode.

ស្ទូឌីយោរចនា និងស្តង់ដារប្រព័ន្ធវិស្វកម្ម VI ផ្អែកលើបច្ចេកវិទ្យា Next.js 15, Tailwind CSS និងដំណើរការលើ Cloudflare Workers គែមបណ្តាញពិភពលោក។

---

## 2. The 16 Immutable Design Directives

Every interface, component, and prompt in this repository strictly enforces the 16 VI design directives:

| # | Directive | Rule & Specification |
| :--- | :--- | :--- |
| 01 | **100% Solid Colors** | Strictly zero gradients and zero muddy grays. Use exclusively closed palette tokens. |
| 02 | **Zero-Emoji Policy** | Absolute prohibition of emojis and decorative Unicode glyphs in code, UI, and docs. |
| 03 | **8 Closed Color Tokens** | Canvas White, Slate-900, Primary Emerald, Deep Emerald, Eager Green, Spark Blue, Cyan, Crimson. |
| 04 | **Tactile Sticker Physics** | Physical border-bottom button elevation with 3px active spring compression. |
| 05 | **Frosted Specular Glass** | 20px blur with 180% saturation cards with subtle 1px border elevation. |
| 06 | **Monospace Pill Telemetry** | SF Mono / Menlo uppercase badges with bracketed status displays (e.g. `[ STATUS: ACTIVE ]`). |
| 07 | **Keyline Iconography** | Stroke-based 2px SVG icons adhering to Apple HIG keyline alignment. |
| 08 | **Accessible Label Binding** | Every `<input>` and `<textarea>` must have an explicit accessible `<label htmlFor="...">`. |
| 09 | **Edge Serverless Runtime** | Zero Node.js native binary dependencies; 100% compatible with V8 worker isolates. |
| 10 | **Waterfall Timing** | Deterministic 1.60s post-reveal holds and staged entrance transitions. |
| 11 | **Responsive Grid System** | Mobile-first 1-to-3 column responsive layout adapting across 375px to 1920px. |
| 12 | **Bilingual Typography** | Khmer (Google Sans / Khmer OS) paired harmoniously with English uppercase headers. |
| 13 | **Resilience Engineering** | Implementation of all 22 distributed fault tolerance and recovery strategies. |
| 14 | **Reusable Componentry** | Standardized cards, badges, and headers shared across multiple domain sections. |
| 15 | **Minimalist Holding Mode** | Pitch black (`#000000`) canvas with single-word 20vw cyber chromatic slice glitch. |
| 16 | **Immutable Codebase Hygiene** | Automated test enforcement (`npm test`) with zero compiler warnings. |

---

## 3. Core Architectural Modules

### A. System Architecture & Resilience Includes Library (`/includes`)
* **53 Production Prompt Includes** spanning 11 architectural domains:
  * Distributed Systems, Backend Architecture, Databases, Cloud & DevOps, Application Security, Networking, Testing & QA, AI Agents & LLMs, Frontend Engineering, Microservices Patterns, and Fault Tolerance.
* **All 22 Fault Tolerance Strategies** (`RES-001` through `RES-022`):
  * Redundancy, Failover, Load Balancing, Health Checks, Circuit Breaker, Retry Policy, Exponential Backoff, Timeouts, Bulkheads, Graceful Degradation, Replication, Backups, Disaster Recovery, Multi-AZ, Multi-Region, Idempotency, Message Queues, Dead Letter Queues, Rate Limiting, Chaos Engineering, Observability, and Recovery Testing.
* **Inspector Drawer & Domain Ribbon**: Live search, interactive drawer with copyable raw prompt text, and domain filtering.

### B. Interactive Keyline UI Component Lab (`/includes` & `components/includes`)
Showcases 10 interactive keyline UI components with live state management and code generation:
1. **Snackbar**: Transient feedback notification with auto-dismiss timer.
2. **Bottom Sheet**: Mobile drawer overlay with drag handle and action items.
3. **Dialog**: Modal dialog with backdrop blur and confirm/cancel actions.
4. **Bottom Nav**: 4-tab mobile navigation bar with active indicator.
5. **Toggle Switch**: Accessible binary state switch with keyboard support.
6. **Chips**: Selectable filter chips with active counter pills.
7. **Floating Action Button (FAB)**: Primary floating action button with tactile elevation.
8. **Card**: Interactive content container with border hover highlight.
9. **Dropdown Menu**: Keyboard-navigable menu with selected item display.
10. **Tooltip**: Hover/focus informative bubble with directional caret.

### C. Curated Course Catalogue (`/courses`)
A bilingual course discovery interface organized into 4 distinct sections:
1. **Featured Courses** (វគ្គសិក្សាពិសេស): Advanced engineering tracks (`ARCH-401`, `AI-301`, `SEC-302`).
2. **Self-Directed Courses** (វគ្គសិក្សាស្វ័យសិក្សា): Independent laboratory modules (`CLOUD-201`, `DB-201`, `AI-101`).
3. **Accredited Courses** (វគ្គសិក្សាមានការទទួលស្គាល់): Official certified credentials (`PROD-501`, `K8S-402`, `SEC-501`).
4. **Training Providers** (ស្ថាប័នបណ្តុះបណ្តាល): Verified national academies (IDT, NCEC, CSDA, ASLAB).
* Reusable components: `SectionHeading`, `CourseCard`, `ProviderCard`, `CategoryList`.
* Accessible search with explicit `<label htmlFor="course-catalogue-search">` and live counters.

### D. Full-Screen Minimalist Offline Holding Mode (`/`)
* Ultra-minimalist obsidian pitch black canvas (`#000000`).
* Massive responsive `OFFLINE` centerpiece scaling to `20vw`.
* Multi-layer pure CSS chromatic slice glitch animation with `#FF0050` crimson and `#00FFFF` cyan dual offsets.
* Completely free of secondary text, navigation bars, or emojis.

---

## 4. Technical Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.5.28` | Static site generation and edge rendering |
| **Runtime** | Cloudflare Workers (`workerd`) | Latest | Global V8 serverless isolate execution |
| **Edge Adapter** | OpenNext Cloudflare | `1.20.14` | Next.js bundle translation to Cloudflare Worker |
| **UI Library** | React | `19.1.0` | Declarative user interface components |
| **Styling** | Tailwind CSS | `3.4.17` | Utility-first CSS with VI design token extension |
| **Language** | TypeScript | `5.7.3` | Strict static type checking |
| **Deployment** | Cloudflare Wrangler CLI | `4.155.0` | Asset upload and worker trigger deployment |

---

## 5. Getting Started

### Prerequisites
* Node.js `v20.x` or higher
* npm `v10.x` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/shiliaiwei/vi-design-studio.git
cd vi-design-studio

# Install dependencies
npm install

# Run local development server
npm run dev
```

Visit `http://localhost:3000` to view the local application.

---

## 6. Development & Verification CLI

```bash
# Run local verification suite (audits files, resilience codes, accessible labels, zero emojis)
npm test

# Run strict TypeScript typecheck
npm run typecheck

# Run production Next.js build
npm run build

# Build for Cloudflare Workers via OpenNext
npx opennextjs-cloudflare build

# Deploy to Cloudflare Workers edge
npm run deploy
```

---

## 7. Project Structure

```text
vi-design-studio/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
├── app/
│   ├── courses/page.tsx         # Course Catalogue route
│   ├── includes/page.tsx        # Includes Library route
│   ├── globals.css              # Tailwind + VI button physics & glitch keyframes
│   ├── layout.tsx               # Root HTML layout (dark canvas)
│   └── page.tsx                 # Primary holding view (renders OfflinePage)
├── components/
│   ├── courses/                 # Reusable Course Catalogue components
│   │   ├── CategoryList.tsx
│   │   ├── CourseCard.tsx
│   │   ├── CourseCatalogueView.tsx
│   │   ├── ProviderCard.tsx
│   │   └── SectionHeading.tsx
│   ├── icons/
│   │   └── KeylineSystemIcons.tsx # 25+ SVG stroke keyline system icons
│   ├── includes/                # Includes Library explorer & showcases
│   │   ├── DomainFilterRibbon.tsx
│   │   ├── IncludeCard.tsx
│   │   ├── IncludeInspector.tsx
│   │   ├── IncludesExplorer.tsx
│   │   └── UIComponentShowcase.tsx
│   ├── Header.tsx               # Primary sticky navigation header
│   ├── Hero.tsx                 # Brand showcase hero section
│   ├── OfflinePage.tsx          # Minimalist 20vw dark glitch offline page
│   ├── PaletteTokens.tsx        # 8 Closed Tokens visual guide
│   ├── ComponentLab.tsx         # Interactive tactile UI sandbox
│   ├── DirectivesList.tsx       # 16 Design Directives interactive grid
│   └── Footer.tsx               # System telemetry edge footer
├── docs/
│   └── SYSTEM_DESIGN_AI_AGENTS_SUMMARY.md # Executive architecture reference
├── lib/
│   ├── courses-data.ts          # Curated bilingual course & provider dataset
│   ├── includes-data.ts         # 53 architecture & resilience prompt includes
│   ├── types-courses.ts         # TypeScript interfaces for course discovery
│   └── types-includes.ts        # TypeScript interfaces for prompt library
├── scripts/
│   └── test-local.js            # Automated verification test suite
├── CHANGELOG.md                 # Semantic versioning release log
├── CODE_OF_CONDUCT.md           # Contributor Covenant with zero-emoji standard
├── CONTRIBUTING.md              # Contribution workflow & guidelines
├── LICENSE                      # MIT License (2026)
├── open-next.config.ts          # OpenNext Cloudflare Workers adapter config
├── package.json                 # Dependencies and npm scripts
├── SECURITY.md                  # Security policy and disclosure protocol
├── tailwind.config.ts           # Closed palette and border radius tokens
├── tsconfig.json                # Strict TypeScript configuration
└── wrangler.jsonc               # Cloudflare Workers deployment config
```

---

## 8. Repository Governance & Quality Standards

* **[LICENSE](./LICENSE)**: MIT License with 2026 copyright attribution.
* **[CODE OF CONDUCT](./CODE_OF_CONDUCT.md)**: Contributor Covenant standard enforcing professional conduct and zero emojis.
* **[CONTRIBUTING](./CONTRIBUTING.md)**: Detailed instructions for submitting pull requests, branch conventions, and testing.
* **[SECURITY](./SECURITY.md)**: Vulnerability disclosure policy and supported release tiers.
* **[CHANGELOG](./CHANGELOG.md)**: Structured version history from v1.0.0 through v1.3.0.

---

## 9. Maintainers & Contact

* **Organization**: VI Design Studio / Srievi Engineering Standards
* **Contact & Security**: `srievi@tuta.io`
* **Live Service**: [https://vi-design-studio.shiliaiwei.workers.dev](https://vi-design-studio.shiliaiwei.workers.dev)
