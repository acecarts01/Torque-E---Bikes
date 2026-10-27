// Checks the new posts: word count, focus keyword density, link targets exist, images exist, one-keyword-one-page register collisions.
import fs from 'node:fs'
import { NEW_META, NEW_BODIES } from '../src/content/blog/new/index.js'
import { BLOG_META } from '../src/content/blog/meta.js'
const S = fs.readFileSync(new URL('../src/config/catalog-products.generated.js', import.meta.url), 'utf8')
const P = JSON.parse(S.match(/CATALOG_PRODUCTS = (\[[\s\S]*\])/)[1].replace(/;\s*$/, ''))
const prods = new Set(P.map(p => `/shop/${p.category}/${p.slug}/`))
const cats = new Set(P.map(p => `/shop/${p.category}/`))
const posts = new Set([...BLOG_META, ...NEW_META].map(p => p.url))
const plain = t => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '')
const reg = fs.readFileSync(new URL('../docs/used-keywords.csv', import.meta.url), 'utf8').toLowerCase()
let bad = 0
for (const m of NEW_META) {
  const b = NEW_BODIES[m.slug]
  const texts = [...b.intro, ...b.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])]), ...b.faq.map(f => f.a)]
  const words = texts.map(plain).join(' ').split(/\s+/).length
  const all = JSON.stringify([b, m]).toLowerCase()
  const full = texts.map(plain).join(' ').toLowerCase()
  const dens = ((full.split(m.focus).length - 1) * m.focus.split(' ').length / words * 100).toFixed(2)
  const links = [...JSON.stringify(b).matchAll(/\]\(([^)]+)\)/g)].map(x => x[1])
  const inb = links.filter(l => l.startsWith('/')); const out = links.filter(l => /^http/.test(l))
  const missing = [...inb, ...(m.related || []).map(r => r.href)].filter(l => !(prods.has(l) || cats.has(l) || posts.has(l) || ['/shop/sur-ron-spares/'].includes(l) || l.startsWith('/faq')))
  const first100 = plain(b.intro[0]).split(/\s+/).slice(0, 100).join(' ').toLowerCase().includes(m.focus)
  const h2 = b.sections.some(s => s.h.toLowerCase().includes(m.focus))
  const imgs = [m.image.file, ...b.sections.filter(s => s.img).map(s => s.img.file)].filter(f => !fs.existsSync('public/images/' + f))
  const uniq = new Set(inb.filter(l => /^\/shop\/[^/]+\/[^/]+\/$/.test(l)))
  const dupAnchor = (() => { const a = [...JSON.stringify(b).matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(x => x[1].toLowerCase()); return a.filter((x, i) => a.indexOf(x) !== i) })()
  const tagsClash = [...m.tags, ...m.secondary, m.focus].filter(k => (reg.match(new RegExp(',' + k.replace(/[$]/g, '\$') + ',', 'g')) || []).length > 0)
  console.log(`\n${m.slug}: words ${words} (+tables) | focus ${m.focus} density ${dens}% | first100 ${first100} | h2 ${h2} | title ${m.title.length}c desc ${m.excerpt.length}c`)
  console.log(`  tags ${m.tags.length} sec ${m.secondary.length} | inbound ${inb.length} (product pages ${uniq.size}) outbound ${out.length} | missing link targets: ${JSON.stringify(missing)} | missing images ${JSON.stringify(imgs)}`)
  console.log(`  repeated anchors: ${JSON.stringify(dupAnchor)} | already in register: ${JSON.stringify(tagsClash)} | faq ${b.faq.length} sections ${b.sections.length}`)
  if (words < 1500 || missing.length || imgs.length || m.tags.length !== 10 || m.secondary.length !== 5) bad++
}
console.log('\nproblems:', bad)
