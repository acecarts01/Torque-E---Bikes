// src/lib/emailDocuments.ts
// Emails for quote requests (from product pages) and for the quotes / invoices the owner sends from /admin/invoice/.
// Same light shell and table rules as emailTemplates.ts (explicit bgcolor on every table and td, inline CSS only).
import { SITE, CONTACT } from '@/src/config/site'
import { money, paymentMethodParts } from '@/src/lib/order'
import { DOC_LABEL, longDate, type DocItem, type Address, type DocType } from '@/src/lib/quote'
import { C, ACCENT, table, td, shell, itemsTable, mono, esc, nl2br, field, divider, callout, button, siteUrl } from '@/src/lib/emailTemplates'

export const invoiceBuilderUrl = (param: 'quote' | 'order' | 'doc', id: string) => `${siteUrl()}/admin/invoice/?${param}=${encodeURIComponent(id)}`

export type QuoteReq = {
  id: string; docType: DocType; name: string; email: string; phone: string; business?: string; abn?: string
  address?: Partial<Address>; notes?: string; items: { name: string; qty: number; unit: number; line: number }[]; subtotal: number; createdAt: string
}

export const addressLine = (a?: Partial<Address>) =>
  a && a.street ? `${a.street}, ${a.suburb || ''} ${a.state || ''} ${a.postcode || ''}`.replace(/\s+/g, ' ').trim() : ''

const reqItems = (items: QuoteReq['items']) => itemsTable(items.map(i => ({ name: i.name, qty: i.qty, line: i.line })))
const subtotalRow = (n: number) =>
  table(`<tr>${td('Goods subtotal', C.card, `padding:4px 10px;font-size:14px;color:${C.soft};`)}${td(money(n), C.card, 'padding:4px 10px;font-size:14px;text-align:right;')}</tr>`, C.card, 'margin:4px 0 12px;')

/** To the owner when a customer asks for a quote or invoice. Everything the builder needs is stored, so one click opens it filled in. */
export function quoteRequestNotificationEmail(q: QuoteReq) {
  const kind = DOC_LABEL[q.docType]
  const html = shell({
    eyebrow: `${kind} requested`, title: `${q.id} · ${q.name}`, meta: q.items.map(i => `${i.qty} x ${i.name}`).join(', ').slice(0, 140),
    body:
      callout(`<b>Action needed:</b> ${esc(q.name)} asked for a ${esc(kind.toLowerCase())}. One click opens the builder with their details and products already filled in. Add the payment details and send.`) +
      button(invoiceBuilderUrl('quote', q.id), `Build the ${kind.toLowerCase()}`) +
      divider +
      field('Customer', esc(q.name)) +
      field('Email', `<a href="mailto:${esc(q.email)}" style="color:${C.ink};">${esc(q.email)}</a>`) +
      field('Phone', esc(q.phone)) +
      (q.business ? field('Business', esc(q.business) + (q.abn ? ` (ABN ${esc(q.abn)})` : '')) : '') +
      (addressLine(q.address) ? field('Deliver to', esc(addressLine(q.address))) : '') +
      divider + reqItems(q.items) + subtotalRow(q.subtotal) +
      (q.notes ? field('Customer notes', nl2br(q.notes)) : '') +
      `<div style="font-size:12px;color:${C.faint};">Requested ${esc(new Date(q.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'medium', timeStyle: 'short' }))} AEST</div>`,
  })
  return { subject: `${kind} requested ${q.id} - ${q.name}`, html }
}

/** To the customer straight after they request a quote or invoice. */
export function quoteAckEmail(q: QuoteReq) {
  const kind = DOC_LABEL[q.docType].toLowerCase()
  const html = shell({
    eyebrow: `${DOC_LABEL[q.docType]} request received`, title: `Thanks, ${q.name.split(' ')[0]}`, meta: `Reference ${q.id}`,
    body:
      `<p style="margin:0 0 14px;">We have your request for a ${esc(kind)}. The Torque Team will email it to you, with the payment details and what happens next, usually within one business day (Mon-Fri, 9am-5pm AEST).</p>` +
      field('Your reference', `<b>${esc(q.id)}</b>`) +
      divider + reqItems(q.items) + subtotalRow(q.subtotal) +
      callout(`Shipping and any discount are added on the ${esc(kind)}. Nothing is charged until you pay.`) +
      `<p style="margin:0;">Questions? Reply to this email, call ${esc(CONTACT.phone)} or WhatsApp ${esc(CONTACT.whatsapp)}.</p>`,
  })
  return { subject: `We received your ${kind} request (${q.id})`, html }
}

export type IssuedDoc = {
  id: string; docType: DocType; issueDate: string; dueDate: string
  client: { name: string; email: string; phone?: string; business?: string; abn?: string; address?: Partial<Address> }
  items: DocItem[]; subtotal: number; shipping: number; discount: number; total: number
  paymentMethodId: string; paymentFields: { label: string; value: string }[]; paymentNote?: string
  afterPayment: string[]; notes?: string
}

const sectionTitle = (t: string, mt = 22) =>
  `<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;color:${ACCENT};margin:${mt}px 0 8px;">${esc(t)}</div>`

/** To the customer: the quote or invoice. Client details, products, totals, payment details and the steps to follow after paying. */
export function documentEmail(d: IssuedDoc) {
  const kind = DOC_LABEL[d.docType]
  const isInvoice = d.docType === 'invoice'
  const { label: methodName, opening, closing } = paymentMethodParts(d.paymentMethodId, d.total, d.id)
  const first = d.client.name.split(' ')[0]
  const small = (t: string) => `<div style="font-size:10px;letter-spacing:1.5px;font-weight:bold;color:${C.soft};">${esc(t)}</div>`

  const party = table(
    `<tr>${td(`${small('BILLED TO')}<div style="font-size:14px;line-height:1.55;color:${C.ink};margin-top:4px;"><b>${esc(d.client.name)}</b>` +
      (d.client.business ? `<br>${esc(d.client.business)}${d.client.abn ? ` &middot; ABN ${esc(d.client.abn)}` : ''}` : '') +
      (addressLine(d.client.address) ? `<br>${esc(addressLine(d.client.address))}` : '') +
      `<br>${esc(d.client.email)}` + (d.client.phone ? `<br>${esc(d.client.phone)}` : '') + '</div>', C.mono, 'padding:14px 16px;width:50%;', 'valign="top"')}` +
    `${td(`${small('FROM')}<div style="font-size:14px;line-height:1.55;color:${C.ink};margin-top:4px;"><b>The Torque Team Pty Ltd</b><br>ABN 27 126 064 668<br>${esc(CONTACT.address)}<br>${esc(CONTACT.phone)}</div>`, C.mono, 'padding:14px 16px;width:50%;', 'valign="top"')}</tr>`,
    C.mono, `border:1px solid ${C.rule};margin:0 0 14px;`)

  const metaCell = (l: string, v: string, w: string, bold = false) =>
    td(`${small(l)}<div style="font-size:15px;${bold ? 'font-weight:bold;' : ''}color:${C.ink};margin-top:3px;">${esc(v)}</div>`, C.card, `padding:6px 0;width:${w};`)
  const meta = table(`<tr>${metaCell(`${kind.toUpperCase()} NUMBER`, d.id, '34%', true)}${metaCell('ISSUED', longDate(d.issueDate), '33%')}${metaCell(isInvoice ? 'PAYMENT DUE' : 'VALID UNTIL', longDate(d.dueDate), '33%')}</tr>`, C.card, 'margin:0 0 10px;')

  const row = (l: string, v: string) => `<tr>${td(l, C.card, `padding:4px 10px;font-size:14px;color:${C.soft};`)}${td(v, C.card, 'padding:4px 10px;font-size:14px;text-align:right;')}</tr>`
  const totals = table(
    row('Subtotal', money(d.subtotal)) + row('Shipping', d.shipping === 0 ? 'Free' : money(d.shipping)) +
    (d.discount ? row(d.paymentMethodId === 'crypto' ? 'Crypto discount' : 'Discount', `-${money(d.discount)}`) : '') +
    `<tr>${td('<b>Total payable (AUD)</b>', C.tint, `padding:10px;font-size:16px;border-top:2px solid ${ACCENT};`)}${td(`<b>${money(d.total)}</b>`, C.tint, `padding:10px;font-size:18px;text-align:right;border-top:2px solid ${ACCENT};`)}</tr>`,
    C.card, 'margin:4px 0 16px;')

  const rows = d.paymentFields.map(f => `<tr>${td(esc(f.label).toUpperCase(), C.mono, `padding:10px 12px;width:38%;font-size:10px;letter-spacing:1px;font-weight:bold;color:${C.soft};border-bottom:1px solid ${C.rule};`, 'valign="top"')}${td(mono(f.value), C.mono, `padding:10px 12px;border-bottom:1px solid ${C.rule};`)}</tr>`).join('')
  const payment = d.paymentFields.length
    ? sectionTitle(`How to pay · ${methodName}`, 18) + `<p style="margin:0 0 10px;">${esc(opening)}</p>` + table(rows, C.mono, `border:1px solid ${C.rule};margin:0 0 10px;`) +
      `<p style="margin:0 0 6px;">${esc(closing)}</p>` + (d.paymentNote ? `<p style="margin:8px 0 0;">${nl2br(d.paymentNote)}</p>` : '')
    : `<p style="margin:14px 0 0;">${isInvoice ? 'Payment details will follow from the Torque Team.' : 'To go ahead, reply to this email and we will send the payment details.'}</p>`

  const list = (tag: 'ul' | 'ol', lines: string[]) =>
    `<${tag} style="margin:0;padding-left:20px;">${lines.map(s => `<li style="margin:0 0 5px;font-size:13px;line-height:1.55;">${esc(s)}</li>`).join('')}</${tag}>`
  const general = d.afterPayment.length ? `<div style="margin:0 0 14px;"><div style="font-size:13px;font-weight:bold;color:${C.ink};margin:0 0 4px;">For your whole order</div>${list('ol', d.afterPayment)}</div>` : ''
  const perProduct = d.items.filter(i => i.instructions?.length)
    .map(i => `<div style="margin:0 0 14px;"><div style="font-size:13px;font-weight:bold;color:${C.ink};margin:0 0 4px;">${esc(i.name)}</div>${list('ul', i.instructions)}</div>`).join('')
  const after = general || perProduct ? sectionTitle('After you have paid') + general + perProduct : ''

  const reply = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${kind} ${d.id}`)}`
  const wa = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(isInvoice ? `Hi ${SITE.name}, I have paid invoice ${d.id}.` : `Hi ${SITE.name}, I would like to go ahead with quote ${d.id}.`)}`

  const html = shell({
    eyebrow: kind, title: `${kind} ${d.id}`, meta: `${money(d.total)} AUD · ${isInvoice ? 'due ' : 'valid until '}${longDate(d.dueDate)}`,
    body:
      `<p style="margin:0 0 14px;">Hi ${esc(first)},</p>` +
      `<p style="margin:0 0 14px;">${isInvoice ? `Your invoice from The Torque Team is below. It is not paid yet. Please pay by ${esc(longDate(d.dueDate))} using the details shown.` : `Your quote from The Torque Team is below. It is valid until ${esc(longDate(d.dueDate))}. Stock is not held until payment is received.`}</p>` +
      meta + party + itemsTable(d.items.map(i => ({ name: i.name, qty: i.qty, line: i.line }))) + totals +
      (d.notes ? field('Notes', nl2br(d.notes)) : '') + payment + after +
      divider + `<p style="margin:0 0 6px;">${isInvoice ? 'Once you have paid, let us know:' : 'Ready to go ahead?'}</p>` +
      button(wa, isInvoice ? "I've paid - confirm on WhatsApp" : 'Go ahead on WhatsApp') + button(reply, 'Reply to us', false) +
      `<p style="margin:14px 0 0;font-size:12px;color:${C.soft};">Returns are accepted within 14 days of delivery for unused items in original packaging; a 20% restocking fee applies to large items. Full shipping and returns policy: ${esc(siteUrl())}/shipping-returns/</p>`,
  })
  return { subject: `${kind} ${d.id} from Torque E-Bikes - ${money(d.total)}`, html }
}
