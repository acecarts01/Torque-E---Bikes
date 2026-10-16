// src/lib/adminAuth.ts
// Passcode login for /admin/. Signed, httpOnly session cookie (HMAC-SHA256 via Web Crypto). Server only.
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export const COOKIE = 'tq_admin'
const TTL_SECONDS = 60 * 60 * 8

const enc = new TextEncoder()
const b64url = (buf: ArrayBuffer) =>
  Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

async function hmac(data: string) {
  const secret = process.env.SESSION_SECRET || ''
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  return b64url(await crypto.subtle.sign('HMAC', key, enc.encode(data)))
}

export const isAuthConfigured = () => Boolean(process.env.ADMIN_PASSCODE && process.env.SESSION_SECRET)

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function checkPasscode(input: string) {
  const expected = process.env.ADMIN_PASSCODE || ''
  if (!expected) return false
  // Compare hashes so length differences leak nothing.
  const [a, b] = await Promise.all([hmac('pc:' + input), hmac('pc:' + expected)])
  return safeEqual(a, b)
}

export async function createSessionToken() {
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS
  const payload = String(exp)
  return `${payload}.${await hmac(payload)}`
}

async function verify(token: string | undefined) {
  if (!token || !isAuthConfigured()) return false
  const [payload, sig] = token.split('.')
  if (!payload || !sig) return false
  if (!safeEqual(sig, await hmac(payload))) return false
  return Number(payload) > Math.floor(Date.now() / 1000)
}

export async function isAdmin(req?: NextRequest) {
  const token = req ? req.cookies.get(COOKIE)?.value : (await cookies()).get(COOKIE)?.value
  return verify(token)
}

export const sessionCookie = (value: string, maxAge = TTL_SECONDS) =>
  `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`
