import { NextRequest } from 'next/server'
import { isAdmin } from '@/src/lib/adminAuth'
import { updateRecord } from '@/src/lib/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const STATUSES = ['new', 'quoted', 'awaiting-payment', 'paid', 'shipped', 'completed', 'cancelled']

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  const { kind, id, status } = await req.json().catch(() => ({}))
  if ((kind !== 'order' && kind !== 'enquiry' && kind !== 'quote') || !id || !STATUSES.includes(status)) return Response.json({ ok: false, message: 'Bad request.' }, { status: 400 })
  const next = await updateRecord(kind, String(id), { status, updatedAt: new Date().toISOString() })
  return next ? Response.json({ ok: true, record: next }) : Response.json({ ok: false, message: 'Not found.' }, { status: 404 })
}
