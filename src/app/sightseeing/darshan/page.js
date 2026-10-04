import Link from 'next/link'

export const metadata = {
  title: 'Darshan at Temples in Varanasi | Yatra K Sathi',
  description: 'Complete guide to temple darshan in Varanasi — timings, VIP darshan, special puja booking, and tips for Kashi Vishwanath and other temples.',
}

const darshans = [
  {
    temple: 'Kashi Vishwanath Temple',
    timings: [
      { session: 'Mangala Aarti', time: '3:00 AM – 4:00 AM' },
      { session: 'Darshan', time: '4:00 AM – 11:00 AM' },
      { session: 'Bhog Aarti', time: '11:30 AM – 12:00 PM' },
      { session: 'Evening Darshan', time: '4:00 PM – 7:00 PM' },
      { session: 'Shringaar Aarti', time: '7:00 PM – 8:00 PM' },
      { session: 'Shayana Aarti', time: '10:30 PM – 11:00 PM' },
    ],
    vipInfo: 'VIP darshan available via online booking on official website. Entry from multiple gates.',
    tips: ['Remove shoes and electronic items before entry', 'Photography is not permitted inside', 'Dress modestly (traditional attire preferred)', 'Avoid Mondays as crowds are very high'],
    icon: '🛕',
  },
  {
    temple: 'Sankat Mochan Temple',
    timings: [
      { session: 'Morning Darshan', time: '5:00 AM – 12:00 PM' },
      { session: 'Evening Darshan', time: '3:00 PM – 10:00 PM' },
    ],
    vipInfo: 'No VIP pass required. Queue management available during festivals.',
    tips: ['Famous for Besan Laddoo prasad', 'Tuesdays are very crowded', 'Peaceful atmosphere on weekdays', 'Located near BHU'],
    icon: '🙏',
  },
  {
    temple: 'Durga Temple (Durga Kund)',
    timings: [
      { session: 'Morning Darshan', time: '6:00 AM – 12:00 PM' },
      { session: 'Evening Darshan', time: '3:00 PM – 9:00 PM' },
    ],
    vipInfo: 'No prior booking needed. Special darshan during Navratri.',
    tips: ['Fridays are very busy', 'Watch out for monkeys near the temple', 'Adjacent Durga Kund is sacred for bathing', 'Best visited during Navratri'],
    icon: '🕉️',
  },
  {
    temple: 'Kalbhairav Temple',
    timings: [
      { session: 'Morning Darshan', time: '5:00 AM – 1:00 PM' },
      { session: 'Evening Darshan', time: '3:00 PM – 10:00 PM' },
    ],
    vipInfo: 'No special booking required. Quick darshan usually available.',
    tips: ['Liquor is offered as prasad here (unique tradition)', 'Visit before touring Varanasi for blessings', 'Located in the old city lanes', 'Take an auto from Godowlia Chowk'],
    icon: '🔱',
  },
]

const pujaServices = [
  { name: 'Rudrabhishek', duration: '1-2 hrs', price: '₹2,100 onwards', desc: 'Sacred bathing ritual of the Shivalinga with milk, honey, curd, ghee and water' },
  { name: 'Ganga Aarti (Personal)', duration: '30 mins', price: '₹501 onwards', desc: 'Attend the Ganga Aarti with your name announced in the ritual' },
  { name: 'Satyanarayan Katha', duration: '2-3 hrs', price: '₹3,100 onwards', desc: 'Complete Satyanarayan puja with katha recitation and prasad distribution' },
  { name: 'Pind Daan (Pitru Paksha)', duration: '2-4 hrs', price: '₹5,100 onwards', desc: 'Ancestral rituals performed on the ghats for the peace of departed souls' },
]

export default function DarshanPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[360px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🙏 Darshan at Temples
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Temple <span className="text-[#ea2330]">Darshan Guide</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Complete guide to darshan timings, VIP passes, puja booking and tips for all major temples in Varanasi
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Darshan at Temples</span>
        </div>
      </div>

      {/* Darshan Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Temple Darshan Timings</h2>
            <p className="text-gray-500">Plan your temple visits with these accurate timings</p>
          </div>
          <div className="space-y-8">
            {darshans.map((d) => (
              <div key={d.temple} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#ea2330] to-red-700 text-white p-4 flex items-center gap-3">
                  <span className="text-3xl">{d.icon}</span>
                  <h3 className="font-bold text-xl">{d.temple}</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Timings */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Darshan Timings
                    </h4>
                    <div className="space-y-2">
                      {d.timings.map((t) => (
                        <div key={t.session} className="flex justify-between text-sm">
                          <span className="text-gray-600">{t.session}</span>
                          <span className="font-medium text-gray-800 text-xs">{t.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* VIP Info */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      VIP Darshan
                    </h4>
                    <p className="text-gray-600 text-sm">{d.vipInfo}</p>
                  </div>
                  {/* Tips */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Visitor Tips
                    </h4>
                    <ul className="space-y-1">
                      {d.tips.map((tip) => (
                        <li key={tip} className="text-gray-600 text-xs flex gap-2">
                          <span className="text-[#ea2330] shrink-0">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Puja & Ritual Services</h2>
            <p className="text-gray-500">We arrange special pujas and rituals with experienced priests</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pujaServices.map((puja) => (
              <div key={puja.name} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800">{puja.name}</h3>
                  <span className="text-[#ea2330] font-bold text-sm">{puja.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{puja.desc}</p>
                <p className="text-gray-500 text-xs">⏱️ {puja.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:+916388116241"
              className="inline-block bg-[#ea2330] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition"
            >
              📞 Book Puja — +91 63881 16241
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
