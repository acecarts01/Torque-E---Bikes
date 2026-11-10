// Serves docs/phase-c on http://localhost:3998 so the mapping page can be reviewed in the browser pane.
const http = require('http'), fs = require('fs'), path = require('path')
const dir = path.resolve(__dirname, '../../docs/phase-c')
http.createServer((req, res) => {
  const f = path.join(dir, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+$/, '/mapping.html'))
  if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('not found') }
  res.writeHead(200, { 'Content-Type': /\.html$/.test(f) ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8' }); fs.createReadStream(f).pipe(res)
}).listen(3998, () => console.log('mapping on http://localhost:3998/'))
