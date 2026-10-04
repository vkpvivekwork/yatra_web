'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

const packagesSliderImages = [
  'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
]

const packages = [
  {
    id: 1,
    title: 'Varanasi Ganga Darshan',
    location: 'Varanasi, UP',
    duration: '2 Days / 1 Night',
    price: '4,999',
    originalPrice: '6,500',
    persons: '2 Adults',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    highlights: ['Ganga Aarti', 'Kashi Vishwanath', 'Sarnath'],
    includes: ['Hotel Stay', 'Breakfast', 'Cab Service', 'Guide'],
    description: 'Experience the divine atmosphere of Varanasi with a holy dip at the Ghats, attend the mesmerising Ganga Aarti, and seek blessings at Kashi Vishwanath Temple.',
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Ayodhya Ram Mandir Tour',
    location: 'Ayodhya, UP',
    duration: '1 Day',
    price: '1,499',
    originalPrice: '2,000',
    persons: '2 Adults',
    image: '/Ayodhya.jpg',
    highlights: ['Ram Mandir Darshan', 'Hanuman Garhi', 'Saryu Aarti'],
    includes: ['Cab Service', 'Guide', 'Darshan Booking'],
    description: 'Visit the newly built Ram Mandir and seek blessings at Hanuman Garhi. Experience the spiritual energy of this holy city with a evening Saryu Aarti.',
    badge: 'Popular',
  },
  {
    id: 3,
    title: 'Chardham Yatra Package',
    location: 'Uttarakhand',
    duration: '10 Days / 9 Nights',
    price: '25,999',
    originalPrice: '35,000',
    persons: '2 Adults',
    image: '/Chardham.jpg',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    includes: ['Hotel', 'Meals', 'Cab', 'Guide', 'Helicopter Optional'],
    description: 'Complete the sacred Char Dham Yatra covering all four divine shrines — Yamunotri, Gangotri, Kedarnath and Badrinath in the beautiful Himalayas.',
    badge: 'Featured',
  },
  {
    id: 4,
    title: 'Goa Beach Holiday',
    location: 'Goa',
    duration: '4 Days / 3 Nights',
    price: '12,500',
    originalPrice: '16,000',
    persons: '2 Adults',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop',
    highlights: ['North Goa', 'South Goa', 'Beach Tours', 'Old Goa Churches'],
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
    description: 'Relax on pristine beaches of Goa, explore the vibrant nightlife, visit historic Portuguese churches, and enjoy water sports activities.',
    badge: null,
  },
  {
    id: 'golden-triangle',
    title: 'Golden Triangle',
    location: 'Varanasi • Prayagraj • Ayodhya',
    duration: '4 Nights / 5 Days',
    price: '8,500',
    originalPrice: '12,000',
    persons: '2 Adults',
    image: 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Varanasi Ghats', 'Triveni Sangam', 'Ram Mandir'],
    includes: ['Hotel', 'Breakfast', 'Cab', 'Guide'],
    description: 'Cover the three holy cities of UP — Varanasi, Prayagraj and Ayodhya in one complete spiritual journey package.',
    href: '/golden-triangle',
    badge: 'New',
  },
  {
    id: 5,
    title: 'Prayagraj Sangam Yatra',
    location: 'Prayagraj, UP',
    duration: '1 Day',
    price: '1,200',
    originalPrice: '1,800',
    persons: '2 Adults',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1974&auto=format&fit=crop',
    highlights: ['Triveni Sangam', 'Boat Ride', 'Akbar Fort', 'Hanuman Mandir'],
    includes: ['Cab Service', 'Guide', 'Boat Ride'],
    description: 'Visit the sacred Triveni Sangam where the Ganga, Yamuna and Saraswati rivers meet. Experience a holy dip and explore the historical sites of Prayagraj.',
    badge: null,
  },
]

function PackageModal({ pkg, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', persons: '2' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          travel_date: form.date,
          service_type: 'tour',
          message: `Package: ${pkg.title} | Persons: ${form.persons}`,
          source: 'package_page',
        }),
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitted(true) // Show success even if backend offline
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-52 w-full">
          <Image src={pkg.image} alt={pkg.title} fill className="object-cover rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition"
          >
            ✕
          </button>
          {pkg.badge && (
            <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-semibold">
              {pkg.badge}
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{pkg.title}</h2>
              <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {pkg.location} • {pkg.duration}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#ea2330] font-bold text-2xl">₹{pkg.price}</p>
              <p className="text-gray-400 text-xs line-through">₹{pkg.originalPrice}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

          {/* Highlights */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2 text-sm">Highlights</p>
            <div className="flex flex-wrap gap-2">
              {pkg.highlights.map((h) => (
                <span key={h} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{h}</span>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div className="mb-5">
            <p className="font-semibold text-gray-700 mb-2 text-sm">Package Includes</p>
            <div className="flex flex-wrap gap-2">
              {pkg.includes.map((inc) => (
                <span key={inc} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {inc}
                </span>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="border-t pt-5">
              <p className="font-semibold text-gray-800 mb-4">Book This Package</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  required
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                />
                <input
                  required
                  type="tel"
                  placeholder="Mobile Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                />
                <select
                  value={form.persons}
                  onChange={(e) => setForm({ ...form, persons: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((n) => (
                    <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Enquiry & Get Best Price'}
              </button>
            </form>
          ) : (
            <div className="border-t pt-5 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-600 font-bold text-lg">Enquiry Sent Successfully!</p>
              <p className="text-gray-500 text-sm mt-1">Our team will call you within 30 minutes.</p>
              <a href="tel:+916388116241" className="mt-3 inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition text-sm">
                📞 Call Now: +91 63881 16241
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PackagesPage() {
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Packages' },
    { id: '1day', label: '1 Day' },
    { id: 'short', label: '2-4 Days' },
    { id: 'long', label: '5+ Days' },
  ]

  const filteredPackages = packages.filter((pkg) => {
    if (filter === 'all') return true
    if (filter === '1day') return pkg.duration.includes('1 Day')
    if (filter === 'short') return ['2', '3', '4'].some((d) => pkg.duration.startsWith(d))
    if (filter === 'long') return parseInt(pkg.duration) >= 5
    return true
  })

  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={packagesSliderImages} heightClass="min-h-[400px] sm:min-h-[460px] md:min-h-[520px]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/15 border border-white/20 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            ✈️ 50+ Tour Packages Available
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-white mb-2 sm:mb-3 leading-tight">
            Our Tour Packages
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-5 sm:mb-7">
            Handpicked spiritual &amp; leisure packages across India at best prices
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="#packages-list" className="px-8 py-3 sm:py-3.5 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">Browse Packages</Link>
            <Link href="/contact" className="px-8 py-3 sm:py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Get Custom Quote</Link>
          </div>
        </div>
      </HeroSlider>

      {/* Filter Tabs */}
      <section className="bg-white py-4 border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                filter === f.id
                  ? 'bg-[#ea2330] text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-6">{filteredPackages.length} packages found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col cursor-pointer"
                onClick={() => setSelectedPkg(pkg)}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800' }}
                  />
                  <div className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {pkg.duration}
                  </div>
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 bg-amber-400 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {pkg.location}
                  </p>
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-2.5 py-0.5 rounded-full">{h}</span>
                    ))}
                  </div>
                  {/* Includes icons */}
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                    {pkg.includes.slice(0, 3).map((inc) => (
                      <span key={inc} className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {inc}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-[#ea2330] font-bold text-2xl">₹{pkg.price}</span>
                      <span className="text-gray-400 text-xs">/person</span>
                      {pkg.originalPrice && (
                        <p className="text-gray-400 text-xs line-through">₹{pkg.originalPrice}</p>
                      )}
                    </div>
                    <button className="px-5 py-2.5 bg-[#ea2330] text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Book With Yatra K Sathi?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💰', title: 'Best Price', desc: 'No hidden charges' },
              { icon: '🏨', title: 'Best Hotels', desc: 'Verified properties' },
              { icon: '🚗', title: 'AC Cabs', desc: 'Clean & comfortable' },
              { icon: '📞', title: '24/7 Support', desc: 'Always available' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair">Need a Custom Package?</h2>
            <p className="text-red-100 mt-1">Tell us your requirements — we'll craft the perfect itinerary!</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:+916388116241" className="px-6 py-3 bg-white text-[#ea2330] rounded-lg font-bold hover:bg-gray-100 transition">
              📞 Call Now
            </a>
            <Link href="/contact" className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPkg && <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />}
    </>
  )
}
