// Refresh of /blog/e-bike-tyres-and-tubes/ written to the blog-post rule (27 Oct 2026).
// Wheels, tyres and tubes category: 8 products, $11.95 to $299 (catalogue). Sources checked 27 Oct 2026: Park Tool "Tire and Tube Removal and Installation"
// (valve types, bead check, soapy water not grease) and Park Tool "Tubeless Tire Removal and Installation" (sealant, valve core, inflate to label maximum).
export const slug = 'e-bike-tyres-and-tubes'

export const meta = {
  excerpt: 'Bike tyre and tube guide for e-bikes: how to read tyre sizes, choose tubes and valves, tubeless basics, and prices for tubes, wheels and tyres from $27.95.',
  updated: '2026-10-27',
  focus: 'bike tyre',
  secondary: ['tyres for bikes', 'bike tires', 'mountain bike tyres', 'bicycle tyre', 'tyres bikes'],
  tags: ['road bicycle tyres', 'tyre of bicycle', 'tyres for a bike', 'cycle tyre', 'e bike tyres', 'cycling tire', 'mtb tyre', 'best bicycle tires for road', 'best road bike tires', 'mtb road tyres'],
  imageAlt: 'Close-up of a worn bicycle tyre, a bike tyre that is ready to be replaced',
  related: [
    { href: '/shop/wheels-tyres-and-tubes/tube-schrader-20-x3-50-5-0-48mm/', name: 'Tube Schrader 20"x3.50"-5.0" 48mm', price: 27.95, note: 'A fat-tyre inner tube with a 48mm Schrader valve.' },
    { href: '/shop/wheels-tyres-and-tubes/fat-bike-wheel/', name: 'Fat Bike Wheel', price: 149, note: 'A fat bike wheel.' },
    { href: '/shop/wheels-tyres-and-tubes/fatboy-front-wheel-assembly-20x4-thru-axle-v2-bagus-all-v3-models/', name: 'Fatboy Front Wheel Assembly 20x4', price: 139, note: 'Thru-axle front wheel for Fatboy V2 Bagus and V3 models.' },
    { href: '/shop/wheels-tyres-and-tubes/fatboy-rear-wheel-assembly-20x4-with-rim-holes-for-v1-v2-and-v3/', name: 'Fatboy Rear Wheel Assembly 20x4', price: 179, note: 'Rear wheel for Fatboy V1, V2 and V3.' },
    { href: '/shop/wheels-tyres-and-tubes/', name: 'All wheels, tyres and tubes', note: '8 products.' },
  ],
  links: {
    to: [
      ['/shop/wheels-tyres-and-tubes/', 'wheels, tyres and tubes'],
      ['/shop/care-tools-and-hydration/', 'puncture repair tools'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e bike guide'],
      ['/blog/e-bike-and-dirt-bike-brakes/', 'bicycle brake pads guide'],
    ],
    from: [
      ['/shop/wheels-tyres-and-tubes/', 'bike tyre guide'],
      ['/shop/wheels-tyres-and-tubes/tube-schrader-20-x3-50-5-0-48mm/', 'how to choose a bike tyre and tube'],
      ['/shop/wheels-tyres-and-tubes/fat-bike-wheel/', 'bike tyre sizes explained'],
    ],
  },
}

export const body = {
  intro: [
    'A bike tyre is the only thing connecting your bike to the ground, and e-bike tyres carry extra weight and torque. Matching the size and valve type, and keeping the pressure right, improves safety, grip and range. Tubes in our range start at $27.95 and complete wheels at $139.',
    'This guide covers how to read tyre sizes, choose tubes and valves, understand tubeless set-ups and spot when to replace tyres, with real prices and verified workshop advice.',
  ],
  prepend: [
    {
      h: 'Bike tyre, tube and wheel prices from our range',
      p: [
        'Our [wheels, tyres and tubes](/shop/wheels-tyres-and-tubes/) range has 8 products. Match any tyre, tube or wheel to your bike\'s exact size and valve type, and ask us if you are unsure.',
      ],
      table: {
        head: ['Product', 'Price', 'Use'],
        rows: [
          ['Sur-Ron Ultra Bee/Storm Bee 18" Wheel Rim Band', '$11.95', 'Off-road only'],
          ['[Tube Schrader 20"x3.50"-5.0" 48mm](/shop/wheels-tyres-and-tubes/tube-schrader-20-x3-50-5-0-48mm/)', '$27.95', 'Fat-tyre tube'],
          ['79Bike Inner Tube', '$38.95', '79Bike (off-road only)'],
          ['[Fatboy Front Wheel Assembly 20x4](/shop/wheels-tyres-and-tubes/fatboy-front-wheel-assembly-20x4-thru-axle-v2-bagus-all-v3-models/)', '$139', 'Fatboy V2 Bagus and V3'],
          ['[Fat Bike Wheel](/shop/wheels-tyres-and-tubes/fat-bike-wheel/)', '$149', 'Wheel'],
          ['79Bike Tyre', '$179', '79Bike (off-road only)'],
          ['[Fatboy Rear Wheel Assembly 20x4](/shop/wheels-tyres-and-tubes/fatboy-rear-wheel-assembly-20x4-with-rim-holes-for-v1-v2-and-v3/)', '$179', 'Fatboy V1, V2 and V3'],
        ],
      },
    },
  ],
  drop: ['Quick recap', 'Products and related guides', 'Choosing tyres for your riding', 'Tubeless and puncture protection'],
  append: [
    {
      h: 'Valves, bead seating and fitting a tyre: what Park Tool advises',
      p: [
        'Park Tool\'s guide to [tire and tube removal and installation](https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation) describes the common valves. A Schrader valve is about 8 mm across with an internal spring plunger, and a Presta valve is about 6 mm and needs its locknut unthreaded before air can enter or leave. Before you fit a tyre, check the inside of the casing and the rim cavity for sharp objects, damaged rim strips and protruding spokes.',
        'The guide also says to inflate the tube just enough to hold its shape before it goes inside the tyre, then inflate to full pressure and check with a gauge, and to inspect both sides for proper bead seating. A stuck bead can be eased with soapy water, but never grease or oil. For pressure, use the markings printed on the tyre sidewall as your limit, and keep a note of what works for your weight and riding.',
      ],
    },
    {
      h: 'Tubeless tyres: what to know before you switch',
      p: [
        'Park Tool\'s guide to [tubeless tire mounting and repair](https://www.parktool.com/en-int/blog/repair-help/tubeless-tire-mounting-and-repair) says to confirm the rim and tyre are tubeless compatible, wipe the bead seat clean, add the amount of sealant listed on the tyre label and make sure the valve is secure, with a removable core if you use the injection method. The sealant needs time to set, which can take hours or even days, and the tyre should be set to your desired pressure once the wheel holds air consistently.',
        'Tubeless is a good fit for riders who want fewer punctures, but it adds set-up work. For fat-tyre bikes see our [fat tyre e bike guide](/blog/fat-tyre-e-bikes/), and remember that good tyres are only half of stopping: see our guide to [bicycle brake pads](/blog/e-bike-and-dirt-bike-brakes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much does a bike tyre and tube cost?',
      a: 'In our range, a fat-tyre inner tube such as the Tube Schrader 20"x3.50"-5.0" is $27.95, and complete wheels start at $139, with the Fat Bike Wheel at $149. Match the size and valve type to your bike before you order, and ask us if you are unsure.',
    },
    {
      q: 'Can I use grease to seat a stuck tyre bead?',
      a: 'No. Park Tool says to use a lubricant such as soapy water on a stuck bead, and not grease or oil. Check both sides of the tyre for proper bead seating after inflating, and if a molding line bulges upward, deflate immediately and reseat the tyre.',
    },
  ],
  keywords: { primary: 'bike tyre', supporting: ['tyres for bikes', 'bike tires', 'mountain bike tyres', 'bicycle tyre', 'tyres bikes'] },
}
