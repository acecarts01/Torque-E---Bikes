# DNS records for torquee-bikesaustralia.com.au (read-only backup, 10 Nov 2026)

Nameservers: ns1.vercel-dns.com, ns2.vercel-dns.com (Vercel DNS, which cannot sign zones with DNSSEC). No DS or DNSKEY records exist. Nothing was changed.
Source: Vercel domain records (15). Purpose: have a complete copy before anyone considers moving nameservers to get DNSSEC (the last 25 points of the Discoverability score).

| Name | Type | Value | TTL | Purpose |
|---|---|---|---|---|
| (apex) | ALIAS | 04865326d7b1194e.vercel-dns-016.com | 60 | Vercel-managed, serves the site |
| * | ALIAS | cname.vercel-dns-016.com. | 60 | Vercel-managed wildcard |
| (apex) | CAA | 0 issue "letsencrypt.org" | 60 | certificates |
| (apex) | CAA | 0 issue "sectigo.com" | 60 | certificates |
| (apex) | CAA | 0 issue "pki.goog" | 60 | certificates |
| (apex) | MX | 10 mx.zoho.com. | 60 | Zoho mail |
| (apex) | MX | 20 mx2.zoho.com. | 60 | Zoho mail |
| (apex) | MX | 50 mx3.zoho.com. | 60 | Zoho mail |
| (apex) | TXT | v=spf1 include:zohomail.com ~all | 60 | SPF |
| zmail._domainkey | TXT | v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2vD+rdp8rjmKQlHNAmftBX22fo4qsqMzJV5lrOwn44o6uDZILQNgEIGgyPyeYpTZfW3Exfr8l8MeOgBBVKYrpWH9bRWrCE/GlP42uZaUsXofx2kPSIJFJcw09zm4VEykff5lCdu7SOOM7GFLKOT1hL9uN5wJznnE2ZFDN+qOyIQIDAQAB | 60 | Zoho DKIM |
| (apex) | TXT | zoho-verification=zb05089573.zmverify.zoho.com | 60 | Zoho verification |
| (apex) | TXT | google-site-verification=CqFyyBDyTKDw2yucH7AKdYJeTaInxmx9SosSz4ml5Lc | 60 | Google Search Console |
| 2f122006992530d1e45a8b5f729f3d1b | CNAME | verify.bing.com. | 60 | Bing Webmaster verification |
| _index._agents | HTTPS | 1 torquee-bikesaustralia.com.au. alpn=h2,h3 port=443 | 3600 | DNS-AID discovery |
| _mcp._agents | HTTPS | 1 torquee-bikesaustralia.com.au. alpn=h2,h3 port=443 | 3600 | DNS-AID MCP endpoint (comment says /mcp; the live endpoint is /api/mcp, check) |

**Findings from the backup**
- The two DNS-AID HTTPS records correctly point at our `.com.au` host. The `_mcp._agents` comment mentions `/mcp`, but the server card endpoint is `/api/mcp`: a comment only, no effect.
- Moving nameservers for DNSSEC means recreating all 15 records at the new provider first (the Vercel ALIAS records become flattened CNAMEs to the Vercel targets), switching the nameservers at the registrar, then adding the DS record the new provider gives. Mail records (MX, SPF, DKIM, Zoho verification) must be identical or email breaks.
