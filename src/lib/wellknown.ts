import data from '@/src/config/wellknown.generated.json'

// Serves one extensionless /.well-known file with a JSON content type (Vercel would send static files as octet-stream).
export function wellKnown(name: string) {
  const body = (data as Record<string, string>)[name]
  if (!body) return new Response('Not found', { status: 404 })
  const type = name === 'api-catalog' ? 'application/linkset+json' : 'application/json'
  return new Response(body, { headers: { 'Content-Type': type + '; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=3600' } })
}
