// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Competitor review 29 Oct 2026 (E-Ozzie Fatboy review, Melbourne Powered Scrambler V2 review, Twelve Board Store guides, Fatboy's own Australian collection page): weaknesses are seller write-ups with no official sources, no prices in the comparison, vague passenger and legal wording, no mention of the DNA, and no parts and accessory pricing. Plan: AUD price table for every current model we list, what Fatboy publishes (models, EN 15194 certified variants, 2 year / 10,000 km warranty, no wattage on the collection page), Queensland and NSW rules, parts and accessory prices.
// Sources opened 29 Oct 2026: Fatboy Australian e-bike collection page (read for facts only, not linked because it sells the same bikes), E-Ozzie review (weaknesses only), Queensland Government electric bicycle rules page, Transport for NSW e-bike page.
// Product pages publish only names and prices (power N/A), so the post claims no motor, battery, weight or speed figures and tells readers to ask for the maker's sheet.
export const meta = {
  id: 'fatboy-electric-bike',
  slug: 'fatboy-electric-bike',
  url: '/blog/fatboy-electric-bike/',
  title: 'Fatboy Electric Bike: DNA, Harlem, Scrambler and Bagus',
  seoTitle: 'Fatboy Electric Bike: DNA, Harlem, Scrambler and Bagus',
  excerpt: 'Choosing a Fatboy electric bike? Compare DNA, Harlem, Scrambler and Bagus prices from $2,259, check the legal rules, and see parts and accessories we stock for each model.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '11 min',
  focus: 'fatboy electric bike',
  secondary: ['fatboy electric bikes', 'fatboy e bike', 'fatboy bike electric', 'fat boy e bike', 'fatboy electric bikes for sale'],
  tags: ['e bikes fatboy', 'fatboy ebike for sale', 'fatboy scrambler top speed', 'fatboy v2 scrambler', 'pink fatboy', 'fatboy e bikes for sale', 'fatboy scrambler seat cover', 'fatboy seat', 'fatboy seat cover', 'fatboy bikes near me'],
  image: {
    file: 'blog/fatboy-electric-bike.webp',
    alt: 'Fatboy DNA V3, Harlem V3 and Scrambler V3, a Fatboy electric bike range',
    query: 'fatboy electric bike',
    credit: null,
  },
  related: [
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-dna-v3/', name: 'Fatboy The DNA V3', price: 2259, note: 'The lowest-priced current Fatboy.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-harlem-v3/', name: 'Fatboy The Harlem V3', price: 3209, note: 'A Harlem V3.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-scrambler-v3/', name: 'Fatboy The Scrambler V3', price: 3399, note: 'A Scrambler V3.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-bagus-v3/', name: 'Fatboy The Bagus V3', price: 3879, note: 'A Bagus V3.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/', name: 'All fat tyre and scrambler e-bikes', note: 'Fat tyre e-bikes and scramblers.' },
  ],
  links: {
    to: [
      ['/shop/fat-tyre-and-scrambler-e-bikes/', 'fat tyre and scrambler e-bikes'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e-bikes guide'],
      ['/blog/e-bike-battery-charger/', 'e-bike battery charger guide'],
      ['/blog/bike-seat-cover/', 'bike seat cover buying guide'],
    ],
    from: [
      ['/shop/fat-tyre-and-scrambler-e-bikes/', 'fatboy electric bike buying guide'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-scrambler-v3/', 'fatboy e bike: models compared'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-dna-v3/', 'fatboy electric bikes for sale'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A Fatboy electric bike is a fat-tyre e-bike sold in four families: DNA, Harlem, Scrambler and Bagus. Compare prices and the maker\'s figures, and check the legal rules before you ride one on the road.',
  intro: [
    'A Fatboy electric bike is a fat-tyre e-bike from the brand Fatboy, sold as the DNA, Harlem, Scrambler and Bagus in several versions. Fatboy describes them as fat-tyre bikes for on-road and off-road riding, and they range from about $2,259 to $3,879 in our current V3 line. Pick by price, frame style and the figures the maker publishes.',
    'This guide compares the Fatboy models we list, explains what Fatboy itself publishes, covers the Queensland and New South Wales rules, shows the parts and accessories we stock and answers the questions buyers ask most. Prices are current Torque E-Bikes prices. For the wider category, see our [fat tyre e-bikes guide](/blog/fat-tyre-e-bikes/).',
  ],
  sections: [
    {
      h: 'Fatboy electric bike models and prices',
      p: [
        'We list the current V3 models and the older V2 bikes. Our product pages publish the name, brand and price only, so the table shows prices and nothing else. Ask us for the maker\'s motor, battery, range and weight figures before you decide.',
      ],
      table: {
        head: ['Model', 'Price', 'Where it sits'],
        rows: [
          ['[Fatboy The DNA V3](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-dna-v3/)', '$2,259', 'Lowest-priced current Fatboy'],
          ['[Fatboy The Harlem V3](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-harlem-v3/)', '$3,209', 'Harlem V3'],
          ['[Fatboy The Scrambler V3](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-scrambler-v3/)', '$3,399', 'Scrambler V3'],
          ['[Fatboy The Bagus V3](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-bagus-v3/)', '$3,879', 'Highest-priced current Fatboy'],
          ['[Fatboy Harlem V2 E-Bike](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-harlem-v2-e-bike/)', '$3,039', 'Older V2'],
          ['[Fatboy The Scrambler V2 E-Bike](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-scrambler-v2-e-bike/)', '$3,269', 'Older V2'],
          ['[Fatboy The Bagus V2 E-Bike](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-bagus-v2-e-bike/)', '$3,359', 'Older V2'],
        ],
      },
    },
    {
      h: 'What Fatboy publishes about its bikes',
      p: [
        'Fatboy\'s Australian website lists the DNA, Harlem, Scrambler and Bagus in several variants, including V3 versions and EN 15194 certified versions, and advertises a 2 year / 10,000 km warranty. The collection page does not state a motor wattage, a battery size or a top speed, and it describes the bikes as fat-tyre two-seater e-bikes for on-road and off-road riding.',
        'That gap matters. Seller write-ups often quote motor, battery, range and weight figures without linking to a maker sheet, so treat those numbers with care and ask for the maker\'s specification for the exact variant you want. Our own product pages publish power as not available, so we do not repeat figures we cannot show.',
        'The practical rule is simple: compare bikes by the certified, written specification for the exact model and year, not by a table in a review.',
      ],
    },
    {
      h: 'DNA, Harlem, Scrambler and Bagus: how to choose',
      ul: [
        '**Start with budget.** The DNA V3 is our lowest-priced current Fatboy at $2,259, and the Bagus V3 is the highest at $3,879.',
        '**Check the variant.** Fatboy sells V3 and EN 15194 certified versions, so the same family name can mean different bikes. Ask us which variant we list.',
        '**Compare the written specs.** Motor, battery, range, brakes, suspension and weight differ by model and year.',
        '**Think about use.** Beach and bush riding, city commuting and carrying a passenger each call for different features.',
        '**Check the warranty.** Fatboy advertises a 2 year / 10,000 km warranty. Ask us how it applies.',
        '**Consider spares.** We stock batteries, chargers, controllers, suspension and racks for several models, which helps long-term ownership.',
      ],
      img: { file: 'blog/fatboy-electric-bike-scrambler.webp', alt: 'Fatboy The Scrambler V3, a Fatboy e bike', w: 720, h: 540 },
    },
    {
      h: 'Top speed and power: what we can and cannot say',
      p: [
        'Buyers often search for a Fatboy Scrambler top speed. We do not publish a top speed for any Fatboy, because our product pages do not carry that figure and a number quoted from a review is not a rating. Whatever the motor can do, the legal limits for riding on public roads are set by the road rules, not by the bike.',
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, is pedal powered with motor assistance up to 25 km/h and may use a throttle only up to 6 km/h. E-bikes must meet EN 15194 and display a compliance label, and passengers can only be carried if the bike was made to carry them.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) allows 500 watts at present and requires 250 watts with an EN 15194 label from 1 March 2029. It says a bike that exceeds the limits is illegal even if restricted by an app. Any bike above 250 W is for off-road and private property use only, so ask us to confirm the motor rating and compliance of the exact bike before you buy.',
      ],
    },
    {
      h: 'Parts and accessories we stock for Fatboy bikes',
      p: [
        'Long-term ownership depends on spares. We list parts for several Fatboy models, and fitment depends on the version, so ask us before you order. Prices below are current.',
      ],
      table: {
        head: ['Part or accessory', 'Price', 'Notes'],
        rows: [
          ['[Fatboy Charger 52V](/shop/batteries-chargers-and-electronics/fatboy-charger-52v/)', '$89', 'Charger'],
          ['[Fatboy Additional Battery (all V2 models)](/shop/batteries-chargers-and-electronics/fatboy-additional-battery-all-v2-models/)', '$659', 'Extra battery for V2 models'],
          ['[Fatboy Cargo Rack Rear V3](/shop/racks-bags-and-trailers/fatboy-cargo-rack-rear-v3/)', '$119', 'Rear rack'],
          ['[Fatboy Headlight (V1 Scrambler / Harlem)](/shop/lights-and-horns/fatboy-headlight-v1-scrambler-harlem/)', '$139', 'Headlight'],
          ['[Fatboy Suspension Rear Scrambler](/shop/suspension-and-forks/fatboy-suspension-rear-scrambler/)', '$289', 'Rear suspension'],
          ['[Fatboy Longboard Bike Rack](/shop/racks-bags-and-trailers/fatboy-longboard-bike-rack/)', '$229', 'Bike rack'],
        ],
      },
    },
    {
      h: 'Seats, seat covers and comfort',
      p: [
        'Riders often look for a replacement Fatboy seat or a seat cover to refresh a worn saddle. We list Seat Drip seat covers from $93.95 and comfort items in our [seats, fenders and body range](/shop/seats-fenders-and-body/). Confirm fit for your Fatboy seat with us before ordering, because covers and seats are sized to specific bikes. See our [bike seat cover buying guide](/blog/bike-seat-cover/) for how to choose.',
        'If the seat is the problem, check the height and tilt first. A saddle that is too high or tipped forward causes soreness on any bike.',
      ],
    },
    {
      h: 'Colours, stock and buying from outside Brisbane',
      p: [
        'Colours and variants change by batch, and some riders ask for a pink Fatboy or a particular finish. Ask us what is in stock before you order, rather than assuming a colour from an image. We are based in Brisbane City and ship Australia-wide with dangerous-goods certified dispatch, so you do not need a Fatboy store near you to buy.',
        'Payment is by bank transfer, PayID or crypto, and the minimum order is $499.99. Shipping is 10 per cent of goods and free from $9,900, and crypto payments take 10 per cent off goods and shipping.',
      ],
    },
    {
      h: 'Charging, battery care and servicing',
      ul: [
        '**Use the right charger.** Use the charger for your bike\'s battery voltage. See our [e-bike battery charger guide](/blog/e-bike-battery-charger/).',
        '**Charge in a safe place.** Do not leave a battery charging unattended on a flammable surface.',
        '**Store the battery with care.** Lithium batteries are Class 9 dangerous goods for transport, so ship and store them as the maker advises.',
        '**Do not open the battery or controller.** Leave repairs to a specialist.',
        '**Check tyres and brakes often.** A heavy fat-tyre bike wears them quickly.',
        '**Keep a service record.** It supports warranty claims.',
      ],
    },
    {
      h: 'Riding a fat-tyre e-bike: what to expect',
      ul: [
        '**Weight.** Fat-tyre e-bikes are heavy because of the frame, tyres and battery, so plan how you will lift and store the bike. Ask us for the maker\'s weight for the model you choose.',
        '**Tyre pressure.** Wide tyres run at lower pressures than road tyres, and the right pressure changes by surface. Follow the maker\'s guidance and check pressure often.',
        '**Braking distance.** A heavy bike with a passenger needs more room to stop. Leave a larger gap and check brake pads regularly.',
        '**Sand and soft ground.** Fat tyres float better than narrow ones, but a heavy bike can still bog down, so ride smoothly and keep momentum.',
        '**Storage and security.** A valuable e-bike needs a good lock and a safe place to park. See our [bike chain padlock guide](/blog/bike-chain-padlock/).',
        '**Protective gear.** Wear a helmet that meets the standard for your state, and consider gloves and eye protection.',
      ],
    },
    {
      h: 'Ownership costs beyond the price',
      p: [
        'The ticket price is only part of the cost. Budget for a lock, a helmet, lights and a place to charge. Add the cost of servicing, tyres and brake pads, which wear faster on a heavy bike. A spare battery adds range but also cost; our additional battery for V2 models is $659, and a charger is $89.',
        'Shipping is 10 per cent of goods and free from $9,900, so a single bike usually carries a shipping cost. Paying with crypto takes 10 per cent off goods and shipping. Check the total at checkout before you decide.',
      ],
    },
    {
      h: 'Fatboy electric bike mistakes to avoid',
      ul: [
        '**Trusting a number from a review.** Ask for the maker\'s sheet for your variant.',
        '**Assuming the bike is road legal.** Check the motor rating and compliance label.',
        '**Ignoring the passenger rule.** Queensland says a passenger can only be carried if the bike was made to carry them.',
        '**Mixing up V2 and V3 parts.** Fitment depends on the version.',
        '**Skipping the weight check.** Fat-tyre e-bikes are heavy to lift and rack.',
        '**Charging with the wrong charger.** Match voltage and connector.',
      ],
    },
    {
      h: 'Which Fatboy electric bike should you buy?',
      p: [
        'If price is the deciding factor, start with the [Fatboy DNA V3 at $2,259](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-dna-v3/). For a mid-range bike, compare the [Harlem V3 at $3,209](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-harlem-v3/) and the [Scrambler V3 at $3,399](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-scrambler-v3/). The [Bagus V3 at $3,879](/shop/fat-tyre-and-scrambler-e-bikes/fatboy-the-bagus-v3/) is the top of the current range. Browse the full [fat tyre and scrambler e-bikes range](/shop/fat-tyre-and-scrambler-e-bikes/).',
        'Tell us where you ride and who rides with you, and we will confirm the variant, the maker\'s figures and the compliance for your state.',
      ],
    },
  ],
  faq: [
    { q: 'How much is a Fatboy electric bike?', a: 'Our current V3 line runs from $2,259 for the DNA to $3,879 for the Bagus, and older V2 bikes start at $3,039. Prices change, so check the product page or ask us.' },
    { q: 'Is a Fatboy electric bike road legal?', a: 'It depends on the exact bike. Queensland requires a motor of 250 W continuous rated power, assistance up to 25 km/h and an EN 15194 label. Bikes above 250 W are for off-road and private property use only. Ask us to confirm the compliance of the bike you choose.' },
    { q: 'What is the Fatboy Scrambler top speed?', a: 'We do not publish a top speed, and our product pages carry no speed figure. Legal limits on public roads are set by the road rules, so check the rules in your state and ask for the maker\'s written specification.' },
    { q: 'What warranty does Fatboy offer?', a: 'Fatboy\'s Australian site advertises a 2 year / 10,000 km warranty. Ask us how it applies to the bike you buy and keep your service records.' },
    { q: 'Can I carry a passenger on a Fatboy?', a: 'Only if the bike was made to carry a passenger, according to the Queensland Government. Check the maker\'s specification and your state\'s rules before you do.' },
    { q: 'Do you stock Fatboy parts?', a: 'Yes, including chargers, extra batteries, racks, headlights, suspension and controllers for several models. Fitment depends on the version, so ask us before you order.' },
  ],
  keywords: { primary: 'fatboy electric bike', supporting: ['fatboy electric bikes', 'fatboy e bike', 'fatboy bike electric', 'fat boy e bike', 'fatboy electric bikes for sale'] },
  words: 0,
}
