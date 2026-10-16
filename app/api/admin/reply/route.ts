import { NextRequest } from 'next/server'
import { isAdmin } from '@/src/lib/adminAuth'
import { getRecord, updateRecord } from '@/src/lib/store'
import { sendMail, shell, nl2br, esc } from '@/src/lib/mailer'
import { CONTACT } from '@/src/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  const { kind, id, subject, message, markAwaitingPayment } = await req.json().catch(() => ({}))
  if ((kind !== 'order' && kind !== 'enquiry') || !id || !String(message || '').trim()) return Response.json({ ok: false, message: 'Write a message first.' }, { status: 400 })

  const rec: any = await getRecord(kind, String(id))
  if (!rec) return Response.json({ ok: false, message: 'Not found.' }, { status: 404 })

  const sent = await sendMail({
    to: rec.email,
    replyTo: CONTACT.email,
    subject: String(subject || '').trim().slice(0, 200) || `Re: ${rec.id} - Torque E-Bikes`,
    html: shell(`Re: ${rec.id}`, `<p>Hi ${esc(rec.name)},</p><p>${nl2br(String(message).slice(0, 8000))}</p><p style="margin-top:20px;">Kind regards,<br>The Torque Team</p>`),
  })
  if (!sent.sent) return Response.json({ ok: false, message: `Email failed: ${sent.error}` }, { status: 502 })

  const log = [...(rec.replies || []), { at: new Date().toISOString(), subject: subject || '', message: String(message).slice(0, 8000) }]
  const patch: Record<string, unknown> = { replies: log, updatedAt: new Date().toISOString() }
  if (kind === 'order' && markAwaitingPayment && rec.status === 'new') patch.status = 'awaiting-payment'
  if (kind === 'enquiry' && rec.status === 'new') patch.status = 'completed'
  const next = await updateRecord(kind, String(id), patch)
  return Response.json({ ok: true, record: next })
}
