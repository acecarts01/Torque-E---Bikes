// Recomputes the derived numbers and neighbour mentions in the generated copy after the catalogue changed (removals, additions):
// product copy (rank, neighbours, brand counts, siblings, companions), product FAQ ("similar" line), category copy / SEO / FAQ, brand-hub SEO / FAQ,
// and scrubs mentions of products that no longer exist.
// Usage: node scripts/refresh-derived-copy.mjs            (dry run, prints a summary; SHOWLEFT=1 shows leftovers)
//        node scripts/refresh-derived-copy.mjs --apply
import fs from 'node:fs'

const ROOT = process.cwd().replace(/\\/g, '/') + '/'
const APPLY = process.argv.includes('--apply')
const NL = String.fromCharCode(10), CR = String.fromCharCode(13)
const read = f => fs.readFileSync(ROOT + f, 'utf8')
const { PRODUCTS } = await import('file:///' + ROOT + 'src/config/products.js')
const { CATALOG_CATEGORIES: CATS } = await import('file:///' + ROOT + 'src/config/catalog.generated.js')
const copy = JSON.parse(read('src/config/product-copy.generated.json'))
const faq = JSON.parse(read('src/config/faq.generated.json'))
const seo = JSON.parse(read('src/config/seo.generated.json'))
const catCopy = JSON.parse(read('src/config/category-copy.generated.json'))
const specSlugs = new Set(JSON.parse(read('scripts/new-products.json')).map(s => s.slug))
const NEW_CATS = ['electric-scooters', 'kids-electric-scooters', 'electric-go-karts']

const parse = s => { const rows = []; let r = [], c = '', q = false; for (let i = 0; i < s.length; i++) { const ch = s[i]; if (q) { if (ch === '"') { if (s[i + 1] === '"') { c += '"'; i++ } else q = false } else c += ch } else if (ch === '"') q = true; else if (ch === ',') { r.push(c); c = '' } else if (ch === NL || ch === CR) { if (ch === CR && s[i + 1] === NL) i++; r.push(c); c = ''; if (r.length > 1 || r[0]) rows.push(r); r = [] } else c += ch } if (c || r.length) { r.push(c); rows.push(r) } return rows }
const rr = parse(read('docs/removed-products-2026-11-06.csv')); rr.shift()
const live = new Set(PRODUCTS.map(p => p.slug))
const removedByName = new Map(rr.filter(r => !live.has(r[0])).map(r => [r[1], { slug: r[0], category: r[3], price: +r[4] }]))
const aud = n => '$' + Math.round(n).toLocaleString('en-AU')
const ord = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10 < 4 ? n % 10 : 0])
const url = p => `/shop/${p.category}/${p.slug}/`
const byCat = c => PRODUCTS.filter(p => p.category === c).sort((a, b) => a.price - b.price || a.name.localeCompare(b.name))
const bySlug = Object.fromEntries(PRODUCTS.map(p => [p.slug, p]))
const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const catName = Object.fromEntries(CATS.map(c => [c.slug, c.name]))
const stats = { copy: 0, faq: 0, cat: 0, hub: 0 }
const nearest = (p, list, n) => list.filter(q => q.slug !== p.slug).sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, n)
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const LINK = '\\[[^\\]]*\\]\\([^)]*\\)'

for (const [slug, paras] of Object.entries(copy)) {
  const p = bySlug[slug]; if (!p || specSlugs.has(slug)) continue
  const list = byCat(p.category), idx = list.findIndex(x => x.slug === slug), lo = list[idx - 1], hi = list[idx + 1]
  const brandList = p.brand && p.brand !== 'TBC' ? PRODUCTS.filter(q => q.brand === p.brand) : []
  const before = JSON.stringify(paras)
  const out = paras.map(t => {
    t = t.replace(/(Across the )(\d+)( products in )/, (m, a, n, b) => a + list.length + b)
    t = t.replace(/(its price ranks )(\d+)(?:st|nd|rd|th)( from the bottom)/, (m, a, n, b) => a + ord(idx + 1) + b)
    t = t.replace(/( range of )(\d+)( products it is the )(\d+)(?:st|nd|rd|th)( lowest priced)/, (m, a, n, b, k, c) => a + list.length + b + ord(idx + 1) + c)
    t = t.replace(/(sits )(\d+)(?:st|nd|rd|th)( out of )(\d+)( in )/, (m, a, k, b, n, c) => a + ord(idx + 1) + b + list.length + c)
    const nb = new RegExp(`between the ${LINK} at \\$[\\d,]+(?:\\.\\d+)? and (?:the )?${LINK} at \\$[\\d,]+(?:\\.\\d+)?`)
    if (nb.test(t)) {
      const rep = lo && hi ? `between the [${lo.name}](${url(lo)}) at ${aud(lo.price)} and the [${hi.name}](${url(hi)}) at ${aud(hi.price)}`
        : lo ? `just above the [${lo.name}](${url(lo)}) at ${aud(lo.price)}` : hi ? `just below the [${hi.name}](${url(hi)}) at ${aud(hi.price)}` : 'on its own in this range'
      t = t.replace(nb, () => rep)
    }
    if (brandList.length) {
      const b = esc(p.brand)
      t = t.replace(new RegExp('(lists )(\\d+)( ' + b + ' products?)'), (m, a, n, c) => a + brandList.length + c)
      t = t.replace(new RegExp('(We stock )(\\d+)( ' + b + ' products? in total)'), (m, a, n, c) => a + brandList.length + c)
    }
    const sib = nearest(p, brandList.filter(q => q.category === p.category), 2)
    t = t.replace(new RegExp(`look at the ${LINK} at \\$[\\d,]+(?:\\.\\d+)?(?: and ${LINK} at \\$[\\d,]+(?:\\.\\d+)?)?`), () => sib.length ? `look at the ${sib.map(q => `[${q.name}](${url(q)}) at ${aud(q.price)}`).join(' and ')}` : 'look at our [other listings](/shop/)')
    const oth = nearest(p, brandList, 2)
    t = t.replace(new RegExp(`(Other [^.]*? products you can compare include )the ${LINK} \\(\\$[\\d,]+(?:\\.\\d+)?\\)(?: and ${LINK} \\(\\$[\\d,]+(?:\\.\\d+)?\\))?`), (m, a) => a + (oth.length ? oth.map((q, i) => `${i ? '' : 'the '}[${q.name}](${url(q)}) (${aud(q.price)})`).join(' and ') : 'the range in [our shop](/shop/)'))
    // any remaining link to a removed product: swap for the nearest live product of the category in the old link
    t = t.replace(new RegExp(LINK, 'g'), m => {
      const mm = m.match(/^\[([^\]]*)\]\(([^)]*)\)$/); const r = removedByName.get(mm[1]); if (!r) return m
      const cat = (mm[2].match(/^\/shop\/([^/]+)\//) || [])[1] || r.category
      const cand = nearest({ slug, price: r.price }, byCat(cat).filter(q => q.slug !== slug && !t.includes(`](${url(q)})`)), 1)[0]
      return cand ? `[${cand.name}](${url(cand)})` : m
    })
    t = t.replace(new RegExp('(\\[[^\\]]*\\]\\((/shop/[^/]+/[^/]+/)\\)) \\(\\$[\\d,]+(?:\\.\\d+)?\\)', 'g'), (m, l, href) => { const q = PRODUCTS.find(x => url(x) === href); return q ? `${l} (${aud(q.price)})` : m })
    return t
  })
  if (JSON.stringify(out) !== before) { copy[slug] = out; stats.copy++ }
}

// product FAQ "similar" answers
for (const [u, qs] of Object.entries(faq.pages)) {
  const m = u.match(/^\/shop\/([^/]+)\/([^/]+)\/$/); if (!m) continue
  const p = bySlug[m[2]]; if (!p || specSlugs.has(p.slug)) continue
  qs.forEach(q => {
    if (!/compare with similar/.test(q.q)) return
    const sim = nearest(p, byCat(p.category), 2)
    const re = /(Similar .*? include )the .*? at \$[\d,]+(?:\.\d{2})? and the .*? at \$[\d,]+(?:\.\d{2})?\./
    if (re.test(q.a) && sim.length === 2) { const n = q.a.replace(re, (mm, a) => `${a}the ${sim[0].name} at ${aud(sim[0].price)} and the ${sim[1].name} at ${aud(sim[1].price)}.`); if (n !== q.a) { q.a = n; stats.faq++ } }
  })
}

// category pages
const median = a => a[Math.floor(a.length / 2)].price
for (const c of CATS) {
  const list = byCat(c.slug); if (!list.length || NEW_CATS.includes(c.slug)) continue
  const brands = {}; list.forEach(p => { if (p.brand && p.brand !== 'TBC') brands[p.brand] = (brands[p.brand] || 0) + 1 })
  const top = Object.entries(brands).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en', { sensitivity: 'base' })).slice(0, 4).map(([b, n]) => `${b} (${n})`)
  const bTxt = top.length > 1 ? top.slice(0, -1).join(', ') + ' and ' + top[top.length - 1] : top[0]
  const lo = list[0].price, hi = list[list.length - 1].price, med = median(list)
  const cc = catCopy[c.slug]
  if (cc) {
    const n0 = cc[0]
    cc[0] = cc[0].replace(/lists \d+ products in /, () => `lists ${list.length} products in `).replace(/priced from \$[\d,]+ to \$[\d,]+ with a typical price near \$[\d,]+/, () => `priced from ${aud(lo)} to ${aud(hi)} with a typical price near ${aud(med)}`).replace(/Brands include .*? with the number of products in brackets/, () => `Brands include ${bTxt}, with the number of products in brackets`)
    if (cc[0] !== n0) stats.cat++
  }
  const s = seo[`/shop/${c.slug}/`]
  if (s) {
    s.h1 = s.h1.replace(/— \d+ products?$/, () => `— ${list.length} product${list.length > 1 ? 's' : ''}`)
    s.meta = s.meta.replace(/shop \d+ products? from \$[\d,]+ to \$[\d,]+ across \d+ brands?/, () => `shop ${list.length} products from ${aud(lo)} to ${aud(hi)} across ${Object.keys(brands).length} brand${Object.keys(brands).length > 1 ? 's' : ''}`)
  }
  const f = faq.pages[`/shop/${c.slug}/`]
  if (f) f.forEach(q => {
    let a = q.a.replace(/lists \d+ (.*?), priced from \$[\d,]+ to \$[\d,]+ with a typical price near \$[\d,]+/, (m, k) => `lists ${list.length} ${k}, priced from ${aud(lo)} to ${aud(hi)} with a typical price near ${aud(med)}`)
    a = a.replace(/(The lowest-priced \w+ listed is the ).*? at \$[\d,]+(?:\.\d+)?(, and the highest-priced is the ).*? at \$[\d,]+(?:\.\d+)?/, (m, x, y) => `${x}${list[0].name} at ${aud(lo)}${y}${list[list.length - 1].name} at ${aud(hi)}`)
    if (a !== q.a) { q.a = a; stats.faq++ }
  })
}

// brand hubs
for (const [u, s] of Object.entries(seo)) {
  const m = u.match(/^\/brands\/([^/]+)\/$/); if (!m) continue
  const items = PRODUCTS.filter(p => p.brand && slugify(p.brand) === m[1]).sort((a, b) => a.price - b.price); if (!items.length) continue
  const n = items.length, cats = [...new Set(items.map(p => p.category))]
  s.title = s.title.replace(/— \d+ Models/, () => `— ${n} Models`); s.h1 = s.h1.replace(/— \d+ products?/, () => `— ${n} product${n > 1 ? 's' : ''}`)
  s.meta = s.meta.replace(/shop \d+ (.*?) products/, (mm, b) => `shop ${n} ${b} products`).replace(/from \$[\d,]+\./, () => `from ${aud(items[0].price)}.`)
  const f = faq.pages[u]
  if (f) f.forEach(q => {
    let a = q.a
    a = a.replace(/lists \d+ (.*?) products across \d+ categor(?:y|ies)(?:, including [^.]*)?\./, (mm, b) => `lists ${n} ${b} products across ${cats.length} categor${cats.length > 1 ? 'ies' : 'y'}${cats.length > 1 ? ', including ' + cats.slice(0, 3).map(x => catName[x]).join(', ') : ''}.`)
    a = a.replace(/lists (\d+) (.*?) models, from the (.*?) at \$[\d,]+(?:\.\d+)? to the (.*?) at \$[\d,]+(?:\.\d+)?/, (mm, k, b) => `lists ${n} ${b} models, from the ${items[0].name} at ${aud(items[0].price)} to the ${items[n - 1].name} at ${aud(items[n - 1].price)}`)
    a = a.replace(/The lowest-priced (\w+) listed is the .*? at \$[\d,]+(?:\.\d+)?, and the highest-priced is the .*? at \$[\d,]+(?:\.\d+)?/, (mm, w) => `The lowest-priced ${w} listed is the ${items[0].name} at ${aud(items[0].price)}, and the highest-priced is the ${items[n - 1].name} at ${aud(items[n - 1].price)}`)
    if (a !== q.a) { q.a = a; stats.hub++ }
  })
}

// scrub: drop list items naming a removed product (a live product whose name merely starts with it is left alone)
const liveNames = PRODUCTS.map(p => p.name)
const names = [...removedByName.keys()].filter(n => n.length > 7)
const inLive = (text, i, n) => liveNames.some(L => L.length > n.length && L.includes(n) && text.substr(i - L.indexOf(n), L.length) === L)
const mentions = (text, n) => { for (let i = text.indexOf(n); i >= 0; i = text.indexOf(n, i + 1)) if (!inLive(text, i, n)) return true; return false }
const hasRemoved = text => names.some(n => mentions(text, n))
const scrub = text => {
  for (const n of names) {
    let guard = 0
    while (mentions(text, n) && guard++ < 6) {
      const e = esc(n), tail = '(?: at \\$[\\d,]+(?:\\.\\d+)?| \\(\\$[\\d,]+(?:\\.\\d+)?\\))?'
      const r1 = new RegExp('(?:, | and )(?:the |a )?' + e + tail), r2 = new RegExp('(?:the |a )?' + e + tail + '(?:, | and )')
      const next = r1.test(text) ? text.replace(r1, '') : r2.test(text) ? text.replace(r2, '') : null
      if (next === null || next === text) return null
      text = next
    }
  }
  return text.replace(/\s{2,}/g, ' ').replace(/ ,/g, ',')
}
const dropped = []
for (const [u, qs] of Object.entries(faq.pages)) {
  faq.pages[u] = qs.filter(q => {
    if (!hasRemoved(q.a)) return true
    const s = scrub(q.a)
    if (s === null || /(includes?|lists?)( cargo bikes including)?\s*[.:]/.test(s)) { dropped.push(u + ' :: ' + q.q); return false }
    q.a = s; stats.faq++; return true
  })
}
for (const [slug, paras] of Object.entries(copy)) copy[slug] = paras.map(p => { if (!hasRemoved(p)) return p; const s = scrub(p); return s === null ? p : s })
console.log('FAQ entries dropped (could not be repaired cleanly):', dropped.length, dropped.join(' || '))
console.log('changed:', stats)

const all = JSON.stringify({ copy, faq, seo, catCopy })
const left = names.filter(n => mentions(all, n))
if (process.env.SHOWLEFT) for (const n of left) for (const [k, v] of Object.entries({ copy, faq, seo, catCopy })) { const t = JSON.stringify(v); const i = t.indexOf(n); if (i >= 0) console.log('[' + k + ']', n, '=>', t.slice(Math.max(0, i - 120), i + 90)) }
console.log('removed names still present:', left.length, left.slice(0, 20).join(' | '))
if (!APPLY) { console.log('DRY RUN'); process.exit(0) }
fs.writeFileSync(ROOT + 'src/config/product-copy.generated.json', JSON.stringify(copy))
fs.writeFileSync(ROOT + 'src/config/faq.generated.json', JSON.stringify(faq))
fs.writeFileSync(ROOT + 'src/config/seo.generated.json', JSON.stringify(seo))
fs.writeFileSync(ROOT + 'src/config/category-copy.generated.json', JSON.stringify(catCopy))
console.log('APPLIED')
