// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Bicycle Queensland bike security page and the Queensland Police bicycle theft prevention post.
// We stock chain locks and a folding lock but no U-locks; the post says so. Product pages publish no lock ratings, so it claims only names, brands and prices.
export const meta = {
  id: 'bike-chain-padlock',
  slug: 'bike-chain-padlock',
  url: '/blog/bike-chain-padlock/',
  title: 'Bike Chain Padlock: Chain Locks vs U-Locks for Bikes',
  seoTitle: 'Bike Chain Padlock: Chain Locks vs U-Locks for Bikes',
  excerpt: 'Choosing a bike chain padlock? Compare chain locks from $38.95 with U-locks and folding locks, learn how to lock a bike properly and what police advise.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '9 min',
  focus: 'bike chain padlock',
  secondary: ['bike padlock and chain', 'bike chain lock', 'bicycle u lock', 'bike padlock', 'u lock'],
  tags: ['u lock bike', 'bike u lock', 'cycle lock chain', 'bike chain and lock', 'chain bike lock', 'bicycle chain lock', 'u bike lock', 'bicycle d lock', 'bike lock u', 'buy bike lock'],
  image: {
    file: 'blog/bike-chain-padlock.webp',
    alt: 'OnGuard chain lock, Mastiff chain-lock and Kovix folding lock, a bike chain padlock range',
    query: 'bike chain padlock',
    credit: null,
  },
  related: [
    { href: '/shop/locks-and-security/onguard-chain-lock/', name: 'OnGuard Chain Lock', price: 38.95, note: 'The lowest-priced chain lock in our range.' },
    { href: '/shop/locks-and-security/mastiff-chain-lock-keyed/', name: 'Mastiff Chain-Lock Keyed', price: 99, note: 'A keyed chain lock.' },
    { href: '/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/', name: 'Kovix Steel Thunder Alarmed Folding Lock', price: 109, note: 'A folding lock with an alarm.' },
    { href: '/shop/locks-and-security/', name: 'All locks and security', note: 'Locks, alarms and tags.' },
  ],
  links: {
    to: [
      ['/shop/locks-and-security/', 'locks and security'],
      ['/blog/how-to-lock-an-e-bike/', 'how to lock an e-bike guide'],
      ['/blog/bike-alarm/', 'bike alarm buying guide'],
      ['/blog/bicycle-cover/', 'bicycle cover buying guide'],
    ],
    from: [
      ['/shop/locks-and-security/', 'bike chain padlock buying guide'],
      ['/shop/locks-and-security/mastiff-chain-lock-keyed/', 'how to choose a bike chain lock'],
      ['/shop/locks-and-security/onguard-chain-lock/', 'bike padlock and chain: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike chain padlock is flexible and easy to loop around awkward posts, but a lock is only as good as what you lock the bike to and how you lock it. Choose a strong lock, use it properly and add a second one.',
  intro: [
    'A bike chain padlock is a chain with a padlock, or a chain lock with a built-in lock, used to secure a bike to a fixed object. Chains wrap around frames, wheels and awkward objects more easily than a rigid shackle, and they are popular for e-bikes because the length is useful. This guide compares chain locks, U-locks and folding locks, explains how to choose one and sets out the lock-up advice from Bicycle Queensland and Queensland Police.',
    'We cover the chain locks and folding lock in our range from $38.95, how to lock a bike so it is hard to steal, the weaknesses of each lock type and the questions riders ask most. Prices are current Torque E-Bikes prices. We do not currently stock a U-lock, and this guide says so plainly.',
  ],
  sections: [
    {
      h: 'Bike chain padlock and lock options in our range',
      p: [
        'Our [locks and security](/shop/locks-and-security/) range includes two chain locks and an alarmed folding lock. Product pages publish the brand and price but not the chain thickness or the security rating, so ask us for the maker\'s specifications before you order.',
      ],
      table: {
        head: ['Lock', 'Brand', 'Price', 'Type'],
        rows: [
          ['[OnGuard Chain Lock](/shop/locks-and-security/onguard-chain-lock/)', 'OnGuard', '$38.95', 'Chain lock'],
          ['[Mastiff Chain-Lock Keyed](/shop/locks-and-security/mastiff-chain-lock-keyed/)', 'Mastiff', '$99', 'Keyed chain lock'],
          ['[Kovix Steel Thunder Alarmed Folding Lock](/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/)', 'Kovix', '$109', 'Alarmed folding lock'],
        ],
      },
    },
    {
      h: 'Bike padlock and chain: how the system works',
      p: [
        'A chain lock has links that wrap around your bike and a fixed object, closed by a lock. A chain with a separate padlock does the same thing. The chain resists cutting, and the lock holds the ends together. Both must be strong, because a thief will attack the weakest part.',
        'Some chain locks come as a single unit with the lock built into the end, which is neat and avoids mismatched parts. Others use a separate padlock that you choose. If you buy a chain and a padlock separately, match the strength of the two and check that the padlock\'s shackle fits through the chain link.',
        'A chain\'s big advantage is length. You can loop it through the frame, a wheel and a rack post in one go. Its disadvantages are weight and bulk, and a cheap chain is a weak link.',
      ],
    },
    {
      h: 'Chain lock, U-lock or folding lock: which is better',
      ul: [
        '**Chain locks.** Flexible and long, they fit awkward posts and let you lock a frame and both wheels. They can be heavy, and the quality of the chain and the lock matters most. Our range has a keyed and a standard chain lock.',
        '**U-locks (D-locks).** A rigid steel shackle is compact and hard to attack, and Bicycle Queensland calls a heavy-duty D-style lock the hardest for thieves to defeat. They are less flexible and need a close fixed object. We do not stock a U-lock currently.',
        '**Folding locks.** Steel plates joined by rivets fold into a compact bundle. They are lighter than a chain and longer than a U-lock. The Kovix in our range adds an alarm.',
        '**Cable locks.** Light and flexible, but easy to cut. Use a cable only as a second lock for a quick-release wheel or a saddle.',
        '**Combination.** Many riders pair a U-lock for the frame with a chain or cable for the wheels.',
        '**Weight and carry.** Choose a lock you will actually carry. A heavy lock left at home protects nothing.',
      ],
      img: { file: 'blog/bike-chain-padlock-mastiff.webp', alt: 'Mastiff keyed chain lock for a bike', w: 720, h: 540 },
    },
    {
      h: 'How to lock a bike so it is hard to steal',
      p: [
        '[Bicycle Queensland\'s bike security advice](https://bq.org.au/resources/bike-security/) says to run the lock through the frame and one wheel and attach it to something fixed that cannot move. If you have quick-release wheels, add a second small cable lock to secure the other wheel to the frame. It adds that you should lock up at home as well, including in a yard, shed or secure garage, and that you should remove easily detached items such as lights, cycle computers and panniers.',
        'Choose the spot carefully. Bicycle Queensland suggests a secure spot if you have one, and otherwise an open public area where many people can see the bike rather than a hidden corner. The Queensland Police [bicycle theft prevention post](https://mypolice.qld.gov.au/brisbanecentral/2021/06/02/scooter-and-bicycle-theft-prevention/) says to keep the bike in sight whenever possible and notes that thieves often carry bolt-cutters.',
        'Keep the lock off the ground, because thieves can smash a lock against the pavement. Pull the chain tight with minimal slack so there is no room for tools, and put the lock where the keyway faces down so rain and dirt do not jam it. Our [how to lock an e-bike guide](/blog/how-to-lock-an-e-bike/) walks through more situations.',
      ],
    },
    {
      h: 'Choosing a bike chain lock: what to check',
      ul: [
        '**Chain thickness.** Thicker links resist bolt-cutters better. Ask the maker for the link diameter and the material.',
        '**Lock quality.** A strong chain with a weak lock is only as strong as the lock. Check the shackle and the key or combination mechanism.',
        '**Cover.** A fabric sleeve protects the bike paint. Check that it is replaceable.',
        '**Length.** Long enough to wrap the frame, a wheel and a fixed object, but not so long it is awkward to carry.',
        '**Keys or combination.** Keyed locks usually give you spare keys; keep one at home. A combination lock means no key to lose, but choose a code that is not obvious.',
        '**Weight.** A lock you can carry on every ride beats a heavier lock you leave behind.',
        '**Insurance and ratings.** Some insurers want locks of a certain rating. Check your policy.',
      ],
    },
    {
      h: 'The weak points of chains, padlocks and combination locks',
      p: [
        'No lock is unbreakable. The Queensland Police post notes that thieves often carry bolt-cutters, so a thin chain or a cheap padlock will not stop a determined thief. Cheap padlocks and cable locks are among the easiest to defeat.',
        'The attack points are the chain links, the padlock shackle and the lock body. A thick, hardened chain protects against cutters, and a padlock with a short, thick shackle reduces leverage. A chain lock that leaves slack lets a thief use leverage or tools, so lock tightly.',
        'Combination locks save you carrying a key but can be picked by patient thieves with practice, and weak codes are guessable. Keyed locks need a spare key somewhere safe. In every case, buy from a reputable maker and keep the lock in good condition.',
      ],
    },
    {
      h: 'Where to lock: fixed objects, busy places and home',
      ul: [
        '**Choose a fixed object.** A purpose-built bike rail or a solid post that cannot be lifted off. Avoid thin signposts that can be lifted over the top and fences a thief can cut.',
        '**Choose a busy, well-lit spot.** Thieves avoid places where people can see them.',
        '**Lock both frame and wheel.** The frame is the most valuable part, but wheels are easy to steal.',
        '**Take removable parts.** Lights, computers, bags and batteries should come with you.',
        '**Lock at home too.** Bicycle Queensland advises locking in the yard, shed or garage. Apartment blocks are a common target.',
        '**Record the serial number.** Police advise recording it and registering it so a recovered bike can be returned.',
        '**Add an alarm or a tracker.** See our [bike alarm guide](/blog/bike-alarm/).',
      ],
    },
    {
      h: 'Locking an e-bike: extra weight and extra value',
      p: [
        'An e-bike is heavier and worth more than a standard bike, so it deserves a better lock. Choose a stronger chain, lock the frame and the wheels, and take the battery with you if it is removable, since the battery is a high-value item.',
        'A chain lock has the length to reach round a heavy frame and a post. A second lock, such as a folding lock or a U-lock, makes the job slower for a thief. Our [e-bike batteries guide](/blog/e-bike-batteries/) explains taking and storing the battery.',
        'If the bike lives outside, a cover keeps off the weather but does not secure it; see our [bicycle cover guide](/blog/bicycle-cover/). Lock the bike first, then cover it.',
      ],
    },
    {
      h: 'Bike chain padlock mistakes to avoid',
      ul: [
        '**Buying the cheapest chain.** A thin chain is quickly cut.',
        '**Locking to something movable.** A signpost that can be lifted off is not secure.',
        '**Leaving slack.** Slack gives a thief room to work.',
        '**Locking only the wheel.** A thief takes the rest of the bike.',
        '**Leaving the lock on the ground.** A lock on the pavement can be smashed.',
        '**Forgetting the serial number.** Record it before the bike is stolen.',
      ],
    },
    {
      h: 'Which bike chain padlock should you buy?',
      p: [
        'For a low-cost chain, the [OnGuard chain lock at $38.95](/shop/locks-and-security/onguard-chain-lock/) is the entry option. For a keyed chain with more security, the [Mastiff keyed chain-lock at $99](/shop/locks-and-security/mastiff-chain-lock-keyed/) is the step up. If you want an alarm as well, the [Kovix Steel Thunder alarmed folding lock at $109](/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/) is the pick.',
        'Send us what you ride and where you park and we will suggest a lock combination. You can also browse the full [locks and security range](/shop/locks-and-security/).',
      ],
    },
  ],
  faq: [
    { q: 'Is a chain lock or a U-lock better for a bike?', a: 'Bicycle Queensland calls a heavy-duty D-style lock the hardest for thieves to defeat. A chain is more flexible and longer. Many riders combine a U-lock for the frame with a chain or cable for the wheels.' },
    { q: 'How do I lock a bike properly?', a: 'Run the lock through the frame and one wheel and attach it to something fixed that cannot move. Add a second small cable lock for quick-release wheels, and lock up at home too, as Bicycle Queensland advises.' },
    { q: 'Can bolt-cutters cut a bike chain?', a: 'Thieves often carry bolt-cutters, according to Queensland Police. A thick, hardened chain and a strong lock resist them better than a thin chain or a cable, but no lock is unbreakable.' },
    { q: 'Should I choose a keyed or combination lock?', a: 'Keyed locks need a spare key kept safely. Combination locks save carrying a key but need a code that is not obvious. Choose a reputable maker and keep the lock in good condition.' },
    { q: 'Do you sell U-locks?', a: 'We do not currently stock a U-lock. Our range has two chain locks and an alarmed folding lock, and we can advise on combining them.' },
    { q: 'Should I register my bike serial number?', a: 'Yes. Queensland Police advise recording the serial number and registering it through the West End Serial Hub so a recovered bike can be returned to you.' },
  ],
  keywords: { primary: 'bike chain padlock', supporting: ['bike padlock and chain', 'bike chain lock', 'bicycle u lock', 'bike padlock', 'u lock'] },
  words: 0,
}
