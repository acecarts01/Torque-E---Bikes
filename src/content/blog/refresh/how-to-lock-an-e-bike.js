// Refresh of /blog/how-to-lock-an-e-bike/ written to the blog-post rule (27 Oct 2026).
// Locks category: 4 products (catalogue). Sources: Queensland Police (Brisbane Central, "Scooter and bicycle theft prevention", 2 Jun 2021) and
// Bicycle Queensland "Bike Security", both opened and checked 27 Oct 2026.
export const slug = 'how-to-lock-an-e-bike'

export const meta = {
  title: 'Lock for Bicycles and E-Bikes: How to Lock an E-Bike Securely',
  seoTitle: 'Lock for Bicycles and E-Bikes: How to Lock Securely',
  excerpt: 'Lock for bicycles and e-bikes: how to lock an e-bike securely, chain, folding and alarmed lock prices from $38.95, trackers, and what police advise.',
  updated: '2026-10-27',
  focus: 'lock for bicycles',
  secondary: ['bicycle padlocks', 'bike padlocks', 'bicycle chain and lock', 'chain and lock for bike', 'bicycle locking chain'],
  tags: ['bike and lock', 'lock bike lock', 'locked bicycle', 'locked bike', 'locks bicycle', 'lock the bike', 'lock bike chain', 'lock bicycle chain', 'lock chain bike', 'bike lock bike lock'],
  imageAlt: 'Yellow bicycle parked next to a sign, the kind of spot where a lock for bicycles is needed',
  related: [
    { href: '/shop/locks-and-security/onguard-chain-lock/', name: 'OnGuard Chain Lock', price: 38.95, note: 'Our lowest-priced chain lock.' },
    { href: '/shop/locks-and-security/mastiff-chain-lock-keyed/', name: 'Mastiff Chain-Lock Keyed', price: 99, note: 'A keyed chain lock.' },
    { href: '/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/', name: 'Kovix Steel Thunder Alarmed Folding Lock', price: 109, note: 'A folding lock with an alarm.' },
    { href: '/shop/locks-and-security/multitag-mount-and-airtag/', name: 'Multitag Mount & Airtag', price: 93.95, note: 'A tracker mount for an Airtag.' },
    { href: '/shop/locks-and-security/', name: 'All locks and security', note: '4 products.' },
  ],
  links: {
    to: [
      ['/shop/locks-and-security/', 'bike locks and security'],
      ['/shop/commuter-and-urban-e-bikes/', 'commuter e-bikes'],
      ['/blog/commuter-e-bikes/', 'commuter ebike guide'],
      ['/blog/bike-racks-baskets-and-trailers/', 'bike racks, baskets and trailers'],
    ],
    from: [
      ['/shop/locks-and-security/', 'lock for bicycles guide'],
      ['/shop/locks-and-security/mastiff-chain-lock-keyed/', 'how to lock an e-bike'],
      ['/shop/locks-and-security/onguard-chain-lock/', 'how to choose a lock for bicycles'],
    ],
  },
}

export const body = {
  intro: [
    'The right lock for bicycles matters even more for an e-bike, because e-bikes are valuable and attractive to thieves. No lock is unbreakable, but a strong lock used well makes your bike a harder target. Locks in our range start at $38.95 for a chain lock, and an alarmed folding lock is $109.',
    'This guide covers lock types, how to lock your bike, extra protection such as alarms and trackers, and what police advise, with real prices.',
  ],
  prepend: [
    {
      h: 'Lock for bicycles: prices and options from our range',
      p: [
        'These are the products in our [locks and security](/shop/locks-and-security/) range. No lock is theft-proof, so use the strongest you can carry and lock the bike properly every time.',
      ],
      table: {
        head: ['Product', 'Price', 'Type'],
        rows: [
          ['[OnGuard Chain Lock](/shop/locks-and-security/onguard-chain-lock/)', '$38.95', 'Chain lock'],
          ['[Multitag Mount & Airtag](/shop/locks-and-security/multitag-mount-and-airtag/)', '$93.95', 'Tracker mount'],
          ['[Mastiff Chain-Lock Keyed](/shop/locks-and-security/mastiff-chain-lock-keyed/)', '$99', 'Keyed chain lock'],
          ['[Kovix Steel Thunder Alarmed Folding Lock](/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/)', '$109', 'Alarmed folding lock'],
        ],
      },
    },
  ],
  drop: ['Quick recap', 'Browse locks', 'A last word on bike security', 'Before theft happens'],
  append: [
    {
      h: 'What Queensland Police and Bicycle Queensland advise',
      p: [
        'Queensland Police\'s [bicycle and scooter theft prevention advice](https://mypolice.qld.gov.au/brisbanecentral/2021/06/02/scooter-and-bicycle-theft-prevention/) notes that thieves often carry bolt-cutters to remove locking devices, so it is important to be proactive about property security. It advises writing down the serial number and recording it with police, having the bike engraved if it has no serial number, taking photos of distinguishing marks, considering a small GPS or air-tracker, and keeping the bike in sight or storing it inside where you can.',
        'Bicycle Queensland\'s [bike security guide](https://bq.org.au/resources/bike-security/) advises using a heavy-duty lock, with a D-style lock the hardest for thieves to defeat, running the lock through the frame and one wheel and fastening it to something secure that will not move, and choosing an open, public spot. It also recommends locking your bike at home in an apartment block, removing easily detached accessories such as lights and panniers, and adding a second small cable lock if you have quick-release wheels.',
        'For a tracker, our [Multitag Mount & Airtag](/shop/locks-and-security/multitag-mount-and-airtag/) mounts an Airtag on the bike. For the commuting set-up see our [commuter ebike guide](/blog/commuter-e-bikes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'What is the best lock for bicycles?',
      a: 'Bicycle Queensland says a heavy-duty lock is best, and a D-style lock is the hardest for thieves to defeat. Whichever lock you use, run it through the frame and one wheel and fasten it to something secure that will not move. A chain lock starts at $38.95 in our range.',
    },
    {
      q: 'Should I record my e-bike serial number?',
      a: 'Yes. Queensland Police advise writing down your bike\'s serial number and recording it with police, either at a police station or on the Queensland Police West End Serial Hub, so a recovered bike can be returned to you. If there is no serial number, consider having the bike engraved.',
    },
  ],
  keywords: { primary: 'lock for bicycles', supporting: ['bicycle padlocks', 'bike padlocks', 'bicycle chain and lock', 'chain and lock for bike', 'bicycle locking chain'] },
}
