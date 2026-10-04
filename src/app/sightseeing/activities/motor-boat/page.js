'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const activities = [
  { label: 'Morning Boat Ride', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop' },
  { label: 'Evening Boat Ride', img: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=400&auto=format&fit=crop' },
  { label: 'Celebrate Birthday on Boat', img: 'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=400&auto=format&fit=crop' },
  { label: 'Celebrate Anniversary on Boat', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop' },
  { label: 'Model Photography on Boat', img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop' },
]

const ratesTable = [
  { trip: 'Private Motor Boat for Evening Aarti', duration: 'Approx 2 Hr', capacity: 'Upto 10 Person', rate: '₹ 4000*' },
  { trip: 'Morning Boat Ride', duration: 'Approx 2 Hr', capacity: 'Upto 10 Person', rate: '₹ 4000*' },
  { trip: 'Birthday Celebration on Boat', duration: 'Approx 2 Hr', capacity: 'Upto 4 Person', rate: '₹ 4000*' },
  { trip: 'Anniversary Celebration on Boat', duration: 'Approx 2 Hr', capacity: 'Upto 10 Person', rate: '₹ 4000*' },
  { trip: 'Boat for Photography', duration: 'Approx 2 Hr', capacity: 'Upto 10 Person', rate: '₹ 4000*' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=600&auto=format&fit=crop',
]

const faqs = [
  {
    q: 'How Can I Book A Motor Boat In Varanasi?',
    a: 'You can easily book a motor boat in Varanasi online through our website. Simply select your preferred date, time slot (sunrise or evening), and boat type (private or shared). Once your booking is confirmed, our team will share meeting point details and contact information of your boat operator.',
  },
  {
    q: 'What Are The Charges For Motor Boat Booking In Varanasi?',
    a: 'Motor boat charges start from ₹4000 per trip (approx 2 hours) for up to 10 persons. Charges may vary depending on the season, occasion, and duration. Special occasion packages are also available.',
  },
  {
    q: 'Which Ghats Are Covered In The Varanasi Motor Boat Ride?',
    a: 'The motor boat ride covers all 84 iconic ghats including Dashashwamedh Ghat, Assi Ghat, Manikarnika Ghat, Harishchandra Ghat, Scindia Ghat, and many more along the Ganga riverfront.',
  },
  {
    q: 'Is The Motor Boat Ride Safe For Families And Kids?',
    a: 'Yes, all motor boats are equipped with life jackets and safety gear. Our experienced boatmen ensure a safe and comfortable ride for families, kids, and elderly passengers.',
  },
  {
    q: 'What Is The Best Time For A Motor Boat Ride In Varanasi?',
    a: 'The best times are early morning (5:00–7:00 AM) for the sunrise experience and evening (6:00–8:00 PM) for the Ganga Aarti. Both times offer a unique and memorable experience on the Ganga.',
  },
  {
    q: 'Can I Book A Private Motor Boat For My Family Or Group?',
    a: 'Absolutely! We offer private motor boat bookings for families and groups. A private boat accommodates up to 10 persons and can be customized for special occasions like birthdays, anniversaries, or photography shoots.',
  },
  {
    q: 'Do You Provide Motor Boat Booking For Dev Diwali Or Special Occasions?',
    a: 'Yes, we provide special motor boat packages for Dev Diwali, Maha Shivaratri, and other festivals. Prices during peak festivals may vary. Book early to secure your slot.',
  },
  {
    q: 'What Is The Starting And Ending Point Of The Ride?',
    a: 'The motor boat ride typically starts and ends at Dashashwamedh Ghat or Assi Ghat. The exact meeting point is shared after booking confirmation based on your preference.',
  },
]

function CallBtn({ label = 'CALL NOW & BOOK YOUR BOAT RIDE', pill = false }) {
  return (
    <a href="tel:+916388116241"
      className={`inline-flex items-center justify-center gap-3 bg-[#ea2330] hover:bg-red-700 text-white font-bold px-8 py-4 transition shadow text-sm ${pill ? 'rounded-full' : 'rounded-xl'}`}>
      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span className="flex flex-col leading-tight text-center">
        <span className="text-base font-extrabold">CALL – 63881 16241</span>
        <span className="text-xs font-normal opacity-90">{label}</span>
      </span>
    </a>
  )
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition">
        <span className="font-semibold text-gray-800 text-sm sm:text-base">{q}</span>
        <svg className={`w-5 h-5 text-gray-400 shrink-0 ml-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  )
}

export default function MotorBoatPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        className="relative min-h-[340px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair">
            Varanasi Motor Boat Booking
          </h1>
        </div>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-sm text-gray-200">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>›</span>
          <span className="text-white">Varanasi Motor Boat Booking</span>
        </div>
      </section>

      {/* ── INTRO — two column: text left, image right ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Varanasi Online Motor Boat Booking
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                Experience the spiritual beauty of <strong>Varanasi</strong> with a peaceful and comfortable <strong>motor boat ride on the River Ganga</strong>. Glide through the holy waters and witness the breathtaking charm of the <strong>84 Ghats</strong>, each with its own story and heritage. From the vibrant rituals at <strong>Dashashwamedh Ghat</strong> to the calm serenity near <strong>Assi Ghat</strong>, this journey offers a perfect blend of culture, devotion, and scenic beauty. Whether you're here to enjoy the <strong>Ganga Aarti</strong>, capture stunning sunrise or sunset views, or simply feel the divine vibe of Kashi, a <strong>motor boat booking in Varanasi</strong> ensures a truly unforgettable experience.
              </p>
              <p className="font-bold text-gray-800 mb-3 text-sm sm:text-base">What's Covered in the Boat Ride:</p>
              <ul className="space-y-2.5 mb-7">
                {[
                  <>Visit to all <strong>84 iconic Ghats</strong> of Varanasi</>,
                  <><strong>Scenic river views</strong> of temples and heritage spots</>,
                  <>Live experience of the <strong>Ganga Aarti</strong> at Dashashwamedh Ghat</>,
                  <><strong>Sunrise and sunset boat ride</strong> options available</>,
                  <>Ideal for <strong>families, couples, and group travelers</strong></>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CallBtn />
            </div>

            {/* Right image */}
            <div className="space-y-4">
              <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=900&auto=format&fit=crop"
                  alt="Motor Boat Varanasi Ganga"
                  fill className="object-cover" priority
                />
              </div>
              <a href="tel:+916388116241"
                className="flex items-center justify-center gap-3 w-full bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-bold py-4 rounded-xl transition text-sm shadow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <span className="font-extrabold tracking-wide">CALL – 63881 16241</span>
                  <span className="text-xs font-normal opacity-80">CALL NOW & BOOK YOUR BOAT RIDE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES CARDS ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Book Boat In Varanasi For Following Activities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {activities.map((act) => (
              <div key={act.label} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="relative h-36 sm:h-44">
                  <Image src={act.img} alt={act.label} fill className="object-cover" />
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 py-3 px-2 leading-snug">{act.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <CallBtn pill label="CALL NOW & BOOK YOUR BOAT RIDE" />
          </div>
        </div>
      </section>

      {/* ── RATES & CHARGES ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Varanasi Motor Boat Booking <span className="text-[#ea2330]">Rates & Charges</span>
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#ea2330] text-white">
                  <th className="px-5 py-3.5 text-left font-semibold tracking-wide">TRIP TYPE</th>
                  <th className="px-5 py-3.5 text-left font-semibold tracking-wide">DURATION</th>
                  <th className="px-5 py-3.5 text-left font-semibold tracking-wide">SEATING CAPACITY</th>
                  <th className="px-5 py-3.5 text-left font-semibold tracking-wide">RATES / CHARGES</th>
                </tr>
              </thead>
              <tbody>
                {ratesTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3.5 text-gray-700 border-b border-gray-100">{row.trip}</td>
                    <td className="px-5 py-3.5 text-gray-500 border-b border-gray-100">{row.duration}</td>
                    <td className="px-5 py-3.5 text-gray-500 border-b border-gray-100">{row.capacity}</td>
                    <td className="px-5 py-3.5 font-semibold text-gray-800 border-b border-gray-100">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <CallBtn pill label="CALL NOW & BOOK YOUR BOAT" />
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Gallery : Boat Ride In Varanasi
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative h-44 sm:h-52 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <Image src={src} alt={`Varanasi Boat Ride ${i + 1}`} fill className="object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE + WHAT'S INCLUDED ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=900&auto=format&fit=crop"
                alt="Motor Boats Varanasi Ganga"
                fill className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>🚤</span> Why Choose Motor Boat Booking in Varanasi?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Motor boats are the most convenient and time-efficient way to explore the <strong>84 Ghats of Varanasi</strong>. Unlike traditional row boats, motor boats let you cover long distances quickly while still enjoying the breathtaking views of temples, rituals, and daily life along the river. They are perfect for <strong>families, couples, and group travelers</strong> who want a comfortable and safe river experience.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>🪖</span> What's Included in the Varanasi Motor Boat Ride
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                When you book a <strong>motor boat in Varanasi</strong>, you can expect a complete cultural and spiritual tour that covers:
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  <>Visit to all <strong>84 iconic Ghats</strong>, including Dashashwamedh, Assi, and Manikarnika Ghats.</>,
                  <>A mesmerizing view of the <strong>Ganga Aarti</strong> from the water.</>,
                  <><strong>Scenic sunrise or sunset rides</strong> offering panoramic views of the riverfront.</>,
                  <>Sightseeing of ancient <strong>temples and heritage sites</strong> along the Ganga.</>,
                  <>Options for <strong>private or group motor boat bookings</strong> with safety measures.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-gray-400 mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CallBtn label="CALL NOW & BOOK YOUR BOAT" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8">
            FAQ : <span className="text-[#ea2330]">VARANASI MOTOR BOAT BOOKING</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
