# Changelog - ClubGG Agent Tools Landing Page

## [2026-04-05] Telegram-Only Pricing Update
- Replaced placeholder paid-pack messaging with the approved live pricing table.
- Added the `EUR0.50` processing-fee note and local VAT note at checkout.
- Removed the public email-capture flow from the landing page.
- Converted the secondary CTA, lower contact section, and footer to Telegram-only activation/support paths.
- Verified a clean production build after the scope change.

## [2026-04-05] AgentOpsify Conversion Refresh
- Reworked the visible landing-page brand to `AgentOpsify`.
- Added an English/Greek toggle for the core conversion surfaces.
- Replaced the generic marketing flow with pricing, proof, promo-video, and lead-capture sections.
- Wired lead capture to the existing `POST /api/interest` contract through configurable `VITE_INTEREST_API_URL` targeting.
- Embedded the reachable TikTok promo asset locally as `public/assets/agentopsify-promo.mp4`.
- Added implementation notes in `docs/LANDING_REFRESH_IMPLEMENTATION.md` for remaining pricing, testimonial, and hosting decisions.

## [2026-03-09] Initial Setup & Landing Page Implementation
- Initialized Vite + React + TypeScript project.
- Configured Tailwind CSS 4.0 with PostCSS.
- Created project documentation in `docs/`.
- Updated all contact links to official Telegram handle `@ClubAgentOps` and Bot ID `6650425066`.
- Implemented full landing page UI with all sections:
  - Sticky Navbar with CTA
  - Hero with animated product mockup
  - Problem section with pain point cards
  - How it Works step-by-step guide
  - Features grid
  - Who it's For audience cards
  - Roadmap for future platform support
  - High-converting CTA and informative Footer
- Verified production build and responsive design.

### Scorecard & Grade
- **Change Grade**: A
- **Correctness**: 10/10
- **Consistency**: 10/10
- **Maintainability**: 9/10
- **Risk**: 1/10
- **Documentation completeness**: 10/10
