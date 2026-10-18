# Auth.md

## Site: Torque E-Bikes — Ecommerce

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://torquee-bikesaustralia.com.au/shop/ |
| Blog | https://torquee-bikesaustralia.com.au/blog/ |
| FAQ | https://torquee-bikesaustralia.com.au/faq/ |
| Wholesale | https://torquee-bikesaustralia.com.au/wholesale/ |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed by a human via WhatsApp or the order form.