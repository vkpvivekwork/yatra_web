'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  { text: 'Hassle-Free ', bold: 'Varanasi to Ayodhya Cab', rest: ' Service with YatraKSathi.' },
  { text: 'Top-Rated Taxi Services in Varanasi for Tourists and Travelers.' },
  { text: 'Book Your Varanasi to Ayodhya Taxi for a Comfortable Journey.' },
  { text: 'Reliable Cab Services from ', bold: 'Varanasi to Ayodhya' },
  { text: 'Save on Travel with YatraKSathi Cabs: Affordable and Convenient.' },
  { text: '24×7 Customer Support for a Smooth Cab Booking Experience.' },
  { text: 'Timely Pickup and Drop Services Anywhere in Varanasi.' },
]

const cabs = [
  {
    name: 'Swift Dzire',
    capacity: '(4 Seater)',
    href: '/taxi/swift-dzire',
    img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
  },
  {
    name: 'Innova Crysta',
    capacity: '(6 Seater)',
    href: '/taxi/innova-crysta',
    img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139057/innova-crysta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
  },
  {
    name: 'Ertiga',
    capacity: '(7 Seater)',
    href: '/taxi/ertiga',
    img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139259/ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
  },
  {
    name: 'Tempo Traveller',
    capacity: '(10 to 25 Seater)',
    href: '/taxi/tempo-traveller',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Force_Tempo_Traveller.jpg/640px-Force_Tempo_Traveller.jpg',
  },
  {
    name: 'Volvo Bus',
    capacity: '(30 to 50 Seater)',
    href: '/taxi/volvo-bus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Volvo_9400_Luxury_coach.jpg/640px-Volvo_9400_Luxury_coach.jpg',
  },
]

const dzireRates = [
  {
    trip: 'Swift Dzire Cab Airport Pickup',
    duration: '45 Min*',
    seating: 'Upto 4 Person',
    rate: 'Rs.1000*',
    inclusions: 'Parking Charges, Airport Entry Charges, Only 25 Km Pickup and Drop',
  },
  {
    trip: 'Swift Dzire Cab Airport Drop',
    duration: '45 Min*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 1000*',
    inclusions: 'Parking Charges, Airport Entry Charges, Only 25 Km Pickup and Drop',
  },
  {
    trip: 'Varanasi Local Fullday Sightseeing',
    duration: '10 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs.3000',
    inclusions: 'Airport Entry Charges, Only 25 Km Pickup and Drop, Parking Charges',
  },
  {
    trip: 'Swift Dzire Cab for Varanasi to Vindhyachal',
    duration: '8 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 2600*',
    inclusions: 'Airport Entry Charges, Only 25 Km Pickup and Drop, Parking Charges',
  },
  {
    trip: 'Swift Dzire Cab for Varanasi to Prayagraj',
    duration: '10 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 4500*',
    inclusions: 'Toll Tax, Parking Charges, Airport Entry Charges, Only 25 km Pickup and Drop',
  },
  {
    trip: 'Swift Dzire Cab for Varanasi to Ayodhya',
    duration: '12 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 6500*',
    inclusions: 'Toll Tax, Parking Charges, Airport Entry Charges, Only 25 km Pickup & Drop',
  },
  {
    trip: 'Swift Dzire Cab for Varanasi to Bodhgaya',
    duration: '12 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 8000*',
    inclusions: 'Toll Tax, State Tax, Parking Charges, Airport Entry Charges, Only 25 km Pickup & Drop',
  },
  {
    trip: 'Swift Dzire Cab for Varanasi to Lucknow',
    duration: '12 hr*',
    seating: 'Upto 4 Person',
    rate: 'Rs. 9500*',
    inclusions: 'Toll Tax, Parking Charges, Airport Entry Charges, Only 25 km Pickup & Drop',
  },
]

const ayodhyaPlaces = [
  {
    name: 'Shri Ram Janmbhoomi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ram_Mandir_Ayodhya.jpg/480px-Ram_Mandir_Ayodhya.jpg',
  },
  {
    name: 'Hanuman Garhi Temple, Ayodhya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Hanuman_Garhi_Ayodhya.jpg/480px-Hanuman_Garhi_Ayodhya.jpg',
  },
  {
    name: 'Kanak Bhawan, Ayodhya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kanak_Bhavan_Ayodhya.jpg/480px-Kanak_Bhavan_Ayodhya.jpg',
  },
  {
    name: 'Dashrath Mahal, Ayodhya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Dashrath_Mahal_Ayodhya.jpg/480px-Dashrath_Mahal_Ayodhya.jpg',
  },
  {
    name: 'Saryu Ghat, Ayodhya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Saryu_River_Ayodhya.jpg/480px-Saryu_River_Ayodhya.jpg',
  },
]

const faqs = [
  {
    q: 'How Can I Book A Varanasi To Ayodhya Cab?',
    a: 'You can easily book a Varanasi to Ayodhya cab by calling our booking number 6388116241. Our team will confirm your ride instantly and ensure a comfortable travel experience.',
  },
  {
    q: 'What Is The Distance From Varanasi To Ayodhya?',
    a: 'The distance from Varanasi to Ayodhya is approximately 200 km via NH27. The journey takes around 4 hours depending on traffic conditions.',
  },
  {
    q: 'What Types Of Cabs Are Available For Varanasi To Ayodhya?',
    a: 'We offer Swift Dzire (4 Seater), Innova Crysta (6 Seater), Ertiga (7 Seater), Tempo Traveller (10-25 Seater), and Volvo Bus (30-50 Seater) for the Varanasi to Ayodhya route.',
  },
  {
    q: 'What Is The Cab Fare From Varanasi To Ayodhya?',
    a: 'The one-way cab fare from Varanasi to Ayodhya starts from Rs. 6,500 for a Swift Dzire. Prices vary based on vehicle type and trip duration. Call us for the exact quote.',
  },
  {
    q: 'Is The Cab Service Available 24/7 For Varanasi To Ayodhya Route?',
    a: 'Yes, our Varanasi to Ayodhya cab service is available 24/7. Whether it is an early morning or late night journey, we are always ready to serve you.',
  },
  {
    q: 'Are Toll Charges Included In The Varanasi To Ayodhya Cab Fare?',
    a: 'Toll charges, parking charges, and airport entry charges are charged extra and are not included in the base fare. Please ask our team for a complete fare breakdown.',
  },
  {
    q: 'Can I Book A Round Trip Cab From Varanasi To Ayodhya?',
    a: 'Yes, we offer both one-way and round-trip cab services from Varanasi to Ayodhya. Round-trip bookings are available at discounted rates. Call us for the best deal.',
  },
  {
    q: 'What Places Can I Visit In Ayodhya?',
    a: 'In Ayodhya, you can visit Ram Janmbhoomi (Ram Mandir), Hanuman Garhi Temple, Kanak Bhawan, Dashrath Mahal, Saryu Ghat, Nageshwarnath Temple, and many more sacred sites.',
  },
]

// ── Reusable Components ──────────────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 mb-2 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-base">{q}</span>
        <span className={`text-gray-500 shrink-0 ml-3 transition-transform ${open ? 'rotate-180' : ''}`}>
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

function CallBar({ color = 'red', subtitle }) {
  const bg =
    color === 'red' ? 'bg-[#ea2330]' :
    color === 'blue' ? 'bg-blue-700' :
    color === 'green' ? 'bg-green-500' : 'bg-[#ea2330]'
  return (
    <a
      href="tel:+916388116241"
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 ${bg} text-white rounded-xl py-4 px-6 hover:opacity-90 transition-opacity shadow-lg`}
    >
      <span className="text-xl">📞</span>
      <div className="text-center sm:text-left">
        <p className="font-extrabold text-lg tracking-wide">CALL – 6388116241</p>
        <p className="text-xs opacity-80 font-medium uppercase tracking-wider">{subtitle}</p>
      </div>
    </a>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VaranasiToAyodhyaPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative h-[280px] md:h-[360px] w-full overflow-hidden">
        <img
          src="/Ayodhya.jpg"
          alt="Varanasi to Ayodhya Cab"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ram_Mandir_Ayodhya.jpg/1200px-Ram_Mandir_Ayodhya.jpg'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight italic">
            Varanasi to Ayodhya Cab
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#ea2330]">❯</span>
            <span className="text-white font-medium">Varanasi to Ayodhya Cab</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-12">

        {/* ── Intro Section – Two Column ── */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left – text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
                Varanasi to Ayodhya Cab
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Hassle-Free <strong>Varanasi to Ayodhya Cab</strong> Service with YatraKSathi.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Top-Rated Taxi Services in Varanasi for Tourists and Travelers.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Book Your Varanasi to Ayodhya Taxi for a Comfortable Journey.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Reliable Cab Services from <strong>Varanasi to Ayodhya</strong></span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Save on Travel with YatraKSathi Cabs: Affordable and Convenient.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>24×7 Customer Support for a Smooth Cab Booking Experience.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  <span>Timely Pickup and Drop Services Anywhere in Varanasi.</span>
                </li>
              </ul>
            </div>

            {/* Right – Image + Call Button */}
            <div className="w-full md:w-[420px] shrink-0 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621698777567-73d8780e0cc0?q=80&w=640&auto=format&fit=crop"
                  alt="Cab fleet Varanasi"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=640&auto=format&fit=crop'
                  }}
                />
              </div>
              <a
                href="tel:+916388116241"
                className="flex items-center justify-center gap-3 bg-blue-700 text-white rounded-xl py-4 px-6 hover:bg-blue-800 transition-colors shadow-lg w-full"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-extrabold text-lg tracking-wide">CALL – 6388116241</p>
                  <p className="text-xs opacity-80 font-medium uppercase tracking-wider">CALL NOW & BOOK YOUR CAB</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Cabs Available Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Cab Available For <span className="text-[#ea2330]">Varanasi To Ayodhya</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cabs.map((cab) => (
              <Link
                key={cab.name}
                href={cab.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-[#ea2330] transition-all"
              >
                <div className="relative h-36 w-full overflow-hidden bg-gray-100 flex items-center justify-center p-3">
                  <img
                    src={cab.img}
                    alt={cab.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${cab.name.replace(/\s/g, '-')}/400/300`
                    }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-[#ea2330] transition-colors">{cab.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cab.capacity}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Call Banner inside section */}
          <div className="mt-8">
            <CallBar color="red" subtitle="CALL NOW & BOOK YOUR CAB" />
          </div>
        </section>

        {/* ── Dzire Rate Table ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5">
            Swift Dzire Cab Booking Rate In <span className="text-[#ea2330]">Varanasi</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#ea2330] text-white">
                  <th className="px-4 py-3 text-left font-semibold">TRIP TYPE</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">DURATION</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">SEATING CAPACITY</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">RATES / CHARGES</th>
                  <th className="px-4 py-3 text-left font-semibold">INCLUSIONS</th>
                </tr>
              </thead>
              <tbody>
                {dzireRates.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-medium text-gray-800 align-top">{row.trip}</td>
                    <td className="px-4 py-4 text-gray-600 align-top whitespace-nowrap">{row.duration}</td>
                    <td className="px-4 py-4 text-gray-600 align-top">{row.seating}</td>
                    <td className="px-4 py-4 font-bold text-[#ea2330] align-top whitespace-nowrap">{row.rate}</td>
                    <td className="px-4 py-4 text-gray-600 align-top text-xs leading-relaxed">{row.inclusions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Temples / Places in Ayodhya ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Temples Can Be Covered Using Cab Service In <span className="text-[#ea2330]">Varanasi</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {ayodhyaPlaces.map((place, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ea2330] transition-all"
              >
                <div className="relative h-36 w-full overflow-hidden bg-orange-100">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${place.name.replace(/\s/g, '-')}/400/300`
                    }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-[#ea2330] leading-snug">{place.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Book Section – Two Column ── */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left – Cab Image + Call Button */}
            <div className="w-full md:w-[400px] shrink-0 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 p-4 flex items-center justify-center" style={{ minHeight: '280px' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Force_Tempo_Traveller.jpg/640px-Force_Tempo_Traveller.jpg"
                  alt="Tempo Traveller Cab Varanasi to Ayodhya"
                  className="w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/seed/tempo-traveller/600/400'
                  }}
                />
              </div>
              <CallBar color="red" subtitle="CALL NOW & BOOK YOUR CAB" />
            </div>

            {/* Right – Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
                Book Varanasi to Ayodhya <span className="text-[#ea2330]">Cab</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-sm leading-loose">
                <p>
                  Planning a journey from <strong>Varanasi to Ayodhya</strong>? With{' '}
                  <strong>YatraKSathi&apos;s Varanasi to Ayodhya cab service</strong>, your trip promises to
                  be comfortable, affordable, and convenient. Ayodhya, the revered birthplace of{' '}
                  <strong>Lord Rama</strong>, is one of India&apos;s most sacred cities, attracting pilgrims
                  and tourists alike. Our <strong>Varanasi to Ayodhya taxi service</strong> ensures a smooth
                  ride, allowing you to fully immerse yourself in the spiritual experience awaiting you.
                </p>
                <p>
                  Upon arrival in Ayodhya, you can visit the iconic <strong>Ram Janmabhoomi</strong>, the
                  sacred site of Lord Rama&apos;s birthplace, a must-visit for every devotee. The{' '}
                  <strong>Hanuman Garhi Temple</strong>, dedicated to Lord Hanuman, offers not only spiritual
                  significance but also stunning views of the city. Don&apos;t miss the{' '}
                  <strong>Kanak Bhawan Temple</strong>, renowned for its exquisite architecture, and the{' '}
                  <strong>Nageshwarnath Temple</strong>, believed to have been established by Kush, Lord
                  Rama&apos;s son. These temples are key highlights of Ayodhya, each rich in history and
                  religious importance.
                </p>
                <p>
                  With <strong>YatraKSathi&apos;s Varanasi to Ayodhya cab</strong>, your travel is more than
                  just a journey—it&apos;s a seamless experience that lets you explore these sacred sites
                  without any hassle. Our cabs are available 24/7, ensuring timely pickups and drops, so you
                  can make the most of your pilgrimage.{' '}
                  <strong>Book your Varanasi to Ayodhya cab</strong> today and embark on a spiritual journey
                  filled with faith, devotion, and peace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center">
            FAQ : <span className="text-[#ea2330]">VARANASI TO AYODHYA CAB SERVICE</span>
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
            Book Varanasi to Ayodhya Cab Now!
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
            AC cab, experienced drivers, no advance payment required. 24/7 available for your pilgrimage journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+916388116241"
              className="bg-white text-[#ea2330] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/916388116241"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-green-500 transition-colors text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
