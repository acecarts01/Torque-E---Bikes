import { NextResponse } from 'next/server'
import { SITE, SHOP, CONTACT } from '@/src/config/site'

export async function GET() {
  const DOMAIN = SITE.domain
  return NextResponse.json({
    ucp: "1.0",
    services: [
      { id: "product-catalog", type: "catalog", url: `https://${DOMAIN}/shop/` },
      { id: "mcp-server", type: "mcp", url: `https://${DOMAIN}/api/mcp` },
      { id: "order", type: "commerce", url: `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, "")}` },
      { id: "wholesale", type: "b2b", url: `https://${DOMAIN}/wholesale/` }
    ],
    currency: SITE.currency,
    minimum_order_usd: SHOP.minOrder,
    payment_methods: SHOP.paymentMethods
  }, { 
    headers: { 
      'Access-Control-Allow-Origin': '*', 
      'Cache-Control': 'public, max-age=300' 
    } 
  })
}
