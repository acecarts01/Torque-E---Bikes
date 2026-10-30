// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and the helmets-and-equipment page. Neither page addresses three-wheelers specifically, so the post tells readers to check their own road authority.
// Product pages publish no motor, battery, range or load figures for the trikes, so the post claims only names, brands and prices.
export const meta = {
  id: '3-wheel-electric-bike',
  slug: '3-wheel-electric-bike',
  url: '/blog/3-wheel-electric-bike/',
  title: "3 Wheel Electric Bike: Electric Trikes in Australia",
  seoTitle: "3 Wheel Electric Bike: Electric Trikes in Australia",
  excerpt: "Choosing a 3 wheel electric bike? Compare electric trikes from $2,299, see who they suit, stability, folding and cargo options, and the legal checks.",
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: '3 wheel electric bike',
  secondary: ['3 wheel electric bicycle', 'three wheel electric bike', 'three wheel e bike', 'three wheel electric bicycle', 'electric three wheel bike'],
  tags: ['electric 3 wheel bike', '3 wheeler electric bike', 'three wheeler electric bike', '3 wheel e bikes', 'electric 3 wheeler bikes', 'electric 3 wheel bicycles adults', 'tricycle bike electric', '3 wheel e bike', '3 wheel ebike', '3 wheel electric bike australia'],
  image: {
    file: 'blog/3-wheel-electric-bike.webp',
    alt: 'Kristall EX400, Kristall EX200 and folding electric trike, a 3 wheel electric bike range',
    query: '3 wheel electric bike',
    credit: null,
  },
  related: [
    { href: '/shop/cargo-bikes-and-e-trikes/electric-folding-trike-blue/', name: 'Electric Folding Trike Blue', price: 2299, note: 'A folding electric trike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/kristall-ex200-e-trike/', name: 'Kristall EX200 E-Trike', price: 2369, note: 'A Kristall e-trike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/electric-trike-green-with-seat/', name: 'Electric Trike Green with Seat', price: 2399, note: 'An electric trike with a seat.' },
    { href: '/shop/cargo-bikes-and-e-trikes/electric-step-through-trike-grey/', name: 'Electric Step-Through Trike Grey', price: 2499, note: 'A step-through electric trike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/kristall-ex400-e-trike/', name: 'Kristall EX400 E-Trike', price: 2849, note: 'The higher-priced Kristall e-trike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/', name: 'All cargo bikes and e-trikes', note: 'Cargo bikes and electric trikes.' },
  ],
  links: {
    to: [
      ['/shop/cargo-bikes-and-e-trikes/', 'cargo bikes and e-trikes'],
      ['/blog/electric-trikes-for-adults/', 'electric trikes for adults guide'],
      ['/blog/electric-cargo-bikes/', 'electric cargo bikes guide'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
    ],
    from: [
      ['/shop/cargo-bikes-and-e-trikes/', '3 wheel electric bike buying guide'],
      ['/shop/cargo-bikes-and-e-trikes/kristall-ex400-e-trike/', 'how to choose a 3 wheel electric bike'],
      ['/shop/cargo-bikes-and-e-trikes/electric-folding-trike-blue/', 'three wheel e bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A 3 wheel electric bike stands up on its own, carries a load and needs no balancing, which suits riders who want stability. Choose by how you will ride, where you will store it and how you will charge it.',
  intro: [
    'A 3 wheel electric bike, also called an electric trike or tricycle, gives you the stability of three wheels with the help of an electric motor. You do not need to balance at low speed, you can stop without putting a foot down and many trikes carry a basket or seat for shopping. This guide explains who an electric three-wheeler suits, how the types differ, what to check on size, battery and storage and what to confirm about legal use.',
    'We compare five electric trikes in our range from $2,299 to $2,849, cover cornering, folding, step-through and cargo designs, and answer the common questions. Prices are current Torque E-Bikes prices. Rules for trikes differ by state, so check your road authority before riding on public roads.',
  ],
  sections: [
    {
      h: '3 wheel electric bikes in our range and their prices',
      p: [
        'Our [cargo bikes and e-trikes](/shop/cargo-bikes-and-e-trikes/) range includes several electric trikes. Product pages publish the brand and price but not motor, battery, range or load figures, so ask us for the maker\'s specifications and for advice on matching a trike to the rider before you order.',
      ],
      table: {
        head: ['Electric trike', 'Maker', 'Price', 'Style'],
        rows: [
          ['[Electric Folding Trike Blue](/shop/cargo-bikes-and-e-trikes/electric-folding-trike-blue/)', 'Not listed', '$2,299', 'Folding'],
          ['[Kristall EX200 E-Trike](/shop/cargo-bikes-and-e-trikes/kristall-ex200-e-trike/)', 'Kristall', '$2,369', 'E-trike'],
          ['[Electric Trike Green with Seat](/shop/cargo-bikes-and-e-trikes/electric-trike-green-with-seat/)', 'Not listed', '$2,399', 'With seat'],
          ['[Electric Step-Through Trike Grey](/shop/cargo-bikes-and-e-trikes/electric-step-through-trike-grey/)', 'Not listed', '$2,499', 'Step-through'],
          ['[Kristall EX400 E-Trike](/shop/cargo-bikes-and-e-trikes/kristall-ex400-e-trike/)', 'Kristall', '$2,849', 'E-trike'],
        ],
      },
    },
    {
      h: 'Who a three wheel electric bike suits',
      p: [
        '**Riders who want stability.** A trike does not tip over when it is stationary. That suits riders with balance concerns, joint problems or reduced confidence, as well as anyone who dislikes wobbling at low speed.',
        '**People who carry things.** A trike can carry shopping, a gardening load or a pet in a basket or a rear box. A wide platform is steadier than a two-wheel bike for this.',
        '**Older riders and those returning to cycling.** The low, step-through designs make getting on and off easier. Our [electric trikes for adults guide](/blog/electric-trikes-for-adults/) covers this group in detail.',
        '**Riders with limited space.** Folding trikes reduce the footprint for storage in a garage, a caravan or a car boot.',
        '**Short local trips.** Trikes are usually used for neighbourhood trips at moderate speed, not sporty rides. They are heavier and wider than a bike.',
      ],
    },
    {
      h: 'Three wheeler electric bike types: folding, step-through and cargo',
      ul: [
        '**Folding electric trikes.** They fold down for storage and transport. The Electric Folding Trike in our range at $2,299 is an example. Check how it folds, the weight when folded and how quickly it can be set up.',
        '**Step-through trikes.** A low frame lets you step in rather than lift a leg over. The Electric Step-Through Trike at $2,499 is designed for easy mounting.',
        '**Trikes with a seat or backrest.** A larger, supportive seat suits riders who want to sit upright and relax.',
        '**Cargo trikes.** A rear box or deck carries loads. The Kristall e-trikes are in this family; ask us about load capacity.',
        '**Delta and tadpole layouts.** Delta trikes have one wheel at the front and two at the rear, and tadpole trikes have two at the front. They handle differently, so test the layout that comes with the model.',
        '**Motor and drive.** Ask whether the motor drives the rear wheels or a single wheel, and how the assist works.',
      ],
      img: { file: 'blog/3-wheel-electric-bike-kristall-ex400.webp', alt: 'Kristall EX400 e-trike, a three wheel electric bike', w: 720, h: 540 },
    },
    {
      h: 'How a three wheel e bike rides: cornering, stability and braking',
      p: [
        'A trike does not lean like a bike. You steer it like a small vehicle, and in a corner the body tries to keep going straight, so you must slow down before turning and take corners gently. A sharp turn at speed can lift the inside wheel or tip the trike, particularly with a load on board.',
        'Stability on a slope is different too. A trike can slide sideways on a camber or a cross slope, so avoid steep side slopes and keep the load low and central. Practise in a quiet area, learn the turning circle and get used to the wider track.',
        'Braking is generally steady because you do not need to balance, but a trike with a heavy load needs a longer stopping distance. Check the brakes before each ride, and keep your speed under control.',
        'Most people find a trike easy to learn. A few outings in a car park are enough to learn the cornering, the width and how the motor responds.',
      ],
    },
    {
      h: 'Choosing an electric three-wheeler: what to check',
      ul: [
        '**Size and fit.** Check the seat height, the step-through height and the reach to the handlebar. Try the trike if you can.',
        '**Weight and storage.** A trike is heavy and wide. Check the door, garage and gate width, and how you will move it. A folding model helps.',
        '**Battery and range.** Ask for the battery capacity and the maker\'s range estimate, and consider your hills and load. See our [e bike batteries guide](/blog/e-bike-batteries/).',
        '**Removable battery.** A removable battery lets you charge indoors and cut the weight when you move the trike.',
        '**Load capacity.** Check the rider and cargo weight limits.',
        '**Brakes and parking brake.** A parking brake stops the trike rolling when you load it.',
        '**Lights and reflectors.** Add lights if the trike does not have them. See our [e-bike lights guide](/blog/e-bike-lights/) and [bicycle light guide](/blog/bicycle-light/).',
        '**Lock.** A trike is a target. See our [bike chain padlock guide](/blog/bike-chain-padlock/) and [bike alarm guide](/blog/bike-alarm/).',
      ],
    },
    {
      h: 'Rules for riding an electric trike: check your state',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) describes a legal e-bike as having a motor with a maximum continuous rated power output of 250 watts and motor assistance up to 25 km/h when pedalling, and it says bikes must carry an EN 15194 label. It does not discuss three-wheelers specifically, so ask the road authority, or us, whether a particular trike is covered as an e-bike where you live.',
        'The [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says bicycle riders must wear an approved helmet and that a bicycle needs a working brake and a bell, with lights and a reflector at night. A trike should have the same kit, and a helmet is sensible whatever the rule.',
        'Rules differ between states and between vehicle types. Product pages in our range carry the line to check your state road authority rules before riding on public roads. We confirm what we can on a model-by-model basis, so message us before you order.',
      ],
    },
    {
      h: 'Charging, battery care and storage for a trike',
      p: [
        'Charge the battery on a hard, non-flammable surface and not while you sleep or are away, which is the advice from Australian safety authorities. Let the battery cool after a ride and store it in a cool, dry place. Our [e bike battery charger guide](/blog/e-bike-battery-charger/) explains matching a charger, and our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) covers storage.',
        'A trike is wider than a bike and needs a sheltered spot. A cover protects against sun and rain, though not against theft; see our [bicycle cover guide](/blog/bicycle-cover/). If you park outside, lock the trike to a fixed object.',
      ],
    },
    {
      h: 'Accessories that make a trike more useful',
      ul: [
        '**Basket or rear box.** Check the load rating and fit. See our [bicycle basket guide](/blog/bicycle-basket/).',
        '**Mirror.** A mirror helps when you cannot easily look over your shoulder. See our [bike mirror guide](/blog/bike-mirror/).',
        '**Flag.** A visible flag on a pole helps other road users see a low vehicle.',
        '**Cover.** Keeps weather and dust off a trike parked outside.',
        '**Lights.** Front and rear lights for dusk and night.',
        '**Gloves and helmet.** Protect hands and head.',
        '**Phone mount.** A secure mount for navigation. See our [phone mounts guide](/blog/best-phone-mounts-for-e-bikes/).',
      ],
    },
    {
      h: '3 wheel electric bike mistakes to avoid',
      ul: [
        '**Cornering too fast.** A trike does not lean; slow down before the turn.',
        '**Ignoring storage.** Measure the door and garage before you buy.',
        '**Overloading.** Stay within the maker\'s load limit.',
        '**Skipping the battery check.** Ask for capacity and range.',
        '**Assuming it is legal everywhere.** Check your state rules.',
        '**Leaving it unlocked.** Trikes are valuable and easy to roll away.',
      ],
    },
    {
      h: "What to try on a test ride",
      ul: [
        "Get on and off several times to check the step-through height and the seat comfort.",
        "Ride a figure-eight in a quiet area to feel the turning circle and the steering.",
        "Brake from a moderate speed to feel how the trike stops, and try the parking brake.",
        "Check how the assist comes on, and whether it is smooth or abrupt.",
        "Try the trike with a load or a bag in the basket to feel the difference.",
        "Check how it folds, if it is a folding model, and whether you can lift the folded trike.",
        "Check the storage space: wheel it through your door and into your garage.",
      ],
    },
    {
      h: 'Which 3 wheel electric bike should you buy?',
      p: [
        'If storage is tight, the [Electric Folding Trike at $2,299](/shop/cargo-bikes-and-e-trikes/electric-folding-trike-blue/) is the folding option. For a step-in design, the [Electric Step-Through Trike at $2,499](/shop/cargo-bikes-and-e-trikes/electric-step-through-trike-grey/) is the pick, and the [Electric Trike with Seat at $2,399](/shop/cargo-bikes-and-e-trikes/electric-trike-green-with-seat/) suits relaxed riding. For a Kristall e-trike, compare the [EX200 at $2,369](/shop/cargo-bikes-and-e-trikes/kristall-ex200-e-trike/) and the [EX400 at $2,849](/shop/cargo-bikes-and-e-trikes/kristall-ex400-e-trike/).',
        'Send us your height, trip plans and storage space and we will help you choose. You can also browse the full [cargo bikes and e-trikes range](/shop/cargo-bikes-and-e-trikes/) and read our [electric trikes for adults guide](/blog/electric-trikes-for-adults/).',
      ],
    },
  ],
  faq: [
    { q: 'Are 3 wheel electric bikes stable?', a: 'Yes at low speed and when stopped, because three wheels do not need balancing. They do not lean in corners, so slow down before turning, avoid steep side slopes and keep loads low and central.' },
    { q: 'Who should buy an electric trike?', a: 'Riders who want stability, such as those with balance or joint concerns, people carrying loads, older riders and anyone returning to cycling. Folding trikes suit limited storage space.' },
    { q: 'Do electric trikes need a licence or registration?', a: 'Rules differ by state and by vehicle type. The Queensland e-bike page does not discuss three-wheelers specifically, so check your road authority, and ask us about a particular model before you order.' },
    { q: 'How heavy is an electric trike?', a: 'Trikes are heavier and wider than bikes. Ask us for the weight of the model, and consider a folding or removable-battery design if you must lift or move it.' },
    { q: 'How far does an electric trike go on a charge?', a: 'It depends on the battery, the assist level, the load, hills and the rider. Treat the maker\'s range figure as an estimate and ask us for details on the model.' },
    { q: 'Can I carry a passenger on a trike?', a: 'Only if the trike was made to carry one. Queensland says passengers can only be carried if the bike was made to carry them. Check the maker\'s instructions and your state rules.' },
  ],
  keywords: { primary: '3 wheel electric bike', supporting: ['3 wheel electric bicycle', 'three wheel electric bike', 'three wheel e bike', 'three wheel electric bicycle', 'electric three wheel bike'] },
  words: 0,
}
