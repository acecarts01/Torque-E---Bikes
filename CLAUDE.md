# TORQUE E - BIKES Australia — project instructions

React/Next.js ecommerce site for high-performance electric bikes and conversion kits. Deployed on Vercel via GitHub.

## Non-negotiable: Australian E-Bike Compliance
- High-powered motors (>250W) MUST be framed as "Off-road / Private property use only".
- Never claim 72V or 3000W kits are "street legal".
- Only 250W pedal-assist kits are street legal.
- Lithium batteries are Class 9 Dangerous Goods.

## Architecture
`src/config/site.js` is the single source of truth.
- Adding entries to `PRODUCTS` or `CATEGORIES` auto-generates pages and metadata.
- `scripts/gen-agent-files.mjs` regenerates all agent files (llms.txt, robots.txt, etc.) from config.
- `vercel.json` manages headers and redirects.

## Rules
- One <h1> per page.
- Meta descriptions ~150 characters.
- Product images: 4:3 white frame, processed via sharp.
- Emails entity-encoded (&#64;) in HTML and JSON-LD.
- Framework Preset on Vercel must be "Next.js".

## Brand facts
- Founded: 2007
- HQ: Brisbane City, QLD
- Ships: Australia-wide (DG Certified)
- Payment: Bank Transfer, PayID, Crypto (5% discount)
- No invented stats, awards or press mentions.
