import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import LegalPage from '@/src/components/LegalPage'
import { BRAND, CONTACT } from '@/src/config/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Shipping & Returns',
  description: 'Australia-wide delivery, dangerous goods battery freight and returns policy for Torque E-Bikes orders',
  path: '/shipping-returns/'
})

export default function ShippingReturnsPage() {
  return (
    <LegalPage
      title="Shipping & Returns"
      updated="13 October 2026"
      intro={`${BRAND.tradingName} ships Australia-wide from ${CONTACT.hq}. This policy forms part of our Terms & Conditions.`}
      sections={[
        { heading: 'Delivery', body: ['We ship to addresses across Australia. Shipping is 10% of your order total, shown at checkout, and orders of $9,900 or more ship free. Estimated timeframes are confirmed by our team before dispatch. Large items such as complete bikes are sent by freight and may need someone to receive them.'] },
        { heading: 'Dangerous goods (lithium batteries)', body: ['Lithium batteries and products containing them are Class 9 Dangerous Goods and travel only with carriers approved for DG freight. This can affect delivery times and some remote locations.'] },
        { heading: 'Damaged or incorrect items', body: ['Check your order on arrival. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos so we can arrange a remedy.'] },
        { heading: 'Your rights', body: ['You have rights under the Australian Consumer Law to a repair, replacement or refund for faulty goods, as set out in our Terms & Conditions. These rights cannot be excluded.'] },
        { heading: 'Change of mind', body: [`If you change your mind about an unused item in its original packaging, contact us at ${CONTACT.email} before sending anything back. Approval, return freight and any restocking costs are agreed in advance. Batteries and used items may not be eligible.`] },
      ]}
    />
  )
}
