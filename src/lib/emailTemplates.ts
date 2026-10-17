// src/lib/emailTemplates.ts
// Branded HTML emails. LIGHT shell: white card, dark brand header band, brand colour as an accent only.
// Every <table> and <td> carries an explicit bgcolor attribute AND a background-color style so Outlook, Apple Mail,
// Zoho and Gmail cannot fall back to their own defaults. Inline CSS only.
import { SITE, CONTACT, REPLY, SHOP } from '@/src/config/site'
import { money, paymentMethodParts, paymentTermsLines } from '@/src/lib/order'

const C = { page: '#F2F4F0', card: '#FFFFFF', ink: '#1B2320', soft: '#6A746E', faint: '#9AA39D', rule: '#E2E5DF', tint: '#FFF4EC', mono: '#F6F7F5' }
const ACCENT = REPLY.brand.primary
const HEADER = REPLY.brand.headerDark
const FONT = "font-family:Arial,Helvetica,sans-serif;"

export const esc = (s: unknown) =>
  String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
export const nl2br = (s: string) => esc(s).replace(/\r?\n/g, '<br>')

export const siteUrl = () => `https://${SITE.domain}`
export const adminUrl = (kind: 'order' | 'enquiry', id: string) => `${siteUrl()}/admin/?${kind}=${encodeURIComponent(id)}`

const table = (inner: string, bg: string, style = '', attrs = 'width="100%"') =>
  `<table role="presentation" ${attrs} cellpadding="0" cellspacing="0" border="0" bgcolor="${bg}" style="background-color:${bg};border-collapse:collapse;${style}">${inner}</table>`
const td = (inner: string, bg: string, style = '', attrs = '') =>
  `<td ${attrs} bgcolor="${bg}" style="background-color:${bg};${FONT}${style}">${inner}</td>`

export const label = (t: string) =>
  `<div style="${FONT}font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:bold;color:${C.soft};margin:0 0 3px;">${esc(t)}</div>`

export const field = (l: string, valueHtml: string, mb = 14) =>
  `<div style="margin:0 0 ${mb}px;">${label(l)}<div style="${FONT}font-size:14px;line-height:1.5;color:${C.ink};">${valueHtml}</div></div>`

export const divider = table(`<tr>${td('', C.rule, 'height:1px;font-size:1px;line-height:1px;', 'height="1"')}</tr>`, C.rule, 'margin:16px 0;')

export const callout = (inner: string) =>
  table(`<tr>${td('', ACCENT, 'width:4px;font-size:1px;', 'width="4"')}${td(inner, C.tint, `padding:14px 16px;font-size:13px;line-height:1.6;color:${C.ink};`)}</tr>`, C.tint, 'margin:16px 0;')

export const button = (href: string, text: string, primary = true) =>
  table(`<tr>${td(`<a href="${esc(href)}" style="${FONT}display:inline-block;padding:13px 24px;font-size:14px;font-weight:bold;text-decoration:none;color:${primary ? '#140800' : '#FFFFFF'};">${esc(text)} &rarr;</a>`,
    primary ? ACCENT : HEADER, 'border-radius:999px;')}</tr>`, C.card, 'margin:6px 0;', 'width="auto"')

function shell({ eyebrow, title, meta, body }: { eyebrow: string; title: string; meta?: string; body: string }) {
  const header = table(
    `<tr>${td(`<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;color:${ACCENT};">${esc(eyebrow)}</div>
      <div style="font-size:22px;font-weight:bold;color:#FFFFFF;margin-top:6px;line-height:1.25;">${esc(title)}</div>
      ${meta ? `<div style="font-size:12px;color:#9AA39D;margin-top:6px;">${esc(meta)}</div>` : ''}`, HEADER, 'padding:22px 28px;')}</tr>`, HEADER)
  const rule = table(`<tr>${td('', ACCENT, 'height:3px;font-size:1px;line-height:3px;', 'height="3"')}</tr>`, ACCENT)
  const content = table(`<tr>${td(body, C.card, 'padding:28px;font-size:14px;line-height:1.6;color:' + C.ink + ';')}</tr>`, C.card)
  const footer = table(`<tr>${td(`The Torque Team Pty Ltd &middot; ABN 27 126 064 668<br>${esc(CONTACT.address)}<br>${esc(CONTACT.phone)} &middot; ${esc(CONTACT.email)} &middot; ${esc(SITE.domain)}`,
    '#F9FAFB', `padding:18px 28px;font-size:12px;line-height:1.6;color:${C.faint};`)}</tr>`, '#F9FAFB')
  const card = table(`<tr><td bgcolor="${C.card}" style="background-color:${C.card};border-radius:12px;overflow:hidden;">${header}${rule}${content}${footer}</td></tr>`, C.card, 'max-width:600px;', 'width="600"')
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>${esc(title)}</title></head>
<body bgcolor="${C.page}" style="margin:0;padding:0;background-color:${C.page};">
${table(`<tr><td align="center" bgcolor="${C.page}" style="background-color:${C.page};padding:24px 12px;">${card}</td></tr>`, C.page)}
</body></html>`
}

type Item = { name: string; qty: number; line: number }
type Order = {
  id: string; name: string; email: string; phone: string; paymentMethod: string; notes?: string
  address: { street: string; suburb: string; state: string; postcode: string }
  items: Item[]; subtotal: number; shipping: number; cryptoDiscount: number; total: number
}

const addressText = (a: Order['address']) => `${a.street}, ${a.suburb} ${a.state} ${a.postcode}`

const itemsTable = (items: Item[]) => table(
  `<tr>${td('ITEM', C.mono, `padding:8px 10px;font-size:10px;letter-spacing:1px;font-weight:bold;color:${C.soft};`)}${td('QTY', C.mono, `padding:8px 10px;font-size:10px;letter-spacing:1px;font-weight:bold;color:${C.soft};text-align:center;`)}${td('AMOUNT', C.mono, `padding:8px 10px;font-size:10px;letter-spacing:1px;font-weight:bold;color:${C.soft};text-align:right;`)}</tr>` +
  items.map(i => `<tr>${td(esc(i.name), C.card, `padding:10px;border-bottom:1px solid ${C.rule};font-size:14px;`)}${td(String(i.qty), C.card, `padding:10px;border-bottom:1px solid ${C.rule};text-align:center;font-size:14px;`)}${td(money(i.line), C.card, `padding:10px;border-bottom:1px solid ${C.rule};text-align:right;font-size:14px;`)}</tr>`).join(''),
  C.card, 'margin:8px 0 4px;')

const totalsTable = (o: Order) => {
  const row = (l: string, v: string, bold = false) =>
    `<tr>${td(l, C.card, `padding:4px 10px;font-size:14px;color:${bold ? C.ink : C.soft};${bold ? 'font-weight:bold;' : ''}`)}${td(v, C.card, `padding:4px 10px;font-size:14px;text-align:right;color:${C.ink};${bold ? 'font-weight:bold;' : ''}`)}</tr>`
  const totalLabel = 'Total payable (AUD)'
  return table(
    row('Subtotal', money(o.subtotal)) + row(o.shipping === 0 ? 'Shipping' : `Shipping (${SHOP.shippingRate}% of order)`, o.shipping === 0 ? 'Free' : money(o.shipping)) +
    (o.cryptoDiscount ? row('Crypto discount', `-${money(o.cryptoDiscount)}`) : '') +
    `<tr>${td(`<b>${totalLabel}</b>`, C.tint, `padding:10px;font-size:16px;border-top:2px solid ${ACCENT};`)}${td(`<b>${money(o.total)}</b>`, C.tint, `padding:10px;font-size:18px;text-align:right;border-top:2px solid ${ACCENT};`)}</tr>`,
    C.card, 'margin:4px 0 16px;')
}

const methodLabel = (id: string) => paymentMethodParts(id, 0, '').label

/** To the owner when an order is placed. */
export function orderNotificationEmail(o: Order & { createdAt: string }) {
  const html = shell({
    eyebrow: 'New order', title: `${o.id} · ${money(o.total)}`, meta: `${o.name} · ${methodLabel(o.paymentMethod)}`,
    body:
      callout(`<b>Action needed:</b> email the customer their ${esc(methodLabel(o.paymentMethod))} payment details. One click opens this order ready to reply.`) +
      button(adminUrl('order', o.id), 'View order in admin') +
      divider +
      field('Customer', esc(o.name)) +
      field('Email', `<a href="mailto:${esc(o.email)}" style="color:${C.ink};">${esc(o.email)}</a>`) +
      field('Phone', esc(o.phone)) +
      field('Deliver to', esc(addressText(o.address))) +
      field('Payment method', esc(methodLabel(o.paymentMethod))) +
      divider + itemsTable(o.items) + totalsTable(o) +
      (o.notes ? field('Customer notes', nl2br(o.notes)) : '') +
      `<div style="font-size:12px;color:${C.faint};">Placed ${esc(new Date(o.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'medium', timeStyle: 'short' }))} AEST</div>`,
  })
  return { subject: `New order ${o.id} - ${money(o.total)} - ${o.name}`, html }
}

/** To the customer straight after checkout. No payment details here: those follow from the team. */
export function orderConfirmationEmail(o: Order, offRoad: boolean) {
  const html = shell({
    eyebrow: 'Order received', title: `Thanks, ${o.name.split(' ')[0]}`, meta: `Order ${o.id}`,
    body:
      `<p style="margin:0 0 14px;">We have your order. <b>It is not paid yet.</b> The Torque Team will email you the payment details for your chosen method (${esc(methodLabel(o.paymentMethod))}) shortly. Please watch for that email.</p>` +
      field('Order reference', `<b>${esc(o.id)}</b>`) + field('Deliver to', esc(addressText(o.address))) +
      divider + itemsTable(o.items) + totalsTable(o) +
      callout(`Please quote <b>${esc(o.id)}</b> as your payment reference. ${esc(REPLY.dispatchLine)}`) +
      (offRoad ? `<p style="margin:0 0 14px;font-size:12px;color:${C.soft};">Reminder: high-powered machines and kits in this order are for off-road, private property use only and are not for public roads or paths.</p>` : '') +
      `<p style="margin:0;">Questions? Reply to this email, call ${esc(CONTACT.phone)} or WhatsApp ${esc(CONTACT.whatsapp)}.</p>`,
  })
  return { subject: `Order ${o.id} received - Torque E-Bikes`, html }
}

type Enquiry = { id: string; kind: 'contact' | 'wholesale'; name: string; email: string; phone?: string; type?: string; business_name?: string; abn_acn?: string; message: string }

/** To the owner when a contact or wholesale form is submitted. */
export function enquiryNotificationEmail(e: Enquiry) {
  const wholesale = e.kind === 'wholesale'
  const html = shell({
    eyebrow: wholesale ? 'New wholesale application' : 'New enquiry', title: e.id, meta: `${e.name}${e.type ? ' · ' + e.type : ''}`,
    body:
      callout(`<b>Action needed:</b> reply to ${esc(e.name)}. One click opens this ${wholesale ? 'application' : 'enquiry'} with the reply box ready.`) +
      button(adminUrl('enquiry', e.id), `View ${wholesale ? 'application' : 'enquiry'} in admin`) +
      divider +
      field('Name', esc(e.name)) +
      field('Email', `<a href="mailto:${esc(e.email)}" style="color:${C.ink};">${esc(e.email)}</a>`) +
      (e.phone ? field('Phone', esc(e.phone)) : '') +
      (e.type ? field('Topic', esc(e.type)) : '') +
      (wholesale ? field('Business', esc(e.business_name)) + field('ABN / ACN', esc(e.abn_acn)) : '') +
      divider + field('Message', nl2br(e.message), 0),
  })
  return { subject: `${wholesale ? 'New wholesale application' : 'New enquiry'} ${e.id} - ${e.name}`, html }
}

/** To the customer straight after they send a contact or wholesale form. */
export function enquiryAckEmail(e: Enquiry) {
  const html = shell({
    eyebrow: 'Message received', title: `Thanks, ${e.name.split(' ')[0]}`, meta: `Reference ${e.id}`,
    body:
      `<p style="margin:0 0 14px;">Thanks for contacting Torque E-Bikes. The Torque Team will reply from this address, usually within one business day (Mon-Fri, 9am-5pm AEST).</p>` +
      field('Your reference', `<b>${esc(e.id)}</b>`) + field('Your message', nl2br(e.message)) +
      `<p style="margin:0;">If it is urgent, call ${esc(CONTACT.phone)} or WhatsApp ${esc(CONTACT.whatsapp)}.</p>`,
  })
  return { subject: `We received your ${e.kind === 'wholesale' ? 'wholesale application' : 'enquiry'} (${e.id})`, html }
}

const mono = (v: string) => `<span style="font-family:'Courier New',Courier,monospace;font-size:14px;color:${C.ink};word-break:break-all;">${esc(v)}</span>`

/** To the customer when the owner sends payment details from admin. */
export function paymentDetailsEmail(p: { id: string; name: string; amount: number; methodId: string; fields: { label: string; value: string }[]; note?: string; token: string }) {
  const copyUrl = `${siteUrl()}/order/payment-details/?id=${encodeURIComponent(p.id)}&t=${encodeURIComponent(p.token)}`
  const { label: methodName, opening, closing } = paymentMethodParts(p.methodId, p.amount, p.id)
  const rows = p.fields.map(f => `<tr>${td(esc(f.label).toUpperCase(), C.mono, `padding:10px 12px;width:38%;font-size:10px;letter-spacing:1px;font-weight:bold;color:${C.soft};border-bottom:1px solid ${C.rule};`, 'valign="top"')}${td(mono(f.value), C.mono, `padding:10px 12px;border-bottom:1px solid ${C.rule};`)}</tr>`).join('')
  const reply = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Payment for order ${p.id}`)}`
  const wa = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${SITE.name}, I have paid for order ${p.id}.`)}`
  const html = shell({
    eyebrow: 'Payment details', title: `Order ${p.id}`, meta: methodName,
    body:
      `<p style="margin:0 0 12px;">Hi ${esc(p.name.split(' ')[0])},</p>` +
      table(`<tr>${td(`<div style="font-size:10px;letter-spacing:1.5px;font-weight:bold;color:${C.soft};">AMOUNT DUE (AUD)</div><div style="font-size:30px;font-weight:bold;color:${C.ink};margin-top:4px;">${money(p.amount)}</div>`, C.tint, `padding:16px 18px;border-left:4px solid ${ACCENT};`)}</tr>`, C.tint, 'margin:6px 0 16px;') +
      `<p style="margin:0 0 12px;">${esc(opening)}</p>` +
      table(rows, C.mono, `border:1px solid ${C.rule};margin:0 0 14px;`) +
      button(copyUrl, 'View & copy payment details') +
      `<p style="margin:0 0 6px;">${esc(closing)}</p>` +
      (p.note ? `<p style="margin:10px 0 0;">${nl2br(p.note)}</p>` : '') +
      callout(`<ul style="margin:0;padding-left:18px;">${paymentTermsLines(p.id).map(l => `<li style="margin:0 0 4px;">${esc(l)}</li>`).join('')}</ul>`) +
      `<p style="margin:12px 0 6px;">Once you have paid, let us know:</p>` +
      button(wa, "I've paid - confirm on WhatsApp") + button(reply, 'Reply to us', false),
  })
  return { subject: `Payment details for order ${p.id} - ${money(p.amount)} due`, html }
}

/** To the customer when the owner replies to an enquiry or sends a general message from admin. */
export function replyEmail(r: { id: string; name: string; message: string }) {
  const html = shell({
    eyebrow: 'A message from the Torque Team', title: `Re: ${r.id}`,
    body:
      `<p style="margin:0 0 14px;">Hi ${esc(r.name.split(' ')[0])},</p><p style="margin:0 0 18px;">${nl2br(r.message)}</p>` +
      `<p style="margin:0 0 18px;">Kind regards,<br><b>The Torque Team</b></p>` +
      button(`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Re: ${r.id}`)}`, 'Reply to us', false),
  })
  return { html }
}
