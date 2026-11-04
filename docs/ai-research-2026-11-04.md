# AI search research, 4 Nov 2026

Platforms reached: **Perplexity** (owner signed in, browser pane, 9 prompts) and **ChatGPT** (guest mode, 1 prompt saved; guest takes one question per page and the tab froze when saving the second). **Not reached:** Gemini, Claude, Copilot, Google AI Mode (need the owner's sign-in; I never sign in or create accounts).
Raw answers, verbatim with date and prompt: `docs/semrush-raw/ai_perplexity_1..9.0.txt`, `docs/semrush-raw/ai_chatgpt_1.0.txt` (JSON: platform, date, prompt, answer).

## 1. Who the AI assistants recommend (Torque is named by neither)

| Prompt | Models named | Retailers named |
|---|---|---|
| Best electric dirt bikes in Australia and where to buy | Sur-Ron Light Bee X, Talaria xXx / Sting / Komodo, E Ride Pro SS/SR, Stark VARG, Arctic Leopard, Razor MX350/MX650, Takani, RFN SX-E500 | ChatGPT: E Surron Bike, Australian Electric Motor Co, Talaria Australia (aebikes.com.au). Perplexity: Melbourne Powered, Electric Kicks, E-Move Bikes, Takani, Penrith Pit Bike, MXR Motorsports |
| Where to buy a Sur-Ron Light Bee X | Light Bee X | MCAS, Eozzie, Electric Kicks, iScoot, Midcoast Moto, JTR, BikeSales |
| Best kids electric dirt bike | RFN Warrior Kids SX-E500, Takani Kids, Razor Dirt Rocket MX125, Ampd Bros EVO Racing | Melbourne Powered, E-Move Bikes, Product Nation |
| Best commuter e-bike under $3,000 | Lekker Jordaan Urban, NCM T3s, VelectriX Urban Pulse, Trek Verve+ 1 LT | ebikefinder |
| Online stores for e-bikes, kits and parts | n/a | Electric Bike Superstore, Cap Rouge, PedL, F1 Ebikes, 99 Bikes |
| Conversion kit cost | Bafang BBS01/BBS02/BBSHD, Bikee mid-drives; AUD $500-$1,500 kit only, $1,300-$1,650 street-legal 250 W with battery | rev-bikes and others |

## 2. Brand-entity problem (needs the owner's attention)
Asked "What do you know about Torque E-Bikes Australia (torquee-bikesaustralia.com.au)? Are they reputable?", Perplexity answered with a different business profile: "Torque E Bikes AU Pty Ltd", ABN 71 683 987 251, GST-registered from 5 Feb 2025, VIC 3754, a Melbourne-founded business started in 2023 at an address in Doreen, VIC; Trustpilot 4.0 from 4 reviews; a Reddit post alleging dropshipping.
- **Verified on ABN Lookup (4 Nov 2026):** that entity exists (TORQUE E BIKES AU PTY LTD, ABN active from 5 Feb 2025, GST registered, VIC 3754).
- **The live site says something different:** Brisbane HQ, founded 2007, The Torque Team Pty Ltd; no mention of Doreen, Melbourne or 2023 on /, /about/, /contact/, /terms/.
- **Reading:** the AI assistant is conflating this domain with a similarly named business, or quoting an older version of the domain. Not verified which. This is an entity-disambiguation issue: clear, consistent entity signals (legal name, ABN, address, sameAs profiles, Organization JSON-LD) and a statement of who the business is would help. Nothing has been changed.

## 3. Compliance in AI answers
Perplexity's legality answer: high-power, throttle-only electric dirt bikes are not legal e-bikes on public roads or paths; private property or registrable motorcycles only; pedal-assist e-bikes up to 250 W are legal under bicycle rules (NSW up to 500 W). This matches the site rule (over 250 W = off-road / private property only). FAQ answers must follow that wording.

## 4. Keywords: the same rules as all other keywords
- **Verified AI-named terms with live Semrush data (T/C, KD 28 or lower):** `docs/aeo-ai-sourced-keywords.csv` (22 of 44 AI-named entities have usable rows, for example surron light bee x 4,400/mo KD 26; surron ultra bee 6,600 KD 14; stark varg 18,100 KD 26; talaria komodo 1,300 KD 12; razor dirt rocket 170 KD 16).
- **AI-tagged buyer-style keywords from the bank:** `docs/aeo-keywords.csv` (787 rows).
- **No usable row yet (need a Semrush pull, or no demand):** razor mx650, rfn warrior, takani, ampd bros evo, lekker jordaan, ncm t3s, velectrix urban pulse, trek verve, bafang bbs02/bbshd, bikee. These models feed the product-gap list if Semrush confirms demand.
- **Competitor retailer names** (Melbourne Powered, Electric Kicks, E-Move Bikes, MCAS, Eozzie, iScoot, Electric Bike Superstore, Cap Rouge, PedL and others) are intelligence only. They are never used as keywords on our pages.
- **Question-form research** (Keyword Magic Questions view) is FAQ-only, never a site keyword.
