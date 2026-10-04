'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GoldenTrianglePage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', date: '', passengers: '2' })
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
          name: form.name, phone: form.phone, travel_date: form.date,
          service_type: 'package',
          message: `Golden Triangle – Varanasi, Ayodhya & Prayagraj | Passengers: ${form.passengers}`,
          source: 'golden_triangle_page',
        }),
      })
    } catch (err) {}
    finally { setLoading(false); setSubmitted(true) }
  }

  const paxRates = [
    { rate: '₹12,999/Person', pax: '2 Pax' },
    { rate: '₹10,999/Person', pax: '4 Pax' },
    { rate: '₹9,999/Person', pax: '6 Pax' },
    { rate: '₹8,999/Person', pax: '10 Pax' },
    { rate: '₹8,499/Person', pax: '16 Pax' },
  ]

  const temples = [
    { name: 'Kashi Vishwanath Temple', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop' },
    { name: 'Annapurna Maa Temple', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Kal Bhairav Temple', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tulsi Manas Temple', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
    { name: 'Maa Vishalakshi Temple', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sankat Mochan Temple', img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Durga Maa Temple', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
    { name: 'Birla Temple BHU', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ayodhya Ram Mandir', img: '/Ayodhya.jpg' },
    { name: 'Hanumangarhi Temple, Ayodhya', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Kanak Bhawan, Ayodhya', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=400&auto=format&fit=crop' },
    { name: 'Hanuman Mandir, Prayagraj', img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop' },
  ]

  const activities = [
    { name: 'Evening Ganga Aarti in Varanasi', img: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Subah-e-Banaras – Assi Ghat', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop' },
    { name: 'Darshan & Puja in Kashi', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Boat Ride in River Ganga', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sarnath', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=400&auto=format&fit=crop' },
    { name: 'Local Handcrafted Item Shopping', img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ayodhya Ram Mandir Darshan', img: '/Ayodhya.jpg' },
    { name: 'Saryu River Aarti Ayodhya', img: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Holy bath in Sangam Prayag', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
    { name: 'Boat Ride in Saryu & Sangam', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dev Deepawali', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Historical Places of Prayagraj', img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop' },
  ]

  const cabs = [
    { name: 'Swift Dzire', seats: '4 Seater', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Innova Crysta', seats: '6 Seater', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ertiga', seats: '7 Seater', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tempo Traveller', seats: '10 to 25 Seater', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop' },
    { name: 'Volvo Bus', seats: '30 to 50 Seater', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=400&auto=format&fit=crop' },
  ]

  const services = [
    { icon: '🚕', label: 'CAB' },
    { icon: '⛵', label: 'BOATING' },
    { icon: '🛕', label: 'DARSHAN' },
    { icon: '🏨', label: 'HOTELS' },
    { icon: '🔭', label: 'SIGHTSEEING' },
    { icon: '✈️', label: 'PICKUP & DROP' },
  ]

  const faqs = [
    {
      q: 'What Is The Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package?',
      a: "It's a 3-night, 4-day spiritual tour of Uttar Pradesh that covers three of India's holiest cities – Varanasi, Prayagraj (Allahabad), and Ayodhya. Often called a \"Golden Triangle\" of spiritual sites, this tour immerses you in the rich culture and religious heritage of each destination. You'll experience the sacred River Ganges in Prayagraj, the confluence of holy rivers, and the birthplace of Lord Rama in Ayodhya. It's an ideal itinerary for travelers of all ages — whether families, solo adventurers, pilgrims, or international tourists — offering a mix of temple visits, cultural rituals, and local sightseeing.",
    },
    {
      q: 'How Will We Travel Between The Three Cities?',
      a: 'All intercity travel is done in comfortable AC cabs — sedan, Innova, or Tempo Traveller depending on group size. All vehicles are GPS-equipped with experienced drivers.',
    },
    {
      q: 'Why Are Varanasi, Prayagraj, And Ayodhya Considered So Culturally And Spiritually Significant?',
      a: 'Varanasi is one of the oldest living cities in the world and the spiritual capital of India. Prayagraj hosts the famous Triveni Sangam — confluence of three sacred rivers. Ayodhya is the birthplace of Lord Rama and home to the newly built Ram Mandir, one of the most significant temples in India.',
    },
    {
      q: 'Is It Safe To Travel To Varanasi, Ayodhya, And Prayagraj On This Tour?',
      a: 'Yes, absolutely. These are well-established pilgrimage destinations with good infrastructure. Our experienced guides and drivers ensure a safe and comfortable journey throughout.',
    },
    {
      q: 'Is 4 Days Enough For The Golden Triangle Spiritual Tour In Uttar Pradesh?',
      a: 'Yes, 4 days is a well-planned duration to cover the key highlights of all three cities. However, if you wish to explore deeper, we can customize the package for 5-6 days as well.',
    },
    {
      q: 'Is The Ganga Aarti Included In The Varanasi Itinerary?',
      a: 'Yes! Evening Ganga Aarti at Dashashwamedh Ghat with a boat ride is one of the highlights of this package and is included in the tour.',
    },
    {
      q: 'What Kind Of Hotels Are Provided In The Package?',
      a: 'We provide budget double-occupancy hotels in all three cities. Premium/luxury hotel upgrades are available at an additional cost.',
    },
  ]

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative h-56 sm:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1400&auto=format&fit=crop"
          alt="Golden Triangle Varanasi Ayodhya Prayagraj"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair leading-tight max-w-3xl">
            Golden Triangle – Varanasi, Ayodhya & Prayagraj Tour Package
          </h1>
          {/* Breadcrumb */}
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>›</span>
            <Link href="/packages" className="hover:text-white transition">Packages</Link>
            <span>›</span>
            <span className="text-white">Golden Triangle – Varanasi, Ayodhya & Prayagraj</span>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ══ LEFT CONTENT ══ */}
        <div className="lg:col-span-2 space-y-10">

          {/* Title + Intro */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package{' '}
              <span className="text-[#ea2330]">& Itinerary</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Embark on a spiritual and cultural journey with the{' '}
              <strong>Golden Triangle Tour Package that covers Varanasi, Ayodhya, and Prayagraj</strong>. These three cities
              in Uttar Pradesh are deeply rooted in Indian mythology, history, and spirituality, offering a unique blend of
              experiences for travelers.
            </p>
          </div>

          {/* Varanasi Highlights */}
          <div>
            <h3 className="text-xl font-bold text-[#ea2330] mb-3">Varanasi Highlights:</h3>
            <p className="text-gray-700 leading-relaxed">
              Varanasi is home to the revered <strong>Kashi Vishwanath Temple</strong> dedicated to Lord Shiva. Visitors can
              witness the enchanting <strong>Ganga Aarti at Dashashwamedh Ghat</strong>, a ritual honoring the sacred River
              Ganges. <strong>Sarnath</strong>, where Lord Buddha gave his first sermon, features the Dhamek Stupa and
              Sarnath Museum. A serene boat ride on the Ganges during sunrise or sunset offers stunning views of the ghats
              and temples. Other important temples in Varanasi include <strong>Sankat Mochan Hanuman Temple</strong>,{' '}
              <strong>Durga Temple</strong>, <strong>Bharat Mata Temple</strong>, and{' '}
              <strong>Banaras Hindu University (BHU)</strong>.
            </p>
          </div>

          {/* Ayodhya Highlights */}
          <div>
            <h3 className="text-xl font-bold text-[#ea2330] mb-3">Ayodhya Highlights:</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Ram Janmabhoomi</strong>, the birthplace of <strong>Lord Rama</strong>, is a site of immense religious
              significance featuring a newly constructed temple. <strong>Hanuman Garhi</strong>, a prominent temple dedicated
              to Lord Hanuman, offers panoramic city views from its hilltop location. The beautiful{' '}
              <strong>Kanak Bhawan temple</strong>, dedicated to Lord Rama and Goddess Sita, is known for its intricate
              architecture and peaceful ambiance. Visitors can also enjoy a serene stroll along the{' '}
              <strong>Saryu River</strong>, which holds great importance in Hindu mythology.
            </p>
          </div>

          {/* Prayagraj Highlights */}
          <div>
            <h3 className="text-xl font-bold text-[#ea2330] mb-3">Prayagraj Highlights:</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Triveni Sangam</strong>, the confluence of the Ganga, Yamuna, and mythical Saraswati rivers, is a
              sacred site where a dip is believed to cleanse sins. <strong>Allahabad Fort</strong>, built by Emperor Akbar,
              features exquisite Mughal architecture and houses the <strong>Patalpuri Temple</strong> and Ashoka Pillar.{' '}
              <strong>Anand Bhavan</strong>, the ancestral home of the Nehru family, is now a museum showcasing artifacts
              from the Indian freedom struggle. If visiting during the <strong>Kumbh Mela</strong>, you can witness one of
              the world's largest religious gatherings, celebrated with grand rituals and cultural events.
            </p>
          </div>

          {/* Day-wise Itinerary */}
          <div className="space-y-8">
            {/* Day 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 1 : Golden Triangle Tour{' '}
                  <span className="text-[#ea2330]">Kashi (Varanasi)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  On the first day of your tour, we will delve into Varanasi's fascinating history and culture. Our journey
                  begins with:
                </p>
                <ol className="space-y-1 text-sm text-gray-700">
                  <li><span className="font-bold">1.</span> Darshan at{' '}<span className="text-[#ea2330] font-medium">Shri Kashi Vishwanath Temple</span></li>
                  <li><span className="font-bold">2.</span> Darshan at{' '}<span className="text-[#ea2330] font-medium">Annapurna Temple</span></li>
                  <li><span className="font-bold">3.</span> Darshan at{' '}<span className="text-[#ea2330] font-medium">Baba Kal Kalbhairav Temple</span></li>
                  <li><span className="font-bold">4.</span> Explore local street & Local weavers area for handcrafted Banarasi sarees & handcrafted items.</li>
                  <li><span className="font-bold">5.</span> Enjoy{' '}<span className="text-[#ea2330] font-medium">Ganga Aarti</span> at the{' '}<span className="text-[#ea2330] font-medium">Dasaswamedh Ghat</span> with{' '}<span className="text-[#ea2330] font-medium">boat ride</span> in River Ganga.</li>
                </ol>
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop" alt="Ganga Aarti Varanasi" fill className="object-cover" />
              </div>
            </div>

            {/* Call CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition text-lg">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="relative h-52 rounded-xl overflow-hidden shadow order-2 md:order-1">
                <Image src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop" alt="Varanasi Ghats" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 2 : Golden Triangle Tour{' '}
                  <span className="text-[#ea2330]">Kashi (Varanasi)</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  On Day 2, our journey will commence with visits to the{' '}
                  <span className="text-[#ea2330] font-medium">Sankat Mochan Temple</span>, Durga Temple,{' '}
                  <span className="text-[#ea2330] font-medium">Tulsi Manas Mandir</span>, and{' '}
                  <strong>Banaras Hindu University</strong>, one of the oldest and largest universities in Asia. Afterward,
                  you can enjoy famous <strong>Kachori Sabji of Varanasi</strong>. Following breakfast, we will embark on a
                  tour of <span className="text-[#ea2330] font-medium">Sarnath</span>, a significant Buddhist site. Here, we
                  will visit the sacred <strong>Deer Park</strong>, where <strong><em>Lord Buddha delivered his first sermon after attaining enlightenment</em></strong>.
                  Among the impressive remains at Sarnath are the modern <strong>Dharmarajika Temple</strong>,{' '}
                  <strong>Chaukhandi Stupa</strong>, and <strong>Dhamek Stupa</strong>.
                </p>
              </div>
            </div>

            {/* Call CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition text-lg">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 3 : Golden Triangle Tour{' '}
                  <span className="text-[#ea2330]">Prayagraj (Allahabad)</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Hanuman Mandir</strong>: Darshan at Hanuman Mandir.</li>
                  <li><strong>Boat Ride & Holy bath in Sangam</strong>: Enjoy a peaceful boat ride on the Yamuna River & Sangam.</li>
                  <li><strong>Anand Bhavan</strong>: Explore the Nehru family museum showcasing their contributions to India's independence.</li>
                  <li><strong>Allahabad Fort</strong>: Visit the fort to see the Ashoka Pillar, Saraswati Koop, and Patalpuri Temple.</li>
                  <li><strong>Khusro Bagh</strong>: Stroll through this historic Mughal garden with beautiful tombs.</li>
                </ul>
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop" alt="Prayagraj Sangam" fill className="object-cover" />
              </div>
            </div>

            {/* Call CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition text-lg">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="relative h-52 rounded-xl overflow-hidden shadow order-2 md:order-1">
                <Image src="/Ayodhya.jpg" alt="Ayodhya" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 4 : Golden Triangle Tour{' '}
                  <span className="text-[#ea2330]">Ayodhya</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Ram Janmabhoomi Temple</strong>: Visit the birthplace of Lord Rama, an important pilgrimage site.</li>
                  <li><strong>Hanuman Garhi</strong>: Explore this ancient temple dedicated to Lord Hanuman, offering a panoramic view of the city.</li>
                  <li><strong>Kanak Bhawan</strong>: Visit this beautiful temple dedicated to Lord Rama and Sita, known for its stunning architecture.</li>
                  <li><strong>Dasharath Mahal</strong>: Visit Dasharath Mahal.</li>
                  <li><strong>Ramkatha Park</strong>: Relax and enjoy the serene environment of this park dedicated to the life of Lord Rama.</li>
                  <li><strong>Guptar Ghat</strong>: Visit this picturesque ghat on the Saryu River, believed to be the place where Lord Rama took his last journey.</li>
                  <li><strong>Evening Aarti at Saryu River</strong>: Conclude with the evening aarti, a spiritual experience on the riverbank.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Charges & Rates */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Charges & Rates For Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package
            </h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#ea2330] text-white">
                    <th className="py-3 px-6 text-left font-semibold tracking-wide">RATE</th>
                    <th className="py-3 px-6 text-left font-semibold tracking-wide">MIN PERSON</th>
                  </tr>
                </thead>
                <tbody>
                  {paxRates.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-6 text-gray-800 font-medium">{row.rate}</td>
                      <td className="py-3 px-6 text-gray-600">{row.pax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Temples Covered */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Temples Covered In Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {temples.map((t, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="relative h-36">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <p className="text-center text-xs font-medium text-gray-700 py-2.5 px-2">{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call CTA */}
          <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition text-lg">
            <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">FOR ANY ASSISTANCE RELATED TO GOLDEN TRIANGLE TOUR</span>
          </a>

          {/* Activities Covered */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Activities Covered In Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activities.map((a, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="relative h-36">
                    <Image src={a.img} alt={a.name} fill className="object-cover" />
                  </div>
                  <p className="text-center text-xs font-medium text-gray-700 py-2.5 px-2">{a.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cabs Available */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Cab Available For Booking In Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {cabs.map((c, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm text-center">
                  <div className="relative h-24 bg-gray-50">
                    <Image src={c.img} alt={c.name} fill className="object-contain p-2" />
                  </div>
                  <div className="py-2 px-1">
                    <p className="text-xs font-bold text-gray-800">{c.name}</p>
                    <p className="text-xs text-gray-500">({c.seats})</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="tel:+916388116241" className="mt-5 flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW & BOOK YOUR CAB</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Services We Provide Under Golden Triangle Varanasi, Ayodhya & Prayagraj Tour Package
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {services.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow transition">
                  <span className="text-4xl mb-2">{s.icon}</span>
                  <p className="text-xs font-bold text-gray-700 text-center">{s.label}</p>
                </div>
              ))}
            </div>
            <a href="tel:+916388116241" className="mt-5 flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">WE WILL PLAN EVERYTHING FOR YOU</span>
            </a>
          </div>

          {/* Inclusions */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Inclusion In Varanasi{' '}
              <span className="text-[#ea2330]">Golden Triangle Tour Package</span>
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Transportation: Sedan Car/AC Innova Car/AC Tempo Traveler as per number of person',
                'Meals: Breakfast',
                'Transfers: Return railway station/airport transfer and all sightseeing as per',
                'Vehicle: All tours and transfers on the specified vehicle type',
                'Expenses Covered: Toll taxes, parking, and fuel; applicable vehicle taxes, toll, parking fees, permit charges, etc.; interstate permit charges and driver\'s fee',
                'Taxes: All applicable taxes',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#ea2330] text-lg leading-none">⊙</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Exclusion In{' '}
              <span className="text-[#ea2330]">Golden Triangle Tour Package</span>
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Hotel Extras: Additional expenses at the hotel',
                'Meals: Lunch and Dinner',
                'Monument Entry Fees: Entry fees to monuments, museums, temples, etc.',
                'Personal Expenses: Shopping, tips, and other personal expenses',
                'GST: 5% GST applicable',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#ea2330] text-lg leading-none">⊙</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Golden Triangle Tour Package –{' '}
              <span className="text-[#ea2330]">Varanasi, Ayodhya & Prayagraj</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              Embark on a spiritually enriching journey with the <strong>Golden Triangle Tour Package</strong>, covering three
              of India's most sacred cities—<strong>Varanasi, Ayodhya, and Prayagraj</strong>. This divine triangle is not
              just a route but an experience that connects you with the cultural, spiritual, and mythological roots of India.
              It is an ideal package for devotees, heritage lovers, and anyone seeking peace, devotion, and insight into
              India's glorious past.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              <strong>Varanasi</strong>, also known as Kashi, is regarded as the spiritual capital of India. With its
              centuries-old temples, holy ghats, and the sacred Ganges flowing through, Varanasi offers a unique connection
              to the divine. The city's timeless aura makes it a must-visit destination for anyone exploring India's
              spiritual landscape.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              <strong>Ayodhya</strong>, the birthplace of Lord Rama, holds immense religious significance in Hinduism. This
              ancient city is filled with devotion, history, and symbolism. Every corner of Ayodhya echoes stories from the
              Ramayana, making it a spiritually powerful and culturally rich destination in the tour.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              <strong>Prayagraj</strong>, the city of Triveni Sangam—the confluence of Ganga, Yamuna, and the mystical
              Saraswati—is considered one of the holiest places in Hindu belief. Known for the Kumbh Mela and its historical
              landmarks, Prayagraj reflects the unity of devotion and tradition.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Choose the <strong>Golden Triangle Tour Package</strong> to witness the spiritual heartbeat of India. Offered
              by Yatra K Sathi, this journey promises comfort, heritage, and unforgettable experiences deeply rooted in
              India's sacred geography.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              FAQ : <span className="text-[#ea2330]">GOLDEN TRIANGLE VARANASI, AYODHYA & PRAYAGRAJ TOUR PACKAGE</span>
            </h2>
            <div className="mt-6 divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                  >
                    {faq.q}
                    <span className="ml-3 text-xl text-gray-400 shrink-0">{openFaq === i ? '↑' : '↓'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* ══ END LEFT CONTENT ══ */}

        {/* ══ RIGHT SIDEBAR ══ */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-4">

            {/* Pricing Card */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              {/* Package Visual */}
              <div className="relative h-48 bg-[#f5f0e8]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <p className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">Yatra K Sathi</p>
                  <p className="text-2xl font-extrabold text-[#ea2330] uppercase leading-tight">VARANASI</p>
                  <p className="text-sm font-bold text-gray-700 mt-1">3 NIGHT 4 DAYS TOUR PACKAGE</p>
                  <div className="mt-2 bg-[#ea2330] text-white text-xs font-bold px-4 py-1 rounded">
                    STARTING POINT: VARANASI
                  </div>
                  {/* City tags */}
                  <div className="mt-3 flex gap-3 text-xs font-semibold text-gray-700">
                    <div className="text-center">
                      <p className="font-bold">VARANASI</p>
                      <p className="text-gray-500">2 Day</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">AYODHYA</p>
                      <p className="text-gray-500">1 Day</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">PRAYAGRAJ</p>
                      <p className="text-gray-500">1 Day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusions chips */}
              <div className="bg-[#1a1a2e] px-4 py-3 space-y-1.5">
                {['CAB FOR SIGHTSEEING', 'BUDGET HOTEL (DOUBLE)', 'BOAT RIDE WITH GANGA AARTI'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white text-xs font-medium">
                    <span className="text-[#ea2330]">●</span> {item}
                  </div>
                ))}
              </div>

              {/* Pax Pricing */}
              <div className="p-4 space-y-2">
                {paxRates.map((r, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-gray-100 pb-1.5 last:border-0">
                    <span className="font-bold text-gray-800">{r.rate}</span>
                    <span className="text-gray-500">{r.pax}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 text-center pt-1">Note: Fooding Not included in this package</p>
              </div>

              {/* Booking CTA */}
              <div className="p-4 pt-0 space-y-3">
                <a
                  href="tel:+916388116241"
                  className="flex items-center justify-center gap-2 w-full bg-[#ea2330] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition text-sm"
                >
                  📞 FOR BOOKING &nbsp; +91-6388116241
                </a>
                <a
                  href="https://wa.me/916388116241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-green-600 transition text-sm"
                >
                  💬 Book on WhatsApp
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="border border-gray-200 rounded-2xl p-5 shadow">
              <h3 className="font-bold text-gray-800 mb-4 text-center">Send Enquiry</h3>
              {submitted ? (
                <div className="text-center py-4">
                  <p className="text-2xl mb-2">✅</p>
                  <p className="text-green-600 font-semibold text-sm">Enquiry sent! We'll call you back soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  />
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  />
                  <select
                    value={form.passengers}
                    onChange={e => setForm({ ...form, passengers: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  >
                    <option value="2">2 Pax – ₹12,999/person</option>
                    <option value="4">4 Pax – ₹10,999/person</option>
                    <option value="6">6 Pax – ₹9,999/person</option>
                    <option value="10">10 Pax – ₹8,999/person</option>
                    <option value="16">16 Pax – ₹8,499/person</option>
                  </select>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition text-sm disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
        {/* ══ END SIDEBAR ══ */}

      </div>
    </>
  )
}
