import data from '@/src/config/wellknown.generated.json'

export const dynamic = 'force-static'
export function generateStaticParams() {
  return Object.keys(data).map(name => ({ name }))
}

export async function GET(_req: Request, ctx: { params: Promise<{ name: string }> }) {
  const { name } = await ctx.params
  const body = (data as Record<string, string>)[name]
  if (!body) return new Response('Not found', { status: 404 })
  const type = name === 'api-catalog' ? 'application/linkset+json' : 'application/json'
  return new Response(body, { headers: { 'Content-Type': type + '; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=3600' } })
}
