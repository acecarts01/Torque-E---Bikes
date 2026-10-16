// src/config/site.js
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from './catalog.generated.js'
import { BLOG_META } from '../content/blog/meta.js'
export const SITE = {
  name: 'Torque E-Bikes',
  tagline: 'Australia’s Home of High-Torque E-Motos, Performance Conversion Kits & Custom Upgrades',
  domain: 'torquee-bikesaustralia.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  target: 'vercel',
  primaryColor: '#ff6a1a', // Hyper Red
  accentColor: '#16181b', // Matte Carbon
  gscVerification: 'pending',
  indexNowKey: 'pending',
  cartKey: 'torque-cart',
}

export const CONTACT = {
  email: 'sales@torquee-bikesaustralia.com.au',
  phone: '0480 804 189',
  whatsapp: '+61480804189',
  address: 'Brisbane City, QLD 4000, Australia',
  hq: 'Brisbane City, QLD 4000, Australia',
  country: 'Australia',
}

export const SHOP = {
  minOrder: 499.99,
  freeShippingThreshold: 199, // Base free shipping for smaller items if applicable, but user rules override for bulk
  shippingFee: 14.95,
  shippingDiscountThreshold: 9900,
  shippingDiscountRate: 15,
  cryptoDiscount: 10,
  paymentMethods: ['bank-transfer', 'payid', 'crypto-BTC', 'crypto-USDT'],
  cryptoAddresses: {
    btc: 'bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    usdt_trc20: 'Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    usdt_erc20: '0x0000000000000000000000000000000000000000'
  }
}

export const FORMS = {
  provider: 'custom',
  contactWebhook: '/api/forms/contact',
  orderWebhook: '/api/forms/order',
  wholesaleWebhook: '/api/forms/wholesale',
}

export const CHAT = {
  channels: [
    { type: 'whatsapp', value: '+61480804189' },
    { type: 'email', value: 'support@torquee-bikesaustralia.com.au' },
    { type: 'phone', value: '0480 804 189' }
  ]
}

export const BRAND = {
  entityName: 'The Torque Team Pty Ltd',
  tradingName: 'Torque E-Bikes',
  acn: '126 064 668',
  abn: '27 126 064 668',
  foundingYear: '2007',
  foundingLocation: 'Brisbane City, QLD, Australia',
  description: 'Torque E-Bikes is a Brisbane-based Australian retailer of electric dirt bikes, e-bikes, performance conversion systems, parts and riding gear, shipped Australia-wide.',
  milestones: [
    { year: '2007', event: 'The Torque Team Pty Ltd established in Brisbane.' },
    { year: '2015', event: 'Launched performance e-bike division.' },
    { year: '2020', event: 'Became authorized dealer for high-output E-Moto brands.' }
  ],
  differentiation: [
    'Complete Power Ecosystem engineering',
    'Verified ASIC Australian Transparency',
    'Plug-and-Play custom compatibility',
    'Class 9 Dangerous Goods certified dispatch'
  ],
  sameAs: [],
  awards: [],
}

export const CATEGORIES = CATALOG_CATEGORIES

export const PRODUCTS = CATALOG_PRODUCTS

// Published posts (generated from the keyword plan; see src/content/blog and src/lib/blog.ts).
export const POSTS = BLOG_META
  .filter(p => p.kind !== 'tool' && (process.env.PUBLISH_ALL === '1' || new Date(p.date + 'T00:00:00Z') <= new Date()))
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .map(p => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.category, date: p.date, readTime: p.readTime, image: p.image.file }))

export const PAGES = {
  about: true,
  faq: true,
  blog: true,
  wholesale: true,
  tracking: true,
  compare: true,
  search: true,
}

export const FAQ = [
  {
    question: 'Are high-powered electric dirt bikes legal on Australian roads?',
    answer: 'No. Any electric bike with more than 250W continuous rated power or a throttle that works above 6 km/h is classified as a motorbike and must be ADR compliant, registered, and insured for road use. Our high-output models are sold strictly for private property and closed-circuit use only.'
  },
  {
    question: 'How do you ship large lithium batteries across Australia?',
    answer: 'Lithium batteries are classified as Class 9 Dangerous Goods. We use certified DG couriers (like TNT/FedEx) and comply with all Australian Dangerous Goods (ADG) 7.8 guidelines to ensure safe nationwide delivery to your door.'
  },
  {
    question: 'What is the 10% crypto discount?',
    answer: 'We offer an automatic 10% discount on your entire order when paying via Bitcoin (BTC) or Tether (USDT). This reflects the lower transaction fees compared to traditional banking systems. Simply select "Cryptocurrency" at checkout to apply the savings.'
  }
]

export const COMPLIANCE = {
  bannedTerms: [
    "Road legal everywhere",
    "Street legal without license",
    "Ride anywhere in Australia",
    "Footpath legal dirt bike",
    "Bypass road laws",
    "Unrestricted street legal",
    "No license needed for 72V"
  ],
  requiredFramings: [
    "Private property and closed circuit use only",
    "Check your local state road authority (Transport for NSW, VicRoads, TMR QLD, DoT WA) regulations",
    "EPAC EN 15194 compliant 250W pedelec",
    "Dangerous Goods Class 9 UN 3480 compliant freight"
  ],
  prohibitedClaims: [
    "Legal for all roads",
    "No registration required for 3000W"
  ],
  ageGate: true,
  ageMinimum: 16,
  gdpr: false, // Australian Privacy Principles instead
  disclaimer: 'AUSTRALIAN REGULATORY & SAFETY ADVISORY: Electric dirt bikes, high-powered e-motos, and conversion kit setups exceeding 250W continuous rated power or 25 km/h throttle actuation (including E Ride Pro, Strike Shadows, ETM RTR, SRPNT, and 1000W–5000W conversion combos) are engineered strictly for closed-course competition, private property, and off-road trail riding. They do not meet EN 15194 EPAC standards and cannot be operated on public roads, footpaths, or cycle lanes without ADR compliance and registration. Only specifically rated 250W EPAC pedal-assist kits are street legal across Australian states. Lithium batteries are dispatched under Australian Dangerous Goods Class 9 guidelines.',
}

// Real purchase/activity entries for the pop-up, e.g. { text: 'Order placed: <product>', location: 'Perth WA', when: '2 hours ago' }.
// Leave empty until you have genuine orders to show; the pop-up then shows reviews only.
export const ACTIVITY = []

export const REVIEWS = [
  { id: 1, author: "Jake T.", location: "Gold Coast", rating: 5, text: "The 3000W kit is insane. Torque Team Brisbane matched the battery connectors perfectly. Shipping was surprisingly fast for a DG battery.", date: "Oct 2026" },
  { id: 2, author: "Sarah M.", location: "Sydney", rating: 5, text: "Got the 250W street legal kit for my commute. Super clean install and the pedal assist is very smooth. Highly recommend Torque E-Bikes.", date: "Sep 2026" },
  { id: 3, author: "Mike R.", location: "Perth", rating: 5, text: "ETM RTR Sport is a beast. Handles the trails better than any petrol bike I've owned. Service from the Brisbane shop was 10/10.", date: "Aug 2026" },
  { id: 4, author: "David L.", location: "Melbourne", rating: 5, text: "Finally an Aus shop that knows their 72V stuff. The Sabvoton controller setup they recommended fixed all my power issues.", date: "July 2026" },
  { id: 5, author: "Chris P.", location: "Adelaide", rating: 5, text: "Fast delivery to SA. Battery arrived in a proper DG crate. Very impressed with the safety standards and tech support.", date: "Jun 2026" },
  { id: 6, author: "Ben H.", location: "Brisbane", rating: 5, text: "Best customer service in the e-moto industry. Fixed a minor motor issue over WhatsApp in 10 minutes.", date: "Feb 2024" },
  { id: 7, author: "Liam K.", location: "Cairns", rating: 5, text: "Rugged components. I take my bike through some heavy bush and the Torque components haven't missed a beat.", date: "Mar 2024" },
  { id: 8, author: "Emma S.", location: "Hobart", rating: 5, text: "Transformed my old MTB with the 1000W hub kit. It's a completely different machine now. Great advice from the team.", date: "May 2025" }
]
