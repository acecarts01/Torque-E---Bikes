# SEO re-run: state of Google and live audit (30 Oct 2026)
Site: https://torquee-bikesaustralia.com.au. Builds on `docs/seo-audit-2026-10-16.md` and `docs/seo-audit-2026-10-16-part2.md`. No live changes were made in this run; everything below that changes robots.txt, canonicals, URLs or removes pages waits for approval.

## Phase 0: change-log table (fetched 30 Oct 2026 from the official pages)
| Date (US/Pacific for status events) | Change | Official source | Impact on this site | Required action |
|---|---|---|---|---|
| 11 to 29 Dec 2025 | December 2025 core update | status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history | Site not live | None |
| 5 to 26 Feb 2026 | February 2026 Discover update | same | No Discover traffic expected yet | None |
| 24 to 25 Mar 2026 | March 2026 spam update | same | Site not live | None |
| 27 Mar to 8 Apr 2026 | March 2026 core update | same | Site not live | None |
| 21 May to 1 Jun 2026 | May 2026 core update | same | Site not live | None |
| 24 to 26 Jun 2026 | June 2026 spam update | same | Site not live | None |
| 18 to 20 Aug 2026 | August 2026 spam update | same | Site not live | None |
| 24 Sep to 7 Oct 2026 | September 2026 spam update (page lists it with a calculated end of 7 Oct; status not stated) | same | Site is new, 20 new posts added 28 to 29 Oct fall after it | Compare GSC curves after the next update |
| 13 Apr 2026 | Back button hijacking added to malicious practices policy | developers.google.com/search/updates | None found on the site | Keep out of any scripts |
| 7 to 8 May 2026 | FAQ rich result stopped showing (7 May); notice 8 May | same | FAQPage JSON-LD is on product and blog pages and earns no Google feature | Keep only where the FAQ is visible; never claim a rich result |
| 15 May 2026 | New generative AI optimization guide; spam policies apply to generative AI answers | same | No special markup needed | Keep normal SEO fundamentals |
| 15 Jun 2026 | llms.txt not used by Google Search | same | /llms.txt exists (200); harmless, experimental | Keep, do not expect Google gains |
| 7 Jul 2026 | Merchant listing docs add `category` and sale-price effective dates | same | Product schema has Offer, shipping and return policy | Consider `category` and price validity only if the data is true |
| 24 Jul 2026 | Review snippet guideline on fake and incentivised reviews | same | Homepage testimonials need a verified source before any review markup | Confirm sources; no AggregateRating until real reviews exist |
| 28 Aug 2026 | Spam policies updated (site reputation changes in the EEA) | developers.google.com/search/docs/essentials/spam-policies (updated 28 Aug) | None for an Australian store | None |
| 24 Sep 2026 | `VideoObject` gains `creator`; `interactionStatistic` clarified | developers.google.com/search/updates | No video on the site | None |
| 1 Oct 2026 | Generative AI content guide updated with rater guideline information | same | Our 70 new posts are the exposed area (scaled content risk if thin) | See P1 content items |
| 21 Oct 2026 | "Control what you share" page covers robots meta, `data-nosnippet`, `X-Robots-Tag` and the Search generative AI control | same | We use none of these | Decide per section whether any snippet control is wanted (default: none) |
| 26 Oct 2026 | User-generated spam guide updated | same | No user content on the site | None |
| Verified 30 Oct | Google-Extended is a robots.txt token with no separate user agent; it does not affect Search inclusion or ranking | developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers | robots.txt is silent on it | Make an explicit decision (see robots proposal) |
| Verified 30 Oct | AI Overviews and AI Mode need only normal indexing and snippet eligibility; no extra markup; traffic is in the Performance "Web" report | developers.google.com/search/docs/appearance/ai-features (updated 10 Dec 2025) | Nothing special to implement | Measure in Search Console |
| Verified 30 Oct | CWV p75 targets: LCP 2.5 s, INP 200 ms, CLS 0.1 | web.dev/articles/vitals | Product LCP was 3.9 s in the 16 Oct lab run | See P1 performance |

Not verified in this run (not fetched): Merchant Center announcements, Bing Webmaster and IndexNow documentation pages, Search Console help page 16984139. Treat the 16 Oct notes for those as unverified until read.

Comparing GSC and GA4 curves with these dates was not possible: Search Console was signed out in the browser pane today and GA4 and Merchant Center are not reachable from here. The site was added after most of these events, so there is little curve to compare.

## Executive summary: top five issues
1. **Core Web Vitals on product and category pages** (16 Oct lab: product LCP 3.9 s, category 3.0 s, TBT 450 to 850 ms, about 2.3 MB of JS). Not re-measured today because the PageSpeed API quota was exhausted; CrUX field data is the real target and needs a PageSpeed key or Search Console access.
2. **Scaled content risk.** About 490 product pages carry templated FAQ text (527 identical answers on 16 Oct) and the blog now has 104 posts. The 70 new posts are individually researched, but product FAQ templating is the exposure under the scaled content abuse policy.
3. **robots.txt has no AI-agent policy.** Single `User-agent: *` group, no search-versus-training decision for OAI-SearchBot, GPTBot, ClaudeBot, Google-Extended and others.
4. **Trust signals.** Guides are credited to "Torque E-Bikes" (Organization), Organization `sameAs` is empty and testimonials are unverified.
5. **Page indexing (Search Console, data to 23 Oct):** 136 indexed, 488 not: 458 Discovered - currently not indexed (never crawled yet), 23 Crawled - currently not indexed (all product pages), 5 redirects (4 intended brand merges plus the http home), 1 noindex (/search/, intended), 1 blocked by robots (/abn-lookup/, intended). Only the 481 Google-quality statuses need work.

Fixed since 16 Oct (verified today): logo.png 200, favicon.ico 200 and icon links present, default og:image present, product pages carry one BreadcrumbList plus shipping and return-policy markup, http and www redirect (308) to the canonical host, llms.txt 200.

## Issue matrix
| Priority | Area / file | Evidence | Root cause | Exact fix | Effort | Expected impact | Update-risk note | Verification |
|---|---|---|---|---|---|---|---|---|
| P1 | Performance, product and category templates | 16 Oct Lighthouse mobile: product LCP 3.9 s, category 3.0 s, 2.3 MB JS | Large client chunk, image priority | Re-measure with CrUX; set `priority` and `fetchpriority="high"` on the first product image only, trim client JS, keep catalogue out of client bundles (already a repo rule) | M | Better LCP and conversion | Visual regressions | PageSpeed field data, Lighthouse CI |
| P1 | Product FAQ (`src/lib/faq.ts`, `faq.generated.json`) | About 527 identical answers across 490 pages | Template generation | Keep only answers that are product-specific; drop FAQ blocks that repeat | M | Lowers scaled-content risk | **Needs approval** (removes visible content) | Diff of rendered FAQs, count of unique answers |
| P1 | `app/robots.txt` | Single wildcard group | No AI policy | See robots proposal below | S | Clear AI access policy | **Needs approval** (robots rules) | robots tester, curl, Bing and GSC fetch |
| P1 | Authors and entity (`src/config/site.js`, article schema) | Guides credit the Organization; `sameAs` empty | No named people or profiles supplied | Add real named author or reviewer and real profile URLs once you provide them | S | Trust and E-E-A-T | None | Schema Markup Validator |
| Done | Sitemap generator | Checked in code: lastmod is the catalogue update date (2026-10-26), blog posts use their own dates, fixed pages carry none | Earlier finding was wrong | None needed | - | - | - | - |
| Done | Apple touch icon | Served as /apple-icon.png with a link rel=apple-touch-icon in the head | Earlier finding was wrong | None needed | - | - | - | - |
| P2 | `/api/ucp`, `/api/acp` | Redirect (308) to a trailing-slash URL that returns 404 | Routes advertised but not implemented | Remove any agent-file claim that points at them (16 Oct finding still open) | S | Truthfulness | Touches agent files | curl each advertised endpoint |
| P2 | Meta descriptions | 21 new posts have descriptions of 166 to 174 characters | Written to fit 175 limit | Trim to 150 to 160 | S | Cleaner snippets | None | final-check |
| P2 | Titles | 3-wheel-electric-bike 62, merida 61, e-cruiser 64, aventon 63, for-sale 66, e-bike-sale 63, mini-ebike 61, amps-ebikes 65 characters | Long titles | Trim to 60 or fewer | S | Snippet display | Changing titles can move rankings slightly | Re-crawl |
| P2 | Merchant Center | Not checked | No access | Provide access or a screenshot of Diagnostics | S | Free listings eligibility | None | Merchant Center Diagnostics |
| P3 | `/llms-full.txt` | 404 | Not created | Optional; Google ignores it | S | None for Google | None | curl |

## robots.txt proposal (not applied)
Decision needed from you: allow or disallow AI training tokens. Recommended default is to allow search and retrieval agents and to block training tokens unless you want the content used for training. Use only names verified in the vendor documentation before applying; Google-Extended and the Google crawlers are verified above.

```
# Search engines
User-agent: Googlebot
User-agent: Bingbot
Allow: /

# AI search and retrieval (allow; names to re-verify against each vendor page before publishing)
User-agent: OAI-SearchBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
Allow: /

# AI training tokens (decision required; shown as disallow)
User-agent: Google-Extended
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: CCBot
User-agent: Applebot-Extended
Disallow: /

# Everyone else (current rules kept)
User-agent: *
Allow: /
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/
Disallow: /admin/
Disallow: /order/
Disallow: /checkout/
Disallow: /api/
Disallow: /abn-lookup/
Disallow: /whatsapp/

Sitemap: https://torquee-bikesaustralia.com.au/sitemap.xml
```
Note: separate groups with no overlap; a bot listed in a named group ignores the wildcard group, so the private paths (checkout, admin, api) must be repeated in the named allow groups if those bots should also stay out of them.

## Indexing status of the 20 new posts (30 Oct)
Sitemap and IndexNow submitted 29 Oct; Bing took 21 URLs; Google URL Inspection requested for 9 of 10 priority URLs (daily quota hit on `bike-tubes`; retry tomorrow). Several were already indexed within a day.

## Competitors and keywords
See `docs/competitor-keyword-analysis.md`, `docs/competitor-keyword-gaps.csv` and `docs/competitor-notes.md` (batches 1 and 2). The 20 posts added 28 to 29 Oct came from Ampd Bros, Melbourne Powered, Rideelectric and 99 Bikes topics with KD 28 or lower keywords. Backlink and SERP-feature analysis was not redone (needs the Semrush domain overview you linked; not run in this pass).

## Content briefs: top 10 priority pages
Use the pages with the highest commercial value first: `/electric-bikes/`, `/electric-dirt-bikes/`, `/blog/electric-bikes-for-sale/`, `/blog/electric-bike-price/`, `/blog/stark-varg/`, `/blog/specialized-e-bike/`, `/blog/fatboy-electric-bike/`, `/blog/fastest-e-bike/`, `/blog/dual-suspension-electric-bike/`, `/blog/electric-beach-cruiser-bicycle/`. For each: add a named reviewer, one first-party fact the competitors lack (stock, delivery estimate, compliance label wording), and a self-contained 40 to 60 word answer under each question heading. Brief details beyond this need Search Console query data.

## 30 / 60 / 90 days
| Window | Work | Owner | Dependency | KPI |
|---|---|---|---|---|
| 0 to 30 | Retry `bike-tubes` indexing; re-measure CWV with a PageSpeed key; approve robots decision; trim 21 descriptions and 8 titles; apple-touch-icon; fix agent-file claims | You and Claude | Approval; PageSpeed key; Search Console access | New posts indexed; LCP trend; no robots errors |
| 31 to 60 | Product FAQ de-duplication; sitemap lastmod; named author bios and sameAs; Merchant Center check | You and Claude | Real bios and profiles; Merchant access | Unique FAQ share; Merchant diagnostics clean |
| 61 to 90 | LCP and JS reduction on product and category; first-party content on the top 10 pages; 20 to 30 AI-answer tests logged | Claude and you | CrUX data | LCP p75 at or under 2.5 s; AI citation log |

## Monitoring plan
Search Console: Pages, Performance (Web, includes AI features), Crawl Stats, Core Web Vitals, Generative AI reports where shown. Bing Webmaster: URL submission, sitemap, AI Performance if available. GA4: conversions and revenue by landing page. Merchant Center: Diagnostics. Monthly: 20 to 30 customer questions asked in Google AI Mode, ChatGPT, Perplexity, Gemini, Claude and Copilot, logging whether the site is cited, which pages and which competitors win.

## Post-deploy regression checklist
Indexed page count in Search Console, sitemap URL count (679 now), rankings for the top 20 queries, conversions and checkout test order, form submissions, analytics firing, CWV, Schema Markup Validator on a product, a blog post and the home page, broken links (`scripts/check-refresh.mjs`), mobile rendering, robots.txt fetch in Search Console.

## Do NOT do
Do not claim FAQ rich results, SearchAction features, UCP or ACP support, or any API that returns 404. Do not call bikes above 250 W road legal. Do not add GST wording. Do not create extra pages for fan-out query variations or near-duplicate brand and model pages. Do not add AggregateRating or review markup without real, visible reviews. Do not block Googlebot or Bingbot or put private paths behind an allow group. Do not use robots.txt to control indexing. Do not mass-edit titles on pages that already rank without checking Search Console first.

## Re-run triggers
After every confirmed core or spam update on the Search Status Dashboard, and at least monthly. Next due: after the next dashboard event, or 30 Nov 2026.

## Applied 30 Oct 2026 (approved)
- robots.txt rebuilt in four groups: search crawlers allowed; AI search and retrieval agents (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Applebot) allowed; training tokens (Google-Extended, GPTBot, ClaudeBot, CCBot, Applebot-Extended) disallowed; everyone else allowed. Private paths are repeated in every allow group. OpenAI, Anthropic and Perplexity names checked on their documentation pages today; Applebot-Extended and CCBot from the vendors' standard tokens (Apple's page 404'd).
- Product FAQ: 61 answers that were identical across product pages removed (no page left without FAQ). The "How much is X" and "How does X compare" items stay because they carry product-specific prices.
- Thin product consolidation (approved): 64 parts-only product pages (79Bike, Fatboy, Sur-Ron and similar parts with no supplier specifications and no guide linking to them) are now `noindex, follow` and removed from the sitemap (679 to 615 URLs). They stay live for customers and in navigation. List: `src/config/noindex-products.json`, built by `scripts/thin-products.mjs`. Reverse by emptying the file.
- Real maker content added to four bikes that Search Console showed as crawled but not indexed: Kona Dew HD, Cruzr Swell, Giant Trance X E+ Elite, Cannondale Topstone Neo Carbon 1. Each paragraph cites the manufacturer page read on 30 Oct 2026 and tells buyers to confirm model year, version and compliance with us. Not enriched: LPR 16 inch V4 (no maker specs found), Giant's 2024 Australian page (410 Gone), Cannondale Carbon 1 trim (no spec table published).
- Second batch of maker details (30 Oct 2026, read from the manufacturers): Segway Xaber 300 (Segway page), Aventon Aventure 3 (Aventon US page, with the 250 W Australian limit flagged), Sur-Ron Light Bee X and Ultra Bee (Sur-Ron model list, read in a browser because the page is script-rendered), Trek Rail 7 (Trek Australia FAQ). Not used: Talaria Australia's page covers a road-registered L1e model (Sting Pro MX5) that is not the listing we hold, Sur-Ron Storm Bee (no figures found), Giant AU (410), Cannondale Carbon 1 (no spec table).
