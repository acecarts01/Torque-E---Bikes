// Writes src/config/blog-index.generated.json: the few blog facts that client components need (live URLs, guide links per page, latest three posts).
// Client components must not import src/lib/blog.ts, because that pulls every post body into the browser bundle.
import fs from 'node:fs'
import { BLOG_META } from '../src/content/blog/meta.js'
import { NEW_META } from '../src/content/blog/new/index.js'
import { REFRESH_META } from '../src/content/blog/refresh/meta-index.js'
import { applyMeta, isMerged } from '../src/content/blog/refresh/apply.js'

const ALL = [...BLOG_META, ...NEW_META].filter(m => !isMerged(m.slug)).map(m => applyMeta(m, REFRESH_META[m.slug]))
const PUBLISHED = ALL.filter(p => p.kind !== 'tool')
  .filter(p => process.env.PUBLISH_ALL === '1' || new Date(p.date + 'T00:00:00Z') <= new Date())
  .sort((a, b) => (a.date < b.date ? 1 : -1))
const guides = {}
for (const p of PUBLISHED) for (const [u, anchor] of p.links.from) (guides[u] ||= []).push({ href: p.url, anchor, title: p.title })
const out = { urls: PUBLISHED.map(p => p.url), guides, all: PUBLISHED.map(p => ({ slug: p.slug, url: p.url, title: p.title, excerpt: p.excerpt, category: p.category, date: p.date, readTime: p.readTime, image: p.image })), latest: PUBLISHED.slice(0, 3).map(p => ({ slug: p.slug, url: p.url, category: p.category, title: p.title, excerpt: p.excerpt })) }
fs.writeFileSync('src/config/blog-index.generated.json', JSON.stringify(out))
console.log('blog index:', out.urls.length, 'urls,', Object.keys(guides).length, 'guide targets')
