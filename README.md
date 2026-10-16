# Torque E-Bikes

High-performance electric dirt bikes and conversion kits for the Australian market.

## Development

```bash
# Install dependencies
npm install

# Generate agent files
npm run gen

# Start dev server
npm run dev
```

## Deployment

1. Push to GitHub.
2. Import to Vercel.
3. Ensure Framework Preset is "Next.js".
4. Set `SITE.domain` in `src/config/site.js` before production build.

## Agent Support

This site is Agent-Ready (Level 2+).
- MCP Server: `/api/mcp`
- LLMS: `/llms.txt`
- ACP: `/.well-known/acp.json`; ARD: `/.well-known/ai-catalog.json`
- API Catalog: `/.well-known/api-catalog`
