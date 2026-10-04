'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CallNowButton({ text = 'CALL NOW', subText = 'CALL US NOW BOOK TEMPO TRAVELLER FOR YOU' }) {
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

function SimplePricingTable({ title, rows }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-4 text-gray-700 border-t border-gray-100 font-medium w-2/3">{row[0]}</td>
                <td className="px-5 py-4 text-[#ea2330] font-bold border-t border-gray-100">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function TempoTravellerPage() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', passengers: '10' })
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
          message: `Vehicle: Tempo Traveller | Pickup: ${form.pickup} | Drop: ${form.drop} | Passengers: ${form.passengers}`,
          source: 'tempo_traveller_page',
        }),
      })
    } catch (err) {}
    finally { setLoading(false); setSubmitted(true) }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-varanasi.jpg" alt="Varanasi" fill className="object-cover opacity-40" priority />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-playfair mb-4">
            Tempo Traveller on Rent in Varanasi | Tempo Traveller Online Booking in Varanasi
          </h1>
          <nav className="text-sm text-gray-300 flex items-center justify-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#ea2330] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/taxi" className="hover:text-[#ea2330] transition-colors">Cab Service</Link>
            <span>›</span>
            <span className="text-white">Tempo Traveller on Rent in Varanasi</span>
          </nav>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Intro Heading + Big Vehicle Image */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Tempo Traveller Booking in Varanasi | Tempo Traveller For Tourist in Varanasi
            </h2>

            {/* Full-width large image */}
            <div className="relative w-full h-48 sm:h-72 md:h-[420px] rounded-xl overflow-hidden mb-6 shadow-md">
              <Image
                src="/tempo-traveller-varanasi.jpg"
                alt="Tempo Traveller on Rent in Varanasi"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <p><strong>YatraKSathi, a leading travel agency in Varanasi</strong>, we provide taxi services to tourists visiting Varanasi.</p>
              <p><strong>YatraKSathi</strong> offers a wide range of <strong>Taxi and Cab services</strong> to help travelers explore Varanasi at their own pace.</p>
              <p>We Provide <strong>Tempo Traveller in Varanasi</strong> for Tourists and Families who want to visit Varanasi.</p>
              <p><em>Tempo Traveller</em> is best for up to <strong>15 People</strong> and family groups — perfect for large group outings, pilgrimages, and corporate tours.</p>
            </div>

            <div className="mt-6 flex justify-start">
              <CallNowButton text="CALL NOW" subText="CALL US NOW BOOK TEMPO TRAVELLER FOR YOU" />
            </div>
          </div>

          {/* 6-Image Gallery (3x2 grid) */}
          <div className="grid grid-cols-3 gap-3">
            {[
              '/tempo-traveller-varanasi.jpg',
              '/tempo-traveller-interior1.jpg',
              '/tempo-traveller-interior2.jpg',
              '/tempo-traveller-side.jpg',
              '/tempo-traveller-interior3.jpg',
              '/tempo-traveller-fleet.jpg',
            ].map((src, i) => (
              <div key={i} className="relative h-36 md:h-48 rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={`Tempo Traveller ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Pricing Table 1 — Local Rates */}
          <SimplePricingTable
            title="Tempo Traveller Booking Rate in Varanasi"
            rows={[
              ['Varanasi Airport Pick / Drop', 'Rs. 2500'],
              ['Mughalsarai (DDU) Station Pick / Drop', 'Rs. 2500'],
              ['Railway Station Pick/Drop', 'Rs. 2000'],
              ['Full Day Local Varanasi', 'Rs. 6500'],
              ['For 8 Hrs OR 80Km', 'Rs. 6500'],
            ]}
          />

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="TEMPO TRAVELLER BOOKING" />
          </div>

          {/* Pricing Table 2 — Outstation */}
          <SimplePricingTable
            title="Tempo Traveller Outstation Booking Rate in Varanasi"
            rows={[
              ['Varanasi to Allahabad (Prayagraj)', 'Rs. 9000'],
              ['Varanasi to Ayodhya', 'Rs. 13500'],
              ['Varanasi to Bodhgaya', 'Rs. 16000'],
              ['Varanasi to Lucknow', 'Rs. 18000'],
              ['Varanasi to Vindhyachal', 'Rs. 6000'],
              ['Varanasi to Gorakhpur', 'Rs. 12000'],
            ]}
          />

          {/* Drop-cap Paragraph */}
          <div className="text-gray-700 text-sm leading-relaxed space-y-3 pt-2">
            <p>
              <span className="float-left text-6xl font-bold text-[#ea2330] leading-none mr-3 mt-1">T</span>
              he Tempo Traveller is a kind of mini bus that comes in various seating capacities, including 10, 12, 15, 17, and 20, all equipped with air conditioning (AC).
            </p>
            <p>Experience a luxurious and comfortable ride by hiring our Tempo Traveller in Varanasi, making your trip truly memorable.</p>
            <p>
              You can book this upscale Tempo Traveller (Mini Van) from YatraKSathi in Varanasi. It is an incredibly spacious and luxurious mini bus suitable for long trips, covering the entire Buddhist Circuit or any other religious or pilgrimage tour from Varanasi.
            </p>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="TEMPO TRAVELLER BOOKING" />
          </div>

          {/* Tempo Traveller Service Info */}
          <div className="border-l-4 border-[#ea2330] bg-gray-50 rounded-r-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Tempo Traveller Service in Varanasi</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              From <strong>Airport pickup and drop services in Varanasi</strong> to local transportation, YatraKSathi has a fleet of
              well-maintained and comfortable Tempo Travellers that cater to all your group travel needs. Whether you are a large family,
              a group of pilgrims, or a corporate team, YatraKSathi has the right vehicle to suit your requirements.
            </p>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="CALL US NOW FOR AIRPORT PICKUP OR DROP BOOKING" />
          </div>

          {/* Why Choose Section */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Why Choose YatraKSathi as Your Tempo Traveller Service Provider in Varanasi
            </h3>
            <ul className="space-y-4">
              {[
                { title: 'Experienced and Professional Drivers', desc: 'Our drivers are well-trained, polite, and know every corner of Varanasi to give you the best group travel experience.' },
                { title: 'Transparent Pricing & 24/7 Availability', desc: 'No hidden charges. We are available round the clock for all your group travel needs, any time of day or night.' },
                { title: 'Wide Range of Vehicles', desc: 'Swift Dzire, Ertiga, Innova Crysta, Tempo Traveller, Mini Bus and more to suit every group size and budget.' },
                { title: 'Easy Online Booking', desc: 'You can easily book our Tempo Traveller from any part of the world. You can also pay us online to book your service.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 border-[#ea2330] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                    <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start">
            <CallNowButton text="CALL NOW" subText="CALL US NOW FOR AIRPORT PICKUP OR DROP BOOKING" />
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {[
              {
                title: 'Tempo Traveller For Prayagraj from Varanasi',
                body: 'We provide Tempo Traveller from Varanasi to Prayagraj for large groups, tourists, and locals. Ideal for pilgrimage trips to Sangam and nearby temples.',
              },
              {
                title: 'Tempo Traveller to Ayodhya from Varanasi',
                body: 'Book a Tempo Traveller from Varanasi to Ayodhya for your group. Travel comfortably to the holy city of Ram Janmabhoomi with your family or friends.',
              },
              {
                title: 'Tempo Traveller For Bodh Gaya from Varanasi',
                body: 'We provide Tempo Traveller from Varanasi to Bodh Gaya — perfect for Buddhist Circuit pilgrimages. Spacious seating for groups of up to 15–20 passengers.',
              },
              {
                title: 'Tempo Traveller For Vindhyachal from Varanasi',
                body: 'Book Tempo Traveller from Varanasi to Vindhyachal for pilgrimage groups. Comfortable, AC, and affordable group travel to Maa Vindhyavasini temple.',
              },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2">
            <CallNowButton text="CALL NOW" subText="BOOK TEMPO TRAVELLER IN VARANASI" />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-5">

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Cab Services</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Taxi & Cab Service In Varanasi | Airport Pickup & Drop', href: '/taxi' },
                  { label: 'Swift Dzire on Rent in Varanasi', href: '/taxi/swift-dzire' },
                  { label: 'Innova Crysta on Rent in Varanasi', href: '/taxi/innova-crysta' },
                  { label: 'Ertiga Cab in Varanasi', href: '/taxi/ertiga' },
                  { label: 'Sedan Cab in Varanasi', href: '/taxi/sedan-cab-varanasi' },
                  { label: 'Varanasi to Ayodhya Cab', href: '/taxi/varanasi-to-ayodhya' },
                  { label: 'Varanasi Airport Cab Service', href: '/taxi/airport' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center justify-between text-sm text-gray-700 hover:text-[#ea2330] transition-colors group py-1.5 border-b border-gray-100">
                      <span className="pr-2">{link.label}</span>
                      <svg className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Send Enquiry Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-center font-bold text-gray-700 text-sm uppercase tracking-widest mb-4 border-b pb-3">Send Enquiry</h3>
              {!submitted ? (
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
                  <select value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-gray-600">
                    <option value="10">Upto 10 Passengers</option>
                    <option value="12">Upto 12 Passengers</option>
                    <option value="15">Upto 15 Passengers</option>
                    <option value="17">Upto 17 Passengers</option>
                    <option value="20">Upto 20 Passengers</option>
                  </select>
                  <button type="submit" disabled={loading}
                    className="w-full bg-[#ea2330] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                    {loading ? 'Sending...' : '🚌 Book Now'}
                  </button>
                  <a href="tel:+916388116241"
                    className="block text-center border-2 border-[#ea2330] text-[#ea2330] py-2.5 rounded-xl font-semibold hover:bg-[#ea2330] hover:text-white transition text-sm">
                    📞 +91 63881 16241
                  </a>
                </form>
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
              <div className="w-14 h-14 bg-[#ea2330]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-[#ea2330]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1">Have any Questions?</h3>
              <p className="text-gray-300 mb-3">Call us Today!</p>
              <a href="tel:+916388116241" className="text-[#ea2330] text-2xl font-bold hover:underline block mb-2">
                +91 63881 16241
              </a>
              <p className="text-gray-400 text-xs">info@yatrakasathi.com</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
