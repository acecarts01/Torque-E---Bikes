import React from 'react'
import { Metadata } from 'next'
import HubPage from '@/src/components/HubPage'
import { generatePageMetadata } from '@/src/lib/metadata'
import { allBikes, BIKE_CATEGORIES, aud } from '@/src/lib/hubs'
import { PRODUCTS } from '@/src/config/products'

export const metadata: Metadata = generatePageMetadata({
  title: 'Electric Bikes',
  description: 'Electric bikes for sale in Australia',
  path: '/electric-bikes/',
})

export default function Page() {
  const bikes = allBikes()
  const counts = BIKE_CATEGORIES.map(c => ({ href: `/shop/${c.slug}/`, label: c.name, count: PRODUCTS.filter(p => p.category === c.slug).length }))
  const step = Math.max(1, Math.ceil(bikes.length / 24))
  const feature = bikes.filter((_, i) => i % step === 0).slice(0, 24)
  return (
    <HubPage
      path="/electric-bikes/"
      name="Electric Bikes"
      eyebrow="All e-bikes"
      intro={`Torque E-Bikes lists ${bikes.length} electric bikes across ${BIKE_CATEGORIES.length} categories, from ${aud(bikes[0].price)} to ${aud(bikes[bikes.length - 1].price)}. Whether you want an electric bicycle for the commute, the trail or the school run, choose by how you ride, then compare models in each category. Bike e bikes here range from budget commuters to full-suspension electric mountain bikes. Prices are in Australian dollars and shipping is Australia-wide from Brisbane.`}
      note="Pedal-assist e-bikes at 250W can be used on public roads, subject to state rules. Electric dirt bikes and bikes above 250W are for off-road and private property use only."
      links={[...counts, { href: '/electric-bikes/budget/', label: 'Budget e-bikes' }]}
      products={feature}
      gridHeading="A selection from across the range"
      crumbs={[{ name: 'Home', item: '/' }, { name: 'Electric Bikes', item: '/electric-bikes/' }]}
    />
  )
}
