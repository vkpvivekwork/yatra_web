import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Festivals of Varanasi | Yatra K Sathi',
  description: 'Experience the vibrant festivals of Varanasi — Dev Deepawali, Ganga Mahotsav, Holi, Mahashivratri and many more celebrations.',
}

const festivals = [
  {
    name: 'Dev Deepawali',
    month: 'November (Kartik Purnima)',
    desc: 'The festival of gods — all 84 ghats are lit up with over a million earthen diyas (lamps). The entire Ganga banks glow magnificently. This is considered more grand than Diwali itself.',
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    badge: 'Most Spectacular',
    tips: 'Book accommodations 3-6 months in advance as this is peak season',
  },
  {
    name: 'Ganga Mahotsav',
    month: 'November (5 days before Dev Deepawali)',
    desc: 'A 5-day cultural festival celebrating the Ganga river featuring classical music, dance, boat processions, and the grand Ganga Aarti. Artists from across India perform here.',
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
    badge: 'Cultural Festival',
    tips: 'Evening boat rides give the best views of the celebrations',
  },
  {
    name: 'Mahashivratri',
    month: 'February / March',
    desc: "Varanasi's biggest festival — Lord Shiva's night. The Kashi Vishwanath temple sees lakhs of pilgrims. All-night celebrations, special abhishek (ritual bathing of Shivalinga) and massive crowds.",
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    badge: 'Grand Celebration',
    tips: 'Arrive early for darshan as lines can be 10-12 hours long',
  },
  {
    name: 'Holi (Rang Bhari Ekadashi)',
    month: 'March',
    desc: "Varanasi celebrates Holi uniquely — starting with Rang Bhari Ekadashi where Lord Shiva plays Holi at Kashi Vishwanath. The burning ghats also have a unique 'Masaan Holi' celebration.",
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop',
    badge: null,
    tips: 'Wear clothes you do not mind getting colored',
  },
  {
    name: 'Nag Nathaiya',
    month: 'October / November (Kartik Purnima)',
    desc: 'A unique Varanasi festival where a child dressed as Lord Krishna enacts the subduing of the Nag (serpent) Kaliya. Performed on boats in the middle of the Ganga.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    badge: null,
    tips: 'Book a boat in advance for the best view',
  },
  {
    name: 'Budh Purnima (Buddha Jayanti)',
    month: 'April / May',
    desc: 'Celebrated grandly at Sarnath, the birthplace of Buddhism (where Buddha gave his first sermon). Thousands of Buddhist monks and devotees from across the world gather here.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    badge: null,
    tips: 'Visit Sarnath Museum on this day for special exhibitions',
  },
]

export default function FestivalsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🪔 Festivals of Varanasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="text-[#ea2330]">Festivals</span> of the Holy City
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Varanasi celebrates every festival with unmatched devotion and grandeur — plan your trip around these magical events
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Festivals</span>
        </div>
      </div>

      {/* Festivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Major Festivals of Varanasi</h2>
            <p className="text-gray-500">Plan your visit during these spectacular celebrations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivals.map((fest) => (
              <div key={fest.name} className="flex flex-col sm:flex-row gap-0 bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition border border-gray-100">
                <div className="relative sm:w-48 h-48 sm:h-auto shrink-0">
                  <Image src={fest.image} alt={fest.name} fill className="object-cover" />
                  {fest.badge && (
                    <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {fest.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-800 text-lg">{fest.name}</h3>
                    </div>
                    <p className="text-[#ea2330] text-xs font-medium mb-2">📅 {fest.month}</p>
                    <p className="text-gray-600 text-sm mb-3">{fest.desc}</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-700 text-xs"><span className="font-semibold">💡 Tip:</span> {fest.tips}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Plan Your Festival Trip to Varanasi</h2>
          <p className="text-red-100 mb-6">We offer special festival tour packages with hotel, cab and guide</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/packages" className="px-6 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              View Tour Packages
            </Link>
            <a href="tel:+916388116241" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#ea2330] transition">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
