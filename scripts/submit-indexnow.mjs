// Submits every new blog post URL plus the blog index to IndexNow (Bing, Yandex and others). Usage: node scripts/submit-indexnow.mjs
import { NEW_META } from '../src/content/blog/new/index.js'
const host = 'torquee-bikesaustralia.com.au', key = '3d25546c539db77eb90afb071f5a39b5'
const urlList = [`https://${host}/blog/`, ...NEW_META.map(m => `https://${host}/blog/${m.slug}/`)]
const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }) })
console.log(urlList.length, 'urls ->', r.status, await r.text())
