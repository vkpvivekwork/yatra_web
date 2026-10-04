import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Activities in Varanasi | Yatra K Sathi',
  description: 'Top activities to do in Varanasi — Ganga Aarti, boat rides, silk shopping, yoga, cooking classes and much more.',
}

const activities = [
  {
    title: 'Ganga Aarti',
    category: 'Spiritual',
    duration: '45 mins',
    price: 'Free (Boat: ₹200–500)',
    desc: 'Witness the grand Ganga Aarti at Dashashwamedh Ghat every evening. Priests perform elaborate rituals with fire lamps, incense and conch shells in a mesmerizing ceremony.',
    icon: '🪔',
    image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop',
    badge: 'Must Do',
  },
  {
    title: 'Morning Boat Ride',
    category: 'Experience',
    duration: '1–2 hrs',
    price: '₹300–800/person',
    desc: 'Start your day with a magical sunrise boat ride along the ghats. Watch the city wake up, see morning rituals, sadhus, and the golden sun rise over the Ganga.',
    icon: '🚣',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    badge: 'Top Rated',
    href: '/sightseeing/activities/morning-boat-ride',
  },
  {
    title: 'Banarasi Silk Shopping',
    category: 'Shopping',
    duration: 'Half day',
    price: '₹500 – ₹1,00,000+',
    desc: 'Varanasi is world-famous for its exquisite Banarasi silk sarees. Visit the weaver colonies of Lallapura, Madanpura for the best authentic silk sarees at wholesale prices.',
    icon: '🧵',
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop',
    badge: null,
  },
  {
    title: 'Sarnath Buddhist Tour',
    category: 'Heritage',
    duration: '4–5 hrs',
    price: '₹200–500 (entry)',
    desc: 'Visit Sarnath, just 10km from Varanasi, where Lord Buddha gave his first sermon. Explore the ancient stupas, museum, Dhamek Stupa and Chaukhandi Stupa.',
    icon: '☸️',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    badge: null,
  },
  {
    title: 'Yoga & Meditation',
    category: 'Wellness',
    duration: '1–2 hrs/session',
    price: '₹300–1,000/session',
    desc: 'Varanasi is a global hub for yoga and meditation. Join morning sessions by the ghats, attend ashrams, or book private sessions with certified yoga teachers.',
    icon: '🧘',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    badge: null,
  },
  {
    title: 'Street Food Walk',
    category: 'Food',
    duration: '2–3 hrs',
    price: '₹200–500',
    desc: "Varanasi's street food is legendary! Try the famous Kachori-Sabzi, Tamatar Chaat, Lassi, Malaiyo, and the crispy Banarasi paan. A food walk is a must-do experience.",
    icon: '🍛',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop',
    badge: null,
  },
]

export default function ActivitiesPage() {
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
            🎭 Activities in Varanasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Things to <span className="text-[#ea2330]">Do in Varanasi</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            From spiritual rituals to adventure, shopping and food — Varanasi has something unforgettable for everyone
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/sightseeing" className="hover:text-[#ea2330]">Sightseeing</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Activities</span>
        </div>
      </div>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-2">Top Activities in Varanasi</h2>
            <p className="text-gray-500">Experiences you will remember for a lifetime</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => {
              const Card = (
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition border border-gray-100 h-full">
                  <div className="relative h-48">
                    <Image src={act.image} alt={act.title} fill className="object-cover" />
                    {act.badge && (
                      <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {act.badge}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {act.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{act.icon}</span>
                      <h3 className="font-bold text-gray-800 text-lg">{act.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{act.desc}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
                      <span>⏱️ {act.duration}</span>
                      <span className="font-semibold text-[#ea2330]">{act.price}</span>
                    </div>
                  </div>
                </div>
              )
              return act.href ? (
                <Link key={act.title} href={act.href} className="block">{Card}</Link>
              ) : (
                <div key={act.title}>{Card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Plan the Perfect Varanasi Trip</h2>
          <p className="text-red-100 mb-6">We will arrange all activities, transfers and accommodation for you</p>
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
