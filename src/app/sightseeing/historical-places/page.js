import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Historical Places in Varanasi | Yatra K Sathi',
  description: 'Explore the historical places of Varanasi — Ramnagar Fort, Sarnath, Chunar Fort, Alamgir Mosque and more ancient monuments.',
}

const places = [
  {
    name: 'Sarnath',
    period: '3rd Century BC',
    desc: "Where Lord Buddha gave his first sermon after attaining enlightenment. Home to the magnificent Dhamek Stupa, Chaukhandi Stupa, Ashoka Pillar (with India's national emblem) and an excellent archaeological museum.",
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    badge: 'UNESCO Heritage',
    distance: '10 km from Varanasi',
    highlights: ['Dhamek Stupa', 'Archaeological Museum', 'Ashoka Pillar', 'Buddhist Temples'],
  },
  {
    name: 'Ramnagar Fort',
    period: '18th Century (1750 AD)',
    desc: 'Built by the Maharaja of Kashi, this sandstone fort stands on the eastern bank of the Ganga. It houses the Veda Vyasa Temple, Durga Temple, and a remarkable museum with vintage cars, royal palanquins, and ancient clocks.',
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
    badge: null,
    distance: '14 km from Varanasi',
    highlights: ['Vintage car collection', 'Royal museum', 'Evening Ramlila', 'Ganga views'],
  },
  {
    name: 'Chunar Fort',
    period: '16th Century',
    desc: "One of India's oldest and most strategically important forts, located 23 km from Varanasi on the banks of the Ganga. It was used by Humayun, Sher Shah Suri, Akbar, and later the British.",
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    badge: null,
    distance: '23 km from Varanasi',
    highlights: ['Mughal architecture', 'Ganga river views', 'British era structures', 'Ancient well'],
  },
  {
    name: 'Alamgir Mosque (Beni Madhav Ka Darera)',
    period: '17th Century (Aurangzeb era)',
    desc: 'Built by Mughal Emperor Aurangzeb on the foundations of a Vishnu temple at Panchganga Ghat. The mosque features a fascinating blend of Hindu and Mughal architectural styles.',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop',
    badge: null,
    distance: 'Panchganga Ghat',
    highlights: ['Indo-Islamic architecture', 'River views', 'Aurangzeb era history'],
  },
  {
    name: 'Jantar Mantar (Man Mandir Observatory)',
    period: '18th Century (1710 AD)',
    desc: 'An ancient astronomical observatory built by Maharaja Jai Singh II at Man Mandir Ghat. One of five Jantar Mantar observatories in India, used for measuring time, celestial positions and eclipses.',
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    badge: null,
    distance: 'Man Mandir Ghat',
    highlights: ['Astronomical instruments', '18th century science', 'Ghat views', 'Historical significance'],
  },
  {
    name: 'Bharata Kala Bhavana Museum',
    period: 'Established 1920',
    desc: "One of India's finest museums, located on the BHU campus. Houses over 1,00,000 artifacts including rare paintings, sculptures, textiles, ancient maps of Varanasi, and the personal belongings of Mahatma Gandhi.",
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Museum',
    distance: 'BHU Campus',
    highlights: ['1,00,000+ artifacts', 'Ancient Varanasi maps', 'Rare paintings', 'Gandhi artifacts'],
  },
]

export default function HistoricalPlacesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🏰 Historical Places
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="text-[#ea2330]">Historical</span> Places of Varanasi
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Varanasi is one of the world's oldest continuously inhabited cities — discover 3,000+ years of history
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-300">
            <span>🏛️ 3,000+ Years Old</span>
            <span>🗿 Ancient Monuments</span>
            <span>📜 Rich History</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Historical Places</span>
        </div>
      </div>

      {/* Places */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Must-Visit Historical Places</h2>
            <p className="text-gray-500">From ancient Buddhist sites to Mughal forts and royal museums</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <div key={place.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition border border-gray-100">
                <div className="relative h-48">
                  <Image src={place.image} alt={place.name} fill className="object-cover" />
                  {place.badge && (
                    <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {place.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs">📍 {place.distance}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{place.name}</h3>
                  <p className="text-[#ea2330] text-xs font-medium mb-2">🏛️ {place.period}</p>
                  <p className="text-gray-600 text-sm mb-3">{place.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {place.highlights.map((h) => (
                      <span key={h} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Book a Heritage Tour of Varanasi</h2>
          <p className="text-red-100 mb-6">Expert guides will bring history to life with stories and details you won't find in books</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/packages" className="px-6 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              View Tour Packages
            </Link>
            <Link href="/contact" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#ea2330] transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
