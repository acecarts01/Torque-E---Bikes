// Markdown version of any public page, for AI agents. The middleware rewrites requests that send
// "Accept: text/markdown" to this route; browsers keep getting HTML.
import { NextRequest } from 'next/server'
import TurndownService from 'turndown'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const text = (body: string, status: number) =>
  new Response(body, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })

const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

export async function GET(req: NextRequest) {
  const path = req.headers.get('x-md-path') || req.nextUrl.searchParams.get('path') || '/'
  // Same-site public pages only
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('..') || path.length > 300 || /^\/(api|_next|admin|checkout|order)(\/|$)/.test(path)) {
    return text('Not available as Markdown.', 400)
  }

  const res = await fetch(new URL(path, req.nextUrl.origin), { headers: { accept: 'text/html', 'user-agent': 'TorqueMarkdown/1.0' }, cache: 'no-store' })
  if (!res.ok) return text('Page not found.', res.status)
  const html = await res.text()

  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim()
  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || [])[1] || new URL(path, req.nextUrl.origin).toString()
  const body0 = (html.match(/<body[\s\S]*<\/body>/i) || [html])[0].replace(/<(header|nav|footer|aside)[\s\S]*?<\/\1>/gi, '')
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [body0])[0]
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<button[\s\S]*?<\/button>/gi, '')

  const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', emDelimiter: '*' })
  td.remove(['script', 'style', 'noscript', 'button', 'form', 'input', 'select', 'textarea'])
  const body = td.turndown(main).replace(/\n{3,}/g, '\n\n').trim()
  const md = `---\ntitle: ${JSON.stringify(title)}\nurl: ${canonical}\n---\n\n${body}\n`

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(Math.ceil(md.length / 4)),
      Vary: 'Accept',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
