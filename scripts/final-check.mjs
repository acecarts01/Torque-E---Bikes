// Final quality pass over every published blog post: keyword density, duplicate headings, title and description lengths, FAQ count, outbound URLs.
// Usage: node scripts/final-check.mjs [--urls]   (--urls prints the unique outbound URLs, one per line, for a live status check)
import { BLOG_META } from '../src/content/blog/meta.js'
import { BLOG_BODIES } from '../src/content/blog/bodies.js'
import { NEW_META, NEW_BODIES } from '../src/content/blog/new/index.js'
import { REFRESH_META } from '../src/content/blog/refresh/meta-index.js'
import { REFRESH_BODY } from '../src/content/blog/refresh/body-index.js'
import { applyMeta, applyBody, isMerged } from '../src/content/blog/refresh/apply.js'
const plain = t => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '')
const slugId = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const urls = new Set(); const flags = []
let n = 0
for (const m0 of [...BLOG_META, ...NEW_META].filter(p => p.kind !== 'tool' && !isMerged(p.slug))) {
  const m = applyMeta(m0, REFRESH_META[m0.slug]); const b = applyBody({ ...BLOG_BODIES, ...NEW_BODIES }[m.slug], REFRESH_BODY[m.slug]); n++
  const text = [...b.intro, ...b.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])]), ...b.faq.map(f => f.a)].map(plain).join(' ')
  const words = text.split(/\s+/).length
  const focus = (m.focus || '').toLowerCase()
  const hits = focus ? text.toLowerCase().split(focus).length - 1 : 0
  const density = focus ? (hits * focus.split(' ').length / words * 100) : 0
  const ids = b.sections.map(s => slugId(s.h)); const dup = ids.filter((x, i) => ids.indexOf(x) !== i)
  const tbl = b.sections.filter(s => s.table).length
  const f = []
  if (density > 1.5) f.push(`density ${density.toFixed(2)}%`)
  if (dup.length) f.push(`duplicate heading ids: ${[...new Set(dup)].join(', ')}`)
  if (m.title.length > 66) f.push(`title ${m.title.length} chars`)
  if (m.seoTitle.length > 62) f.push(`seoTitle ${m.seoTitle.length} chars`)
  if (m.excerpt.length < 110 || m.excerpt.length > 175) f.push(`description ${m.excerpt.length} chars`)
  if (b.faq.length < 4 || b.faq.length > 8) f.push(`faq ${b.faq.length}`)
  if (b.sections.length < 6) f.push(`only ${b.sections.length} sections`)
  if (!tbl) f.push('no comparison table')
  for (const u of JSON.stringify([b.intro, b.sections, b.faq]).matchAll(/\]\((https?:[^)]+)\)/g)) urls.add(u[1])
  if (f.length) flags.push(`${m.slug}: ${f.join('; ')}`)
}
if (process.argv.includes('--urls')) console.log([...urls].sort().join('\n'))
else { console.log(`checked ${n} posts | outbound URLs ${urls.size}`); console.log(flags.length ? flags.join('\n') : 'no flags') }
