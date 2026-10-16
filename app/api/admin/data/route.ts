import { NextRequest } from 'next/server'
import { isAdmin } from '@/src/lib/adminAuth'
import { listRecords, isStoreConfigured } from '@/src/lib/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  if (!isStoreConfigured()) return Response.json({ ok: false, message: 'Storage is not connected.' }, { status: 503 })
  try {
    const [orders, enquiries] = await Promise.all([listRecords('order'), listRecords('enquiry')])
    return Response.json({ ok: true, orders, enquiries })
  } catch (e: any) {
    return Response.json({ ok: false, message: e?.message || 'Could not load data.' }, { status: 500 })
  }
}
