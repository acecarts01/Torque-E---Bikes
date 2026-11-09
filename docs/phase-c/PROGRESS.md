# Phase C (keyword mapping proposal): progress log

Owner approved the plan on 9 Nov 2026 ("i approve the proposed plan ... continue with this refreshed semrush link; follow the rules/skills meticulously"). Phase C only PRODUCES a proposal; nothing is inserted into the site until the owner approves that proposal (Phase D).
Owner instruction 9 Nov 2026: **save every step of progress so nothing is lost** -> everything below is on disk and committed; resume from these files alone.

## Scope (from docs/used-keywords.csv on 9 Nov 2026, script scripts/phase-c/inventory.cjs, data docs/phase-c/inventory.json)
- Product pages: 408 pages, 388 with at least one bad row (generated, zero volume or KD > 28), 1,725 bad rows, 265 pages with a bad PRIMARY.
- Brand hubs: 60 pages, 41 with bad rows (132 rows). Categories: 26 pages, 12 with bad rows (26). Blog: 151 pages, 32 with bad rows (111). Home 2, shop 4, local 1, new-hub 2.
- Sitemap pages with no keywords: 13 (/brands/, /compare/, /about/, /faq/, /contact/, /wholesale/, /blog/, /terms/, /privacy/, /shipping-returns/ and 3 new kids-scooter products: segway-c2-go, gyroor-minions-ks2-kids-scooter, gyroor-h30-max-kids-scooter).

## Rules applied to every proposed keyword
Semrush AU only (real volume > 0, KD <= 28); products T/C only (T first); categories T/C; brand hubs C/N/I allowed; homepage T; blogs main + 5 secondary T/C and 10 tags; one keyword on one page; no keyword naming a model we do not stock; variants of one product do not all get the same family terms; no GST wording; nothing implying a bike over 250 W is road legal; no-demand products are REPORTED for the owner to remove/consolidate/keep, never acted on.

## Method (pull)
1. Receiver: `node --max-http-header-size=8000000 scripts/phase-c/receiver.cjs` (port 3999; saves docs/semrush-raw/<name>.txt).
2. Queries: docs/phase-c/queries-brand.json (92 brands), queries-A.json (brand + first model token, 264), queries-B.json (brand + two model tokens, 274), prodmap.json (product -> its queries). Rebuild with scripts/phase-c/make-queries.cjs.
3. In a logged-in Semrush Keyword Magic tab (Claude in Chrome, any of hosts 4/5): `node scripts/phase-c/next-chunk.cjs 25` prints progress and writes docs/phase-c/next-chunk.js (one line of JS). Paste it into the tab; it runs 25 queries (~4 min) then navigates to the receiver, which saves docs/semrush-raw/phaseC-cNNN.txt (`#query` headings then `kw|intent|vol|kd` rows). Done queries are detected from those headings, so a restart loses at most one chunk.
4. Semrush limits: hourly report cap per account (about 40 reports/hour on host 4; host 5 allowed 80+ once); the page shows "You've reached your report limit for this hour... continue in Xm" and refreshes itself. The tab must stay in the Claude-in-Chrome group.

## Status log
- 9 Nov 2026: inventory + query lists built and committed. First brand pull (89 queries) reached 79/89 in a page that was then lost (session restart, receiver stopped) and was NOT saved: 0 of 630 queries are on disk. Both hosts then showed the hourly report limit (about 33 min). Chunk size reduced to 25 so nothing large is ever held only in a page.
- NEXT: when the cap lifts, run next-chunk repeatedly (brand queries first), commit docs/semrush-raw/phaseC-*.txt after each chunk, then build the allocation script (scripts/phase-c/allocate.cjs) and the proposal CSV/HTML for approval.
- 9 Nov 2026 (later): scripts/phase-c/allocate.cjs written and tested on the old pool (builds docs/phase-c/proposal-products.csv, no-data-products.csv, allocate-summary.json; products claim a keyword only when brand tokens and their own model tokens are present, the most specific product wins, keywords already held by other pages stay taken). Waiting for the Semrush hourly cap (about 30 min); then run chunks of 25.
- 9 Nov 2026: chunk c001 saved and committed (25 brand queries, 3 nothing-found, 2,200 rows). Chunk c002 (23 brand queries) started. Speed is about 40 s per query (Semrush page load), so 25 queries take ~15 min; the account's hourly cap also applies. Dropped junk brand queries (tbc, ebmx 79bike, ampd brothers). Priority order: brand (89) then A (264); run B only for families that need it.
