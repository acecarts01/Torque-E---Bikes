// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Higher-volume variants such as "auto bicycle rack" and "bike rack for vehicle" are US-style phrasing and are not used; "car bike rack" is the natural high-volume Australian term.
// Competitor review 29 Oct 2026 (BikeExchange buyer guide, Ivanhoe Cycles, Roofracks Galore, Carsales): weaknesses are no Queensland plate and light rules, UK pages quoted for Australian buyers, no weight arithmetic for e-bikes, no mention of the vehicle's tow ball limit in one place, no warning about unlocking the battery. Plan: official Queensland rules, weight sums, honest note on what we stock.
// Sources opened 29 Oct 2026: Queensland Government "Transporting bicycles" and "Accessory number plates and how to apply".
// Product pages publish only names and prices, so the post claims only names, brands and prices. Rack ratings must be checked with the maker.
export const meta = {
  id: 'car-bike-rack',
  slug: 'car-bike-rack',
  url: '/blog/car-bike-rack/',
  title: 'Car Bike Rack: Tow Bar vs Roof Rack for E-Bikes',
  seoTitle: 'Car Bike Rack: Tow Bar vs Roof Rack for E-Bikes',
  excerpt: 'Choosing a car bike rack for an e-bike? Compare tow bar and roof racks, check Queensland number plate and light rules, do the weight sums and see our $229 and $759 racks.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '11 min',
  focus: 'car bike rack',
  secondary: ['bike rack for car', 'bike holder for car', 'bike rack on the car', 'bike mount for car', 'bike rack for vehicles'],
  tags: ['bike car rack', 'bicycle rack car', 'cycle rack for car', 'car bicycle rack', 'car roof rack bike', 'bike rack for cars', 'car bike carriers', 'mountain bike car rack', 'e bike racks for cars', 'bike car carrier'],
  image: {
    file: 'blog/car-bike-rack.webp',
    alt: 'Thule EuroWay G2 towbar carrier and Fatboy Longboard rack, a car bike rack for e-bikes',
    query: 'car bike rack',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/', name: 'Thule EuroWay G2 2 Bike Towbar Carrier', price: 759, note: 'A two-bike towbar carrier.' },
    { href: '/shop/racks-bags-and-trailers/fatboy-longboard-bike-rack/', name: 'Fatboy Longboard Bike Rack', price: 229, note: 'A Fatboy bike rack.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Racks, panniers and trailers.' },
    { href: '/shop/locks-and-security/', name: 'Locks and security', note: 'Lock the bikes once they are on the rack.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/bike-racks-baskets-and-trailers/', 'bike racks, baskets and trailers guide'],
      ['/blog/bicycle-trailers/', 'bicycle trailers buying guide'],
      ['/blog/how-to-lock-an-e-bike/', 'how to lock an e-bike'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'car bike rack buying guide'],
      ['/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/', 'bike rack for car: towbar sums'],
      ['/shop/racks-bags-and-trailers/fatboy-longboard-bike-rack/', 'bike holder for car'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A car bike rack must carry the weight of your bike, fit your vehicle and leave the number plate and lights visible. For e-bikes, a tow bar rack is the usual answer, and the weight sums come first.',
  intro: [
    'A car bike rack lets you drive the bike to the trail, the beach or a new commute. The three main styles are tow bar racks, roof racks and boot or hatch racks, and the right one depends on your vehicle, the weight of the bike and how many bikes you carry. E-bikes change the sums, because they are much heavier than pedal bikes.',
    'This guide compares rack styles, shows how to do the weight maths, explains the Queensland number plate and light rules and lists the racks we stock. Prices are current Torque E-Bikes prices. For trailers and panniers, see our [bike racks, baskets and trailers guide](/blog/bike-racks-baskets-and-trailers/).',
  ],
  sections: [
    {
      h: 'Car bike rack styles compared',
      p: [
        'Each rack style has a typical use. The ratings below are general, so always check the rating printed on the rack you buy and the limits for your vehicle.',
      ],
      table: {
        head: ['Style', 'Where it mounts', 'Strength', 'Watch for'],
        rows: [
          ['Tow bar rack', 'Tow ball or hitch at the rear', 'Easiest to load; usual choice for heavy e-bikes', 'Tow ball nose weight; plate and lights'],
          ['Roof rack', 'Roof bars', 'Keeps the boot free', 'Low load limits and lifting the bike overhead'],
          ['Boot or hatch rack', 'Straps on the rear door', 'Low cost; no tow bar needed', 'Weight limits and paint contact'],
          ['Internal carry', 'Inside the vehicle', 'Out of sight and weather', 'Space; battery handling'],
        ],
      },
    },
    {
      h: 'Why a tow bar rack suits most e-bikes',
      p: [
        'Retailer guides in Australia agree that tow bar racks are the usual choice for e-bikes, because roof racks have low weight limits and lifting a heavy bike overhead is hard. Standard racks often handle lighter bikes, and racks rated for e-bikes are built for more weight, so look for an explicit e-bike rating in the listing.',
        'A tow bar rack also keeps the bike low and behind the car, where it is easier to load and creates less wind resistance than a roof load. Our [Thule EuroWay G2 2 Bike Towbar Carrier at $759](/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/) is a two-bike towbar carrier. The product page publishes only the name and price, so confirm the load rating, the bike count and your tow bar fit with us before you order.',
        'The limit that catches people out is the tow ball nose weight. The rack and the bikes together must stay within what the tow bar and the vehicle allow, so check the vehicle handbook and the tow bar label.',
      ],
      img: { file: 'blog/car-bike-rack-thule.webp', alt: 'Thule EuroWay G2 towbar carrier, a bike rack for car use', w: 720, h: 540 },
    },
    {
      h: 'Do the weight sums before you buy',
      ul: [
        '**Find the bike weight.** Our product pages do not publish weights, so use the maker\'s specification for your e-bike.',
        '**Add the battery.** If you leave the battery on, it counts. Many riders remove it for transport.',
        '**Add accessories.** Panniers, baskets, bags and child seats add weight and change the shape.',
        '**Check the rack rating.** The rating per bike and the total must cover your load.',
        '**Check the tow bar and vehicle.** The tow ball nose weight limit applies to the rack and bikes together.',
        '**Count the number of bikes.** Two e-bikes weigh far more than two pedal bikes.',
        '**Leave a margin.** Do not load a rack to its exact limit.',
      ],
    },
    {
      h: 'Queensland number plate and light rules',
      p: [
        'The Queensland Government\'s [transporting bicycles page](https://www.qld.gov.au/transport/vehicle-safety/transporting-bicycles) says your rear number plate must stay visible from 20 metres, within 45 degrees to the left, right and above. If a carrier hides it, you can remove the carrier, reposition the bike or fit an accessory plate to the back of the carrier. The carrier or bikes must also not block brake lights, the centre brake light or indicators; if they do, extra rear lights must be fitted to the bikes, in pairs.',
        'The [accessory number plates page](https://www.qld.gov.au/transport/registration/numberplate/accessory-plates) says you must display an accessory plate if a bicycle rack blocks the view of your number plate, that only one accessory plate is issued per vehicle and that it supplements your standard plate rather than replacing it. The transporting bicycles page adds that the plate must be issued by the Department of Transport and Main Roads and be no more than 1.3 metres above the ground.',
        'The same page sets load limits: the distance from the rear axle to the rearmost point of the load must not exceed 60 per cent of the wheelbase, and loads extending beyond 1.2 metres past the rear need warning flags or lights. It also says carriers should be removed or repositioned when not in use. Other states have their own rules, so check your road authority.',
      ],
    },
    {
      h: 'Car bike racks we stock',
      p: [
        'We stock two racks. Product pages publish the name, brand and price only, so ask us about ratings, bike counts and vehicle fit before you order.',
      ],
      table: {
        head: ['Rack', 'Brand', 'Price', 'Type'],
        rows: [
          ['[Thule EuroWay G2 2 Bike Towbar Carrier](/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/)', 'Thule', '$759', 'Two-bike towbar carrier'],
          ['[Fatboy Longboard Bike Rack](/shop/racks-bags-and-trailers/fatboy-longboard-bike-rack/)', 'Fatboy', '$229', 'Bike rack'],
        ],
      },
    },
    {
      h: 'Loading an e-bike on a rack safely',
      ul: [
        '**Remove the battery first.** It reduces the weight and protects the battery from vibration and weather. Handle and store it as set out in our [e-bike batteries guide](/blog/e-bike-batteries/).',
        '**Load the heaviest bike closest to the car.** This reduces the leverage on the tow bar.',
        '**Secure the wheels and frame.** Use every strap and clamp the rack provides.',
        '**Stop the pedals and handlebars from spinning.** A free crank or bar can hit another bike.',
        '**Check the plate and lights.** Walk behind the car and check both are visible.',
        '**Lock the bikes to the rack.** Use a lock whenever you leave the car. See our [bike chain padlock guide](/blog/bike-chain-padlock/).',
        '**Recheck after a few kilometres.** Straps settle and bikes shift.',
      ],
    },
    {
      h: 'Roof racks and boot racks: when they make sense',
      p: [
        'A roof rack works for light pedal bikes and for riders who need a free boot. For an e-bike, roof limits are usually too low and lifting a heavy bike overhead risks injury and damage. If you do use a roof rack, check the roof load rating in the vehicle handbook as well as the rack.',
        'A boot or hatch rack is the lowest-cost option and needs no tow bar. It suits light bikes and occasional use, but check the rating, protect the paint and check that the straps do not cover the number plate or lights. Neither style is a good fit for heavy bikes, so choose a tow bar rack if you carry an e-bike often.',
      ],
    },
    {
      h: 'How many bikes do you need to carry?',
      p: [
        'Count the bikes you carry on a normal trip, not the most you could ever carry. A one-bike rack is light and cheap. A two-bike rack such as our Thule carrier suits a couple or a rider with a spare bike, and every extra bike adds weight, length and leverage on the tow bar. E-bikes multiply that effect, so a rack that holds three pedal bikes may not hold two e-bikes.',
        'Think about the gap between the bikes too. Handlebars, pedals and mudguards can rub on a neighbouring bike, so look for a rack that spaces the bikes apart or has padded cradles. If you carry bikes of different sizes, check the rack can hold a small frame and a large frame at the same time.',
      ],
    },
    {
      h: 'Driving with a rack: visibility, reversing and parking',
      ul: [
        '**Rear vision.** Loaded bikes can block the rear window and the reversing camera. Check mirrors before you set off.',
        '**Reversing sensors.** A rack can trigger sensors or hide obstacles. Reverse slowly with a spotter.',
        '**Ground clearance.** A rack can scrape on steep driveways and speed humps. Take them at an angle.',
        '**Car parks and garages.** Check the height with bikes loaded, and mind low roofs if bikes sit above the boot line.',
        '**Speed and wind.** Drive more gently with bikes on the back. Strong wind and braking loads act on the straps.',
        '**Opening the boot.** Check whether the rack tilts or folds so you can reach the boot with bikes on.',
        '**Stop and check.** Pull over after the first few kilometres and recheck every strap.',
      ],
    },
    {
      h: 'Looking after the rack',
      p: [
        'A rack lives in the weather, so rinse off salt and grit after a beach trip and check the bolts and straps for wear. Store it dry and off the vehicle when you do not need it. Queensland says carriers should be removed or repositioned when not in use, and a stored rack lasts longer and avoids the plate and light questions altogether.',
        'Keep the manual and any keys in the glovebox. If a strap frays, replace it rather than tying a knot, because a failed strap at speed puts a heavy bike on the road.',
      ],
    },
    {
      h: 'Car bike rack mistakes to avoid',
      ul: [
        '**Guessing the weight.** Look up the e-bike weight and the rack rating.',
        '**Ignoring tow ball limits.** The rack and bikes must stay within the tow bar and vehicle limits.',
        '**Hiding the number plate.** In Queensland, use an accessory plate if a carrier blocks the plate.',
        '**Blocking the lights.** Fit extra lights if the bikes cover brake lights or indicators.',
        '**Leaving the battery on.** It adds weight and can be damaged or stolen.',
        '**Leaving the rack on the car.** Queensland says carriers should be removed or repositioned when not in use.',
        '**Skipping a lock.** Bikes on a rack are easy targets.',
      ],
    },
    {
      h: 'Which car bike rack should you choose?',
      p: [
        'If you carry one or two e-bikes regularly, a tow bar rack such as the [Thule EuroWay G2 at $759](/shop/racks-bags-and-trailers/thule-euroway-g2-2-bike-towbar-carrier/) is the style to start with, provided your vehicle has a suitable tow bar. The [Fatboy Longboard Bike Rack at $229](/shop/racks-bags-and-trailers/fatboy-longboard-bike-rack/) is the lower-cost option; ask us about its rating and fit. Browse the full [racks, bags and trailers range](/shop/racks-bags-and-trailers/) for panniers and trailers.',
        'Tell us your vehicle, your tow bar and your bike, and we will check the rack suits before you order. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What is the best car bike rack for an e-bike?', a: 'A tow bar rack is the usual choice, because roof racks have low load limits and e-bikes are heavy. Choose a rack with an explicit e-bike rating and check your tow bar and vehicle limits.' },
    { q: 'Does a bike rack need a number plate in Queensland?', a: 'If the carrier or bikes block the rear number plate, Queensland requires you to remove the carrier, reposition the bike or fit an accessory plate issued by the Department of Transport and Main Roads. The plate must be visible from 20 metres.' },
    { q: 'Can I carry an e-bike on a roof rack?', a: 'Rarely. Roof racks usually have low load limits and lifting a heavy e-bike overhead is hard. Check the rack rating and the vehicle roof limit, and prefer a tow bar rack for heavy bikes.' },
    { q: 'Should I remove the battery before driving?', a: 'Yes if the bike allows it. It reduces the weight on the rack and protects the battery from vibration and weather. Handle and store lithium batteries as the maker advises.' },
    { q: 'What if the bikes block my brake lights?', a: 'Queensland says the carrier or bikes must not block brake lights, the centre brake light or indicators. If they do, extra rear lights must be fitted to the bikes, in pairs.' },
    { q: 'Do you sell car bike racks?', a: 'Yes. We stock the Thule EuroWay G2 2 Bike Towbar Carrier at $759 and the Fatboy Longboard Bike Rack at $229. Ask us about ratings and vehicle fit before you order.' },
  ],
  keywords: { primary: 'car bike rack', supporting: ['bike rack for car', 'bike holder for car', 'bike rack on the car', 'bike mount for car', 'bike rack for vehicles'] },
  words: 0,
}
