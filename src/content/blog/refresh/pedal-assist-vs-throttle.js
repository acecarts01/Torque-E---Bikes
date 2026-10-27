// Refresh of /blog/pedal-assist-vs-throttle/ written to the blog-post rule (27 Oct 2026).
// Throttle kit and display prices from the catalogue. Rules checked 27 Oct 2026: qld.gov.au (throttle only up to 6 km/h; throttle-only bikes are illegal
// devices; after-market conversion kits not compliant with EN 15194) and Transport for NSW (500W now, 250W from 1 Mar 2029; throttle-only cuts out at 6 km/h;
// software restriction does not make a bike legal). Our bikes above 250W are sold for off-road and private property use only.
export const slug = 'pedal-assist-vs-throttle'

export const meta = {
  title: 'Pedal Assist Electric Bike vs Throttle: Which Is Legal?',
  seoTitle: 'Pedal Assist Electric Bike vs Throttle: Which Is Legal?',
  excerpt: 'Pedal assist electric bike vs throttle: how each delivers power, the 6 km/h throttle limit in Queensland and NSW, and throttle kits from $85.',
  updated: '2026-10-27',
  focus: 'pedal assist electric bike',
  secondary: ['pedal assist ebike', 'pedal assist bicycle', 'pedal assist bicycles', 'electric pedal assist bike', 'pedal assist e bike'],
  tags: ['ebike pedal assist', 'electric assist bike', 'pedal assist', 'electric pedal bike', 'pedal assist electric bicycles', 'electric assist bicycle', 'pedal ebikes', 'pedal assist electric bicycle', 'electric bike pedal assist', 'electric bike pedal'],
  imageAlt: 'Black bicycle handlebar with the controls of a pedal assist electric bike',
  related: [
    { href: '/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/', name: 'Ampd Bros Thumb Throttle Kit', price: 85, note: 'A thumb throttle kit.' },
    { href: '/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/', name: 'Ampd Bros Twist Throttle Kit', price: 99, note: 'A twist throttle kit.' },
    { href: '/shop/controls-grips-and-pedals/display-colour-lcd/', name: 'Display (Colour LCD)', price: 129, note: 'A colour LCD display.' },
    { href: '/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', name: 'DYU C6 Electric Bike', price: 849, note: 'Our lowest-priced commuter e-bike. Ask us about its assist system.' },
    { href: '/shop/controls-grips-and-pedals/', name: 'All controls, grips and pedals', note: '12 products.' },
  ],
  links: {
    to: [
      ['/shop/controls-grips-and-pedals/', 'throttles and controls'],
      ['/electric-bikes/', 'electric bikes'],
      ['/blog/off-road-vs-street-legal-australia/', 'legal electric bike rules'],
      ['/blog/e-bike-grips-pedals-and-handlebar-controls/', 'bicycle pedals, grips and controls'],
    ],
    from: [
      ['/shop/controls-grips-and-pedals/', 'pedal assist electric bike vs throttle'],
      ['/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/', 'pedal assist electric bike or throttle'],
      ['/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/', 'how pedal assist and throttle differ'],
    ],
  },
}

export const body = {
  intro: [
    'A pedal assist electric bike adds motor power as you pedal, while a throttle e-bike adds power when you twist or press a throttle. Some bikes offer both. The difference affects how the bike feels, how far it goes and how Australian rules treat it, and throttle kits in our range start at $85.',
    'This guide explains both systems, what the rules say in Queensland and NSW, and what to check before you add a throttle.',
  ],
  prepend: [
    {
      h: 'Pedal assist electric bike or throttle: the rules in two states',
      p: [
        'The rules are tightening, and they differ by state. This table sets out what two state governments publish, so you can see the pattern. Always check your own road authority.',
      ],
      table: {
        head: ['Rule', 'Queensland', 'NSW'],
        rows: [
          ['Motor power', '250W maximum continuous', '500W maximum continuous now; 250W from 1 March 2029'],
          ['Pedal assist', 'Up to 25 km/h, then stops', 'Up to 25 km/h, then stops'],
          ['Throttle only', 'Only up to 6 km/h to help you start', 'Throttle-only cuts out at 6 km/h'],
          ['Standard', 'EN 15194 compliance label', 'EN 15194 recommended; required from 1 March 2029'],
          ['Software limits', 'A locked high-power bike is still illegal', 'Illegal even if restricted by app or switch'],
        ],
      },
    },
  ],
  drop: ['Quick recap'],
  append: [
    {
      h: 'What the government pages say about pedal assist and throttles',
      p: [
        'The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike must be pedal powered with motor assistance up to 25 km/h, with throttle control only up to 6 km/h to help you start moving, and a motor of no more than 250 watts. It lists bikes that only use a throttle, with no pedalling required, among illegal devices on public paths and roads, and says after-market conversion kits are not compliant with EN 15194.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) says road-legal e-bikes must have a maximum continuous rated power of 500 watts (250 watts from 1 March 2029), a throttle-only function that cuts out at 6 km/h, and a motor that provides no power above 25 km/h. It says a bike that exceeds those limits is illegal even if the power or speed is restricted by an app, switch or code, and recommends choosing a bike that complies with EN 15194.',
        'Our bikes above 250W are sold for off-road and private property use only. If you want a throttle for private property, see our [bicycle pedals, grips and controls guide](/blog/e-bike-grips-pedals-and-handlebar-controls/) for kits and fitting, and our guide to [legal electric bike rules](/blog/off-road-vs-street-legal-australia/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'Is a pedal assist electric bike legal everywhere in Australia?',
      a: 'A pedal assist e-bike that meets your state\'s limits can be ridden on public roads and paths, but the limits differ: Queensland allows 250W continuous power, NSW allows 500W until 1 March 2029 and 250W after, and both cut assistance at 25 km/h. Ask us for the motor rating and compliance label.',
    },
    {
      q: 'How much is an e-bike throttle kit?',
      a: 'In our range, the Ampd Bros thumb throttle kit is $85 and the twist throttle kit is $99, with a colour LCD display at $129. Check the rules for where you ride first: Queensland and NSW both allow throttle-only power only up to 6 km/h on legal e-bikes.',
    },
  ],
  keywords: { primary: 'pedal assist electric bike', supporting: ['pedal assist ebike', 'pedal assist bicycle', 'pedal assist bicycles', 'electric pedal assist bike', 'pedal assist e bike'] },
}
