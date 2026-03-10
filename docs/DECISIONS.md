# Decisions - ClubGG Agent Tools Landing Page

## [2026-03-09] Project Initialization
- Chosen Vite + React + TypeScript for speed and type safety.
- Tailwind CSS for rapid, maintainable styling.
- Single-page architecture to focus on conversion.

## [2026-03-09] Tailwind 4.0 Adoption
- Leveraged Tailwind 4.0's CSS-first configuration via `@theme` and `@apply`.
- **Note**: This may trigger "Unknown at rule" warnings in IDEs (like VS Code) that use standard CSS validators. These are expected and do not affect the production build, as verified by `npm run build`. Recommendation: Install the official Tailwind CSS IntelliSense extension.
