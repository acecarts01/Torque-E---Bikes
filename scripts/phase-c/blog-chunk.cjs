// Phase C: one Semrush pull for all blog topics that still need tags. Writes docs/phase-c/blog-chunk-N.js (paste into a Keyword Magic tab);
// results are saved as docs/semrush-raw/phaseC-blog-cN.txt. Usage: node scripts/phase-c/blog-chunk.cjs <N>
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..')
const SEEDS = ["ebike conversion kit","talaria x3","talaria mx4","best electric bikes","electric mountain bike","electric motorbike","e moto","folding electric bike","legal electric bike","street legal electric bike","electric cargo bike","fat tyre electric bike","bike lights","what is an ebike","ebike grips","bike pedals","ebike brands","kids electric dirt bike","2000w ebike","bone conduction headphones","bike panniers","bike chain lock","1000w ebike","hybrid ebike","aventon ebike","electric road bike","electric bikes for sale","ebike sale","ebike accessories","electric bike australia","electric bike price","top rated electric bike","bicycle handlebar controls","e bike throttle","bike lamp","electric dirt bike for kids"]
const n = +process.argv[2] || 1, per = 18
const qs = SEEDS.slice((n - 1) * per, n * per)
if (!qs.length) { console.log('no seeds for chunk', n); process.exit(0) }
let code = fs.readFileSync(path.join(ROOT, 'docs/phase-c/next-chunk.js'), 'utf8')
code = code.replace(/window\.__run\(\[.*?\]\)\.then\(\(\) => window\.__send\("[^"]*"\)\); 'started[^']*'/, () => `window.__run(${JSON.stringify(qs)}).then(() => window.__send("phaseC-blog-c${n}")); 'started phaseC-blog-c${n} with ${qs.length} queries'`)
fs.writeFileSync(path.join(ROOT, `docs/phase-c/blog-chunk-${n}.js`), code)
console.log('chunk', n, qs.length, 'queries ->', `docs/phase-c/blog-chunk-${n}.js`, '| total seeds', SEEDS.length)
