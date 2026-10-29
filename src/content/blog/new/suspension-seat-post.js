// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Competitor review 29 Oct 2026 (Redshift, Cane Creek, Jasion, Punkride, retailer category pages): weaknesses are brand-led pages with no fit steps, no mention of minimum insertion or seat tube diameter checks, weight limits buried, no comparison with cheaper comfort fixes. Plan: maker figures for one real model, Park Tool fit rules, a comfort-options table with items we stock.
// Sources opened 29 Oct 2026: Cane Creek Thudbuster ST page (rider weight limits, travel, diameters, parallel-linkage design), Park Tool "How to Remove and Install a Seatpost" (minimum insertion, grease, torque, diameter match).
// Product pages publish only names and prices. We do not sell suspension seat posts; the post says so and links the comfort items we do stock.
export const meta = {
  id: 'suspension-seat-post',
  slug: 'suspension-seat-post',
  url: '/blog/suspension-seat-post/',
  title: 'Suspension Seat Post: Comfort Upgrades and Fit Guide',
  seoTitle: 'Suspension Seat Post: Comfort Upgrades and Fit Guide',
  excerpt: 'Thinking of a suspension seat post? See how one works, rider weight limits, diameters, the Park Tool insertion rule and cheaper comfort upgrades we stock from $55.95.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'suspension seat post',
  secondary: ['seat post suspension', 'suspension saddle post', 'cycle suspension seat post', 'bike seat stem suspension', 'bike seat suspension'],
  tags: ['bicycle seat suspension', 'bicycle suspension seatpost', 'saddle post suspension', 'bike suspension seatpost', 'suspension bike seat', 'suspension bicycle seat', 'cycle seatpost', 'seatpost bike', 'bicycle seat pillar', 'bike post seat'],
  image: {
    file: 'blog/suspension-seat-post.webp',
    alt: 'AZUR Kappa memory foam saddle and Seat Drip seat cover, comfort upgrades beside a suspension seat post',
    query: 'suspension seat post',
    credit: null,
  },
  related: [
    { href: '/shop/seats-fenders-and-body/azur-pro-range-kappa-memory-foam/', name: 'AZUR Pro Range Kappa Memory Foam', price: 55.95, note: 'A memory foam saddle.' },
    { href: '/shop/seats-fenders-and-body/seat-drip-seat-cover-camo-stealth/', name: 'Seat Drip Seat Cover - Camo Stealth', price: 93.95, note: 'A seat cover.' },
    { href: '/shop/seats-fenders-and-body/79bike-seat/', name: '79Bike Seat', price: 149, note: 'A replacement seat for 79Bike models.' },
    { href: '/shop/seats-fenders-and-body/', name: 'All seats, fenders and body', note: 'Seats, covers and mudguards.' },
  ],
  links: {
    to: [
      ['/shop/seats-fenders-and-body/', 'seats, fenders and body'],
      ['/blog/e-bike-seats-saddles-kickstands-and-mudguards/', 'e-bike seats, saddles, kickstands and mudguards guide'],
      ['/blog/bike-seat-cover/', 'bike seat cover buying guide'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
    ],
    from: [
      ['/shop/seats-fenders-and-body/', 'suspension seat post buying guide'],
      ['/shop/seats-fenders-and-body/azur-pro-range-kappa-memory-foam/', 'bike seat suspension alternatives'],
      ['/shop/seats-fenders-and-body/79bike-seat/', 'suspension saddle post: fit checks'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A suspension seat post softens bumps under the saddle, but it will not fix a saddle that is the wrong shape or height. Check fit first, then check the weight rating and diameter.',
  intro: [
    'A suspension seat post replaces the rigid seat post with one that moves, so bumps from the road reach your spine more softly. It suits commuters and riders on rough surfaces, and it is a bolt-on upgrade rather than a new bike. The catch is that it must match your seat tube diameter and your weight.',
    'This guide explains how one works, what the maker figures look like for one real model, how to fit a post safely, which cheaper comfort fixes to try first and what we stock. Prices are current Torque E-Bikes prices. For saddles and mudguards on e-bikes, see our [e-bike seats, saddles, kickstands and mudguards guide](/blog/e-bike-seats-saddles-kickstands-and-mudguards/).',
  ],
  sections: [
    {
      h: 'Comfort options compared',
      p: [
        'A suspension post is one of several ways to reduce saddle discomfort. Try the cheaper options first, because many sore-saddle problems come from saddle shape, height or tilt rather than from the road. We do not sell suspension seat posts, so the table shows the comfort items we do stock.',
      ],
      table: {
        head: ['Option', 'What it changes', 'Price from us'],
        rows: [
          ['Suspension seat post', 'Adds movement under the saddle', 'Not stocked'],
          ['[AZUR Pro Range Kappa Memory Foam](/shop/seats-fenders-and-body/azur-pro-range-kappa-memory-foam/)', 'Padding on the saddle', '$55.95'],
          ['[Seat Drip Seat Cover - Camo Stealth](/shop/seats-fenders-and-body/seat-drip-seat-cover-camo-stealth/)', 'Covers the saddle surface', '$93.95'],
          ['[79Bike Seat](/shop/seats-fenders-and-body/79bike-seat/)', 'Replacement seat for 79Bike models', '$149'],
          ['Lower tyre pressure or wider tyres', 'Absorbs bumps at the wheel', 'See our [tyres guide](/blog/e-bike-tyres-and-tubes/)'],
        ],
      },
    },
    {
      h: 'How a suspension seat post works',
      p: [
        'Designs differ. Cane Creek\'s [Thudbuster seatpost page](https://canecreek.com/products/thudbuster-st) describes a parallel linkage with elastomer (rubber block) springs. The maker says the saddle stays level and the distance from saddle to crank does not change, so the post avoids unwanted up and down bouncing and pedal bob. Other designs use a spring or a compressible elastomer inside the post, with a preload adjuster to suit rider weight.',
        'All of them add moving parts between you and the frame. That means more weight and more to service than a rigid post, which is why riders who value a light bike sometimes prefer a rigid post and a better saddle.',
      ],
    },
    {
      h: 'Weight limits and travel: one real example',
      p: [
        'Weight limits and travel are the first figures to check. Cane Creek lists the Thudbuster LT at up to 250 lb (113 kg) rider weight with 90 mm of travel and the Thudbuster ST at up to 330 lb (150 kg) with 50 mm of travel. Those are one maker\'s figures for two models, and other brands use different limits, so read the rating for the exact post you buy.',
        'Match the limit to your weight plus anything you carry, such as a backpack. A post rated too low bottoms out and a post rated too high feels stiff and does little. Spring or preload adjustments help tune the feel, but they cannot make up for the wrong rating.',
      ],
      img: { file: 'blog/suspension-seat-post-kappa.webp', alt: 'AZUR Kappa memory foam saddle, a padded comfort option', w: 720, h: 540 },
    },
    {
      h: 'Seat tube diameter and length: measure before you buy',
      ul: [
        '**Check the diameter.** Cane Creek lists direct-fit diameters of 27.2, 30.9 and 31.6 mm, with other sizes through an adapter. Measure your current post or the inside of the seat tube.',
        '**Match closely.** Park Tool says the post should be only slightly smaller than the seat tube, about 0.1 mm, and that an assembly compound can help if it still slips.',
        '**Check the length.** Cane Creek lists lengths of 345 to 420 mm depending on model and diameter, so compare with the post you have.',
        '**Check frame clearance.** A longer post may hit a bend, a bottle bolt or a suspension linkage inside the frame.',
        '**Check the clamp.** The saddle rails and clamp must suit the new post.',
        '**Ask before buying for an e-bike.** Frames with an integrated battery or a rear rack can limit how far a post sits.',
      ],
    },
    {
      h: 'Fitting a seat post safely',
      p: [
        'Park Tool\'s [guide to removing and installing a seatpost](https://www.parktool.com/en-us/blog/repair-help/how-to-remove-and-install-a-seatpost) gives the rules that apply to any post. Look for a MIN INSERTION or maximum height mark on the post. If there is none, insert at least 2.5 times the post diameter, which is 68 mm for a 27.2 mm post. Keep the post below any frame tube joint and make sure it does not reach bends, water bottle bolts or suspension linkages.',
        'For a steel or aluminium post in a steel or aluminium frame, Park Tool says to apply grease or anti-seize inside the seat tube to prevent corrosion. A carbon post in a carbon frame can usually go in dry, but check the maker\'s advice. Tighten the clamp so the saddle cannot twist, remember that torque values printed on the collar are recommendations, and grease dry bolt threads.',
        'Set the saddle height and tilt before you judge the ride. If you are not confident, ask a bike shop to fit it, especially on a bike with a carbon frame.',
      ],
    },
    {
      h: 'When a suspension seat post will not help',
      ul: [
        '**Wrong saddle shape.** Pain from pressure points is usually fixed by a different saddle, not by suspension.',
        '**Wrong height or tilt.** A saddle that is too high, too low or tilted forward causes soreness on any post.',
        '**Heavy loads.** A rider plus a loaded rack can exceed the post rating.',
        '**Aggressive riding.** Hard riding on rough trails needs equipment designed for it, which a commuter post is not.',
        '**A light bike.** If weight matters most, the extra mass of a suspension post is a real cost.',
        '**A damaged frame or tyre problem.** A harsh ride may come from over-inflated tyres, so check pressure first.',
      ],
    },
    {
      h: 'Comfort items we stock',
      p: [
        'We stock saddles and seat covers rather than suspension posts. Product pages publish the name, brand and price only, so ask us about fit before you order.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[AZUR Pro Range Kappa Memory Foam](/shop/seats-fenders-and-body/azur-pro-range-kappa-memory-foam/)', 'AZUR', '$55.95', 'Memory foam saddle'],
          ['[Seat Drip Seat Cover - Camo Stealth](/shop/seats-fenders-and-body/seat-drip-seat-cover-camo-stealth/)', 'Seat Drip', '$93.95', 'Seat cover'],
          ['[79Bike Seat](/shop/seats-fenders-and-body/79bike-seat/)', '79Bike', '$149', 'Replacement seat for 79Bike models'],
        ],
      },
    },
    {
      h: 'A simple order of upgrades for a sore saddle',
      ul: [
        '**Check the saddle height.** Set it so your leg is nearly straight at the bottom of the pedal stroke without rocking your hips.',
        '**Check the tilt.** Level is the usual starting point, then adjust in small steps.',
        '**Check tyre pressure.** Lower pressure within the tyre\'s limits absorbs more bumps.',
        '**Try a padded saddle or cover.** See our [bike seat cover buying guide](/blog/bike-seat-cover/).',
        '**Try wider tyres if the bike allows.** More air volume smooths the ride.',
        '**Then consider a suspension seat post.** It is the last step, not the first.',
      ],
    },
    {
      h: 'Setting up the post for your weight',
      p: [
        'Most suspension posts have a way to tune the feel, such as a preload plug or a spring choice. Check the maker\'s instructions for how your post is tuned. Start with the maker\'s weight guidance, ride a short loop and adjust in small steps. A post that bottoms out on every bump is too soft for your weight, and a post that never moves is too firm.',
        'Remember that the saddle height changes slightly as the post compresses under you. Set the saddle height with your weight on the bike, not on a stand, and check your knee angle again after a week of riding. If the pedalling feels bouncy, the post is probably too soft or the rider is too heavy for the model.',
      ],
    },
    {
      h: 'Suspension seat posts and e-bikes',
      ul: [
        '**Check the frame first.** Many e-bikes have a battery or a rack mounted close to the seat tube, which can limit how far a longer post sits.',
        '**Check the weight rating against bike and load.** The rating is for the rider including gear, so a rider with a heavy backpack needs a higher rating.',
        '**Speed matters.** E-bikes carry you over rough ground faster than pedal bikes, so a post that is fine at 15 km/h may feel different at 25 km/h.',
        '**Mind child seats and racks.** A seat post rack or a child seat mounted on the post can interfere with suspension movement, so ask the maker before combining them.',
        '**Do not exceed the legal limits.** The post does not change the motor rules. A bike above 250 W is for off-road and private property use only.',
      ],
    },
    {
      h: 'Looking after a suspension post',
      p: [
        'Moving parts wear. Wipe the exposed part of the post after wet rides, check that the saddle clamp stays tight and listen for creaks, which often point to a dry or loose joint. Follow the maker\'s advice on cleaning and lubrication, because some posts need a specific grease and others need none at all.',
        'Replace worn elastomers or springs when the maker recommends, and replace the whole post if it develops play, cracks or a bent tube. A failed seat post puts you off the bike suddenly, so treat any damage seriously.',
      ],
    },
    {
      h: 'Suspension seat post mistakes to avoid',
      ul: [
        '**Buying the wrong diameter.** Measure first, and do not force a post that does not fit.',
        '**Ignoring the weight rating.** Choose a post rated for your weight plus your load.',
        '**Skipping the minimum insertion mark.** A post pulled too high can break the seat tube or the post.',
        '**Over-tightening the clamp.** Follow the torque guidance and use grease where advised.',
        '**Treating it as a fix for saddle pain.** Fit the saddle first.',
        '**Adding it to a bike that is not designed for it.** Check frame clearance and rack mounts.',
      ],
    },
    {
      h: 'Which suspension seat post option should you choose?',
      p: [
        'If your saddle is sore, start with fit, then a padded option such as the [AZUR Pro Range Kappa Memory Foam at $55.95](/shop/seats-fenders-and-body/azur-pro-range-kappa-memory-foam/) or a [Seat Drip seat cover at $93.95](/shop/seats-fenders-and-body/seat-drip-seat-cover-camo-stealth/). If you ride rough surfaces often and your frame suits it, a suspension post from a specialist may be worth adding. Browse the full [seats, fenders and body range](/shop/seats-fenders-and-body/).',
        'Tell us your bike, your weight range and where you ride, and we will suggest the right comfort upgrade. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'Is a suspension seat post worth it?', a: 'It can be on rough roads and commutes, because it softens bumps under the saddle. It adds weight and moving parts, and it will not fix a wrong saddle shape, height or tilt, so check fit first.' },
    { q: 'How do I know what size suspension seat post to buy?', a: 'Measure the diameter of your current post or the inside of the seat tube. Cane Creek lists direct-fit sizes of 27.2, 30.9 and 31.6 mm. Match it closely and check length and frame clearance too.' },
    { q: 'What is the weight limit on a suspension seat post?', a: 'It depends on the model. Cane Creek rates its Thudbuster LT to 113 kg and its ST to 150 kg. Check the rating for the exact post and include any load you carry.' },
    { q: 'How far should a seat post go into the frame?', a: 'Park Tool says to look for the minimum insertion or maximum height mark, and if there is none, insert at least 2.5 times the post diameter, which is 68 mm for a 27.2 mm post.' },
    { q: 'Does a suspension seat post suit an e-bike?', a: 'It can, but check the weight rating, the diameter and the frame, because integrated batteries and racks can limit how far a post sits. Ask the dealer before you buy.' },
    { q: 'Do you sell suspension seat posts?', a: 'No. We stock the AZUR Pro Range Kappa Memory Foam saddle at $55.95, Seat Drip seat covers at $93.95 and the 79Bike Seat at $149 as comfort options.' },
  ],
  keywords: { primary: 'suspension seat post', supporting: ['seat post suspension', 'suspension saddle post', 'cycle suspension seat post', 'bike seat stem suspension', 'bike seat suspension'] },
  words: 0,
}
