import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Ghats of Varanasi | Yatra K Sathi',
  description: 'Explore the famous ghats of Varanasi — Dashashwamedh, Manikarnika, Assi, Harishchandra and 80+ other ghats along the sacred Ganga.',
}

const ghats = [
  {
    name: 'Dashashwamedh Ghat',
    desc: 'The main ghat of Varanasi and the site of the spectacular Ganga Aarti every evening. One of the most sacred ghats, believed to be where Lord Brahma performed the Dashashwamedha sacrifice.',
    highlights: ['Ganga Aarti every evening', 'Most popular ghat', 'Boat rides available', 'Photography hotspot'],
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    badge: 'Most Famous',
    bestTime: 'Evening (6:00 PM - 7:30 PM)',
  },
  {
    name: 'Manikarnika Ghat',
    desc: 'The sacred cremation ghat of Varanasi where funeral pyres burn day and night. It is believed that those cremated here attain Moksha (liberation from the cycle of rebirth).',
    highlights: ['Sacred cremation site', 'Burns 24/7', 'Moksha is attained here', 'Lord Shiva whispers the Taraka mantra'],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    badge: 'Moksha Ghat',
    bestTime: 'Anytime (respectful attire required)',
  },
  {
    name: 'Assi Ghat',
    desc: 'Located at the confluence of the Ganga and Assi rivers, this ghat is famous for its peaceful morning yoga sessions, sunrise boat rides and vibrant cultural atmosphere.',
    highlights: ['Morning yoga classes', 'Sunrise boat rides', 'Peaceful atmosphere', 'Cafes & shops nearby'],
    image: 'https://images.unsplash.com/photo-1624553578747-c1f1cf65b0b8?q=80&w=800&auto=format&fit=crop',
    badge: null,
    bestTime: 'Early Morning (5:00 AM - 8:00 AM)',
  },
  {
    name: 'Harishchandra Ghat',
    desc: 'The second cremation ghat of Varanasi, named after the legendary king Harishchandra known for his absolute truthfulness and sacrifice. It is one of the oldest ghats.',
    highlights: ['Ancient cremation ghat', 'Named after King Harishchandra', 'Historic significance', 'Less crowded than Manikarnika'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    badge: null,
    bestTime: 'Evening',
  },
  {
    name: 'Man Mandir Ghat',
    desc: 'Built in 1600 by Raja Man Singh of Amber, this ghat features an ancient astronomical observatory (Jantar Mantar) on its terrace, built by Maharaja Jai Singh II.',
    highlights: ['17th century architecture', 'Ancient observatory', 'Beautiful architecture', 'Panoramic river views'],
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
    badge: null,
    bestTime: 'Morning or Evening',
  },
  {
    name: 'Tulsi Ghat',
    deity: null,
    desc: 'Named after the great saint poet Tulsidas, who wrote the Ramcharitmanas here. The ghat hosts the famous Sankat Mochan Sangit Samaroh music festival every year.',
    highlights: ['Associated with Tulsidas', 'Annual music festival', 'Historic significance', 'Tranquil atmosphere'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    badge: null,
    bestTime: 'Morning',
  },
]

export default function GhatsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🌊 Ghats of Varanasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Sacred <span className="text-[#ea2330]">Ghats</span> on the Ganga
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            84 ghats line the western bank of the Ganga in Varanasi — each with its own history, legend and ritual
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-300">
            <span>🌊 84 Ghats</span>
            <span>🚣 Boat Rides Available</span>
            <span>🌅 Sunrise & Sunset Views</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Ghats</span>
        </div>
      </div>

      {/* Ghats Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Famous Ghats of Varanasi</h2>
            <p className="text-gray-500">Explore the 84 ghats — every one has a unique story</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ghats.map((ghat) => (
              <div key={ghat.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition border border-gray-100">
                <div className="relative h-48">
                  <Image src={ghat.image} alt={ghat.name} fill className="object-cover" />
                  {ghat.badge && (
                    <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {ghat.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs">⏰ Best Time: {ghat.bestTime}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{ghat.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{ghat.desc}</p>
                  <ul className="space-y-1">
                    {ghat.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-gray-600 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea2330] shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boat Ride CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Experience the Ghats by Boat</h2>
          <p className="text-red-100 mb-6">
            A sunrise or sunset boat ride on the Ganga is the most magical experience in Varanasi.
            Book your private or group boat ride with us!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/boating" className="px-6 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              ⛵ Book Boat Ride
            </Link>
            <a href="tel:+916388116241" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#ea2330] transition">
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
