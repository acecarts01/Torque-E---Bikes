// src/app/api/forms/contact/route.ts
import { SITE } from '@/src/config/site'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message, subject } = body

    if (!name || !email || !message) {
      return Response.json({ success: false, message: 'Missing fields' }, { status: 400 })
    }

    const webhookUrl = process.env.ZOHO_CONTACT_WEBHOOK_URL

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: SITE.domain,
          type: 'contact',
          data: { name, email, message, subject },
          timestamp: new Date().toISOString()
        })
      })
    }

    return Response.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    return Response.json({ success: false, message: 'Internal error' }, { status: 500 })
  }
}
