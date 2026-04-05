# Landing Refresh Implementation Notes

Date: 2026-04-05
Issues: AGE-39, AGE-44

## What shipped

- Rebranded the visible landing experience to `AgentOpsify`
- Added a pricing section with `5 free credits on signup`
- Replaced placeholder paid-pack copy with the approved live pricing table:
  - `10 Credits` -> `EUR5`
  - `50 Credits` -> `EUR20` (`Best Value`)
  - `100 Credits` -> `EUR35`
  - `500 Credits` -> `EUR150` (`Pro`)
- Added the approved checkout note: `EUR0.50` processing fee plus local VAT at checkout
- Added a bilingual English/Greek toggle for the main conversion surfaces
- Removed the public email-capture path for this phase
- Converted the lower conversion section and footer to Telegram-only activation/support paths
- Embedded the reachable TikTok promo asset locally at `public/assets/agentopsify-promo.mp4`
- Added testimonial / trust structure that works with text quotes today and can accept richer assets later
- Added footer social-link slots that degrade safely when handles are still pending

## Public conversion path

The landing page no longer sends public traffic into an email/interest endpoint.

The two public conversion paths are now:

- Bot launch: `https://t.me/Agent_Calc_bot`
- Support / pricing questions: `https://t.me/ClubAgentOps`

## Remaining external inputs

- Approved testimonial text and/or screenshot assets
- Final social handles if TikTok and Instagram should become live links
- Production deployment target or release command for this Vite site

## Recommendation

If the board wants this repo to stay Vite-static, the current landing is now compatible with a simple static deploy because it no longer depends on a public email capture endpoint.
