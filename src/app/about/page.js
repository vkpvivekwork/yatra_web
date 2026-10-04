import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from '@/components/HeroSlider'

const aboutSliderImages = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop',
]

export const metadata = {
  title: 'About Us - Yatra K Sathi',
  description: 'Learn about Yatra K Sathi - your trusted travel partner for spiritual journeys across India.',
}

const teamValues = [
  {
    icon: '💰',
    title: 'No Hidden Costs',
    desc: 'We believe in complete transparency. The price you see is the price you pay — no surprises, no hidden charges.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    desc: 'Our dedicated support team is available round the clock to assist you before, during, and after your journey.',
  },
  {
    icon: '🗺️',
    title: 'Local Expertise',
    desc: 'Our guides have deep knowledge of local culture, temples, and best practices for a truly authentic experience.',
  },
  {
    icon: '🚗',
    title: 'Safe Transportation',
    desc: 'Our verified, GPS-tracked cabs with experienced drivers ensure your journey is always safe and comfortable.',
  },
  {
    icon: '🏨',
    title: 'Quality Stays',
    desc: 'We personally verify every hotel and guest house we recommend so you always get the best experience.',
  },
  {
    icon: '🙏',
    title: 'Spiritual Focus',
    desc: 'We understand the spiritual significance of your Yatra and help you make the most of every sacred moment.',
  },
]

const milestones = [
  { year: '2019', event: 'Yatra K Sathi Founded in Varanasi with a small team of 3 travel enthusiasts.' },
  { year: '2020', event: 'Expanded our cab services to cover all of Uttar Pradesh and pilgrimage routes.' },
  { year: '2021', event: 'Launched hotel booking services and curated 20+ tour packages for pilgrims.' },
  { year: '2022', event: 'Crossed 500+ happy customers and launched Char Dham Yatra packages.' },
  { year: '2023', event: 'Expanded to Goa & Rajasthan packages. Launched our official website.' },
  { year: '2024', event: 'Served 1000+ customers. Became the most trusted travel agency in Varanasi.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={aboutSliderImages} heightClass="min-h-[400px] sm:min-h-[460px] md:min-h-[520px]">
        <div className="text-center text-white max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            🙏 Trusted Since 2019
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-3 sm:mb-4 leading-tight">
            About Yatra K Sathi
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-5 sm:mb-6">
            Your trusted companion for spiritual journeys across India. Making every pilgrimage comfortable, affordable, and memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="/packages" className="px-7 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">Explore Packages</Link>
            <Link href="/contact" className="px-7 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Contact Us</Link>
          </div>
        </div>
      </HeroSlider>

      {/* Stats Banner */}
      <section className="bg-[#ea2330] py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white text-center">
            {[
              { num: '1000+', label: 'Happy Customers' },
              { num: '50+', label: 'Tour Packages' },
              { num: '5+', label: 'Years Experience' },
              { num: '24/7', label: 'Customer Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{stat.num}</p>
                <p className="text-red-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#ea2330] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 font-playfair mt-2 mb-4 sm:mb-6">Journey Started with a Dream</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Yatra K Sathi was founded with a simple yet powerful mission — to make spiritual travel easy, affordable, and truly memorable for every pilgrim. We understand how sacred and important these journeys are for our customers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From the ghats of Varanasi to the temples of Ayodhya, from the Triveni Sangam of Prayagraj to the peaks of Char Dham — we have been guiding thousands of devotees on their spiritual journeys with care and dedication.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of experienced guides, verified drivers, and hospitality experts work together to ensure that every Yatra is comfortable, safe, and spiritually fulfilling. We treat every customer like family.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/packages" className="px-6 py-3 bg-[#ea2330] text-white rounded-xl font-semibold hover:bg-red-700 transition">
                  Explore Packages
                </Link>
                <Link href="/contact" className="px-6 py-3 border-2 border-[#ea2330] text-[#ea2330] rounded-xl font-semibold hover:bg-[#ea2330] hover:text-white transition">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Story Image collage */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800"
                    alt="Varanasi Ghats"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
                    alt="Cab Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                    alt="Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800"
                    alt="Spiritual Tour"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#ea2330] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-playfair mt-2">Our Core Values</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">What makes Yatra K Sathi the most trusted travel partner for your spiritual journeys</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#ea2330] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mt-2">Milestones Over the Years</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 bg-[#ea2330] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                      {m.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4 shadow-sm">
                    <p className="font-bold text-[#ea2330] text-sm mb-1">{m.year}</p>
                    <p className="text-gray-600 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 font-playfair">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧳',
                title: 'Tour Packages',
                desc: 'Curated spiritual & leisure tour packages across India with hotels, transport, and guide included.',
                href: '/packages',
                cta: 'View Packages',
              },
              {
                icon: '🚗',
                title: 'Cab Service',
                desc: 'Sedans, SUVs, and Tempo Travellers for local and outstation trips at transparent rates.',
                href: '/taxi',
                cta: 'Book Cab',
              },
              {
                icon: '🏨',
                title: 'Hotel Booking',
                desc: 'Best hotels near temples and ghats, verified for quality and comfort at best prices.',
                href: '/hotels',
                cta: 'Find Hotels',
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{s.desc}</p>
                <Link href={s.href} className="inline-block px-5 py-2.5 bg-[#ea2330] text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-playfair">Start Your Spiritual Journey Today</h2>
          <p className="text-red-100 mb-8 text-lg">Let us plan the perfect Yatra for you and your family. Call us or send an enquiry!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-3.5 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              Send Enquiry
            </Link>
            <a href="tel:+916388116241" className="px-8 py-3.5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
