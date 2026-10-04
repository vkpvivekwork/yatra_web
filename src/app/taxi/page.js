'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ParallaxBanner from '@/components/ParallaxBanner'
import ScrollReveal from '@/components/ScrollReveal'

// ── Booking Form ───────────────────────────────────────────────
function CabBookingForm({ defaultFrom = '', defaultTo = '' }) {
  const [form, setForm] = useState({
    name: '', phone: '', from: defaultFrom || 'Varanasi', to: defaultTo || '',
    date: '', vehicle: '', passengers: '2', tripType: 'oneway',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const destinations = ['Ayodhya', 'Prayagraj', 'Chitrakoot', 'Vindhyachal', 'Bodh Gaya', 'Lucknow', 'Agra', 'Delhi', 'Gorakhpur', 'Airport (VNS)']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone, travel_date: form.date, service_type: 'taxi',
          passengers: form.passengers,
          message: `CAB BOOKING | From: ${form.from} | To: ${form.to} | Trip: ${form.tripType} | Vehicle: ${form.vehicle} | Passengers: ${form.passengers}`,
          source: 'taxi_page',
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
      <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Request Sent! ✅</h3>
      <p className="text-gray-500 text-sm mb-5">We will call you within 15 minutes.</p>
      <a href="tel:+916388116241" className="block w-full bg-[#ea2330] text-white py-3 rounded-xl font-bold mb-2">📞 Call Now: +91 63881 16241</a>
      <button onClick={() => setSubmitted(false)} className="text-sm text-gray-400 hover:text-gray-600 underline">Book Another Cab</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex bg-gray-100 rounded-xl p-1 mb-1">
        {[{ val: 'oneway', label: '→ One Way' }, { val: 'roundtrip', label: '↔ Round Trip' }, { val: 'local', label: '📍 Local' }].map((t) => (
          <button key={t.val} type="button" onClick={() => setForm({ ...form, tripType: t.val })}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${form.tripType === t.val ? 'bg-[#ea2330] text-white shadow' : 'text-gray-600'}`}>
            {t.label}
          </button>
        ))}
      </div>
      <input required type="text" placeholder="Your Name *" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <input required type="tel" placeholder="Mobile Number *" value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <div className="grid grid-cols-2 gap-3">
        <select value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          <option value="Varanasi">📍 Varanasi</option>
          <option value="Ayodhya">📍 Ayodhya</option>
          <option value="Prayagraj">📍 Prayagraj</option>
        </select>
        <select value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          <option value="">🏁 Destination</option>
          {destinations.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input required type="date" value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
        <select value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          <option value="">🚗 Vehicle</option>
          <option value="Swift Dzire">Swift Dzire (4S)</option>
          <option value="Ertiga">Ertiga (7S)</option>
          <option value="Innova Crysta">Innova Crysta</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
        </select>
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-red-200 disabled:opacity-60 text-sm">
        {loading ? 'Sending...' : '🔍 Get Free Quote Now'}
      </button>
      <p className="text-center text-xs text-gray-400">Or call: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
    </form>
  )
}

// ── Data ───────────────────────────────────────────────────────
const destinations = [
  {
    city: 'Ayodhya', state: 'Uttar Pradesh', distance: '200 km', time: '4 hrs', price: '₹2,500',
    img: '/Ayodhya.jpg', slug: 'varanasi-to-ayodhya', popular: true,
    places: ['Ram Mandir', 'Hanuman Garhi', 'Kanak Bhawan', 'Saryu Ghat', 'Ram Ki Paidi'],
    desc: 'Premium cab service from Varanasi to Ayodhya for the new Ram Mandir darshan. Scenic route and comfortable ride.',
  },
  {
    city: 'Prayagraj', state: 'Uttar Pradesh', distance: '125 km', time: '2.5 hrs', price: '₹1,500',
    img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=600&auto=format&fit=crop', slug: null,
    places: ['Triveni Sangam', 'Akbar Fort', 'Anand Bhawan', 'Hanuman Mandir'],
    desc: 'Three sacred rivers merge at Triveni Sangam — Ganga, Yamuna, and Saraswati. Fastest cab service for Mahakumbh city.',
  },
  {
    city: 'Chitrakoot', state: 'UP/MP Border', distance: '270 km', time: '5 hrs', price: '₹3,500',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', slug: null,
    places: ['Kamadgiri Parikrama', 'Ram Ghat', 'Gupt Godavari', 'Sati Anusuya'],
    desc: 'The divine exile site of Lord Ram — most comfortable cab service for your Chitrakoot pilgrimage journey.',
  },
  {
    city: 'Vindhyachal', state: 'Uttar Pradesh', distance: '75 km', time: '1.5 hrs', price: '₹900',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop', slug: null,
    places: ['Maa Vindhyavasini', 'Ashtabhuja Devi', 'Kali Khoh', 'Ramgaya Ghat'],
    desc: 'Nearest pilgrimage from Varanasi for Maa Vindhyavasini darshan during Navratri and throughout the year.',
  },
  {
    city: 'Bodh Gaya', state: 'Bihar', distance: '250 km', time: '5 hrs', price: '₹3,000',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop', slug: null,
    places: ['Mahabodhi Temple', 'Bodhi Tree', 'Giant Buddha', 'Thai Monastery'],
    desc: 'The most sacred site for Buddhists — where Lord Buddha attained enlightenment. UNESCO World Heritage Site.',
  },
  {
    city: 'Lucknow', state: 'Uttar Pradesh', distance: '290 km', time: '5 hrs', price: '₹3,500',
    img: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=600&auto=format&fit=crop', slug: null,
    places: ['Bara Imambara', 'Chota Imambara', 'Hazratganj', 'Residency'],
    desc: 'City of the Nawabs — culture, history, and amazing food make it the most popular destination in UP.',
  },
]

const fleet = [
  { name: 'Swift Dzire / Amaze', seats: 4, bags: 2, ac: true, price: '₹10/km', minFare: '₹500', icon: '🚗', tag: 'Economy', color: 'blue', href: '/taxi/swift-dzire' },
  { name: 'Ertiga / Maruti XL6', seats: 7, bags: 4, ac: true, price: '₹13/km', minFare: '₹700', icon: '🚙', tag: 'Most Popular', color: 'green', popular: true, href: '/taxi/ertiga' },
  { name: 'Innova Crysta / Fortuner', seats: 7, bags: 5, ac: true, price: '₹15/km', minFare: '₹900', icon: '🏎️', tag: 'Premium', color: 'purple', href: '/taxi/innova-crysta' },
  { name: 'Tempo Traveller', seats: 16, bags: 10, ac: true, price: '₹20/km', minFare: '₹1,500', icon: '🚌', tag: 'Group', color: 'orange', href: '/taxi/tempo-traveller' },
]

const routeFares = [
  { from: 'Varanasi', to: 'Ayodhya', km: 200, dzire: '₹2,500', ertiga: '₹3,200', innova: '₹3,800', tempo: '₹5,500' },
  { from: 'Varanasi', to: 'Prayagraj', km: 125, dzire: '₹1,500', ertiga: '₹2,000', innova: '₹2,500', tempo: '₹3,500' },
  { from: 'Varanasi', to: 'Chitrakoot', km: 270, dzire: '₹3,500', ertiga: '₹4,500', innova: '₹5,200', tempo: '₹7,500' },
  { from: 'Varanasi', to: 'Vindhyachal', km: 75, dzire: '₹900', ertiga: '₹1,200', innova: '₹1,500', tempo: '₹2,000' },
  { from: 'Varanasi', to: 'Bodh Gaya', km: 250, dzire: '₹3,000', ertiga: '₹4,000', innova: '₹4,800', tempo: '₹7,000' },
  { from: 'Varanasi', to: 'Lucknow', km: 290, dzire: '₹3,500', ertiga: '₹4,500', innova: '₹5,500', tempo: '₹8,000' },
  { from: 'Varanasi', to: 'Airport (VNS)', km: 25, dzire: '₹500', ertiga: '₹700', innova: '₹900', tempo: '₹1,500' },
]

export default function TaxiPage() {
  const [activeDestination, setActiveDestination] = useState(null)

  return (
    <>
      {/* ═══ HERO ═════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920&auto=format&fit=crop"
            alt="Cab Service Varanasi" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#ea2330]/20 border border-[#ea2330]/50 text-red-300 text-xs px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                AC Cabs Available 24/7
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight mb-4">
                Varanasi Cab Service<br />
                <span className="text-[#ea2330]">Best Price Guarantee</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Premium AC cab service from Varanasi to Ayodhya, Prayagraj, Chitrakoot, Vindhyachal, Bodh Gaya, and beyond. Experienced drivers, transparent pricing, no hidden charges.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: '🛡️', text: 'Police Verified Drivers' },
                  { icon: '💰', text: 'No Hidden Charges' },
                  { icon: '❄️', text: 'AC Cabs Only' },
                  { icon: '📱', text: 'WhatsApp Confirmation' },
                ].map(f => (
                  <div key={f.text} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-base">{f.icon}</span> {f.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="tel:+916388116241" className="inline-flex items-center gap-2 bg-[#ea2330] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-red-700 transition text-sm">
                  📞 Call Now
                </a>
                <a href="https://wa.me/916388116241" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-green-600 transition text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-5">
              <h3 className="text-lg font-extrabold text-gray-800 mb-4 text-center">🚗 Book Cab Instantly</h3>
              <CabBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DESTINATIONS ══════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Our Cab Routes</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Go Anywhere from Varanasi</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">6 major pilgrimage & tourist destinations covered — all with AC cabs & experienced drivers</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest) => (
              <div key={dest.city}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image src={dest.img} alt={`Varanasi to ${dest.city} cab`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {dest.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">🔥 Most Booked</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white font-extrabold text-xl leading-none">{dest.city}</h3>
                        <p className="text-gray-300 text-xs mt-1">{dest.state} • {dest.distance} • {dest.time}</p>
                      </div>
                      <div className="bg-white rounded-xl px-3 py-1.5 text-right shrink-0 ml-2">
                        <p className="text-[#ea2330] font-extrabold text-lg leading-none">{dest.price}</p>
                        <p className="text-gray-400 text-xs">Sedan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-3">{dest.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.places.slice(0,4).map(p => (
                      <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">📍 {p}</span>
                    ))}
                  </div>
                  {dest.slug ? (
                    <Link href={`/taxi/${dest.slug}`}
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-bold py-2.5 rounded-xl transition">
                      View Route Details →
                    </Link>
                  ) : (
                    <a href="tel:+916388116241"
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-bold py-2.5 rounded-xl transition">
                      📞 Book This Route
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ─────────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/65"
        title="🚗 Comfortable, Safe & On Time — Every Time"
        subtitle="AC cabs, GPS tracked, police-verified drivers. Your peace of mind is our promise on every journey."
        cta={{ label: 'Book Your Cab Now', href: '#book' }}
      />

      {/* ═══ FLEET ═════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Our Fleet</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Choose the Right Cab for Your Needs</h2>
            <p className="text-gray-500 mt-2">From economy to luxury — perfect cab available for every budget</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleet.map((cab) => (
              <Link key={cab.name} href={cab.href}
                className={`group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 relative hover:-translate-y-1 block ${cab.popular ? 'border-[#ea2330]' : 'border-transparent hover:border-gray-200'}`}>
                {cab.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea2330] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <span className="text-5xl">{cab.icon}</span>
                </div>
                <div className="text-center mb-1">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    cab.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    cab.color === 'green' ? 'bg-green-50 text-green-600' :
                    cab.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'
                  }`}>{cab.tag}</span>
                </div>
                <h3 className="font-extrabold text-gray-800 text-center text-sm mt-2 mb-1">{cab.name}</h3>
                <p className="text-gray-400 text-xs text-center mb-3">👥 {cab.seats} Seats • 🧳 {cab.bags} Bags • ❄️ AC</p>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-[#ea2330] font-extrabold text-2xl">{cab.price}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Min fare: {cab.minFare}</p>
                </div>
                <div className="mt-3 text-center text-xs text-[#ea2330] font-semibold group-hover:underline">
                  View Details →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FARE TABLE ═══════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Fare Chart</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-playfair">Route-wise Cab Fare (One Way)</h2>
            <p className="text-gray-500 mt-2 text-sm">Transparent pricing — what you see is what you pay, no hidden charges</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4">Route</th>
                  <th className="text-center px-4 py-4">Distance</th>
                  <th className="text-center px-4 py-4">🚗 Dzire/Amaze</th>
                  <th className="text-center px-4 py-4">🚙 Ertiga</th>
                  <th className="text-center px-4 py-4">🏎️ Innova</th>
                  <th className="text-center px-4 py-4">🚌 Tempo</th>
                  <th className="text-center px-4 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {routeFares.map((r, i) => (
                  <tr key={i} className="hover:bg-red-50 transition group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800">{r.from}</span>
                        <svg className="w-4 h-4 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        <span className="font-extrabold text-gray-900">{r.to}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-500">{r.km} km</td>
                    <td className="px-4 py-4 text-center font-bold text-[#ea2330]">{r.dzire}</td>
                    <td className="px-4 py-4 text-center font-bold text-green-600">{r.ertiga}</td>
                    <td className="px-4 py-4 text-center font-bold text-purple-600">{r.innova}</td>
                    <td className="px-4 py-4 text-center font-bold text-orange-600">{r.tempo}</td>
                    <td className="px-4 py-4 text-center">
                      <a href="tel:+916388116241" className="text-xs bg-[#ea2330] text-white px-3 py-1.5 rounded-lg font-bold hover:bg-red-700 transition whitespace-nowrap">
                        Book Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">* Toll charges and parking extra. Additional discount available for round trips. Call for exact quote.</p>
        </div>
      </section>

      {/* ── PARALLAX BREAK ─────────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-[#ea2330]/75 via-black/60 to-[#ea2330]/75"
        title="✈️ Airport Transfers & Outstation Cabs"
        subtitle="Varanasi Airport (VNS) pickups, night transfers, and long-distance outstation trips — available 24/7."
        cta={{ label: 'Call to Book: +91 63881 16241', href: 'tel:+916388116241' }}
      />

      {/* ═══ WHY CHOOSE ════════════════════════════════════ */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-playfair mb-2">Why Choose Yatra K Sathi Cab?</h2>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '👮', title: 'Verified Drivers', desc: 'Police background checked' },
              { icon: '💰', title: 'Best Price', desc: 'Market\'s lowest rates' },
              { icon: '⏰', title: '24/7 Service', desc: 'Available night and day' },
              { icon: '❄️', title: 'AC Cars', desc: 'Always clean & cool' },
              { icon: '📍', title: 'GPS Tracked', desc: 'Real-time monitoring' },
              { icon: '📱', title: 'Instant Book', desc: 'WhatsApp confirmation' },
            ].map((f) => (
              <div key={f.title} className="text-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition border border-white/10">
                <span className="text-3xl mb-2 block">{f.icon}</span>
                <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                <p className="text-gray-400 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ══════════════════════════════════════════ */}
      <section className="py-12 bg-[#ea2330]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-playfair mb-1">Book Now — Best Rates!</h2>
            <p className="text-red-100">AC cab, experienced driver, no advance payment required</p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap justify-center">
            <a href="tel:+916388116241" className="bg-white text-[#ea2330] px-6 py-3.5 rounded-xl font-extrabold hover:bg-gray-100 transition text-sm">
              📞 +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241" className="bg-green-500 text-white px-6 py-3.5 rounded-xl font-extrabold hover:bg-green-600 transition text-sm">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
