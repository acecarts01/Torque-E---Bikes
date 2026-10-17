---
name: browse-catalog
description: Search and browse the Torque E-Bikes product catalogue (electric bikes, e-motos, conversion kits, parts) by keyword, category or price.
---

# Browse the catalogue

Use these public, read-only endpoints. No sign-in is needed.

- `GET https://torquee-bikesaustralia.com.au/api/search?q=<keyword>` search products
- `GET https://torquee-bikesaustralia.com.au/api/products` product list (supports category and price filters)
- `GET https://torquee-bikesaustralia.com.au/api/categories` category list
- MCP server: `https://torquee-bikesaustralia.com.au/api/mcp` (tools: search_products, get_product, list_categories)

Prices are in AUD. High-powered bikes are for off-road and private property use only, and must not be described as road legal.
