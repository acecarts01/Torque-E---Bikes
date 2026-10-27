// Replaces the register rows of every refreshed post with its new main, secondary and tag keywords (volume, KD, intent from the Keyword Magic pulls).
// Usage: node scripts/register-refresh.mjs <km.jsonl> [slug ...]   (no slugs = all refreshed posts)
import fs from 'node:fs'
import { REFRESH_META } from '../src/content/blog/refresh/meta-index.js'
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const look = new Map()
for (const l of fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map(JSON.parse)) if (l.tag) for (const r of l.rows) look.set(r.kw.toLowerCase().trim(), r)
const q = s => (/,/.test(s) ? `"${s}"` : s)
const only = process.argv.slice(3)
const lines = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/)
const head = lines[0]; let body = lines.slice(1).filter(Boolean)
let added = 0
for (const [slug, m] of Object.entries(REFRESH_META)) {
  if (only.length && !only.includes(slug)) continue
  const url = `/blog/${slug}/`
  body = body.filter(l => !l.startsWith(url + ','))
  const add = (kw, role) => {
    const r = look.get(kw.toLowerCase()); if (!r) throw new Error(`no Semrush data for "${kw}" (${slug})`)
    body.push([url, 'blog', role, kw, kv(r.vol), r.kd, q(r.intent === 'I' ? 'Informational' : r.intent.split('').map(c => ({ T: 'Transactional', C: 'Commercial', I: 'Informational', N: 'Navigational' }[c])).join(', ')), 'semrush-keyword-magic-2026-10-27'].join(','))
    added++
  }
  add(m.focus, 'primary'); m.secondary.forEach(k => add(k, 'secondary')); m.tags.forEach(k => add(k, 'tag'))
}
fs.writeFileSync('docs/used-keywords.csv', [head, ...body].join('\n') + '\n')
console.log('rows added', added)
