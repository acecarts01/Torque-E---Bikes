// src/components/GraphLd.tsx
// Renders one JSON-LD script holding a page's whole @graph. Server component.
import React from 'react'

export default function GraphLd({ graph }: { graph: Record<string, any> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}
