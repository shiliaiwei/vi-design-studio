# Changelog

All notable changes to the `vi-design-studio` project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] - 2026-10-29

### Added
* Full-screen minimalist dark glitch offline holding mode in `components/OfflinePage.tsx`.
* Massive responsive `OFFLINE` centerpiece scaling to `20vw` with pure CSS chromatic slice glitch keyframes.
* Cyber coordinate grid and scanline overlay utilities in `app/globals.css`.
* Direct repository homepage link integration on GitHub and Cloudflare Workers live edge.

### Changed
* Transitioned active public routes (`/`, `/courses`, `/includes`) to render the temporary offline holding page during the redesign window.
* Updated root layout to pitch black canvas (`bg-black text-white`).

---

## [1.2.0] - 2026-10-29

### Added
* Curated bilingual Course Catalogue layout at `/courses` with 4 organized sections: Featured Courses, Self-Directed Courses, Accredited Courses, and Training Providers.
* Reusable course discovery components: `SectionHeading`, `CourseCard`, `ProviderCard`, and `CategoryList`.
* Accessible search bar with explicit `<label htmlFor="course-catalogue-search">` binding and live telemetry counters.
* Dual-language English and Khmer typography hierarchy across all 9 courses and 4 national training providers.

---

## [1.1.0] - 2026-10-29

### Added
* System Architecture & Resilience Strategy Includes Library at `/includes` with 53 production prompt includes across 11 domains.
* All 22 System Design Strategies for Fault Tolerance & Resilience (`RES-001` through `RES-022`) integrated under `fault-tolerance` domain.
* 10 interactive keyline UI component showcases in `components/includes/UIComponentShowcase.tsx` (Snackbar, Bottom Sheet, Dialog, Bottom Nav, Toggle Switch, Chips, FAB, Card, Dropdown, Tooltip).
* Automated local verification test runner in `scripts/test-local.js` auditing files, catalog integrity, accessible labels, and zero emojis.
* Executive architecture reference summary in `docs/SYSTEM_DESIGN_AI_AGENTS_SUMMARY.md`.

---

## [1.0.0] - 2026-10-29

### Added
* Initial release of VI Design Studio branded for Srievi Design DNA.
* Built on Next.js 15.5 (App Router), React 19, Tailwind CSS, and OpenNext for Cloudflare Workers.
* 16 Immutable Design Directives implementation.
* 8 Closed Color Tokens palette engine.
* Interactive Component Lab showcasing tactile physics sticker buttons, frosted glass cards, and keyline system icons.
