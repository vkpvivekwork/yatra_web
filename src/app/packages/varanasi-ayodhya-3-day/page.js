'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const itinerary = [
  {
    day: 'Day 1',
    title: 'Varanasi (Kashi) Arrival & Temple Darshan',
    image: '/images/varanasi-ghats.jpg',
    points: [
      'Arrive in Varanasi (Kashi) — Check-in to hotel',
      'Visit Kashi Vishwanath Temple for darshan (VIP pass included)',
      'Darshan at Maa Annapurna Devi Temple',
      'Visit Kalbhairav Temple — the Kotwal of Kashi',
      'Evening Ganga Aarti at Dashashwamedh Ghat (magical & divine)',
      'Boat ride during Aarti for the best view',
      'Night stay in Varanasi',
    ],
  },
  {
    day: 'Day 2',
    title: 'Varanasi Sightseeing & Sarnath',
    image: '/images/sarnath.jpg',
    points: [
      'Early morning Sunrise Boat Ride on the Ganges',
      'Visit all major ghats — Manikarnika, Assi, Harishchandra Ghat',
      'Darshan at Sankat Mochan Hanuman Temple',
      'Visit Durga Temple (Durga Kund)',
      'Explore Sarnath — where Buddha gave his first sermon',
      'Visit Sarnath Museum & Dhamek Stupa',
      'Evening free for shopping at Vishwanath Gali',
      'Night stay in Varanasi',
    ],
  },
  {
    day: 'Day 3',
    title: 'Ayodhya — Ram Janmabhoomi & Departure',
    image: '/images/ayodhya.jpg',
    points: [
      'Early morning check-out & drive to Ayodhya (~4 hrs)',
      'Visit Ram Janmabhoomi — Shri Ram Mandir darshan',
      'Darshan at Hanuman Garhi — the guardian of Ayodhya',
      'Visit Kanak Bhawan — gifted to Sita Mata by Kaikeyi',
      'Darshan at Dasharath Mahal',
      'Visit Ramkatha Park & Saryu Ghat',
      'Guptar Ghat — where Lord Ram took Jal Samadhi',
      'Evening Saryu Aarti at Ram ki Paidi',
      'Drop to Lucknow / Varanasi airport or railway station',
    ],
  },
]

const paxRates = [
  { pax: '2 Pax', rate: '₹10,999', perPerson: 'Per Person' },
  { pax: '4 Pax', rate: '₹8,499', perPerson: 'Per Person' },
  { pax: '6 Pax', rate: '₹8,999', perPerson: 'Per Person' },
  { pax: '8 Pax+', rate: '₹7,999', perPerson: 'Per Person' },
]

const temples = [
  { name: 'Kashi Vishwanath Temple', city: 'Varanasi' },
  { name: 'Maa Annapurna Devi', city: 'Varanasi' },
  { name: 'Kalbhairav Temple', city: 'Varanasi' },
  { name: 'Sankat Mochan Temple', city: 'Varanasi' },
  { name: 'Durga Temple (Durga Kund)', city: 'Varanasi' },
  { name: 'Tulsi Manas Temple', city: 'Varanasi' },
  { name: 'Ram Janmabhoomi Mandir', city: 'Ayodhya' },
  { name: 'Hanuman Garhi', city: 'Ayodhya' },
  { name: 'Kanak Bhawan', city: 'Ayodhya' },
  { name: 'Dasharath Mahal', city: 'Ayodhya' },
  { name: 'Nageshwarnath Temple', city: 'Ayodhya' },
  { name: 'Mani Parvat', city: 'Ayodhya' },
]

const activities = [
  { name: 'Ganga Aarti Boat Ride', icon: '🪔' },
  { name: 'Sunrise Boat Tour', icon: '🌅' },
  { name: 'Kashi Vishwanath Darshan', icon: '🛕' },
  { name: 'Sarnath Buddhist Tour', icon: '☸️' },
  { name: 'Ram Janmabhoomi Darshan', icon: '🙏' },
  { name: 'Saryu Aarti Ayodhya', icon: '✨' },
  { name: 'Ghat Walk & Photography', icon: '📸' },
  { name: 'Varanasi Street Food Tour', icon: '🍽️' },
  { name: 'Shopping at Vishwanath Gali', icon: '🛍️' },
  { name: 'Guptar Ghat Visit', icon: '⛵' },
  { name: 'Dhamek Stupa Sarnath', icon: '🏛️' },
  { name: 'Ramkatha Park Ayodhya', icon: '🌿' },
]

const cabs = [
  { name: 'Swift Dzire', capacity: '4 Seater', href: '/taxi/swift-dzire' },
  { name: 'Toyota Innova Crysta', capacity: '7 Seater', href: '/taxi/innova-crysta' },
  { name: 'Maruti Ertiga', capacity: '7 Seater', href: '/taxi/ertiga' },
  { name: 'Tempo Traveller', capacity: '12–14 Seater', href: '/taxi/tempo-traveller' },
  { name: 'Volvo Bus', capacity: '55 Seater', href: '/taxi/volvo-bus' },
]

const services = [
  { icon: '🏨', label: '3 Star Hotel' },
  { icon: '🚗', label: 'Cab Included' },
  { icon: '⛵', label: 'Boat Ride' },
  { icon: '🎫', label: 'VIP Darshan' },
  { icon: '🎧', label: '24/7 Support' },
  { icon: '📋', label: 'Tour Guide' },
]

const inclusions = [
  '2 Night accommodation in Varanasi (3-star hotel, double occupancy)',
  'Private cab for all sightseeing (Varanasi + Ayodhya)',
  'Boat ride with Ganga Aarti viewing',
  'VIP Darshan tickets for Kashi Vishwanath Temple',
  'All toll, parking & driver allowances',
  'GST & service tax included',
]

const exclusions = [
  'Airfare / train tickets (to/from Varanasi)',
  'Meals (breakfast, lunch, dinner)',
  'Personal expenses & tips',
  'Temple donation & puja materials',
  'Sarnath Museum entry fee',
  'Anything not mentioned in inclusions',
]

const faqs = [
  {
    q: 'How many days does the Varanasi Ayodhya tour take?',
    a: 'This is a 3-day (2 night) tour — 2 nights in Varanasi and a day trip to Ayodhya on Day 3 before drop-off.',
  },
  {
    q: 'Is the Kashi Vishwanath VIP Darshan ticket included?',
    a: 'Yes! VIP Darshan tickets for Kashi Vishwanath are included in the package so you skip the long queues.',
  },
  {
    q: 'What is the best time to visit Varanasi and Ayodhya?',
    a: 'October to March is ideal. Winters (Nov–Feb) are great for Ganga Aarti, Sarnath, and Ayodhya darshan. Avoid May–June (peak summer heat).',
  },
  {
    q: 'Can we customize this 3-day itinerary?',
    a: 'Absolutely! You can add Prayagraj, extra nights, or change hotel category. Contact us and we will tailor the package for you.',
  },
  {
    q: 'What is included in the cab service?',
    a: 'The cab covers all sightseeing in Varanasi (both days), the Varanasi–Ayodhya–drop route on Day 3, all toll fees, parking, and driver allowances.',
  },
  {
    q: 'Can this tour be done for a family or group?',
    a: 'Yes, we offer group discounts. 4 people get ₹8,499/person and 8+ people get ₹7,999/person. Contact us for larger group pricing.',
  },
  {
    q: 'What is the pickup and drop point?',
    a: 'We pick up from Varanasi Airport, Railway Station, or your hotel. Drop is at Lucknow Airport/Station or back to Varanasi depending on your return plan.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 text-[#ea2330] shrink-0 ml-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  )
}

export default function VaranasiAyodhya3DayPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, package: 'Varanasi Ayodhya 3 Day Tour' }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-800" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">3 Days 2 Nights</span>
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Seller</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Varanasi &amp; Ayodhya —{' '}
            <span className="text-[#ea2330]">3 Days Divine Tour</span>
          </h1>
          <p className="mt-3 text-white/85 text-sm md:text-base max-w-xl">
            Kashi Vishwanath • Ganga Aarti • Sarnath • Ram Janmabhoomi • Saryu Aarti
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-[#ea2330] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors text-sm"
            >
              📞 Book Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-[#ea2330]">Packages</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Varanasi Ayodhya 3 Day Tour</span>
        </div>
      </div>

      {/* ── Main Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Package Overview */}
            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Kashi &amp; Ayodhya Tour Package{' '}
                <span className="text-[#ea2330]">3 Days Itinerary</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Experience the two holiest cities of India — <strong>Varanasi (Kashi)</strong> and <strong>Ayodhya</strong> — in
                this carefully crafted 3-day spiritual tour. Witness the divine Ganga Aarti, seek blessings at
                Kashi Vishwanath, and walk the sacred land of Lord Ram in Ayodhya.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Duration', value: '3 Days / 2 Nights' },
                  { label: 'Destinations', value: 'Varanasi + Ayodhya' },
                  { label: 'Hotel', value: '3 Star (Double)' },
                  { label: 'Starts From', value: '₹7,999/Person' },
                ].map((item) => (
                  <div key={item.label} className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-bold text-gray-800 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '🕌 Kashi Vishwanath VIP Darshan (included)',
                  '🪔 Ganga Aarti by Boat — unforgettable experience',
                  '🌅 Sunrise Boat Ride on the Holy Ganges',
                  '🛕 All major Varanasi temples covered',
                  '☸️ Sarnath — Buddha\'s first sermon site',
                  '🙏 Ram Janmabhoomi Darshan in Ayodhya',
                  '✨ Saryu Aarti at Ram ki Paidi, Ayodhya',
                  '🚗 Private cab throughout the tour',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm text-gray-700">
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-wise Itinerary */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Day-wise Itinerary
              </h2>
              <div className="space-y-10">
                {itinerary.map((day, i) => (
                  <div
                    key={day.day}
                    className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}
                  >
                    <div className="w-full md:w-2/5 rounded-2xl overflow-hidden shadow-md shrink-0">
                      <div className="relative h-52 w-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                        <span className="text-6xl">
                          {i === 0 ? '🕌' : i === 1 ? '⛵' : '🛕'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">{day.day}</span>
                        <h3 className="text-base md:text-lg font-bold text-gray-800">{day.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {day.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#ea2330] font-bold mt-0.5 shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Charges & Rates Table */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Kashi Ayodhya Tour Package — Charges &amp; Rates
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#ea2330] text-white">
                      <th className="px-5 py-3 text-left font-semibold">Package</th>
                      <th className="px-5 py-3 text-left font-semibold">Group Size</th>
                      <th className="px-5 py-3 text-left font-semibold">Rate / Person</th>
                      <th className="px-5 py-3 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paxRates.map((row, i) => (
                      <tr key={row.pax} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-3 font-medium text-gray-700">Varanasi Ayodhya 3 Day</td>
                        <td className="px-5 py-3 text-gray-600">{row.pax}</td>
                        <td className="px-5 py-3 font-bold text-[#ea2330]">{row.rate}</td>
                        <td className="px-5 py-3">
                          <a
                            href="tel:+919876543210"
                            className="bg-[#ea2330] text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors whitespace-nowrap"
                          >
                            Book Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">* Rates are per person on twin sharing basis. Prices may vary during peak season.</p>
            </section>

            {/* Temples Grid */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Temples Covered
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {temples.map((t) => (
                  <div key={t.name} className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-2">
                    <span className="text-[#ea2330] text-lg shrink-0">🛕</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities Grid */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Activities Included
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {activities.map((a) => (
                  <div key={a.name} className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                    <span className="text-2xl">{a.icon}</span>
                    <p className="text-xs font-semibold text-gray-700 mt-1">{a.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cabs Section */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Cab Options for This Tour
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {cabs.map((cab) => (
                  <Link
                    key={cab.name}
                    href={cab.href}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-[#ea2330] hover:bg-red-50 transition-colors group"
                  >
                    <span className="text-3xl">🚗</span>
                    <p className="text-xs font-bold text-gray-800 mt-2 group-hover:text-[#ea2330]">{cab.name}</p>
                    <p className="text-xs text-gray-500">{cab.capacity}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Our Services
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {services.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-3xl">{s.icon}</span>
                    <p className="text-xs font-semibold text-gray-700 text-center">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Inclusions &amp; Exclusions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <span className="text-lg">✅</span> What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                  <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <span className="text-lg">❌</span> What&apos;s Excluded
                  </h3>
                  <ul className="space-y-2">
                    {exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-400 font-bold shrink-0 mt-0.5">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                About Kashi Ayodhya Tour Package
              </h2>
              <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  The <strong>Varanasi Ayodhya 3 Day Tour Package</strong> is a perfectly crafted spiritual journey that
                  takes you through the two most revered cities in Hinduism — <strong>Kashi (Varanasi)</strong> and
                  <strong> Ayodhya</strong>. This tour is ideal for devotees who wish to seek blessings at the Jyotirlinga
                  of Kashi Vishwanath and witness the grandeur of the new Ram Mandir in Ayodhya.
                </p>
                <p>
                  <strong>Varanasi</strong> — one of the oldest living cities on Earth — is the spiritual heart of India.
                  Here, the divine Ganga flows northward (Uttarvahini), and every ghat, every temple, every evening aarti
                  resonates with the energy of millions of devotees who have walked these shores for thousands of years.
                </p>
                <p>
                  <strong>Ayodhya</strong> is the birthplace of Lord Ram — a city that is undergoing a magnificent
                  spiritual renaissance after the construction of the Shri Ram Janmabhoomi Mandir. Walking through the
                  lanes of Ayodhya, visiting Hanuman Garhi, Kanak Bhawan, and standing at Saryu Ghat as the aarti
                  lights up the evening sky is a truly transformative experience.
                </p>
                <p>
                  Our <strong>Kashi Ayodhya Tour Package</strong> includes comfortable hotel stay in Varanasi, a dedicated
                  private cab for all sightseeing, a boat ride during the Ganga Aarti, VIP darshan tickets for Kashi
                  Vishwanath, and professional guidance throughout the journey. Whether you are a solo traveler, a couple,
                  or a family group, we customize this itinerary to match your needs.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block" />
                Frequently Asked Questions
              </h2>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 space-y-5">

              {/* Pricing Card */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#ea2330] to-red-700 px-5 py-4 text-white text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Varanasi Ayodhya 3 Day Tour</p>
                  <p className="text-3xl font-extrabold mt-1">₹7,999</p>
                  <p className="text-xs opacity-75 mt-0.5">Per Person (8 Pax group)</p>
                </div>

                {/* Inclusions chips */}
                <div className="bg-gray-900 px-4 py-3 flex flex-wrap gap-2 justify-center">
                  {['3 STAR HOTEL DOUBLE', 'CAB FOR SIGHTSEEING', 'BOAT RIDE WITH GANGA AARTI', 'VIP DARSHAN TICKETS'].map((chip) => (
                    <span key={chip} className="bg-gray-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">{chip}</span>
                  ))}
                </div>

                {/* PAX Rates */}
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">PAX-wise Pricing</p>
                  <div className="space-y-2">
                    {paxRates.map((r) => (
                      <div key={r.pax} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm font-semibold text-gray-700">{r.pax}</span>
                        <span className="text-[#ea2330] font-extrabold text-base">{r.rate}</span>
                        <span className="text-xs text-gray-400">{r.perPerson}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOR BOOKING bar */}
                <div className="bg-yellow-400 px-4 py-2 text-center">
                  <p className="text-xs font-bold text-black uppercase tracking-wider">For Booking, Call Now</p>
                </div>

                {/* CTA Buttons */}
                <div className="px-5 py-4 space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow"
                  >
                    📞 CALL NOW
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-colors text-sm shadow"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5">
                <h3 className="font-bold text-gray-800 text-base mb-4 text-center">📋 Send an Enquiry</h3>
                {submitted ? (
                  <div className="text-center py-6">
                    <span className="text-4xl">🙏</span>
                    <p className="mt-3 font-semibold text-green-600">Thank you! We will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ea2330] transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ea2330] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ea2330] transition-colors"
                    />
                    <textarea
                      placeholder="Message / Travel Date..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ea2330] transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#ea2330] text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors text-sm disabled:opacity-60"
                    >
                      {loading ? 'Sending...' : 'Send Enquiry 🙏'}
                    </button>
                  </form>
                )}
              </div>

              {/* Why Choose Us */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 text-sm mb-3">⭐ Why Choose Yatra K Sathi?</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    '✅ 500+ happy pilgrims served',
                    '✅ Local expert guides in Kashi & Ayodhya',
                    '✅ Best-price guarantee',
                    '✅ 24/7 customer support',
                    '✅ Flexible & customizable tours',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
