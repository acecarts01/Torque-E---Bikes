import { sessionCookie } from '@/src/lib/adminAuth'

export const dynamic = 'force-dynamic'

export async function POST() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': sessionCookie('', 0) },
  })
}
