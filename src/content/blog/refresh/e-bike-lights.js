// Refresh of /blog/e-bike-lights/ written to the blog-post rule (27 Oct 2026).
// Lights category: 9 products (catalogue). Rule from qld.gov.au "Helmets and equipment" (white headlight, red tail-light, red rear reflector at night; page last updated 26 Jan 2020).
export const slug = 'e-bike-lights'

export const meta = {
  title: 'Bike Lamp and E-Bike Lights: How to Choose Front and Rear',
  seoTitle: 'Bike Lamp and E-Bike Lights: Front and Rear Guide',
  excerpt: 'Bike lamp and e-bike lights guide: front and rear lights from $27.95, brightness, mounting, USB vs wired, and what Queensland requires at night.',
  updated: '2026-10-27',
  focus: 'bike lamp',
  secondary: ['bike front light', 'front bike light', 'front bike lights', 'lights for bikes', 'cycling lights'],
  tags: ['bicycle bike lights', 'bike lights bicycle', 'bike bicycle light', 'bike light bikes', 'lights on a bicycle', 'bike light front', 'bike with lights', 'bikes lights', 'bike lights light', 'bike headlights'],
  imageAlt: 'Bicycle handlebars with a phone and lights attached, a bike lamp setup for night riding',
  related: [
    { href: '/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', name: 'Azur Alien2 100 lm USB Rechargeable Rear Light', price: 27.95, note: 'Our lowest-priced light: a USB-rechargeable rear light.' },
    { href: '/shop/lights-and-horns/azur-performance-halo/', name: 'Azur Performance Halo', price: 75.95, note: 'Azur light.' },
    { href: '/shop/lights-and-horns/blinder-1300-front-bike-light/', name: 'Blinder 1300 Front Bike Light', price: 149, note: 'A front bike light.' },
    { href: '/shop/lights-and-horns/niterider-lumina-1200-boost-led-rechargeable-headlight/', name: 'NiteRider Lumina 1200 Boost LED Rechargeable Headlight', price: 169, note: 'A rechargeable LED headlight.' },
    { href: '/shop/lights-and-horns/', name: 'All lights and horns', note: '9 products.' },
  ],
  links: {
    to: [
      ['/shop/lights-and-horns/', 'e-bike lights and horns'],
      ['/shop/locks-and-security/', 'bike locks'],
      ['/blog/commuter-e-bikes/', 'commuter ebike guide'],
      ['/blog/how-to-lock-an-e-bike/', 'how to lock an e-bike'],
    ],
    from: [
      ['/shop/lights-and-horns/', 'bike lamp and e-bike lights guide'],
      ['/shop/lights-and-horns/blinder-1300-front-bike-light/', 'how to choose a bike lamp'],
      ['/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', 'bike lamp guide'],
    ],
  },
}

export const body = {
  intro: [
    'A good bike lamp makes you visible to other road users and lets you see the path. On an e-bike you travel faster and further than on a normal bike, so lights matter more. Our lights and horns range starts at $27.95 for a USB-rechargeable rear light, and front lights run to $219.',
    'This guide covers brightness, mounting, power and the choice between USB and wired lights, shows real prices, and sets out what Queensland requires you to carry at night.',
  ],
  prepend: [
    {
      h: 'Bike lamp and light prices from our range',
      p: [
        'These are the lights in our [lights and horns](/shop/lights-and-horns/) range. The listings give limited detail, so ask us for brightness, mounting and compatibility with your bike before you order.',
      ],
      table: {
        head: ['Light', 'Price', 'Use'],
        rows: [
          ['[Azur Alien2 100 lm USB Rechargeable Rear Light](/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/)', '$27.95', 'Rear light, USB rechargeable'],
          ['[Azur Performance Halo](/shop/lights-and-horns/azur-performance-halo/)', '$75.95', 'Light'],
          ['79Bike Headlight', '$93.95', 'Headlight for 79Bike off-road bikes'],
          ['Fatboy Headlight (V1 Scrambler / Harlem)', '$139', 'Headlight'],
          ['[Blinder 1300 Front Bike Light](/shop/lights-and-horns/blinder-1300-front-bike-light/)', '$149', 'Front light'],
          ['[NiteRider Lumina 1200 Boost LED Rechargeable Headlight](/shop/lights-and-horns/niterider-lumina-1200-boost-led-rechargeable-headlight/)', '$169', 'Rechargeable LED headlight'],
          ['Fatboy Headlight (Bagus)', '$179', 'Headlight'],
          ['Knog Blinder 1300 / Blinder R150', '$219', 'Front and rear lights'],
        ],
      },
    },
  ],
  drop: ['Quick recap', 'Browse lights and horns', 'Choosing the right front light'],
  append: [
    {
      h: 'What the law requires: bike lights at night in Queensland',
      p: [
        'The Queensland Government\'s [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says that at night you need a white headlight, a red tail-light and a red rear reflector to comply with the rules. A steady, non-flashing headlight is recommended to light the road or path ahead and to be seen, and flashing tail-lights are recommended because they are more noticeable. It also says LED lights use the least power and are reliable, and that riders who regularly travel at night should carry spare batteries or secondary lighting.',
        'It also says every bike must have at least one working brake and a bell, horn or other warning device, and you must have a red rear reflector. The page can change, so check the current rule with your own state road authority.',
        'An e-bike must also meet the e-bike rules themselves. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says riders follow the bicycle rules, must always wear a helmet, and must give way to pedestrians on footpaths and shared paths, so good lights and a horn are part of riding responsibly.',
      ],
    },
    {
      h: 'Powering lights from the bike or from the battery',
      p: [
        'Some e-bikes can power lights from the main battery, which means one less thing to charge. Others use USB-rechargeable lights, such as the Azur Alien2 above. Whichever you choose, keep the batteries charged and carry a backup if you ride at night often. For the wider commuting set-up see our [commuter ebike guide](/blog/commuter-e-bikes/) and [how to lock an e-bike](/blog/how-to-lock-an-e-bike/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'What lights do I need on a bike at night?',
      a: 'The Queensland Government says you need a white headlight, a red tail-light and a red rear reflector at night. It recommends a steady front light and a flashing tail-light, and carrying spare batteries or secondary lighting if you ride at night regularly. Rules vary by state, so check yours.',
    },
    {
      q: 'How much is a bike lamp?',
      a: 'In our range, lights start at $27.95 for the Azur Alien2 USB rechargeable rear light, with front lights such as the Blinder 1300 at $149 and the NiteRider Lumina 1200 Boost at $169, and the Knog Blinder 1300 set at $219. Ask us what suits your bike and riding.',
    },
  ],
  keywords: { primary: 'bike lamp', supporting: ['bike front light', 'front bike light', 'front bike lights', 'lights for bikes', 'cycling lights'] },
}
