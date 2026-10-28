// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (28 Oct 2026), recorded in docs/used-keywords.csv.
// Competitor analysis (docs/competitor-notes.md): second-hand e-bike pages are generic or about cars and give no price comparison with new bikes, no Australian sources and no theft advice; this post compares used and new totals with a worked battery example, cites Fire and Rescue NSW, Queensland Police and Queensland rules.
// Sources opened 27 Oct 2026: Fire and Rescue NSW e-bike battery safety page and Queensland Police bicycle theft prevention post (opened in a browser or fetched), Queensland Government electric bicycle rules page.
// We sell new bikes only; the post lists no second-hand bikes. The battery example uses our listed pack price as an illustration.
export const meta = {
  id: '2nd-hand-electric-bikes',
  slug: '2nd-hand-electric-bikes',
  url: '/blog/2nd-hand-electric-bikes/',
  title: '2nd Hand Electric Bikes: Buy Second Hand or New?',
  seoTitle: '2nd Hand Electric Bikes: Buy Second Hand or New?',
  excerpt: 'Considering 2nd hand electric bikes? Compare second hand and new prices with a battery worked example, see what to check, and when a new e-bike from $659 is the better buy.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: '2nd hand electric bikes',
  secondary: ['second hand electric bikes for sale', 'second hand e bikes', 'second hand electric bicycle', 'second hand ebikes', 'e bike 2nd hand'],
  tags: ['second hand electric bikes', 'second hand electric bike', 'second hand ebike', '2nd hand e bikes', '2nd hand ebike', 'electric bikes second hand', 'electric bike second hand', 'e bike second hand', 'second hand e bike', 'second hand electric cycle'],
  image: {
    file: 'blog/2nd-hand-electric-bikes.webp',
    alt: 'DYU D3+, DYU C6 and Vamos Hefe battery, new options to weigh against 2nd hand electric bikes',
    query: '2nd hand electric bikes',
    credit: null,
  },
  related: [
    { href: '/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/', name: 'DYU D3+ Smart Electric Bike Black', price: 659, note: 'The lowest-priced new e-bike in our range.' },
    { href: '/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', name: 'DYU C6 Electric Bike', price: 849, note: 'A low-priced new commuter.' },
    { href: '/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', name: 'Vamos Hefe Battery (48V 15Ah Silverfish)', price: 539, note: 'A replacement battery example.' },
    { href: '/shop/commuter-and-urban-e-bikes/', name: 'All commuter and urban e-bikes', note: 'New commuter e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/commuter-and-urban-e-bikes/', 'commuter and urban e-bikes'],
      ['/blog/low-cost-e-bikes/', 'low cost e bikes buying guide'],
      ['/blog/e-bike-batteries/', 'e bike batteries guide'],
      ['/blog/electric-bike-price/', 'electric bike price guide'],
    ],
    from: [
      ['/shop/commuter-and-urban-e-bikes/', '2nd hand electric bikes guide'],
      ['/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/', 'second hand electric bikes: new alternative'],
      ['/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', 'second hand ebike: battery replacement cost'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A second hand e-bike is only a bargain if the battery is good. A tired battery can cost more than a new entry-level bike, so check it first, and compare with new before you pay.',
  intro: [
    'Searching for 2nd hand electric bikes turns up thousands of listings, and the savings look tempting. But an e-bike is not an ordinary used bike: its battery wears out, its electronics are hard to test and a private sale usually comes with no warranty. This guide compares second hand and new prices with a worked battery example, shows what to check and explains when a new bike from $659 is the smarter buy.',
    'We sell new e-bikes only, so we list no second-hand bikes. We can tell you what a replacement battery costs and what a new bike costs, and the numbers below show why that matters. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Second hand electric bikes vs new: a worked price example',
      p: [
        'The battery is the expensive part. Suppose a second hand e-bike is listed for $500 and the battery is nearly worn out. A replacement pack, for illustration, is $539 for the Vamos Hefe 48V 15Ah in our range (a pack must match your bike). The true cost of that used bike is then $1,039, which is more than the new DYU C6 at $849.',
        'The break-even is simple: a used bike that needs a new battery must cost less than the new bike price minus the battery price to be worth it. Against the DYU C6 at $849 and a $539 pack, that is $310. Against the DYU D3+ folding e-bike at $659, it is $120.',
      ],
      table: {
        head: ['Scenario', 'Used bike price', 'Battery', 'True cost', 'Compare with'],
        rows: [
          ['Used bike, battery is good', '$500', '$0', '$500', 'New DYU D3+ at $659'],
          ['Used bike, battery needs replacing', '$500', '$539', '$1,039', '[New DYU C6 at $849](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/)'],
          ['Used bike, battery needs replacing', '$300', '$539', '$839', '[New DYU C6 at $849](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/)'],
        ],
      },
    },
    {
      h: 'Why the battery decides everything',
      p: [
        'Fire and Rescue NSW\'s [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) warns that cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires, and that battery repairs, servicing and installations should be done by an experienced e-bike mechanic. That is the single most important point for anyone buying second hand electric bikes.',
        'A battery loses capacity with age and use, and age alone does not tell you its health. Ask how old it is, how it was charged and stored, whether it has been repaired or replaced, and whether the original charger is included. Avoid any pack that is swollen, damaged, hot or smells odd.',
        'If you buy second hand, treat the battery as a separate purchase: assume you may need to replace it, and price the bike accordingly. Our [e bike batteries guide](/blog/e-bike-batteries/) explains how to read a label and what capacity means.',
      ],
    },
    {
      h: '2nd hand electric bikes: when buying one is a good idea',
      ul: [
        '**The seller can show the battery is healthy.** A test under load or a recent replacement is ideal.',
        '**The bike is a known model with parts and service available.** Check that spares exist.',
        '**The price leaves room for a new battery.** Use the break-even above.',
        '**It carries the original charger and manual.**',
        '**It has an EN 15194 label** if you plan to ride on roads and paths.',
        '**You can test ride it** and check the fit.',
        '**You know your way around bikes** or have a mechanic who does.',
      ],
      img: { file: 'blog/2nd-hand-electric-bikes-dyu-d3.webp', alt: 'DYU D3+ smart electric bike, a new alternative to 2nd hand electric bikes', w: 720, h: 540 },
    },
    {
      h: 'When a new e-bike is the better buy',
      ul: [
        '**The used bike needs a battery.** The sum often beats a new entry-level bike.',
        '**You want a warranty and local support.** A private sale rarely has either.',
        '**You need the legal label.** A new bike can be checked before you buy.',
        '**The model is old or unsupported.** Parts and service may be hard to find.',
        '**You are not sure how to check an e-bike.** The risk is greater than the saving.',
        '**You want a known battery age.** New means new.',
      ],
    },
    {
      h: 'Legal label and rules: check before you ride',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, is pedal powered with motor assistance up to 25 km/h and must display an EN 15194 compliance label. It says after-market conversion kits are not compliant with the standard and bikes with motors above 250 watts are not allowed, even if they can be unlocked for private property use.',
        'A second hand bike that has been tuned, converted or imported without a label may not be legal on public roads and paths. Ask to see the label and the motor rating, and be wary of a seller who cannot show them.',
      ],
    },
    {
      h: 'Paperwork, theft and serial numbers',
      p: [
        'The Queensland Police [bicycle theft prevention post](https://mypolice.qld.gov.au/brisbanecentral/2021/06/02/scooter-and-bicycle-theft-prevention/) advises recording the serial number, keeping it safe and registering it with police through the West End Serial Hub, and says recovery rates for stolen bikes can be very low. For a second hand purchase, that means checking the serial number before you pay.',
        'Ask for proof of ownership, a receipt or the original purchase record, and compare the serial number with the bike. Meet in a public place, and walk away if the seller is vague. A bargain that turns out to be stolen is not yours to keep.',
      ],
    },
    {
      h: 'A short inspection checklist for second hand e bikes',
      ul: [
        '**Battery.** Age, condition, charge behaviour, original charger. Ask about swelling, heat and smells.',
        '**Display and error codes.** Turn the system on and read the display.',
        '**Motor.** Listen for grinding or clicking, and feel for smooth assist.',
        '**Brakes.** Pads, rotors and levers; test them.',
        '**Frame.** Check welds and the area around the motor and battery mounts for cracks.',
        '**Drivetrain.** Chain, cassette and chainrings; worn parts cost money.',
        '**Tyres and wheels.** Wear and straightness.',
        '**Label and serial number.** EN 15194 label and a serial number that matches the paperwork.',
      ],
    },
    {
      h: 'Second hand electric bicycle mistakes to avoid',
      ul: [
        '**Ignoring the battery.** It is the most expensive part.',
        '**Buying without a test ride.** Check fit and function.',
        '**Skipping the paperwork.** Check the serial number and proof of ownership.',
        '**Trusting an unlabelled import.** It may not be road legal.',
        '**Paying before you check.** Inspect first.',
        '**Forgetting safety gear.** Budget for a helmet, lights and a lock.',
      ],
    },
    {
      h: "Where second hand electric bikes for sale come from, and the risks",
      ul: [
        "**Private sellers.** Often the best prices, with no warranty and the most risk.",
        "**Marketplaces and classifieds.** Wide choice, but listings can be misleading and scams exist.",
        "**Dealers selling ex-demo or trade-ins.** Higher prices, but a battery check and some cover are more likely.",
        "**Imported bikes.** May lack a compliance label and local support.",
        "**Stolen bikes.** Check the serial number and ownership.",
        "**Bikes with modified power.** They may be illegal on the road.",
      ],
    },
    {
      h: "Using the battery to negotiate the price",
      p: [
        "The battery gives you a fair way to negotiate. If it is old or untested, subtract the replacement cost from your offer. A seller who cannot show the battery's condition should expect a lower offer, and a seller who has a recent receipt for a new pack has a stronger case for a higher price.",
        "Be honest and specific: say what you found and what a replacement pack costs. In our range packs start at $539, so a bike that needs one must be priced to match.",
      ],
    },
    {
      h: "After you buy: a service plan for a second hand e-bike",
      ul: [
        "Have a mechanic check the brakes, wheels, drivetrain and wiring before you ride far.",
        "Replace worn chains, cassettes and brake pads.",
        "Charge the battery on a hard surface and watch how it behaves on the first rides.",
        "Fit the safety gear and a good lock.",
        "Register the serial number with police.",
        "Keep a record of what you did and when.",
      ],
    },
    {
      h: "What protection do you have when you buy second hand?",
      p: [
        "Protection depends on who sells the bike. A dealer is more likely to offer some cover and to be responsible for the goods it sells, while a private seller usually sells as is. Rules vary, so ask the seller directly what is covered, get it in writing and check your state's consumer protection office if you are unsure.",
        "A new bike from a seller comes with Australian consumer guarantees, which the ACCC explains on its warranties page. That is one reason the break-even comparison above matters: the used price must cover the extra risk.",
      ],
    },
    {
      h: "A quick decision guide",
      ul: [
        "If the battery is new or proven and the price is low, a second hand bike can be a good buy.",
        "If the battery is unknown, assume you must replace it and use the break-even price.",
        "If the bike has no label, or has been modified, walk away for road use.",
        "If you cannot inspect or test ride, do not buy.",
        "If you want a warranty, buy new.",
      ],
    },
    {
      h: 'Should you buy second hand or new?',
      p: [
        'If you are comfortable with the checks and the price leaves room for a battery, a second hand bike can save money. If not, a new bike is simpler and often cheaper than it looks once the battery is counted. In our range, the [DYU D3+ at $659](/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/) and the [DYU C6 at $849](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/) are the lowest-priced new options, and a replacement [battery starts at $539](/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/).',
        'Send us your budget and your riding and we will give you an honest view. You can also browse the [commuter and urban e-bikes range](/shop/commuter-and-urban-e-bikes/) and read our [low cost e bikes guide](/blog/low-cost-e-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'Are 2nd hand electric bikes worth buying?', a: 'Sometimes. The battery decides it. If the battery needs replacing, a used bike can cost more than a new entry-level e-bike. Check the battery and the price carefully.' },
    { q: 'How do I check a second hand e-bike battery?', a: 'Ask its age and history, look for swelling, heat or damage, check the original charger and test the bike under load. Fire and Rescue NSW warns about cheap, unprotected and second-hand batteries.' },
    { q: 'Do second hand electric bikes have a warranty?', a: 'Private sales usually have none, so you carry the risk. A new bike from a seller comes with Australian consumer guarantees and any manufacturer warranty.' },
    { q: 'Is a second hand e-bike legal on the road?', a: 'Only if it meets the rules: in Queensland, a 250W motor, assistance up to 25 km/h and an EN 15194 label. Tuned or converted bikes may not be legal.' },
    { q: 'Do you sell second hand e-bikes?', a: 'No. We sell new bikes only. We can tell you the new price and replacement battery prices so you can compare.' },
    { q: 'How do I avoid buying a stolen e-bike?', a: 'Ask for proof of ownership, compare the serial number, meet in a public place and be wary of vague sellers. Queensland Police advise recording and registering serial numbers.' },
  ],
  keywords: { primary: '2nd hand electric bikes', supporting: ['second hand electric bikes for sale', 'second hand e bikes', 'second hand electric bicycle', 'second hand ebikes', 'e bike 2nd hand'] },
  words: 0,
}
