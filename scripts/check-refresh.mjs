// Double check for refreshed and new posts: every internal link resolves, images exist, and no keyword is used on two different pages.
import fs from 'node:fs'
import { BLOG_META } from '../src/content/blog/meta.js'
import { BLOG_BODIES } from '../src/content/blog/bodies.js'
import { NEW_META, NEW_BODIES } from '../src/content/blog/new/index.js'
import { REFRESH_META } from '../src/content/blog/refresh/meta-index.js'
import { REFRESH_BODY } from '../src/content/blog/refresh/body-index.js'
import { applyMeta, applyBody, isMerged } from '../src/content/blog/refresh/apply.js'
const S = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const P = JSON.parse(S.match(/CATALOG_PRODUCTS = (\[[\s\S]*\])/)[1].replace(/;\s*$/, ''))
const ok = new Set([...P.map(p => `/shop/${p.category}/${p.slug}/`), ...P.map(p => `/shop/${p.category}/`), '/shop/', '/electric-bikes/', '/electric-bikes/budget/', '/faq/', '/contact/', '/about/', '/blog/', '/tools/conversion-kit-finder/', '/shipping-returns/', '/wholesale/'])
const brands = fs.readFileSync('docs/keyword-ranking.csv', 'utf8') + fs.readFileSync('docs/used-keywords.csv', 'utf8')
const allMeta = [...BLOG_META, ...NEW_META].filter(m => !isMerged(m.slug)).map(m => applyMeta(m, REFRESH_META[m.slug]))
const postUrls = new Set(allMeta.map(m => m.url))
const subjects = allMeta.filter(m => m.focus)
let bad = 0
for (const m of subjects) {
  const b = applyBody({ ...BLOG_BODIES, ...NEW_BODIES }[m.slug], REFRESH_BODY[m.slug])
  const hrefs = [...JSON.stringify([b.intro, b.sections, b.faq]).matchAll(/\]\(([^)]+)\)/g)].map(x => x[1]).concat((m.related || []).map(r => r.href), (m.links.to || []).map(l => l[0]), (m.links.from || []).map(l => l[0]))
  const miss = [...new Set(hrefs.filter(h => h.startsWith('/') && !ok.has(h) && !postUrls.has(h) && !(h.startsWith('/brands/') && brands.includes(h))))]
  const imgs = [m.image.file, ...b.sections.filter(s => s.img).map(s => s.img.file)].filter(f => !fs.existsSync('public/images/' + f))
  if (miss.length || imgs.length) { bad++; console.log('PROBLEM', m.slug, 'missing links', miss, 'missing images', imgs) }
}
const rows = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(l => { const p = l.split(','); return { url: p[0], role: p[2], kw: (p[3] || '').toLowerCase() } })
const seen = new Map()
for (const r of rows) { if (!r.kw) continue; const a = seen.get(r.kw) || new Set(); a.add(r.url); seen.set(r.kw, a) }
const mine = new Set(subjects.map(m => m.url))
const dups = [...seen].filter(([kw, urls]) => urls.size > 1 && [...urls].some(u => mine.has(u)))
for (const [kw, urls] of dups) { bad++; console.log('KEYWORD ON MULTIPLE PAGES:', kw, [...urls].join(' ')) }
console.log(`checked ${subjects.length} posts | problems ${bad}`)
