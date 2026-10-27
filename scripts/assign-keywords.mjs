// Assigns a unique main keyword (T/C), 5 secondaries (T/C) and 10 tags to every existing post from the Keyword Magic pulls.
// Keywords already in docs/used-keywords.csv (other pages) are never reused. Usage: node scripts/assign-keywords.mjs <km.jsonl> [out.json]
import fs from 'node:fs'
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const used = fs.readFileSync('docs/used-keywords.csv', 'utf8').toLowerCase().split('\n')
// keywords used by OTHER pages; rows for posts being refreshed are released so they can be reassigned
const REFRESH = JSON.parse(fs.readFileSync('scripts/refresh-config.json', 'utf8'))
const refreshUrls = new Set(REFRESH.map(p => `/blog/${p.slug}/`))
const taken = new Set(used.filter(l => l && !refreshUrls.has(l.split(',')[0])).map(l => (l.split(',')[3] || '')))
const noise = /\bstark\b|crazy cart|fat fish|fatfish|tuttio|\bamazon\b|\bkmart\b|\bbunnings\b|\bkogan\b|\baldi\b|\bebay\b|\bgumtree\b|\bcoles\b|\bwoolworths\b|second hand|\bused\b|\bhire\b|\brent|near me|brisbane|sydney|melbourne|perth|adelaide|\bwa\b|\bnsw\b|\bqld\b|\bvic\b|\bdiy\b|\bpdf\b|\bnz\b|\busa\b|\buk\b/
const pool = new Map()
for (const l of fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map(JSON.parse)) {
  if (!l.tag) continue
  for (const r of l.rows) {
    const k = r.kw.toLowerCase().trim()
    if (!/^[INCT]+$/.test(r.intent) || !/[TC]/.test(r.intent) || kv(r.vol) < 20 || !/^\d+$/.test(String(r.kd)) || !(+r.kd <= 45)) continue
    if (noise.test(k) || /\b(\w+) \1\b/.test(k) || /\bauto\b/.test(k) || taken.has(k)) continue
    const e = pool.get(k) || { kw: r.kw.trim(), v: kv(r.vol), d: +r.kd, i: r.intent, tags: new Set() }
    e.tags.add(l.tag.split('|')[0]); pool.set(k, e)
  }
}
const used2 = new Set(), out = {}
for (const p of REFRESH) {
  const re = new RegExp(p.re, 'i')
  let cand = [...pool.values()].filter(e => p.pools.some(t => e.tags.has(t)) && re.test(e.kw) && !used2.has(e.kw.toLowerCase()))
  cand.sort((a, b) => b.v - a.v)
  let main = p.main ? cand.find(e => e.kw.toLowerCase() === p.main) : cand.find(e => e.d <= 30)
  if (!main) { out[p.slug] = { error: 'no main', n: cand.length }; continue }
  const rest = cand.filter(e => e !== main)
  const sec = rest.filter(e => e.d <= 35).slice(0, 5)
  const tags = rest.filter(e => !sec.includes(e)).slice(0, 10)
  ;[main, ...sec, ...tags].forEach(e => used2.add(e.kw.toLowerCase()))
  out[p.slug] = { main: [main.kw, main.v, main.d, main.i], sec: sec.map(e => [e.kw, e.v, e.d, e.i]), tags: tags.map(e => [e.kw, e.v, e.d, e.i]), short: 5 - sec.length + 10 - tags.length }
}
fs.writeFileSync(process.argv[3] || 'scripts/.assigned.json', JSON.stringify(out, null, 1))
for (const [s, v] of Object.entries(out)) console.log(s.padEnd(52), v.error ? 'ERROR ' + v.n : `${v.main[0]} (${v.main[1]}/${v.main[2]}) short ${v.short}`)
