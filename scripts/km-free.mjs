// Lists free (unused) Transactional/Commercial keywords from the Keyword Magic pulls for a tag prefix.
// Usage: node scripts/km-free.mjs <rank.jsonl> <tagPrefix> [minVol] [maxKd] [limit]
import fs from 'node:fs'
const [, , file, prefix, minVol = '30', maxKd = '35', limit = '60'] = process.argv
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const used = fs.readFileSync('docs/used-keywords.csv', 'utf8').toLowerCase()
const seen = new Map()
for (const l of fs.readFileSync(file, 'utf8').trim().split('\n').map(JSON.parse)) {
  if (!l.tag || !l.tag.startsWith(prefix)) continue
  for (const r of l.rows) {
    const k = r.kw.toLowerCase(); const v = kv(r.vol), d = +r.kd
    if (seen.has(k) || !/[TC]/.test(r.intent) || v < +minVol || !(d <= +maxKd) || used.includes(',' + k + ',')) continue
    seen.set(k, { kw: r.kw, i: r.intent, v, d })
  }
}
const out = [...seen.values()].sort((a, b) => b.v - a.v).slice(0, +limit)
console.log(out.length + ' free\n' + out.map(o => `${o.kw}|${o.v}|${o.d}|${o.i}`).join('\n'))
