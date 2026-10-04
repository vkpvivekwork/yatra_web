import Image from 'next/image'
import Link from 'next/link'
import PackageBookingForm from '@/components/PackageBookingForm'

export const metadata = {
  title: 'Golden Triangle Tour — Varanasi, Ayodhya & Prayagraj Package',
  description:
    '5 Days / 4 Nights Golden Triangle spiritual tour covering Varanasi, Prayagraj & Ayodhya. Day-wise itinerary, pricing, inclusions & easy booking with YatraKSathi.',
  alternates: { canonical: 'https://www.yatrakasathi.com/golden-triangle' },
}

// ── Data ────────────────────────────────────────────────────────────────────

const itinerary = [
  {
    day: 'Day 01',
    title: 'Arrival in Varanasi — Welcome to Kashi',
    activities: ['Airport / Railway Station pickup', 'Hotel check-in & freshen up', 'Evening Ganga Aarti at Dashashwamedh Ghat', 'Night stay in Varanasi'],
    desc: 'Your spiritual journey begins as you arrive in Varanasi — the oldest living city in the world. After hotel check-in, freshen up and head to the iconic Dashashwamedh Ghat for the mesmerizing evening Ganga Aarti. Watch dozens of priests perform the fire ritual as bells, chants and incense fill the air. An unforgettable welcome to Kashi.',
    stay: 'Varanasi',
    meals: 'Dinner',
  },
  {
    day: 'Day 02',
    title: 'Varanasi Darshan — Temples & Ghats',
    activities: ['Subah-e-Banaras sunrise boat ride', 'Kashi Vishwanath Temple Darshan', 'Annapurna Devi & Kaal Bhairav Temple', 'Sarnath Buddhist site visit', 'Evening at leisure'],
    desc: 'Rise early for the magical Subah-e-Banaras — a sunrise boat ride along the 84 ghats watching sadhus, pilgrims and morning rituals. Then seek blessings at the sacred Kashi Vishwanath Jyotirlinga. Visit the nearby Annapurna Devi Temple and the fearsome Kaal Bhairav — the guardian of Kashi. Afternoon drive to Sarnath where Lord Buddha gave his first sermon after attaining enlightenment.',
    stay: 'Varanasi',
    meals: 'Breakfast',
  },
  {
    day: 'Day 03',
    title: 'Varanasi → Prayagraj (Allahabad)',
    activities: ['Breakfast & check-out', 'Drive to Prayagraj (~3 hrs)', 'Triveni Sangam holy dip & boat ride', 'Hanuman Mandir (inverted Hanuman ji)', 'Anand Bhawan museum visit', 'Drive to Ayodhya & check-in'],
    desc: 'After breakfast, depart for Prayagraj — the city of the eternal Kumbh. Visit the holy Triveni Sangam where the sacred rivers Ganga, Yamuna and the mythical Saraswati meet. Take a boat ride and perform a holy dip at this auspicious confluence. Visit the unique Bade Hanuman Mandir where the idol is in a reclining position. Then drive to Ayodhya for overnight stay.',
    stay: 'Ayodhya',
    meals: 'Breakfast',
  },
  {
    day: 'Day 04',
    title: 'Ayodhya — Ram Janmabhoomi Darshan',
    activities: ['Ram Mandir Darshan (Ram Janmabhoomi)', 'Hanuman Garhi Temple', 'Kanak Bhawan — Sita-Ram Temple', 'Nageshwarnath Temple', 'Evening Saryu River Aarti', 'Shopping at local bazaar'],
    desc: 'The spiritual highlight of the tour — Darshan at the grand Ram Mandir, built at the sacred birthplace of Lord Rama. The magnificent temple stands as a testament to faith and devotion. Visit the ancient Hanuman Garhi fort-temple perched on a hill, the golden Kanak Bhawan gifted to Sita by her mother-in-law Kaikeyi, and attend the serene evening Aarti at the holy Saryu River.',
    stay: 'Ayodhya',
    meals: 'Breakfast',
  },
  {
    day: 'Day 05',
    title: 'Departure — Tour Ends',
    activities: ['Breakfast & hotel check-out', 'Drop at Ayodhya Railway Station / Airport', 'OR drive back to Varanasi (on request)', 'Tour ends with sweet memories'],
    desc: 'After a fulfilling breakfast, check out from the hotel. Your tour concludes with drop-off at Ayodhya Railway Station or Airport. If you wish, we can also arrange a return drive back to Varanasi at a nominal extra cost. Carry the blessings of Kashi, Prayag and Ayodhya as you return home.',
    stay: '—',
    meals: 'Breakfast',
  },
]

const pricing = [
  { persons: '2 Persons', rate: '₹9,500', perPerson: '₹9,500/person', transport: 'Swift Dzire / Similar' },
  { persons: '4 Persons', rate: '₹8,000', perPerson: '₹8,000/person', transport: 'Ertiga / Similar' },
  { persons: '6 Persons', rate: '₹7,000', perPerson: '₹7,000/person', transport: 'Innova / Similar' },
  { persons: '8–10 Persons', rate: '₹6,000', perPerson: '₹6,000/person', transport: 'Tempo Traveller' },
]

const temples = [
  { name: 'Kashi Vishwanath', city: 'Varanasi' },
  { name: 'Annapurna Devi', city: 'Varanasi' },
  { name: 'Kaal Bhairav', city: 'Varanasi' },
  { name: 'Sankat Mochan', city: 'Varanasi' },
  { name: 'Triveni Sangam', city: 'Prayagraj' },
  { name: 'Bade Hanuman', city: 'Prayagraj' },
  { name: 'Ram Janmabhoomi', city: 'Ayodhya' },
  { name: 'Hanuman Garhi', city: 'Ayodhya' },
  { name: 'Kanak Bhawan', city: 'Ayodhya' },
  { name: 'Nageshwarnath', city: 'Ayodhya' },
  { name: 'Sarnath Stupa', city: 'Varanasi' },
  { name: 'Saryu Ghats', city: 'Ayodhya' },
]

const activities = [
  { name: 'Ganga Aarti', icon: '🪔' },
  { name: 'Sunrise Boat Ride', icon: '🚣' },
  { name: 'Temple Darshan', icon: '🛕' },
  { name: 'Sangam Dip', icon: '💧' },
  { name: 'Sarnath Tour', icon: '☸️' },
  { name: 'Saryu Aarti', icon: '🌅' },
  { name: 'Ghat Walk', icon: '🌊' },
  { name: 'Local Cuisine', icon: '🍛' },
]

const cabOptions = [
  { cab: 'Swift Dzire', persons: '1–4', ac: 'Yes', bags: '3–4', ideal: 'Couple / Small Family' },
  { cab: 'Toyota Innova', persons: '1–6', ac: 'Yes', bags: '5–6', ideal: 'Family Group' },
  { cab: 'Ertiga', persons: '1–6', ac: 'Yes', bags: '4–5', ideal: 'Family / Friends' },
  { cab: 'Tempo Traveller', persons: '8–12', ac: 'Yes', bags: '10+', ideal: 'Large Group / Pilgrims' },
]

const inclusions = [
  'Pick-up & Drop at Airport / Railway Station',
  'Private AC Vehicle for all transfers',
  'Accommodation (Twin Sharing, 4 Nights)',
  'Daily Breakfast at hotel',
  'Toll, Parking & Driver Allowance',
  'Local guide assistance in Varanasi',
  'Ganga Aarti viewing (Dashashwamedh Ghat)',
  'Sunrise boat ride on the Ganges',
]

const exclusions = [
  'Flight / Train Tickets',
  'Lunch & Dinner (except mentioned)',
  'Monument & Temple Entry Fees',
  'Helicopter / Palkhi charges',
  'Personal expenses & tips',
  '5% GST extra',
  'Travel Insurance',
]

const faqs = [
  {
    q: 'What is the best time to do the Golden Triangle tour?',
    a: 'October to March is the best time. The weather is pleasant for sightseeing and the main festivals like Ganga Mahotsav, Kumbh, and Deepotsav fall in this period making it even more special.',
  },
  {
    q: 'Can we customize the itinerary?',
    a: 'Absolutely! We can extend, shorten or customise any part of the itinerary to suit your requirements. Contact us for a fully custom quote.',
  },
  {
    q: 'Are hotel stays included? What category?',
    a: 'Yes, hotel stays for 4 nights are included. Standard package includes 3-star properties. Upgrade to 4-star or 5-star is available at additional cost.',
  },
  {
    q: 'How do we reach Varanasi?',
    a: 'Varanasi (Lal Bahadur Shastri International Airport) is well connected to Delhi, Mumbai, Kolkata & other major cities. You can also reach by train — Varanasi Junction & Manduadih station are the main railway stations.',
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function GoldenTrianglePage() {
  return (
    <>
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative h-64 sm:h-80 md:h-[420px] flex items-end overflow-hidden">
        <Image
          src="/hero-varanasi.jpg"
          alt="Golden Triangle — Varanasi Ayodhya Prayagraj"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 sm:left-8 z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-300 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-white transition">Tour Packages</Link>
            <span>/</span>
            <span className="text-white">Golden Triangle</span>
          </nav>
        </div>
        {/* Title */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-7">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">5 Days / 4 Nights</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">3 Cities</span>
            <span className="bg-amber-400 text-white text-xs px-3 py-1 rounded-full font-semibold">Best Seller</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-playfair text-white leading-tight max-w-3xl">
            Golden Triangle — Varanasi, Ayodhya & Prayagraj Tour Package
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Varanasi • Prayagraj • Ayodhya
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              5 Days / 4 Nights
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              4.8 / 5 (120+ Reviews)
            </span>
          </div>
        </div>
      </section>

      {/* ── Quick Info Bar ───────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] text-white py-3.5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs sm:text-sm">
            {[
              { icon: '🗓️', label: 'Duration', val: '5 Days / 4 Nights' },
              { icon: '🏙️', label: 'Destinations', val: 'Varanasi · Prayagraj · Ayodhya' },
              { icon: '🚗', label: 'Transport', val: 'Private AC Vehicle' },
              { icon: '🛕', label: 'Tour Type', val: 'Spiritual / Pilgrimage' },
            ].map((item) => (
              <div key={item.label} className="py-1">
                <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                <p className="font-semibold">{item.icon} {item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── LEFT: Content ─────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Tour Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Experience the heart of India's spiritual heritage in one unforgettable journey. The <strong>Golden Triangle — Varanasi, Ayodhya & Prayagraj</strong> tour takes you through three of the holiest cities in Hinduism, each carrying centuries of mythology, devotion, and culture.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Start in <strong>Varanasi</strong> (Kashi) — the eternal city where Lord Shiva is believed to dwell. Then journey to <strong>Prayagraj</strong> — where three sacred rivers merge at the legendary Triveni Sangam. End your pilgrimage in <strong>Ayodhya</strong> — the birthplace of Lord Rama, home to the newly built grand Ram Mandir. A complete spiritual circuit in 5 days.
                </p>
              </div>

              {/* Pricing Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Package Pricing
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#ea2330] text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Group Size</th>
                        <th className="text-left px-4 py-3 font-semibold">Rate / Person</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Vehicle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-gray-800">{row.persons}</td>
                          <td className="px-4 py-3 text-[#ea2330] font-bold">{row.rate}</td>
                          <td className="px-4 py-3 text-gray-600">{row.transport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">* Prices are per person. Hotel (Twin Sharing) included. GST extra. Subject to availability.</p>
              </div>

              {/* Day-wise Itinerary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-0">
                  {itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      {/* Timeline */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 bg-[#ea2330] text-white rounded-full flex items-center justify-center text-xs font-bold shadow">
                          {i + 1}
                        </div>
                        {i < itinerary.length - 1 && (
                          <div className="w-px bg-red-200 flex-1 my-1"></div>
                        )}
                      </div>
                      {/* Content */}
                      <div className={`pb-8 flex-1 ${i === itinerary.length - 1 ? 'pb-2' : ''}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="bg-[#ea2330]/10 text-[#ea2330] text-xs font-bold px-2 py-0.5 rounded">{item.day}</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Stay: {item.stay}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            🍽️ {item.meals}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-800 text-base mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                        {/* Activity chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.activities.map((act, j) => (
                            <span key={j} className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-2.5 py-0.5 rounded-full">
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temples Covered */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Temples & Sacred Sites Covered
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {temples.map((temple, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
                      <div className="relative h-24 bg-amber-50">
                        <Image
                          src="/hero-varanasi.jpg"
                          alt={temple.name}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <p className="absolute bottom-1.5 left-2 right-2 text-white text-xs font-bold leading-tight">{temple.name}</p>
                      </div>
                      <div className="px-2.5 py-1.5 bg-white">
                        <p className="text-xs text-gray-400">{temple.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Activities Covered
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activities.map((act, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
                      <div className="relative h-28 bg-gradient-to-br from-orange-50 to-amber-100">
                        <Image
                          src="/hero-varanasi.jpg"
                          alt={act.name}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl mb-1 drop-shadow">{act.icon}</span>
                          <p className="text-white text-xs font-bold text-center px-1">{act.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cab Options */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Cab Options Available
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Vehicle</th>
                        <th className="text-left px-4 py-3">Max Persons</th>
                        <th className="text-left px-4 py-3">AC</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cabOptions.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                          <td className="px-4 py-3 font-semibold text-gray-800 flex items-center gap-2">
                            🚗 {row.cab}
                          </td>
                          <td className="px-4 py-3 text-gray-600">{row.persons}</td>
                          <td className="px-4 py-3">
                            <span className="text-green-600 font-bold">✓ {row.ac}</span>
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{row.ideal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">All vehicles are sanitized, GPS-fitted & driven by verified experienced drivers.</p>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-base">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs shrink-0">✓</span>
                    Inclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {inclusions.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-base">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs shrink-0">✗</span>
                    Exclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {exclusions.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  About This Tour
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    <strong className="text-gray-800">Varanasi</strong> is considered one of the oldest continuously inhabited cities in the world and holds immense significance in Hinduism, Buddhism, and Jainism. Sitting on the crescent-shaped banks of the sacred Ganga, Varanasi has been a center of learning, philosophy, art and culture for over 3,000 years. The ghats of Kashi are unlike anywhere else on earth — pilgrims come here to bathe, to pray, and to seek moksha.
                  </p>
                  <p>
                    <strong className="text-gray-800">Prayagraj</strong> (formerly Allahabad) is home to the world-famous Triveni Sangam — the confluence of the Ganga, Yamuna, and the mythical Saraswati rivers. This sacred junction is believed to wash away all sins. Every 12 years, Prayagraj hosts the Maha Kumbh Mela, the largest human gathering on Earth. Tens of millions of devotees gather to take a holy dip at this auspicious spot.
                  </p>
                  <p>
                    <strong className="text-gray-800">Ayodhya</strong> is the birthplace of Lord Rama — the seventh avatar of Lord Vishnu. The city has been a pilgrimage destination for millennia and has recently been transformed with the construction of the grand Ram Mandir at the exact site of Ram Janmabhoomi. The temple is a magnificent blend of Nagara architecture and has become one of the most visited religious sites in India.
                  </p>
                  <p>
                    With <strong className="text-gray-800">YatraKSathi</strong>, you travel in comfort and safety. Our experienced local guides bring these sacred stories to life, ensuring you don't just visit these cities but truly experience them. We handle all logistics — so you focus on your spiritual journey.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ea2330] rounded-full inline-block"></span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-4 hover:border-red-100 transition">
                      <p className="font-semibold text-gray-800 text-sm mb-1.5">Q: {faq.q}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT: Sticky Sidebar ──────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-20 space-y-4">
                {/* Booking Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#ea2330] px-5 py-4 text-white">
                    <p className="text-xs opacity-80 uppercase tracking-wide">Starting from</p>
                    <div className="flex items-end gap-2 mt-0.5">
                      <p className="text-3xl font-extrabold">₹8,500</p>
                      <p className="text-sm opacity-80 mb-1">/ person</p>
                    </div>
                    <p className="text-xs opacity-70 mt-0.5">5 Days · 4 Nights · 3 Cities</p>
                  </div>
                  <PackageBookingForm packageName="Golden Triangle — Varanasi, Ayodhya & Prayagraj" price="8,500" />
                </div>

                {/* Quick Highlights */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <p className="font-bold text-gray-800 mb-3 text-sm">Package Highlights</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      '🪔 Ganga Aarti at Dashashwamedh Ghat',
                      '🚣 Sunrise boat ride on the Ganges',
                      '🛕 Kashi Vishwanath Jyotirlinga Darshan',
                      '💧 Holy dip at Triveni Sangam',
                      '🕌 Grand Ram Mandir Darshan, Ayodhya',
                      '🌅 Saryu River Evening Aarti',
                      '☸️ Sarnath Buddhist heritage site',
                    ].map((h, i) => (
                      <li key={i} className="flex items-start gap-2">{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Need Help */}
                <div className="bg-[#1a1a1a] rounded-2xl p-5 text-white">
                  <p className="font-bold mb-1 text-sm">Need Help Planning?</p>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">Talk to our travel experts for a custom itinerary, group discounts, or hotel upgrades.</p>
                  <a
                    href="tel:+916388116241"
                    className="block w-full py-2.5 bg-[#ea2330] rounded-lg text-center text-sm font-semibold hover:bg-red-700 transition mb-2"
                  >
                    📞 +91 63881 16241
                  </a>
                  <a
                    href="https://wa.me/916388116241?text=Hi, I want to know more about the Golden Triangle tour package"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 bg-[#25D366] rounded-lg text-center text-sm font-semibold hover:bg-green-600 transition"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair">Ready to Begin Your Spiritual Journey?</h2>
            <p className="text-red-100 mt-1">Book the Golden Triangle tour today — limited slots available!</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <a href="tel:+916388116241" className="px-7 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition text-sm">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/916388116241?text=I want to book the Golden Triangle tour package"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-green-600 transition text-sm"
            >
              💬 WhatsApp Book
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Packages ─────────────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Varanasi Ganga Darshan', duration: '2D/1N', price: '₹4,999', href: '/packages/1', badge: 'Best Seller' },
              { title: 'Prayagraj Sangam Yatra', duration: '1 Day', price: '₹1,200', href: '/packages/5', badge: null },
              { title: 'Ayodhya Ram Mandir Tour', duration: '1 Day', price: '₹1,499', href: '/packages/2', badge: 'Popular' },
            ].map((pkg) => (
              <Link key={pkg.title} href={pkg.href} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition group flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image src="/hero-varanasi.jpg" alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="80px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {pkg.badge && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">{pkg.badge}</span>}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{pkg.title}</h3>
                  <p className="text-xs text-gray-400 mb-1">{pkg.duration}</p>
                  <p className="text-[#ea2330] font-bold text-sm">{pkg.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
