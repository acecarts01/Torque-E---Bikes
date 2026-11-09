// Receives a Semrush pull via a top-level navigation GET, saves it, then redirects to a short page.
const http = require('http'), fs = require('fs'), path = require('path')
const dir = 'C:/VERCEL PROJECTS/Aussie Bikes/Torque-E---Bikes/docs/semrush-raw'
http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x')
  if (u.pathname === '/g') {
    const n = (u.searchParams.get('n') || 'x').replace(/[^a-z0-9._-]/gi, '_')
    const d = u.searchParams.get('d') || ''
    fs.writeFileSync(path.join(dir, n + '.txt'), d)
    console.log('saved', n, d.length, new Date().toISOString())
    res.statusCode = 302
    res.setHeader('Location', 'http://localhost:3999/ok')
    res.end()
    return
  }
  res.end('ok')
}).listen(3999, () => console.log('listening'))
