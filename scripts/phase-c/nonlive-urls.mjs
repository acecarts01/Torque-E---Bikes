// Lists register URLs that are not live pages (not in the sitemap: redirects or removed), with their keyword rows.
import fs from 'node:fs'
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const reg = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse)
const urls = [...new Set(reg.map(r => r[0]))]
const sm = await (await fetch('https://torquee-bikesaustralia.com.au/sitemap.xml')).text()
const live = new Set([...sm.matchAll(/<loc>https:\/\/torquee-bikesaustralia\.com\.au([^<]*)<\/loc>/g)].map(m => m[1]))
const nonLive = []
for (const u of urls) {
  if (live.has(u)) continue
  const r = await fetch('https://torquee-bikesaustralia.com.au' + u, { redirect: 'manual' })
  nonLive.push([u, r.status, r.headers.get('location') || ''])
}
const byStatus = {}
for (const n of nonLive) byStatus[n[1]] = (byStatus[n[1]] || 0) + 1
console.log('register urls', urls.length, '| in sitemap', urls.length - nonLive.length, '| not in sitemap', nonLive.length, JSON.stringify(byStatus))
fs.writeFileSync('docs/phase-c/nonlive-register-urls.json', JSON.stringify(nonLive, null, 1))
const nl = new Set(nonLive.map(n => n[0]))
console.log('rows on non-live urls', reg.filter(r => nl.has(r[0])).length)
console.log(nonLive.slice(0, 80).map(n => n.join(' ')).join('\n'))
