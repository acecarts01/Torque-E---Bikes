// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (28 Oct 2026), recorded in docs/used-keywords.csv.
// Competitor analysis (docs/competitor-notes.md): used e-bike pages give generic advice and miss test-ride steps, online listing risks and Australian sources; this post is a hands-on inspection and test-ride guide for used electric bicycles, separate from the second hand vs new price comparison.
// Sources opened 27 Oct 2026: Fire and Rescue NSW e-bike battery safety page, Queensland Police bicycle theft prevention post and Queensland Government electric bicycle rules page.
// We sell new bikes only and list no used bikes.
export const meta = {
  id: 'used-electric-bicycles',
  slug: 'used-electric-bicycles',
  url: '/blog/used-electric-bicycles/',
  title: 'Used Electric Bicycles: Inspection and Test Ride Checklist',
  seoTitle: 'Used Electric Bicycles: Inspection and Test Ride Checklist',
  excerpt: "Buying used electric bicycles? Follow this inspection and test ride checklist for the battery, motor, brakes and frame, and spot online listing red flags.",
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '9 min',
  focus: 'used electric bicycles',
  secondary: ['used electric bikes for sale', 'used electric bikes', 'used e bikes for sale', 'used electric bicycle for sale', 'used ebikes'],
  tags: ['electric cycle used', 'used ebike', 'used electric bike', 'used e bikes', 'used ebike for sale', 'used electric bike for sale', 'e bikes used', 'ebike used', 'used bike electric', 'bike electric used'],
  image: {
    file: 'blog/used-electric-bicycles.webp',
    alt: 'DYU C6 and Aventon Pace 4 new e-bikes to compare against used electric bicycles',
    query: 'used electric bicycles',
    credit: null,
  },
  related: [
    { href: '/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', name: 'DYU C6 Electric Bike', price: 849, note: 'A low-priced new commuter to compare.' },
    { href: '/shop/commuter-and-urban-e-bikes/aventon-pace-4/', name: 'Aventon Pace 4', price: 2199, note: 'A new commuter to compare.' },
    { href: '/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', name: 'Vamos Hefe Battery (48V 15Ah Silverfish)', price: 539, note: 'A replacement battery example.' },
    { href: '/shop/locks-and-security/onguard-chain-lock/', name: 'OnGuard Chain Lock', price: 38.95, note: 'Lock any bike you buy.' },
    { href: '/shop/commuter-and-urban-e-bikes/', name: 'All commuter and urban e-bikes', note: 'New commuter e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/commuter-and-urban-e-bikes/', 'commuter and urban e-bikes'],
      ['/blog/2nd-hand-electric-bikes/', '2nd hand electric bikes guide'],
      ['/blog/e-bike-batteries/', 'e bike batteries guide'],
      ['/blog/bike-chain-padlock/', 'bike chain padlock guide'],
    ],
    from: [
      ['/shop/commuter-and-urban-e-bikes/', 'used electric bicycles checklist'],
      ['/shop/commuter-and-urban-e-bikes/aventon-pace-4/', 'used electric bikes: what to check'],
      ['/shop/locks-and-security/onguard-chain-lock/', 'used ebike: lock it properly'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Before you pay for used electric bicycles, inspect the battery, the electronics, the brakes and the frame, ride the bike under load and check the serial number. Walk away if anything does not add up.',
  intro: [
    'Used electric bicycles can be good value, but the problems are hidden: a worn battery, a failing controller or a cracked frame near the motor will not show in a listing photo. This guide is a hands-on checklist for inspecting and test riding used electric bicycles, with the red flags to watch for in online listings. It complements our [2nd hand electric bikes guide](/blog/2nd-hand-electric-bikes/), which compares second hand and new prices.',
    'We sell new bikes only and list no used bikes, so this guide is neutral advice, with safety points from Fire and Rescue NSW and Queensland Police. Prices are current Torque E-Bikes prices for comparison.',
  ],
  sections: [
    {
      h: 'Before you meet the seller: questions to ask',
      ul: [
        '**Make, model and year.** Check that parts and service exist.',
        '**Battery age and history.** When was it bought, replaced or repaired?',
        '**Why are you selling?** Vague answers are a warning.',
        '**What is included?** Charger, keys, manual, receipt.',
        '**Does it have an EN 15194 label?** Ask for a photo.',
        '**Can I see proof of ownership?** A receipt or the original purchase record.',
        '**Can I test ride it?** A refusal is a red flag.',
      ],
    },
    {
      h: 'Red flags in used electric bike for sale listings',
      ul: [
        '**A price far below similar bikes.** It may be stolen, faulty or a scam.',
        '**Stock photos or no photos of the serial number.** Ask for current photos.',
        '**Pressure to pay quickly or by gift card or transfer before you see the bike.**',
        '**A seller who cannot answer basic questions** about the battery or the motor.',
        '**No charger.** A replacement charger must match the pack.',
        '**Claims of speed unlocks or extra power.** Those can make the bike illegal on roads.',
        '**Importer bikes with no label.** They may not be road legal.',
      ],
      img: { file: 'blog/used-electric-bicycles-aventon-pace-4.webp', alt: 'Aventon Pace 4 new commuter e-bike, a benchmark for used electric bicycles', w: 720, h: 540 },
    },
    {
      h: 'Inspect the battery first',
      p: [
        'Fire and Rescue NSW\'s [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) says cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires, and that damaged batteries should be kept outside in a ventilated area. Treat the battery with respect.',
      ],
      ul: [
        '**Look at the case.** Cracks, dents, swelling, corrosion or burn marks mean walk away.',
        '**Smell and heat.** A hot battery or a chemical smell is a warning.',
        '**Check the charger.** It must match the pack and show no damage.',
        '**Check the label.** Voltage and capacity should match the bike.',
        '**Ask about charging habits.** Overnight or hot-car charging shortens life.',
        '**Price a replacement.** In our range, packs start at $539. See our [e bike batteries guide](/blog/e-bike-batteries/).',
      ],
    },
    {
      h: 'The test ride: what to do and what to feel',
      ul: [
        '**Switch on and read the display.** Look for error codes and check the battery bars.',
        '**Ride at all assist levels.** The motor should come in smoothly and cut out cleanly.',
        '**Ride up a slope.** A weak battery sags under load; the bars drop quickly.',
        '**Test the brakes.** They should stop the bike evenly. Check that brake cut-offs stop the motor if fitted.',
        '**Listen.** Grinding, clicking or whining from the motor or drivetrain.',
        '**Check the throttle** if there is one: it should respond and release cleanly.',
        '**Change gears** through the whole range.',
        '**Brake and steer at speed.** Check for wobble or looseness in the headset.',
      ],
    },
    {
      h: 'Frame, motor and wiring checks',
      ul: [
        '**Frame.** Look for cracks near the welds, head tube, motor mount and battery mount.',
        '**Wheels.** Spin them and check for wobble and loose spokes.',
        '**Cables and connectors.** Look for chafed, spliced or taped wiring and loose connectors.',
        '**Motor.** Check for oil leaks, damage and play in the axle.',
        '**Drivetrain.** Chain stretch, worn cassette and chainrings cost money to replace.',
        '**Bolts and fixings.** Rust and stripped heads show poor care.',
        '**Aftermarket parts.** Unusual controllers or kits may mean the bike has been modified.',
      ],
    },
    {
      h: 'Legal label, modifications and the serial number',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a 250W motor, assistance up to 25 km/h and an EN 15194 compliance label, and that after-market conversion kits are not compliant with the standard. A used bike that has been tuned or converted may not be legal on roads and paths.',
        'The Queensland Police [bicycle theft prevention post](https://mypolice.qld.gov.au/brisbanecentral/2021/06/02/scooter-and-bicycle-theft-prevention/) advises recording the serial number and registering it with police through the West End Serial Hub. When you buy, compare the serial number with the paperwork, photograph it and keep a copy. After you buy, register it and lock the bike properly; see our [bike chain padlock guide](/blog/bike-chain-padlock/).',
      ],
    },
    {
      h: 'Paying, handover and what to do after you buy',
      ul: [
        '**Pay only after the inspection and test ride.**',
        '**Get a receipt** with the seller\'s name, the serial number and the date.',
        '**Meet in a public place** and bring a friend if you can.',
        '**Charge and check the battery at home** on a hard surface, never unattended.',
        '**Service the bike.** Have a mechanic check the brakes, drivetrain and wiring.',
        '**Add safety gear.** A helmet, lights and a lock. See our [ebike accessories guide](/blog/ebike-accessories/).',
        '**Register the serial number.**',
      ],
    },
    {
      h: 'Used electric bicycles mistakes to avoid',
      ul: [
        '**Skipping the battery check.** It is the most expensive part.',
        '**Buying unseen.** Inspect and test ride.',
        '**Paying before checking the serial number.**',
        '**Ignoring the legal label.** An unlabelled bike may not be road legal.',
        '**Charging unattended.** Follow the safety advice.',
        '**Forgetting that a new bike may cost the same.** Compare with new prices.',
      ],
    },
    {
      h: "Inspection summary: good signs and walk-away signs",
      p: [
        "Use this table as a quick scoresheet when you inspect used electric bicycles.",
      ],
      table: {"head":["Check","Good sign","Walk away if"],"rows":[["Battery case","Clean, no cracks, original","Swollen, cracked, hot or smelly"],["Charger","Original, undamaged","Missing or damaged"],["Display","Powers on, no error codes","Error codes or dead screen"],["Motor","Smooth and quiet","Grinding or clicking"],["Brakes","Firm and even","Spongy, noisy or worn out"],["Frame","No cracks near welds","Cracks or repairs"],["Label and serial number","EN 15194 label and a matching serial number","No label or a scratched-off serial number"]]},
    },
    {
      h: "Meeting the seller safely and what to bring",
      ul: [
        "Meet in a public, well-lit place and bring a friend if you can.",
        "Bring a charger socket extension or ask to see the bike charge.",
        "Bring a torch, a tape measure and a phone to photograph the serial number and label.",
        "Bring a helmet for the test ride.",
        "Bring a means of payment you can trace, and avoid paying in advance.",
        "Be ready to walk away.",
      ],
    },
    {
      h: "A service plan after you buy used",
      p: [
        "Treat a used e-bike like a project. Within the first week, have a mechanic who works on e-bikes check the brakes, drivetrain, wheels and wiring. Replace consumables such as brake pads, tyres and the chain if they are worn, and keep a record.",
        "Charge the battery on a hard surface and watch how it behaves on the first rides: sudden drops in charge or heat are warning signs. If the battery fails, price a replacement before you decide whether the bike is worth keeping. Our [e bike batteries guide](/blog/e-bike-batteries/) and [electric bike price guide](/blog/electric-bike-price/) help with the numbers.",
      ],
    },
    {
      h: "Reading listing photos and descriptions",
      ul: [
        "Ask for photos of the battery label, the serial number, the display and the charger.",
        "Look for a clean frame around the motor and battery mounts.",
        "Check that the photos show the actual bike and not stock images.",
        "Be wary of descriptions that say only \"works great\" with no detail.",
        "Compare the listing with similar bikes and with the new price.",
        "Ask for a short video of the bike running if you cannot visit.",
      ],
    },
    {
      h: "Testing the battery under load: step by step",
      ul: [
        "Start with the battery fully charged, which the seller can show on the display.",
        "Ride on a flat road for five minutes at a medium assist level and note the bars.",
        "Ride up a slope at a high assist level and watch for a sudden drop in the bars.",
        "Stop and let the battery recover; it should not drop sharply while resting.",
        "Feel the battery case for heat; it should be warm at most.",
        "Compare what you see with the seller's claimed range.",
      ],
    },
    {
      h: "Checking for modifications and tuning",
      p: [
        "Some used e-bikes have been tuned for more power or speed, by a bigger controller, a different battery or a software unlock. Look for mismatched or aftermarket controllers and displays, a battery with an unusual label, loose wiring, a speed-limiter plug that has been removed and a seller who talks about \"unlocked\" speeds.",
        "Under the Queensland rules, a legal e-bike has a 250W continuous motor and assistance up to 25 km/h, and after-market conversion kits are not compliant with the standard. A tuned bike is a private-property machine, and it may be unsafe because the brakes and frame were not made for the extra power.",
        "Ask the seller directly whether the bike has been modified. If they hesitate, or the answer does not match what you see, walk away. A standard bike with a label is a safer buy than a tuned one at any price.",
      ],
    },
    {
      h: 'Used or new: how to decide',
      p: [
        'Compare the total: the used price plus a possible battery and servicing against a new bike with a warranty. Our [electric bike price guide](/blog/electric-bike-price/) shows what new bikes cost, and our [low cost e bikes guide](/blog/low-cost-e-bikes/) lists the lowest-priced options. A new [DYU C6 at $849](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/) or an [Aventon Pace 4 at $2,199](/shop/commuter-and-urban-e-bikes/aventon-pace-4/) comes with known battery age and Australian consumer guarantees.',
        'Send us your budget and your riding and we will give you an honest comparison. You can also browse the [commuter and urban e-bikes range](/shop/commuter-and-urban-e-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'What should I check when buying used electric bicycles?', a: 'The battery first, then the display and error codes, the motor, brakes, frame, drivetrain, label and serial number. Test ride at several assist levels and up a slope.' },
    { q: 'How do I know if a used e-bike battery is healthy?', a: 'Ask its age and history, inspect the case for damage, swelling or heat, check the charger and test the bike under load. A battery that sags quickly on a slope is tired.' },
    { q: 'Is it safe to buy used electric bikes online?', a: 'It can be if you inspect first, avoid paying in advance and check the serial number and paperwork. Be wary of prices far below the market and pressure to pay quickly.' },
    { q: 'Are used electric bikes legal on the road?', a: 'Only if they meet the rules: in Queensland, a 250W motor, assistance up to 25 km/h and an EN 15194 label. Tuned or converted bikes may not be legal.' },
    { q: 'Can I take a used e-bike to a mechanic before I buy?', a: 'Yes, and it is a good idea if you are unsure. Ask the seller if you can have it inspected by a mechanic who works on e-bikes.' },
    { q: 'Do you sell used electric bicycles?', a: 'No. We sell new bikes only. We can give you new prices and replacement battery prices so you can compare.' },
  ],
  keywords: { primary: 'used electric bicycles', supporting: ['used electric bikes for sale', 'used electric bikes', 'used e bikes for sale', 'used electric bicycle for sale', 'used ebikes'] },
  words: 0,
}
