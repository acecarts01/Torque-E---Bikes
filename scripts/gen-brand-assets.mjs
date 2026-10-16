// One-off generator for the brand image files (logo, favicons, default social preview).
// Run: node scripts/gen-brand-assets.mjs   (outputs are committed; this is not part of the build)
import fs from 'node:fs'
import sharp from 'sharp'

const ORANGE = '#ff6a1a'
const DARK = '#16181b'
const BOLT = '13 2 3 14 12 14 11 22 21 10 12 10 13 2' // same lightning bolt as the site header icon

const mark = size => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
<rect width="512" height="512" rx="112" fill="${ORANGE}"/>
<polygon transform="translate(88 88) scale(14)" points="${BOLT}" fill="#ffffff"/></svg>`

const png = (svg, w, h) => sharp(Buffer.from(svg)).resize(w, h).png({ compressionLevel: 9 }).toBuffer()

// Logo and app icons
fs.writeFileSync('public/logo.png', await png(mark(512), 512, 512))
fs.writeFileSync('app/icon.png', await png(mark(512), 512, 512))
fs.writeFileSync('app/apple-icon.png', await png(mark(512), 180, 180))

// favicon.ico (an ICO container holding 32px and 48px PNG images)
const imgs = [await png(mark(512), 32, 32), await png(mark(512), 48, 48)]
const sizes = [32, 48]
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(imgs.length, 4)
let offset = 6 + 16 * imgs.length
const entries = imgs.map((b, i) => {
  const e = Buffer.alloc(16)
  e.writeUInt8(sizes[i], 0); e.writeUInt8(sizes[i], 1); e.writeUInt8(0, 2); e.writeUInt8(0, 3)
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(b.length, 8); e.writeUInt32LE(offset, 12)
  offset += b.length
  return e
})
fs.writeFileSync('app/favicon.ico', Buffer.concat([header, ...entries, ...imgs]))

// Default social preview, 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${DARK}"/>
<rect x="0" y="610" width="1200" height="20" fill="${ORANGE}"/>
<g transform="translate(90 150) scale(0.55)">
<rect width="512" height="512" rx="112" fill="${ORANGE}"/>
<polygon transform="translate(88 88) scale(14)" points="${BOLT}" fill="#ffffff"/></g>
<text x="420" y="215" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="92" fill="#ffffff">TORQUE</text>
<text x="420" y="315" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="92" fill="${ORANGE}">E-BIKES</text>
<text x="420" y="400" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#d6d3cd">Electric dirt bikes, e-bikes and parts</text>
<text x="420" y="455" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#9a9a94">Shipped Australia-wide from Brisbane</text>
</svg>`
fs.writeFileSync('public/og-default.png', await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer())
console.log('brand assets written')
