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
          message: `84 GHATS TOUR | Persons: ${form.persons}`,
          source: '84ghats_page',
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
        {loading ? 'Sending...' : '🚣 Book 84 Ghats Tour'}
      </button>
      <p className="text-center text-xs text-gray-400">Or call: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

const ghatsList = [
  { no: '1', name: 'Assi Ghat', specialty: 'Morning yoga, aarti & start point for pilgrims', icon: '🧘' },
  { no: '2', name: 'Tulsi Ghat', specialty: 'Named after Sant Tulsidas, author of Ramcharitmanas', icon: '📜' },
  { no: '3', name: 'Bachraj Ghat', specialty: 'Three Jain temples — sacred to Jain community', icon: '🕍' },
  { no: '4', name: 'Janki Ghat', specialty: 'Elegant ghat with beautiful architecture', icon: '🏛️' },
  { no: '5', name: 'Darbhanga Ghat', specialty: 'Royal ghat with maharaja\'s palace', icon: '👑' },
  { no: '6', name: 'Munshi Ghat', specialty: 'Quiet and serene — perfect for meditation', icon: '🕊️' },
  { no: '7', name: 'Dashashwamedh Ghat', specialty: 'Main ghat — Ganga Aarti happens here daily', icon: '🪔' },
  { no: '8', name: 'Manikarnika Ghat', specialty: 'Sacred cremation ghat — always burning', icon: '🔥' },
  { no: '9', name: 'Scindia Ghat', specialty: 'Half-submerged Shiva temple — iconic view', icon: '⛩️' },
  { no: '10', name: 'Panchganga Ghat', specialty: '5 holy rivers confluence — Aurangzeb mosque above', icon: '🌊' },
  { no: '11', name: 'Harishchandra Ghat', specialty: 'Ancient electric cremation ghat', icon: '⚱️' },
  { no: '12', name: 'Kedar Ghat', specialty: 'Red & white striped steps — South Indian pilgrims', icon: '🎨' },
]

export default function EightyFourGhatsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop"
            alt="84 Ghats Tour Varanasi" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1">
                <Link href="/" className="hover:text-white">Home</Link> <span>/</span>
                <Link href="/boating" className="hover:text-white">Boating</Link> <span>/</span>
                <span className="text-[#ea2330]">84 Ghats Tour</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Heritage Boat Tour
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-5">
                Varanasi 84 Ghats<br />
                <span className="text-[#ea2330]">Complete Boat Tour</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                A guided boat tour covering all 84 ghats of Varanasi — learn the history, significance,
                and stories behind each sacred ghat. Explore the rich spiritual heritage of Kashi with an expert guide.
                An unforgettable 2–3 hour heritage experience.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-7 max-w-md">
                {[
                  { icon: '💰', label: 'Price', value: '₹500/person' },
                  { icon: '⏱️', label: 'Duration', value: '2–3 hours' },
                  { icon: '⏰', label: 'Timing', value: 'Morning 7–9 AM / Evening' },
                  { icon: '🎙️', label: 'Guide', value: 'Expert heritage guide' },
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
                <a href="https://wa.me/916388116241?text=Hello!%20I%20would%20like%20to%20book%20an%2084%20Ghats%20boat%20tour."
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-lg font-extrabold text-gray-800 mb-1 text-center">🚣 Book 84 Ghats Tour</h3>
              <p className="text-center text-xs text-gray-400 mb-4">Daily available — morning and evening</p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE TOUR ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">The Tour</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair">What Happens on This Tour?</h2>
            <p className="text-gray-500 mt-2">Explore the complete spiritual heritage of Kashi in 2–3 hours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: '🎙️',
                title: 'Expert Heritage Guide',
                desc: 'Our guide shares the history, mythology, and significance of each ghat in both Hindi and English. Discover stories you won\'t find in any guidebook.'
              },
              {
                icon: '🚣',
                title: 'Comfortable Boat',
                desc: 'Traditional wooden Varanasi-style boat with comfortable seating. Life jackets included. Safe and licensed boatmen.'
              },
              {
                icon: '📸',
                title: 'Photo Stops',
                desc: 'The boat stops at important ghats so you can photograph the major sites. Manikarnika, Scindia, Dashashwamedh — all included.'
              },
            ].map(item => (
              <div key={item.title} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#ea2330] hover:shadow-md transition">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BANNER ── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-blue-900/70 via-black/55 to-blue-900/70"
        title="🚣 Journey Through 3,000 Years of History"
        subtitle="Each of the 84 ghats tells a different story — rituals, legends, and living traditions that have survived millennia."
        cta={{ label: 'Book the 84 Ghats Tour', href: '/boating/84-ghats' }}
      />

      {/* ── GHATS LIST ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 font-playfair">Famous Ghats We Cover</h2>
            <p className="text-gray-500 mt-2 text-sm">Some highlights from the 84 ghats — our guide will explain all the rest!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {ghatsList.map(ghat => (
              <div key={ghat.name} className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm border border-gray-100 hover:border-[#ea2330] hover:shadow-md transition group">
                <span className="text-2xl shrink-0">{ghat.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-[#ea2330] text-white px-2 py-0.5 rounded-full font-bold">#{ghat.no}</span>
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#ea2330] transition-colors">{ghat.name}</h4>
                  </div>
                  <p className="text-gray-500 text-xs">{ghat.specialty}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">... and 72+ additional ghats are covered during the tour!</p>
        </div>
      </section>

      {/* ── ROUTE & TIMING ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 font-playfair text-center mb-8">Tour Route & Timing</h2>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              {[
                { time: 'Start', icon: '📍', event: 'Board at Assi Ghat — the southernmost ghat' },
                { time: '30 min', icon: '🚣', event: 'Visit Ghats #1–28 — Tulsi, Bachraj, Janki, Darbhanga...' },
                { time: '1 hr', icon: '🪔', event: 'Dashashwamedh Ghat — main stop with full historical narration' },
                { time: '1.5 hr', icon: '🔥', event: 'Manikarnika Ghat — sacred cremation ghat explained respectfully' },
                { time: '2 hr', icon: '⛩️', event: 'Scindia Ghat — submerged temple with perfect photo opportunity' },
                { time: '2.5 hr', icon: '🌊', event: 'Panchganga Ghat — confluence point of 5 holy rivers' },
                { time: '3 hr', icon: '🏁', event: 'Return to starting ghat — tour complete!' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-xs font-bold text-[#ea2330] bg-red-50 px-2 py-1 rounded-lg">{step.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{step.icon}</span>
                    <p className="text-gray-700 text-sm">{step.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA WITH PARALLAX ── */}
      <ScrollReveal>
        <ParallaxBanner
          image="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
          overlay="bg-gradient-to-r from-black/80 via-black/70 to-black/80"
          title="All of Kashi in One Journey"
          subtitle="84 ghats — one boat — and unforgettable memories"
          cta={{ label: 'Book Your Tour Now', href: '/boating/84-ghats' }}
        />
      </ScrollReveal>
    </>
  )
}
