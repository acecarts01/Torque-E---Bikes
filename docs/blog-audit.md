# Blog audit against the blog-post rule (27 Oct 2026)

Run `node scripts/audit-blog.mjs` to reproduce. 37 existing posts checked.

## Result in one line
Every post has a table of contents and 1,500+ words (one exception), but none has outbound links, none links to specific product pages, none has the 10 tags, and 32 of 37 have a main keyword that is not Transactional/Commercial.

| Rule | Posts failing |
|---|---|
| 1,500+ words | 1 (`diy-2000w-conversion-guide`, 1,304) |
| Table of contents | 0 |
| Main keyword Transactional/Commercial | 32 |
| 5 secondary T/C keywords | about 35 |
| 10 unique tags | 37 (field did not exist) |
| Focus keyword in hero alt | 32 |
| 2 to 4 outbound links | 37 |
| 2 to 4 product links | 37 |

## Refresh first (highest turnover potential)
Ranked by main-keyword volume, buying intent and how close the topic is to a product category.

1. `e-bike-conversion-kits-explained` (conversion kit 5,400 / KD6)
2. `talaria-x3-mx3-and-mx4` (talaria x3 4,400 / KD12)
3. `best-electric-bikes-in-australia` (hub post, links to all categories)
4. `how-to-choose-an-e-bike`
5. `sur-ron-models-explained` (surron lightbee 480)
6. `electric-mountain-bike-buying-guide` (mountain e cycle 1,900)
7. `bike-racks-baskets-and-trailers` (basket for cycle 1,900)
8. `electric-trikes-for-adults` (3 wheel electric bike 1,000)
9. `what-is-an-e-moto` (emoto 1,000)
10. `off-road-vs-street-legal-australia` (1,000, compliance page, keep wording)
11. `folding-electric-bikes` (590)
12. `diy-2000w-conversion-guide` (needs 200+ words first)

Refresh work per post: swap in a T/C main keyword and 5 secondaries, add 10 tags, add 2 to 4 verified outbound links, add category plus 2 to 4 product links with keyword anchors, add Related products block, fix hero alt.

## New posts (this batch)
chain lube, e-bike batteries, e-bike chargers, kids e-bikes, Sur-Ron for sale (see `docs/used-keywords.csv`).
