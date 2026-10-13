// src/config/site.js
export const SITE = {
  name: 'TORQUE E - BIKES Australia',
  tagline: 'Australia’s Home of High-Torque E-Motos, Performance Conversion Kits & Custom Upgrades',
  domain: 'torquee-bikesaustralia.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  target: 'vercel',
  primaryColor: '#E63946', // Hyper Red
  accentColor: '#141414', // Matte Carbon
  gscVerification: 'pending',
  indexNowKey: 'pending',
  cartKey: 'torque-cart',
}

export const CONTACT = {
  email: 'sales@torquee-bikesaustralia.com.au',
  phone: '1300 000 000',
  whatsapp: '+61400000000',
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
    { type: 'whatsapp', value: '+61400000000' },
    { type: 'email', value: 'support@torquee-bikesaustralia.com.au' },
    { type: 'phone', value: '1300 000 000' }
  ]
}

export const BRAND = {
  entityName: 'THE TORQUE TEAM PTY LTD',
  acn: '126 064 668',
  abn: '27 126 064 668',
  foundingYear: '2007',
  foundingLocation: 'Brisbane City, QLD, Australia',
  description: 'TORQUE E - BIKES is an authorised Australian retailer and specialist in high-performance electric motocross and MTB conversion systems. We bridge the gap between mountain biking and motocross.',
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

export const CATEGORIES = [
  { slug: 'complete-e-motos', name: 'Complete E-Motos & Dirt Bikes', description: 'Ready-to-ride performance electric dirt bikes.', image: 'complete-bikes.webp' },
  { slug: 'conversion-kits', name: 'MTB Conversion Kits & Motors', description: 'High-torque hub and mid-drive motor systems.', image: 'kits.webp' },
  { slug: 'batteries', name: 'Batteries & Power Systems', description: 'High-capacity 52V and 72V lithium packs.', image: 'batteries.webp' },
  { slug: 'parts', name: 'Parts, Drivetrain & Cockpit', description: 'Brakes, chains, throttles and upgrades.', image: 'parts.webp' },
  { slug: 'gear', name: 'Protective Gear & Accessories', description: 'Helmets, armour and hauler systems.', image: 'gear.webp' }
]

export const PRODUCTS = [
  {
    slug: '2000w-motor-52v-battery-combo',
    name: 'Torque E-Bikes 2000W Motor & 52V Battery Combo (Free Sur-Ron Throttle Included)',
    price: 1150.00,
    category: 'conversion-kits',
    shortDescription: 'Complete high-torque 2000W brushless rear hub conversion kit paired with a 52V high-capacity lithium battery pack.',
    description: 'Transform any standard mountain bike into a powerful off-road machine. Features a 2000W high-torque brushless rear hub motor laced into a double-wall alloy rim, a high-discharge 52V lithium-ion battery with smart BMS, sine-wave controller, color LCD dashboard, and plug-and-play wiring. Comes standard with heavy-duty torque arms and a Sur-Ron style quick-twist throttle. Designed for off-road and private property use.',
    badge: 'Best Seller',
    featured: true,
    images: ['kit-2000w.webp'],
    compliance: 'off-road',
    power: '2000W',
    voltage: '52V',
    compatibility: ['MTB', 'Universal'],
    stock: 'In Stock'
  },
  {
    slug: '2026-etm-rtr-sport',
    name: '2026 ETM™ RTR SPORT Electric Dirt Bike',
    price: 4499.00,
    category: 'complete-e-motos',
    shortDescription: 'The 2026 ETM RTR Sport brings increased torque, immediate throttle response, and reinforced off-road chassis geometry.',
    description: 'The 2026 ETM RTR Sport is purpose-built for rugged Australian singletrack and motocross tracks. Boasting an upgraded high-output motor, heavy-duty suspension, responsive hydraulic disc brakes, and an aggressive off-road stance. Zero clutch, zero fuel, instantaneous electric torque out of every corner. Off-road private property use only.',
    badge: '2026 Model',
    featured: true,
    images: ['etm-rtr-sport.webp'],
    compliance: 'off-road',
    power: '5kW',
    voltage: '72V',
    compatibility: ['ETM', 'Universal'],
    stock: 'In Stock'
  },
  {
    slug: 'strike-cycles-shadow-72v',
    name: 'Strike Cycles SHADOW 72V / 7kW Electric Dirt Bike',
    price: 4300.00,
    category: 'complete-e-motos',
    shortDescription: '7000W peak electric motocross machine running a genuine 72V architecture.',
    description: 'The Strike Cycles SHADOW delivers true 72V performance. Engineered with an aggressive lightweight frame, 7kW peak powertrain, inverted front forks, high-performance coil shock, and moto-grade tyres. Uncompromising off-road capability for Australian trails and private tracks.',
    badge: 'High Output',
    featured: true,
    images: ['strike-shadow.webp'],
    compliance: 'off-road',
    power: '7kW+',
    voltage: '72V',
    compatibility: ['Strike', 'Universal'],
    stock: 'Low Stock'
  },
  {
    slug: '3000w-motor-72v-battery-combo',
    name: 'Torque E-Bikes 3000W Motor & 72V Battery Combo',
    price: 1800.00,
    category: 'conversion-kits',
    shortDescription: 'Massive 3000W rear hub motor paired with a true 72V high-discharge battery.',
    description: 'The ultimate DIY performance conversion package. Includes a 3000W high-power hub motor, massive 72V battery pack engineered for sustained high amps, programmable controller, full-color telemetry display, and reinforced torque arms to handle extreme wheel torque. Off-road use only.',
    badge: 'Extreme Power',
    featured: true,
    images: ['kit-3000w.webp'],
    compliance: 'off-road',
    power: '3000W',
    voltage: '72V',
    compatibility: ['MTB', 'Universal'],
    stock: 'In Stock'
  },
  {
    slug: 'genuine-fx-throttle',
    name: 'Genuine FX Throttle (Direct Fit Sur-Ron / Talaria / Conversions)',
    price: 270.00,
    category: 'parts',
    shortDescription: 'High-precision billet CNC throttle assembly offering linear power delivery and zero deadband.',
    description: 'Eliminate jerky power delivery with the Genuine FX Throttle. Built from CNC machined aluminum with internal ball bearings and sealed hall-effect sensors, this is the gold-standard throttle upgrade for custom conversions, Sur-Rons, and high-performance e-motos.',
    badge: 'Back in Stock',
    featured: false,
    images: ['fx-throttle.webp'],
    compliance: 'universal',
    power: 'N/A',
    voltage: 'N/A',
    compatibility: ['Sur-Ron', 'Talaria', 'Universal'],
    stock: 'In Stock'
  },
  {
    slug: '250w-street-legal-kit',
    name: '250W Street Legal EPAC Conversion Kit Combo (EN15194 Compliant)',
    price: 850.00,
    category: 'conversion-kits',
    shortDescription: '100% Australian road-legal 250W pedal-assist conversion kit.',
    description: 'Upgrade your daily commuter bike legally. Fully compliant with Australian standard EN 15194 (EPAC). Features a continuous 250W motor, smooth pedal-assist sensor (PAS), road-compliant display, and a compact frame-mounted lithium battery. Legal on public roads, shared paths, and bike lanes across NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.',
    badge: '100% Street Legal',
    featured: false,
    images: ['kit-250w.webp'],
    compliance: 'street-legal',
    power: '250W',
    voltage: '36V',
    compatibility: ['MTB', 'Commuter', 'Universal'],
    stock: 'In Stock'
  }
]

export const POSTS = [
  {
    slug: 'off-road-vs-street-legal-australia',
    title: 'Off-Road vs Street Legal: Understanding Australian E-Bike Laws',
    excerpt: 'Navigate the complex landscape of Australian road rules for electric bikes and e-motos.',
    category: 'Regulatory News',
    date: '2024-05-15',
    readTime: '6 min',
    image: 'blog-laws.webp'
  },
  {
    slug: 'diy-2000w-conversion-guide',
    title: 'DIY 2000W Conversion Guide: Step-by-Step for Australian MTBs',
    excerpt: 'Learn how to lace your motor, mount the 52V battery, and wire your torque arms for a rock-solid build.',
    category: 'Conversion Guides',
    date: '2024-08-20',
    readTime: '12 min',
    image: 'blog-diy-guide.webp'
  },
  {
    slug: 'electric-moto-maintenance-lithium-safety',
    title: 'Electric Moto Maintenance: Lithium Battery Health & Winter Storage',
    excerpt: 'Max out your battery cycle life with proper charging protocols and dangerous goods safe storage.',
    category: 'Battery Maintenance',
    date: '2024-09-10',
    readTime: '8 min',
    image: 'blog-maintenance.webp'
  },
  {
    slug: 'chain-alignment-high-torque-motors',
    title: 'Chain Alignment & Tensioning for High-Torque Mid-Drive Motors',
    excerpt: 'Prevent snapped chains and premature wear on your 3000W+ builds with these pro alignment tips.',
    category: 'Battery Maintenance',
    date: '2024-10-05',
    readTime: '7 min',
    image: 'blog-chain.webp'
  }
]

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
