import { NextRequest } from 'next/server'
import { checkPasscode, createSessionToken, sessionCookie, isAuthConfigured } from '@/src/lib/adminAuth'
import { hit, isStoreConfigured } from '@/src/lib/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  if (!isAuthConfigured()) return Response.json({ ok: false, message: 'Admin is not configured.' }, { status: 503 })

  // Rate limit: 8 attempts per 15 minutes per IP (when the store is available).
  if (isStoreConfigured()) {
    const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    try {
      if ((await hit(`login:${ip}`, 900)) > 8) return Response.json({ ok: false, message: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 })
    } catch { /* fail open on store errors */ }
  }

  const { passcode } = await req.json().catch(() => ({ passcode: '' }))
  if (!(await checkPasscode(String(passcode || '')))) return Response.json({ ok: false, message: 'Incorrect passcode.' }, { status: 401 })

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': sessionCookie(await createSessionToken()) },
  })
}
