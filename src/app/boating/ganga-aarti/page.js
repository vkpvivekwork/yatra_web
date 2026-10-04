'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ParallaxBanner from '@/components/ParallaxBanner'
import ScrollReveal from '@/components/ScrollReveal'

function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', persons: '2' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone, travel_date: form.date,
          service_type: 'boating',
          message: `GANGA AARTI BOAT RIDE | Persons: ${form.persons}`,
          source: 'ganga_aarti_page',
        }),
      })
    } catch (e) {}
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="text-center py-8">
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Booking Confirmed! 🎉</h3>
      <p className="text-gray-500 text-sm mb-4">We will WhatsApp you within 15 minutes.</p>
      <a href="https://wa.me/916388116241" className="block w-full bg-green-500 text-white py-3 rounded-xl font-bold mb-2 text-sm">💬 WhatsApp</a>
      <a href="tel:+916388116241" className="block w-full bg-[#ea2330] text-white py-3 rounded-xl font-bold text-sm">📞 Call Now</a>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required type="text" placeholder="Your Name *" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <input required type="tel" placeholder="Mobile Number *" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <div className="grid grid-cols-2 gap-3">
        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
        <select value={form.persons} onChange={e => setForm({ ...form, persons: e.target.value })}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          {['1', '2', '3', '4', '5', '6', '8', '10', '15', '20+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
        </select>
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition text-sm disabled:opacity-60">
        {loading ? 'Sending...' : '🪔 Book Ganga Aarti Ride'}
      </button>
      <p className="text-center text-xs text-gray-400">Or call: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

export default function GangaAartiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
            alt="Ganga Aarti Varanasi Boat Ride" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1">
                <Link href="/" className="hover:text-white">Home</Link> <span>/</span>
                <Link href="/boating" className="hover:text-white">Boating</Link> <span>/</span>
                <span className="text-[#ea2330]">Ganga Aarti</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Most Popular Boat Experience
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-5">
                Ganga Aarti<br />
                <span className="text-[#ea2330]">Boat Ride Varanasi</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                Experience the divine Ganga Aarti at Dashashwamedh Ghat from your boat.
                Watch as the water glows with oil lamps, listen to sacred chants, and witness the sacred rituals on the holy river — an unforgettable evening that will stay with you forever.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-7 max-w-md">
                {[
                  { icon: '💰', label: 'Price', value: '₹300/person' },
                  { icon: '⏱️', label: 'Duration', value: '45–60 minutes' },
                  { icon: '⏰', label: 'Timing', value: 'Evening 6:30–7:30 PM' },
                  { icon: '🛡️', label: 'Safety', value: 'Life jackets included' },
                ].map(item => (
                  <div key={item.label} className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 border border-white/10">
                    <p className="text-gray-400 text-xs mb-0.5">{item.icon} {item.label}</p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+916388116241"
                  className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition text-sm">
                  📞 Book Now — +91 63881 16241
                </a>
                <a href="https://wa.me/916388116241?text=Hello!%20Ganga%20Aarti%20Boat%20Ride%20book%20karni%20hai."
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-lg font-extrabold text-gray-800 mb-1 text-center">🪔 Book Now</h3>
              <p className="text-center text-xs text-gray-400 mb-4">Limited seats — daily available</p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS GANGA AARTI ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">About the Experience</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair mb-5">
                What is Ganga Aarti?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Varanasi's Ganga Aarti is one of the most beautiful religious ceremonies in the world.
                Every evening at Dashashwamedh Ghat, 7 priests perform synchronized worship rituals with large ceremonial lamps,
                honoring the sacred river Ganga in an age-old tradition.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Watching the ceremony from a boat is a unique experience — you're in the middle of the sacred river,
                surrounded by thousands of devotees on the ghats, with the glow of oil lamps dancing on the water.
                It's an ethereal scene that feels otherworldly.
              </p>
              <div className="space-y-3">
                {[
                  'Synchronized worship ritual by 7 priests at Dashashwamedh Ghat',
                  'Large multi-wick ceremonial oil lamps (diyas)',
                  'Sacred conch shell sounds, drums, and temple bells',
                  'Flower petals and aromatic incense',
                  'Hundreds of oil lamps floating on the river',
                  'Photography and video completely allowed',
                ].map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#ea2330] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"
                alt="Ganga Aarti Ceremony Varanasi" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur rounded-xl px-4 py-3">
                  <p className="text-white font-bold text-sm">📍 Dashashwamedh Ghat, Varanasi</p>
                  <p className="text-gray-300 text-xs mt-0.5">Daily evening ceremony • 6:30–7:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-playfair text-center mb-10">What's Included in This Package?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⛵', title: 'Dedicated Boat Seat', desc: 'Comfortable seating — no sharing' },
              { icon: '🛡️', title: 'Life Jacket', desc: 'Safety equipment provided' },
              { icon: '🎙️', title: 'Expert Guide', desc: 'Complete information about the ceremony in Hindi and English' },
              { icon: '📸', title: 'Photo Spots', desc: 'We show you the best angles for photography' },
              { icon: '🪔', title: 'Diya Float', desc: 'Opportunity to float an oil lamp on the Ganga' },
              { icon: '🚤', title: 'Safe Boatmen', desc: 'Licensed & experienced' },
              { icon: '📱', title: 'WhatsApp Support', desc: 'Realtime booking & updates' },
              { icon: '⭐', title: 'Best View Guarantee', desc: 'Prime position near aarti' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition border border-gray-100 group hover:border-[#ea2330]">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#ea2330] transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BANNER ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        title="🪔 The Divine Evening Awaits You"
        subtitle="Witness the sacred Ganga Aarti from the water — bells, fire, chants, and devotion like never before."
        cta={{ label: 'Book Your Seat Now', href: '/boating/ganga-aarti' }}
      />

      {/* ── TIMINGS & TIPS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-playfair text-center mb-8">Important Information & Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <h3 className="font-bold text-orange-700 text-base mb-3">⏰ Best Time</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Evening Aarti: 6:30–7:30 PM (daily)</li>
                <li>• Reach ghat by 6:00 PM</li>
                <li>• Winter (Oct–Feb): Best experience</li>
                <li>• Dev Deepawali: Extra special!</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-700 text-base mb-3">📋 What to Bring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Camera / Smartphone</li>
                <li>• Comfortable clothes</li>
                <li>• Shawl/jacket (for winter evenings)</li>
                <li>• Cash for floating diyas (₹20–50)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-bold text-green-700 text-base mb-3">✅ Booking Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 1 day advance booking recommended</li>
                <li>• Festival season: 3–5 days advance</li>
                <li>• Group discount available for 10+</li>
                <li>• Same-day also possible (call us)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/72"
        minHeight="min-h-[380px]"
      >
        <ScrollReveal direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-playfair mb-3 text-white text-center">
            Experience the <span className="text-[#ea2330]">Magic</span> of Ganga Aarti
          </h2>
          <p className="text-gray-300 mb-8 text-center">Book now — limited boats available daily</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916388116241"
              className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-red-700 transition">
              📞 +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20a%20Ganga%20Aarti%20boat%20ride."
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-extrabold px-8 py-4 rounded-xl hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/boating/sunrise-tour" className="hover:text-white transition">🌅 Sunrise Tour →</Link>
            <Link href="/boating/84-ghats" className="hover:text-white transition">🚣 84 Ghats →</Link>
            <Link href="/boating/events" className="hover:text-white transition">🎉 Events →</Link>
          </div>
        </ScrollReveal>
      </ParallaxBanner>
    </>
  )
}
