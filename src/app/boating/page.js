'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ParallaxBanner from '@/components/ParallaxBanner'
import ScrollReveal from '@/components/ScrollReveal'

// ── Booking Form ───────────────────────────────────────────────
function BoatingForm({ defaultService = 'Ganga Aarti Boat Ride' }) {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', service: defaultService, persons: '2', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    'Ganga Aarti Boat Ride',
    'Sunrise Boat Ride',
    '84 Ghats Complete Tour',
    'Birthday Celebration on Boat',
    'Anniversary Celebration',
    'Pre-Wedding Shoot',
    'Corporate Event on Boat',
    'Private Boat (Full Day)',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone, travel_date: form.date, service_type: 'boating',
          passengers: form.persons,
          message: `BOATING BOOKING | Service: ${form.service} | Persons: ${form.persons} | Note: ${form.message}`,
          source: 'boating_page',
        }),
      })
    } catch (e) {}
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Confirmed! 🎉</h3>
      <p className="text-gray-500 text-sm mb-5">We will WhatsApp you within 15 minutes with booking details.</p>
      <a href="https://wa.me/916388116241" className="block w-full bg-green-500 text-white py-3 rounded-xl font-bold mb-2">💬 WhatsApp Us</a>
      <a href="tel:+916388116241" className="block w-full bg-[#ea2330] text-white py-3 rounded-xl font-bold mb-3">📞 Call Now</a>
      <button onClick={() => setSubmitted(false)} className="text-sm text-gray-400 hover:text-gray-600 underline">New Booking</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required type="text" placeholder="Your Name *" value={form.name}
        onChange={e => setForm({...form, name: e.target.value})}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <input required type="tel" placeholder="Mobile Number *" value={form.phone}
        onChange={e => setForm({...form, phone: e.target.value})}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
        {services.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <div className="grid grid-cols-2 gap-3">
        <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
        <select value={form.persons} onChange={e => setForm({...form, persons: e.target.value})}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          {['1','2','3','4','5','6','7','8','10','15','20+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
        </select>
      </div>
      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={2}
        placeholder="Special requirements (optional)..."
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] resize-none" />
      <button type="submit" disabled={loading}
        className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-red-200 text-sm disabled:opacity-60">
        {loading ? 'Sending...' : '⛵ Book Now — Free Quote'}
      </button>
      <p className="text-center text-xs text-gray-400">Or call/WhatsApp: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

// ── Data ────────────────────────────────────────────────────────
const regularServices = [
  {
    id: 1, title: 'Ganga Aarti Boat Ride', icon: '🪔',
    price: '₹300/person', duration: '45–60 min',
    tag: 'Most Popular', tagColor: 'bg-[#ea2330]',
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    desc: 'Watch the legendary Ganga Aarti from Dashashwamedh Ghat from a boat. Priests with large lamps, conch shells, incense — a divine experience you will never forget.',
    includes: ['Dedicated boat seat', 'Life jacket', 'Ghat guide', 'Photography allowed'],
    bestTime: 'Evening 6:30–7:30 PM',
  },
  {
    id: 2, title: 'Sunrise Boat Ride', icon: '🌅',
    price: '₹200/person', duration: '1–1.5 hrs',
    tag: 'Spiritual', tagColor: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=800&auto=format&fit=crop',
    desc: 'Taking a boat ride on the Ganga during Brahma Muhuraat is a wonderful experience. Early morning cold, morning rituals, sadhus, and golden sunrise — paradise for photographers!',
    includes: ['Early morning pickup from ghat', 'Hot chai on boat', 'Photography spots', 'Life jacket'],
    bestTime: 'Sunrise 5:00–6:30 AM',
  },
  {
    id: 3, title: '84 Ghats Complete Tour', icon: '🚣',
    price: '₹500/person', duration: '2–3 hrs',
    tag: 'Heritage', tagColor: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    desc: 'Guided boat tour of all 84 ghats of Varanasi. Learn the name, history, and significance of each ghat with an expert guide — understand the complete heritage of Kashi.',
    includes: ['Expert heritage guide', 'All 84 ghats covered', 'Commentary in Hindi & English', 'Life jacket'],
    bestTime: 'Morning 7–9 AM or Evening',
  },
]

const eventServices = [
  {
    id: 4, title: 'Birthday Celebration on Boat 🎂',
    icon: '🎉', price: '₹3,999 onwards',
    tag: 'Event', tagColor: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    desc: 'Floating birthday party on the Ganga! Flowers, lights, balloons, cake, background music — we arrange everything. An unforgettable birthday celebration!',
    includes: ['Decorated boat', 'Flower arrangement', 'Birthday cake', 'Background music', 'Photography', 'Diyas'],
    minPersons: '5 persons minimum',
    highlight: true,
  },
  {
    id: 5, title: 'Anniversary Celebration 💑',
    icon: '💑', price: '₹4,999 onwards',
    tag: 'Romantic', tagColor: 'bg-rose-500',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop',
    desc: 'Celebrate your anniversary on the Ganga with river waves and the glow of lamps. Romantic dinner on boat, rose petals, candlelight — a magical evening for two!',
    includes: ['Rose petal decoration', 'Candlelight dinner (optional)', 'Champagne/juice', 'Photographer', 'Floating diyas', 'Music'],
    minPersons: 'Couple (2 persons)',
    highlight: true,
  },
  {
    id: 6, title: 'Pre-Wedding Shoot 📸',
    icon: '📷', price: '₹6,999 onwards',
    tag: 'Photography', tagColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    desc: 'Iconic pre-wedding photography at Varanasi ghats and on a boat. The unique backdrop of Varanasi — temples, ghats, river — creates a perfect combination for your memories.',
    includes: ['Professional photographer', 'Decorated boat', 'Costume changes allowed', '3–4 hour session', 'Ghat locations', 'Edited photos'],
    minPersons: 'Couple',
    highlight: false,
  },
  {
    id: 7, title: 'Corporate Event on Boat',
    icon: '💼', price: '₹8,999 onwards',
    tag: 'Corporate', tagColor: 'bg-gray-700',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop',
    desc: 'Team outing, product launch, corporate get-together — a unique corporate experience on the Ganga. Conference setup, catering, photography all available.',
    includes: ['Large boat/multiple boats', 'Catering available', 'AV setup optional', 'Corporate decoration', 'Photographer', 'Life jackets'],
    minPersons: '15 persons minimum',
    highlight: false,
  },
]

const ghats = [
  { name: 'Dashashwamedh Ghat', specialty: 'Ganga Aarti', icon: '🪔' },
  { name: 'Assi Ghat', specialty: 'Morning Yoga & Aarti', icon: '🧘' },
  { name: 'Manikarnika Ghat', specialty: 'Sacred Cremation', icon: '🔥' },
  { name: 'Harishchandra Ghat', specialty: 'Oldest Cremation Ghat', icon: '⚱️' },
  { name: 'Scindia Ghat', specialty: 'Photography Paradise', icon: '📸' },
  { name: 'Panchganga Ghat', specialty: '5 Rivers Confluence', icon: '🌊' },
  { name: 'Munshi Ghat', specialty: 'Peaceful & Serene', icon: '🕊️' },
  { name: 'Tulsi Ghat', specialty: 'Literary Heritage', icon: '📜' },
]

export default function BoatingPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
            alt="Ganga Boating Varanasi" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Varanasi's Premier Boating Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-5">
                Make Every Moment<br />
                <span className="text-[#ea2330]">on the Ganga Unforgettable!</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                From Ganga Aarti to birthday celebrations, anniversaries and pre-wedding shoots — on the sacred ghats of Varanasi, we make every occasion special.
              </p>

              {/* Scrolling badges */}
              <div className="flex flex-wrap gap-2 mb-7">
                {['🪔 Ganga Aarti', '🌅 Sunrise Ride', '🚣 84 Ghats', '🎂 Birthday', '💑 Anniversary', '📸 Pre-Wedding'].map(b => (
                  <span key={b} className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">{b}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+916388116241"
                  className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition text-sm">
                  📞 Book Now: +91 63881 16241
                </a>
                <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20a%20boating%20experience."
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-5">
              <h3 className="text-lg font-extrabold text-gray-800 mb-4 text-center">⛵ Book Your Boat Now</h3>
              <BoatingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REGULAR BOATING SERVICES ══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Boating Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Our Popular Services</h2>
            <p className="text-gray-500 mt-2">Daily boat rides that will fill you with spiritual energy</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`${service.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{service.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{service.icon}</span>
                      <h3 className="text-white font-extrabold text-lg leading-tight">{service.title}</h3>
                    </div>
                    <span className="bg-white text-gray-900 font-extrabold text-sm px-3 py-1.5 rounded-lg shrink-0 ml-2">{service.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span>⏱ {service.duration}</span>
                    <span className="text-gray-300">|</span>
                    <span>⏰ {service.bestTime}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.includes.map(inc => (
                      <li key={inc} className="flex items-center gap-2 text-gray-600 text-xs">
                        <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+916388116241"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-bold py-3 rounded-xl transition">
                    Book This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ─────────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        title="🌊 The Ganga — A Journey Like No Other"
        subtitle="Watch the ghats come alive at dusk. Every boat ride on the Ganga is a story worth telling."
        cta={{ label: 'Explore All Experiences', href: '/boating' }}
      />

      {/* ═══ EVENTS & CELEBRATIONS ══════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ea2330 0%, transparent 50%), radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Special Events</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-playfair">Celebrate Every Occasion on the Ganga</h2>
            <p className="text-gray-400 mt-2">From birthdays to anniversaries, pre-wedding shoots to corporate events — we make every occasion unforgettable</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventServices.map((event) => (
              <div key={event.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 ${event.highlight ? 'ring-2 ring-[#ea2330]' : 'ring-1 ring-white/10 hover:ring-white/30'}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {event.highlight && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">⭐ Most Booked</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`${event.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{event.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{event.icon}</span>
                      <h3 className="text-white font-extrabold text-lg leading-tight">{event.title}</h3>
                    </div>
                    <span className="bg-white text-gray-900 font-extrabold text-sm px-3 py-1.5 rounded-lg shrink-0 ml-2 whitespace-nowrap">{event.price}</span>
                  </div>
                </div>
                <div className="bg-white/5 border-t border-white/10 p-5 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{event.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {event.includes.slice(0, 5).map(inc => (
                      <span key={inc} className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full border border-white/10">✓ {inc}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs">👥 {event.minPersons}</p>
                    <a href={`https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20${encodeURIComponent(event.title)}.%20Please%20provide%20details.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition">
                      💬 WhatsApp Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom event CTA */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-white font-bold text-xl mb-2">🎊 Have another occasion in mind? We can customize!</h3>
            <p className="text-gray-400 text-sm mb-5">Graduation, Farewell, Family reunion, Kitty party, School trip — any event can be organized on the Ganga</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="tel:+916388116241" className="bg-[#ea2330] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition">📞 Call for Custom Quote</a>
              <a href="https://wa.me/916388116241?text=Hello!%20I%20need%20to%20organize%20a%20custom%20boat%20event." className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-600 transition">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ─────────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/60"
        title="🎉 Celebrate Life on the Holy Ganga"
        subtitle="Birthday, anniversary, pre-wedding or corporate — we make every celebration unforgettable on the water."
        cta={{ label: 'Plan Your Event', href: '/boating/events' }}
      />

      {/* ═══ GHATS ══════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Our Coverage</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair">Complete Coverage of All Varanasi Ghats</h2>
            <p className="text-gray-500 mt-2">84 ghats — our boats are available at all of them</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ghats.map((ghat) => (
              <div key={ghat.name}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition border border-gray-100 hover:border-[#ea2330] group">
                <span className="text-2xl mb-2 block">{ghat.icon}</span>
                <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#ea2330] transition-colors">{ghat.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{ghat.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING TABLE ══════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 mt-2 text-sm">No hidden charges — you pay exactly what we quote</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4">Service</th>
                  <th className="text-center px-4 py-4">Duration</th>
                  <th className="text-center px-4 py-4">Price</th>
                  <th className="text-center px-4 py-4">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { service: 'Ganga Aarti Boat Ride', duration: '45–60 min', price: '₹300/person' },
                  { service: 'Sunrise Boat Ride', duration: '1–1.5 hrs', price: '₹200/person' },
                  { service: '84 Ghats Complete Tour', duration: '2–3 hrs', price: '₹500/person' },
                  { service: 'Private Boat (Full Day)', duration: '8 hrs', price: '₹3,500' },
                  { service: 'Birthday Celebration', duration: '2–3 hrs', price: '₹3,999 onwards' },
                  { service: 'Anniversary Celebration', duration: '2–3 hrs', price: '₹4,999 onwards' },
                  { service: 'Pre-Wedding Shoot', duration: '3–4 hrs', price: '₹6,999 onwards' },
                  { service: 'Corporate Event', duration: 'Customizable', price: '₹8,999 onwards' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-red-50 transition group">
                    <td className="px-5 py-3.5 font-medium text-gray-800">{row.service}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500 text-xs">{row.duration}</td>
                    <td className="px-4 py-3.5 text-center font-extrabold text-[#ea2330]">{row.price}</td>
                    <td className="px-4 py-3.5 text-center">
                      <a href="tel:+916388116241" className="text-xs bg-[#ea2330] text-white px-3 py-1.5 rounded-lg font-bold hover:bg-red-700 transition">Book</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">* Event packages customizable. Call/WhatsApp for group discounts and custom arrangements.</p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center font-playfair mb-8">Why Choose YatraKSathi for Boating?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🚣', title: 'Experienced Boatmen', desc: '20+ years of experience' },
              { icon: '🛡️', title: 'Life Jackets', desc: 'Safety first, always' },
              { icon: '🎨', title: 'Custom Decoration', desc: 'Setup as per your preference' },
              { icon: '📸', title: 'Photography Help', desc: 'Best shots guaranteed' },
              { icon: '🍰', title: 'Catering Available', desc: 'Food on boat possible' },
              { icon: '📱', title: 'WhatsApp Updates', desc: 'Real-time communication' },
              { icon: '💰', title: 'Best Prices', desc: 'No hidden charges' },
              { icon: '⭐', title: '4.9 Star Rated', desc: '200+ happy customers' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition border border-gray-100 hover:border-[#ea2330] group">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#ea2330] transition-colors">{f.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA — Parallax ══════════════════════════ */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/72"
        minHeight="min-h-[380px]"
      >
        <ScrollReveal direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-playfair mb-3 drop-shadow-xl">
            Your <span className="text-[#ea2330]">Special Moment</span> on the Ganga Awaits!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">Book now — limited boats available every day</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916388116241"
              className="inline-flex items-center justify-center gap-2 bg-[#ea2330] text-white font-extrabold px-8 py-4 rounded-xl transition text-base hover:bg-red-700 shadow-2xl shadow-red-900/50">
              📞 +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20a%20boating%20experience."
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-extrabold px-8 py-4 rounded-xl hover:bg-green-600 transition text-base">
              💬 WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </ParallaxBanner>
    </>
  )
}
