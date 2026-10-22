import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import LegalPage from '@/src/components/LegalPage'
import { BRAND, SITE, CONTACT } from '@/src/config/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms of sale for Torque E-Bikes, a trading name of The Torque Team Pty Ltd (ABN 27 126 064 668), Brisbane QLD',
  path: '/terms/'
})

export default function TermsPage() {
  return (
    <LegalPage
      path="/terms/"
      title="Terms & Conditions"
      updated="13 October 2026"
      intro={`These terms apply to all purchases from ${SITE.domain}. In them, "we", "us" and "our" mean ${BRAND.entityName} (ABN ${BRAND.abn}, ACN ${BRAND.acn}) trading as ${BRAND.tradingName}. By placing an order you agree to these terms.`}
      sections={[
        { heading: 'Who we are', body: [`${BRAND.tradingName} is a trading name of ${BRAND.entityName}, based in ${CONTACT.hq}. You can contact us at ${CONTACT.email} or ${CONTACT.phone}.`] },
        { heading: 'Orders and pricing', body: ['All prices are in Australian dollars (AUD). We may correct pricing or description errors and will contact you before processing an affected order. An order is accepted only when we confirm it to you and payment has been received.', 'Product images are for illustration. Colours, accessories and specifications can vary by model year and supplier.'] },
        { heading: 'Payment', body: ['We accept bank transfer, PayID and selected cryptocurrencies. Orders are released for dispatch once cleared funds are received. Any payment-method discount shown at checkout applies only to that method.'] },
        { heading: 'Off-road use and Australian regulations', body: ['Electric dirt bikes, high-powered e-motos and any motor or conversion kit above 250W continuous rated power or 25 km/h assisted speed are sold for off-road and private property use only. They are not road legal or registrable in Australia and must not be ridden on public roads or paths.', 'It is your responsibility to check the rules in your state or territory (for example Transport for NSW, VicRoads, Queensland TMR, WA DoT) and any age, licence and land-access requirements before riding. Only pedal-assist e-bikes that meet the Australian EPAC standard (EN 15194, 250W) may be used on public roads.'] },
        { heading: 'Lithium batteries and delivery', body: ['Lithium-ion batteries are Class 9 Dangerous Goods (UN 3480 / UN 3481) and are packed and shipped under dangerous goods rules. Delivery times are estimates only. Risk in the goods passes to you on delivery. Please inspect parcels on arrival and report visible damage within 48 hours. See our Shipping & Returns page for details.'] },
        { heading: 'Australian Consumer Law', body: ['Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and to compensation for any other reasonably foreseeable loss or damage. You are also entitled to have goods repaired or replaced if they fail to be of acceptable quality and the failure does not amount to a major failure.', 'Manufacturer warranties are provided in addition to these rights. Nothing in these terms limits your rights under the Australian Consumer Law.'] },
        { heading: 'Safety and use', body: ['Electric bikes can be dangerous. Always wear an approved helmet and protective gear, follow the manufacturer manual, and do not modify safety-critical components. Warranty and our liability do not cover damage caused by misuse, racing, modification or incorrect installation, to the extent the law allows.'] },
        { heading: 'Limitation of liability', body: ['To the extent permitted by law, our liability for breach of a non-excludable guarantee is limited, where permitted, to resupplying the goods or paying the cost of resupply or repair. We are not liable for indirect or consequential loss.'] },
        { heading: 'Privacy', body: ['We handle personal information as described in our Privacy Policy.'] },
        { heading: 'Governing law', body: ['These terms are governed by the laws of Queensland, Australia, and you submit to the non-exclusive jurisdiction of its courts.'] },
      ]}
    />
  )
}
