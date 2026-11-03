// src/components/PageGraph.tsx
// The one JSON-LD graph for a general page: Organization + WebSite + WebPage (+ breadcrumb, FAQ, extra nodes).
// Works in server and client components (it only renders a script tag).
import React from 'react'
import GraphLd from '@/src/components/GraphLd'
import { buildGraph, orgNode, websiteNode, webPageNode, breadcrumbNode, faqNode, type FaqPair } from '@/src/lib/schemaGraph'

export default function PageGraph({ path, type, name, description, crumbs, faq, fullOrg = false, extra = [], pageExtra }: {
  path: string
  type?: string
  name: string
  description?: string
  crumbs?: { name: string; item: string }[]
  faq?: FaqPair[]
  fullOrg?: boolean
  extra?: Record<string, any>[]
  pageExtra?: Record<string, any>
}) {
  return (
    <GraphLd
      graph={buildGraph([
        orgNode(fullOrg),
        websiteNode(),
        webPageNode(path, { type, name, description, crumbs: !!(crumbs && crumbs.length), extra: pageExtra }),
        crumbs && crumbs.length ? breadcrumbNode(path, crumbs) : null,
        ...extra,
        faqNode(path, faq || []),
      ])}
    />
  )
}
