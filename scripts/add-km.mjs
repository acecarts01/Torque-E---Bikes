// Appends a Keyword Magic pull (compact "kw~vol~kd~intent;..." string read from the Semrush page) to the cache as a JSONL line.
// Usage: node scripts/add-km.mjs "<tag>" "<compact string>"
import fs from 'node:fs'
const [, , tag, s] = process.argv
const rows = s.split(';').filter(Boolean).map(x => { const [kw, vol, kd, intent] = x.split('~'); return { kw, intent, vol, kd } })
fs.appendFileSync('scripts/.km-cache.jsonl', JSON.stringify({ tag, rows }) + '\n')
console.log(tag, rows.length, 'rows')
