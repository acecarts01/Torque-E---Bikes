// Refresh of /blog/bike-racks-baskets-and-trailers/ written to the blog-post rule (27 Oct 2026).
// Prices and names from the catalogue (racks-bags-and-trailers). Queensland rules checked on qld.gov.au (number plate visibility,
// updated 18 Jul 2025; e-bike rules: passengers only if the bike is made for it, and they must wear a helmet).
export const slug = 'bike-racks-baskets-and-trailers'

export const meta = {
  excerpt: 'Bike racks, baskets, panniers and trailers for e-bikes from $62, plus car racks, load limits to check and the Queensland number plate rule for carriers.',
  updated: '2026-10-27',
  focus: 'bike racks',
  secondary: ['bike rack car', 'bike racks for cars', 'bicycle rack', 'basket for the bike', 'bike with racks'],
  tags: ['basket for cycle', 'rear cycle basket', 'basket on a bicycle', 'basket for a bicycle', 'bike holder', 'bike carrier rack', 'rear basket bicycle', 'bike basket cheap', 'bicycle racks for cars', 'mtb bike rack'],
  imageAlt: 'Two e-bikes carried on a truck, the same job that bike racks do on a car',
  related: [
    { href: '/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/', name: 'Ampd Bros Ace Rear Cargo Rack', price: 99, note: 'A rear cargo rack for carrying loads.' },
    { href: '/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/', name: 'Azur Quick Release Shopper E-Bike Mesh Basket', price: 99.95, note: 'A quick-release basket for shopping.' },
    { href: '/shop/racks-bags-and-trailers/pacific-bike-trailer/', name: 'Pacific Bike Trailer', price: 299, note: 'Our lowest-priced bike trailer.' },
    { href: '/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/', name: 'Thule EuroWay G2 2 Bike Towbar Carrier', price: 759, note: 'A towbar carrier for two bikes.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Racks, baskets, panniers and trailers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'bike racks, baskets and trailers'],
      ['/shop/cargo-bikes-and-e-trikes/', 'cargo bikes'],
      ['/shop/locks-and-security/', 'bike locks'],
      ['/blog/how-to-lock-an-e-bike/', 'how to lock an e-bike'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bike racks'],
      ['/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/', 'how to choose bike racks'],
      ['/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/', 'bike rack car guide'],
    ],
  },
}

export const body = {
  intro: [
    'The right bike racks, baskets and trailers turn an e-bike into a practical vehicle for shopping, commuting and carrying equipment. Because e-bikes are heavy, any rack or trailer has to be strong and securely fitted, and the same goes for the bike rack car carriers you use to move the bike itself. Our racks, bags and trailers range starts at $62.',
    'This guide covers the main options with real prices, what to check on load limits and mounting, how to carry bikes on a car, and the Queensland rules that apply to carriers and passengers.',
  ],
  prepend: [
    {
      h: 'Bike racks, baskets and trailers: what we sell and what it costs',
      p: [
        'These are examples from our [racks, bags and trailers](/shop/racks-bags-and-trailers/) range. Always match a rack to your bike: check the mounting points, the brake type and the load limit before you order, and ask us if you are unsure.',
      ],
      table: {
        head: ['Item', 'Price', 'Use'],
        rows: [
          ['Azur Alloy Touring Carrier (disc brake compatible)', '$61.95', 'Rear carrier'],
          ['Bang Bang Crate Basket', '$80.95', 'Basket'],
          ['[Azur Quick Release Shopper E-Bike Mesh Basket](/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/)', '$99.95', 'Quick-release basket'],
          ['[Ampd Bros Ace Rear Cargo Rack](/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/)', '$99', 'Rear cargo rack'],
          ['[Fatboy Cargo Rack Rear V3](/shop/racks-bags-and-trailers/fatboy-cargo-rack-rear-v3/)', '$119', 'Rear cargo rack'],
          ['[Pacific Bike Trailer](/shop/racks-bags-and-trailers/pacific-bike-trailer/)', '$299', 'Trailer'],
          ['Cargo Deluxe Bike Trailer', '$659', 'Trailer'],
          ['[Thule EuroWay G2 2 Bike Towbar Carrier](/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/)', '$759', 'Car carrier for 2 bikes'],
          ['Car Rack EziGrip E-Rack 2 Deluxe/Foldable', '$899', 'Car carrier for e-bikes'],
        ],
      },
    },
  ],
  rename: {
    'Racks, baskets and panniers': 'Bike racks, baskets and panniers',
  },
  drop: ['Quick recap', 'A last word on racks and carriers', 'Browse racks, bags and trailers', 'Securing the load', 'Choosing panniers and bags'],
  append: [
    {
      h: 'Carrying bikes on a car: the number plate rule',
      p: [
        'A car carrier is the other half of this guide. If you carry bikes on the back of your car, the carrier can hide your number plate and lights. The Queensland Government\'s [number plate visibility page](https://www.qld.gov.au/transport/registration/numberplate/condition-visibility) says that if a vehicle accessory such as a bicycle rack blocks the view of your number plate, you are required to display an accessory number plate, and you can be fined if items block the plate.',
        'Check your own state or territory rules before you fit a carrier, and make sure the rack and load do not cover your lights or indicators. An e-bike is also much heavier than a standard bicycle, so check the carrier\'s load rating per bike, such as the rating on the [Thule EuroWay G2 towbar carrier](/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/), and remove the battery before you lift or carry the bike.',
      ],
    },
    {
      h: 'Carrying passengers and kids on a rack or trailer',
      p: [
        'Never carry a passenger on a rack unless the bike is made for it. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says you should only carry passengers if the bike is made for it, and that passengers must wear a helmet too. Use a seat or trailer designed for children, and check the weight limits of both the rack and the bike. For more on carrying loads and people, see our guide to [electric cargo bikes](/blog/electric-cargo-bikes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'Do I need an accessory number plate for a bike rack on my car?',
      a: 'In Queensland, if a bicycle rack blocks the view of your number plate you are required to display an accessory number plate, and you can be fined if items block your plate. Rules differ by state and territory, so check your own road authority before you fit a carrier.',
    },
    {
      q: 'How much is a bike trailer?',
      a: 'In our range, the Pacific Bike Trailer is $299, the Beach Deluxe Bike Trailer is $469 and the Cargo Deluxe Bike Trailer is $659. Check the load limit, the hitch compatibility with your bike and whether the trailer can carry children before you buy.',
    },
  ],
  keywords: { primary: 'bike racks', supporting: ['bike rack car', 'bike racks for cars', 'bicycle rack', 'basket for the bike', 'bike with racks'] },
}
