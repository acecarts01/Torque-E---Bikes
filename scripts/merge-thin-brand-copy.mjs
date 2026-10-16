// One-off: after thin brand pages were merged, fix the sentences in product copy that linked to them,
// and remove the merged pages' own FAQ and SEO entries. Safe to re-run (it only touches links to merged brands).
import fs from 'node:fs'

const ROOT = 'C:/VERCEL PROJECTS/Aussie Bikes/Torque-E---Bikes/'
const redirects = JSON.parse(fs.readFileSync(ROOT + 'src/config/brand-redirects.generated.json', 'utf8'))
const { CATALOG_CATEGORIES: CATS } = await import('file:///' + ROOT + 'src/config/catalog.generated.js')
const { PRODUCTS } = await import('file:///' + ROOT + 'src/config/products.js')
const catName = slug => (CATS.find(c => c.slug === slug) || {}).name || slug
const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const words = a => a.join(' ').split(/\s+/).filter(Boolean).length

// per merged brand: where its products live
const info = {}
for (const r of redirects) {
  const slug = r.source.split('/')[2]
  const items = PRODUCTS.filter(p => p.brand && slugify(p.brand) === slug)
  const cats = [...new Set(items.map(p => p.category))]
  const tally = {}; items.forEach(p => { tally[p.category] = (tally[p.category] || 0) + 1 })
  const top = Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0]
  info[slug] = { single: cats.length === 1, cat: top, destination: r.destination }
}

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const pcFile = ROOT + 'src/config/product-copy.generated.json'
const pc = JSON.parse(fs.readFileSync(pcFile, 'utf8'))
let changed = 0, leftover = 0; const wc = []
for (const [key, paras] of Object.entries(pc)) {
  if (!Array.isArray(paras)) continue
  const before = words(paras)
  let touched = false
  for (let i = 0; i < paras.length; i++) {
    let p = paras[i]
    for (const [slug, f] of Object.entries(info)) {
      const link = '\\[[^\\]]*\\]\\(/brands/' + esc(slug) + '/\\)'
      const rangeLink = `[${catName(f.cat)} range](/shop/${f.cat}/)`
      const A = new RegExp('all gathered on the ' + link)
      const B = new RegExp('you can compare them on the ' + link)
      if (A.test(p)) p = p.replace(A, f.single ? `all in the ${rangeLink}` : 'found across [our shop](/shop/)')
      if (B.test(p)) p = p.replace(B, f.single ? `you can compare them in the ${rangeLink}` : 'you can browse them in [our shop](/shop/)')
      // any other link to the merged page: point it at the new destination so nothing breaks
      const any = new RegExp('(\\[[^\\]]*\\])\\(/brands/' + esc(slug) + '/\\)', 'g')
      if (any.test(p)) { leftover++; p = p.replace(any, `$1(${f.destination})`) }
    }
    if (p !== paras[i]) { paras[i] = p; touched = true }
  }
  if (touched) { changed++; wc.push({ key, before, after: words(paras) }) }
}
fs.writeFileSync(pcFile, JSON.stringify(pc))

const drop = Object.keys(info).map(s => `/brands/${s}/`)
const faqFile = ROOT + 'src/config/faq.generated.json'
const faq = JSON.parse(fs.readFileSync(faqFile, 'utf8')); let faqDropped = 0
drop.forEach(k => { if (faq.pages[k]) { delete faq.pages[k]; faqDropped++ } })
fs.writeFileSync(faqFile, JSON.stringify(faq))
const seoFile = ROOT + 'src/config/seo.generated.json'
const seo = JSON.parse(fs.readFileSync(seoFile, 'utf8')); let seoDropped = 0
drop.forEach(k => { if (seo[k]) { delete seo[k]; seoDropped++ } })
fs.writeFileSync(seoFile, JSON.stringify(seo))

const out = wc.filter(x => x.after < 212 || x.after > 312)
console.log('product copy entries changed:', changed, '| links needing generic retarget:', leftover)
console.log('FAQ page entries removed:', faqDropped, '| SEO entries removed:', seoDropped)
console.log('word counts: min', Math.min(...wc.map(x => x.after)), 'max', Math.max(...wc.map(x => x.after)), '| outside 212-312 after change:', out.length, out.slice(0, 5).map(x => `${x.key}:${x.before}->${x.after}`).join(' '))
