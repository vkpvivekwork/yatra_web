'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DivyaDhamYatraPage() {
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
          message: `Divya Dham Yatra – Varanasi, Ayodhya, Prayagraj & Bodh Gaya | Passengers: ${form.passengers}`,
          source: 'divya_dham_yatra_page',
        }),
      })
    } catch (err) {}
    finally { setLoading(false); setSubmitted(true) }
  }

  const paxRates = [
    { rate: '₹17,999/Person', pax: '2 Pax' },
    { rate: '₹12,000/Person', pax: '4 Pax' },
    { rate: '₹14,000/Person', pax: '6 Pax' },
    { rate: '₹13,999/Person', pax: 'More than 6 Person' },
  ]

  const temples = [
    { name: 'Kashi Vishwanath Temple, Varanasi', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop' },
    { name: 'Annapurna Maa Temple, Varanasi', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Kal Bhairav Temple, Varanasi', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tulsi Manas Temple, Varanasi', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
    { name: 'Maa Vishalakshi Temple, Varanasi', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=400&auto=format&fit=crop' },
    { name: 'Annapurna Maa Temple', img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Birla Temple BHU (VT BHU), Varanasi', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tulsi Manas Temple', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sankat Mochan Temple, Varanasi', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=400&auto=format&fit=crop' },
    { name: 'Durga Maa Temple, Varanasi', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mahabodhi Temple BodhGaya', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ayodhya Ram Mandir', img: '/Ayodhya.jpg' },
    { name: 'Hanumangarhi Temple, Ayodhya', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
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
      q: 'What Is The Divya Dham Yatra Tour Package?',
      a: "The Divya Dham Yatra is a 4-night, 5-day spiritual pilgrimage tour covering four of India's most sacred cities — Varanasi (Kashi), Ayodhya, Prayagraj, and Bodh Gaya. This divine circuit is crafted for devotees and heritage lovers who wish to immerse themselves in India's spiritual roots, temple darshans, holy river rituals, and ancient history.",
    },
    {
      q: 'How Will We Travel Between The Four Cities?',
      a: 'All intercity travel is provided in comfortable AC cabs — Swift Dzire, Innova Crysta, or Tempo Traveller depending on group size. All vehicles are GPS-equipped with experienced drivers familiar with the pilgrimage routes.',
    },
    {
      q: 'Why Include Bodh Gaya In This Package?',
      a: 'Bodh Gaya is the place where Lord Buddha attained enlightenment under the Bodhi Tree. The Mahabodhi Temple is a UNESCO World Heritage Site and one of the most sacred Buddhist pilgrimage sites in the world. Combining it with the Hindu pilgrimage cities makes this a truly unique and complete spiritual journey.',
    },
    {
      q: 'Is 5 Days Enough For All Four Cities?',
      a: 'Yes, our 5-day itinerary is designed to cover the key highlights of all four cities efficiently. For a more leisurely pace or deeper exploration, we offer customized 6-7 day extensions as well.',
    },
    {
      q: 'Is The Ganga Aarti Boat Ride Included?',
      a: 'Yes! Evening Ganga Aarti at Dashashwamedh Ghat with a boat ride on the River Ganga is included as a highlight of Day 1 in Varanasi.',
    },
    {
      q: 'What Kind Of Accommodation Is Provided?',
      a: 'We provide budget double-occupancy hotels in all four cities. Premium and luxury upgrades are available at an additional cost. All hotels are clean, comfortable, and conveniently located near the main pilgrimage sites.',
    },
    {
      q: 'Can I Customize This Package?',
      a: 'Absolutely! We can customize the package for any group size, budget, or duration. Contact us on WhatsApp or call us to get a personalized itinerary.',
    },
  ]

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative h-56 sm:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1400&auto=format&fit=crop"
          alt="Divya Dham Yatra – Varanasi, Ayodhya, Prayagraj & Bodh Gaya"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair leading-tight max-w-3xl">
            Divya Dham Yatra – Varanasi, Ayodhya, Prayagraj & Bodh Gaya Tour Package
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-300 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>›</span>
            <Link href="/packages" className="hover:text-white transition">Packages</Link>
            <span>›</span>
            <span className="text-white">Divya Dham Yatra</span>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ══ LEFT CONTENT ══ */}
        <div className="lg:col-span-2 space-y-10">

          {/* Title + Intro */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Divya Dham Yatra – Varanasi, Ayodhya, Prayagraj & Bodhgaya Tour Package & Itinerary :{' '}
              <span className="text-[#ea2330]">4 Night 5 Day</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Embark on the Divya Dham Yatra Tour Package</strong>, a soul-enriching journey through the sacred cities of{' '}
              <strong>Varanasi, Ayodhya, Prayagraj, and Bodh Gaya</strong>. Rooted in Indian mythology, history, and spirituality,
              this tour offers a profound cultural and religious experience.
            </p>
          </div>

          {/* City Highlights */}
          <div className="space-y-6">
            {/* Varanasi */}
            <div>
              <h3 className="text-xl font-bold text-[#ea2330] mb-2">Varanasi (Kashi)</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Visit the holy <strong>Kashi Vishwanath Temple</strong>, witness the mesmerizing <strong>Ganga Aarti</strong> at
                Dashashwamedh Ghat, and explore <strong>Sarnath</strong>, where Buddha gave his first sermon. Other highlights
                include the <strong>Sankat Mochan Hanuman Temple</strong>, <strong>Durga Temple</strong>,{' '}
                <strong>Bharat Mata Temple</strong>, and <strong>BHU</strong>. Don't miss a serene boat ride on the Ganges at
                sunrise or sunset.
              </p>
            </div>

            {/* Ayodhya */}
            <div>
              <h3 className="text-xl font-bold text-[#ea2330] mb-2">Ayodhya</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Discover the divine <strong>Ram Janmabhoomi Temple</strong>, <strong>Hanuman Garhi</strong>, and the beautiful{' '}
                <strong>Kanak Bhawan</strong>. Enjoy peaceful moments along the <strong>Saryu River</strong>, deeply revered in
                Hindu tradition. Visit <strong>Dasharath Mahal</strong>, <strong>Ramkatha Park</strong>, and{' '}
                <strong>Guptar Ghat</strong> for a complete spiritual experience.
              </p>
            </div>

            {/* Prayagraj */}
            <div>
              <h3 className="text-xl font-bold text-[#ea2330] mb-2">Prayagraj</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Take a holy dip at <strong>Triveni Sangam</strong>, explore the historic <strong>Allahabad Fort</strong>,{' '}
                <strong>Patalpuri Temple</strong>, <strong>Ashoka Pillar</strong>, and visit <strong>Anand Bhavan</strong>, home
                of the Nehru family. Experience the grandeur of <strong>Kumbh Mela</strong> if visiting during its cycle.
              </p>
            </div>

            {/* Bodh Gaya */}
            <div>
              <h3 className="text-xl font-bold text-[#ea2330] mb-2">Bodh Gaya</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The place where <strong>Lord Buddha attained enlightenment under the Bodhi Tree</strong>. Visit the{' '}
                <strong>Mahabodhi Temple</strong>, a UNESCO World Heritage Site, and explore nearby monasteries and spiritual
                centers that make Bodh Gaya a global Buddhist pilgrimage hub.
              </p>
            </div>
          </div>

          {/* Day-wise Itinerary */}
          <div className="space-y-8">

            {/* Day 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 1 : Golden Quadrilateral Tour –{' '}
                  <span className="text-[#ea2330]">Kashi (Varanasi)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  On the first day of your tour, we will delve into Varanasi's fascinating history and culture. Our journey begins with:
                </p>
                <ol className="space-y-1.5 text-sm text-gray-700">
                  <li><strong>1.</strong> Darshan at <span className="text-[#ea2330] font-medium">Shri Kashi Vishwanath Temple</span></li>
                  <li><strong>2.</strong> Darshan at <span className="text-[#ea2330] font-medium">Annapurna Temple</span></li>
                  <li><strong>3.</strong> Darshan at <span className="text-[#ea2330] font-medium">Baba Kal Kalbhairav Temple</span></li>
                  <li><strong>4.</strong> Explore local street & Local weavers area for handcrafted Banarasi sarees & handcrafted items.</li>
                  <li><strong>5.</strong> Enjoy <span className="text-[#ea2330] font-medium">Ganga Aarti</span> at the <span className="text-[#ea2330] font-medium">Dasaswamedh Ghat</span> with <span className="text-[#ea2330] font-medium">boat ride</span> in River Ganga.</li>
                </ol>
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop" alt="Ganga Aarti Varanasi" fill className="object-cover" />
              </div>
            </div>

            {/* CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="relative h-52 rounded-xl overflow-hidden shadow order-2 md:order-1">
                <Image src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop" alt="Kashi Vishwanath" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 2 : Golden Quadrilateral Tour –{' '}
                  <span className="text-[#ea2330]">Kashi (Varanasi)</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  On Day 2, our journey will commence with visits to the{' '}
                  <span className="text-[#ea2330] font-medium">Sankat Mochan Temple</span>, Durga Temple,{' '}
                  <span className="text-[#ea2330] font-medium">Tulsi Manas Mandir</span>, and{' '}
                  <strong>Banaras Hindu University</strong>, one of the oldest and largest universities in Asia. Afterward,
                  enjoy famous <strong>Kachori Sabji of Varanasi</strong>. Following breakfast, we will embark on a tour of{' '}
                  <span className="text-[#ea2330] font-medium">Sarnath</span>, a significant Buddhist site. Here, we will
                  visit the sacred <strong>Deer Park</strong>, where <strong><em>Lord Buddha delivered his first sermon after attaining enlightenment</em></strong>.
                  Among the impressive remains are the <strong>Dharmarajika Temple</strong>,{' '}
                  <strong>Chaukhandi Stupa</strong>, and <strong>Dhamek Stupa</strong>.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 3 : Golden Quadrilateral Tour –{' '}
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
                <Image src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop" alt="Prayagraj Sangam" fill className="object-cover" />
              </div>
            </div>

            {/* CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="relative h-52 rounded-xl overflow-hidden shadow order-2 md:order-1">
                <Image src="/Ayodhya.jpg" alt="Ayodhya Ram Mandir" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 4 : Golden Quadrilateral Tour –{' '}
                  <span className="text-[#ea2330]">Ayodhya</span>
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
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

            {/* CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>

            {/* Day 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Day 5 : Golden Quadrilateral Tour –{' '}
                  <span className="text-[#ea2330]">Bodhgaya</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Mahabodhi Temple:</strong> Visit this UNESCO World Heritage Site where Lord Buddha attained enlightenment under the Bodhi Tree.</li>
                  <li><strong>Bodhi Tree & Vajrasana:</strong> Meditate under the sacred Bodhi Tree and see the Vajrasana (Diamond Throne), symbolizing Buddha's enlightenment.</li>
                  <li><strong>Great Buddha Statue:</strong> Witness the majestic 80-foot statue of Lord Buddha in meditation posture, surrounded by smaller statues.</li>
                  <li><strong>Thai Monastery:</strong> Explore this beautifully designed temple built in traditional Thai architecture with golden décor and peaceful surroundings.</li>
                  <li><strong>Tibetan Monastery:</strong> Visit the colorful monastery featuring prayer wheels, Buddha idols, and a serene spiritual environment.</li>
                  <li><strong>Japanese Temple & 80-Foot Buddha:</strong> Admire Japanese-style architecture and peaceful gardens surrounding the giant Buddha statue.</li>
                  <li><strong>Indosan Nippon Japanese Temple:</strong> Appreciate the wooden carvings and artwork that narrate Buddha's life in this serene Japanese temple.</li>
                  <li><strong>Chinese Temple:</strong> Discover the serene Chinese temple with vibrant interiors and a tranquil prayer hall.</li>
                  <li><strong>Archaeological Museum Bodhgaya:</strong> Explore Buddhist relics, sculptures, and ancient artifacts related to Bodhgaya's rich history.</li>
                </ul>
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" alt="Bodh Gaya Buddha" fill className="object-cover" />
              </div>
            </div>

            {/* CTA */}
            <a href="tel:+916388116241" className="flex items-center justify-center gap-3 bg-[#ea2330] text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW FOR DETAILS</span>
            </a>
          </div>

          {/* Charges & Rates */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Charges & Rates For{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
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
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-5">
              Temples Covered In{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
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
            <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">FOR ANY ASSISTANCE RELATED TO GOLDEN QUADRILATERAL TOUR</span>
          </a>

          {/* Activities Covered */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-5">
              Activities Covered In{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
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

            {/* Green CTA */}
            <a href="tel:+916388116241" className="mt-5 flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-700 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">CALL NOW & TALK TO OUR EXPERT</span>
            </a>
          </div>

          {/* Cabs Available */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-5">
              Cab Available For Booking In{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
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
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-5">
              Services We Provide Under{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {services.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow transition">
                  <span className="text-4xl mb-2">{s.icon}</span>
                  <p className="text-xs font-bold text-gray-700 text-center">{s.label}</p>
                </div>
              ))}
            </div>
            <a href="tel:+916388116241" className="mt-5 flex items-center justify-center gap-3 bg-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-800 transition">
              <span>📞</span> CALL – 6388116241 <span className="text-sm font-normal opacity-90">WE WILL PLAN EVERYTHING FOR YOU</span>
            </a>
          </div>

          {/* Inclusions */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Inclusion In Varanasi{' '}
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
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
              <span className="text-[#ea2330]">Golden Quadrilateral Tour</span>
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Hotel Extras: Additional expenses at the hotel',
                'Activities: Boat rides, temple rituals',
                'Personal Expenses: Personal purchases, ticket fares',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#ea2330] text-lg leading-none">⊙</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description Sections */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-5">
            <h2 className="text-xl font-bold text-gray-900">
              Golden Quadrilateral Tour Package –{' '}
              <span className="text-[#ea2330]">Varanasi, Ayodhya, Prayagraj & BodhGaya</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Embark on the <strong>Divya Dham Yatra</strong>, a spiritually enriching pilgrimage through four of India's holiest
              cities—<strong>Varanasi, Ayodhya, Prayagraj</strong>, and <strong>Bodh Gaya</strong>. This divine circuit is more
              than just a journey; it's a deep spiritual experience that connects you to India's ancient wisdom, religious roots,
              and cultural heritage. Perfect for devotees, seekers of peace, and heritage travelers, the Divya Dham Yatra offers
              a soul-touching exploration of India's sacred geography.
            </p>

            <div>
              <h3 className="text-lg font-bold text-[#ea2330] mb-2">Varanasi – The Spiritual Heart of India</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Also known as <strong>Kashi</strong>, Varanasi is the oldest living city in the world. Visit the revered{' '}
                <strong>Kashi Vishwanath Temple</strong>, witness the breathtaking <strong>Ganga Aarti</strong> at
                Dashashwamedh Ghat, and take a holy dip in the <strong>Ganges</strong>. Explore landmarks like{' '}
                <strong>Sarnath</strong>, <strong>Sankat Mochan Hanuman Temple</strong>, and experience the mysticism that
                defines this eternal city.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#ea2330] mb-2">Ayodhya – The Birthplace of Lord Ram</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Walk the divine path in <strong>Ayodhya</strong>, the sacred birthplace of <strong>Lord Ram</strong>. With
                landmarks like <strong>Ram Janmabhoomi</strong>, <strong>Hanuman Garhi</strong>, and{' '}
                <strong>Kanak Bhawan</strong>, Ayodhya brings alive the stories of the <strong>Ramayana</strong>. Enjoy
                spiritual serenity on the banks of the <strong>Saryu River</strong>, where devotion fills the air.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#ea2330] mb-2">Prayagraj – The Land of the Holy Confluence</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                At the sacred <strong>Triveni Sangam</strong>, where the <strong>Ganga, Yamuna</strong>, and{' '}
                <strong>Saraswati</strong> meet, cleanse your soul with a holy dip. Explore the ancient{' '}
                <strong>Allahabad Fort</strong>, <strong>Anand Bhavan</strong>, and witness the spiritual vibrancy of{' '}
                <strong>Kumbh Mela</strong> (held every 12 years). Prayagraj is a city where devotion, history, and
                tradition converge.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#ea2330] mb-2">Bodh Gaya – Where Buddha Attained Enlightenment</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Bodh Gaya is the most sacred site in Buddhism — the place where <strong>Siddhartha Gautama</strong> attained
                enlightenment beneath the <strong>Bodhi Tree</strong>. The magnificent <strong>Mahabodhi Temple</strong>, a
                UNESCO World Heritage Site, stands as a beacon of peace and wisdom. Surrounding monasteries from Thailand,
                Japan, China, and Tibet add a global spiritual flavor to this timeless destination.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              FAQ :{' '}
              <span className="text-[#ea2330]">DIVYA DHAM YATRA TOUR PACKAGE</span>
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

            {/* Divy Dham Yatra Card */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              {/* Card Header */}
              <div className="bg-[#f9f5f0] px-4 pt-4 pb-2 text-center">
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Yatra K Sathi</p>
                <p className="text-xl font-extrabold text-[#ea2330]">Divy Dham Yatra</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">4 Night 5 Day Pilgrimage</p>
              </div>

              {/* 2x2 City Grid */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-[#f9f5f0]">
                {[
                  { city: 'Kashi', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop' },
                  { city: 'Ayodhya', img: '/Ayodhya.jpg' },
                  { city: 'Prayagraj', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop' },
                  { city: 'Bodh Gaya', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&auto=format&fit=crop' },
                ].map((item) => (
                  <div key={item.city} className="rounded-lg overflow-hidden border-2 border-yellow-400">
                    <div className="relative h-24">
                      <Image src={item.img} alt={item.city} fill className="object-cover" />
                    </div>
                    <p className="text-center text-xs font-bold text-gray-700 py-1.5 bg-white">{item.city}</p>
                  </div>
                ))}
              </div>

              {/* Yellow Call Bar */}
              <div className="bg-yellow-400 px-3 py-2.5 text-center">
                <p className="text-sm font-bold text-gray-900">📞 Call Now to Book Your Package : +91-6388116241</p>
              </div>

              {/* Blue CALL Button */}
              <a href="tel:+916388116241" className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3.5 px-4 hover:bg-blue-800 transition">
                <span>📞</span>
                <div className="text-center">
                  <p className="font-bold text-sm">CALL – 6388116241</p>
                  <p className="text-xs opacity-80">CALL NOW TO BOOK YOUR PACKAGE</p>
                </div>
              </a>
            </div>

            {/* Pricing Card */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow">
              <div className="bg-[#ea2330] p-4 text-white text-center">
                <p className="text-xs opacity-80 mb-1">Starting from</p>
                <p className="text-3xl font-bold">₹13,999</p>
                <p className="text-xs opacity-80">per person (group 6+)</p>
              </div>
              <div className="p-4 space-y-2">
                {paxRates.map((r, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-gray-100 pb-1.5 last:border-0">
                    <span className="font-bold text-gray-800">{r.rate}</span>
                    <span className="text-gray-500 text-xs">{r.pax}</span>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="bg-[#1a1a2e] px-4 py-3 space-y-1.5">
                {['CAB FOR SIGHTSEEING', 'BUDGET HOTEL (DOUBLE)', 'BOAT RIDE WITH GANGA AARTI', 'BREAKFAST INCLUDED'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white text-xs font-medium">
                    <span className="text-[#ea2330]">●</span> {item}
                  </div>
                ))}
              </div>

              {/* Booking Buttons */}
              <div className="p-4 space-y-3">
                <a href="tel:+916388116241" className="flex items-center justify-center gap-2 w-full bg-[#ea2330] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition text-sm">
                  📞 FOR BOOKING &nbsp; +91-6388116241
                </a>
                <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-green-600 transition text-sm">
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
                  <input required type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <select value={form.passengers} onChange={e => setForm({ ...form, passengers: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
                    <option value="2">2 Pax – ₹17,999/person</option>
                    <option value="4">4 Pax – ₹12,000/person</option>
                    <option value="6">6 Pax – ₹14,000/person</option>
                    <option value="7">More than 6 – ₹13,999/person</option>
                  </select>
                  <button type="submit" disabled={loading} className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition text-sm disabled:opacity-60">
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
