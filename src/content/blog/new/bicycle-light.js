// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government helmets-and-equipment page (white front light, red rear light, red reflector, brake, bell) and the bicycle road rules page (lights visible from 200 m, reflector from 50 m).
// Product pages publish only a lumen figure in the Alien2 rear light name (100 lm); other light figures are not published, so the post claims only names, brands and prices.
export const meta = {
  id: 'bicycle-light',
  slug: 'bicycle-light',
  url: '/blog/bicycle-light/',
  title: 'Bicycle Light: How to Choose Front and Rear Bike Lights',
  seoTitle: 'Bicycle Light: How to Choose Front and Rear Bike Lights',
  excerpt: 'Choosing a bicycle light? Compare front and rear bike lights from $27.95, check Queensland night rules, learn how to mount and charge lights, and ride visible.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'bicycle light',
  secondary: ['rear bike lamp', 'bicycle back light', 'bicycle rear light', 'bicycle headlight', 'bicycle headlights'],
  tags: ['bike back light', 'rear bike lights', 'bike rear light', 'cycle front light', 'bicycle tail light', 'rear light bike', 'led bike light', 'bike bar light', 'bike rear lights', 'rear bicycle light'],
  image: {
    file: 'blog/bicycle-light.webp',
    alt: 'Blinder 1300 front light, Azur Halo and Azur Alien2 rear light, a bicycle light set',
    query: 'bicycle light',
    credit: null,
  },
  related: [
    { href: '/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', name: 'Azur Alien2 100 lm USB Rechargeable Rear Light', price: 27.95, note: 'The lowest-priced light in our range.' },
    { href: '/shop/lights-and-horns/azur-performance-halo/', name: 'Azur Performance Halo', price: 75.95, note: 'An Azur performance light.' },
    { href: '/shop/lights-and-horns/blinder-1300-front-bike-light/', name: 'Blinder 1300 Front Bike Light', price: 149, note: 'A front bike light.' },
    { href: '/shop/lights-and-horns/knog-blinder-1300-blinder-r150/', name: 'Knog Blinder 1300/BLINDER R150', price: 219, note: 'A front and rear light set from Knog.' },
    { href: '/shop/lights-and-horns/', name: 'All lights and horns', note: 'Headlights, tail lights and horns.' },
  ],
  links: {
    to: [
      ['/shop/lights-and-horns/', 'lights and horns'],
      ['/blog/e-bike-lights/', 'e-bike lights guide'],
      ['/blog/bike-panniers/', 'bike panniers buying guide'],
      ['/blog/bicycle-trailers/', 'bicycle trailers buying guide'],
    ],
    from: [
      ['/shop/lights-and-horns/', 'bicycle light buying guide'],
      ['/shop/lights-and-horns/blinder-1300-front-bike-light/', 'how to choose a bicycle headlight'],
      ['/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', 'rear bike lamp: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A good bicycle light does two jobs: it shows you the road and it makes you visible. Choose a front light you can see by, a rear light drivers notice and mount both where the load cannot hide them.',
  intro: [
    'A bicycle light is the cheapest safety upgrade you can make, and after dark it is a legal requirement. The right set combines a front light that lights the road and a rear light that makes you stand out, both with batteries that last your ride. This guide helps you choose a bicycle light, explains the Queensland night rules, compares the lights in our range from $27.95 and covers mounting, charging and care.',
    'We cover front and rear lights, the difference between being seen and seeing, brightness and run time, mounting positions and the common mistakes. Prices are current Torque E-Bikes prices. For e-bike-specific wiring and battery-powered lights, see our [e-bike lights guide](/blog/e-bike-lights/).',
  ],
  sections: [
    {
      h: 'Bicycle lights in our range and their prices',
      p: [
        'Our [lights and horns](/shop/lights-and-horns/) range includes front and rear lights for bikes and e-bikes. Product pages publish the brand and price but not run time or beam details (the Azur rear light states 100 lumens in its name), so ask us for the maker\'s specifications before you order.',
      ],
      table: {
        head: ['Light', 'Brand', 'Price', 'Type'],
        rows: [
          ['[Azur Alien2 100 lm USB Rechargeable Rear Light](/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/)', 'Azur', '$27.95', 'Rear, USB rechargeable'],
          ['[Azur Performance Halo](/shop/lights-and-horns/azur-performance-halo/)', 'Azur', '$75.95', 'Performance light'],
          ['[Blinder 1300 Front Bike Light](/shop/lights-and-horns/blinder-1300-front-bike-light/)', 'Blinder', '$149', 'Front'],
          ['[Knog Blinder 1300/BLINDER R150](/shop/lights-and-horns/knog-blinder-1300-blinder-r150/)', 'Knog', '$219', 'Front and rear set'],
        ],
      },
    },
    {
      h: 'What the Queensland rules say about bike lights',
      p: [
        'The Queensland Government\'s [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says that at night a bicycle needs a white headlight, a red tail-light and a red rear reflector, and that the bicycle must have a working brake and a bell.',
        'The Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) is more specific: at night or in poor visibility you need a white front light visible from 200 metres, a red rear light visible from 200 metres and a red reflector visible from 50 metres when a vehicle\'s headlights shine on it.',
        'Rules differ between states, so check your road authority. Lights that meet the letter of the rule but are dim or badly aimed will not protect you, so aim for lights that are bright and well placed.',
      ],
    },
    {
      h: 'Seeing and being seen: front light and rear light roles',
      p: [
        '**A front light** does two things. It makes oncoming drivers, riders and pedestrians aware of you, and, if it is bright enough, it lights the path so you can see potholes and debris. On a lit street, a modest light is enough to be seen. On a dark path or road, you need a brighter light that throws a beam far enough ahead to react.',
        '**A rear light** is about being seen from behind. It has to catch the eye of a driver approaching at speed. A flashing mode draws attention in daylight and at dusk, while a steady mode is easier for drivers to judge distance at night. Many riders use a flashing rear light in the day and a steady or slow pulse at night.',
        '**Side visibility** matters at junctions. Wheel reflectors, reflective tape on the frame and reflective clothing make you visible from the side, where front and rear lights cannot be seen.',
      ],
    },
    {
      h: 'Choosing a bicycle headlight: brightness, beam and run time',
      ul: [
        '**Brightness.** Lumens measure light output. Lower outputs suit being seen on lit streets, and higher outputs suit unlit paths and fast riding. The Blinder 1300 name points to its output, so check the maker\'s specification for lumens and run time.',
        '**Beam pattern.** A focused beam throws light far ahead, while a wide beam lights the sides. A cut-off beam avoids dazzling oncoming riders.',
        '**Run time.** Check the run time at the brightness you will use, not just the lowest setting. A light that dies halfway home is no help.',
        '**Modes.** Steady, flashing and low-power modes extend run time. A light with a battery gauge or low-battery warning is a bonus.',
        '**Mounting.** A secure mount that fits your handlebar and survives bumps. Check the clamp suits your bar diameter.',
        '**Charging.** USB rechargeable lights are convenient. Check the port is covered and the charging time suits your routine.',
        '**Weather resistance.** Look for a rating that handles rain and spray.',
      ],
      img: { file: 'blog/bicycle-light-blinder-1300.webp', alt: 'Blinder 1300 front bicycle light', w: 720, h: 540 },
    },
    {
      h: 'Choosing a rear bike lamp: visibility from behind',
      ul: [
        '**Output and visibility.** A brighter rear light is seen from further away. Many rear lights are 100 lumens or more; the Azur Alien2 is listed at 100 lm.',
        '**Modes.** Flashing and steady modes, and a daytime flash mode, make you more visible.',
        '**Mounting position.** The seatpost is the usual spot. If panniers or a bag cover it, mount the light on the rack or the back of the bag. See our [bike panniers guide](/blog/bike-panniers/).',
        '**Angle.** Aim the light level, not at the ground or the sky. Check from behind the bike.',
        '**Battery or USB.** A USB rechargeable light saves buying batteries. Charge it regularly.',
        '**Trailers and loads.** If you tow a trailer, fit a rear light on the trailer. Our [bicycle trailers guide](/blog/bicycle-trailers/) covers visibility.',
        '**Spares.** Carry a small backup light on long rides.',
      ],
    },
    {
      h: 'Mounting your bike lights the right way',
      p: [
        'Mount the front light on the handlebar where the beam is not blocked by cables, a bag or a basket. Aim it so the beam hits the road a few metres ahead rather than shining into oncoming eyes. Mount the rear light on the seatpost, the seat stays or the rack, and make sure it faces straight back.',
        'Check the lights after you load the bike. Panniers, baskets and child seats can hide a rear light, and a basket can block a front beam. If so, move the light. Our [bicycle basket guide](/blog/bicycle-basket/) explains keeping lights clear.',
        'Test them in the dark. Walk around the bike and ask a friend to stand 20 metres away to check the lights are visible from the front, the rear and the sides. Tighten the mounts so they do not rotate on bumps.',
      ],
    },
    {
      h: 'Charging, batteries and care',
      ul: [
        '**Charge before each ride.** Make it a habit; a flat light is useless.',
        '**Use the right charger.** Use the cable supplied and a standard USB source.',
        '**Do not charge unattended.** Lithium batteries are safe when used properly, but follow the maker\'s advice and the safety guidance in our [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/).',
        '**Keep lights dry.** Close the charging port cover after use.',
        '**Clean the lens.** A dirty lens cuts the light.',
        '**Replace worn mounts.** A loose mount lets the light rotate.',
        '**Remove lights when parked.** Thieves take removable lights. See our [bike alarm guide](/blog/bike-alarm/).',
      ],
    },
    {
      h: 'E-bike lights, horns and off-road lights',
      p: [
        'Many e-bikes can power lights from the main battery. A wired headlight and tail light always have power and can be switched with the bike. Check compatibility of voltage and connector, and ask us if you are unsure. Our [e-bike lights guide](/blog/e-bike-lights/) covers this in detail.',
        'Some lights in our range, such as the NiteRider Lumina and the 79Bike headlight, are listed for off-road and private property use only, because they are not designed to meet road rules. Use lights that meet the Queensland rules for night riding on roads and paths.',
        'A bell or similar warning device is required on a bicycle under the Queensland rules. Our range includes a 79Bike horn, but it is listed as off-road and private property use only, so a bell is what you need on the road.',
      ],
    },
    {
      h: 'Bicycle light mistakes to avoid',
      ul: [
        '**Relying on a dim light.** Being technically legal is not the same as being seen.',
        '**Hiding the rear light.** Check that bags, jackets and trailers do not cover it.',
        '**Aiming too high.** A light pointed up dazzles other road users.',
        '**Forgetting to charge.** Charge before every night ride.',
        '**No backup.** Carry a small spare light on long rides.',
        '**Skipping the reflector.** Queensland requires a red rear reflector as well as lights.',
      ],
    },
    {
      h: "Lights for commuting, trails and touring",
      p: [
        "A city commuter on lit streets needs lights that make them visible more than lights that show the road, so a compact front light and a bright rear light are usually enough. Choose USB rechargeable lights and charge them weekly.",
        "A rider on unlit paths or country roads needs a brighter front light to see surface hazards in time, and a rear light that cuts through the dark. A second front light is a smart backup if one fails.",
        "A touring rider covers long distances and needs run time above all. Look for lights with long battery life at a usable brightness, carry a spare power bank for USB lights and check the mounts on rough roads.",
      ],
    },
    {
      h: 'Which bicycle light should you buy?',
      p: [
        'For a low-cost rear light, the [Azur Alien2 at $27.95](/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/) is the entry option. The [Azur Performance Halo at $75.95](/shop/lights-and-horns/azur-performance-halo/) is a step up, the [Blinder 1300 front light at $149](/shop/lights-and-horns/blinder-1300-front-bike-light/) suits brighter riding and the [Knog Blinder 1300/R150 set at $219](/shop/lights-and-horns/knog-blinder-1300-blinder-r150/) gives you a front and rear pair.',
        'Send us your bike, your routes and whether you ride unlit paths, and we will suggest a set. You can also browse the full [lights and horns range](/shop/lights-and-horns/).',
      ],
    },
  ],
  faq: [
    { q: 'What lights does a bike need at night in Queensland?', a: 'A white front light visible from 200 metres, a red rear light visible from 200 metres and a red rear reflector visible from 50 metres, plus a working brake and a bell, according to the Queensland Government.' },
    { q: 'How bright should a bicycle headlight be?', a: 'For lit streets, a modest light that makes you visible is enough. For unlit paths and fast riding, you need a brighter light with a beam that lets you see obstacles in time. Check the maker\'s lumens and run time.' },
    { q: 'Should a rear bike light flash or stay steady?', a: 'Flashing draws attention, especially by day and at dusk. A steady or slow-pulse mode is easier for drivers to judge at night. Many riders switch by conditions.' },
    { q: 'Where should I mount my bike lights?', a: 'The front light on the handlebar and the rear light on the seatpost, rack or back of a bag. Make sure panniers, baskets and trailers do not hide them.' },
    { q: 'Are USB rechargeable bike lights any good?', a: 'Yes. They save buying batteries and are easy to charge from a USB port. Check run time, charge before each ride and keep the charging port cover closed.' },
    { q: 'Can I use off-road lights on the road?', a: 'Lights listed as off-road and private property use only are not designed for road rules. Use lights that meet the Queensland requirements for night riding on roads and paths.' },
  ],
  keywords: { primary: 'bicycle light', supporting: ['rear bike lamp', 'bicycle back light', 'bicycle rear light', 'bicycle headlight', 'bicycle headlights'] },
  words: 0,
}
