// Lists free (not used on any other page) keywords with a real intent from chosen Keyword Magic pulls, so sets are hand-picked only from unused terms.
// Usage: node scripts/free-list.mjs <slug-to-release> <tag> [<tag> ...]   (rows already registered for <slug-to-release> count as free)
import fs from 'node:fs'
const [, , slug, ...tags] = process.argv
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const used = fs.readFileSync('docs/used-keywords.csv', 'utf8').toLowerCase().split('\n').filter(l => l && !l.startsWith(`/blog/${slug}/,`)).join('\n')
const seen = new Map()
for (const l of fs.readFileSync('scripts/.km-cache.jsonl', 'utf8').trim().split('\n').map(JSON.parse)) {
  if (!l.tag || !tags.some(t => l.tag.startsWith(t))) continue
  for (const r of l.rows) {
    const k = r.kw.toLowerCase().trim()
    if (seen.has(k) || !/^[INCT]+$/.test(r.intent) || kv(r.vol) < 20 || !/^\d+$/.test(String(r.kd)) || +r.kd > 28 || used.includes(',' + k + ',')) continue
    seen.set(k, r)
  }
}
console.log([...seen.values()].sort((a, b) => kv(b.vol) - kv(a.vol)).map(x => `${x.kw} ${x.vol}/${x.kd}/${x.intent}`).join('; '))
