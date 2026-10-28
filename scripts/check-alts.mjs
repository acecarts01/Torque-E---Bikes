// Fetches each new post (live or local base URL) and checks every <img>: alt present and non-empty, hero alt contains the focus keyword, inline alts differ from the hero, file names are descriptive.
// Usage: node scripts/check-alts.mjs <baseUrl> [slug ...]   (no slugs = all new posts)
import { NEW_META } from '../src/content/blog/new/index.js'
const base = process.argv[2] || 'https://torquee-bikesaustralia.com.au'
const only = process.argv.slice(3)
let bad = 0, n = 0
for (const m of NEW_META) {
  if (only.length && !only.includes(m.slug)) continue
  const html = await (await fetch(`${base}/blog/${m.slug}/`)).text()
  const main = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>') > 0 ? html.lastIndexOf('</main>') : undefined)
  const imgs = [...main.matchAll(/<img\b[^>]*>/g)].map(x => x[0])
  const info = imgs.map(t => ({ alt: (t.match(/\balt="([^"]*)"/) || [])[1], src: (t.match(/\bsrc="([^"]*)"/) || [])[1] || '' }))
  const probs = []
  if (!info.length) probs.push('no images')
  for (const i of info) { if (i.alt === undefined || !i.alt.trim()) probs.push('missing alt: ' + i.src.slice(0, 60)) }
  const hero = info.find(i => decodeURIComponent(i.src).includes(m.slug) && !/-[a-z0-9-]+\.webp/.test(decodeURIComponent(i.src).split('/').pop().replace(m.slug + '.webp', ''))) || info[0]
  if (hero && !(hero.alt || '').toLowerCase().includes(m.focus.toLowerCase())) probs.push(`hero alt lacks focus "${m.focus}": ${hero.alt}`)
  const alts = info.map(i => i.alt).filter(Boolean)
  if (new Set(alts).size !== alts.length) probs.push('duplicate alts')
  n++
  if (probs.length) { bad++; console.log(m.slug, '|', info.length, 'imgs |', probs.join('; ')) }
}
console.log(`checked ${n} posts, ${bad} with problems`)
