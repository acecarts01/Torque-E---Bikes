// middleware.ts
// Markdown negotiation for AI agents: a request with "Accept: text/markdown" (preferred over HTML) for a public
// page is served from /api/md/, which returns the page as Markdown. Browsers are never affected.
import { NextResponse, type NextRequest } from 'next/server'

export const config = {
  matcher: [
    // Skip API routes, Next internals, static files and well-known/agent files
    '/((?!api|_next/static|_next/image|favicon.ico|images|js|fonts|products|\\.well-known).*)',
  ],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accept = request.headers.get('accept') || ''

  if (prefersMarkdownOverHtml(accept) && eligiblePath(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/api/md/'
    const headers = new Headers(request.headers)
    headers.set('x-md-path', pathname)
    return NextResponse.rewrite(url, { request: { headers } })
  }

  return NextResponse.next()
}

function prefersMarkdownOverHtml(accept: string) {
  let mdQ = -1, htmlQ = -1
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';').map(s => s.trim())
    let q = 1
    for (const p of params) {
      const m = /^q=([\d.]+)$/.exec(p)
      if (m) q = parseFloat(m[1])
    }
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q)
    if (type === 'text/html') htmlQ = Math.max(htmlQ, q)
  }
  return mdQ > -1 && mdQ > htmlQ
}

function eligiblePath(pathname: string) {
  if (/^\/(admin|checkout|order)(\/|$)/.test(pathname)) return false
  return pathname.endsWith('/') || !pathname.includes('.')
}
