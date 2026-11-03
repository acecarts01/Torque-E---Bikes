# Technical crawl of the live site, 3 Nov 2026

Method: my own read-only crawl of all 615 sitemap URLs on https://torquee-bikesaustralia.com.au (GET requests, 6 at a time), plus a status check of 67 extra internal link targets. Raw results are in the scratch data and the CSV below. Semrush's own Site Audit was started separately (see the Semrush section when it finishes).
Data file: `docs/crawl-audit-2026-11-03.csv`.

## 1. Result

| Check | Pages | Examples |
|---|---|---|
| Non-200 pages in sitemap | 0 |  |
| Missing title | 0 |  |
| Title over 65 characters | 0 |  |
| Title under 25 characters | 10 | /brands/, /shop/seats-fenders-and-body/, /shop/cargo-bikes-and-e-trikes/, /shop/lights-and-horns/ (+6 more) |
| Missing meta description | 0 |  |
| Meta description over 160 characters | 0 |  |
| Meta description under 70 characters | 0 |  |
| Not exactly one H1 | 0 |  |
| Missing canonical | 0 |  |
| Canonical differs from the page URL | 0 |  |
| Page has noindex (should not be in sitemap) | 0 |  |
| Images with no alt attribute | 0 |  |
| Invalid JSON-LD | 0 |  |
| Not exactly one JSON-LD script | 0 |  |
| Missing lang attribute | 0 |  |
| Missing viewport tag | 0 |  |
| Missing Open Graph title or image | 0 |  |
| Under 300 words | 0 |  |
| Slow response over 3 s (this network) | 2 | /electric-bikes/, /electric-bikes/budget/ |
| HTML over 300 KB | 2 | /blog/, /brands/79bike/ |
| Duplicate titles | 0 groups |  |
| Duplicate meta descriptions | 0 groups |  |
| Broken internal links (4xx, 5xx) | 0 |  |
| Internal links that redirect | 2 | /whatsapp/ -> https://wa.me/61480804189; /abn-lookup/ -> https://abr.business.gov.au/ABN/View?abn=27126064668 |
| Sitemap pages with no inbound internal link (orphans) | 0 |  |
| Sitemap pages with only one inbound internal link | 0 |  |

## 2. Page counts and sizes by type

| Type | Pages | Median words | Median HTML KB | Median response (ms) |
|---|---|---|---|---|
| home | 1 | 1546 | 259 | 816 |
| category | 23 | 1303 | 177 | 1228 |
| brand | 28 | 817 | 137 | 1542 |
| product | 446 | 1041 | 119 | 1573 |
| blog | 104 | 2379 | 179 | 1657 |
| blog-index | 1 | 4776 | 421 | 795 |
| other | 12 | 658 | 78 | 1187 |

Response times include this PC's network and are not a speed score; use PageSpeed for that.
