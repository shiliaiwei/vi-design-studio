# Contributing to VI Design Studio

Thank you for your interest in contributing to VI Design Studio. We welcome community contributions that align with our high engineering rigor, accessibility standards, and strict design directives.

---

## Code of Conduct

All contributors are expected to uphold the standards outlined in our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Core Engineering Principles

1. **Zero-Emoji Policy**: Emojis and decorative Unicode glyphs are strictly prohibited in code, comments, documentation, commit messages, and pull request titles.
2. **100% Solid Colors**: Zero gradients and zero muddy grays. Use exclusively the 8 closed color tokens defined in the VI Design DNA.
3. **Explicit Accessible Labels**: Every interactive `<input>`, `<textarea>`, and `<select>` must be paired with an accessible `<label htmlFor="...">`.
4. **Keyline Iconography**: Standardize on SVG stroke-based keyline icons (`strokeWidth={2}`).
5. **Edge Serverless Ready**: Next.js code must build cleanly via OpenNext and run inside Cloudflare Workers (`workerd`) V8 isolates without relying on Node.js-specific native binaries.

---

## Getting Started

### Prerequisites

* Node.js v20.x or higher
* npm v10.x or higher
* Cloudflare Wrangler CLI (optional for local deployment testing)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/shiliaiwei/vi-design-studio.git
cd vi-design-studio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Development Workflow

### 1. Branch Naming Convention

Create a feature branch from `main` using structured prefixes:

* `feat/<feature-name>`: New component, layout, or prompt include
* `fix/<bug-name>`: Bug fixes and layout corrections
* `docs/<topic>`: Documentation updates
* `refactor/<module>`: Code restructuring without feature alterations

```bash
git checkout -b feat/my-new-component
```

### 2. Commit Message Standards

Commit messages must follow the Conventional Commits specification with zero emojis:

```text
<type>(<optional scope>): <description in lowercase>

[optional body]

[optional footer(s)]
```

Allowed types:
* `feat`: A new feature or layout
* `fix`: A bug fix
* `docs`: Documentation changes
* `style`: Code style changes (formatting, spacing)
* `refactor`: Refactoring code without changing behavior
* `test`: Adding or updating tests
* `chore`: Maintenance tasks, dependencies, tooling

Example:
```bash
git commit -m "feat(courses): add accredited certifications filter"
```

---

## Verification & Testing

Before submitting a Pull Request, you must run all validation checks locally:

```bash
# 1. Run local test suite (checks files, data integrity, accessible labels, zero emojis)
npm test

# 2. Run TypeScript strict typecheck
npm run typecheck

# 3. Run production Next.js build
npm run build
```

All commands must exit with code 0.

---

## Pull Request Submission

1. Push your branch to GitHub:
   ```bash
   git push origin feat/my-new-component
   ```
2. Open a Pull Request against `main`.
3. Complete the PR checklist provided in the template:
   * Descriptive title and summary of changes
   * `npm test` passed with 0 failures
   * Zero emojis verified
   * Types checked with zero errors
   * Responsive layout verified across mobile and desktop
4. A maintainer will review your pull request and provide constructive technical feedback.

---

## Questions & Support

For security inquiries, please review our [Security Policy](./SECURITY.md). For general questions or design alignment, contact the maintainers at `srievi@tuta.io`.
