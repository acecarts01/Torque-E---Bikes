import React from 'react'
import { Metadata } from 'next'
import HubPage from '@/src/components/HubPage'
import { generatePageMetadata } from '@/src/lib/metadata'
import { budgetBikes, allBikes, aud } from '@/src/lib/hubs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Budget Electric Bikes',
  description: 'Budget electric bikes',
  path: '/electric-bikes/budget/',
})

export default function Page() {
  const cheap = budgetBikes(2000)
  const all = allBikes()
  return (
    <HubPage
      path="/electric-bikes/budget/"
      name="Budget Electric Bikes"
      eyebrow="Lowest-priced e-bikes"
      intro={`${cheap.length} of the ${all.length} e-bikes listed at Torque E-Bikes are ${aud(2000)} or less, starting from ${aud(all[0].price)}. Check the brakes, battery and warranty on each bike, and compare two or three models in the same price band before you order.`}
      note="Prices are in Australian dollars. Shipping is 10% of your order total, free on orders from $9,900."
      links={[{ href: '/electric-bikes/', label: 'All e-bikes' }, { href: '/shop/folding-e-bikes/', label: 'Folding e-bikes' }, { href: '/shop/commuter-and-urban-e-bikes/', label: 'Commuter e-bikes' }]}
      products={cheap.slice(0, 36)}
      gridHeading="Lowest-priced e-bikes"
      crumbs={[{ name: 'Home', item: '/' }, { name: 'Electric Bikes', item: '/electric-bikes/' }, { name: 'Budget', item: '/electric-bikes/budget/' }]}
    />
  )
}
