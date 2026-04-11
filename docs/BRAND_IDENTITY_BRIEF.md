# AgentOpsify Brand Identity Brief

Updated: 2026-04-11
Canonical repo: `https://github.com/6maxservices/clubgglanding`
Local mirror: `/mnt/c/dev/clubgglanding`

This brief documents the already-approved brand system currently implemented in the live landing repository. It is a compliance document, not permission to redesign anything.

## 1. Canonical Product Repositories

These are the only approved product sources of truth:

- Landing page: `https://github.com/6maxservices/clubgglanding`
- Landing page local mirror: `/mnt/c/dev/clubgglanding`
- Telegram bot / backend: `https://github.com/6maxservices/clubggcalc`
- Telegram bot / backend local mirror: `/mnt/c/dev/clubggcalc`

No agent may invent a new landing page, alternate brand repo, or parallel acquisition surface without explicit board approval.

## 2. Product Identity

- `AgentOpsify` is the operator platform brand presented on the landing page.
- `ClubGG Agent Tools` remains the product framing used in SEO and metadata where discovery still depends on ClubGG search intent.
- The user-facing activation path is Telegram-first.
- Public conversion path:
  - Bot launch: `https://t.me/Agent_Calc_bot`
  - Support / pricing questions: `https://t.me/ClubAgentOps`
- The landing page is an acquisition funnel, not an email capture system.

## 3. Approved Visual Identity

Source files:

- Theme tokens: `src/index.css`
- Layout composition: `src/App.tsx`
- Brand lockup usage: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- Hero and CTA treatment: `src/components/Hero.tsx`, `src/components/CTA.tsx`

### Core palette

Extracted from the live implementation:

- Background: `#0f172a` (`--color-background`)
- Primary CTA blue: `#1e40af` (`--color-primary`)
- Accent cyan: `#06b6d4` (`--color-accent`)
- White text: `#ffffff`

Supporting UI colors actively used across the landing:

- Slate border / panel range: `#334155` (`slate-700`), `#1e293b` (`slate-800`), `#0f172a` (`slate-900`)
- Muted text range: `#94a3b8` (`slate-400`), `#64748b` (`slate-500`)
- CTA hover blue: `#1d4ed8` (`blue-700`)
- Telegram badge blue: `#229ED9`

### Typography

Approved font stack from `src/index.css`:

- Primary font family: `Inter`
- Fallback stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`

Approved weight usage in the live landing:

- `500` medium for navigation and supporting labels
- `600` semibold for buttons and eyebrow labels
- `700` bold for most section headings and brand text
- `800` extrabold for hero and major CTA headlines
- `900` black for small emphasis badges

Approved size pattern from the current landing:

- Brand wordmark: `text-xl`
- Eyebrow / utility labels: `text-xs`
- Hero body: `text-lg` to `text-xl`
- Section headings: `text-3xl` to `text-5xl`
- Hero headline: `text-4xl`, `md:text-6xl`, `lg:text-7xl`
- Primary CTA emphasis: `text-lg` to `text-xl`

### Layout and component style

The approved landing system uses:

- dark-mode background
- glass-style cards with soft borders and backdrop blur
- blue-to-cyan emphasis instead of warm or pastel palettes
- rounded corners with high-contrast typography
- light glow treatments behind hero and CTA sections

The approved section order is:

1. Navbar
2. Hero
3. Problem
4. How It Works
5. Features
6. Who It Is For
7. Pricing / Roadmap
8. Final CTA
9. Footer

Do not replace this with a different visual language without board approval.

### Approved logo and brand assets

Approved assets currently used by the live landing:

- Logo / favicon: `public/assets/clubgg-logo.png`
- Hero background: `public/assets/hero-banner.png`
- Open Graph image: `public/assets/og-image.png`
- Workflow image: `public/assets/steps-mockup.png`
- Problem image: `public/assets/problem-messy.png`
- Product screen: `public/assets/miniapp-settlement-screen.png`
- Security visual: `public/assets/feature-security.png`

Agents may reference these assets. They may not replace them casually, generate alternate logos, or create new wordmarks.

## 4. Brand Voice

Audience:

- Greek poker agents
- club managers
- semi-professional to professional operators dealing with recurring weekly settlement work

Tone:

- direct
- professional
- operational
- poker-community-native
- confident without hype

Language rule:

- Greek-first when writing social or community-facing material for the Greek poker audience
- English for engineering, documentation, repo notes, and technical implementation

Messaging themes that match the shipped landing:

- faster weekly settlements
- less manual admin
- Telegram-native workflow
- OCR-assisted extraction with review steps
- accuracy, trust, and operational reliability

## 5. Non-Negotiable Product Messaging

Agents must preserve these product truths:

- The workflow starts in Telegram.
- The public CTA is Telegram-only.
- Paid packs are:
  - `10 Credits` -> `EUR5`
  - `50 Credits` -> `EUR20` (`Best Value`)
  - `100 Credits` -> `EUR35`
  - `500 Credits` -> `EUR150` (`Pro`)
- Checkout note: `EUR0.50` processing fee plus local VAT at checkout.
- The product supports a guided workflow with review, not fake "magic" automation.

## 6. What Agents Are Not Allowed To Do

- Do not redesign brand-facing assets without a board-approved issue and PR review.
- Do not invent new colors, fonts, icon systems, or layout directions.
- Do not create a new logo, wordmark, or brand variant.
- Do not change the public CTA away from Telegram without explicit board approval.
- Do not reintroduce public email capture into the landing funnel.
- Do not use the bootstrap Next.js workspace as a visual source of truth for the public brand.
- Do not publish social content that conflicts with this brief, `docs/BRAND_AESTHETIC_LOOKBOOK.md`, or the live landing implementation.

## 7. Operational Guidance For Agents

- If a task touches public visuals, inspect `clubgglanding` first.
- If a task touches brand copy, keep it aligned with the Telegram-first operational promise.
- If a task needs a new asset and it does not already exist under `public/assets/`, stop and escalate.
- UI/UX/brand-facing changes require a pull request and explicit board approval before anything goes live.

## 8. Distribution Requirement

After this brief is accepted, Zikos must distribute it and collect written acknowledgement from:

- Melina
- Aglaia
- Dafni
- Sotiris
- Leonidas
- Miltos
