// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government bicycle road rules page (loads, lights, bell) and the Queensland helmets-and-equipment page.
// Product pages publish no capacities or materials, so the post claims only names, brands, prices and the litre figure in the Basil crate name.
export const meta = {
  id: 'bicycle-basket',
  slug: 'bicycle-basket',
  url: '/blog/bicycle-basket/',
  title: 'Bicycle Basket: How to Choose a Front or Rear Bike Basket',
  seoTitle: 'Bicycle Basket: How to Choose a Front or Rear Bike Basket',
  excerpt: 'Choosing a bicycle basket? Compare crate and mesh baskets from $80.95, learn how front and rear baskets change handling, and load your bike safely.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '9 min',
  focus: 'bicycle basket',
  secondary: ['bike basket for back', 'front bike basket', 'bike baskets', 'bike basket front', 'bike baskets front'],
  tags: ['basket with bike', 'cycle with basket', 'bicycle front basket', 'bicycle with a basket', 'bikebasket', 'basket bicycle front', 'cycle front basket', 'front basket bike', 'basket bike front', 'cycle rear basket'],
  image: {
    file: 'blog/bicycle-basket.webp',
    alt: 'Bang Bang crate basket, Azur mesh basket and Basil crate, a bicycle basket range',
    query: 'bicycle basket',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/bang-bang-crate-basket/', name: 'Bang Bang Crate Basket', price: 80.95, note: 'A crate-style basket from Fatboy.' },
    { href: '/shop/racks-bags-and-trailers/basil-bicycle-crate-medium-29-5l-black/', name: 'Basil Bicycle Crate Medium 29.5L (Black)', price: 80.95, note: 'A 29.5 litre crate.' },
    { href: '/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/', name: 'Azur Quick Release Shopper E-Bike Mesh Basket', price: 99.95, note: 'A quick-release mesh shopper basket.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Baskets, panniers, trailers and covers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/bike-racks-baskets-and-trailers/', 'bike racks, baskets and trailers guide'],
      ['/blog/bike-panniers/', 'bike panniers buying guide'],
      ['/blog/commuter-e-bikes/', 'commuter e-bikes guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bicycle basket buying guide'],
      ['/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/', 'how to choose a front bike basket'],
      ['/shop/racks-bags-and-trailers/bang-bang-crate-basket/', 'bike baskets: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bicycle basket is the simplest way to carry a load, but where you mount it changes how the bike steers, so choose the position and size to match what you carry.',
  intro: [
    'A bicycle basket is an open carrier on the front handlebar or the rear rack that holds shopping, a bag, a jacket or a small pet carrier you can see and reach. It costs less than panniers and takes seconds to load. This guide explains how front and rear baskets differ, how to match a basket to your bike and how to load it so the bike stays stable.',
    'We compare the baskets in our range from $80.95, cover mounting and fit, set out what the Queensland Government says about loads and lights, and answer common questions. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Bicycle basket options and prices',
      p: [
        'Our [racks, bags and trailers](/shop/racks-bags-and-trailers/) range includes three baskets and crates. Product pages publish the brand and price, so ask us to confirm size and mounting for your bike before you order.',
      ],
      table: {
        head: ['Basket', 'Brand', 'Price', 'Style'],
        rows: [
          ['[Bang Bang Crate Basket](/shop/racks-bags-and-trailers/bang-bang-crate-basket/)', 'Fatboy', '$80.95', 'Crate basket'],
          ['[Basil Bicycle Crate Medium 29.5L (Black)](/shop/racks-bags-and-trailers/basil-bicycle-crate-medium-29-5l-black/)', 'Basil', '$80.95', 'Crate, 29.5 litres'],
          ['[Azur Quick Release Shopper E-Bike Mesh Basket](/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/)', 'Azur', '$99.95', 'Quick-release mesh shopper'],
        ],
      },
    },
    {
      h: 'Front bike basket or rear: which position suits you',
      p: [
        '**A front bike basket** sits on or above the handlebar. You see the load, you can drop in a bag in a second and a small pet or a bunch of flowers is within reach. The catch is steering: weight on the bars makes the bike feel heavier and slower to turn, and a heavy front basket can make the front wheel flop to one side at low speed.',
        '**A rear basket**, mounted on a rack or over the back wheel, keeps the weight low and behind the steering. The bike feels more natural, and you can carry more. You cannot see the load, and it is harder to reach from the saddle.',
        '**A bike basket for the back** suits heavier loads such as groceries and school bags, while a front basket suits light items you want to see and grab. Many commuters use both: keys, phone and wallet in front, heavier items behind.',
        'If you want a fully enclosed, waterproof carry, panniers are better; see our [bike panniers guide](/blog/bike-panniers/). For the full comparison of racks, baskets and trailers, read our [guide to bike racks, baskets and trailers](/blog/bike-racks-baskets-and-trailers/).',
      ],
    },
    {
      h: 'Crate, wicker, mesh or wire: choosing basket material',
      ul: [
        '**Crate style.** A rigid plastic crate such as the Basil 29.5L or the Bang Bang crate holds its shape, takes odd-shaped loads and is easy to clean. It does not collapse when empty.',
        '**Mesh baskets.** A mesh shopper like the Azur quick-release model is light and lets water drain. A quick-release mount lets you carry it into the shop like a bag.',
        '**Wicker and wire baskets.** These suit city bikes and a classic look. Wicker needs care in the rain, and wire baskets can rattle.',
        '**Liners.** A fabric liner stops small items falling through gaps. A tarp or a rain cover protects the load in a shower.',
        '**Closures.** A lid, net or bungee stops items bouncing out over bumps.',
      ],
      img: { file: 'blog/bicycle-basket-azur-mesh.webp', alt: 'Azur quick release shopper e-bike mesh basket', w: 720, h: 540 },
    },
    {
      h: 'Checking that a bicycle basket fits your bike',
      p: [
        'Before you buy, check these points:',
      ],
      ul: [
        '**Mounting point.** A front basket usually fixes to the handlebar, the stem or a front rack. A rear basket needs a rear rack or special brackets. Check your frame and fork for mounts.',
        '**Handlebar clearance.** Make sure the basket does not hit your brake levers, shifters, display or lights. On an e-bike with a display on the bars, there may be little space.',
        '**Cables and brakes.** A front basket can pinch brake and gear cables when you turn the bars. Turn the bars fully both ways to check.',
        '**Weight limit.** Baskets and racks are rated for a maximum load. Stay under it, and remember the basket itself has weight.',
        '**Suspension forks.** If your bike has front suspension, a handlebar-mounted basket moves with the bars. Do not mount a basket on the fork unless it was designed for that.',
        '**Heel clearance.** A rear basket on a low rack can hit your heels. Check before you buy.',
      ],
    },
    {
      h: 'Loads, lights and the rules: what Queensland says',
      p: [
        'The Queensland Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says you can carry a load on a bicycle but must attach it so the bicycle stays stable and make sure it is unlikely to fall off. It does not set a weight or size limit, so use the maker\'s rating for the basket and rack.',
        'The [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says a bicycle needs a working brake and a bell, and at night a white headlight, a red tail-light and a red rear reflector. A basket should never cover the headlight or block the bell, and a rear basket should never hide the tail-light or reflector. Our [e-bike lights guide](/blog/e-bike-lights/) explains positioning.',
        'Rules vary by state, so check your own road authority.',
      ],
    },
    {
      h: 'How to load a bike basket so the bike handles well',
      ul: [
        '**Keep the front load light.** A front basket suits a bag, a jacket or a few items. Heavy loads belong at the back or in panniers.',
        '**Put heavy things at the bottom.** Cans and bottles go down first, bread and fruit on top.',
        '**Secure the load.** A bungee or net stops items bouncing out. Queensland requires the load to be unlikely to fall off.',
        '**Do not hang bags on the handlebar.** A swinging bag can catch the front wheel or throw your steering off.',
        '**Test the steering.** Ride slowly in a quiet place and turn both ways with the load in the basket.',
        '**Watch your braking.** A loaded bike takes longer to stop, so brake earlier.',
      ],
    },
    {
      h: 'Baskets on e-bikes and heavier bikes',
      p: [
        'An e-bike is heavier than a standard bike, and a front basket loaded with shopping adds to the weight on the front wheel. Many e-bikes have a display, light and cables on the handlebar, which leave little space. A rack-mounted rear basket often suits e-bikes better, provided the rack is rated for the load and the battery does not sit in the way.',
        'The Azur shopper basket in our range is listed for e-bikes with a quick-release mount, which helps if you want to carry it into the shop. Check the fitting details with us for your model.',
        'Our [commuter e-bikes guide](/blog/commuter-e-bikes/) covers commuter models that already come with racks and mounts.',
      ],
    },
    {
      h: 'Looking after a bike basket',
      p: [
        'Wipe plastic and mesh baskets with a damp cloth and mild soap. Check the brackets, bolts and clips every few weeks, since vibration loosens them. Tighten what is loose and replace worn clips before they fail.',
        'Take the basket off or empty it when you park. A visible bag in a basket invites a thief, and a rack-mounted basket can be lifted off easily if not locked. Our [how to lock an e-bike guide](/blog/how-to-lock-an-e-bike/) covers locking up properly.',
      ],
    },
    {
      h: 'Bicycle basket mistakes to avoid',
      ul: [
        '**Overloading the front.** A heavy front basket makes steering heavy and unstable.',
        '**Covering the light.** Keep headlight, tail-light and reflector visible.',
        '**Ignoring the cables.** Check the bars turn fully without pinching anything.',
        '**Hanging bags on the bars.** They swing into the wheel.',
        '**Skipping the weight rating.** Racks and baskets have limits.',
        '**Leaving valuables in the basket.** Take them with you.',
      ],
    },
    {
      h: "Everyday uses: shopping, commuting and market runs",
      p: [
        "For a daily commute, a rear crate holds a bag, a lunch and a jacket with room to spare, and the load stays low. For a quick shop, a front basket with a liner takes bread, vegetables and a few items you can see. For market runs, a rear crate with a bungee net handles the odd shapes of bags, boxes and plants.",
        "On a school run, use a basket for a light bag or a lunch box, never for a child. Queensland rules say a passenger can only be carried if the bike was made to carry them, so a basket is for gear.",
        "If you regularly carry more than a basket will hold, step up to panniers or a trailer. Our [bike panniers guide](/blog/bike-panniers/) and the range of [racks, bags and trailers](/shop/racks-bags-and-trailers/) cover the options.",
      ],
    },
    {
      h: "Fitting a bicycle basket step by step",
      p: [
        "Most baskets fit in fifteen minutes with a set of hex keys. Start by lifting the bike onto a stand or leaning it securely, then follow these steps.",
      ],
      ul: [
        "**Dry-fit first.** Hold the basket in position and turn the bars both ways to check clearance for levers, cables and the display.",
        "**Fix the brackets.** Fit the clamps or hooks loosely, then adjust the height so the basket sits level.",
        "**Tighten evenly.** Snug each bolt a little at a time so the bracket does not twist. Use thread-lock only if the maker recommends it.",
        "**Check the cables.** Turn the bars lock to lock and make sure no cable is pinched or stretched.",
        "**Load test.** Add a moderate weight, ride slowly and listen for rattles. Re-tighten any loose bolts.",
        "**Re-check after a week.** Vibration loosens fittings, so tighten again after the first few rides.",
      ],
    },
    {
      h: 'Which bicycle basket should you buy?',
      p: [
        'For a sturdy crate at a low price, the [Bang Bang crate basket at $80.95](/shop/racks-bags-and-trailers/bang-bang-crate-basket/) and the [Basil 29.5L crate at $80.95](/shop/racks-bags-and-trailers/basil-bicycle-crate-medium-29-5l-black/) are the same price, so choose by style and fit. If you want a quick-release shopper you can carry into the shop, the [Azur mesh basket at $99.95](/shop/racks-bags-and-trailers/azur-quick-release-shopper-e-bike-mesh-basket/) is the pick.',
        'Send us your bike and where you want the basket, and we will confirm the fit. You can also browse the full [bike basket and rack range](/shop/racks-bags-and-trailers/).',
      ],
    },
  ],
  faq: [
    { q: 'Is a front or rear bicycle basket better?', a: 'A rear basket keeps weight low and steering normal, so it suits heavier loads. A front basket is easier to see and reach but is best for light items. Many riders use both.' },
    { q: 'How much can a bicycle basket carry?', a: 'It depends on the basket and the rack or handlebar it is mounted on. Ask the maker or us for the rating, and stay under it. Heavy loads belong at the back or low on the bike.' },
    { q: 'Will a basket fit my e-bike?', a: 'Often, but check handlebar space, the display, lights and cables, and whether a rear rack is fitted and rated for the load. Send us your model and we will confirm.' },
    { q: 'Can a basket block my light?', a: 'It should not. Queensland requires a white headlight, a red tail-light and a red rear reflector at night, so keep them visible and mount lights where the basket does not cover them.' },
    { q: 'What stops items falling out of a bike basket?', a: 'Use a liner, a net or a bungee cord. Queensland says a load must be attached so the bicycle stays stable and is unlikely to fall off.' },
    { q: 'Can I put a pet in a bike basket?', a: 'Only if the basket and mount are designed for it and the animal is secure. Check the maker\'s guidance, and note that Queensland says you must not lead an animal while riding.' },
  ],
  keywords: { primary: 'bicycle basket', supporting: ['bike basket for back', 'front bike basket', 'bike baskets', 'bike basket front', 'bike baskets front'] },
  words: 0,
}
