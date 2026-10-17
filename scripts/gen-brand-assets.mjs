// One-off generator for the brand image files (logo, favicons, default social preview).
// Run: node scripts/gen-brand-assets.mjs   (outputs are committed; this is not part of the build)
import fs from 'node:fs'
import sharp from 'sharp'

const ORANGE = '#ff6a1a'
const DARK = '#16181b'
// Option B "Torque Dial": gauge ring, bold T and power bolt
const BADGE = `<circle cx="256" cy="256" r="196" fill="none" stroke="${ORANGE}" stroke-width="44" stroke-linecap="round" stroke-dasharray="1010 1232" transform="rotate(128 256 256)"/>
<polygon points="142,166 370,166 370,222 284,222 284,372 228,372 228,222 142,222" fill="#ffffff"/>
<polygon points="262,188 226,262 258,262 246,330 304,246 270,246 282,188" fill="${ORANGE}" transform="translate(-2 6)"/>`

// round badge (transparent corners): logo, favicon, app icon
const mark = size => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="${DARK}"/>${BADGE}</svg>`
// square version for the Apple touch icon (iOS fills transparent corners with black and rounds them itself)
const squareMark = size => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512"><rect width="512" height="512" fill="${DARK}"/><g transform="translate(46 46) scale(0.82)">${BADGE}</g></svg>`

const png = (svg, w, h) => sharp(Buffer.from(svg)).resize(w, h).png({ compressionLevel: 9 }).toBuffer()

// Logo and app icons
fs.writeFileSync('public/logo.png', await png(mark(512), 512, 512))
fs.writeFileSync('app/icon.png', await png(mark(512), 512, 512))
fs.writeFileSync('app/apple-icon.png', await png(squareMark(512), 180, 180))

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
<g transform="translate(70 125) scale(0.72)"><circle cx="256" cy="256" r="256" fill="#0e0f11"/>${BADGE}</g>
<text x="470" y="250" font-family="Arial Black, Arial, Helvetica, sans-serif" font-style="italic" font-weight="900" font-size="104" fill="#ffffff">TORQUE</text>
<text x="470" y="335" font-family="Arial Black, Arial, Helvetica, sans-serif" font-style="italic" font-weight="900" font-size="58" letter-spacing="4" fill="${ORANGE}">E-BIKES</text>
<rect x="790" y="312" width="70" height="6" fill="${ORANGE}"/>
<text x="880" y="332" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="26" letter-spacing="6" fill="#9a9a94">AUSTRALIA</text>
<text x="470" y="425" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#d6d3cd">Electric dirt bikes, e-bikes and parts</text>
<text x="470" y="480" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#9a9a94">Shipped Australia-wide from Brisbane</text>
</svg>`
fs.writeFileSync('public/og-default.png', await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer())
console.log('brand assets written')
