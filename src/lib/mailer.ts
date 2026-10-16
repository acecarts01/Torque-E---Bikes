// src/lib/mailer.ts
// Zoho Mail over SMTP (nodemailer). Server only. Lazy singleton; returns { sent: false } when unconfigured instead of crashing.
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'
import { CONTACT } from '@/src/config/site'

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

// Plain-text alternative for the multipart message (mail apps that cannot show HTML fall back to this).
const htmlToText = (html: string) =>
  html
    .replace(/<head[\s\S]*?<\/head>/g, '')
    .replace(/<br\s*\/?>|<\/(tr|p|div|li|h1|h2)>/g, '\n')
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '$2 ($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&middot;/g, '·').replace(/&rarr;/g, '->').replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n\s*\n+/g, '\n\n').trim()

export type MailInput ={ to: string; subject: string; html: string; text?: string; replyTo?: string }

export async function sendMail(input: MailInput): Promise<{ sent: boolean; error?: string }> {
  if (!isMailConfigured()) return { sent: false, error: 'SMTP not configured' }
  try {
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM || `Torque E-Bikes <${process.env.SMTP_USER}>`,
      to: input.to,
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text || htmlToText(input.html),
    })
    return { sent: true }
  } catch (err: any) {
    console.error('sendMail failed:', err?.message || err)
    return { sent: false, error: err?.message || 'send failed' }
  }
}

export const ownerAddress = () => process.env.ORDER_NOTIFY_TO || CONTACT.email
