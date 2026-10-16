---
name: order-draft
description: Prepare a pre-filled Torque E-Bikes cart link for a human to review and complete. Agents never take payment.
---

# Prepare an order draft

Call the MCP tool `create_order_draft` at `https://torquee-bikesaustralia.com.au/api/mcp` with `items: [{ slug, quantity }]`. It returns a checkout link of the form `https://torquee-bikesaustralia.com.au/checkout/?items=slug:qty` and an estimate of the total (GST included, shipping 10% of the order, free from 9900 AUD).

The customer opens the link, checks the cart and completes the order themselves. Payment details are sent by the store by email after the order is placed. Never ask for or enter card or bank details.
