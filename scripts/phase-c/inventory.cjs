const fs = require('fs')
process.chdir(require('path').resolve(__dirname, '../..'))
const OUT = require('path').resolve(__dirname, '../../docs/phase-c') + '/'
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const rows = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse).map(r => ({ url: r[0], type: r[1], role: r[2], kw: r[3], vol: +r[4], kd: +r[5], intent: r[6], src: r[7] }))
const byUrl = {}
for (const r of rows) (byUrl[r.url] = byUrl[r.url] || []).push(r)
const bad = r => /generated/i.test(r.src) || !(r.vol > 0) || r.kd > 28
const pages = Object.entries(byUrl).map(([url, rs]) => ({ url, type: rs[0].type, n: rs.length, bad: rs.filter(bad).length, gen: rs.filter(r => /generated/i.test(r.src)).length, kd: rs.filter(r => r.kd > 28).length, prim: rs.find(r => r.role === 'primary'), primBad: rs.find(r => r.role === 'primary' && bad(r)) ? 1 : 0 }))
const summary = {}
for (const p of pages) { const s = summary[p.type] = summary[p.type] || { pages: 0, pagesWithBad: 0, badRows: 0, primBad: 0 }; s.pages++; if (p.bad) s.pagesWithBad++; s.badRows += p.bad; s.primBad += p.primBad }
console.log(JSON.stringify(summary, null, 1))
// sitemap pages with no keywords
const sm = fs.existsSync(process.env.TEMP + '/sm2.xml') ? fs.readFileSync(process.env.TEMP + '/sm2.xml', 'utf8') : ''
const urls = [...sm.matchAll(/<loc>https:\/\/torquee-bikesaustralia\.com\.au([^<]*)<\/loc>/g)].map(m => m[1])
const noKw = urls.filter(u => !byUrl[u])
console.log('sitemap urls', urls.length, 'no keywords', noKw.length)
console.log(noKw.slice(0, 40).join(' '))
fs.writeFileSync(OUT + 'inventory.json', JSON.stringify({ pages, noKw }))
const prods = pages.filter(p => p.type === 'product' && p.bad)
console.log('product pages needing work', prods.length, 'with bad primary', prods.filter(p => p.primBad).length)
