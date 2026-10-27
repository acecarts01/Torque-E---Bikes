// Prints a post's current title, excerpt, image alt, links, intro and section headings (with lengths). Usage: node scripts/show-post.mjs <slug>
import { BLOG_BODIES as B } from '../src/content/blog/bodies.js'
import { BLOG_META as M } from '../src/content/blog/meta.js'
const m = M.find(p => p.slug === process.argv[2]); const b = B[m.slug]
console.log(JSON.stringify({ t: m.title, s: m.seoTitle, ex: m.excerpt, img: m.image.alt, to: m.links.to, from: m.links.from }))
console.log('INTRO', b.intro.join(' | '))
b.sections.forEach(s => console.log('##', s.h, '|', ((s.p || []).join(' ') + (s.ul || []).join(' ')).length))
console.log('FAQ', b.faq.map(f => f.q).join(' || '))
