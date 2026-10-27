// Builds blog images from the shop's own product photos (white 4:3 frames), so a post shows the exact items it sells.
// Usage: node scripts/make-blog-images.mjs
import sharp from 'sharp'
import fs from 'node:fs'

const P = f => `public/products/${f}-1.webp`
const OUT = 'public/images/blog'
fs.mkdirSync(OUT, { recursive: true })

// Hero: three products side by side on a white 21:9 canvas.
async function hero(name, files, w = 2100, h = 900) {
  const tile = Math.floor(w / files.length)
  const th = Math.round(tile * 0.75)
  const top = Math.round((h - th) / 2)
  const layers = []
  for (let i = 0; i < files.length; i++) layers.push({ input: await sharp(P(files[i])).resize(tile, th, { fit: 'contain', background: '#ffffff' }).toBuffer(), left: i * tile, top })
  await sharp({ create: { width: w, height: h, channels: 3, background: '#ffffff' } }).composite(layers).webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`)
}
// Inline: a single product at its native frame.
async function single(name, file) {
  await sharp(P(file)).webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`)
}

const jobs = JSON.parse(fs.readFileSync(process.argv[2] || 'scripts/blog-images.json', 'utf8'))
for (const j of jobs) {
  if (j.type === 'hero') await hero(j.name, j.files)
  else await single(j.name, j.files[0])
  console.log('made', j.name)
}
