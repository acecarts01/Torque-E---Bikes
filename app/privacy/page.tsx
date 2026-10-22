import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import LegalPage from '@/src/components/LegalPage'
import { BRAND, CONTACT } from '@/src/config/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'How Torque E-Bikes (The Torque Team Pty Ltd, ABN 27 126 064 668) collects, uses and protects your personal information',
  path: '/privacy/'
})

export default function PrivacyPage() {
  return (
    <LegalPage
      path="/privacy/"
      title="Privacy Policy"
      updated="13 October 2026"
      intro={`${BRAND.entityName} (ABN ${BRAND.abn}), trading as ${BRAND.tradingName}, handles personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.`}
      sections={[
        { heading: 'Information we collect', body: ['We collect the details you give us when you order, enquire or open a wholesale account: name, email, phone, delivery and billing address, ABN/ACN for business accounts, and order history. We also collect basic technical data (device, pages viewed) to keep the site working.'] },
        { heading: 'How we use it', body: ['To process and deliver orders, arrange dangerous goods freight, provide support and warranty help, meet legal and tax obligations, and, where you have agreed, send updates. We do not sell your personal information.'] },
        { heading: 'Who we share it with', body: ['Only with providers needed to serve you: couriers and freight carriers, payment and email service providers, and professional advisers. Some providers may store data outside Australia; we take reasonable steps to make sure it is protected.'] },
        { heading: 'Age', body: ['Our products are intended for adults. Riders under 18 must be supervised, and purchases must be made by an adult.'] },
        { heading: 'Security and retention', body: ['We take reasonable steps to protect information from misuse, loss and unauthorised access, and keep records only as long as needed for business, tax and legal purposes.'] },
        { heading: 'Access and complaints', body: [`You can ask to access or correct your information, or make a privacy complaint, by emailing ${CONTACT.email}. If you are not satisfied with our response you may contact the Office of the Australian Information Commissioner (oaic.gov.au).`] },
      ]}
    />
  )
}
