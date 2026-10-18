# SEO audit part 2: Phases 2 to 8 (16 Oct 2026)
Continues docs/seo-audit-2026-10-16.md. Nothing below has been applied to the live site. Items marked GATE touch URLs, canonicals or robots rules and need approval first.

## New findings from the content checks
| P | Finding | Evidence | Recommendation |
|---|---|---|---|
| P0 | Unsupported trust claims | Homepage and footer show "Trustpilot TrustScore 4.9", "987+ Reviews", "Join 987+ Australian riders" and "Verified Rider" labels. They are hard-coded in `src/components/ReviewSlider.tsx` and `TrustpilotFooter.tsx` with no link, source or review data. Project rule: "No invented stats". Google added a fake/incentivised review guideline on 24 Jul 2026. Australian Consumer Law also treats unsupported review claims as misleading. | Remove the score, count and "Verified" labels until real, linkable reviews exist. Keep or remove the 8 named testimonials only if each is a real customer who agreed. Never mark them up as Review schema. |
| P1 | Templated FAQs | 490 product pages carry 1,960 FAQ items but only 54 distinct answers once product names are masked; four templates are reused 173 to 343 times | Replace with 2 genuinely product-specific answers per page, or remove FAQ blocks and JSON-LD from product pages |
| P1 | Thin brand pages | 118 brands in the catalogue; 47 have a single product, 46 have 2 to 4. 64 brand pages exist (median 386 words) | Keep brand pages only for brands with 5+ products or real brand content; noindex or merge the rest (GATE: changes indexable URLs) |
| P2 | Thin categories | care-tools-and-hydration (5 products), locks-and-security (4) | Fold into a parent category or enrich (GATE) |
| P2 | Placeholder products | 4 products still named "TBC" | Name them or hide them |

## Phase 2: robots.txt proposal (GATE: needs your approval and your AI-training decision)
Option A, allow search and retrieval, block training (recommended if you want AI answers to cite you but not train on you):
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /order/
Disallow: /checkout/
Disallow: /api/
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/

# Group B: AI search and retrieval (can send visitors)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Meta-WebIndexer
Allow: /

# Group C: AI training (opt out)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Bytespider
User-agent: Meta-ExternalAgent
Disallow: /

Sitemap: https://torquee-bikesaustralia.com.au/sitemap.xml
```
Notes: user-triggered fetchers (ChatGPT-User, Perplexity-User, Google-Agent, Meta-ExternalFetcher) may ignore robots.txt by design. Google-Extended does not affect Search. Do not add a Content-Signal line unless it matches these groups. Delete the duplicate generated `public/robots.txt` so only `app/robots.ts` is the source. Option B (allow everything) is the same file with Group C set to `Allow: /`.

## Sitemap generator patch (additive, safe)
In `app/api/sitemap.xml/route.ts`: home loc `https://torquee-bikesaustralia.com.au/` (with slash); drop `changefreq` and `priority` (Google ignores them); replace `lastmod = today` with a real per-URL date (product file/catalogue change date, blog `date`/`updated`). Optionally split into sitemap-index files (pages, products, guides, images) as the catalogue grows.

## Phase 3: speed patches (additive)
1. Product and category pages: give the first product image `priority` and `fetchPriority="high"`, never lazy-load it, and cut `next/image` quality from 90 to 75 with correct `sizes`.
2. Stop importing the whole catalogue in client components (`ShopFilters`, `CategoryDetail`, `ProductDetail`, `Compare`). Pass only the needed product to client code from server components. Target: the 926 KB chunk disappears.
3. Add a browserslist to drop the 110 KB polyfill bundle.
4. Convert `/images/hero-home-mobile.webp` to a properly sized image (about 46 KB saving).
5. Re-test with `npx lighthouse` on the 5 templates; target LCP under 2.5 s, TBT under 300 ms.

## Phase 4 and 5: head, schema and trust (additive)
- Add `app/icon.png`, `app/apple-icon.png` (Next generates the head links) and a real logo file; point Organization `logo` at it.
- Default Open Graph image for pages without one.
- One JSON-LD `@graph` per page with stable ids:
```json
{"@context":"https://schema.org","@graph":[
 {"@type":["Organization","Store"],"@id":"https://torquee-bikesaustralia.com.au/#org","name":"Torque E-Bikes","legalName":"The Torque Team Pty Ltd","url":"https://torquee-bikesaustralia.com.au/","logo":{"@type":"ImageObject","url":"https://torquee-bikesaustralia.com.au/logo.png"},"sameAs":[],"contactPoint":{"@type":"ContactPoint","telephone":"+61480804189","contactType":"sales","areaServed":"AU"}},
 {"@type":"WebSite","@id":"https://torquee-bikesaustralia.com.au/#website","url":"https://torquee-bikesaustralia.com.au/","name":"Torque E-Bikes","publisher":{"@id":"https://torquee-bikesaustralia.com.au/#org"}},
 {"@type":"WebPage","@id":"PAGE_URL#webpage","url":"PAGE_URL","isPartOf":{"@id":"https://torquee-bikesaustralia.com.au/#website"},"breadcrumb":{"@id":"PAGE_URL#breadcrumb"}},
 {"@type":"BreadcrumbList","@id":"PAGE_URL#breadcrumb","itemListElement":[]}
]}
```
Add `sameAs` only for profiles that exist. Product pages keep exactly one BreadcrumbList (with the category's real name), Product and Offer. Add `hasMerchantReturnPolicy` and `shippingDetails` once policies are final. No AggregateRating or Review without real, visible, sourced reviews. Guides: author should be a named Person if you have one; otherwise leave the Organization.
- Validate with the Schema Markup Validator; use the Rich Results Test only for Product, Breadcrumb, Organization, Local business, Article, Video, Review snippet.
- Fix: unnamed icon buttons (add `aria-label`), `href="#"` social links (remove until real), small-text contrast to 4.5:1. Remove `https://api.web3forms.com` from the CSP in `vercel.json`.

## Phase 6: AI search visibility
- Content: lead each guide section with a self-contained 40 to 60 word answer under its question heading; add tables for specs and legal status; cite regulators for law statements.
- Agent files: fix `acp.json` (`minimum_order_usd` and `free_shipping_threshold_usd` are AUD amounts); remove or stop advertising `/api/ucp` and `/api/acp` (404). The MCP server, product, search and category APIs do work.
- Monthly test set (log cited, mentioned or absent per tool: Google AI Mode, ChatGPT, Perplexity, Gemini, Claude, Copilot): 1 "best electric dirt bike in Australia", 2 "is a Sur-Ron legal on Australian roads", 3 "Sur-Ron Light Bee X price Australia", 4 "Talaria X3 vs Sur-Ron Light Bee", 5 "kids electric dirt bike Australia age", 6 "e-bike conversion kit 250W legal Australia", 7 "how fast does a Sur-Ron go", 8 "off-road only electric bike meaning Australia", 9 "electric balance bike for 3 year old", 10 "how to ship lithium battery e-bike Australia", 11 "best budget electric bike under $1000 Australia", 12 "folding e-bike Australia", 13 "electric cargo bike Australia", 14 "e-bike brands in Australia", 15 "chain alignment on high torque motor", 16 "72V vs 48V e-bike", 17 "electric trike for adults Australia", 18 "electric mountain bike buying guide Australia", 19 "where to buy Sur-Ron spare parts Australia", 20 "Torque E-Bikes reviews" (expect honest absence until real reviews exist).
- Bing: review the AI Performance report in Bing Webmaster monthly.

## Phase 7: competitors and keywords
Competitor names were not supplied and my search tool could not see Australian retailers reliably, so no competitor data is reported. Method once you supply 2 to 3 domains: compare indexed pages, content types, SERP features and AI citations per cluster. Keyword clusters already exist in `docs/keyword-map.md`, `docs/keyword-cluster.txt` and `docs/link-plan.csv` (one page per cluster, no cannibalisation found in the crawl: zero duplicate titles).
Quick wins: brand pages for the 11 brands with 10+ products; the guides on Sur-Ron and Talaria; "is it legal" pages (strong first-party information gain); the conversion kit finder.

## 30/60/90-day roadmap
- Days 0 to 30: remove unsupported review claims (P0); add logo, favicon, OG image; fix duplicate breadcrumbs; apply the sitemap patch; correct agent files; decide robots policy; speed patches 1 to 3; check Search Console indexing and the Bing report weekly.
- Days 31 to 60: replace templated FAQs; decide brand and category consolidation (GATE); add named author or keep brand voice; add return and shipping schema; re-run Lighthouse; start the monthly AI citation test.
- Days 61 to 90: collect real customer reviews (post-delivery email), then show them honestly; build 3 to 5 evidence-led guides (legal status by state, DG shipping, real test photos); competitor comparison once names are known; re-run Phase 0.

## Do NOT do
- Do not add Review or AggregateRating markup to the current testimonials.
- Do not expand FAQPage markup expecting a Google feature (retired).
- Do not claim UCP or agentic checkout support; this store is not on that programme.
- Do not mass-generate more near-identical pages (brand, FAQ or product copy).
- Do not describe any machine over 250W as road legal.
- Do not rely on llms.txt for Google; it has no effect there.
- Do not change URLs, canonicals or robots rules without approval and redirects.

## Re-run triggers
Repeat Phase 0 after every confirmed Google core or spam update (status.search.google.com) and monthly. Repeat the crawl after each deployment that changes templates.

## Applied on 16 Oct 2026 (after owner approval)
- robots.txt: allow-all, one group, private paths blocked for every bot (app/robots.ts is the only source; public/robots.txt removed).
- Logo, favicon set, apple icon and default 1200x630 social image added; default image now used on every page without its own.
- Duplicate BreadcrumbList removed from product and category pages.
- Agent files: amounts relabelled `_aud`; unverified "16+" age claim removed; stale web3forms CSP entry removed.
- Speed: catalogue, FAQ and SEO data no longer shipped to the browser on product, category, brand, guide and hub pages (product first-load JS 315 kB to 184 kB); search and checkout load only what they need from small API routes; main product image no longer waits for JavaScript to become visible; image quality 90 to 75; browser targets raised.
- FAQs: product pages now carry product-specific answers (price, saving, range, crypto discount) plus the existing "compare with similar bikes" answer; repeated shipping, payment and safety text removed from product pages.
- Not applied (needs approval because URLs change): consolidating or noindexing thin brand pages (47 of 118 brands have one product).
- Correction to the first report: /api/ucp and /api/acp are not advertised anywhere. The real routes are /api/ucp/services and /api/acp/catalog and both work.

## Applied later on 16 Oct 2026: brand merge and agent readiness
- 38 thin brand pages (under 5 products, except Dirodi and Flight Risk) merged: old URLs 308-redirect to the product, its category or the shop; their FAQ/SEO entries and the copy links to them were removed. Their keywords are now unassigned in docs/used-keywords.csv.
- Hero product card removed from the home page.
- Markdown for Agents: a request with `Accept: text/markdown` for any public page returns Markdown (middleware.ts -> app/api/md/route.ts, turndown). Browsers still get HTML.
- robots.txt (app/robots.txt/route.ts): single allow-all group plus `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
- Extensionless well-known files (api-catalog, oauth-*, openid-configuration) are served by route handlers with JSON content types; Vercel served the static copies as octet-stream.
- Added `/.well-known/ai-catalog.json` (ARD) and `/.well-known/poppy.json`; agent skills are real SKILL.md files with real sha256 digests; the UCP profile and route were removed (the store is not on that programme).
- MCP `create_order_draft` now validates slugs and returns a real `/checkout/?items=slug:qty` link with a GST-inclusive estimate; the checkout page fills the cart from it.
- Accessibility: named icon buttons, sort select and carousel dots, removed dead `#` social links, lighter small grey text, heading order.
- DNS-AID added 2026-10-18 on Vercel DNS: HTTPS records `_index._agents` and `_mcp._agents` (priority 1, target the apex, alpn=h2,h3 port=443). Not DNSSEC-signed (Vercel DNS cannot sign), so the checker may still flag the DS requirement.
- Not done: Auth.md (needs an OAuth server the store does not have), x402/MPP/UCP (optional commerce, not scored).
