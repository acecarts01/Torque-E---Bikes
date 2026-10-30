// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page (passengers only if the bike was made for them) and the bicycle road rules page (approved helmet for passengers).
// Product pages publish no age, weight limits or mounting positions, so the post claims only names, brands, prices and the words seat and handlebar combo in the names.
// "Baby" and "infant" keywords are deliberately not used: no authoritative minimum-age source was found.
export const meta = {
  id: 'child-bike-seat',
  slug: 'child-bike-seat',
  url: '/blog/child-bike-seat/',
  title: 'Child Bike Seat: How to Choose and Fit a Kids Bike Seat',
  seoTitle: 'Child Bike Seat: How to Choose and Fit a Kids Bike Seat',
  excerpt: "Choosing a child bike seat? Compare Kids Ride Shotgun seats and combos from $179, check mounting, weight limits and helmet rules, and fit it safely.",
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '10 min',
  focus: 'child bike seat',
  secondary: ['kids bike seat', 'bike seat for toddler', 'toddler bike seat', 'childrens bike seat front', 'child seat for bike'],
  tags: ['childs bike chair', 'kids seat for bike', 'kid bike seat', 'kids bike seats', 'bike seat child', 'bike toddler seat', 'child seat bike', 'bike seat kids', 'bike seats for kids', 'children\'s rear bike seat'],
  image: {
    file: 'blog/child-bike-seat.webp',
    alt: 'Kids Ride Shotgun seat, Shotgun 2.0 and handlebar combo, a child bike seat range',
    query: 'child bike seat',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-black/', name: 'Kids Ride Shotgun Seat Black', price: 179, note: 'The lowest-priced Shotgun seat.' },
    { href: '/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-black/', name: 'Kids Ride Shotgun 2.0 Seat Black', price: 219, note: 'The 2.0 seat.' },
    { href: '/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-handlebar-combo-black/', name: 'Kids Ride Shotgun Seat Handlebar Combo Black', price: 239, note: 'Seat and handlebar combination.' },
    { href: '/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-handlebar-combo-black/', name: 'Kids Ride Shotgun 2.0 Seat Handlebar Combo Black', price: 309, note: '2.0 seat and handlebar combination.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Child seats, trailers, panniers and baskets.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/childs-helmet/', 'childs helmet buying guide'],
      ['/blog/bicycle-trailers/', 'bicycle trailers buying guide'],
      ['/blog/childs-electric-bike/', 'childs electric bike guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'child bike seat buying guide'],
      ['/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-black/', 'how to choose a child bike seat'],
      ['/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-handlebar-combo-black/', 'bike seat for toddler: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A child bike seat only works safely when the bike was made to carry a passenger, the seat suits the child\'s size and the child wears an approved helmet. Check the rules, the weight limits and the fit before you ride.',
  intro: [
    'A child bike seat lets a young rider come along on your bike before they can ride their own. Done right, it is a great way to share a ride. Done carelessly, it changes how the bike steers, brakes and balances. This guide explains the types of kids bike seat, how to match one to your bike and your child, and what Queensland says about carrying passengers and helmets.',
    'We compare the Kids Ride Shotgun seats and handlebar combos in our range from $179, set out a safe fitting routine and answer the questions parents ask most. Prices are current Torque E-Bikes prices. Check the maker\'s age and weight limits for any seat you buy.',
  ],
  sections: [
    {
      h: 'Child bike seat options and prices',
      p: [
        'Our [racks, bags and trailers](/shop/racks-bags-and-trailers/) range includes four Kids Ride Shotgun options. Product pages publish the brand and price but not the age, weight or mounting details, so ask us for the maker\'s specifications and fit advice before you order.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[Kids Ride Shotgun Seat Black](/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-black/)', 'Shotgun', '$179', 'Seat'],
          ['[Kids Ride Shotgun 2.0 Seat Black](/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-black/)', 'Shotgun', '$219', '2.0 seat'],
          ['[Kids Ride Shotgun Seat Handlebar Combo Black](/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-handlebar-combo-black/)', 'Shotgun', '$239', 'Seat and handlebar combo'],
          ['[Kids Ride Shotgun 2.0 Seat Handlebar Combo Black](/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-handlebar-combo-black/)', 'Shotgun', '$309', '2.0 seat and handlebar combo'],
        ],
      },
    },
    {
      h: 'The rule that comes first: passengers and helmets in Queensland',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says passengers can only be carried if the bike was made to carry them. That applies to a child as much as to an adult, so check that your bike and the seat you choose are designed to work together, and read the seat\'s instructions before you fit it.',
        'The same Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says any passenger must wear an approved helmet that is securely fitted and fastened, and that you should look for a sticker showing it meets a listed standard such as AS/NZS 2063. See our [childs helmet guide](/blog/childs-helmet/) for choosing and fitting one.',
        'Rules differ between states and change from time to time, so check your own road authority before you ride.',
      ],
    },
    {
      h: 'Front, rear and frame-mounted kids bike seats',
      p: [
        '**Rear-mounted seats** sit over the back wheel on a rack or frame mount. They carry bigger children and leave the cockpit clear, but they move the weight behind the rear axle, which affects balance when the bike is stationary. The bike needs a strong rack or frame mount, and a kickstand helps when loading.',
        '**Front-mounted seats** sit between the rider and the handlebars, so the child is close and visible. They suit smaller children but limit the space for the rider\'s knees and arms. Check clearance for the rider\'s legs and for the handlebar at full turn.',
        '**Frame or top-tube mounted seats and handlebar combos** attach to the frame and, in the combo versions, give the child a handlebar to hold. The Shotgun products in our range include seat-only and seat-and-handlebar combo versions. Check the maker\'s information on where and how each mounts on your frame.',
        '**Trailers and tag-alongs** are alternatives that keep the child off your bike. Our [bicycle trailers guide](/blog/bicycle-trailers/) explains them.',
      ],
    },
    {
      h: 'How to choose a bike seat for a toddler or older child',
      ul: [
        '**Age and weight limits.** Every seat has a maker\'s limit. Never go over it, and follow the maker\'s guidance on when a child is ready to sit in the seat.',
        '**Compatibility with your bike.** Check the frame shape, the rack or mount, the wheel size and any suspension, because not every seat fits every bike. Send us your bike model.',
        '**Harness and footrests.** Look for a secure harness and footrests with straps, so small feet cannot reach the spokes or the chain.',
        '**Padding and shell.** A padded, supportive seat keeps the child comfortable and upright.',
        '**Adjustability.** A seat that adjusts as the child grows lasts longer.',
        '**Easy fitting.** A quick-release mount makes it practical to remove the seat when you ride alone.',
        '**Handlebar for the child.** If the seat has a handlebar combo, check that the child can hold it comfortably and that it does not push into the child\'s body.',
      ],
      img: { file: 'blog/child-bike-seat-kids-ride-shotgun.webp', alt: 'Kids Ride Shotgun seat and handlebar combo, a kids bike seat', w: 720, h: 540 },
    },
    {
      h: "Before you buy: a quick compatibility checklist",
      ul: [
        "Confirm that your bike was made to carry a passenger, as Queensland requires.",
        "Check the maker's age and weight limits for the seat, rack or frame.",
        "Photograph your frame, rack mounts and handlebar and send them to us.",
        "Measure the space between the saddle and the handlebar if you are considering a front-mounted seat.",
        "Check that your rack or mount is rated for the seat and the child together.",
        "Buy an approved child helmet, sized to the child, before the first ride.",
        "Plan a practice session in a quiet spot with a helper.",
      ],
    },
    {
      h: "Growing out of a kids bike seat",
      p: [
        "Children grow quickly, and a seat that suits a small toddler will soon be too small. Watch for signs that your child has outgrown the seat: their head touches the top of the seat or the helmet pushes forward, their legs no longer fit the footrests, or they are close to or over the maker's weight limit.",
        "When it is time, consider a trailer, a tag-along or a bike of their own. Our [childs electric bike guide](/blog/childs-electric-bike/) covers bikes for young riders, and the helmet guide covers fitting a helmet to a growing head. Resell or pass on the seat if it is in good condition and you still have the instructions.",
      ],
    },
    {
      h: 'Which bikes can carry a child seat',
      p: [
        'Not every bike suits a child seat. Rear-mounted seats need a rack or frame rated for the load, which includes the seat and the child. Full-suspension bikes, bikes with rear-mounted batteries and carbon frames may not take a mount at all.',
        'Check the bike\'s maker for any carrying limit and for approved accessories. If the bike was not made to carry a passenger, Queensland says you cannot carry one, whatever the seat. Our [childs electric bike guide](/blog/childs-electric-bike/) covers bikes for children to ride themselves.',
        'E-bikes are heavier and have more power, so take extra care with a child on board: start gently, brake early and avoid rough ground. Cargo bikes are designed to carry people and loads; see our [electric cargo bikes guide](/blog/electric-cargo-bikes/).',
      ],
    },
    {
      h: 'Fitting a child bike seat safely',
      ul: [
        '**Read the manual.** Follow the maker\'s instructions step by step.',
        '**Check the mount.** Make sure the bracket, rack or clamp is the right size and tightened to the specified torque.',
        '**Test with weight.** Load the seat with a bag of the child\'s weight and ride slowly to feel the handling.',
        '**Fit the helmet and harness.** Adjust the straps so the child is snug and cannot slip.',
        '**Check heels, feet and spokes.** Make sure the child\'s feet and clothes cannot catch the wheel or chain.',
        '**Practise mounting.** Learn to get on and off with the child, ideally with a stand or a helper.',
        '**Re-check the bolts.** Vibration loosens fittings, so check after the first few rides and regularly after.',
      ],
    },
    {
      h: 'Riding with a child: stability, braking and route choice',
      p: [
        'A passenger changes the bike. It will feel heavier, slower to turn and harder to hold up when you stop. Practise in a quiet car park with the seat loaded before you go out. Brake earlier and more gently, take corners wide and slow, and avoid rough ground and steep descents.',
        'Choose safe routes. A shared path or a quiet street is better than a busy road. Teach your child to sit still, keep hands and feet where they belong and tell you if they are uncomfortable.',
        'Use lights and a bell as the Queensland rules require, since a larger load can hide a rear light. Our [e-bike lights guide](/blog/e-bike-lights/) explains the equipment.',
      ],
    },
    {
      h: 'Child bike seat mistakes to avoid',
      ul: [
        '**Fitting a seat to a bike not made for passengers.** Queensland says passengers can only be carried if the bike was made to carry them.',
        '**Skipping the helmet.** Any passenger must wear an approved helmet.',
        '**Ignoring weight limits.** Stay under the maker\'s limit for the seat, the rack and the bike.',
        '**Leaving the child on a parked bike.** A bike with a child seat can topple easily.',
        '**Forgetting loose straps and feet.** Spokes and chains hurt.',
        '**Not practising first.** Learn the handling before you carry your child.',
      ],
    },
    {
      h: 'Which child bike seat should you buy?',
      p: [
        'If you want a seat on its own, the [Kids Ride Shotgun seat at $179](/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-black/) is the lower-priced option, and the [Shotgun 2.0 seat at $219](/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-black/) is the updated version. If you want a handlebar for the child to hold, look at the [Shotgun seat and handlebar combo at $239](/shop/racks-bags-and-trailers/kids-ride-shotgun-seat-handlebar-combo-black/) or the [2.0 combo at $309](/shop/racks-bags-and-trailers/kids-ride-shotgun-2-0-seat-handlebar-combo-black/).',
        'Send us your bike, your child\'s age and weight, and we will confirm fit and the maker\'s limits. You can also browse the full [child seats, trailers and bags range](/shop/racks-bags-and-trailers/).',
      ],
    },
  ],
  faq: [
    { q: 'Can I carry a child on my e-bike in Queensland?', a: 'Queensland says passengers can only be carried if the bike was made to carry them, and any passenger must wear an approved helmet. Check that your bike and the seat are designed to work together.' },
    { q: 'What age can a child use a kids bike seat?', a: 'It depends on the seat. Each maker sets age and weight limits, and the child should be able to sit unaided and wear a fitted helmet. Check the maker\'s instructions and ask us about the seat.' },
    { q: 'Will a child seat fit my bike?', a: 'Not always. Frame shape, racks, suspension, wheel size and battery placement all matter. Send us your bike model or photos and we will advise before you order.' },
    { q: 'Does my child need a helmet in a bike seat?', a: 'Yes. Queensland says a passenger must wear an approved helmet that is securely fitted and fastened. Look for the standard label such as AS/NZS 2063.' },
    { q: 'Is a bike seat or a trailer safer?', a: 'Each has trade-offs. A seat keeps the child close but changes the bike\'s balance. A trailer keeps weight low and the child off your bike but adds length. Choose the one that suits your bike, route and child.' },
    { q: 'How do I stop my child\'s feet catching the wheel?', a: 'Use footrests with straps if the seat has them, check that shoes and clothing are clear of the wheel and chain, and buckle the harness every time.' },
  ],
  keywords: { primary: 'child bike seat', supporting: ['kids bike seat', 'bike seat for toddler', 'toddler bike seat', 'childrens bike seat front', 'child seat for bike'] },
  words: 0,
}
