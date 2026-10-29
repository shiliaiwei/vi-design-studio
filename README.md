# vi-design-studio

ស្ទូឌីយោរចនា និងស្តង់ដារប្រព័ន្ធវិស្វកម្ម VI ផ្អែកលើបច្ចេកវិទ្យា Next.js 15, Tailwind CSS និង Cloudflare Workers។

#vi #design-system #liquid-glass #cloudflare-workers #nextjs #tailwind-css #clean-code #zero-emoji

---

## Overview

`vi-design-studio` is a high-performance design studio and component engineering platform branded for VI (Srievi Design DNA). It enforces the 16 immutable design directives: strictly 100% solid colors, zero emojis, zero gradients, 8 closed color tokens, tactile sticker physics, and edge-native deployment on Cloudflare Workers via OpenNext.

## Technical Architecture

* **Framework**: Next.js 15 (App Router)
* **Runtime**: Cloudflare Workers via `@opennextjs/cloudflare`
* **Styling**: Tailwind CSS with custom VI design token extension
* **Typography**: Google Sans + SF Mono
* **Color System**: 8 Closed Solid Tokens (Canvas White, Slate-900, Primary Emerald, Deep Emerald, Eager Green, Spark Blue, Accent Cyan, Accent Crimson)

## Commands

```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Type check
npm run typecheck

# Build for Cloudflare Workers
npm run deploy
```
