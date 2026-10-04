import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Temples in Varanasi | Yatra K Sathi',
  description: 'Visit the sacred temples of Varanasi — Kashi Vishwanath, Sankat Mochan, Durga Temple, Kalbhairav and more. Book your temple tour with Yatra K Sathi.',
}

const temples = [
  {
    name: 'Kashi Vishwanath Temple',
    deity: 'Lord Shiva',
    timing: '3:00 AM – 11:00 PM',
    highlights: ['One of 12 Jyotirlingas', 'Golden dome temple', 'VIP darshan available'],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    desc: 'The holiest Hindu temple dedicated to Lord Shiva, one of the twelve Jyotirlingas. Rebuilt by Maratha Maharani Ahilyabai Holkar in 1780.',
    badge: 'Most Sacred',
  },
  {
    name: 'Sankat Mochan Temple',
    deity: 'Lord Hanuman',
    timing: '5:00 AM – 10:00 PM',
    highlights: ['Founded by Tulsidas', 'Peaceful atmosphere', 'Famous for prasad'],
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
    desc: 'A beloved Hanuman temple founded by the great saint Tulsidas, the author of Ramcharitmanas. Located in a serene garden setting.',
    badge: 'Must Visit',
  },
  {
    name: 'Durga Temple (Durga Kund)',
    deity: 'Goddess Durga',
    timing: '6:00 AM – 12:00 PM, 3:00 PM – 9:00 PM',
    highlights: ['18th century temple', 'Monkey temple', 'Near Durga Kund lake'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    desc: 'An 18th century temple dedicated to Goddess Durga, known for its red ochre color. The adjacent kund (pond) is sacred for ritual bathing.',
    badge: null,
  },
  {
    name: 'Kalbhairav Temple',
    deity: 'Kalbhairav (Kotwal of Kashi)',
    timing: '5:00 AM – 10:00 PM',
    highlights: ['Kotwal (guardian) of Kashi', 'Unique prasad (liquor offered)', 'Ancient temple'],
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop',
    desc: 'Kalbhairav is considered the Kotwal (police chief) of Kashi city. All decisions in Varanasi are believed to be sanctioned by him.',
    badge: null,
  },
  {
    name: 'Annapurna Temple',
    deity: 'Goddess Annapurna',
    timing: '6:00 AM – 12:00 PM, 3:00 PM – 9:00 PM',
    highlights: ['Goddess of food & nourishment', 'Near Kashi Vishwanath', 'Gold & silver idol'],
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    desc: 'Temple dedicated to Goddess Annapurna, the goddess of food and nourishment. It is believed that no one goes hungry in Kashi due to her blessings.',
    badge: null,
  },
  {
    name: 'Tulsi Manas Mandir',
    deity: 'Lord Ram',
    timing: '5:30 AM – 12:00 PM, 3:30 PM – 9:00 PM',
    highlights: ['Ramcharitmanas inscribed on walls', 'Modern marble temple', 'Built in 1964'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    desc: 'Built in 1964 at the site where Goswami Tulsidas wrote Ramcharitmanas. The walls of this white marble temple are inscribed with verses from the epic.',
    badge: null,
  },
]

export default function TemplesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#ea2330]/20 border border-[#ea2330] text-red-300 text-sm px-4 py-1.5 rounded-full mb-4">
            🛕 Temples of Varanasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Sacred <span className="text-[#ea2330]">Temples</span> of Kashi
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Varanasi is home to thousands of temples — from the mighty Kashi Vishwanath to the serene Sankat Mochan
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-300">
            <span>🛕 2,000+ Temples</span>
            <span>🕉️ 5,000+ Years Old</span>
            <span>📿 Jyotirlinga Present</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Temples</span>
        </div>
      </div>

      {/* Temples Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Famous Temples of Varanasi</h2>
            <p className="text-gray-500">The city of Shiva has a temple at every corner — here are the most important ones</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <div key={temple.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
                <div className="relative h-48">
                  <Image src={temple.image} alt={temple.name} fill className="object-cover" />
                  {temple.badge && (
                    <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {temple.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{temple.name}</h3>
                  <p className="text-[#ea2330] text-sm font-medium mb-2">🙏 {temple.deity}</p>
                  <p className="text-gray-600 text-sm mb-3">{temple.desc}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{temple.timing}</span>
                  </div>
                  <ul className="space-y-1">
                    {temple.highlights.map((h) => (
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

      {/* Temple Tour CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-gray-800 mb-3">
              Book a Temple Tour with Guide
            </h2>
            <p className="text-gray-600 mb-4">
              Our expert guides will take you through all the important temples of Varanasi with proper rituals,
              darshan booking, and puja arrangements. Includes transportation and full guidance.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {['Expert local guide included', 'Cab/rickshaw service', 'Darshan priority booking', 'Best time to visit guidance'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/packages/1" className="px-8 py-3 bg-[#ea2330] text-white rounded-xl font-bold hover:bg-red-700 transition text-center">
              Book Temple Tour
            </Link>
            <a href="tel:+916388116241" className="px-8 py-3 border-2 border-[#ea2330] text-[#ea2330] rounded-xl font-bold hover:bg-[#ea2330] hover:text-white transition text-center">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
