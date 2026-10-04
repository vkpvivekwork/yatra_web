'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ghatRows = [
  'Dashashwamedh Ghat – Famous for Evening Ganga Aarti',
  'Assi Ghat – Famous for Morning Ganga Aarti',
  'Harishchandra Ghat – Cremation Ghat in Varanasi',
  'Manikarnika Ghat – Most Popular Cremation Ghat in Varanasi',
]

const whyChoose = [
  'Experienced and Professional Boatmen',
  'Transparent Pricing & 24/7 Availability',
  'Wide Range of Boats: Hand Boat, Motor Boat, Bajara, Cruise etc.',
  'Easy Online Booking: You can easily book our boat from any part of the world. You can also pay us online to book ride for you.',
]

function EnquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', persons: '2', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          travel_date: form.date,
          service_type: 'boating',
          message: `HAND BOAT RIDE | Persons: ${form.persons}${form.message ? ' | ' + form.message : ''}`,
          source: 'hand_boat_ride_page',
        }),
      })
    } catch (e) {}
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="text-center py-6">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-base font-bold text-gray-800 mb-2">Enquiry Sent!</h3>
      <p className="text-gray-500 text-sm mb-4">We will contact you within 15 minutes.</p>
      <a href="https://wa.me/916388116241" className="block w-full bg-green-500 text-white py-2.5 rounded-xl font-bold mb-2 text-sm">💬 WhatsApp Us</a>
      <a href="tel:+916388116241" className="block w-full bg-[#ea2330] text-white py-2.5 rounded-xl font-bold text-sm">📞 Call Now</a>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required type="text" placeholder="Your Name *" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <input required type="tel" placeholder="Mobile Number *" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <input type="date" value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
      <select value={form.persons}
        onChange={e => setForm({ ...form, persons: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
        {['1','2','3','4','5','6'].map(n => <option key={n} value={n}>{n} Persons</option>)}
      </select>
      <textarea placeholder="Message (optional)" rows={3} value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] resize-none" />
      <button type="submit" disabled={loading}
        className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition text-sm disabled:opacity-60">
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}

function CallNowBtn() {
  return (
    <a href="tel:+916388116241"
      className="flex items-center justify-center gap-3 w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-4 rounded-xl text-base transition my-6 shadow">
      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      CALL NOW &nbsp;·&nbsp; BOOK HAND BOAT RIDE
    </a>
  )
}

export default function HandBoatRidePage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        className="relative min-h-[340px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair leading-snug">
            Hand Boat Ride Booking in Varanasi | Rowing Boat Ride in Varanasi
          </h1>
        </div>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-sm text-gray-200">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>›</span>
          <span className="text-white">Hand Boat Ride Booking in Varanasi | Rowing Boat Ride in Varanasi</span>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LEFT CONTENT ── */}
            <div className="flex-1 min-w-0">

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 leading-snug">
                Hand Boat Ride Booking in Varanasi | Rowing Boat in Varanasi
              </h2>

              {/* Main Image */}
              <div className="relative w-full h-72 sm:h-[420px] rounded-xl overflow-hidden mb-6 shadow">
                <Image
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop"
                  alt="Hand Boat Ride Varanasi Ganga Ghats"
                  fill className="object-cover" priority
                />
              </div>

              {/* Body content */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 mb-2">
                <p><strong>Hand boat rides in Varanasi</strong> are an age-old tradition, dating back to the city's ancient past.</p>
                <p><strong>Hand boats</strong> are small and can accommodate up to six people.</p>
                <p>
                  <em>Hand Boats or Rowing Boats are manually powered by one or two boatman</em> who sit at the rear of the boat and use their hands to row.
                </p>
                <p>
                  The <em>Hand boats used for boating in River Ganga</em> are typically made of wood, and they are beautifully crafted and painted with bright colors and traditional designs.
                </p>
                <p>
                  <strong>Yatra K Sathi's boat ride service</strong> is a popular choice among tourists as it offers a unique perspective of the city's culture and traditions.
                </p>
                <p>
                  "The <strong>Hand Boat ride service</strong> is available throughout the day, but the best time to take the ride is during sunrise or sunset, when the city comes alive with vibrant colors."
                </p>
                <p>
                  The boats used for the <strong>Boat Ride in River Ganga</strong> are well-maintained, ensuring the passengers' safety and comfort. The Hand boats are equipped with life jackets and other safety equipment to ensure the passengers' safety. The boats are driven by experienced and trained boatmen who have a deep understanding of the river and the city's history and culture.
                </p>
                <p>
                  The boat ride takes passengers along the Ganges River, past the city's many ghats, each with its own unique history and significance.
                </p>
                <p>
                  Passengers can witness the various rituals and ceremonies that take place on the ghats, such as the <strong>Hand Boat Ride During Morning Ganga aarti</strong> and the <strong>Hand Boat Ride During Evening Ganga aarti</strong>.
                </p>
                <p>The Hand boat ride also offers a glimpse of the city's iconic buildings and temples, such as the</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                  <li>Hand Boat Ride to Kashi Vishwanath Temple</li>
                  <li>Hand Boat Ride to Namo Ghat</li>
                  <li>Hand Boat Ride to Dashashwamedh Ghat</li>
                  <li>Hand Boat Ride to Assi Ghat</li>
                </ol>
                <p>
                  The <strong>Hand Boat Ride service provided by Yatra K Sathi</strong> is a unique and unforgettable experience that allows passengers to witness the city's rich culture and history from a different perspective.
                </p>
              </div>

              <CallNowBtn />

              {/* Popular Ghats Table — dark navy header */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Hand Boat Rides can be booked from various popular ghats of Varanasi
              </h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
                <div className="bg-[#1e3a5f] text-white px-5 py-3 font-semibold text-sm">
                  Hand Boat Ride Booking in Varanasi
                </div>
                {ghatRows.map((ghat, i) => (
                  <div key={i} className={`px-5 py-3.5 text-sm text-gray-700 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    {ghat}
                  </div>
                ))}
              </div>

              <CallNowBtn />

              {/* Charges Section */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Hand Boat Ride Charges in Varanasi
              </h3>
              <div className="text-gray-700 space-y-2.5 text-sm sm:text-base leading-relaxed mb-2">
                <p><strong>Hand Boat rides Charges on River Ganga in Varanasi</strong> varies from person to person.</p>
                <p>The charges for Hand boat rides varies From <strong>Rs. 1000 to Rs. 2500</strong> depending upon the duration of the Boat Ride and how much distance you cover during the boat ride.</p>
                <p>The charges for boat ride depends on the time and demand of boats like in <strong className="text-[#ea2330]">Dev Deepawali</strong> Boat Ride Charges goes upto <strong>Rs. 50000</strong> for Single Rides.</p>
              </div>

              <CallNowBtn />

              {/* Why Choose Us */}
              <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 leading-snug">
                  Why Choose Yatra K Sathi as Your Hand Boat Riding Service Provider in Varanasi
                </h3>
                <div className="space-y-3">
                  {whyChoose.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <svg className="w-5 h-5 text-[#ea2330] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="lg:w-80 xl:w-96 shrink-0 space-y-5">

              {/* Related link */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition group">
                  <Link href="/taxi" className="text-sm font-semibold text-gray-800 group-hover:text-[#ea2330] leading-snug">
                    Taxi & Cab Service In Varanasi | Airport Pickup & Drop in Varanasi
                  </Link>
                  <svg className="w-4 h-4 text-gray-400 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Send Enquiry */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-800 text-white text-center py-3 font-bold text-sm tracking-wide uppercase">
                  Send Enquiry
                </div>
                <div className="bg-gray-900 p-5">
                  <div className="text-center mb-5 pb-5 border-b border-gray-700">
                    <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[#ea2330]">
                      <svg className="w-7 h-7 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-sm">Have any Questions?</p>
                    <p className="text-white font-bold text-sm">Call us Today!</p>
                    <a href="tel:+916388116241" className="text-[#ea2330] font-extrabold text-lg mt-1 block hover:underline">
                      +91-63881 16241
                    </a>
                    <a href="mailto:yatriksathi@gmail.com" className="text-gray-400 text-xs hover:text-white">
                      yatriksathi@gmail.com
                    </a>
                  </div>
                  <EnquiryForm />
                </div>
              </div>

              {/* Other Boat Rides */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-3 font-bold text-sm text-gray-700 uppercase tracking-wide">
                  Other Boat Rides
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Morning Boat Ride', href: '/sightseeing/activities/morning-boat-ride' },
                    { label: 'Bajra Boat Ride', href: '/sightseeing/activities/bajra-boat-ride' },
                    { label: 'Sunrise Boat Tour', href: '/boating/sunrise-tour' },
                    { label: 'Ganga Aarti by Boat', href: '/boating/ganga-aarti' },
                    { label: '84 Ghats Boat Ride', href: '/boating/84-ghats' },
                  ].map(link => (
                    <Link key={link.href} href={link.href}
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:text-[#ea2330] hover:bg-gray-50 transition">
                      {link.label}
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
