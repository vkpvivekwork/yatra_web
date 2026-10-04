'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ParallaxBanner from '@/components/ParallaxBanner'
import ScrollReveal from '@/components/ScrollReveal'

function EventEnquiryForm({ defaultEvent = 'Birthday Celebration' }) {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', event: defaultEvent, persons: '10', message: ''
  })
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
          service_type: 'boating_event',
          passengers: form.persons,
          message: `BOAT EVENT: ${form.event} | Persons: ${form.persons} | Note: ${form.message}`,
          source: 'events_page',
        }),
      })
    } catch (e) {}
    setLoading(false)
    setSubmitted(true)
  }

  const events = [
    'Birthday Celebration on Boat',
    'Anniversary Celebration',
    'Pre-Wedding Photoshoot',
    'Corporate Team Outing',
    'Bachelorette Party',
    'Family Reunion',
    'Farewell Party',
    'Custom Event',
  ]

  if (submitted) return (
    <div className="text-center py-8">
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Enquiry Sent! 🎉</h3>
      <p className="text-gray-500 text-sm mb-4">We will send you a complete customized quote via WhatsApp within 30 minutes.</p>
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
      <select value={form.event} onChange={e => setForm({ ...form, event: e.target.value })}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
        {events.map(ev => <option key={ev} value={ev}>{ev}</option>)}
      </select>
      <div className="grid grid-cols-2 gap-3">
        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
        <select value={form.persons} onChange={e => setForm({ ...form, persons: e.target.value })}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          {['2', '5', '10', '15', '20', '25', '30', '40', '50+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
        </select>
      </div>
      <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={2}
        placeholder="Special requirements (decoration, catering, photography...)"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] resize-none" />
      <button type="submit" disabled={loading}
        className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition text-sm disabled:opacity-60">
        {loading ? 'Sending...' : '🎉 Get Free Quote'}
      </button>
      <p className="text-center text-xs text-gray-400">Or WhatsApp: <a href="https://wa.me/916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

const eventPackages = [
  {
    emoji: '🎂',
    title: 'Birthday on Boat',
    price: '₹3,999 onwards',
    tag: 'Most Popular',
    tagColor: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    desc: 'A floating birthday celebration in the middle of the Ganga. We arrange flowers, balloons, lights, and cake — everything for a perfect party.',
    includes: ['Decorated boat', 'Birthday cake', 'Flower arrangement', 'Balloons', 'Background music', 'Photography', 'Floating diyas'],
    minPersons: '5+ persons',
    highlight: true,
  },
  {
    emoji: '💑',
    title: 'Anniversary Celebration',
    price: '₹4,999 onwards',
    tag: 'Romantic',
    tagColor: 'bg-rose-500',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop',
    desc: 'Sacred river waves, glowing oil lamps, and rose petals — make your anniversary truly magical and unforgettable.',
    includes: ['Rose petal decoration', 'Candlelight setup', 'Juice / Mocktails', 'Photographer', 'Floating diyas', 'Romantic music'],
    minPersons: 'Couple (2 persons)',
    highlight: true,
  },
  {
    emoji: '📸',
    title: 'Pre-Wedding Photoshoot',
    price: '₹6,999 onwards',
    tag: 'Photography',
    tagColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    desc: 'Varanasi ke ghats aur Ganga ka backdrop — pre-wedding photography ke liye India mein best location.',
    includes: ['Professional photographer', 'Decorated boat', '3–4 hour session', 'Multiple locations', 'Edited photos (100+)', 'Costume changes allowed'],
    minPersons: 'Couple',
    highlight: false,
  },
  {
    emoji: '💼',
    title: 'Corporate Event',
    price: '₹8,999 onwards',
    tag: 'Corporate',
    tagColor: 'bg-gray-700',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop',
    desc: 'Team outings, client meetings, product launches — a unique corporate experience on the Ganga that boosts team morale and creates lasting memories.',
    includes: ['Large boat / multiple boats', 'Catering available', 'AV setup optional', 'Corporate branding', 'Photographer', 'Life jackets for all'],
    minPersons: '15+ persons',
    highlight: false,
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1920&auto=format&fit=crop"
            alt="Events on Boat Varanasi Ganga" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1">
                <Link href="/" className="hover:text-white">Home</Link> <span>/</span>
                <Link href="/boating" className="hover:text-white">Boating</Link> <span>/</span>
                <span className="text-[#ea2330]">Events on Boat</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                Celebrate on Sacred Ganga
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-5">
                Celebrate Every<br />
                <span className="text-[#ea2330]">Special Occasion on a Boat!</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                Whether it's a birthday, anniversary, pre-wedding photoshoot, or corporate outing,
                the sacred river and historic ghats make every celebration truly special.
                We take care of everything — you just enjoy the moment!
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {['🎂 Birthday', '💑 Anniversary', '📸 Pre-Wedding', '💼 Corporate', '🥳 Bachelorette', '👨‍👩‍👧‍👦 Family Reunion'].map(b => (
                  <span key={b} className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">{b}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+916388116241"
                  className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition text-sm">
                  📞 +91 63881 16241
                </a>
                <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20organize%20an%20event%20on%20the%20Ganga."
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-lg font-extrabold text-gray-800 mb-1 text-center">🎉 Get Free Quote</h3>
              <p className="text-center text-xs text-gray-400 mb-4">Receive a customized quote via WhatsApp in 30 minutes</p>
              <EventEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT PACKAGES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Our Packages</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair">Celebrate Any Occasion on the Ganga</h2>
            <p className="text-gray-500 mt-2">All packages are fully customizable to match your needs and preferences</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventPackages.map(ev => (
              <div key={ev.title}
                className={`group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${ev.highlight ? 'border-[#ea2330]' : 'border-gray-100 hover:border-gray-200'}`}>
                <div className="relative h-52 overflow-hidden">
                  <Image src={ev.image} alt={ev.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`${ev.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{ev.tag}</span>
                    {ev.highlight && <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">⭐ Popular</span>}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{ev.emoji}</span>
                      <h3 className="text-white font-extrabold text-lg">{ev.title}</h3>
                    </div>
                    <span className="bg-white text-gray-900 font-extrabold text-sm px-3 py-1.5 rounded-xl shrink-0 ml-2">{ev.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4">{ev.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ev.includes.map(inc => (
                      <span key={inc} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">✓ {inc}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs">👥 {ev.minPersons}</p>
                    <a href={`https://wa.me/916388116241?text=Hello!%20${encodeURIComponent(ev.title)}%20book%20karni%20hai.%20Details%20batayein.`}
                      target="_blank" rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5">
                      💬 WhatsApp Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BANNER ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-pink-900/70 via-black/55 to-pink-900/70"
        title="🎉 Create Memories That Last a Lifetime"
        subtitle="Your celebration deserves the most beautiful backdrop in India — the timeless Ganga ghats of Varanasi."
        cta={{ label: 'Plan Your Event', href: '/boating/events' }}
      />

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-playfair text-center mb-10">How Does Booking Work?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', icon: '📞', title: 'Call / WhatsApp', desc: 'Tell us about your event and preferred date' },
              { step: '02', icon: '💬', title: 'Free Consultation', desc: 'We suggest the best package for your needs' },
              { step: '03', icon: '✅', title: 'Confirm Booking', desc: 'Your booking is confirmed with advance payment' },
              { step: '04', icon: '🎉', title: 'Event Day Magic', desc: 'We arrange everything perfectly — you just enjoy!' },
            ].map(s => (
              <div key={s.step} className="text-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#ea2330] text-white font-extrabold text-sm rounded-full flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <span className="text-2xl block mb-2">{s.icon}</span>
                <h4 className="font-bold text-gray-800 text-sm mb-1">{s.title}</h4>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA WITH PARALLAX ── */}
      <ScrollReveal>
        <ParallaxBanner
          image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1920&auto=format&fit=crop"
          overlay="bg-gradient-to-r from-black/80 via-black/70 to-black/80"
          title="Create Your Perfect Celebration"
          subtitle="Graduation parties, social gatherings, school trips, farewells — any occasion on the Ganga becomes unforgettable."
          cta={{ label: 'Plan Your Event Now', href: '/boating/events' }}
        />
      </ScrollReveal>

      {/* ── OTHER SERVICES ── */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-4">View our other boating services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/boating/ganga-aarti" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#ea2330] border border-gray-200 hover:border-[#ea2330] px-5 py-3 rounded-xl text-sm font-medium transition">
              🪔 Ganga Aarti Ride
            </Link>
            <Link href="/boating/sunrise-tour" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#ea2330] border border-gray-200 hover:border-[#ea2330] px-5 py-3 rounded-xl text-sm font-medium transition">
              🌅 Sunrise Boat Tour
            </Link>
            <Link href="/boating/84-ghats" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#ea2330] border border-gray-200 hover:border-[#ea2330] px-5 py-3 rounded-xl text-sm font-medium transition">
              🚣 84 Ghats Tour
            </Link>
            <Link href="/boating" className="inline-flex items-center gap-2 bg-[#ea2330] text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-red-700 transition">
              ⛵ All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
