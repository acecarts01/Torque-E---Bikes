# Phase 6 and 7: AI visibility, agent readiness, citation test, SERP and competitor comparison (10 Nov 2026)

Run in the built-in browser pane (the owner watched). Tags: [Google-documented] [Strong evidence] [Experimental]. Raw data: docs/semrush-raw/ai-citation-2026-11-10.json.

## 1. Agent-readiness scan (isitagentready.com, 10 Nov 2026): score 80, Level 1 "Basic Web Presence"
| Area | Score | Result |
|---|---|---|
| Discoverability | 3/4 | robots.txt, sitemap and Link headers pass. DNS for AI Discovery (DNS-AID): records found but DNSSEC not validated. Needs a DNS change: NOT touched (rule: never touch DNS without approval). |
| Content | 1/1 | Markdown negotiation passes (verified: `Accept: text/markdown` returns text/markdown, browsers get text/html). |
| Bot access control | 1/2 | AI bot rules in robots.txt pass. **Content Signals line missing.** Proposed: `Content-Signal: ai-train=no, search=yes, ai-input=yes` (matches the existing rules: training tokens blocked, search and retrieval agents allowed). This is a robots.txt change: WAITING FOR APPROVAL. |
| API, Auth, MCP, skills | 7/8 | API catalog, OAuth/OIDC discovery, MCP server card, agent skills, WebMCP, ARD, Poppy pass. Only fail: OAuth Protected Resource metadata. auth.md truthfully says "No authentication required", so publishing OAuth metadata would declare a capability the site does not have: ACCEPTED GAP. |
| Commerce (optional, not scored) | 1/4 | ACP detected. x402, MPP and UCP not detected: ACCEPTED GAPS (UCP checkout is limited to selected US merchants per Phase 0; x402/MPP need payment middleware the site does not run). |

Verified true: llms.txt is valid llmstxt format (H1, blockquote, real links); server card endpoint, auth.md and Link headers all resolve. **Defect found and fixed in the repo (not yet deployed):** llms.txt and every agent file showed stale category counts (Fat-Tyre 36, Racks 16) after the Mamba Sahara move; `src/config/catalog.generated.js` counts corrected to 37 and 15.

## 2. AI-citation test (23 questions, Google AI Mode, 10 Nov 2026) plus ChatGPT (guest, search on)
Method: each question run once in Google AI Mode (udm=50, hl=en, gl=au). Perplexity showed a Cloudflare "Verify you are human" check in the pane (not bypassed); Gemini, Copilot and Claude need sign-in (not tested). AI answers vary run to run: one sighting is not a ranking.
| # | Question | Torque cited? | Domains cited |
|---|---|---|---|
| 1 | best electric dirt bike for kids in australia | no | takani, hoveroo, miniev, zippielectric |
| 2 | where can i buy a sur-ron light bee x in australia | no | ridesurron, teammoto, melbournepowered, iscoot, ebmx, bikesales |
| 3 | best electric dirt bike for adults australia | no | australianelectricmotorco, ebmx, emovebikes, mxrmotorsports |
| 4 | talaria sting r mx4 price australia | no | iscoot, talariaaustralia, eazybikes, pedl, eozzie, bikesales |
| 5 | best e bike conversion kit australia | no | rev-bikes, reddit |
| 6 | 1000w ebike conversion kit australia | **yes in run 1** (named in the answer), no in run 2 | ampx, caprouge, electricpedalpower, elemex |
| 7 | best electric mountain bike under $5000 australia | no | bikesonline, 99bikes, ivanhoecycles, electricbikesbrisbane, ebikefinder |
| 8 | best commuter e-bike under $3000 australia | no | vamosbikes, bikesonline, lekkerbikes, 99bikes |
| 9 | fat tyre electric bike australia buy | no | tolandbikes, ewhip, kogan, leitner, pushys, 99bikes |
| 10 | electric trike for adults australia | no | addmotor, trike-bike, eozzie, vamosbikes |
| 11 | best cargo e-bike australia | no | ebikefinder, melbournepowered, electrickicks, reidcycles, wombatbikes |
| 12 | kids electric balance bike australia | no | thumpstar, takani, mxstore, gobike.au |
| 13 | best folding electric bike australia | no | (no links) |
| 14 | segway xaber 300 price australia | no | fasterwheeler, rideapart, yahoo |
| 15 | e ride pro ss for sale australia | **yes**: "Torque E-bikes: an authorised dealer offering the E Ride Pro SS 3.0 for $7,500" | ebmx, murf, mxrmotorsports, melbournepowered, pedl |
| 16 | stark varg price australia | no | starkfuture, australianelectricmotorco |
| 17 | are electric dirt bikes legal on the road in australia | no | ridesurron, electrickicks, sa.gov.au, savic, ebikefinder |
| 18 | is a 1000w electric bike legal in queensland | no | qld.gov.au, streetsmarts.qld, ngmobility |
| 19 | 72v ebike battery where to buy australia | no | ampx, f1ebikes, electricpedalpower |
| 20 | sur ron controller upgrade parts australia | no | ebmx, electricdirtbikes.com.au, torpmotors, revrides |
| 21 | electric dirt bike shop brisbane | no | monomoto, stonegate, scooterhut, ebmx, takani |
| 22 | torque e-bikes australia reviews | brand named, mixed: Reddit "dropshipper" claim, praised Trustpilot support, legality caution | torquee-bikesaustralia.**com**, trustpilot, reddit, tiktok |
| 23 | is torquee-bikesaustralia.com.au legit | **negative**: AI lists "red flags" (bank transfer/PayID/crypto only, $499.99 minimum, ABN belongs to a 2007 company, unverifiable "Trustpilot 4.9, 987+ reviews") | abr.business.gov.au |
| ChatGPT (guest) | where can I buy an electric dirt bike in Australia? | **yes, listed #5 "Torque E-Bikes Australia"** with a link to our .com.au | esurronbike, aebikes, eazybikes, electricdirtbikeaustralia, ours |

Score: cited by name in 2 of 21 buying questions in AI Mode (10%, one of them in one of two runs), 1 of 1 in ChatGPT; legal and how-to questions cite government pages and review sites, never us.
Facts to check: the $7,500 AI Mode quoted for the E Ride Pro SS 3.0 does not match our price ($7,029). Likely mixed with the lookalike store below or stale.

## 3. SERP features and rank (Google AU, standard results, 10 Nov 2026)
| Query | AI Overview | PAA | Shopping | Videos | Local | Torque in top results |
|---|---|---|---|---|---|---|
| electric dirt bike australia | yes | yes | yes | yes | no | no (gmx, eozzie, electricdirtbikeaustralia, ampdbros, rfn, takani, ebmx) |
| sur ron light bee x australia | yes | yes | no | yes | no | no (ridesurron x3, surronaustralia, ebmx, iscoot, pedl) |
| e bike conversion kit australia | yes | yes | yes | yes | no | only the lookalike .com at #4 (electricpedalpower, f1ebikes, ampx lead) |
| electric bikes brisbane | no | no | yes | yes | no | no |
| fat tyre electric bike | yes | no | yes | yes | no | no (99bikes, emove, dirodi, ampdbros) |
| kids electric dirt bike | yes | no | yes | yes | no | no |
| electric mountain bike australia | no | yes | yes | yes | yes | no |
| torque e-bikes australia (brand) | yes | no | yes | yes | yes | **our .com.au is not on page 1; the lookalike torquee-bikesaustralia.com is #1** |

## 4. Brand-entity finding (P0)
`torquee-bikesaustralia.com` (no .au) is a separate live Shopify store whose copy says it started "in Melbourne in 2023". It ranks #1 for "torque e-bikes australia", appears in AI Mode sources, and Google's own brand SERP does not show our .com.au on page one. This matches the 4 Nov Perplexity finding. AI engines then merge the two (quoted prices, "reviews", "dropshipper" claims). We cannot assume which business a claim belongs to.

## 5. Competitor comparison (3 retailers cited most often across the 23 questions)
| | EBMX (ebmx.com.au) | Melbourne Powered | eMove Bikes | Torque |
|---|---|---|---|---|
| AI Mode citations (of 23) | 5 | 3 | 2 (+ many organic) | 2 |
| Pay options on homepage | not readable from this PC (bot protection) | Visa, Mastercard, PayPal | Afterpay, Visa, Mastercard, PayPal | bank transfer, PayID, crypto only |
| Review source | not readable | Judge.me (third-party, verified) | Judge.me + Review/AggregateRating schema | static footer "Trustpilot 4.9 / 987+" with no link to a profile |
| Local signals | not readable | n/a | LocalBusiness + address schema | Organization/Place schema, no Business Profile (deferred) |
| robots.txt AI rules | not readable | none (all open) | none (all open) | explicit: search/retrieval allowed, training tokens blocked |
| llms.txt | not readable | exists | exists | exists |
What wins them citations: model-level pages with price, stock and local availability; marketplaces and review sites (ebikefinder, 99bikes, bikesonline) for "best" lists; government pages for legality.

## 6. Findings and actions
| P | Finding | Evidence | Action | Status |
|---|---|---|---|---|
| P0 | AI engines judge the site "scam-like": card payments absent, $499.99 minimum, unverifiable Trustpilot claim | Q23 answer | Owner decisions: (a) give the real Trustpilot profile URL and current numbers so the footer links to it, or remove the number; (b) consider a card or buy-now-pay-later option; (c) add a plain "How payment and buyer protection work" FAQ. I did NOT edit the reviews or the footer. | NEEDS OWNER |
| P0 | Lookalike .com store owns the brand SERP | Section 4 | Owner to tell me if the two businesses are related. Then: state it on /about/, add real `sameAs` links (Instagram, Facebook, Business Profile) to the Organization schema, claim Google Business Profile (deferred earlier). | NEEDS OWNER |
| P1 | llms.txt and agent files showed stale category counts | llms.txt live | Fixed in `catalog.generated.js` (37 and 15); ships with the next build | FIXED, to deploy |
| P1 | No Content-Signal line | scan | Add `Content-Signal: ai-train=no, search=yes, ai-input=yes` | NEEDS APPROVAL (robots.txt) |
| P1 | Winning pages for model-price questions | #15 and ChatGPT cite us on dirt-bike model intent | Keep price, stock and shipping facts current on model pages; refresh the E Ride Pro SS 3.0 page text so price is unambiguous | ongoing |
| P2 | Legal and how-to questions never cite us | #17, #18 | Guides already exist; add a 40-60 word direct answer under each legal question heading, link the qld.gov.au rule page | backlog |
| P2 | DNS-AID DNSSEC, OAuth metadata, x402, MPP, UCP | scan | Accepted gaps (see section 1) | ACCEPTED |

## 7. Do NOT do (for this site)
Do not publish OAuth, x402, MPP or UCP declarations; do not add card-payment logos or reviews the business does not have; do not edit or remove existing reviews; do not bypass the Perplexity or Trustpilot checks; do not touch DNS without approval; do not claim "authorised dealer" or price promises that differ from the catalogue.

## 8. 30/60/90 days
30: owner answers on Trustpilot, payments and the lookalike store; deploy the llms.txt count fix; Content-Signal line if approved; GSC indexing requests continue daily. 60: monthly repeat of this citation test (same 23 questions, three runs each) and the Phase 0 refresh; direct-answer blocks on the legality guides; Business Profile. 90: review which model pages gained citations; extend the test to Perplexity, Gemini, Copilot and Claude once sign-in or checks are cleared by the owner.

## 9. After the fixes (re-scan 10 Nov 2026, 10:07, production 713be4b)
Agent-readiness: **87, Level 5 "Agent-Native"** (was 80, Level 1). Bot Access Control now 100 (2/2): `Content-Signal: ai-train=no, search=yes, ai-input=yes` added to robots.txt (owner request; reverses the 30 Oct "no Content-Signal" decision; training tokens stay blocked). llms.txt and the agent files now show 37 fat-tyre and 15 rack products (category descriptions in src/config/catalog.generated.js corrected).
Remaining 13 points: DNS-AID needs DNSSEC (zone is on Vercel nameservers, which cannot sign; needs a nameserver move to a DNSSEC provider and a DS record at the registrar: owner approval required, risk to Zoho mail and verification records) and the auth.md check wants a real authorization server in the protected-resource metadata (the site has none: accepted gap).
