// src/lib/mailer.ts
// Zoho Mail over SMTP (nodemailer). Server only. Lazy singleton; returns { sent: false } when unconfigured instead of crashing.
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'
import { SITE, CONTACT } from '@/src/config/site'

let transporter: Transporter | null = null

export const isMailConfigured = () =>
  Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)

function getTransporter(): Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465)
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })
  }
  return transporter
}

export const esc = (s: unknown) =>
  String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

export const nl2br = (s: string) => esc(s).replace(/\r?\n/g, '<br>')

/** Light email shell: white body, dark brand header band, brand colour as an accent only. */
export function shell(heading: string, bodyHtml: string) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f3f4f6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
<tr><td style="background:#16181b;padding:20px 28px;border-bottom:4px solid #ff6a1a;">
<span style="color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:1px;">TORQUE E-BIKES</span>
<span style="color:#ff6a1a;font-size:12px;font-weight:bold;letter-spacing:2px;margin-left:8px;">AUSTRALIA</span>
</td></tr>
<tr><td style="padding:28px;font-size:15px;line-height:1.6;">
<h1 style="margin:0 0 16px;font-size:20px;color:#111827;">${esc(heading)}</h1>
${bodyHtml}
</td></tr>
<tr><td style="padding:18px 28px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;line-height:1.5;">
The Torque Team Pty Ltd &middot; ABN 27 126 064 668<br>
${esc(CONTACT.address)}<br>
${esc(CONTACT.phone)} &middot; ${esc(CONTACT.email)} &middot; ${esc(SITE.domain)}
</td></tr>
</table></td></tr></table></body></html>`
}

export const detailRow = (label: string, value: string) =>
  `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;vertical-align:top;white-space:nowrap;">${esc(label)}</td><td style="padding:6px 0;color:#111827;">${value}</td></tr>`

export const detailTable = (rows: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:14px;margin:8px 0 16px;">${rows}</table>`

export type MailInput = { to: string; subject: string; html: string; text?: string; replyTo?: string }

export async function sendMail(input: MailInput): Promise<{ sent: boolean; error?: string }> {
  if (!isMailConfigured()) return { sent: false, error: 'SMTP not configured' }
  try {
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM || `Torque E-Bikes <${process.env.SMTP_USER}>`,
      to: input.to,
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text || input.html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    })
    return { sent: true }
  } catch (err: any) {
    console.error('sendMail failed:', err?.message || err)
    return { sent: false, error: err?.message || 'send failed' }
  }
}

export const ownerAddress = () => process.env.ORDER_NOTIFY_TO || CONTACT.email
