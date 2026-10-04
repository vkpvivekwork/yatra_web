'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CallNowButton({ text = 'CALL NOW', subText = 'CALL US NOW TO BOOK 4 SEATER SEDAN CAB' }) {
  return (
    <a
      href="tel:+916388116241"
      className="flex items-center justify-center gap-3 bg-[#ea2330] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg mx-auto max-w-sm w-full"
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

export default function VaranasiToAyodhya4SeaterPage() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: 'Varanasi', drop: 'Ayodhya', date: '', passengers: '4' })
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
          message: `Vehicle: 4 Seater Sedan Cab | Pickup: ${form.pickup} | Drop: ${form.drop} | Passengers: ${form.passengers}`,
          source: 'varanasi_ayodhya_4seater_sedan_page',
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
          <Image src="/hero-varanasi.jpg" alt="Varanasi to Ayodhya" fill className="object-cover opacity-40" priority />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-playfair mb-4">
            Varanasi to Ayodhya 4 Seater Sedan Cab &amp; Taxi
          </h1>
          <nav className="text-sm text-gray-300 flex items-center justify-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#ea2330] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/taxi" className="hover:text-[#ea2330] transition-colors">Cab Service</Link>
            <span>›</span>
            <Link href="/taxi/varanasi-to-ayodhya" className="hover:text-[#ea2330] transition-colors">Varanasi to Ayodhya Cab</Link>
            <span>›</span>
            <span className="text-white">Varanasi to Ayodhya 4 Seater Sedan Cab &amp; Taxi</span>
          </nav>
        </div>
      </section>

      {/* ── Main Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Left Content ── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Varanasi to Ayodhya 4 Seater Sedan Cab &amp; Taxi</h2>

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 shadow-md">
              <Image src="/vns-ayodhya-cab.jpg" alt="Varanasi to Ayodhya 4 Seater Sedan Cab" fill className="object-cover" />
            </div>

            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                Planning a trip from Varanasi to Ayodhya? Book a comfortable <strong>4-seater sedan cab</strong> and enjoy a hassle-free
                journey with our <strong>reliable Varanasi to Ayodhya Cab service</strong>.
              </p>
              <p>
                Whether you&apos;re traveling for a pilgrimage, business, or leisure, our well-maintained cabs ensure a smooth and safe
                ride. With professional drivers and affordable pricing, we provide the best travel experience on this sacred route.
              </p>
            </div>

            <div className="mt-6 flex justify-start">
              <CallNowButton text="CALL NOW" subText="CALL US NOW TO BOOK 4 SEATER SEDAN CAB" />
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {['/vns-ayodhya-cab.jpg', '/vns-ayodhya-fleet.jpg', '/vns-ayodhya-dzire.jpg'].map((src, i) => (
              <div key={i} className="relative h-32 md:h-44 rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={`Varanasi to Ayodhya Cab ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="CALL US NOW TO BOOK 4 SEATER SEDAN CAB" />
          </div>

          {/* About Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">4 Seater cab on rent in Varanasi for ayodhya</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Seeking a comfortable and convenient transportation option in Varanasi? Your search ends here with YatraKSathi{' '}
              <strong>Swift Dzire car on rent in varanai for ayodhya</strong> &amp; <strong>Swift Dzire car cab booking service</strong>.
              Our meticulously maintained Swift Dzire cars ensure a seamless and budget-friendly travel experience in Varanasi.
            </p>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="CALL US NOW TO BOOK 4 SEATER SEDAN CAB" />
          </div>

          {/* Pricing Table */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              4 Seater Sedan Cab Varanasi To Ayodhya Booking Rates In{' '}
              <span className="text-[#ea2330]">Varanasi</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {['Trip Type', 'Duration', 'Distance Covered (Roundtrip)', 'Rates / Charges', 'Terms & Conditions'].map((h) => (
                      <th key={h} className="bg-[#ea2330] text-white px-4 py-3 text-left font-semibold uppercase text-xs tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">4 Seater Sedan Cab for Varanasi to Ayodhya</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">12 hr*</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">Upto 4 Person</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100 font-semibold">Rs. 6500*</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">Driver Night (Before 6AM / After 9PM) is applicable.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="CALL US NOW TO BOOK 4 SEATER SEDAN CAB" />
          </div>

          {/* Bottom: Car image + Info */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[280px] bg-white flex items-center justify-center p-4">
                <Image
                  src="/vns-ayodhya-dzire.jpg"
                  alt="Swift Dzire for Ayodhya from Varanasi"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Swift Dzire For Ayodhya from Varanasi</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    We provide <em>Swift Dzire from Varanasi to Ayodhya</em> for tourist or locals of varanasi. If you want to
                    stay for night then also you can book our swift dzire service.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We provide <em>Swift Dzire from Varanasi to Gaya</em> for tourist or locals of varanasi. If you want to stay
                    for night then also you can book our swift dzire service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <CallNowButton text="CALL NOW" subText="CALL US NOW TO BOOK 4 SEATER SEDAN CAB" />
          </div>

          {/* Route Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: '🛣️',
                title: 'Distance: Varanasi to Ayodhya',
                body: 'The distance from Varanasi to Ayodhya is approximately 200 km via NH27. Travel time is around 4-5 hours by cab.',
              },
              {
                icon: '🕌',
                title: 'Why Visit Ayodhya?',
                body: 'Ayodhya is the birthplace of Lord Ram. Key attractions include Ram Janmabhoomi, Hanuman Garhi, Kanak Bhavan, and the grand Ram Mandir.',
              },
              {
                icon: '🚗',
                title: 'Why Choose Our 4 Seater Sedan?',
                body: 'Our Swift Dzire / Honda Amaze is perfect for families of 4. AC, comfortable seats, professional drivers, and 24/7 availability.',
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                body: 'We offer transparent pricing starting at Rs. 6500* for Varanasi to Ayodhya. No hidden charges. Driver night charges applicable before 6AM / after 9PM.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Right Sidebar ── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-5">

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Book Varanasi to Ayodhya Cab</h3>
                  <p className="text-xs text-gray-500 mb-4">4 Seater Sedan — Rs. 6500*</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input required type="text" placeholder="Your Name *" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input required type="tel" placeholder="Mobile Number *" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                    <input type="text" value={form.pickup} readOnly
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-gray-50 text-gray-500 cursor-not-allowed" />
                    <input type="text" value={form.drop} readOnly
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-gray-50 text-gray-500 cursor-not-allowed" />
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

            {/* Trip Details Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Trip Details</h4>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'From', val: 'Varanasi' },
                  { label: 'To', val: 'Ayodhya' },
                  { label: 'Distance', val: '~200 km' },
                  { label: 'Duration', val: '4-5 Hours' },
                  { label: 'Vehicle', val: 'Swift Dzire / Sedan' },
                  { label: 'Capacity', val: 'Upto 4 Persons' },
                  { label: 'Fare', val: 'Rs. 6500*' },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">{d.label}</span>
                    <span className="font-semibold text-gray-800">{d.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Related Services</h4>
              <ul className="space-y-1">
                {[
                  { label: 'Varanasi to Ayodhya Cab', href: '/taxi/varanasi-to-ayodhya' },
                  { label: 'Book Sedan Cab in Varanasi', href: '/taxi/sedan-cab-varanasi' },
                  { label: '4 Seater Cab in Varanasi', href: '/taxi/4-seater-cab-varanasi' },
                  { label: 'Swift Dzire on Rent', href: '/taxi/swift-dzire' },
                  { label: 'Varanasi Airport Cab', href: '/taxi/airport' },
                  { label: 'Taxi & Cab Service Varanasi', href: '/taxi' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center justify-between text-sm text-gray-700 hover:text-[#ea2330] transition-colors group py-1.5 border-b border-gray-100">
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
