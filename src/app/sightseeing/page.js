import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sightseeing in Varanasi | Yatra K Sathi',
  description: 'Explore the best sightseeing places in Varanasi — temples, ghats, historical places, activities, festivals and more with Yatra K Sathi.',
}

const categories = [
  {
    title: 'Temples',
    desc: 'Visit the sacred temples of Kashi — Kashi Vishwanath, Sankat Mochan, Durga Temple and more.',
    icon: '🛕',
    href: '/sightseeing/temples',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Ghats',
    desc: 'Experience the divine ghats of Varanasi — Dashashwamedh, Manikarnika, Assi Ghat and many more.',
    icon: '🌊',
    href: '/sightseeing/ghats',
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Activities',
    desc: 'Boat rides, Ganga Aarti, Banarasi silk shopping, yoga classes and much more to do in Varanasi.',
    icon: '🎭',
    href: '/sightseeing/activities',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Festivals',
    desc: 'Celebrate Dev Deepawali, Ganga Mahotsav, Holi and countless vibrant festivals of Varanasi.',
    icon: '🪔',
    href: '/sightseeing/festivals',
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Historical Places',
    desc: 'Explore Ramnagar Fort, Sarnath, Chunar Fort and the rich history of the oldest city in the world.',
    icon: '🏰',
    href: '/sightseeing/historical-places',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Darshan at Temples',
    desc: 'Temple timings, darshan procedures, special puja booking and VIP darshan information.',
    icon: '🙏',
    href: '/sightseeing/darshan',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Mahakumbh Snan Dates',
    desc: 'Important Snan dates and Shahi Snan schedule for Mahakumbh at Prayagraj.',
    icon: '🕉️',
    href: '/sightseeing/mahakumbh',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
  },
]

const topAttractions = [
  { name: 'Kashi Vishwanath Temple', type: 'Temple', rating: '4.9', visits: '50,000+/day' },
  { name: 'Dashashwamedh Ghat', type: 'Ghat', rating: '4.8', visits: '10,000+/day' },
  { name: 'Sarnath', type: 'Historical', rating: '4.7', visits: '5,000+/day' },
  { name: 'Ganga Aarti', type: 'Activity', rating: '5.0', visits: '8,000+/evening' },
  { name: 'Ramnagar Fort', type: 'Historical', rating: '4.5', visits: '2,000+/day' },
  { name: 'Sankat Mochan Temple', type: 'Temple', rating: '4.8', visits: '15,000+/day' },
]

export default function SightseeingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🗺️ Explore Varanasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Sightseeing in <span className="text-[#ea2330]">Varanasi</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Discover the spiritual capital of India — temples, ghats, history, culture and unforgettable experiences
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Explore by Category</h2>
            <p className="text-gray-500">Everything Varanasi has to offer</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{cat.desc}</p>
                  <div className="mt-3 flex items-center text-[#ea2330] text-sm font-semibold">
                    Explore
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Top Attractions</h2>
            <p className="text-gray-500">Most visited places in Varanasi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topAttractions.map((place) => (
              <div key={place.name} className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#ea2330] hover:shadow-md transition">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#ea2330] font-bold text-sm">⭐ {place.rating}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{place.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{place.type} • {place.visits} visitors</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair mb-3">Plan Your Varanasi Visit</h2>
          <p className="text-red-100 mb-6">Let us arrange the perfect sightseeing tour for you</p>
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
