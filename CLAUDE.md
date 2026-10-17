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
- Payment: Bank Transfer, PayID, Crypto (10% discount)
- No invented stats, awards or press mentions.
- No GST wording anywhere (prices, checkout, emails, admin, FAQs, agent files): ABN Lookup shows The Torque Team Pty Ltd is not registered for GST (checked 17 Oct 2026). Totals = goods + shipping (10% of goods, free from $9,900) - crypto discount. Re-add GST only if the company registers.

## Orders, enquiries and the Reply Portal (do not regress)
- All outbound email is branded HTML from `src/lib/emailTemplates.ts` (light shell, dark header band, explicit `bgcolor` + `background-color` on every table/td, `color-scheme: light`). Never send plain-text-only or dark-body emails. `src/lib/mailer.ts` adds the plain-text alternative automatically.
- Owner notification emails carry a "View order in admin" / "View enquiry in admin" button -> `/admin/?order=<ref>` or `/admin/?enquiry=<ref>`. The admin page reads those params after sign-in and opens the record with its reply composer.
- Orders: composer sends a structured payment-details email (`parsePaymentDetail` splits pasted "Label: value" lines) or a general reply. Enquiries: reply composer. Wording and payment methods live in `REPLY` in `src/config/site.js`.
- Storage is Upstash Redis via `src/lib/store.ts` (`KV_REST_API_URL/TOKEN`). Prices are always recalculated server-side in `app/api/forms/order/route.ts`.
- Env vars (Vercel only, never in the repo): SMTP_HOST/PORT/USER/PASS/FROM, ORDER_NOTIFY_TO, ADMIN_PASSCODE, SESSION_SECRET, KV_*.

## Bundle and data rules (do not regress)
- The product catalogue lives in `src/config/products.js` (data in `catalog-products.generated.js`). Client components must NOT import it. Server pages pass the few products a client component needs as props, or the component fetches them from a small API route (`/api/search-suggest/`, `/api/cart-products/`). Only `/shop` and `/compare` carry the full catalogue.
- `src/lib/faq.ts` and `src/lib/seo.ts` pull in large JSON files: import them only in server components and pass the result down as props.
- Robots rules come only from `app/robots.ts` (allow-all, single group). Do not recreate `public/robots.txt`.
- Do not add `initial={{ opacity: 0 }}` animation wrappers around above-the-fold content (it hides the largest image until JavaScript runs).
- Brand image files are made by `scripts/gen-brand-assets.mjs` (logo, favicon, default social image).
