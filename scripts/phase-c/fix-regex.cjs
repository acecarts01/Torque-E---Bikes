// One-off repair: allocate.cjs had regex backslashes eaten by the shell (\b became a backspace, \w became w, \1 became ^A).
const fs = require('fs')
const f = 'scripts/phase-c/allocate.cjs'
let s = fs.readFileSync(f, 'utf8')
const lines = s.split('\n')
const out = lines.map(l => {
  if (l.includes('(w+ w+)')) return String.raw`    if (/\b(\w+ \w+) \1\b/.test(kw) || /\b(\w+) \1\b/.test(kw)) return false`
  if (l.includes('scooters?|trailers?')) return String.raw`    if ((/\b(scooters?|trailers?|locks?|helmets?|tricycles?|trikes?)\b/.test(kw)) && !/(scooter|trailer|lock|padlock|helmet|trike|tricycle)/.test(slug)) return false`
  if (l.includes('const DENY')) return String.raw`    const DENY = /\b(knee|door|toys?|petrol|gas|games?|mini|bmx|mouse|meaning|definition|jobs?|hire|rental|repairs?|manual|pdf|symptoms?|haircut|wheelchair|mobility|skateboard|hoverboard)\b/`
  if (l.includes('const walk = d =>')) return l.replace('/.(js|ts)$/', String.raw`/\.(js|ts)$/`)
  return l
})
s = out.join('\n')
const bad = (s.match(/[\x00-\x08]/g) || []).length
fs.writeFileSync(f, s)
console.log('control chars left:', bad)
