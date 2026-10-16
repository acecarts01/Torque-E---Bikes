import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { SITE, CONTACT, SHOP, BRAND, CATEGORIES, PAGES } from '../src/config/site.js';
import { PRODUCTS } from '../src/config/products.js';
import { MIN_BRAND_PRODUCTS, KEEP_BRANDS } from '../src/config/brand-rules.js';

const DOMAIN = SITE.domain;

// Thin brand pages (too few products) redirect to the product, its category, or the shop.
const slugifyBrand = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Brand pages that existed and were merged (kept in a plain file so this does not depend on SEO data that was removed with them)
const mergedBrandPages = JSON.parse(fs.readFileSync('src/config/merged-brand-pages.json', 'utf8'));
const brandGroups = {};
PRODUCTS.filter(p => p.brand && p.brand !== 'TBC').forEach(p => { (brandGroups[slugifyBrand(p.brand)] ||= []).push(p); });
const brandRedirects = Object.keys(brandGroups)
  .filter(s => brandGroups[s].length < MIN_BRAND_PRODUCTS && !KEEP_BRANDS.includes(s) && mergedBrandPages.includes(s))
  .sort()
  .map(s => {
    const items = brandGroups[s];
        const tally = {}; items.forEach(p => { tally[p.category] = (tally[p.category] || 0) + 1; });
    const topCat = Object.keys(tally).sort((x, y) => tally[y] - tally[x])[0];
    const destination = items.length === 1 ? '/shop/' + items[0].category + '/' + items[0].slug + '/' : '/shop/' + topCat + '/';
    // no trailing slash on the source: the site uses trailingSlash, and Next matches both forms from the slashless pattern
    return { source: '/brands/' + s, destination };
  });


// ---- Agent skills (real SKILL.md files with sha256 digests) ----
const skillDefs = [
  { name: 'browse-catalog', description: `Search and browse the ${SITE.name} product catalogue (electric bikes, e-motos, conversion kits, parts) by keyword, category or price.`,
    body: `# Browse the catalogue\n\nUse these public, read-only endpoints. No sign-in is needed.\n\n- \`GET https://${DOMAIN}/api/search?q=<keyword>\` search products\n- \`GET https://${DOMAIN}/api/products\` product list (supports category and price filters)\n- \`GET https://${DOMAIN}/api/categories\` category list\n- MCP server: \`https://${DOMAIN}/api/mcp\` (tools: search_products, get_product, list_categories)\n\nPrices are in AUD and include 10% GST. High-powered bikes are for off-road and private property use only, and must not be described as road legal.\n` },
  { name: 'order-draft', description: `Prepare a pre-filled ${SITE.name} cart link for a human to review and complete. Agents never take payment.`,
    body: `# Prepare an order draft\n\nCall the MCP tool \`create_order_draft\` at \`https://${DOMAIN}/api/mcp\` with \`items: [{ slug, quantity }]\`. It returns a checkout link of the form \`https://${DOMAIN}/checkout/?items=slug:qty\` and an estimate of the total (GST included, shipping 10% of the order, free from ${SHOP.freeShippingThreshold} AUD).\n\nThe customer opens the link, checks the cart and completes the order themselves. Payment details are sent by the store by email after the order is placed. Never ask for or enter card or bank details.\n` },
  { name: 'wholesale-enquiry', description: `Explain ${SITE.name} wholesale and bulk ordering and point a human to the wholesale form.`,
    body: `# Wholesale\n\nWholesale pricing and bulk ordering are handled by a person. Direct the buyer to \`https://${DOMAIN}/wholesale/\` to submit an enquiry, or email ${CONTACT.email}.\n` },
  { name: 'store-policies', description: `Shipping, payment, GST and compliance rules for ${SITE.name} (Australia).`,
    body: `# Store policies\n\n- Ships Australia-wide. Lithium batteries are Class 9 dangerous goods and are shipped by certified carriers.\n- Shipping is 10% of the order total, free for orders from ${SHOP.freeShippingThreshold} AUD.\n- Prices include 10% GST.\n- Payment: ${SHOP.paymentMethods.join(', ')}. Payment details are sent after the order is placed.\n- Bikes above 250W are for off-road and private property use only.\n- Full policies: \`https://${DOMAIN}/shipping/\`, \`https://${DOMAIN}/faq/\`. MCP tool: \`get_policies\`.\n` }
]
const SKILL_FILES = []
const skillIndex = []
for (const sk of skillDefs) {
  const md = '---\nname: ' + sk.name + '\ndescription: ' + sk.description + '\n---\n\n' + sk.body
  SKILL_FILES.push({ path: 'public/.well-known/agent-skills/' + sk.name + '/SKILL.md', content: md })
  skillIndex.push({ name: sk.name, type: 'skill-md', description: sk.description, url: '/.well-known/agent-skills/' + sk.name + '/SKILL.md', digest: 'sha256:' + crypto.createHash('sha256').update(md).digest('hex') })
}

// ---- ARD catalogue and Poppy profile ----
const AGENT_DISCOVERY_FILES = [
  { path: 'public/.well-known/agent-skills/index.json', content: JSON.stringify({ '$schema': 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills: skillIndex }, null, 2) },
  { path: 'public/.well-known/ai-catalog.json', content: JSON.stringify({
      specVersion: '1.0',
      host: { displayName: SITE.name, identifier: DOMAIN, documentationUrl: `https://${DOMAIN}/llms.txt` },
      entries: [
        { id: `urn:air:${DOMAIN}:mcp:store`, displayName: `${SITE.name} store MCP server`, type: 'mcp-server', url: `https://${DOMAIN}/.well-known/mcp/server-card.json`,
          representativeQueries: ['Find an electric dirt bike under $5000 in Australia', 'What is the price of the Sur-Ron Light Bee?', 'Prepare a cart for two Talaria Sting bikes'] },
        { id: `urn:air:${DOMAIN}:skills:index`, displayName: `${SITE.name} agent skills`, type: 'agent-skills', url: `https://${DOMAIN}/.well-known/agent-skills/index.json`,
          representativeQueries: ['How do I order from Torque E-Bikes?', 'What is the shipping cost and GST?', 'Does the store offer wholesale pricing?'] }
      ]
    }, null, 2) },
  { path: 'public/.well-known/poppy.json', content: JSON.stringify({ protocol_version: '0.1', organization: { name: SITE.name, domain: DOMAIN }, web: {} }, null, 2) }
]

const files = [
  {
    path: 'src/config/brand-redirects.generated.json',
    content: JSON.stringify(brandRedirects, null, 1)
  },
  {
    path: 'src/config/price-range.generated.json',
    content: JSON.stringify({ low: Math.min(...PRODUCTS.map(p => p.price)), high: Math.max(...PRODUCTS.map(p => p.price)) })
  },
  {
    path: 'public/llms.txt',
    content: `# ${SITE.name}

> ${SITE.tagline}

${BRAND.description}

Location: ${CONTACT.hq}
Contact: WhatsApp ${CONTACT.whatsapp}, Email ${CONTACT.email}
Min Order: ${SITE.currency} ${SHOP.minOrder}
Shipping: ${SHOP.shippingRate}% of the order total (GST-inclusive); free on orders from ${SITE.currency} ${SHOP.freeShippingThreshold}
Payment Methods: ${SHOP.paymentMethods.join(', ')}
Crypto Discount: ${SHOP.cryptoDiscount}%

## Products
${CATEGORIES.map(c => `- [${c.name}](https://${DOMAIN}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Start here (priority pages)
- [Electric bikes](https://${DOMAIN}/electric-bikes/): every e-bike by type
- [Budget electric bikes](https://${DOMAIN}/electric-bikes/budget/): lowest-priced e-bikes
- [Electric dirt bikes](https://${DOMAIN}/shop/electric-dirt-bikes/): off-road and private property use only
- [Brands](https://${DOMAIN}/brands/): browse by brand
- [E-bike laws in Australia](https://${DOMAIN}/blog/off-road-vs-street-legal-australia/): road legal or off-road only
- [Conversion kit finder](https://${DOMAIN}/tools/conversion-kit-finder/): free tool
- [Guides](https://${DOMAIN}/blog/): buying and maintenance guides

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
  ...SKILL_FILES,
  ...AGENT_DISCOVERY_FILES,
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
    content: JSON.stringify({ "protocol": { "name": "acp", "version": "0.1.0" }, "name": SITE.name, "description": BRAND.description, "api_base_url": `https://${DOMAIN}`, "homepage": `https://${DOMAIN}`, "transports": ["https"], "capabilities": { "services": ["product-catalog", "wholesale", "blog", "faq", "mcp-server"], "ordering": "human-assisted", "payment_methods": SHOP.paymentMethods, "currency": SITE.currency, "minimum_order_aud": SHOP.minOrder, "free_shipping_threshold_aud": SHOP.freeShippingThreshold }, "contact": { "whatsapp": `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}`, "email": CONTACT.email }, "legal": { "region": "Australia", "ships_to": "Australia", "product_type": "Electric Motos", "compliance": "Off-road only" } }, null, 2)
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
          { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; font-src 'self';" },
          { "key": "Link", "value": "</.well-known/api-catalog>; rel=\"api-catalog\", </.well-known/agent-skills/index.json>; rel=\"describedby\", </llms.txt>; rel=\"describedby\", </.well-known/mcp/server-card.json>; rel=\"service-desc\", </auth.md>; rel=\"auth\", </.well-known/openid-configuration>; rel=\"openid-configuration\"" }
        ]},
        { "source": "/.well-known/api-catalog", "headers": [{ "key": "Content-Type", "value": "application/linkset+json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/agent-skills/index.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/mcp/server-card.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/oauth-protected-resource", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/oauth-authorization-server", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/openid-configuration", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/.well-known/acp.json", "headers": [{ "key": "Content-Type", "value": "application/json" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/auth.md", "headers": [{ "key": "Content-Type", "value": "text/markdown; charset=utf-8" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/llms.txt", "headers": [{ "key": "Content-Type", "value": "text/plain; charset=utf-8" }, { "key": "Access-Control-Allow-Origin", "value": "*" }] },
        { "source": "/:path*.md", "headers": [{ "key": "Content-Type", "value": "text/markdown; charset=utf-8" }] },
        { "source": "/api/:path*", "headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }, { "key": "Access-Control-Allow-Methods", "value": "GET, POST, OPTIONS" }, { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Accept, Mcp-Session-Id" }] }
      ]
    }, null, 2)
  }
];

const EXTLESS = ['public/.well-known/api-catalog', 'public/.well-known/oauth-protected-resource', 'public/.well-known/oauth-authorization-server', 'public/.well-known/openid-configuration']
const wellKnown = {}
files.filter(x => EXTLESS.includes(x.path)).forEach(x => { wellKnown[x.path.split('/').pop()] = x.content; try { fs.unlinkSync(x.path) } catch {} })
fs.writeFileSync('src/config/wellknown.generated.json', JSON.stringify(wellKnown))
files.splice(0, files.length, ...files.filter(x => !EXTLESS.includes(x.path)))
files.forEach(file => {
  const dir = path.dirname(file.path);
  if (dir !== '.' && !fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file.path, file.content);
  console.log(`Generated: ${file.path}`);
});
