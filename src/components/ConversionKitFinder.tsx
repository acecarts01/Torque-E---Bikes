'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShieldAlert, Wrench } from 'lucide-react'

type Answers = { bike: string; weight: string; terrain: string; use: string }

const BIKES = [
  ['mtb', 'Mountain bike'],
  ['commuter', 'Commuter or hybrid bike'],
  ['road', 'Road or gravel bike'],
  ['fat', 'Fat-tyre or other bike'],
]
const WEIGHTS = [
  ['light', 'Under 80 kg'],
  ['mid', '80 to 100 kg'],
  ['heavy', 'Over 100 kg'],
]
const TERRAIN = [
  ['flat', 'Mostly flat'],
  ['mixed', 'Mixed'],
  ['hilly', 'Hilly'],
  ['trail', 'Off-road trails'],
]
const USE = [
  ['road', 'Roads and bike paths'],
  ['offroad', 'Private property, off-road only'],
]

function recommend(a: Answers) {
  const road = a.use === 'road'
  const demanding = a.terrain === 'hilly' || a.terrain === 'trail' || a.weight === 'heavy'
  const drive =
    demanding || a.bike === 'mtb'
      ? 'A mid-drive kit uses your bike’s gears, which helps on hills and loads. It takes more work to fit and needs a compatible bottom bracket.'
      : 'A rear hub-motor kit is the simplest to fit: it replaces the wheel and needs no change to the drivetrain.'
  const power = road
    ? 'Choose a pedal-assist kit rated at 250W or less, so the bike can be a road-legal e-bike, subject to state rules.'
    : 'You can consider a higher-powered kit, but it is for off-road and private property use only and the bike must be built to cope.'
  const battery = demanding
    ? 'Choose a larger-capacity battery, because hills, loads and rough ground use charge faster.'
    : 'A mid-size battery should suit mostly flat, shorter rides. Add capacity if you want longer range.'
  const frame =
    !road || a.bike === 'mtb'
      ? 'Check your frame’s strength and fit torque arms. Powerful motors put extra force on the dropouts.'
      : 'Check the dropout width and wheel size against the kit before you order.'
  const brakes = !road || demanding ? 'Upgrade to strong hydraulic disc brakes, because extra power and weight need better stopping.' : 'Check that your brakes are in good order for the extra weight and speed.'
  return { drive, power, battery, frame, brakes, road }
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[][] }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-black uppercase tracking-widest text-brand-gray mb-2">{label}</span>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red">
        <option value="">Choose…</option>
        {options.map(([v, l]) => (
          <option key={v} value={v} className="text-black">{l}</option>
        ))}
      </select>
    </label>
  )
}

export default function ConversionKitFinder() {
  const [a, setA] = useState<Answers>({ bike: '', weight: '', terrain: '', use: '' })
  const ready = a.bike && a.weight && a.terrain && a.use
  const r = ready ? recommend(a) : null
  const set = (k: keyof Answers) => (v: string) => setA(prev => ({ ...prev, [k]: v }))

  return (
    <div className="rounded-3xl border border-white/10 bg-[#16181b] p-6 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select label="Your bike" value={a.bike} onChange={set('bike')} options={BIKES} />
        <Select label="Rider weight" value={a.weight} onChange={set('weight')} options={WEIGHTS} />
        <Select label="Terrain" value={a.terrain} onChange={set('terrain')} options={TERRAIN} />
        <Select label="Where will you ride?" value={a.use} onChange={set('use')} options={USE} />
      </div>

      <div aria-live="polite" className="mt-8">
        {!r && <p className="text-brand-gray">Answer all four questions to see a suggestion.</p>}
        {r && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3"><Wrench className="w-6 h-6 text-brand-red" /> Your suggestion</h3>
            <ul className="space-y-3 text-gray-300 list-disc pl-6 marker:text-brand-red">
              <li><strong className="text-white">Motor type:</strong> {r.drive}</li>
              <li><strong className="text-white">Power:</strong> {r.power}</li>
              <li><strong className="text-white">Battery:</strong> {r.battery}</li>
              <li><strong className="text-white">Frame:</strong> {r.frame}</li>
              <li><strong className="text-white">Brakes:</strong> {r.brakes}</li>
            </ul>
            <div className={`rounded-2xl border p-5 text-sm ${r.road ? 'border-white/10 bg-white/5 text-gray-300' : 'border-brand-red/30 bg-brand-red/10 text-gray-200'}`}>
              <p className="flex items-start gap-3 m-0"><ShieldAlert className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                {r.road
                  ? 'A pedal-assist kit within the 250W limits can make a road-legal e-bike. A throttle that drives the motor at higher speeds, or a more powerful motor, changes that. Check your state road authority before you ride.'
                  : 'High-powered conversions are for off-road and private property use only in Australia. They are not road legal.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop/motors-drivetrain-and-sprockets/" className="px-6 py-3 bg-brand-red text-[#140800] rounded-xl font-black uppercase tracking-widest text-xs">See conversion kits and drivetrain parts</Link>
              <Link href="/shop/batteries-chargers-and-electronics/" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-black uppercase tracking-widest text-xs text-white">See batteries and chargers</Link>
              <a href="/whatsapp/" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-black uppercase tracking-widest text-xs text-white">Ask the team on WhatsApp</a>
            </div>
            <p className="text-xs text-brand-gray">This is a guide, not a guarantee of fit. Confirm compatibility with the product page or the team before you order.</p>
          </div>
        )}
      </div>
    </div>
  )
}
