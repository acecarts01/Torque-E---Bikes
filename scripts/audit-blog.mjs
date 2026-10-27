// Audits every blog post against the owner's blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Applies the refresh patches first, so it reports the state that is published.
// Usage: node scripts/audit-blog.mjs [--json] [--failing]
import fs from 'node:fs'
import { BLOG_META } from '../src/content/blog/meta.js'
import { BLOG_BODIES } from '../src/content/blog/bodies.js'
import { NEW_META, NEW_BODIES } from '../src/content/blog/new/index.js'
import { REFRESH_META } from '../src/content/blog/refresh/meta-index.js'
import { REFRESH_BODY } from '../src/content/blog/refresh/body-index.js'
import { applyMeta, applyBody, isMerged } from '../src/content/blog/refresh/apply.js'

const rows = fs.readFileSync(new URL('../docs/used-keywords.csv', import.meta.url), 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(l => {
  const m = l.match(/^([^,]*),([^,]*),([^,]*),(.*)$/); if (!m) return null
  const mm = m[4].match(/^(.*?),(\d*),(\d*),("[^"]*"|[^,]*),(.*)$/)
  return mm ? { url: m[1], role: m[3], kw: mm[1].toLowerCase(), vol: +mm[2], intent: mm[4].replace(/"/g, '') } : null
}).filter(Boolean)
const TC = i => /Transactional|Commercial/.test(i)
const catUrls = new Set(rows.filter(r => r.url.startsWith('/shop/')).map(r => r.url))
const plain = t => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '')
const allTagsSeen = new Map()

const out = []
for (const m0 of [...BLOG_META, ...NEW_META].filter(p => p.kind !== 'tool' && !isMerged(p.slug))) {
  const m = applyMeta(m0, REFRESH_META[m0.slug])
  const b = applyBody({ ...BLOG_BODIES, ...NEW_BODIES }[m.slug], REFRESH_BODY[m.slug])
  if (!b) continue
  const texts = [...b.intro, ...b.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])]), ...b.faq.map(f => f.a)]
  const words = texts.map(plain).join(' ').split(/\s+/).filter(Boolean).length
  const all = JSON.stringify([b.intro, b.sections, b.faq])
  const links = [...all.matchAll(/\]\(([^)]+)\)/g)].map(x => x[1])
  const outb = [...new Set(links.filter(l => /^https?:/.test(l)))]
  const inb = links.filter(l => l.startsWith('/'))
  const prodLinks = new Set([...inb, ...(m.related || []).map(r => r.href)].filter(l => /^\/shop\/[^/]+\/[^/]+\/$/.test(l)))
  const catLinks = new Set([...inb, ...(m.related || []).map(r => r.href)].filter(l => /^\/shop\/[^/]+\/$/.test(l)))
  const focus = m.focus || b.keywords?.primary
  const reg = rows.filter(r => r.url === m.url)
  const pr = reg.find(r => r.role === 'primary')
  const hasNew = !!m.focus
  const secOk = hasNew ? m.secondary?.length === 5 : reg.filter(r => r.role === 'secondary' && TC(r.intent)).length >= 5
  const issues = []
  if (words < 1500) issues.push(`words ${words}`)
  if (b.sections.length <= 3) issues.push('no TOC')
  if (!pr || !TC(pr.intent) || !(pr.vol > 0)) issues.push(`main kw not T/C with volume (${pr ? pr.kw + ' ' + pr.intent : 'none'})`)
  if (!secOk) issues.push('5 secondary T/C')
  if ((m.tags || []).length !== 10) issues.push('10 tags')
  for (const t of m.tags || []) { if (allTagsSeen.has(t)) issues.push(`tag reused: ${t} (${allTagsSeen.get(t)})`); allTagsSeen.set(t, m.slug) }
  if (!focus || !m.image.alt.toLowerCase().includes(focus.toLowerCase())) issues.push('focus kw not in hero alt')
  if (focus && !m.title.toLowerCase().includes(focus.toLowerCase())) issues.push('focus kw not in title')
  if (focus && !plain(b.intro.join(' ')).split(/\s+/).slice(0, 100).join(' ').toLowerCase().includes(focus.toLowerCase())) issues.push('focus kw not in first 100 words')
  if (focus && !b.sections.some(s => s.h.toLowerCase().includes(focus.toLowerCase().split(' ').slice(0, 3).join(' ')))) issues.push('no H2 with focus kw')
  if (outb.length < 2 || outb.length > 4) issues.push(`outbound ${outb.length}`)
  if (catLinks.size < 1) issues.push('no category link')
  if (prodLinks.size < 2) issues.push(`product links ${prodLinks.size}`)
  if (!(m.related || []).length) issues.push('no related products block')
  if (!(m.links.from || []).length) issues.push('no inbound link planned')
  out.push({ slug: m.slug, words, main: pr ? `${pr.kw} (${pr.vol}, ${pr.intent})` : '-', outbound: outb.length, product: prodLinks.size, issues })
}
const failing = out.filter(p => p.issues.length)
if (process.argv.includes('--json')) console.log(JSON.stringify(out, null, 1))
else {
  console.log(`posts ${out.length} | passing ${out.length - failing.length} | failing ${failing.length}`)
  for (const p of (process.argv.includes('--failing') ? failing : out)) console.log(`${String(p.words).padStart(5)}w | out${p.outbound} prod${p.product} | ${p.slug} | ${p.main}${p.issues.length ? '\n        FAIL: ' + p.issues.join('; ') : '  OK'}`)
}
