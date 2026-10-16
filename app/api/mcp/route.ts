import { NextRequest, NextResponse } from 'next/server'
import { CATEGORIES, SHOP, SITE } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'

export async function POST(req: NextRequest) {
  try {
    const { jsonrpc, method, params, id } = await req.json()

    if (jsonrpc !== '2.0') {
      return NextResponse.json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid Request' }, id }, { status: 400 })
    }

    switch (method) {
      case 'initialize':
        return NextResponse.json({
          jsonrpc: '2.0',
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: { listChanged: false }
            },
            serverInfo: { name: SITE.name, version: '1.0.0' }
          },
          id
        })

      case 'tools/list':
        return NextResponse.json({
          jsonrpc: '2.0',
          result: {
            tools: [
              {
                name: 'search_products',
                description: 'Search products by keyword, category, or price',
                inputSchema: {
                  type: 'object',
                  properties: {
                    query: { type: 'string', description: 'Search term' },
                    category: { type: 'string', description: 'Category slug' },
                    max_price: { type: 'number', description: 'Maximum price in AUD' }
                  }
                }
              },
              {
                name: 'get_product',
                description: 'Get full product details by slug',
                inputSchema: {
                  type: 'object',
                  required: ['slug'],
                  properties: {
                    slug: { type: 'string', description: 'Product slug' }
                  }
                }
              },
              {
                name: 'list_categories',
                description: 'List all product categories',
                inputSchema: { type: 'object', properties: {} }
              },
              {
                name: 'get_policies',
                description: 'Get shipping, payment, returns policies',
                inputSchema: { type: 'object', properties: {} }
              },
              {
                name: 'create_order_draft',
                description: 'Create prefilled order URL. Human completes — never captures payment.',
                inputSchema: {
                  type: 'object',
                  properties: {
                    items: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' }, quantity: { type: 'number' } } } },
                    notes: { type: 'string' }
                  }
                }
              }
            ]
          },
          id
        })

      case 'tools/call':
        const { name, arguments: args } = params
        let result = null

        if (name === 'search_products') {
          const { query, category, max_price } = args
          let filtered = [...PRODUCTS]
          if (query) filtered = filtered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
          if (category) filtered = filtered.filter(p => p.category === category)
          if (max_price) filtered = filtered.filter(p => p.price <= max_price)
          result = { content: [{ type: 'text', text: JSON.stringify(filtered.map(p => ({ name: p.name, price: p.price, slug: p.slug, category: p.category, url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/` }))) }] }
        } else if (name === 'get_product') {
          const product = PRODUCTS.find(p => p.slug === args.slug)
          if (!product) result = { isError: true, content: [{ type: 'text', text: 'Product not found' }] }
          else result = { content: [{ type: 'text', text: JSON.stringify({ ...product, url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/` }) }] }
        } else if (name === 'list_categories') {
          result = { content: [{ type: 'text', text: JSON.stringify(CATEGORIES) }] }
        } else if (name === 'get_policies') {
          result = { content: [{ type: 'text', text: JSON.stringify(SHOP) }] }
        } else if (name === 'create_order_draft') {
          const baseUrl = `https://${SITE.domain}/checkout/`
          result = { content: [{ type: 'text', text: `Order draft created. Complete at: ${baseUrl}. (Note: MCP draft currently uses default items)` }] }
        } else {
          return NextResponse.json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id }, { status: 404 })
        }

        return NextResponse.json({ jsonrpc: '2.0', result, id })

      default:
        return NextResponse.json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({ jsonrpc: '2.0', error: { code: -32603, message: 'Internal error' }, id: null }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
    },
  })
}
