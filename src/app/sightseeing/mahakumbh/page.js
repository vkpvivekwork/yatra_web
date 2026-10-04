import Link from 'next/link'

export const metadata = {
  title: 'Mahakumbh 2025 - Important Snan Dates | Yatra K Sathi',
  description: 'Complete guide to Mahakumbh 2025 at Prayagraj — Shahi Snan dates, Amrit Snan schedule, how to reach and accommodation options.',
}

const snanDates = [
  { date: '13 January 2025', occasion: 'Makar Sankranti', type: 'Shahi Snan (Amrit Snan)', importance: 'Most important — lakhs take a holy dip', badge: 'Amrit Snan' },
  { date: '14 January 2025', occasion: 'Makar Sankranti (continued)', type: 'Special Snan', importance: 'Continuation of Makar Sankranti bathing rituals', badge: null },
  { date: '29 January 2025', occasion: 'Mauni Amavasya', type: 'Shahi Snan (Amrit Snan)', importance: 'Biggest snan of Kumbh — estimated 10 crore+ pilgrims', badge: 'Biggest Snan' },
  { date: '3 February 2025', occasion: 'Basant Panchami', type: 'Shahi Snan (Amrit Snan)', importance: 'Third major Amrit Snan of Mahakumbh', badge: 'Amrit Snan' },
  { date: '12 February 2025', occasion: 'Maghi Purnima', type: 'Major Snan', importance: 'Full moon bathing — considered highly auspicious', badge: null },
  { date: '26 February 2025', occasion: 'Maha Shivratri', type: 'Final Snan', importance: 'Last major snan marking the end of Mahakumbh 2025', badge: 'Last Day' },
]

const akharas = [
  'Juna Akhara', 'Niranjani Akhara', 'Mahanirvani Akhara', 'Atal Akhara',
  'Avahaan Akhara', 'Agni Akhara', 'Anand Akhara', 'Nirmohi Ani Akhara',
  'Digambar Ani Akhara', 'Nirvani Ani Akhara', 'Vaishnav Bairagi Akhara',
  'Panch Dasha Nam Juna Akhara',
]

const faqs = [
  {
    q: 'Where is Mahakumbh 2025 being held?',
    a: 'Mahakumbh 2025 is being held at Prayagraj at the Triveni Sangam (the confluence of the Ganga, Yamuna, and Saraswati rivers). Prayagraj is only 125 km from Varanasi.',
  },
  {
    q: 'How can I travel from Varanasi to Prayagraj?',
    a: 'We provide cab and taxi services from Varanasi to Prayagraj. Train service is also available (approximately 2-3 hours). By cab, the journey takes approximately 2.5 hours.',
  },
  {
    q: 'What is the best time to take a ritual bath (snan)?',
    a: 'Brahma Muhurat (4 AM - 6 AM) is considered the most sacred time for bathing. During the Shahi Snan days, the grand procession of the Akharas is followed by the general bathing period.',
  },
  {
    q: 'Is accommodation available?',
    a: 'We can book tent cities (Swiss tents), hotels, and hostels (dharamshalas) for you in Prayagraj. Advance booking is essential because demand during Mahakumbh is extremely high.',
  },
]

export default function MahakumbhPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[400px] flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #1a0a00 100%)' }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, #ea2330 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-amber-500/20 border border-amber-400 text-amber-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🕉️ Mahakumbh 2025 — Prayagraj
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Mahakumbh <span className="text-amber-400">Snan Dates 2025</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            The world's largest religious gathering — at the Triveni Sangam in Prayagraj.<br/>
            13 January to 26 February 2025
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-300">
            <span>📅 45 Days</span>
            <span>🙏 40+ Crore Pilgrims Expected</span>
            <span>🌊 3 Sacred Rivers</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Mahakumbh Snan Dates</span>
        </div>
      </div>

      {/* Snan Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Mahakumbh 2025 — Snan Dates</h2>
            <p className="text-gray-500">Important bathing dates during Mahakumbh at Prayagraj</p>
          </div>
          <div className="space-y-4">
            {snanDates.map((snan, i) => (
              <div key={i} className={`flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border-2 ${
                snan.badge ? 'border-[#ea2330] bg-red-50' : 'border-gray-200 bg-white'
              }`}>
                <div className="sm:w-44 shrink-0">
                  <p className="font-bold text-gray-800 text-lg">{snan.date}</p>
                  {snan.badge && (
                    <span className="inline-block mt-1 bg-[#ea2330] text-white text-xs px-2 py-0.5 rounded-full">{snan.badge}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{snan.occasion}</h3>
                  <p className="text-[#ea2330] text-sm font-medium mb-1">{snan.type}</p>
                  <p className="text-gray-600 text-sm">{snan.importance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Akharas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 font-playfair mb-6 text-center">13 Major Akharas in Mahakumbh</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {akharas.map((a) => (
              <div key={a} className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm text-gray-700 hover:border-[#ea2330] transition">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 font-playfair mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2 flex gap-2">
                  <span className="text-[#ea2330] shrink-0">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Book Your Mahakumbh Journey</h2>
          <p className="text-red-100 mb-6">Varanasi + Prayagraj Mahakumbh combo package available — hotels, cab, guide everything included</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/packages" className="px-6 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              View Tour Packages
            </Link>
            <a href="tel:+916388116241" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#ea2330] transition">
              📞 +91 63881 16241
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
