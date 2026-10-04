'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    alt: 'Morning Boat Ride Varanasi Ghat',
  },
  {
    src: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    alt: 'Varanasi Ghat Boats Morning',
  },
  {
    src: 'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=800&auto=format&fit=crop',
    alt: 'Sunrise Boat Ride River Ganga Varanasi',
  },
  {
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop',
    alt: 'Varanasi Ganga Boats at Dawn',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    alt: 'Ganga Sunrise Varanasi',
  },
  {
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    alt: 'Morning Rituals on Ganga',
  },
]

const boatTypes = [
  'Hand Boat Ride on River Ganga in Varanasi',
  'Motor Boat Ride on River Ganga in Varanasi',
  'Bajra Boat Ride on River Ganga in Varanasi',
  'Cruise Boat Ride on River Ganga in Varanasi',
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
          message: `MORNING BOAT RIDE | Persons: ${form.persons}${form.message ? ' | ' + form.message : ''}`,
          source: 'morning_boat_ride_page',
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
        {['1', '2', '3', '4', '5', '6', '8', '10', '15', '20+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
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

export default function MorningBoatRidePage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        className="relative min-h-[340px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3">
            Morning Boat Ride in Varanasi
          </h1>
        </div>
        {/* Breadcrumb inside banner */}
        <div className="relative z-10 mt-3 flex items-center gap-2 text-sm text-gray-200">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>›</span>
          <span className="text-white">Morning Boat Ride in Varanasi</span>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LEFT CONTENT ── */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Book morning boat ride online in Varanasi
              </h2>

              {/* Main Image */}
              <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden mb-6 shadow">
                <Image
                  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop"
                  alt="Morning Boat Ride Varanasi"
                  fill className="object-cover" priority
                />
              </div>

              {/* Intro text */}
              <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-3 mb-6">
                <p>
                  Varanasi, the spiritual capital of India, is famous for its early morning boat rides on the holy Ganga River.
                  A morning boat ride in Varanasi is one of the most memorable experiences that visitors can have in this ancient city.
                </p>
                <p>
                  <strong>Yatra K Sathi – Best Boat Ride Service provider in Varanasi</strong>, offers boat ride services to explore the city's scenic beauty from the waters.
                </p>
                <p>
                  "The boat ride service is available throughout the day, but the best time to take the ride is during sunrise or sunset, when the city comes alive with vibrant colors."
                </p>
                <p>
                  The boats used for the <strong>Boat Ride in River Ganga</strong> are well-maintained, ensuring the passengers' safety and comfort. The boats are equipped with life jackets and other safety equipment to ensure the passengers' safety. The boats are driven by experienced and trained boatmen who have a deep understanding of the river and the city's history and culture.
                </p>
                <p>
                  The boat ride takes passengers along the Ganges River, past the city's many ghats, each with its own unique history and significance.
                </p>
              </div>

              {/* Cruise Image */}
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 shadow">
                <Image
                  src="https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=1200&auto=format&fit=crop"
                  alt="Cruise Boat Ride Varanasi Ganga"
                  fill className="object-cover"
                />
              </div>

              {/* Photo Gallery */}
              <div className="grid grid-cols-3 gap-2 mb-10">
                {galleryImages.map((img, i) => (
                  <div key={i} className="relative h-36 sm:h-44 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition duration-300" />
                  </div>
                ))}
              </div>

              {/* Boat Types Table */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Type of boats for morning boat ride in Varanasi
              </h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
                <div className="bg-[#1e3a5f] text-white px-5 py-3 font-semibold text-sm">
                  Type of Boat Rides
                </div>
                {boatTypes.map((boat, i) => (
                  <div key={i} className={`px-5 py-3.5 text-sm text-gray-700 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${i === boatTypes.length - 1 ? 'font-semibold' : ''}`}>
                    {boat}
                  </div>
                ))}
              </div>

              {/* Call Now CTA */}
              <a href="tel:+916388116241"
                className="flex items-center justify-center gap-3 w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-4 rounded-xl text-base transition mb-8 shadow">
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL NOW &nbsp;·&nbsp; CALL US NOW & BOOK BOAT RIDE FOR YOU
              </a>

              {/* Sightseeing spots */}
              <p className="text-gray-700 mb-3">The boat ride also offers a glimpse of the city's iconic buildings and temples, such as the</p>
              <ol className="list-decimal list-inside space-y-1.5 text-gray-700 text-sm mb-6 ml-2">
                <li>Boat Ride to Kashi Vishwanath Temple</li>
                <li>Boat Ride to Namo Ghat</li>
                <li>Boat Ride to Dashashwamedh Ghat</li>
                <li>Boat Ride to Assi Ghat</li>
              </ol>

              <p className="text-gray-700 leading-relaxed mb-2">
                The <strong>Boat ride service provided by Yatra K Sathi</strong> is a unique and unforgettable experience that allows passengers to witness the city's rich culture and history from a different perspective.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The service is reasonably priced, making it accessible to all visitors, and can be easily booked through Yatra K Sathi's <strong>Online Boat booking</strong> system.
              </p>

              {/* Second Call Now CTA */}
              <a href="tel:+916388116241"
                className="flex items-center justify-center gap-3 w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-xl text-base transition mb-10 shadow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL NOW &nbsp;·&nbsp; CALL US NOW & BOOK BOAT RIDE FOR YOU
              </a>

              {/* Charges Section */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Morning Boat Ride Charges on River Ganga in Varanasi
              </h3>
              <div className="text-gray-700 space-y-2.5 text-sm leading-relaxed mb-8">
                <p><strong>Boat rides Charges on River Ganga in Varanasi</strong> are not fixed and it changes as per season & demand.</p>
                <p>The charges for boat rides vary depending on the type of boat and the duration of the ride.</p>
                <p>The most popular options are hand boat, motor boat, bazara boat & Cruise, which can accommodate from 2 to 100 people depending on the type of Boat you Choose.</p>
                <p>The charges for boat ride depends on the time and demand of boats like in Dev Deepawali Boat Ride Charges goes upto Rs. 50000 for Single Rides.</p>
              </div>

              {/* Why Choose Us */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 leading-snug">
                  Why Choose Yatra K Sathi as Your Boat Riding Service Provider in Varanasi
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
                <div className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition cursor-pointer group">
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
                  {/* Contact card */}
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

              {/* Quick Links */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-3 font-bold text-sm text-gray-700 uppercase tracking-wide">
                  Other Boat Rides
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Sunrise Boat Tour', href: '/boating/sunrise-tour' },
                    { label: 'Ganga Aarti by Boat', href: '/boating/ganga-aarti' },
                    { label: '84 Ghats Boat Ride', href: '/boating/84-ghats' },
                    { label: 'Special Events Boating', href: '/boating/events' },
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
