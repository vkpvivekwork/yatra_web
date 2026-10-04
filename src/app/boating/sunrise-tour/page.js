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
          message: `SUNRISE BOAT TOUR | Persons: ${form.persons}`,
          source: 'sunrise_tour_page',
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
        {loading ? 'Sending...' : '🌅 Book Sunrise Tour'}
      </button>
      <p className="text-center text-xs text-gray-400">Or call: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

export default function SunriseTourPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=1920&auto=format&fit=crop"
            alt="Sunrise Boat Tour Varanasi Ganga" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1">
                <Link href="/" className="hover:text-white">Home</Link> <span>/</span>
                <Link href="/boating" className="hover:text-white">Boating</Link> <span>/</span>
                <span className="text-[#ea2330]">Sunrise Tour</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                Photographers' Favourite
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-5">
                Varanasi Sunrise<br />
                <span className="text-[#ea2330]">Boat Tour</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                Taking to the Ganga at sunrise is a divine experience.
                Watch morning rituals unfold, observe meditating sadhus, and witness the golden sunrise over the river.
                This is the perfect tour for photographers and spiritual seekers alike.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-7 max-w-md">
                {[
                  { icon: '💰', label: 'Price', value: '₹200/person' },
                  { icon: '⏱️', label: 'Duration', value: '1–1.5 hours' },
                  { icon: '⏰', label: 'Timing', value: 'Sunrise 5:00–6:30 AM' },
                  { icon: '📸', label: 'Best For', value: 'Photography & Spirituality' },
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
                  📞 Book: +91 63881 16241
                </a>
                <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20a%20sunrise%20boat%20tour."
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-lg font-extrabold text-gray-800 mb-1 text-center">🌅 Book Sunrise Tour</h3>
              <p className="text-center text-xs text-gray-400 mb-4">Available every morning — limited seats</p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Varanasi Morning Ghat" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">The Experience</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair mb-5">
                Varanasi's Most Magical Time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you arrive at the Ganga ghats at 4:30–5:00 AM, Varanasi feels completely different.
                The mist-covered steps, ritual lights burning in the morning, sadhus in meditation, devotees bathing in the river —
                this is a scene everyone should witness at least once in their lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As the sun rises, an orange-golden light spreads across the Ganga, transforming the ghats into a photographer's paradise.
                This is the perfect golden hour moment for capturing the spiritual essence of Varanasi.
              </p>
              <div className="space-y-2.5">
                {[
                  'Morning prayers & rituals at every ghat',
                  'Sadhus meditating at sunrise — iconic shots',
                  'Boats carrying flowers, milk, diyas',
                  'Manikarnika Ghat — the never-ending flame',
                  'Hot chai offered on boat (complementary)',
                  'Silence of the sacred Ganga in early morning',
                ].map(p => (
                  <div key={p} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTOGRAPHY SPOTS ── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-playfair text-center mb-8">
            📸 Best Photography Spots on This Tour
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Assi Ghat', tip: 'Morning yoga & aarti scene', time: '5:00–5:30 AM' },
              { name: 'Dashashwamedh Ghat', tip: 'Priests performing morning puja', time: '5:30–6:00 AM' },
              { name: 'Manikarnika Ghat', tip: 'Smoke, flame & sacred cremation', time: 'Any time (respectful)' },
              { name: 'Scindia Ghat', tip: 'Half-sunken temple & reflections', time: 'Golden hour' },
              { name: 'Harishchandra Ghat', tip: 'Ancient cremation ghat', time: 'Early morning' },
              { name: 'Ganga Horizon', tip: 'Full orange sunrise over Ganga', time: '6:00–6:30 AM' },
            ].map(spot => (
              <div key={spot.name} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:border-amber-400 hover:shadow-md transition">
                <h4 className="font-bold text-gray-800 text-sm mb-1">{spot.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{spot.tip}</p>
                <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">⏰ {spot.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BANNER ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-amber-900/70 via-black/50 to-amber-900/70"
        title="🌅 First Light on the Ganga"
        subtitle="As the sun rises over the Ganga, the ghats come alive with morning rituals, yoga, and the sound of temple bells."
        cta={{ label: 'Book Sunrise Boat Ride', href: '/boating/sunrise-tour' }}
      />

      {/* ── CTA ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/72"
        minHeight="min-h-[380px]"
      >
        <ScrollReveal direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-playfair mb-3 text-white text-center">
            Want to See Tomorrow's <span className="text-amber-400">Sunrise</span>?
          </h2>
          <p className="text-gray-300 mb-8 text-center">Book today — starting at 5:00 AM tomorrow</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916388116241"
              className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-red-700 transition">
              📞 +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20a%20sunrise%20boat%20tour."
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-extrabold px-8 py-4 rounded-xl hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/boating/ganga-aarti" className="hover:text-white transition">🪔 Ganga Aarti →</Link>
            <Link href="/boating/84-ghats" className="hover:text-white transition">🚣 84 Ghats →</Link>
            <Link href="/boating/events" className="hover:text-white transition">🎉 Events →</Link>
          </div>
        </ScrollReveal>
      </ParallaxBanner>
    </>
  )
}
