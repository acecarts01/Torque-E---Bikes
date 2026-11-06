// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Marin 2026 Alpine Trail E1 page (Bosch Gen 5 CX 750 W / 120 Nm, 800 Wh, 170 mm fork, 160 mm rear, mixed wheels, alloy frame); Polygon 2026 Collosus TE0 page (160 mm fork, 150 mm ACX carbon frame, Bosch CX 750 W peak / 100 Nm, 800 Wh, 29-inch, 2.6 in max tyre, 25 km/h assist in Australia); Polygon Tambora AE page (electric gravel bike, Bosch Performance Line Sprint, 400 Wh, 45c, 120 kg, assist up to 45 km/h); Queensland Government electric bicycle rules (updated 2 Nov 2026).
// The Polygon Tambora AE-N is an electric gravel bike, not a mountain bike. Polygon lists assist up to 45 km/h for the Tambora AE, which exceeds the Queensland limit, so buyers are told to confirm the assist limit and compliance label of the AE-N. Marin figures are for the 2026 model; the model year of our bikes must be confirmed.
export const meta = {
  id: 'marin-polygon-e-bike',
  slug: 'marin-polygon-e-bike',
  url: '/blog/marin-polygon-e-bike/',
  title: 'Marin Mountain Bike and Polygon E-Bikes: Alpine Trail E1',
  seoTitle: 'Marin Mountain Bike and Polygon E-Bikes: Alpine Trail E1',
  excerpt: 'Choosing a Marin mountain bike or a Polygon e-bike? Compare the Alpine Trail E, Collosus TE0 and Tambora AE-N from $3,609 to $10,919, with maker figures and Queensland rules.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'marin mountain bike',
  secondary: ['bicycle marin', 'polygon mountain bike', 'marin mtb', 'marin bikes mtb', 'marin alpine trail'],
  tags: ['polygon bikes', 'polygon bicycle', 'mtb polygon', 'marin bike', 'marin bikes alpine trail', 'polygon cycles australia', 'polygonbikes', 'marin bikes aus', 'polygon e bike', 'marin bicycles australia'],
  image: {
    file: 'blog/marin-polygon-e-bike.webp',
    alt: 'Marin mountain bike and Polygon e-bikes: Marin Alpine Trail E1, Polygon Collosus TE 0 and Polygon Tambora AE-N',
    query: 'marin mountain bike',
    credit: null,
  },
  related: [
    { href: '/shop/electric-mountain-bikes/marin-alpine-trail-e1/', name: 'Marin Alpine Trail E1', price: 7219, note: 'A long-travel Marin e-MTB.' },
    { href: '/shop/electric-mountain-bikes/marin-alpine-trail-e2/', name: 'Marin Alpine Trail E2', price: 9019, note: 'A higher-specification Alpine Trail E.' },
    { href: '/shop/electric-mountain-bikes/polygon-collosus-te-0/', name: 'Polygon Collosus TE 0', price: 7309, note: 'A carbon Polygon e-MTB.' },
    { href: '/shop/electric-mountain-bikes/polygon-tambora-ae-n/', name: 'Polygon Tambora AE-N', price: 5599, note: 'An electric gravel bike.' },
    { href: '/shop/electric-mountain-bikes/', name: 'All electric mountain bikes', note: 'Marin, Polygon and other e-MTBs.' },
  ],
  links: {
    to: [
      ['/shop/electric-mountain-bikes/', 'electric mountain bikes'],
      ['/blog/enduro-electric-mountain-bike/', 'enduro bikes guide'],
      ['/blog/gravel-bikes-for-sale/', 'bikes for gravel guide'],
      ['/blog/mountain-bikes-for-sale/', 'mountain bikes for sale'],
    ],
    from: [
      ['/shop/electric-mountain-bikes/', 'Marin mountain bike'],
      ['/shop/electric-mountain-bikes/marin-alpine-trail-e1/', 'Marin mtb: how it compares'],
      ['/shop/electric-mountain-bikes/polygon-collosus-te-0/', 'Polygon mountain bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A Marin mountain bike like the Alpine Trail E is a long-travel aluminium e-MTB, and Polygon offers a carbon e-MTB and an electric gravel bike. Our Marin and Polygon e-bikes run from $3,609 to $10,919; confirm the exact specification with us.',
  intro: [
    'Marin and Polygon are two brands that give e-MTB riders a different kind of value. A Marin mountain bike is known for long-travel, trail-focused designs, and Polygon builds carbon e-MTBs and e-bikes at prices that undercut many bigger brands. If you are comparing them, the question is which suits your riding and how much you want to spend.',
    'This guide covers the Marin and Polygon e-bikes in our range, shows the figures that Marin and Polygon publish for the Alpine Trail E1, the Collosus TE0 and the Tambora AE, explains an important point about the Tambora\'s assist speed, and sets out the Queensland e-bike rules. Prices are in Australian dollars as listed on 6 November 2026, and we only state what the makers publish.',
  ],
  sections: [
    {
      h: 'Marin mountain bike and Polygon e-bikes in our range: prices',
      p: [
        'We list four Marin e-bikes and two Polygon e-bikes. The Marin range is the [Marin Lombard E1](/shop/commuter-and-urban-e-bikes/marin-lombard-e1/) at $3,609, the [Marin Alpine Trail E1](/shop/electric-mountain-bikes/marin-alpine-trail-e1/) at $7,219, the [Marin Alpine Trail E2](/shop/electric-mountain-bikes/marin-alpine-trail-e2/) at $9,019 and the Marin Alpine Trail at $10,919. The Polygon range is the [Polygon Tambora AE-N](/shop/electric-mountain-bikes/polygon-tambora-ae-n/) at $5,599 and the [Polygon Collosus TE 0](/shop/electric-mountain-bikes/polygon-collosus-te-0/) at $7,309.',
        'Our product pages publish the name and price only, so ask us for the specification and model year of the exact bike. The table summarises the range.',
      ],
      table: {
        head: ['Model', 'Price', 'Type', 'Best for'],
        rows: [
          ['Marin Lombard E1', '$3,609', 'Urban e-bike', 'Commuting and city riding'],
          ['Polygon Tambora AE-N', '$5,599', 'Electric gravel bike', 'Roads and gravel'],
          ['Marin Alpine Trail E1', '$7,219', 'Long-travel e-MTB', 'Trail and enduro riding'],
          ['Polygon Collosus TE 0', '$7,309', 'Carbon trail e-MTB', 'Trail riding'],
          ['Marin Alpine Trail E2', '$9,019', 'Long-travel e-MTB, higher spec', 'Trail and enduro riding'],
          ['Marin Alpine Trail', '$10,919', 'Long-travel e-MTB, top of the Marin range', 'Trail and enduro riding'],
        ],
      },
    },
    {
      h: 'Marin Alpine Trail E1: what Marin publishes',
      p: [
        'Marin\'s [2026 Alpine Trail E1 page](https://marinbikes.com/products/2026-alpine-trail-e1-usa) lists a Bosch Gen 5 Performance Line CX motor rated at 750 W and 120 Nm, an 800 Wh removable battery, a 170 mm fork and 160 mm of rear travel, mixed wheels with a 29-inch front and 27.5-inch rear and a Series 4 aluminium frame. It lists TRP DHR EVO Comp brakes with 200 mm rotors.',
        'Those are figures for the 2026 model, and earlier years used different motors and batteries, so confirm the exact specification of the bike we supply. A Marin mountain bike like this is a long-travel trail bike at an aluminium price, which is why it suits riders who want capability without paying for carbon. Our [enduro bikes guide](/blog/enduro-electric-mountain-bike/) explains how trail and enduro travel differ.',
      ],
    },
    {
      h: 'Polygon Collosus TE0: a carbon trail e-MTB',
      img: { file: 'blog/marin-polygon-e-bike-polygon-collosus-te-0.webp', alt: 'Polygon Collosus TE0 carbon trail e-MTB', w: 720, h: 540 },
      p: [
        'Polygon\'s [Collosus TE0 page](https://www.polygonbikes.com/2026-collosus-te0-electric-mtb/) lists a Rockshox Lyrik Ultimate fork with 160 mm of travel and an ACX carbon e-trail frame with 150 mm of travel, a Bosch Performance Line CX motor with 750 W peak power and 100 Nm of torque, an 800 Wh removable Bosch battery, 29-inch wheels and a maximum tyre size of 2.6 inches. It says motor assistance goes up to 25 km/h in Europe and Australia.',
        'That is a strong specification for $7,309, and it is one reason Polygon is worth a look: carbon frames and good suspension at a price below many bigger brands. Because specifications change by model year, ask us to confirm the details of the exact Collosus we supply, including its weight and size availability.',
      ],
    },
    {
      h: 'Polygon Tambora AE-N: an electric gravel bike, with an assist-speed warning',
      img: { file: 'blog/marin-polygon-e-bike-polygon-tambora-ae-n.webp', alt: 'Polygon Tambora AE-N electric gravel bike', w: 720, h: 540 },
      p: [
        'The Polygon Tambora is not a mountain bike. Polygon\'s [Tambora AE page](https://www.polygonbikes.com/tambora-ae/) calls it an electric gravel bike with a carbon frame, a Bosch Performance Line Sprint motor, a 400 Wh battery, tyre clearance up to 45c and a maximum load of 120 kg. It lists assist up to 45 km/h with 55 Nm of torque.',
        'That assist figure matters. The Queensland rules allow assistance only up to 25 km/h on a legal e-bike, and a bike that assists up to 45 km/h is a different class that is not a legal e-bike on Queensland paths. Polygon\'s page does not say what our AE-N variant is limited to, so ask us to confirm its assist limit and compliance label before you buy it for public paths. Our [bikes for gravel guide](/blog/gravel-bikes-for-sale/) covers gravel e-bikes in more detail.',
      ],
    },
    {
      h: 'Marin Lombard E1: Marin for the city',
      p: [
        'The Marin Lombard E1 at $3,609 is the urban option in the Marin range. It suits commuters who want a recognised brand, and it is the lowest-priced Marin we list. Our product page publishes the name and price only, so ask us for the motor, battery and frame details.',
        'For city riding, check lights, mudguards, a rear rack and a lock. See our [e bike Brisbane guide](/blog/e-bike-brisbane/) for Queensland rules and TransLink limits, and our [commuter and urban e-bikes](/shop/commuter-and-urban-e-bikes/) range for alternatives.',
      ],
    },
    {
      h: 'Marin or Polygon: which suits you?',
      ul: [
        '**Long-travel trail riding at an alloy price:** the Marin Alpine Trail E1 at $7,219.',
        '**Carbon frame and strong suspension for the money:** the Polygon Collosus TE 0 at $7,309.',
        '**Higher-spec Marin:** the Alpine Trail E2 at $9,019 or the Alpine Trail at $10,919.',
        '**Roads and gravel:** the Polygon Tambora AE-N at $5,599, after we confirm its assist limit.',
        '**City commuting:** the Marin Lombard E1 at $3,609.',
      ],
    },
    {
      h: 'Aluminium Marin or carbon Polygon: what changes on the trail',
      p: [
        'The Marin Alpine Trail E1 uses an aluminium frame and the Polygon Collosus TE0 uses carbon, and that choice affects weight, feel and cost. Carbon can save weight and damp vibration, and it allows frame shapes that are hard in aluminium. Aluminium is tougher against knocks, easier to repair and cheaper to make, which is why a long-travel alloy bike can offer more suspension for the money.',
        'On an e-bike the motor and battery dominate the weight, so a carbon frame saves less than it would on a regular bike. The suspension, geometry, brakes and tyres matter more to how the bike rides than the frame material does. If you are choosing between the two, ride them or compare the specifications and decide which set of parts suits your trails, rather than choosing on material alone.',
      ],
    },
    {
      h: 'Battery, charging and safety gear for a long-travel e-MTB',
      p: [
        'Both Marin and Polygon publish an 800 Wh battery for the bikes opened for this guide, which gives a good day of riding for most riders, but range varies a lot with terrain, weight, assist and temperature. Plan a margin, and ask us whether a smaller or larger battery option exists for the exact bike. Charge with the charger supplied, on a hard surface away from flammable items, and never while you sleep or are out.',
        'A helmet that meets the standard is required, and aggressive riding calls for a full-face helmet; see our [full face helmet guide](/blog/full-face-mtb-helmet/). Our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range includes the Hidrop Helmet at $279, the 79Bike Protective Armour at $189 and the 79Bike Off-Road Goggles at $119. A strong lock matters too; see our [how to lock an e-bike guide](/blog/how-to-lock-an-e-bike/).',
      ],
    },
    {
      h: 'Queensland rules for a Marin or Polygon e-bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) (updated 2 November 2026) say a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, assistance that stops above 25 km/h and a throttle limited to starting up to 6 km/h, and must meet EN 15194 and display a compliance label. The page lists mountain bikes as an example of a legal e-bike and cites mountain bike trails as a recreational riding area.',
        'From 31 August 2026 riders must be 16 and hold a valid driver licence, with exemptions for supervised riders and recreational riding areas, and riders must always wear a helmet. We confirm the compliance label of the exact bike before you pay. Lithium batteries are Class 9 dangerous goods for freight, which is why we confirm delivery details with you first.',
      ],
    },
    {
      h: 'Buying a Marin or Polygon online from Brisbane',
      p: [
        'People search for Marin bikes in Australia and Polygon cycles in Australia to find stock and prices. We are based in Brisbane, ship Australia-wide and confirm freight and delivery details with you before you pay. Message the team on WhatsApp with your height, inside leg and riding plans, and we will suggest a model and frame size.',
        'Payment is by bank transfer, PayID or crypto, with a 10% crypto discount. Ask us for the model year, the size availability and what is included, and we will confirm them before you pay.',
      ],
    },
    {
      h: 'What to check before you buy a Marin or Polygon e-bike',
      ul: [
        '**Model year.** Specifications change between years; confirm the exact bike.',
        '**Frame size.** Check the size chart and your inside leg.',
        '**Battery capacity.** Ask whether it is the larger or smaller option.',
        '**Assist limit and label.** Confirm 25 km/h, 250 W rated and EN 15194, especially for the Tambora.',
        '**Weight.** Check you can lift it onto a rack; see our [tow bar and bike rack guide](/blog/tow-bar-bike-rack/).',
        '**Brakes and tyres.** Match them to your terrain.',
        '**Service.** Ask who services the motor and where parts come from.',
      ],
    },
  ],
  faq: [
    { q: 'Which Marin e-bikes do you sell?', a: 'We list the Marin Lombard E1 at $3,609, the Alpine Trail E1 at $7,219, the Alpine Trail E2 at $9,019 and the Alpine Trail at $10,919. Our product pages publish the name and price only, so ask us for the exact specification and model year.' },
    { q: 'How much travel does the Marin Alpine Trail E1 have?', a: 'Marin lists a 170 mm fork and 160 mm of rear travel on the 2026 Alpine Trail E1, with a Bosch Gen 5 CX motor and an 800 Wh battery. Earlier model years differ, so we confirm the exact bike with you before you pay.' },
    { q: 'Is the Polygon Tambora a mountain bike?', a: 'No. Polygon describes the Tambora AE as an electric gravel bike with a carbon frame and tyre clearance up to 45c. Its page lists assist up to 45 km/h, so we confirm the assist limit and compliance label of the AE-N before you buy for public paths.' },
    { q: 'What does the Polygon Collosus TE0 offer?', a: 'Polygon lists a 160 mm Rockshox Lyrik fork, 150 mm of rear travel on an ACX carbon frame, a Bosch Performance Line CX motor and an 800 Wh battery, with 29-inch wheels and assist up to 25 km/h in Australia. It is $7,309 here.' },
    { q: 'Are Marin and Polygon e-bikes legal in Queensland?', a: 'A compliant e-bike with a 250 watt rated motor, assistance that stops above 25 km/h and an EN 15194 label is legal. We confirm the label of the exact bike before you pay. Riders must wear a helmet, and from 31 August 2026 must be 16 with a licence unless an exemption applies.' },
  ],
  keywords: { primary: 'marin mountain bike', supporting: ['bicycle marin', 'polygon mountain bike', 'marin mtb', 'marin bikes mtb', 'marin alpine trail'] },
  words: 0,
}
