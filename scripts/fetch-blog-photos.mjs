// Downloads the chosen Unsplash hero photos for the blog and writes them as WebP to public/images/blog/.
// Usage: node scripts/fetch-blog-photos.mjs   (safe to re-run: existing files are skipped)
// Photos are free to use under the Unsplash License. Credits are appended to public/images/CREDITS.txt.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const photos = JSON.parse(fs.readFileSync(path.join(root, 'scripts/blog-photos.json'), 'utf8'))
const out = path.join(root, 'public/images/blog')
fs.mkdirSync(out, { recursive: true })

const credited = new Set((fs.existsSync(path.join(root, 'public/images/CREDITS.txt')) ? fs.readFileSync(path.join(root, 'public/images/CREDITS.txt'), 'utf8') : '').split('\n'))
const credits = []
let ok = 0

async function one([slug, { id, desc, by }]) {
  const file = path.join(out, `${slug}.webp`)
  if (fs.existsSync(file)) { ok++; return }
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=85`
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(90000) })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      await sharp(buf).resize(1600, 686, { fit: 'cover', position: 'attention' }).webp({ quality: 78 }).toFile(file)
      credits.push(`blog/${slug}.webp - "${desc}" by ${by}, Unsplash, https://images.unsplash.com/photo-${id}`)
      ok++
      console.log('saved', slug)
      return
    } catch (e) {
      if (attempt === 3) console.log('FAILED', slug, e.message)
    }
  }
}

const entries = Object.entries(photos)
const queue = [...entries]
await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await one(queue.shift()) }))

const fresh = credits.filter(c => !credited.has(c))
if (fresh.length) fs.appendFileSync(path.join(root, 'public/images/CREDITS.txt'), `\nBlog hero images (free to use under the Unsplash License; credited here for the record):\n${fresh.join('\n')}\n`)
console.log(`${ok}/${entries.length} photos in place`)
