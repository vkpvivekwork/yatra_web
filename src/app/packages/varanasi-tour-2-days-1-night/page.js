'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── Image Data ────────────────────────────────────────────────────────────────

const temples = [
  {
    name: 'Kashi Vishwanath Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kashi_Vishwanath_Temple.jpg/480px-Kashi_Vishwanath_Temple.jpg',
  },
  {
    name: 'Annapurna Maa Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Annapurna_Temple%2C_Varanasi.jpg/480px-Annapurna_Temple%2C_Varanasi.jpg',
  },
  {
    name: 'Kal Bhairav Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kalbhairav_temple_Varanasi.jpg/480px-Kalbhairav_temple_Varanasi.jpg',
  },
  {
    name: 'Tulsi Manas Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tulsi_Manas_Mandir.jpg/480px-Tulsi_Manas_Mandir.jpg',
  },
  {
    name: 'Maa Vishalakshi Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Vishalakshi_Temple_Varanasi.jpg/480px-Vishalakshi_Temple_Varanasi.jpg',
  },
  {
    name: 'Sankat Mochan Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sankat_Mochan_temple_exterior%2CVaranasi.jpg/480px-Sankat_Mochan_temple_exterior%2CVaranasi.jpg',
  },
  {
    name: 'Birla Temple BHU',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Vishwanath_Temple.jpg/480px-New_Vishwanath_Temple.jpg',
  },
  {
    name: 'Durga Maa Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Durga_temple_varanasi.jpg/480px-Durga_temple_varanasi.jpg',
  },
  {
    name: 'Sant Ravidas Mandir',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sant_Ravidas_temple_Varanasi.jpg/480px-Sant_Ravidas_temple_Varanasi.jpg',
  },
  {
    name: 'New Vishwanath Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Vishwanath_Temple.jpg/480px-New_Vishwanath_Temple.jpg',
  },
  {
    name: 'Sarnath Buddhist Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dhamek_stupa.jpg/480px-Dhamek_stupa.jpg',
  },
  {
    name: 'Maa Sheetala Temple',
    city: 'Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sheetla_Mata_Mandir_Varanasi.jpg/480px-Sheetla_Mata_Mandir_Varanasi.jpg',
  },
]

const activities = [
  {
    name: 'Evening Ganga Aarti',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ganga_aarti_at_varanasi_%28cropped%29.jpg/480px-Ganga_aarti_at_varanasi_%28cropped%29.jpg',
  },
  {
    name: 'Subah-e-Banaras',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Varanasi_at_dawn.jpg/480px-Varanasi_at_dawn.jpg',
  },
  {
    name: 'Darshan & Puja',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Puja_varanasi.jpg/480px-Puja_varanasi.jpg',
  },
  {
    name: 'Boating In Ganga',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Varanasi_river-side.jpg/480px-Varanasi_river-side.jpg',
  },
  {
    name: 'Dev Deepawali',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Dev_Diwali_2016.jpg/480px-Dev_Diwali_2016.jpg',
  },
  {
    name: 'Local Shopping',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Banarasi_silk_saree.jpg/480px-Banarasi_silk_saree.jpg',
  },
]

const cabs = [
  {
    name: 'Swift Dzire',
    capacity: '4 Seater',
    href: '/taxi/swift-dzire',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2017_Maruti_Suzuki_Swift_Dzire.jpg/640px-2017_Maruti_Suzuki_Swift_Dzire.jpg',
  },
  {
    name: 'Innova Crysta',
    capacity: '6 Seater',
    href: '/taxi/innova-crysta',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Toyota_Innova_Crysta_2.4_GX_MT_2016.jpg/640px-Toyota_Innova_Crysta_2.4_GX_MT_2016.jpg',
  },
  {
    name: 'Ertiga',
    capacity: '7 Seater',
    href: '/taxi/ertiga',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2019_Suzuki_Ertiga_Sport_AT.jpg/640px-2019_Suzuki_Ertiga_Sport_AT.jpg',
  },
  {
    name: 'Tempo Traveller',
    capacity: '10 to 25 Seater',
    href: '/taxi/tempo-traveller',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Force_Tempo_Traveller.jpg/640px-Force_Tempo_Traveller.jpg',
  },
  {
    name: 'Volvo Bus',
    capacity: '30 to 50 Seater',
    href: '/taxi/volvo-bus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Volvo_9400_Luxury_coach.jpg/640px-Volvo_9400_Luxury_coach.jpg',
  },
]

const services = [
  { icon: '🚕', label: 'CAB' },
  { icon: '⛵', label: 'BOATING' },
  { icon: '🛕', label: 'DARSHAN' },
  { icon: '🏨', label: 'HOTELS' },
  { icon: '🔭', label: 'SIGHTSEEING' },
  { icon: '✈️', label: 'PICKUP & DROP' },
]

const hotelRates = [
  { type: 'Guest House', rate: '₹3,850', amenities: ['Breakfast', 'Free Wi-Fi', 'Local sightseeing guide'] },
  { type: 'Airbnb', rate: '₹2,750', amenities: ['Fully equipped kitchen', 'Flexible check-in/out', 'Local area guide'] },
  { type: 'Budget Hotel', rate: '₹2,250', amenities: ['Complimentary breakfast', 'Basic toiletries', '24-hour front desk'] },
  { type: '3 Star Hotel', rate: '₹2,450', amenities: ['Buffet breakfast', 'Gym access', 'In-room safe', 'Laundry service'] },
  { type: '4 Star Hotel', rate: '₹2,650', amenities: ['Luxury check-in', 'Spa indulgence', 'Fine dining experience'] },
  { type: '5 Star Hotel', rate: '₹2,750', amenities: ['Private tour', 'Cultural event', 'Lavish suite', 'Cultural entertainment'] },
  { type: 'Resorts', rate: '₹3,250', amenities: ['All-inclusive meals', 'Evening entertainment', 'Spa treatments', "Kids' club"] },
]

const topHotels = [
  { name: 'Ramada', stars: '⭐⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ramada_Plaza_New_Delhi.jpg/480px-Ramada_Plaza_New_Delhi.jpg' },
  { name: 'Taj Ganges', stars: '⭐⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Taj_Ganges_Varanasi.jpg/480px-Taj_Ganges_Varanasi.jpg' },
  { name: 'BrijRama Palace', stars: '⭐⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BrijRama_Palace_Varanasi.jpg/480px-BrijRama_Palace_Varanasi.jpg' },
  { name: 'Taj Nadesar', stars: '⭐⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Taj_Nadesar_Palace_Varanasi.jpg/480px-Taj_Nadesar_Palace_Varanasi.jpg' },
  { name: 'Radisson', stars: '⭐⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Radisson_Hotel_Varanasi.jpg/480px-Radisson_Hotel_Varanasi.jpg' },
  { name: 'Hotel Surya', stars: '⭐⭐⭐⭐', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hotel_Surya_Varanasi.jpg/480px-Hotel_Surya_Varanasi.jpg' },
]

const historicalSites = [
  { site: 'Ramnagar Fort', desc: 'Ancient fort with museum and architectural marvels', distance: '~14 km' },
  { site: 'Dhamek Stupa', desc: "Iconic stupa where Buddha delivered his first sermon", distance: '~11 km' },
  { site: 'Sarnath Archaeological Site', desc: 'Significant Buddhist site with ancient ruins and monuments', distance: '~10 km' },
  { site: 'Chaukhandi Stupa', desc: "Ancient stupa commemorating Buddha's first disciples", distance: '~11.5 km' },
  { site: 'Ashoka Pillar', desc: 'Historic pillar erected by Emperor Ashoka with ancient inscriptions', distance: '~10.5 km' },
  { site: 'Archaeological Museum', desc: "Museum housing artifacts and relics from Varanasi's past", distance: '~11.5 km' },
]

const historicalImages = [
  { name: 'Dhamek Stupa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dhamek_stupa.jpg/480px-Dhamek_stupa.jpg' },
  { name: 'Chaukhandi Stupa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Chaukhandi_Stupa.jpg/480px-Chaukhandi_Stupa.jpg' },
  { name: 'Archaeological Site', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sarnath_ruins.jpg/480px-Sarnath_ruins.jpg' },
  { name: 'Archaeological Museum', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sarnath_Museum.jpg/480px-Sarnath_Museum.jpg' },
  { name: 'Ramnagar Fort', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ramnagar_Fort_Varanasi.jpg/480px-Ramnagar_Fort_Varanasi.jpg' },
  { name: 'Ashoka Pillar', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ashoka_pillar_sarnath.jpg/480px-Ashoka_pillar_sarnath.jpg' },
]

const inclusions = [
  'Transportation: Sedan Car / AC Innova Car / AC Tempo Traveler',
  'Meals: Breakfast included',
  'Transfers: Return railway station/airport transfer and all sightseeing',
  'Vehicle: All tours and transfers on the specified vehicle type',
  'Expenses Covered: Toll taxes, parking, fuel, permit charges & driver fee',
  'Taxes: All applicable GST & service taxes included',
]

const exclusions = [
  'Hotel Extras: Additional expenses at the hotel',
  'Activities: Boat rides, temple rituals & puja materials',
  'Personal Expenses: Personal purchases, ticket fares',
]

const thingsToDo = [
  { title: 'Morning Ganga Aarti', desc: 'We start our day by witnessing the serene morning prayers along the Ganges.' },
  { title: 'Evening Ganga Aarti', desc: 'As the day winds down, we gather to experience the delightful evening Ganga Aarti at Dashashwamedh Ghat.' },
  { title: 'Shopping', desc: 'Explore the streets and markets of Varanasi, looking through colorful goods and finding a beautiful Banarasi Saree to take home.' },
  { title: 'Taste Street Food', desc: 'Taste the delicious flavors of local street food — Kachori Sabji, Chaat, Lassi — and make your trip memorable.' },
]

const faqs = [
  { q: 'What is covered in the Varanasi 2 Days 1 Night tour package?', a: 'The package covers all major temples (Kashi Vishwanath, Annapurna, Kalbhairav), Ganga Aarti boat ride, Sarnath Buddhist site, private cab for all sightseeing, and hotel stay.' },
  { q: 'Is the Kashi Vishwanath VIP Darshan included?', a: 'Yes, VIP Darshan tickets for Shri Kashi Vishwanath Temple are included in the package so you can skip long queues.' },
  { q: 'What is the best time to visit Varanasi?', a: 'October to March is the best time. Winters are ideal for attending Ganga Aarti, Sarnath tour, and Dev Deepawali. Avoid May–June due to extreme heat.' },
  { q: 'Can we add more days to this package?', a: 'Yes! You can upgrade to our 3-day, 4-day, or Varanasi+Ayodhya packages. Contact us to customize your itinerary.' },
  { q: 'Is this package available for solo travelers?', a: 'Absolutely! We cater to solo travelers, couples, families, and groups. Rates vary by group size — contact us for the best quote.' },
  { q: 'What hotel category is included in the package?', a: 'The package includes a 3-star hotel on twin/double sharing basis. You can upgrade to 4-star or 5-star at an additional cost.' },
]

// ── Reusable Components ───────────────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <svg className={`w-5 h-5 text-[#ea2330] shrink-0 ml-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">{a}</div>
      )}
    </div>
  )
}

function CallBar({ color = 'blue', subtitle }) {
  const bg = color === 'red' ? 'bg-[#ea2330]' : color === 'green' ? 'bg-green-500' : 'bg-blue-700'
  return (
    <a
      href="tel:+919876543210"
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 ${bg} text-white rounded-xl py-4 px-6 my-8 hover:opacity-90 transition-opacity shadow-lg`}
    >
      <span className="text-xl">📞</span>
      <div className="text-center sm:text-left">
        <p className="font-extrabold text-lg tracking-wide">CALL – +91 98765 43210</p>
        <p className="text-xs opacity-80 font-medium uppercase tracking-wider">{subtitle}</p>
      </div>
    </a>
  )
}

function SectionHeading({ black, red }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
      {black} <span className="text-[#ea2330]">{red}</span>
    </h2>
  )
}

// Image with fallback gradient
function ImgWithFallback({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.target.style.display = 'none'
        e.target.nextSibling && (e.target.nextSibling.style.display = 'flex')
      }}
    />
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VaranasiTour2Days1Night() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Varanasi_Ghats_during_Ganga_Aarti.jpg/1200px-Varanasi_Ghats_during_Ganga_Aarti.jpg"
          alt="Varanasi Ghats"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">2 Days 1 Night</span>
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Varanasi Tour Package &amp;{' '}
            <span className="text-[#ea2330]">Itinerary – 2 Days 1 Night</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-xl">
            Kashi Vishwanath • Ganga Aarti • Sarnath • Ghats of Varanasi
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href="tel:+919876543210" className="bg-[#ea2330] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors text-sm">
              📞 Book Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors text-sm">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link>
          <span>/</span>
          <Link href="/packages/varanasi-tour" className="hover:text-[#ea2330]">Varanasi Tour Package</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">2 Days 1 Night</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-14">

        {/* ── Day 1 ── */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Day 1 of Varanasi Tour{' '}
                <span className="text-[#ea2330]">Package &amp; Itinerary</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                On the first day of your tour, we will delve into Varanasi&apos;s fascinating history and culture.
                Our journey begins with:
              </p>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong className="text-gray-900">1. Darshan at{' '}
                    <span className="text-[#ea2330]">Shri Kashi Vishwanath Temple</span>
                  </strong>
                  {' '}: This sacred temple dedicated to Lord Shiva emanates an ambiance of divinity and serenity.
                </p>
                <p>
                  <strong>2. <span className="text-[#ea2330]">Annapurna Temple</span></strong>
                  {' '}: Adjacent to the Vishwanath Temple stands the Annapurna Temple, where devotees pay homage to
                  the goddess Annapurna, the provider of sustenance and nourishment.
                </p>
                <p>
                  <strong>3. <span className="text-[#ea2330]">Baba Kal Kalbhairav Temple</span></strong>
                  {' '}: Devoted to the fierce manifestation of Lord Shiva. This temple is believed to possess
                  immense spiritual potency, attracting devotees who seek protection, fortitude, and the removal of
                  obstacles from their life journeys.
                </p>
                <p>
                  Following this, we will meander through Varanasi&apos;s bustling streets, renowned for their lively
                  markets and traditional crafts. Here, you&apos;ll have the opportunity to shop for{' '}
                  <strong>Handcrafted <span className="text-[#ea2330]">Banarasi Saree</span></strong>, handicraft
                  items that beautifully showcase the city&apos;s cultural richness.
                </p>
                <p>
                  In the evening, we will witness the{' '}
                  <strong><span className="text-[#ea2330]">Ganga Aarti</span> at the{' '}
                  <span className="text-[#ea2330]">Dasaswamedh Ghat</span></strong>.
                  You can choose to observe this mesmerizing ritual either from the Ghat itself or by{' '}
                  <strong className="text-[#ea2330]">boat ride in River Ganga</strong>. The Ganga Aarti experience
                  imparts a profound sense of connection to something greater. Afterwards, we will return to the hotel.
                </p>
              </div>
            </div>
            {/* Day 1 Image */}
            <div className="w-full md:w-[420px] shrink-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ganga_aarti_at_varanasi_%28cropped%29.jpg/640px-Ganga_aarti_at_varanasi_%28cropped%29.jpg"
                alt="Ganga Aarti Varanasi"
                className="w-full h-72 object-cover"
              />
              <CallBar color="blue" subtitle="CALL NOW – IF YOU NEED ANY ASSISTANCE RELATED TO VARANASI ITINERARY" />
            </div>
          </div>
        </section>

        {/* ── Day 2 ── */}
        <section>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Day 2 of Varanasi Tour{' '}
                <span className="text-[#ea2330]">Package &amp; Itinerary</span>
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>On Day 2</strong>, our journey will commence with visits to the{' '}
                <span className="text-[#ea2330] font-semibold">Sankat Mochan Temple</span>, Durga Temple,{' '}
                <span className="text-[#ea2330] font-semibold">Tulsi Manas Mandir</span>, and{' '}
                <strong>Banaras Hindu University</strong>, one of the oldest and largest universities in Asia.
                Afterward, you can return to the hotel for breakfast or enjoy famous{' '}
                <strong>Kachori Sabji of Varanasi</strong>.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-4">
                Following breakfast, we will embark on a tour of{' '}
                <span className="text-[#ea2330] font-semibold">Sarnath</span>, a significant Buddhist site. Here,
                we will visit the sacred <strong>Deer Park</strong>, where <strong>Lord Buddha</strong> delivered
                his first sermon after attaining enlightenment. Among the impressive remains at Sarnath are the
                modern <strong>Dharmarajika Temple</strong>, <strong>Chaukhandi Stupa</strong>, and{' '}
                <strong>Dhamek Stupa</strong>. Additionally, we will see the newly built 80-foot-tall statue of
                Lord Buddha, remains of a monastery, and the beautifully polished{' '}
                <strong>Lion Capital of Ashoka</strong>.
              </p>
            </div>
            {/* Day 2 Image */}
            <div className="w-full md:w-[420px] shrink-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Varanasi_river-side.jpg/640px-Varanasi_river-side.jpg"
                alt="Varanasi Ghats and Boats"
                className="w-full h-72 object-cover"
              />
              <CallBar color="red" subtitle="CALL NOW – IF YOU NEED ANY ASSISTANCE RELATED TO VARANASI ITINERARY" />
            </div>
          </div>
        </section>

        {/* ── Temples Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Temples Covered In Varanasi Tour" red="Package &amp; Itinerary" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {temples.map((t) => (
              <div key={t.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ea2330] transition-all">
                <div className="relative h-28 w-full overflow-hidden bg-orange-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${t.name.replace(/\s/g,'-')}/400/300` }}
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Activities Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Activities Covered In Varanasi Tour" red="Package &amp; Itinerary" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {activities.map((a) => (
              <div key={a.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ea2330] transition-all">
                <div className="relative h-32 w-full overflow-hidden bg-orange-100">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${a.name.replace(/\s/g,'-')}/400/300` }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-bold text-gray-700">{a.name}</p>
                </div>
              </div>
            ))}
          </div>
          <CallBar color="green" subtitle="CALL NOW & TALK TO OUR EXPERT" />
        </section>

        {/* ── Cabs Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Cab Available For Booking In" red="Varanasi" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cabs.map((cab) => (
              <Link
                key={cab.name}
                href={cab.href}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-[#ea2330] transition-all group"
              >
                <div className="relative h-32 w-full overflow-hidden bg-gray-100">
                  <img
                    src={cab.img}
                    alt={cab.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${cab.name.replace(/\s/g,'-')}/400/300` }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-[#ea2330] transition-colors">{cab.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cab.capacity}</p>
                </div>
              </Link>
            ))}
          </div>
          <CallBar color="red" subtitle="CALL NOW & BOOK YOUR CAB" />
        </section>

        {/* ── Services Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Services We Provide For Tourists Visiting" red="Varanasi" />
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {services.map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-[#ea2330] transition-all">
                <span className="text-5xl block mb-3">{s.icon}</span>
                <p className="text-xs font-bold text-gray-700 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
          <CallBar color="blue" subtitle="WE WILL PLAN EVERYTHING FOR YOU" />
        </section>

        {/* ── Hotel Rates Table ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Hotel Rates In <span className="text-[#ea2330]">Varanasi</span>
          </h2>
          <p className="text-gray-500 text-sm mb-5">Choose the accommodation that suits your budget and comfort</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#ea2330] text-white">
                  <th className="px-5 py-3 text-left font-semibold w-36">HOTEL TYPE</th>
                  <th className="px-5 py-3 text-left font-semibold w-40">PER ROOM RATE (INR)</th>
                  <th className="px-5 py-3 text-left font-semibold">ITINERARY PROVIDED</th>
                </tr>
              </thead>
              <tbody>
                {hotelRates.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-semibold text-gray-800 align-top">{row.type}</td>
                    <td className="px-5 py-4 font-bold text-[#ea2330] align-top">{row.rate}</td>
                    <td className="px-5 py-4 align-top">
                      <ul className="space-y-1">
                        {row.amenities.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-gray-600 text-xs">
                            <span className="text-[#ea2330] font-bold mt-0.5 shrink-0">•</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Top 5 Star Hotels ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Top 5 Star Hotels In" red="Varanasi" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {topHotels.map((hotel) => (
              <div key={hotel.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-28 w-full overflow-hidden bg-yellow-50">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${hotel.name.replace(/\s/g,'-')}/400/300` }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-bold text-gray-800">{hotel.name}</p>
                  <p className="text-xs text-yellow-500 mt-0.5">{hotel.stars}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Inclusion & Exclusion ── */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                Inclusion In Varanasi <span className="text-[#ea2330]">Package &amp; Itinerary</span>
              </h2>
              <ul className="space-y-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-red-100 border-2 border-[#ea2330] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-[#ea2330] rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                Exclusion In Varanasi Tour <span className="text-[#ea2330]">Package &amp; Itinerary</span>
              </h2>
              <ul className="space-y-3">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-red-100 border-2 border-[#ea2330] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-[#ea2330] rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Historical Sites ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
            Historical Sites Covered In Varanasi <span className="text-[#ea2330]">Package &amp; Itinerary</span>
          </h2>
          <p className="text-gray-500 text-sm italic mb-5">
            Our tour package takes you to explore the city&apos;s historical sites, where you&apos;ll witness ancient forts, and palaces.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#ea2330] text-white">
                  <th className="px-5 py-3 text-left font-semibold">HISTORICAL SITE</th>
                  <th className="px-5 py-3 text-left font-semibold">DESCRIPTION</th>
                  <th className="px-5 py-3 text-left font-semibold whitespace-nowrap">DISTANCE FROM KASHI VISHWANATH</th>
                </tr>
              </thead>
              <tbody>
                {historicalSites.map((row, i) => (
                  <tr key={row.site} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.site}</td>
                    <td className="px-5 py-3 text-gray-600">{row.desc}</td>
                    <td className="px-5 py-3 text-gray-600 whitespace-nowrap">{row.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Historical Sites Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {historicalImages.map((site) => (
              <div key={site.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-28 w-full overflow-hidden bg-gray-100">
                  <img
                    src={site.img}
                    alt={site.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${site.name.replace(/\s/g,'-')}/400/300` }}
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-gray-700">{site.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Things To Do ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5">
            Things To Do In Varanasi <span className="text-[#ea2330]">Package &amp; Itinerary</span>
          </h2>
          <ul className="space-y-3">
            {thingsToDo.map((item) => (
              <li key={item.title} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-red-100 border-2 border-[#ea2330] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-[#ea2330] rounded-full" />
                </span>
                <span><strong>{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5">
            Frequently Asked Questions — <span className="text-[#ea2330]">Varanasi 2 Days Tour</span>
          </h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-r from-[#ea2330] to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Experience Kashi?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
            Book your Varanasi 2 Days 1 Night tour today. Our experts are available 24/7 to help you plan your perfect pilgrimage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-[#ea2330] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm">
              📞 Call Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-green-500 transition-colors text-sm">
              💬 WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
