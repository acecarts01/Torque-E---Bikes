import { NextRequest } from 'next/server'
import { randomBytes } from 'crypto'
import { isAdmin } from '@/src/lib/adminAuth'
import { getRecord, updateRecord } from '@/src/lib/store'
import { sendMail } from '@/src/lib/mailer'
import { paymentDetailsEmail, replyEmail } from '@/src/lib/emailTemplates'
import { parsePaymentDetail, findMethod } from '@/src/lib/order'
import { CONTACT } from '@/src/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// POST { kind, id, type: 'payment' | 'reply', ... }
//  payment: { methodId, details, note? }   order only. Parses the pasted details into fields and sends the HTML payment email.
//  reply:   { subject?, message }          orders and enquiries. Sends a branded HTML reply.
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  const body = await req.json().catch(() => ({}))
  const { kind, id, type } = body
  if ((kind !== 'order' && kind !== 'enquiry') || !id) return Response.json({ ok: false, message: 'Bad request.' }, { status: 400 })

  const rec: any = await getRecord(kind, String(id))
  if (!rec) return Response.json({ ok: false, message: 'Not found.' }, { status: 404 })

  const now = new Date().toISOString()
  let subject: string
  let html: string
  const patch: Record<string, unknown> = { updatedAt: now }
  const logEntry: Record<string, unknown> = { at: now }

  if (type === 'payment') {
    if (kind !== 'order') return Response.json({ ok: false, message: 'Payment details only apply to orders.' }, { status: 400 })
    const methodId = findMethod(String(body.methodId)) ? String(body.methodId) : rec.paymentMethod
    const fields = parsePaymentDetail(String(body.details || '').slice(0, 4000))
    if (!fields.length) return Response.json({ ok: false, message: 'Paste the payment details first.' }, { status: 400 })
    const note = String(body.note || '').trim().slice(0, 2000)
    const token: string = rec.token || randomBytes(12).toString('hex')
    const mail = paymentDetailsEmail({ id: rec.id, name: rec.name, amount: rec.total, methodId, fields, note, token })
    patch.token = token
    subject = mail.subject
    html = mail.html
    patch.paymentDetails = { methodId, fields, sentAt: now }
    if (['new', 'awaiting-payment'].includes(rec.status)) patch.status = 'awaiting-payment'
    logEntry.subject = subject
    logEntry.message = `Payment details (${methodId}):\n` + fields.map(f => `${f.label}: ${f.value}`).join('\n') + (note ? `\n\n${note}` : '')
  } else {
    const message = String(body.message || '').trim().slice(0, 8000)
    if (!message) return Response.json({ ok: false, message: 'Write a message first.' }, { status: 400 })
    subject = String(body.subject || '').trim().slice(0, 200) || `Re: ${rec.id} - Torque E-Bikes`
    html = replyEmail({ id: rec.id, name: rec.name, message }).html
    if (kind === 'enquiry' && rec.status === 'new') patch.status = 'completed'
    logEntry.subject = subject
    logEntry.message = message
  }

  const sent = await sendMail({ to: rec.email, replyTo: CONTACT.email, subject, html })
  if (!sent.sent) return Response.json({ ok: false, message: `Email failed: ${sent.error}` }, { status: 502 })

  patch.replies = [...(rec.replies || []), logEntry]
  const next = await updateRecord(kind, String(id), patch)
  return Response.json({ ok: true, record: next })
}
