// Downloads the first product photos from the supplier feed and saves them as 720x540 white-background WebP files (the site's product frame).
// Usage: node scripts/add-product-images.mjs <feed.json> [count]
import fs from 'node:fs'
import sharp from 'sharp'

const [feedFile, count = '3', ...only] = process.argv.slice(2)
const feed = JSON.parse(fs.readFileSync(feedFile, 'utf8'))
const specs = JSON.parse(fs.readFileSync('scripts/new-products.json', 'utf8'))
fs.mkdirSync('public/products', { recursive: true })
const report = []
for (const s of specs) {
  if (only.length && !only.includes(s.slug)) continue
  const f = feed.find(p => p.handle === s.feed)
  if (!f) { report.push(`${s.slug}: feed item missing`); continue }
  let n = 0
  for (const img of f.images.slice(0, 16)) {
    if (n >= +count) break
    try {
      const r = await fetch(img.src)
      if (!r.ok) continue
      const buf = Buffer.from(await r.arrayBuffer())
      // keep only clean product-on-white shots: the four edges must be near white and uniform
      const raw = await sharp(buf).flatten({ background: '#ffffff' }).resize(120, 120, { fit: 'fill' }).greyscale().raw().toBuffer()
      const edge = []; for (let i = 0; i < 120; i++) { edge.push(raw[i], raw[119 * 120 + i], raw[i * 120], raw[i * 120 + 119]) }
      const mean = edge.reduce((a, b) => a + b, 0) / edge.length; const sd = Math.sqrt(edge.reduce((a, b) => a + (b - mean) ** 2, 0) / edge.length)
      if (mean < 242 || sd > 12) continue
      const out = `public/products/${s.slug}-${n + 1}.webp`
      await sharp(buf).resize(720, 540, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).webp({ quality: 82 }).toFile(out)
      n++
    } catch (e) { report.push(`${s.slug}: ${img.src} failed ${e.message}`) }
  }
  report.push(`${s.slug}: ${n} images`)
}
console.log(report.join('\n'))
