# Keyword and off-page audit: execution plan (set 3 Nov 2026)

Phase A is done (docs/performing-urls-and-keywords-2026-11-03.md). Every later phase waits for the owner's approval. Do not interrupt a phase; ask only when something is truly blocked.

## Standing rules from the owner
1. **Semrush only.** At audit time, remove every keyword in the site that does not come from Semrush (the `generated` rows: 2,423 of 5,933 register rows, including 372 of 510 product primaries and 1,899 product secondaries), then source Semrush replacements for each.
2. **Do the AEO / AI-search keyword research in Semrush as well, if Semrush has it** (AI Visibility, AI search prompts and topics). Record those in the keyword bank with their own tag.
3. **Double-check every phase** before reporting, so there are zero errors: re-run the validators, re-read the output, compare counts to the source.
4. **GSC indexing issues:** when working in Search Console, open the notification panel, confirm every indexing issue is fixed and click "Validate fix" where Google offers it. Confirm in writing at the end of that phase.
5. **Semrush link:** ask the owner to supply the Semrush URL when the keyword pulls start. The last link given is 4.semrush.com.in; the session works in the Chrome-extension browser, not the in-app pane.
6. Keyword rules always apply: Transactional or Commercial intent for products, categories and brands (Transactional first); blog main keyword plus 5 secondaries Transactional or Commercial and 10 unique tags; KD 28 or lower; real volume above zero; one keyword on one page; no GST wording; nothing implying a bike over 250W is road legal.

## Phases
- **B. Keyword bank.** Create docs/keyword-bank.csv (keyword, volume, KD, intent, source, tag, status anchored / unassigned / rejected + reason). Pull Semrush Keyword Magic and Keyword Gap for every product, category, sub-category, brand and gap page, plus the AEO / AI research. Print a supply-versus-need table before assigning.
- **C. Mapping proposal.** Page-by-page current versus proposed (primary, 5 secondaries, tags for blogs), every removed non-Semrush keyword with its Semrush replacement, the 10 pages with no keywords, and the 147 KD > 28 breaches fixed. Owner approves before anything is inserted.
- **D. Insert and resubmit.** Update the register and src/config/seo.generated.json, then titles, H1s, meta descriptions, image alts and internal-link anchors. Build, crosscheck, push, wait for Vercel "Deployment has completed", validate live, then resubmit the sitemap in GSC and Bing, send IndexNow, request indexing for the top URLs (see the off-page priority list in the Phase A report).
- **E. Verify and final fixes.** Re-check live pages and the GSC notification panel; confirm each indexing issue is resolved or validated; report remaining items.

## Known baseline (Phase A)
0 backlinks, 0 referring domains, 0 AI mentions (Semrush); Bing has 679 URLs discovered and 0 indexed; Google confirmed-indexed 194 of 615 sitemap URLs; 367 of 446 products not yet confirmed indexed.
