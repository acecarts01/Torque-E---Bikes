// src/lib/enquiry.ts
// Shared handler for the contact and wholesale forms: validate, store, email the owner, email the customer.
import { randomBytes } from 'crypto'
import { saveRecord, isStoreConfigured } from '@/src/lib/store'
import { sendMail, shell, esc, nl2br, detailRow, detailTable, ownerAddress } from '@/src/lib/mailer'
import { CONTACT } from '@/src/config/site'

export const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/
export const clean = (v: unknown, max: number) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max)
export const makeRef = (prefix: string) => `${prefix}-${randomBytes(5).toString('hex').toUpperCase().slice(0, 8)}`

export type EnquiryKind = 'contact' | 'wholesale'

export async function handleEnquiry(req: Request, kind: EnquiryKind) {
  let body: any
  try { body = await req.json() } catch { return Response.json({ success: false, message: 'Invalid request.' }, { status: 400 }) }

  // Honeypot: bots fill the hidden field. Pretend success, store nothing.
  if (clean(body.website, 200)) return Response.json({ success: true, reference: makeRef('TQE') })

  const name = clean(body.name, 120)
  const email = clean(body.email, 160)
  const message = clean(body.message, 5000)
  const phone = clean(body.phone, 40)
  const type = clean(body.type, 80)
  const business = clean(body.business_name, 160)
  const abn = clean(body.abn_acn, 40)

  if (!name || !EMAIL_RE.test(email) || !message || (kind === 'wholesale' && (!business || !abn))) {
    return Response.json({ success: false, message: 'Please complete every required field with a valid email address.' }, { status: 400 })
  }

  const reference = makeRef(kind === 'wholesale' ? 'TQW' : 'TQE')
  const record = {
    id: reference, kind, status: 'new', createdAt: new Date().toISOString(),
    name, email, phone, type, business_name: business, abn_acn: abn, message,
  }

  let stored = false
  if (isStoreConfigured()) {
    try { await saveRecord('enquiry', reference, record); stored = true } catch (e) { console.error('store failed', e) }
  }

  const title = kind === 'wholesale' ? 'New wholesale application' : 'New website enquiry'
  const rows =
    detailRow('Reference', esc(reference)) + detailRow('Name', esc(name)) +
    detailRow('Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`) +
    (phone ? detailRow('Phone', esc(phone)) : '') +
    (type ? detailRow('Topic', esc(type)) : '') +
    (kind === 'wholesale' ? detailRow('Business', esc(business)) + detailRow('ABN/ACN', esc(abn)) : '')

  const owner = await sendMail({
    to: ownerAddress(),
    replyTo: email,
    subject: `${title} ${reference} - ${name}`,
    html: shell(title, detailTable(rows) + `<p style="margin:0 0 6px;color:#6b7280;">Message</p><p style="margin:0;">${nl2br(message)}</p>`),
  })

  const ack = await sendMail({
    to: email,
    replyTo: CONTACT.email,
    subject: `We received your ${kind === 'wholesale' ? 'wholesale application' : 'enquiry'} (${reference})`,
    html: shell('Thanks, we have your message',
      `<p>Hi ${esc(name)},</p>
       <p>Thanks for contacting Torque E-Bikes. The Torque Team will reply from this address, usually within one business day (Mon-Fri, 9am-5pm AEST).</p>
       ${detailTable(detailRow('Your reference', esc(reference)))}
       <p style="margin:0 0 6px;color:#6b7280;">Your message</p><p style="margin:0 0 16px;">${nl2br(message)}</p>
       <p>If it is urgent, call ${esc(CONTACT.phone)} or WhatsApp ${esc(CONTACT.whatsapp)}.</p>`),
  })

  if (!stored && !owner.sent) {
    return Response.json({ success: false, message: `We could not send your message. Please email ${CONTACT.email} or call ${CONTACT.phone}.` }, { status: 502 })
  }
  return Response.json({ success: true, reference, acknowledged: ack.sent })
}
