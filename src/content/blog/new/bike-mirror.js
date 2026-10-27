// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: qld.gov.au bicycle helmets-and-equipment page and the Queensland electric bicycle rules page.
// Product pages publish no specifications, so the post claims only what the names and listings state.
export const meta = {
  id: 'bike-mirror',
  slug: 'bike-mirror',
  url: '/blog/bike-mirror/',
  title: 'Bike Mirror: How to Choose a Rear View Mirror for Cycling',
  seoTitle: 'Bike Mirror: How to Choose a Rear View Mirror for Cycling',
  excerpt: 'Choosing a bike mirror? Compare anti-glare handlebar and rear view mirrors from $37.95, see how to fit and aim one, and what to check on Australian roads.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '8 min',
  focus: 'bike mirror',
  secondary: ['bike mirrors', 'bicycle mirror', 'bike rear mirror', 'bicycle rear view mirror', 'mirrors for bicycles'],
  tags: ['bike with mirrors', 'mirror of bike', 'mirrors on bikes', 'mirrors for bike', 'biking mirror', 'bike handle mirror', 'mirrors for a motorcycle', 'bicycle mirrors for handlebars', 'bike mirrors for handlebars', 'rear view mirror bike'],
  image: {
    file: 'blog/bike-mirror.webp',
    alt: 'Azur Optic, Orbit and Azur Focus anti-glare bike mirror options side by side',
    query: 'bike mirror',
    credit: null,
  },
  related: [
    { href: '/shop/phone-mounts-mirrors-and-audio/azur-optic-mirror-anti-glare/', name: 'Azur Optic Mirror Anti Glare', price: 37.95, note: 'The lowest-priced mirror in our range.' },
    { href: '/shop/phone-mounts-mirrors-and-audio/mirror-orbit-anti-glare/', name: 'Mirror Orbit Anti Glare', price: 42.95, note: 'An anti-glare bar mirror.' },
    { href: '/shop/phone-mounts-mirrors-and-audio/mirror-azur-focus-anti-glare/', name: 'Mirror Azur Focus Anti Glare', price: 42.95, note: 'An anti-glare bar mirror from Azur.' },
    { href: '/shop/phone-mounts-mirrors-and-audio/79bike-rearview-mirror/', name: '79Bike Rearview Mirror', price: 75.95, note: 'Off-road and private property use only.' },
    { href: '/shop/phone-mounts-mirrors-and-audio/', name: 'All phone mounts, mirrors and audio', note: 'Mounts, mirrors and headphones.' },
  ],
  links: {
    to: [
      ['/shop/phone-mounts-mirrors-and-audio/', 'phone mounts, mirrors and audio'],
      ['/blog/best-phone-mounts-for-e-bikes/', 'phone mounts for e-bikes guide'],
      ['/blog/e-bike-lights/', 'e-bike lights guide'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
    ],
    from: [
      ['/shop/phone-mounts-mirrors-and-audio/', 'bike mirror buying guide'],
      ['/shop/phone-mounts-mirrors-and-audio/azur-optic-mirror-anti-glare/', 'how to choose a bike mirror'],
      ['/shop/phone-mounts-mirrors-and-audio/mirror-azur-focus-anti-glare/', 'bike mirrors for handlebars: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike mirror gives you a quick look behind without twisting your body, but it works best when it is fitted solidly, aimed properly and used alongside a head check.',
  intro: [
    'A bike mirror lets you see traffic and other riders behind you with a glance instead of a shoulder check. On a commute, a bike path or an e-bike that picks up speed quickly, that small habit helps you choose your moment to move out, turn or stop. This guide explains what to look for in a bike mirror, how the main styles differ, and how to fit and aim one.',
    'We compare the mirrors in our range, from $37.95, explain handlebar and bar-end mounting, cover what to check before using a mirror on a public road and answer the common questions. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Bike mirror options and prices',
      p: [
        'These are the mirrors in our [phone mounts, mirrors and audio](/shop/phone-mounts-mirrors-and-audio/) range. Three are anti-glare models; the fourth is an off-road model. Ask us to confirm fitment for your handlebar before you order.',
      ],
      table: {
        head: ['Mirror', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[Azur Optic Mirror Anti Glare](/shop/phone-mounts-mirrors-and-audio/azur-optic-mirror-anti-glare/)', 'Azur', '$37.95', 'Anti-glare'],
          ['[Mirror Orbit Anti Glare](/shop/phone-mounts-mirrors-and-audio/mirror-orbit-anti-glare/)', 'E-Move Bikes', '$42.95', 'Anti-glare'],
          ['[Mirror Azur Focus Anti Glare](/shop/phone-mounts-mirrors-and-audio/mirror-azur-focus-anti-glare/)', 'Azur', '$42.95', 'Anti-glare'],
          ['[79Bike Rearview Mirror](/shop/phone-mounts-mirrors-and-audio/79bike-rearview-mirror/)', '79Bike', '$75.95', 'Off-road and private property use only'],
        ],
      },
    },
    {
      h: 'Why riders fit a bike rear mirror',
      p: [
        'Looking over your shoulder takes your eyes off the road ahead and makes you drift, especially on a loaded or fast bike. A bike rear mirror keeps your eyes mostly forward while you monitor what is approaching. Riders on shared paths use one to spot faster bikes and e-scooters before they overtake.',
        'A mirror does not remove the blind spot. It shows a narrow slice of the road behind you, and distances in a small mirror look different from real life. Use it to decide when to check, then make the head check before you change lane or turn.',
      ],
    },
    {
      h: 'Handlebar, bar-end and helmet mirrors: which type',
      p: [
        '**Handlebar mirrors** clamp onto the bar or slide into the end of the grip. They are the most common bicycle mirrors for handlebars and the easiest to fit. A bar-end style sits at the tip of the handlebar and gives a wide view past your arm.',
        '**Helmet and eyewear mirrors** attach to a helmet or glasses. They move with your head, which suits some riders, but they can feel fiddly and can twist if the helmet is knocked. Fit must not change how the helmet sits; see our [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/).',
        '**Anti-glare finishes** reduce the dazzle from headlights behind you at night. All three of the lower-priced mirrors in our range are listed as anti-glare, which helps if you ride at dusk.',
      ],
    },
    {
      h: 'How to choose bike mirrors for handlebars',
      ul: [
        '**Check the bar fit.** Handlebar diameter and grip type decide whether a clamp or a bar-end mount works. Tell us your bike and we will confirm.',
        '**Look at the mirror size.** A larger mirror shows more but sticks out further and can catch on things. A smaller mirror is neater but shows less.',
        '**Prefer a stable mount.** A mirror that vibrates or swings out of aim is useless. A firm mount and a ball joint that holds its angle matter more than the glass.',
        '**Pick anti-glare if you ride at night.** It reduces dazzle, although it does not replace a good rear light.',
        '**Think about folding.** A mirror that folds or swings back is less likely to snap in a fall or when the bike is parked.',
        '**Match the bike.** A heavy e-bike with a wide handlebar suits a longer arm. A compact commuter suits a short one.',
      ],
      img: { file: 'blog/bike-mirror-azur-focus.webp', alt: 'Azur Focus anti-glare handlebar mirror for a bicycle', w: 720, h: 540 },
    },
    {
      h: 'Fitting and aiming a bicycle mirror',
      p: [
        'Fit the mirror with the bike upright and your hands in your normal riding position. Loosen the joint, then adjust the glass so you can see the road behind you and a sliver of your own elbow or shoulder, which gives you a reference point. Tighten the clamp firmly, then wobble the mirror to check it holds its angle.',
        'Go for a short ride on a quiet street and re-aim as needed. Check it again after the first few rides because mounts can settle. If a mirror keeps drifting, add a tiny piece of grip tape under the clamp rather than over-tightening it, which can damage the bar.',
        'Keep the mirror clear of the brake lever, the shifter and the display. The controls must stay easy to reach. Our [phone mounts for e-bikes guide](/blog/best-phone-mounts-for-e-bikes/) explains how to lay out the cockpit so the phone, mirror and lights do not crowd each other.',
      ],
    },
    {
      h: 'Mirrors, equipment and the rules: what to check',
      p: [
        'The Queensland Government\'s [bicycle helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) lists what a bike needs for the road. At night that includes a white headlight, a red tail-light and a red rear reflector, and the bike needs a working brake and a bell. A mirror is an aid you add on top, not a replacement for any of that.',
        'Product pages in our range carry the line to check your state road authority rules before riding on public roads, so confirm what applies where you ride. For e-bikes, the Queensland [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) set out the power and assist limits for legal road use. The 79Bike mirror is listed for off-road and private property use only.',
        'Whatever you fit, make sure it does not block your lights, reflector or controls, and that it cannot swing into your hand or knee.',
      ],
    },
    {
      h: 'Using a mirror well: habits that matter',
      ul: [
        '**Check, then look.** Glance at the mirror, then make a shoulder check before you move out.',
        '**Learn the distortion.** Small mirrors make vehicles look further away than they are. Give yourself extra margin.',
        '**Look early.** Check before a turn or a stop, not during it.',
        '**Keep it clean.** A dusty or fogged mirror is worse than none.',
        '**Re-aim after a fall.** If the bike has been knocked over, check that the mirror and the bar are still straight.',
        '**Avoid fixation.** The mirror is a glance tool; do not stare at it.',
      ],
    },
    {
      h: 'Common bike mirror mistakes',
      ul: [
        '**Relying on it alone.** A mirror has blind spots, so keep the head check.',
        '**Choosing the cheapest unstable clamp.** A mirror that shakes loose is a distraction.',
        '**Overtightening the clamp.** You can crack a carbon bar or distort a grip. Tighten firmly, not to the limit.',
        '**Mounting it where it hits you.** Check it clears your knees and hands on turns.',
        '**Forgetting night riding.** Glare off a bright follower makes a plain mirror useless; an anti-glare finish helps.',
      ],
    },
    {
      h: 'Step by step: installing a bike mirror',
      p: [
        'Most handlebar mirrors fit in under ten minutes with a basic hex key set. Do the job with the bike on a stand or leaning against a wall.',
      ],
      ul: [
        '**Choose the side.** Most Australian riders fit the mirror on the right, because traffic passes on your right. Some riders add one on each side.',
        '**Remove or slide the grip if needed.** For a bar-end style, you may need to slide the grip off or remove the bar plug first.',
        '**Position the clamp.** Place it where the lever, shifter and grip do not interfere with it. Hand-tighten, then check your reach.',
        '**Set the arm.** Adjust the arm length and angle so the mirror sits just inside your normal field of view.',
        '**Aim the glass.** Sit on the bike in your normal riding position and adjust the glass as described above.',
        '**Final tighten.** Tighten the bolts to a firm snug. A torque wrench is ideal if you ride a carbon bar.',
      ],
    },
    {
      h: 'Troubleshooting a mirror that vibrates or drifts',
      p: [
        'A mirror that shakes makes the image blur and wears your patience. First, check that the clamp is tight and the bolt is not stripped. A thin rubber shim or a strip of electrical tape under the clamp adds grip on a smooth bar.',
        'If the ball joint slips, tighten the pivot nut. If it still slips, the joint is worn and the mirror needs replacing. On rough tracks, a shorter arm vibrates less than a long one, so consider the trade-off between reach and stability.',
        'If your view is mostly your own arm, rotate the mirror out slightly or lengthen the arm. If you see only the sky, tilt the glass down. Move in small steps and test on a short ride.',
        'Check your mirror after any fall or after the bike has been parked in a busy rack. A mirror knocked out of aim is easy to miss until you need it.',
      ],
    },
    {
      h: 'Which bike mirror should you buy?',
      p: [
        'For an everyday commuter or e-bike, the [Azur Optic anti-glare mirror at $37.95](/shop/phone-mounts-mirrors-and-audio/azur-optic-mirror-anti-glare/) is the lowest-priced way to try a mirror. The [Mirror Orbit](/shop/phone-mounts-mirrors-and-audio/mirror-orbit-anti-glare/) and [Azur Focus](/shop/phone-mounts-mirrors-and-audio/mirror-azur-focus-anti-glare/) are $42.95 each and add different mount and glass options. For an off-road or private property bike, the [79Bike rearview mirror at $75.95](/shop/phone-mounts-mirrors-and-audio/79bike-rearview-mirror/) is the one listed for that use.',
        'Send us your bike and handlebar details and we will confirm fitment. You can also browse the full [bike mirror and accessory range](/shop/phone-mounts-mirrors-and-audio/).',
      ],
    },
  ],
  faq: [
    { q: 'Are bike mirrors worth it?', a: 'Many riders find them useful for monitoring traffic without twisting around, especially on faster e-bikes and busy commutes. A mirror supports, not replaces, a head check before you turn or change lane. Choose a stable mount and learn how it distorts distance.' },
    { q: 'Where is the best place to fit a bicycle mirror?', a: 'Most riders fit a mirror on the handlebar, either clamped to the bar or in the bar end. Pick a spot you can glance at without moving your head much, and keep it clear of the brake lever, controls and lights.' },
    { q: 'Will a bike mirror fit my handlebar?', a: 'It depends on the bar diameter and the grip type. Send us your bike model or a photo of the bar and we will confirm fitment before you order.' },
    { q: 'What does anti-glare mean on a bike mirror?', a: 'Anti-glare glass is designed to cut the dazzle from headlights behind you at night. It makes the mirror easier to use at dusk, but you still need a proper rear light and reflector.' },
    { q: 'Do I need a mirror on a bike in Australia?', a: 'The Queensland equipment list covers brakes, a bell, lights and a reflector. Check your own state road authority for what applies, because rules differ between states and between bikes and e-bikes.' },
    { q: 'Can I use a mirror on an electric dirt bike?', a: 'Our 79Bike mirror is listed for off-road and private property use only. Bikes above 250W are not road legal in Australia, so use any mirror on them off-road only.' },
  ],
  keywords: { primary: 'bike mirror', supporting: ['bike mirrors', 'bicycle mirror', 'bike rear mirror', 'bicycle rear view mirror', 'mirrors for bicycles'] },
  words: 0,
}
