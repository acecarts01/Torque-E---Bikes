// Builds docs/keyword-ranking.csv (what the site ranks for) and docs/keyword-gap.csv (competitor keywords the site does not rank for).
// Input: JSONL posted from Semrush organic-positions pages (AU database, 27 Oct 2026). Usage: node scripts/build-keyword-store.mjs <rank.jsonl>
import fs from 'node:fs'
const L = fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map(JSON.parse)
const kv = s => { s = String(s || '').replace(/,/g, ''); return /K$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s) || 0 }
const q = s => (/[",]/.test(s) ? `"${String(s).replace(/"/g, '""')}"` : s)
const date = '2026-10-27'
const ours = new Map(), comp = new Map()
for (const l of L) for (const r of (l.tag ? [] : l.rows)) {
  if (!r.kw) continue
  if (!l.dom) { const k = r.kw + '|' + r.url; if (!ours.has(k)) ours.set(k, r) }
  else { const k = l.dom + '|' + r.kw; if (!comp.has(k)) comp.set(k, { ...r, dom: l.dom }) }
}
const rank = [...ours.values()].sort((a, b) => kv(b.vol) - kv(a.vol))
fs.writeFileSync('docs/keyword-ranking.csv', 'keyword,volume,kd,intent,position,url,source,date\n' + rank.map(r => [q(r.kw), kv(r.vol), r.kd, r.intent, r.pos || '', r.url, 'semrush-organic-positions', date].join(',')).join('\n') + '\n')
const ourKw = new Set(rank.map(r => r.kw.toLowerCase()))
const used = fs.readFileSync('docs/used-keywords.csv', 'utf8').toLowerCase()
const byKw = new Map()
for (const c of comp.values()) {
  const k = c.kw.toLowerCase()
  if (ourKw.has(k)) continue
  const cur = byKw.get(k)
  const e = { kw: c.kw, vol: kv(c.vol), kd: +c.kd || '', intent: c.intent, comps: [`${c.dom}:${c.pos || ''}`] }
  if (cur) cur.comps.push(...e.comps); else byKw.set(k, e)
}
const brandNoise = /brisbane|melbourne|sydney|perth|adelaide|canberra|near me|ampd|rideelectric|melbourne powered|pedl|murf|99 bikes|reid|2nd hand|second hand|used|repair|service|hire|rental|nsw|vic\b|qld|wa\b/i
const gap = [...byKw.values()].map(e => ({ ...e, usedHere: used.includes(',' + e.kw.toLowerCase() + ',') ? 'used' : 'free', noise: brandNoise.test(e.kw) })).sort((a, b) => b.vol - a.vol)
const elig = e => e.vol >= 50 && (e.kd === '' || e.kd <= 35) && !e.noise && e.usedHere === 'free'
fs.writeFileSync('docs/keyword-gap.csv', 'keyword,volume,kd,intent,eligible,register_status,competitors(domain:position),source,date\n' + gap.map(e => [q(e.kw), e.vol, e.kd, e.intent, elig(e) ? 'yes' : 'no', e.usedHere, q(e.comps.join(' ')), 'semrush-competitor-positions', date].join(',')).join('\n') + '\n')
console.log('ranking rows', rank.length, '| gap rows', gap.length, '| eligible', gap.filter(elig).length)
