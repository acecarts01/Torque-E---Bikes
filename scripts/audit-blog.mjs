// Audits every blog post against the owner's blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Usage: node scripts/audit-blog.mjs [--json]
import fs from 'node:fs'
import { BLOG_META } from '../src/content/blog/meta.js'
import { BLOG_BODIES } from '../src/content/blog/bodies.js'

const reg = fs.readFileSync(new URL('../docs/used-keywords.csv', import.meta.url), 'utf8').split(/\r?\n/).slice(1).filter(Boolean)
const parseRow = l => { const m = l.match(/^([^,]*),([^,]*),([^,]*),(.*)$/); if (!m) return null; const rest = m[4]; const mm = rest.match(/^(.*?),(\d+),(\d+),("[^"]*"|[^,]*),(.*)$/); return mm ? { url: m[1], type: m[2], role: m[3], kw: mm[1], vol: +mm[2], kd: +mm[3], intent: mm[4].replace(/"/g, '') } : null }
const rows = reg.map(parseRow).filter(Boolean)
const byUrl = u => rows.filter(r => r.url === u)
const TC = i => /Transactional|Commercial/.test(i) && !/Informational|Navigational/.test(i.replace(/Transactional|Commercial/g, '')) || /Transactional|Commercial/.test(i)

const out = []
for (const m of BLOG_META.filter(p => p.kind !== 'tool')) {
  const b = BLOG_BODIES[m.slug]
  if (!b) continue
  const text = [b.hook, ...b.intro, ...b.sections.flatMap(s => [s.h, ...(s.p || []), ...(s.ul || [])]), ...b.faq.flatMap(f => [f.q, f.a])].join(' ')
  const body = [...b.intro, ...b.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])])].join(' ')
  const plain = t => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  const words = plain(body).split(/\s+/).filter(Boolean).length + b.faq.reduce((n, f) => n + plain(f.a).split(/\s+/).length, 0)
  const links = [...text.matchAll(/\]\(([^)]+)\)/g)].map(x => x[1])
  const outb = links.filter(l => /^https?:/.test(l))
  const inb = links.filter(l => l.startsWith('/'))
  const prod = inb.filter(l => /^\/shop\/[^/]+\/[^/]+\/$/.test(l))
  const cat = inb.filter(l => /^\/shop\/[^/]+\/$/.test(l))
  const regRows = byUrl(m.url)
  const primary = b.keywords && b.keywords.primary
  const pr = regRows.find(r => r.role === 'primary')
  const sec = regRows.filter(r => r.role === 'secondary')
  const alt = (m.image && m.image.alt || '').toLowerCase()
  const kwInAlt = primary ? alt.includes(primary.toLowerCase()) : false
  const issues = []
  if (words < 1500) issues.push(`words ${words} < 1500`)
  if (b.sections.length <= 3) issues.push('no TOC (needs 4+ sections)')
  if (!pr || !TC(pr.intent)) issues.push(`main kw not T/C (${pr ? pr.kw + ' ' + pr.intent : 'none'})`)
  const secTC = sec.filter(r => TC(r.intent)).length
  if (secTC < 5) issues.push(`secondary T/C ${secTC}/5`)
  issues.push('no 10 tags') // tags field does not exist yet on any post
  if (!kwInAlt) issues.push('focus kw not in hero alt')
  if (outb.length < 2) issues.push(`outbound ${outb.length} < 2`)
  if (cat.length < 1) issues.push('no category link')
  if (prod.length < 2) issues.push(`product links ${prod.length} < 2`)
  out.push({ slug: m.slug, title: m.title, date: m.date, words, sections: b.sections.length, faq: b.faq.length, main: pr ? `${pr.kw} (${pr.vol}/KD${pr.kd}, ${pr.intent})` : primary || '-', secTC, outbound: outb.length, product: prod.length, category: cat.length, kwInAlt, issues })
}
out.sort((a, b) => b.issues.length - a.issues.length || (a.words - b.words))
if (process.argv.includes('--json')) console.log(JSON.stringify(out, null, 1))
else {
  console.log('posts', out.length)
  const s = f => out.filter(f).length
  console.log('under 1500 words:', s(p => p.words < 1500), '| no/thin TOC:', s(p => p.sections <= 3), '| main kw not T/C:', s(p => p.issues.some(i => i.startsWith('main kw'))), '| outbound<2:', s(p => p.outbound < 2), '| product links<2:', s(p => p.product < 2), '| focus kw missing in alt:', s(p => !p.kwInAlt))
  for (const p of out) console.log(`${p.words}w | s${p.sections} f${p.faq} | out${p.outbound} prod${p.product} cat${p.category} | secTC${p.secTC} | ${p.slug} | main: ${p.main}\n     ${p.issues.join('; ')}`)
}
