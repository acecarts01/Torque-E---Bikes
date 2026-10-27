import { NextRequest } from 'next/server'
import { isAdmin } from '@/src/lib/adminAuth'
import { listRecords, isStoreConfigured } from '@/src/lib/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  if (!isStoreConfigured()) return Response.json({ ok: false, message: 'Storage is not connected.' }, { status: 503 })
  try {
    const [orders, enquiries, quotes, documents] = await Promise.all([listRecords('order'), listRecords('enquiry'), listRecords('quote'), listRecords('document')])
    return Response.json({ ok: true, orders, enquiries, quotes, documents })
  } catch (e: any) {
    return Response.json({ ok: false, message: e?.message || 'Could not load data.' }, { status: 500 })
  }
}
