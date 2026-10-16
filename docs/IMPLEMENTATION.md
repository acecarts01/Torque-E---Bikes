# Keyword plan: what was built

Built from the approved plan (docs/keyword-map.md, blog-plan.md, faq-bank.md). Strategy docs live here, never in `public/`.

## Where things live
| What | File |
|---|---|
| Titles, H1s, meta descriptions, image alt text (by URL) | `src/config/seo.generated.json`, read by `src/lib/seo.ts` and `src/lib/metadata.ts` |
| FAQ bank (home, FAQ page, categories, hubs, brands, every product) | `src/config/faq.generated.json`, read by `src/lib/faq.ts`, rendered by `src/components/PageFaq.tsx` with FAQPage JSON-LD |
| Blog posts: light metadata (client-safe) | `src/content/blog/meta.js` |
| Blog posts: bodies and FAQs (server only) | `src/content/blog/bodies.js`, loaded by `src/lib/blogFull.ts` |
| New pages | `/electric-bikes/`, `/electric-bikes/budget/`, `/brands/`, `/brands/[slug]/`, `/tools/conversion-kit-finder/` |
| Guide links on categories, products and hubs | `src/components/RelatedGuides.tsx`, anchors from the plan |
| Blog hero photos | `scripts/blog-photos.json` and `scripts/fetch-blog-photos.mjs` -> `public/images/blog/` |

## Blog release schedule
Posts go live on their planned date: the site only publishes posts dated on or before the build date (`src/lib/blog.ts`). Redeploy weekly (or add a daily Vercel cron build hook) to release the next posts. Planned dates are in `blog-plan.md`; the three refresh posts and the week 1 posts are live from the first deploy.

## Regenerating from new keyword exports
The generator scripts that produce the `*.generated.json` and `src/content/blog` files are not in the repo. Keep the Semrush exports and re-run the keyword-engine pipeline, then replace those files.

## Word-count standards (checked at build time of the content)
| Page type | Standard | Result |
|---|---|---|
| Blog posts, standard (1 primary + 5 supporting keywords) | 1,200 to 2,000 words (keyword-engine table) | every post 1,250 or more |
| Pillar posts (laws, best e-bikes, conversion kits, how to choose) | 3,000 to 5,000 words | each 3,100 or more |
| Product descriptions | at least 200 words, unique, built from catalogue data only | 212 to 312 words, no pair above 0.55 shingle similarity |
| Category intros | 100 to 150 words | 115 to 148 words |
| Blog and product FAQ answers | 40 to 65 words | all pass |
Blog counts are body text only (intro, sections, lists), excluding FAQs, the hook and navigation.
