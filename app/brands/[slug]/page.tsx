import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HubPage from '@/src/components/HubPage'
import { generatePageMetadata } from '@/src/lib/metadata'
import { brandName, brandProducts, brandSlugs, aud } from '@/src/lib/hubs'
import { getSeo } from '@/src/lib/seo'
import { CATEGORIES } from '@/src/config/site'

export async function generateStaticParams() {
  return brandSlugs().filter(s => getSeo(`/brands/${s}/`)).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = brandName(slug)
  if (!brand) return { title: 'Brand not found' }
  return generatePageMetadata({ title: brand, description: `${brand} electric bikes`, path: `/brands/${slug}/` })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = brandName(slug)
  if (!brand || !getSeo(`/brands/${slug}/`)) return notFound()
  const products = brandProducts(brand)
  const cats = [...new Set(products.map(p => p.category))].map(c => CATEGORIES.find(x => x.slug === c)).filter(Boolean) as typeof CATEGORIES
  const offroad = products.some(p => p.compliance === 'off-road')
  return (
    <HubPage
      path={`/brands/${slug}/`}
      name={brand}
      eyebrow="Brand"
      intro={`Torque E-Bikes lists ${products.length} ${brand} product${products.length > 1 ? 's' : ''} across ${cats.length} categor${cats.length > 1 ? 'ies' : 'y'}, from ${aud(products[0].price)} to ${aud(products[products.length - 1].price)}. Open a product for its specification and price in Australian dollars.`}
      note={offroad ? 'Dirt bikes and other high-powered models are for off-road and private property use only in Australia.' : undefined}
      links={cats.map(c => ({ href: `/shop/${c.slug}/`, label: c.name, count: products.filter(p => p.category === c.slug).length }))}
      products={products}
      gridHeading={`${brand} range`}
      crumbs={[{ name: 'Home', item: '/' }, { name: 'Brands', item: '/brands/' }, { name: brand, item: `/brands/${slug}/` }]}
    />
  )
}
