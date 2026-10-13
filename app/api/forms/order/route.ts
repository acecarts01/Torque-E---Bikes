// src/app/api/forms/order/route.ts
import { SITE } from '@/src/config/site'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, items, paymentMethod, total, secret } = body

    // Validation
    if (!name || !email || !items) {
      return Response.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    // Security check (e.g. from a secure frontend form)
    if (secret !== process.env.ZOHO_CLIENT_SECRET) {
      // In a real app, you'd use a more robust auth or just rely on Vercel's env security
    }

    const webhookUrl = process.env.ZOHO_ORDER_WEBHOOK_URL

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: SITE.domain,
          customer: { name, email, phone },
          order: { items, paymentMethod, total },
          timestamp: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send to Zoho')
      }
    }

    return Response.json({ 
      success: true, 
      message: 'Order draft received. The Torque Team will contact you shortly to finalize payment.',
      orderReference: `TQR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    })
  } catch (error) {
    console.error('Order error:', error)
    return Response.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
