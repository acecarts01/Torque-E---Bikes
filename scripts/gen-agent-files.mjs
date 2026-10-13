import fs from 'fs';
import path from 'path';
import { SITE, CONTACT, SHOP, BRAND, CATEGORIES, PRODUCTS, PAGES } from '../src/config/site.js';

const DOMAIN = SITE.domain;

const files = [
  {
    path: 'public/robots.txt',
    content: `User-agent: *
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/
Sitemap: https://${DOMAIN}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

# Agent-readable resources
# llms.txt: https://${DOMAIN}/llms.txt
# API Catalog: https://${DOMAIN}/.well-known/api-catalog
# Agent Skills: https://${DOMAIN}/.well-known/agent-skills/index.json
# MCP Server Card: https://${DOMAIN}/.well-known/mcp/server-card.json`
  },
  {
    path: 'public/llms.txt',
    content: `# ${SITE.name}

> ${SITE.tagline}

${BRAND.description}

Location: ${CONTACT.hq}
Contact: WhatsApp ${CONTACT.whatsapp}, Email ${CONTACT.email}
Min Order: ${SITE.currency} ${SHOP.minOrder}
Free Shipping: Over ${SITE.currency} ${SHOP.freeShippingThreshold}
Payment Methods: ${SHOP.paymentMethods.join(', ')}
Crypto Discount: ${SHOP.cryptoDiscount}%

## Products
${CATEGORIES.map(c => `- [${c.name}](https://${DOMAIN}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Support
- [Wholesale](https://${DOMAIN}/wholesale/): B2B and bulk ordering
- [FAQ](https://${DOMAIN}/faq/): Common questions and policies
- [Contact](https://${DOMAIN}/contact/): Get in touch

## Optional
- [API Catalog](https://${DOMAIN}/.well-known/api-catalog)
- [Agent Skills](https://${DOMAIN}/.well-known/agent-skills/index.json)
- [MCP Server Card](https://${DOMAIN}/.well-known/mcp/server-card.json)
- [Auth Documentation](https://${DOMAIN}/auth.md)`
  },
  {
    path: 'public/auth.md',
    content: `# Auth.md

## Site: ${SITE.name} — Ecommerce

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://${DOMAIN}/shop/ |
| Blog | https://${DOMAIN}/blog/ |
| FAQ | https://${DOMAIN}/faq/ |
| Wholesale | https://${DOMAIN}/wholesale/ |

## Authentication

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
\`\`\`

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed by a human via WhatsApp or the order form.`
  },
  {
    path: 'public/.well-known/api-catalog',
    content: JSON.stringify({
      "linkset": [
        { "anchor": `https://${DOMAIN}/`, "https://www.iana.org/assignments/link-relations/service-doc": [{ "href": `https://${DOMAIN}/faq/` }], "title": `${SITE.name} — ${SITE.tagline}` },
        { "anchor": `https://${DOMAIN}/shop/`, "type": "text/html", "title": `${SITE.name} Product Catalog` },
        { "anchor": `https://${DOMAIN}/wholesale/`, "type": "text/html", "title": `${SITE.name} Wholesale` },
        { "anchor": `https://${DOMAIN}/api/products`, "type": "application/json", "title": `${SITE.name} Products API` },
        { "anchor": `https://${DOMAIN}/api/categories`, "type": "application/json", "title": `${SITE.name} Categories API` },
        { "anchor": `https://${DOMAIN}/api/search`, "type": "application/json", "title": `${SITE.name} Search API` },
        { "anchor": `https://${DOMAIN}/api/mcp`, "type": "application/json", "https://www.iana.org/assignments/link-relations/service-desc": [{ "href": `https://${DOMAIN}/.well-known/mcp/server-card.json` }], "title": `${SITE.name} MCP Server` }
      ]
    }, null, 2)
  },
  {
    path: 'public/.well-known/agent-skills/index.json',
    content: JSON.stringify({
      "$schema": "https://agentskills.io/schema/v0.2.0/index.json",
      "name": SITE.name,
      "url": `https://${DOMAIN}`,
      "description": SITE.tagline,
      "skills": [
        { "name": "search-products", "type": "commerce", "description": "Search products by keyword, category, or price", "url": `https://${DOMAIN}/api/mcp`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "name": "browse-catalog", "type": "navigation", "description": "Browse the full product catalog by category", "url": `https://${DOMAIN}/shop/`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "name": "order-draft", "type": "commerce", "description": "Create a prefilled order draft. Human completes the order.", "url": `https://${DOMAIN}/api/mcp`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "name": "wholesale-inquiry", "type": "commerce", "description": "Wholesale pricing tiers and bulk ordering", "url": `https://${DOMAIN}/wholesale/`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "name": "product-education", "type": "content", "description": "Educational blog content", "url": `https://${DOMAIN}/blog/`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "name": "contact", "type": "support", "description": "Contact for product questions or support", "url": `https://${DOMAIN}/contact/`, "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" }
      ]
    }, null, 2)
  },
  {
    path: 'public/.well-known/mcp/server-card.json',
    content: JSON.stringify({
      "$schema": "https://modelcontextprotocol.io/schemas/server-card/v1.json",
      "serverInfo": { "name": SITE.name, "version": "1.0.0", "description": BRAND.description, "homepage": `https://${DOMAIN}`, "contact": { "email": CONTACT.email, "whatsapp": CONTACT.whatsapp } },
      "transport": { "type": "streamable-http", "endpoint": `https://${DOMAIN}/api/mcp` },
      "capabilities": {
        "tools": [
          { "name": "search_products", "description": "Search products by keyword, category, max_price", "inputSchema": { "type": "object", "properties": { "query": { "type": "string" }, "category": { "type": "string" }, "max_price": { "type": "number" } } } },
          { "name": "get_product", "description": "Get full product details by slug", "inputSchema": { "type": "object", "required": ["slug"], "properties": { "slug": { "type": "string" } } } },
          { "name": "list_categories", "description": "List all product categories", "inputSchema": { "type": "object", "properties": {} } },
          { "name": "get_policies", "description": "Get shipping, payment, returns policies", "inputSchema": { "type": "object", "properties": {} } },
          { "name": "create_order_draft", "description": "Create prefilled order URL. Human completes — never captures payment.", "inputSchema": { "type": "object", "properties": { "items": { "type": "array" }, "notes": { "type": "string" } } } }
        ],
        "resources": [
          { "name": "product-catalog", "description": "Full product catalog", "uri": `https://${DOMAIN}/shop/` },
          { "name": "wholesale", "description": "Wholesale pricing", "uri": `https://${DOMAIN}/wholesale/` },
          { "name": "blog", "description": "Educational content", "uri": `https://${DOMAIN}/blog/` }
        ],
        "commerce": { "ordering": "human-assisted-whatsapp-or-form", "payment": SHOP.paymentMethods, "currency": SITE.currency, "minimumOrder": SHOP.minOrder, "freeShipping": SHOP.freeShippingThreshold }
      },
      "legal": { "ageRestriction": "16+", "productType": "Electric Motos & Conversion Kits", "compliance": "Off-road and private property use only" }
    }, null, 2)
  },
  {
    path: 'public/.well-known/oauth-protected-resource',
    content: JSON.stringify({ "resource": `https://${DOMAIN}`, "resource_name": `${SITE.name} Public Catalog`, "authorization_servers": [], "scopes_supported": [], "bearer_methods_supported": [], "resource_documentation": `https://${DOMAIN}/auth.md`, "resource_policy_uri": `https://${DOMAIN}/terms/`, "tls_client_certificate_bound_access_tokens": false, "note": `All resources on ${DOMAIN} are publicly accessible. No OAuth tokens required.` }, null, 2)
  },
  {
    path: 'public/.well-known/oauth-authorization-server',
    content: JSON.stringify({ "issuer": `https://${DOMAIN}`, "authorization_endpoint": null, "token_endpoint": null, "jwks_uri": null, "grant_types_supported": [], "response_types_supported": [], "scopes_supported": [], "note": `${SITE.name} has no protected APIs. All resources publicly accessible.`, "public_resources": [`https://${DOMAIN}/shop/`, `https://${DOMAIN}/blog/`, `https://${DOMAIN}/faq/`, `https://${DOMAIN}/wholesale/`, `https://${DOMAIN}/llms.txt`, `https://${DOMAIN}/.well-known/api-catalog`, `https://${DOMAIN}/.well-known/agent-skills/index.json`, `https://${DOMAIN}/.well-known/mcp/server-card.json`], "agent_auth": { "register_uri": null, "identity_types_supported": ["none"], "credential_types_supported": ["none"], "notes": "No registration required. All content publicly accessible to agents." } }, null, 2)
  },
  {
    path: 'public/.well-known/openid-configuration',
    content: JSON.stringify({ "issuer": `https://${DOMAIN}`, "note": `${SITE.name} does not operate an OpenID Connect provider. All resources publicly accessible.`, "public_site": true, "authorization_endpoint": null, "token_endpoint": null, "userinfo_endpoint": null, "jwks_uri": null, "scopes_supported": [], "response_types_supported": [], "grant_types_supported": [], "subject_types_supported": [], "id_token_signing_alg_values_supported": [] }, null, 2)
  },
  {
    path: 'public/.well-known/acp.json',
    content: JSON.stringify({ "protocol": { "name": "acp", "version": "0.1.0" }, "name": SITE.name, "description": BRAND.description, "api_base_url": `https://${DOMAIN}`, "homepage": `https://${DOMAIN}`, "transports": ["https"], "capabilities": { "services": ["product-catalog", "wholesale", "blog", "faq", "mcp-server"], "ordering": "human-assisted", "payment_methods": SHOP.paymentMethods, "currency": SITE.currency, "minimum_order_usd": SHOP.minOrder, "free_shipping_threshold_usd": SHOP.freeShippingThreshold }, "contact": { "whatsapp": `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}`, "email": CONTACT.email }, "legal": { "age_restriction": "16+", "region": "Australia", "ships_to": "Australia", "product_type": "Electric Motos", "compliance": "Off-road only" } }, null, 2)
  },
  {
    path: 'public/.well-known/ucp',
    content: JSON.stringify({ "ucp": "1.0", "protocol_version": "1.0", "spec": "https://ucp.dev/specification/overview/", "schema": "https://ucp.dev/schema/v1.json", "site": `https://${DOMAIN}`, "name": SITE.name, "description": BRAND.description, "services": [ { "id": "product-catalog", "type": "catalog", "url": `https://${DOMAIN}/shop/`, "description": "Full product catalog" }, { "id": "mcp-server", "type": "mcp", "url": `https://${DOMAIN}/api/mcp`, "description": "MCP Streamable HTTP server" }, { "id": "order", "type": "commerce", "url": `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}`, "description": "Place orders via WhatsApp" }, { "id": "wholesale", "type": "b2b", "url": `https://${DOMAIN}/wholesale/`, "description": "Wholesale pricing and bulk ordering" } ], "capabilities": ["browse", "search", "inquiry", "wholesale", "content", "mcp"], "endpoints": { "mcp": `https://${DOMAIN}/api/mcp`, "catalog": `https://${DOMAIN}/shop/`, "contact": `https://${DOMAIN}/contact/`, "agent_skills": `https://${DOMAIN}/.well-known/agent-skills/index.json`, "mcp_server_card": `https://${DOMAIN}/.well-known/mcp/server-card.json`, "api_catalog": `https://${DOMAIN}/.well-known/api-catalog`, "llms_txt": `https://${DOMAIN}/llms.txt` }, "currency": SITE.currency, "minimum_order_usd": SHOP.minOrder, "payment_methods": SHOP.paymentMethods, "legal": { "age_restriction": "16+", "product_type": "Electric Motos", "compliance": "Off-road only" } }, null, 2)
  },
  {
    path: `public/${SITE.indexNowKey}.txt`,
    content: SITE.indexNowKey
  },
  {
    path: 'vercel.json',
    content: JSON.stringify({
      "$schema": "https://openapi.vercel.sh/vercel.json",
      "trailingSlash": true,
      "redirects": [
        { "source": "/:path*", "has": [{ "type": "host", "value": `www.${DOMAIN}` }], "destination": `https://${DOMAIN}/:path*`, "permanent": true }
      ],
      "headers": [
        { "source": "/(.*)", "headers": [
          { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
          { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" },
          { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com; font-src 'self';" },
          { "key": "Link", "value": "</.well-known/api-catalog>; rel=\"api-catalog\", </.well-known/agent-skills/index.json>; rel=\"describedby\", </llms.txt>; rel=\"describedby\", </.well-known/mcp/server-card.json>; rel=\"service-desc\", </auth.md>; rel=\"auth\", </.well-known/openid-configuration>; rel=\"openid-configuration\"" }
        ]},
        { "source": "/.well-known/api-catalog", "headers": [{ "key": "Content-Type", "value": "application/linkset+json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/agent-skills/index.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/mcp/server-card.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/oauth-protected-resource", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/oauth-authorization-server", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/openid-configuration", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/acp.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/ucp", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/auth.md", "headers": [{ "key": "Content-Type", "value": "text/markdown; charset=utf-8" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/llms.txt", "headers": [{ "key": "Content-Type", "value": "text/plain; charset=utf-8" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/:path*.md", "headers": [{ "key": "Content-Type", "value": "text/markdown; charset=utf-8" }] },
        { "source": "/api/:path*", "headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }, { "key": "Access-Control-Allow-Methods", "value": "GET, POST, OPTIONS" }, { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Accept, Mcp-Session-Id" }] }
      ]
    }, null, 2)
  }
];

files.forEach(file => {
  const dir = path.dirname(file.path);
  if (dir !== '.' && !fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file.path, file.content);
  console.log(`Generated: ${file.path}`);
});
