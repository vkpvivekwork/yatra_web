'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  '24/7 Airport Pickup & Drop Service',
  'On-Time Arrival Guarantee',
  'Professional & Verified Drivers',
  'AC Sedan, SUV & Tempo Traveller Options',
  'Affordable & Transparent Pricing',
  'Easy Online & Phone Booking',
  'Luggage Assistance Included',
  'Local Sightseeing Cabs Available on Request',
]

const cabs = [
  { name: 'Swift Dzire',      capacity: '(4 Seater)',        href: '/taxi/swift-dzire',      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80' },
  { name: 'Innova Crysta',    capacity: '(6 Seater)',        href: '/taxi/innova-crysta',    img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139057/innova-crysta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80' },
  { name: 'Ertiga',           capacity: '(7 Seater)',        href: '/taxi/ertiga',           img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139259/ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80' },
  { name: 'Tempo Traveller',  capacity: '(10 to 25 Seater)', href: '/taxi/tempo-traveller',  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Force_Tempo_Traveller.jpg/640px-Force_Tempo_Traveller.jpg' },
  { name: 'Volvo Bus',        capacity: '(30 to 50 Seater)', href: '/taxi/volvo-bus',        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Volvo_9400_Luxury_coach.jpg/640px-Volvo_9400_Luxury_coach.jpg' },
]

const faqs = [
  {
    q: 'What Is The Best Cab Service From Varanasi Airport?',
    a: 'The best cab service from Varanasi Airport offers on-time pickups, verified drivers, clean vehicles, and affordable fares. Our Varanasi Airport Cab Service provides all of these with 24/7 availability.',
  },
  {
    q: 'How Do I Book A Cab From Lal Bahadur Shastri Airport In Varanasi?',
    a: 'You can book a cab from Lal Bahadur Shastri Airport by calling us at +91 63881 16241 or WhatsApp us. Our driver will be ready at the airport to pick you up on time.',
  },
  {
    q: 'Is Your Varanasi Airport Cab Service Available At Night?',
    a: 'Yes, our Varanasi Airport Cab Service is available 24/7, including late-night and early-morning flights. Just share your flight details and we will ensure timely pickup.',
  },
  {
    q: 'Do You Offer Outstation Taxi Services From Varanasi Airport?',
    a: 'Yes, we offer outstation taxi services from Varanasi Airport to Ayodhya, Prayagraj, Chitrakoot, Vindhyachal, Bodh Gaya, Lucknow and many other destinations at affordable rates.',
  },
  {
    q: 'What Should I Pack For A 2-Day Varanasi Trip?',
    a: 'For a 2-day Varanasi trip, pack light clothing, comfortable footwear for ghat walks, a small bag for temple visits, your ID proof, some cash for local shopping, and a camera for the beautiful ghats and Ganga Aarti.',
  },
  {
    q: 'How Far Is Varanasi Airport From The Main City?',
    a: 'Lal Bahadur Shastri International Airport (VNS) is approximately 25 km from the main city of Varanasi. The journey typically takes 45–60 minutes depending on traffic.',
  },
  {
    q: 'Can I Pre-Book My Airport Cab In Varanasi?',
    a: 'Yes, you can pre-book your airport cab in Varanasi by calling us at +91 63881 16241. We recommend booking at least 2 hours in advance to ensure availability and timely service.',
  },
  {
    q: 'Do Your Cabs Include AC And Luggage Space?',
    a: 'Yes, all our cabs are fully air-conditioned and come with adequate luggage space. We offer Swift Dzire (2 bags), Ertiga (4 bags), Innova Crysta (5 bags), and Tempo Traveller for large groups with more luggage.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 mb-2 overflow-hidden rounded-lg">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-base uppercase tracking-wide">{q}</span>
        <span className={`text-gray-500 shrink-0 ml-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  )
}

export default function AirportCabPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-varanasi.jpg" alt="Varanasi Airport Cab Service" fill className="object-cover opacity-50" priority />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center py-20 md:py-28 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white italic leading-tight">
            Varanasi Airport Cab Service
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#ea2330]">❯</span>
            <span className="text-white font-medium">Varanasi Airport Cab Service</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-14">

        {/* ── Main Info – Two Column ── */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Left – Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Varanasi <span className="text-[#ea2330]">Airport Cab Service</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Enjoy a smooth and reliable travel experience with our Varanasi Airport Cab Service.
                Whether you&apos;re arriving at or departing from Lal Bahadur Shastri Airport, we ensure
                timely pickups, professional drivers, and clean vehicles for a stress-free ride.
              </p>
              <p className="font-bold text-gray-800 mb-3">What We Provide:</p>
              <ul className="space-y-2.5">
                {services.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-green-500 text-lg shrink-0">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – Promo Card */}
            <div className="w-full md:w-[370px] shrink-0 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">

                {/* Orange gradient top */}
                <div className="relative bg-gradient-to-br from-orange-400 to-yellow-300 p-5 flex items-center justify-between min-h-[180px]">
                  <div className="z-10">
                    <div className="flex items-baseline gap-0.5 mb-2">
                      <span className="text-[#ea2330] font-extrabold text-xl">Yatra</span>
                      <span className="text-blue-800 font-extrabold text-xl">KSathi</span>
                    </div>
                    <p className="text-gray-800 text-sm font-medium leading-tight">Varanasi</p>
                    <p className="text-gray-900 text-2xl font-extrabold leading-tight">Airport Cab<br />Services</p>
                    <p className="text-gray-700 text-xs mt-1">Fast, Reliable, Anywhere You Go.</p>
                  </div>
                  <div className="w-28 h-36 bg-white/20 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-white/40 shadow-lg">
                    <span className="text-3xl">📱</span>
                    <div className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-lg">BOOK</div>
                    <div className="text-white text-xs font-bold">TAXI</div>
                  </div>
                </div>

                {/* Bottom – services + button */}
                <div className="p-5 bg-white">
                  <p className="font-bold text-gray-800 mb-3 text-sm">Our Services:</p>
                  <ul className="space-y-1.5 mb-4">
                    {['Airport Transfers', 'Local Rides', 'Airport Pickup', 'Airport Drop'].map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500">✅</span> {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+916388116241"
                    className="block w-full text-center bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-[#ea2330] transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Blue Call Button */}
              <a
                href="tel:+916388116241"
                className="flex items-center justify-center gap-3 bg-blue-700 text-white rounded-xl py-4 px-6 hover:bg-blue-800 transition-colors shadow-lg w-full"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-extrabold text-lg tracking-wide">CALL – 63881 16241</p>
                  <p className="text-xs opacity-80 font-medium uppercase tracking-wider">CALL NOW & BOOK A CAB FOR YOU</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Cabs Available ── */}
        <section className="bg-[#f0f7ff] rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Cab Available For <span className="text-[#ea2330]">Airport Cab Service</span> In Varanasi
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cabs.map((cab) => (
              <Link
                key={cab.name}
                href={cab.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-[#ea2330] transition-all"
              >
                <div className="relative h-32 w-full overflow-hidden bg-white flex items-center justify-center p-2">
                  <img
                    src={cab.img}
                    alt={cab.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.src = '/city.jpg' }}
                  />
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-[#ea2330] transition-colors">{cab.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cab.capacity}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Red Call Button */}
          <div className="flex justify-center mt-8">
            <a
              href="tel:+916388116241"
              className="flex items-center gap-3 bg-[#ea2330] text-white rounded-full py-4 px-10 hover:bg-red-700 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <p className="font-extrabold text-lg tracking-wide">CALL – 63881 16241</p>
                <p className="text-xs opacity-80 font-medium uppercase tracking-wider">CALL NOW & BOOK YOUR CAB</p>
              </div>
            </a>
          </div>
        </section>

        {/* ── Pricing Table ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Airport Cab Booking Rates In <span className="text-[#ea2330]">Varanasi</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {['Vehicle', 'Capacity', 'Airport Pickup', 'Airport Drop', 'Terms'].map((h) => (
                    <th key={h} className="bg-[#ea2330] text-white px-4 py-3 text-left font-semibold uppercase text-xs tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Swift Dzire', '4 Seater', 'Rs. 800*', 'Rs. 800*', 'After 25KM dynamic pricing'],
                  ['Innova Crysta', '6 Seater', 'Rs. 1200*', 'Rs. 1200*', 'After 25KM dynamic pricing'],
                  ['Ertiga', '7 Seater', 'Rs. 1100*', 'Rs. 1100*', 'After 25KM dynamic pricing'],
                  ['Tempo Traveller', '10-25 Seater', 'Rs. 2500*', 'Rs. 2500*', 'After 25KM dynamic pricing'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-700 border-t border-gray-100">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center">
            FAQ : <span className="text-[#ea2330]">VARANASI AIRPORT CAB SERVICE</span>
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-r from-[#ea2330] to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Book Varanasi Airport Cab Now!
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
            24/7 available, AC cabs, verified drivers, on-time guaranteed. Your comfortable airport transfer is just one call away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+916388116241"
              className="bg-white text-[#ea2330] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm">
              📞 Call Now
            </a>
            <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer"
              className="bg-green-400 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-green-500 transition-colors text-sm">
              💬 WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </>
  )
}
