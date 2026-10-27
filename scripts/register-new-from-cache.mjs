// Registers NEW_META posts (main, secondary, tags) in docs/used-keywords.csv from the Semrush Keyword Magic cache. Usage: node scripts/register-new-from-cache.mjs [slug ...]
import fs from 'node:fs'
import { NEW_META } from '../src/content/blog/new/index.js'
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const look = new Map()
for (const l of fs.readFileSync('scripts/.km-cache.jsonl', 'utf8').trim().split('\n').map(JSON.parse)) if (l.tag) for (const r of l.rows) look.set(r.kw.toLowerCase().trim(), r)
if (fs.existsSync('scripts/kw-overrides.json')) for (const [k, v] of Object.entries(JSON.parse(fs.readFileSync('scripts/kw-overrides.json', 'utf8')))) look.set(k.toLowerCase(), v)
const q = s => (/,/.test(s) ? `"${s}"` : s)
const only = process.argv.slice(2)
const lines = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/)
const head = lines[0]; let body = lines.slice(1).filter(Boolean); let added = 0
const I = { T: 'Transactional', C: 'Commercial', I: 'Informational', N: 'Navigational' }
for (const m of NEW_META) {
  if (only.length && !only.includes(m.slug)) continue
  body = body.filter(l => !l.startsWith(m.url + ','))
  const add = (kw, role) => {
    const r = look.get(kw.toLowerCase()); if (!r) throw new Error(`no Semrush data for "${kw}" (${m.slug})`)
    body.push([m.url, 'blog', role, kw, kv(r.vol), r.kd, q(r.intent.split('').map(c => I[c]).join(', ')), 'semrush-keyword-magic-2026-10-27'].join(',')); added++
  }
  add(m.focus, 'primary'); m.secondary.forEach(k => add(k, 'secondary')); m.tags.forEach(k => add(k, 'tag'))
}
fs.writeFileSync('docs/used-keywords.csv', [head, ...body].join('\n') + '\n'); console.log('rows written', added)
