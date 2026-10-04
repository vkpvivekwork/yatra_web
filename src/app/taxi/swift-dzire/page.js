'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CallNowButton({ text = 'CALL NOW', subText = 'CALL US NOW BOOK YOUR SWIFT DZIRE CAB / TAXI' }) {
  return (
    <a
      href="tel:+916388116241"
      className="flex items-center justify-center gap-3 bg-[#ea2330] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg mx-auto max-w-xs w-full"
    >
      <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      <div className="text-center">
        <div>{text}</div>
        <div className="text-xs font-normal opacity-90">{subText}</div>
      </div>
    </a>
  )
}

function PricingTable({ title, headers, rows }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {title} <span className="text-[#ea2330]">Varanasi</span>
      </h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} className="bg-[#ea2330] text-white px-4 py-3 text-left font-semibold uppercase text-xs tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700 border-t border-gray-100">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function SwiftDzirePage() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', passengers: '2' })
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
          service_type: 'taxi',
          message: `Vehicle: Swift Dzire | Pickup: ${form.pickup} | Drop: ${form.drop} | Passengers: ${form.passengers}`,
          source: 'swift_dzire_page',
        }),
      })
    } catch (err) {}
    finally { setLoading(false); setSubmitted(true) }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black text-white py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-varanasi.jpg"
            alt="Varanasi"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-playfair mb-4">
            Swift Dzire on rent in Varanasi | Swift Dzire Taxi Booking
          </h1>
          <nav className="text-sm text-gray-300 flex items-center justify-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#ea2330] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/taxi" className="hover:text-[#ea2330] transition-colors">Cab Service</Link>
            <span>›</span>
            <span className="text-white">Swift Dzire on rent in Varanasi | Swift Dzire Taxi Booking</span>
          </nav>
        </div>
      </section>

      {/* ── Main Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Left Content ── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Swift Dzire Taxi and Car Rental Services in Varanasi</h2>
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 shadow-md">
              <Image
                src="/swift-dzire-varanasi.jpg"
                alt="Swift Dzire Cab in Varanasi"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <p><strong>YatraKSathi, a leading travel agency in Varanasi</strong>, we provide Swift Dzire taxi services to tourists visiting Varanasi.</p>
              <p><strong>YatraKSathi</strong> offers a wide range of <strong>Taxi and Cab services</strong> to help travelers explore Varanasi at their own pace.</p>
              <p>We Provide <strong>Swift Dzire Cab</strong> for Tourists and Families who want to visit Varanasi.</p>
              <p><em>Swift Dzire</em> is best for up to 4 People and small families. It is an economy sedan with full AC comfort.</p>
            </div>
            <div className="mt-6 flex justify-start">
              <CallNowButton text="CALL NOW" subText="CALL US NOW BOOK YOUR SWIFT DZIRE CAB / TAXI" />
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {['/swift-dzire-varanasi.jpg', '/swift-dzire-fleet.jpg', '/swift-dzire-side.jpg'].map((src, i) => (
              <div key={i} className="relative h-32 md:h-44 rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={`Swift Dzire ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Swift Dzire on rent in Varanasi</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Seeking a comfortable and convenient transportation option in Varanasi? Your search ends here with YatraKSathi{' '}
              <strong>Swift Dzire on rent in Varanasi</strong> &amp; <strong>Swift Dzire cab booking service</strong>. Our meticulously maintained
              Swift Dzire cars ensure a seamless and budget-friendly travel experience in Varanasi. The Swift Dzire is a popular economy sedan
              that offers excellent fuel efficiency and a comfortable ride for up to 4 passengers, making it ideal for city tours, airport transfers,
              and outstation trips.
            </p>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="SWIFT DZIRE CAB BOOKING IN VARANASI" />
          </div>

          {/* ── Pricing Tables ── */}

          <PricingTable
            title="Swift Dzire Airport Pick & Drop Cab Booking Rate In"
            headers={['Trip Type', 'Distance Covered', 'Rates / Charges', 'Terms & Conditions']}
            rows={[
              ['Varanasi Airport Pickup', 'Upto 25 KM', 'Rs. 800*', 'After 25KM dynamic pricing will be applicable'],
              ['Varanasi Airport Drop', 'Upto 25 KM', 'Rs. 800*', 'After 25KM dynamic pricing will be applicable'],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="BOOK SWIFT DZIRE FOR AIRPORT PICK & DROP IN VARANASI" />
          </div>

          <PricingTable
            title="Swift Dzire Railway Station Pick & Drop Cab Booking Rate In"
            headers={['Trip Type', 'Distance Covered', 'Rates / Charges', 'Terms & Conditions']}
            rows={[
              ['Varanasi Junction Station Pick & Drop', 'Upto 15 KM', 'Rs. 600*', 'After 15KM Per KM pricing will be applicable'],
              ['Varanasi City Station Pick & Drop', 'Upto 15 KM', 'Rs. 600*', 'After 15KM Per KM pricing will be applicable'],
              ['Banaras Station (Manduadih) Pick & Drop', 'Upto 15 KM', 'Rs. 600*', 'After 15KM Per KM pricing will be applicable'],
              ['DDU Station (Pt Din Dayal Upadhyay Junction) / Mughalsarai Station Pick & Drop', 'Upto 30 KM', 'Rs. 1000', 'After 30KM Per KM pricing will be applicable'],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="BOOK SWIFT DZIRE FOR RAILWAY STATION PICK & DROP IN VARANASI" />
          </div>

          <PricingTable
            title="Swift Dzire — Varanasi Local City Sightseeing Booking Rates In"
            headers={['Trip Type', 'Duration', 'Distance Covered (Roundtrip)', 'Rates / Charges', 'Destinations Covered', 'Terms & Conditions']}
            rows={[
              [
                'Varanasi Local Full Day Sightseeing', 'Full Day', 'Upto 80KM', 'Rs. 1800*',
                '1- Shri Kashi Vishwanath Temple, 2- Annapurna Temple, 3- Kalbhairav, 4- Vishalakshi Temple, 5- Birla Temple (BHU), 6- Sankat Mochan Temple, 7- Durga Temple, 8- Tulsi Manas Temple, 9- Ganga Aarti (Dashaswamedh Ghat) / Assi Ghat',
                'Parking, Driver Night Charges are applicable: Before 6am / After 9pm'
              ],
              [
                'Varanasi Local Full Day Sightseeing', 'Full Day', 'Upto 120 KM', 'Rs. 2200*',
                '1- Shri Kashi Vishwanath Temple, 2- Kal Bhairav Temple, 3- Annapurna Temple, 4- Vishalakshi Temple, 5- Birla Temple (BHU), 6- Sankat Mochan Temple, 7- Durga Temple, 8- Tulsi Manas Mandir, 9- Sarnath, 10- Ganga Aarti (Dashaswamedh Ghat)',
                'Parking, Driver Night Charges are applicable: Before 6am / After 9pm'
              ],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="BOOK SWIFT DZIRE FOR VARANASI LOCAL SIGHTSEEING" />
          </div>

          <PricingTable
            title="Swift Dzire — Varanasi To Ayodhya Booking Rates In"
            headers={['Trip Type', 'Duration', 'Distance Covered (Roundtrip)', 'Rates / Charges', 'Terms & Conditions']}
            rows={[
              ['Swift Dzire for Varanasi to Ayodhya', '12 hr*', 'Upto 4 Person', 'Rs. 5000*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="BOOK SWIFT DZIRE FOR VARANASI TO AYODHYA" />
          </div>

          <PricingTable
            title="Swift Dzire — Varanasi To Prayagraj (Allahabad) Booking Rates In"
            headers={['Trip Type', 'Duration', 'Distance Covered (Roundtrip)', 'Rates / Charges', 'Terms & Conditions']}
            rows={[
              ['Swift Dzire for Varanasi to Prayagraj (Allahabad)', '12 hr*', 'Upto 4 Person', 'Rs. 4000*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="BOOK CAB NOW" subText="BOOK SWIFT DZIRE FOR VARANASI TO PRAYAGRAJ" />
          </div>

          <PricingTable
            title="Swift Dzire — Varanasi To Other Cities Booking Rates In"
            headers={['Trip Type', 'Duration', 'Distance Covered (Roundtrip)', 'Rates / Charges', 'Terms & Conditions']}
            rows={[
              ['Swift Dzire for Varanasi to Vindhyachal', '8 hr*', 'Upto 4 Person', 'Rs. 2600*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
              ['Swift Dzire for Varanasi to Bodh Gaya', '12 hr*', 'Upto 4 Person', 'Rs. 7000*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
              ['Swift Dzire for Varanasi to Lucknow', '12 hr*', 'Upto 4 Person', 'Rs. 8500*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
              ['Swift Dzire for Varanasi to Gorakhpur', '8 hr*', 'Upto 4 Person', 'Rs. 5000*', 'Driver Night (Before 6AM / After 9PM) is applicable.'],
            ]}
          />

          {/* Bottom Car Image */}
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/swift-dzire-fleet.jpg"
              alt="Swift Dzire Fleet Varanasi"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              {
                title: 'Swift Dzire For Prayagraj from Varanasi',
                body: 'We provide Swift Dzire cab from Varanasi to Prayagraj for tourists or locals of Varanasi. If you want to stay for the night then also you can book our Swift Dzire cab service. Comfortable and affordable journey to Prayagraj (Allahabad) in a well-maintained Swift Dzire.',
              },
              {
                title: 'Swift Dzire to Ayodhya from Varanasi',
                body: 'We provide Swift Dzire cab from Varanasi to Ayodhya for tourists or locals of Varanasi. If you want to stay for the night then also you can book our Swift Dzire cab service. Experience a comfortable and memorable journey to the holy city of Ayodhya.',
              },
              {
                title: 'Swift Dzire For Gaya from Varanasi',
                body: 'We provide Swift Dzire cab from Varanasi to Gaya (Bodh Gaya) for tourists or locals of Varanasi. If you want to stay for the night then also you can book our Swift Dzire cab service. Ideal for Buddhist pilgrimage tours.',
              },
              {
                title: 'Swift Dzire For Vindhyachal from Varanasi',
                body: 'We provide Swift Dzire cab from Varanasi to Vindhyachal for tourists or locals of Varanasi. Comfortable and affordable cab service for pilgrimage trips to Maa Vindhyavasini temple.',
              },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2">
            <CallNowButton text="CALL NOW" subText="CALL US NOW FOR SWIFT DZIRE CAB BOOKING" />
          </div>
        </div>

        {/* ── Right Sidebar ── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-5">

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Book Swift Dzire</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input required type="text" placeholder="Your Name *" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input required type="tel" placeholder="Mobile Number *" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input required type="text" placeholder="📍 Pickup Location *" value={form.pickup}
                      onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input required type="text" placeholder="🏁 Drop Location *" value={form.drop}
                      onChange={(e) => setForm({ ...form, drop: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input required type="date" value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <button type="submit" disabled={loading}
                      className="w-full bg-[#ea2330] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                      {loading ? 'Sending...' : '🚗 Book Now'}
                    </button>
                    <a href="tel:+916388116241"
                      className="block text-center border-2 border-[#ea2330] text-[#ea2330] py-2.5 rounded-xl font-semibold hover:bg-[#ea2330] hover:text-white transition text-sm">
                      📞 +91 63881 16241
                    </a>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Received!</h3>
                  <p className="text-gray-500 text-sm mb-4">We will call you within 15 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#ea2330] text-sm hover:underline">Book another</button>
                </div>
              )}
            </div>

            {/* Contact Card */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 text-center shadow-xl">
              <p className="text-gray-300 text-sm mb-3">info@yatrakasathi.com</p>
              <div className="w-14 h-14 bg-[#ea2330]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-[#ea2330]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1">Have any Questions?</h3>
              <p className="text-gray-300 mb-3">Call us Today!</p>
              <a href="tel:+916388116241" className="text-[#ea2330] text-2xl font-bold hover:underline">
                +91 63881 16241
              </a>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Related Services</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Taxi & Cab Service In Varanasi', href: '/taxi' },
                  { label: 'Sedan Cab in Varanasi', href: '/taxi/sedan-cab-varanasi' },
                  { label: '4 Seater Cab in Varanasi', href: '/taxi/4-seater-cab-varanasi' },
                  { label: 'Varanasi to Ayodhya Cab', href: '/taxi/varanasi-to-ayodhya' },
                  { label: 'Varanasi Airport Cab Service', href: '/taxi/airport' },
                  { label: 'Innova Crysta on Rent', href: '/taxi/innova-crysta' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center justify-between text-sm text-gray-700 hover:text-[#ea2330] transition-colors group py-1 border-b border-gray-100">
                      <span>{link.label}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
