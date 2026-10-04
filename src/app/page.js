// Server Component — no 'use client' needed
// Interactive islands (booking form, counters) are separate client components
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import HomeStats from '@/components/HomeStats'
import HeroSlider from '@/components/HeroSlider'

// ScrollReveal: regular import — controls opacity of content elements.
// Dynamic import would keep content at opacity:0 during chunk loading → kills LCP.
import ScrollReveal from '@/components/ScrollReveal'
import TestimonialsSection from '@/components/TestimonialsSection'

// ParallaxBanner: safe to dynamic import — only affects background position,
// not content visibility, so it cannot hurt LCP.
const ParallaxBanner = dynamic(() => import('@/components/ParallaxBanner'))

// ─── Packages section default data ────────────────────────────
const featuredPackages = [
  { id: 1, title: 'Varanasi Ganga Spiritual Tour', location: 'Varanasi, UP', duration: '2D / 1N', price: 4999, originalPrice: 6999, image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop', badge: 'Best Seller', includes: ['Hotel', 'Cab', 'Guide', 'Breakfast'] },
  { id: 2, title: 'Ayodhya Ram Mandir Tour', location: 'Ayodhya, UP', duration: '1 Day', price: 1499, originalPrice: 2000, image: '/Ayodhya.jpg', badge: 'Popular', includes: ['Cab', 'Guide', 'Darshan'] },
  { id: 'golden-triangle', title: 'Golden Triangle Tour', location: 'Varanasi • Prayagraj • Ayodhya', duration: '5D / 4N', price: 8500, originalPrice: 12000, image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800&auto=format&fit=crop', badge: 'New', includes: ['Hotel', 'Cab', 'Guide', 'Meals'] },
  { id: 3, title: 'Chardham Sacred Journey', location: 'Uttarakhand', duration: '10D / 9N', price: 25999, originalPrice: 35000, image: '/Chardham.jpg', badge: 'Featured', includes: ['Hotel', 'Cab', 'Meals', 'Guide'] },
]

const defaultTestimonials = [
  { id: 1, name: 'Rohit Verma', location: 'New Delhi', rating: 5, review: 'Varanasi trip was absolutely amazing! Driver was like a personal guide. Best service at this price. Highly recommended for families!', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
  { id: 2, name: 'Priya Sharma', location: 'Mumbai', rating: 5, review: 'Booked Innova for Ayodhya Ram Mandir visit. Car was spotless, driver was very helpful. Everything was arranged perfectly!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
  { id: 3, name: 'Suresh Gupta', location: 'Pune', rating: 5, review: 'Ganga Aarti boat ride was the most spiritual experience of my life! Special decoration with the boat. Highly recommend!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { id: 4, name: 'Meera Agarwal', location: 'Kolkata', rating: 5, review: 'Anniversary celebration on the Ganga was a dream come true! Flowers, lights, candles, music — everything was perfectly arranged. Thank you!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
]

// ─── Static data (module-level constants — no re-renders needed) ────────────
const cabRoutes = [
    { from: 'Varanasi', to: 'Ayodhya', distance: '200 km', time: '4 hrs', price: '₹2,500', img: '/Ayodhya.jpg', desc: 'Ram Mandir, Hanuman Garhi, Saryu Aarti' },
    { from: 'Varanasi', to: 'Prayagraj', distance: '125 km', time: '2.5 hrs', price: '₹1,500', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=400&auto=format&fit=crop', desc: 'Triveni Sangam, Akbar Fort, Hanuman Mandir' },
    { from: 'Varanasi', to: 'Chitrakoot', distance: '270 km', time: '5 hrs', price: '₹3,500', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&auto=format&fit=crop', desc: 'Kamadgiri, Ram Ghat, Gupt Godavari' },
    { from: 'Varanasi', to: 'Vindhyachal', distance: '75 km', time: '1.5 hrs', price: '₹900', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop', desc: 'Vindhyavasini Devi, Ashtabhuja, Kali Khoh' },
    { from: 'Varanasi', to: 'Bodh Gaya', distance: '250 km', time: '5 hrs', price: '₹3,000', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400&auto=format&fit=crop', desc: 'Mahabodhi Temple, Bodhi Tree, Buddha Statue' },
    { from: 'Varanasi', to: 'Lucknow', distance: '290 km', time: '5 hrs', price: '₹3,500', img: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=400&auto=format&fit=crop', desc: 'Bara Imambara, Chota Imambara, Hazratganj' },
  ]

  const boatingServices = [
    { id: 1, title: 'Ganga Aarti Special', icon: '🪔', price: '₹300/person', desc: 'Exclusive boat seat facing the Ganga Aarti. An evening spiritual experience you will never forget.', tag: 'Most Popular', color: 'from-orange-500 to-red-600', image: 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: '84 Ghats Tour', icon: '🚣', price: '₹500/person', desc: 'Guided boat tour of all 84 ghats. Learn the history and significance of each ghat in Varanasi.', tag: 'Heritage', color: 'from-blue-500 to-blue-700', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop' },
    { id: 3, title: 'Sunrise Boat Ride', icon: '🌅', price: '₹200/person', desc: 'Watch the sunrise over the Ganga at 5 AM - a wonderful experience. Perfect opportunity for photography.', tag: 'Spiritual', color: 'from-amber-500 to-orange-600', image: 'https://images.unsplash.com/photo-1504618223053-559bdef9ad5c?q=80&w=600&auto=format&fit=crop' },
    { id: 4, title: 'Birthday on Boat 🎂', icon: '🎉', price: '₹3,999 onwards', desc: 'Celebrate your birthday on the Ganga! Flowers, lights, cake, music - everything arranged. An unforgettable celebration!', tag: 'Event', color: 'from-pink-500 to-rose-600', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'Anniversary Celebration 💑', icon: '💑', price: '₹4,999 onwards', desc: 'The ripples of the Ganga, the light of diyas, and your love - make your anniversary unforgettable. Decoration and dinner available.', tag: 'Romantic', color: 'from-red-500 to-rose-700', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop' },
    { id: 6, title: 'Pre-Wedding Shoot 📸', icon: '📸', price: '₹6,999 onwards', desc: 'Romantic pre-wedding photography at the Ganga ghats. Unique backdrop for your special memories.', tag: 'Photography', color: 'from-purple-500 to-purple-700', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop' },
]

// ─── Main Page (Server Component) ─────────────────────────────
export default function HomePage() {
  const packages = featuredPackages
  const testimonials = defaultTestimonials

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO SECTION — Full-screen carousel
      ═══════════════════════════════════════════════════ */}
      <HeroSlider
        images={['/slider1.webp', '/slider2.webp']}
        heightClass="min-h-screen"
      >
        {/* Centered hero content */}
        <div className="flex flex-col items-center text-center text-white max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#ea2330]/20 border border-[#ea2330]/50 text-red-300 text-xs sm:text-sm px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            500+ Happy Travelers | Varanasi's Most Trusted
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-playfair leading-tight mb-5">
            Your Sacred Journey<br />
            <span className="text-[#ea2330]">Starts Here</span><br />
            in Varanasi!
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-7 max-w-xl">
            From Varanasi to Ayodhya, Prayagraj, Chitrakoot and beyond — Premium Cab Service.
            Birthday, Anniversary, and Pre-Wedding celebrations on the Ganga.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-7">
            {['✔ AC Cabs', '✔ 24/7 Available', '✔ Ganga Events', '✔ Expert Guides'].map(b => (
              <span key={b} className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">{b}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+916388116241"
              className="inline-flex items-center justify-center gap-2 bg-[#ea2330] hover:bg-red-700 text-white font-bold px-7 py-4 rounded-xl transition text-base shadow-lg shadow-red-900/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Now: +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-4 rounded-xl transition text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </HeroSlider>

      {/* ═══════════════════════════════════════════════════
          STATS BAR — animated counters (client component)
      ═══════════════════════════════════════════════════ */}
      <HomeStats />

      {/* ═══════════════════════════════════════════════════
          3 CORE SERVICES — Big visual cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Your Journey, Our Responsibility</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">From cabs to celebrations on the Ganga - Yatra K Sathi is with you every step of the way</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CAB */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                  alt="Cab Service Varanasi" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">🚗 CAB SERVICE</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ea2330] transition-colors">Outstation Cab Booking</h3>
                <p className="text-gray-500 text-sm mb-4">Varanasi, Ayodhya, Prayagraj, Chitrakoot, Vindhyachal, Bodh Gaya — AC cars, experienced drivers, best prices.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Swift Dzire', 'Ertiga', 'Innova', 'Tempo'].map(v => (
                    <span key={v} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{v}</span>
                  ))}
                </div>
                <Link href="/taxi" className="flex items-center gap-2 text-[#ea2330] font-bold text-sm group-hover:gap-3 transition-all">
                  Book Cab Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* BOATING */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100 hover:-translate-y-2 md:scale-105 ring-2 ring-[#ea2330]">
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">⭐ MOST POPULAR</span>
              </div>
              <div className="relative h-56 overflow-hidden">
                <Image src="/boatinghome.webp"
                  alt="Boating Varanasi Ganga" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">⛵ BOATING & EVENTS</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ea2330] transition-colors">Ganga Boating & Celebrations</h3>
                <p className="text-gray-500 text-sm mb-4">Ganga Aarti, 84 Ghats tour, Birthday party, Anniversary, Pre-wedding shoot — celebrate every moment on the Ganga!</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Aarti Boat', 'Birthday', 'Anniversary', 'Pre-wedding'].map(v => (
                    <span key={v} className="text-xs bg-red-50 text-[#ea2330] px-2.5 py-1 rounded-full border border-red-100">{v}</span>
                  ))}
                </div>
                <Link href="/boating" className="flex items-center gap-2 text-[#ea2330] font-bold text-sm group-hover:gap-3 transition-all">
                  Book Boat Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* TOUR PACKAGES */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop"
                  alt="Tour Packages" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">🧳 TOUR PACKAGES</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ea2330] transition-colors">Complete Tour Packages</h3>
                <p className="text-gray-500 text-sm mb-4">Varanasi, Ayodhya, Prayagraj, Chardham — Hotel + Cab + Guide + Meals all in one package. Worry-free travel!</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Hotel Included', 'Meals', 'Guide', 'Cab'].map(v => (
                    <span key={v} className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-100">{v}</span>
                  ))}
                </div>
                <Link href="/packages" className="flex items-center gap-2 text-[#ea2330] font-bold text-sm group-hover:gap-3 transition-all">
                  View Packages
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CAB DESTINATIONS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Cab Destinations</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Travel Anywhere From Varanasi</h2>
            <p className="text-gray-500 mt-3">Premium AC cabs with experienced drivers — all major pilgrimage & tourist destinations covered</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cabRoutes.map((route) => (
              <Link key={route.to} href="/taxi"
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <Image src={route.img} alt={route.to} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-white mb-1">
                          <span className="font-bold text-sm">{route.from}</span>
                          <svg className="w-4 h-4 text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          <span className="font-extrabold text-lg">{route.to}</span>
                        </div>
                        <p className="text-gray-300 text-xs">{route.desc}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="text-[#ea2330] font-extrabold text-xl bg-white/95 px-3 py-1 rounded-lg">{route.price}</p>
                        <p className="text-gray-400 text-xs mt-1">{route.distance} • {route.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/taxi" className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-[#ea2330] transition-colors text-sm">
              View All Cab Services & Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK 1 ───────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-black/70 via-black/50 to-black/70"
        title="🪔 Experience the Magic of the Ganga"
        subtitle="Witness the evening Ganga Aarti from the water — a divine experience that will stay with you forever."
        cta={{ label: 'Book a Boat Ride', href: '/boating' }}
      />

      {/* ═══════════════════════════════════════════════════
          BOATING SERVICES
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Ganga Boating & Events</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-playfair">Make Every Moment on the Ganga Memorable</h2>
            <p className="text-gray-400 mt-3">From Aarti to birthdays — celebrate every occasion at the Ganga ghats</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boatingServices.map((service) => (
              <Link key={service.id} href="/boating"
                className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/5 border border-white/10 hover:border-white/30">
                <div className="relative h-40 overflow-hidden rounded-t-2xl">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">{service.tag}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-white text-gray-900 font-extrabold text-sm px-3 py-1 rounded-lg">{service.price}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#ea2330] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-[#ea2330] text-xs font-semibold">
                    Book Now <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/boating" className="inline-flex items-center gap-2 bg-[#ea2330] text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition text-sm">
              ⛵ Explore All Boating Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TOUR PACKAGES
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Tour Packages</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">Best Value Tour Packages</h2>
            <p className="text-gray-500 mt-3">Hotel + Cab + Guide + Meals — Everything in one package</p>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg) => {
              const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
              return (
                <div key={pkg.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#ea2330] text-white text-xs font-bold px-2.5 py-1 rounded-full">{pkg.badge}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{discount}% OFF</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      ⏱ {pkg.duration}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-[#ea2330] text-xs font-bold uppercase tracking-wide mb-1">📍 {pkg.location}</p>
                    <h3 className="font-extrabold text-gray-900 text-base mb-2 leading-tight">{pkg.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {pkg.includes.map(inc => (
                        <span key={inc} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">✓ {inc}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3 mt-auto">
                      <span className="text-[#ea2330] font-extrabold text-xl">₹{pkg.price.toLocaleString('en-IN')}</span>
                      <span className="text-gray-400 text-sm line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="text-green-600 text-xs font-bold ml-auto">Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}</span>
                    </div>
                    <Link href={`/packages/${pkg.id}`}
                      className="block text-center py-2.5 bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-bold rounded-xl transition">
                      View Details →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/packages" className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-900 hover:text-white transition text-sm">
              View All Packages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK 2 ───────────────────────────── */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-gradient-to-r from-[#ea2330]/80 via-black/60 to-[#ea2330]/80"
        title="🚗 Varanasi to Anywhere — We Drive You Safely"
        subtitle="AC cabs, police-verified drivers, GPS tracked. Your comfort is our top priority on every journey."
        cta={{ label: 'Book a Cab Now', href: '/taxi' }}
      />

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair mb-6">Varanasi's Most <span className="text-[#ea2330]">Trusted</span> Travel Partner</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">With the trust of 500+ happy travelers, we provide the safest, most comfortable, and most affordable travel experiences in Varanasi and surrounding areas.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🛡️', title: 'Police Verified Drivers', desc: 'All drivers are background verified and experienced' },
                  { icon: '💰', title: 'Best Price Guarantee', desc: 'Most competitive rates in the market, no hidden charges' },
                  { icon: '⏰', title: '24/7 Support', desc: 'We are always available day or night for you' },
                  { icon: '🚗', title: 'AC & Clean Vehicles', desc: 'Clean and well-maintained fleet checked before every trip' },
                  { icon: '📍', title: 'GPS Tracked', desc: 'Real-time GPS tracking for safety and peace of mind' },
                  { icon: '🙏', title: 'Local Expertise', desc: 'Complete knowledge of every temple, ghat and location in Varanasi' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition group">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#ea2330] transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[360px] md:h-[450px]">
                <Image src="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800&auto=format&fit=crop"
                  alt="Varanasi Ghat" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[{ n: '500+', l: 'Trips Done' }, { n: '4.9★', l: 'Rating' }, { n: '24/7', l: 'Support' }].map(s => (
                      <div key={s.l} className="bg-white/90 backdrop-blur rounded-xl p-3 text-center">
                        <p className="text-[#ea2330] font-extrabold text-lg leading-none">{s.n}</p>
                        <p className="text-gray-600 text-xs mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ea2330] font-semibold text-sm uppercase tracking-widest mb-2">Customer Reviews</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
          </div>
          <TestimonialsSection items={testimonials.slice(0, 4)} autoDelay={3500} />
          <div className="text-center mt-8">
            <Link href="/testimonials" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-[#ea2330] hover:text-[#ea2330] transition text-sm">
              See All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER — Parallax
      ═══════════════════════════════════════════════════ */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop"
        overlay="bg-black/72"
        minHeight="min-h-[400px]"
      >
        <ScrollReveal direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-playfair mb-4 drop-shadow-xl">
            Book Your Journey <span className="text-[#ea2330]">Today!</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Cab, Boating, Tour Package — whatever you need, one call gets it booked. No advance, instant confirmation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916388116241"
              className="inline-flex items-center justify-center gap-2 bg-[#ea2330] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-2xl shadow-red-900/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              📞 +91 63881 16241
            </a>
            <a href="https://wa.me/916388116241?text=Hello%20Yatra%20K%20Sathi!%20I%20need%20to%20make%20a%20booking."
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">
              💬 WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </ParallaxBanner>
    </>
  )
}
