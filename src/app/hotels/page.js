'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

const hotelsSliderImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop',
]

const hotels = [
  {
    id: 1,
    name: 'Hotel Ganges Grand',
    location: 'Godowlia, Varanasi',
    category: 'varanasi',
    rating: 4.5,
    reviews: 128,
    price: 2500,
    originalPrice: 3500,
    amenities: ['Free WiFi', 'AC Rooms', 'Breakfast', 'Ganga View'],
    tags: ['Temple View', '24/7 Reception', 'Pure Veg'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    type: '3 Star',
  },
  {
    id: 2,
    name: 'Ram Prasadam Stay',
    location: 'Near Ram Mandir, Ayodhya',
    category: 'ayodhya',
    rating: 4.8,
    reviews: 94,
    price: 1800,
    originalPrice: 2500,
    amenities: ['AC Rooms', 'Pure Veg Food', 'Parking', 'Temple View'],
    tags: ['Close to Ram Mandir', 'Pilgrims Preferred', 'Budget Stay'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    type: '2 Star',
  },
  {
    id: 3,
    name: 'Luxury River Palace',
    location: 'Assi Ghat, Varanasi',
    category: 'varanasi',
    rating: 4.9,
    reviews: 231,
    price: 4500,
    originalPrice: 6000,
    amenities: ['Swimming Pool', 'Spa', 'River Facing Rooms', 'Buffet Breakfast'],
    tags: ['River View', 'Luxury', 'Honeymoon Special'],
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop',
    type: '5 Star',
    featured: true,
  },
  {
    id: 4,
    name: 'Goa Beach Resort',
    location: 'Calangute Beach, Goa',
    category: 'goa',
    rating: 4.7,
    reviews: 312,
    price: 3500,
    originalPrice: 5000,
    amenities: ['Pool', 'Bar & Restaurant', 'Beach Access', 'Breakfast Included'],
    tags: ['Beachfront', 'Pool View', 'Couple Friendly'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop',
    type: '4 Star',
  },
  {
    id: 5,
    name: 'Sangam Residency',
    location: 'Civil Lines, Prayagraj',
    category: 'prayagraj',
    rating: 4.3,
    reviews: 67,
    price: 1500,
    originalPrice: 2200,
    amenities: ['AC Rooms', 'Free WiFi', 'Parking', 'Room Service'],
    tags: ['City Center', 'Business Stay', 'Budget Friendly'],
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2070&auto=format&fit=crop',
    type: '3 Star',
  },
  {
    id: 6,
    name: 'Kashi Heritage Hotel',
    location: 'Dashashwamedh Ghat, Varanasi',
    category: 'varanasi',
    rating: 4.6,
    reviews: 156,
    price: 3200,
    originalPrice: 4000,
    amenities: ['Rooftop Restaurant', 'Yoga Classes', 'AC Rooms', 'Free WiFi'],
    tags: ['Ghat View', 'Heritage Property', 'Yoga'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
    type: '4 Star',
  },
]

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg
            key={s}
            className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
      {reviews && <span className="text-gray-400 text-xs">({reviews} reviews)</span>}
    </div>
  )
}

function EnquiryModal({ hotel, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', checkin: '', checkout: '', rooms: '1' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          travel_date: form.checkin,
          service_type: 'hotel',
          message: `Hotel: ${hotel.name} | Check-in: ${form.checkin} | Check-out: ${form.checkout} | Rooms: ${form.rooms}`,
          source: 'hotel_page',
        }),
      })
    } catch (err) {
      // Continue
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-40 w-full">
          <Image src={hotel.image} alt={hotel.name} fill className="object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black">✕</button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
          <p className="text-gray-500 text-sm mb-1">{hotel.location}</p>
          <div className="flex items-center justify-between mb-5">
            <StarRating rating={hotel.rating} reviews={hotel.reviews} />
            <div className="text-right">
              <span className="text-[#ea2330] font-bold text-xl">₹{hotel.price.toLocaleString()}</span>
              <span className="text-gray-400 text-xs">/night</span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required type="text" placeholder="Your Name *"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              />
              <input
                required type="tel" placeholder="Mobile Number *"
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Check-In</label>
                  <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Check-Out</label>
                  <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
                  />
                </div>
              </div>
              <select value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              >
                {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n} Room{n>1?'s':''}</option>)}
              </select>
              <button type="submit" disabled={loading}
                className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Book Now — Get Best Price'}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold text-gray-800 text-lg">Booking Request Sent!</p>
              <p className="text-gray-500 text-sm mt-1 mb-4">We'll call you within 30 minutes with the best rate.</p>
              <a href="tel:+916388116241" className="inline-block bg-[#ea2330] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition">
                📞 Call Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [filterCity, setFilterCity] = useState('all')
  const [search, setSearch] = useState({ city: '', checkin: '', checkout: '', rooms: '1' })

  const cityFilters = [
    { id: 'all', label: 'All Cities' },
    { id: 'varanasi', label: 'Varanasi' },
    { id: 'ayodhya', label: 'Ayodhya' },
    { id: 'prayagraj', label: 'Prayagraj' },
    { id: 'goa', label: 'Goa' },
  ]

  const filteredHotels = hotels.filter((h) =>
    filterCity === 'all' ? true : h.category === filterCity
  )

  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={hotelsSliderImages} heightClass="min-h-[500px] sm:min-h-[520px] md:min-h-[540px]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/15 border border-white/20 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            🏨 Best Price Guarantee
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-white mb-2 sm:mb-3 leading-tight">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Handpicked hotels near Ghats, Temples &amp; Tourist spots</p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="🏙️ City or Hotel Name"
                value={search.city}
                onChange={(e) => setSearch({ ...search, city: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              />
              <input
                type="date"
                placeholder="Check-In"
                value={search.checkin}
                onChange={(e) => setSearch({ ...search, checkin: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              />
              <input
                type="date"
                placeholder="Check-Out"
                value={search.checkout}
                onChange={(e) => setSearch({ ...search, checkout: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]"
              />
              <button className="bg-[#ea2330] text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Hotels
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mt-4 sm:mt-5">
            <Link href="/packages" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">View Tour Packages</Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Contact Us</Link>
          </div>
        </div>
      </HeroSlider>

      {/* City Filter */}
      <section className="bg-white py-4 border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto">
          {cityFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterCity(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                filterCity === f.id ? 'bg-[#ea2330] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Hotels Listing */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {filterCity === 'all' ? 'All Hotels' : `Hotels in ${cityFilters.find(f => f.id === filterCity)?.label}`}
            </h2>
            <span className="text-gray-500 text-sm bg-white px-3 py-1 rounded-full border">
              {filteredHotels.length} Properties Found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {hotel.featured && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                    {hotel.type}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-800 text-base leading-tight">{hotel.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {hotel.location}
                  </p>

                  <StarRating rating={hotel.rating} reviews={hotel.reviews} />

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {hotel.amenities.map((a) => (
                      <span key={a} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">{a}</span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {hotel.tags.map((t) => (
                      <span key={t} className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#ea2330] font-bold text-xl">₹{hotel.price.toLocaleString()}</span>
                        <span className="text-gray-400 text-xs">/night</span>
                      </div>
                      {hotel.originalPrice && (
                        <p className="text-gray-400 text-xs line-through">₹{hotel.originalPrice.toLocaleString()}</p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="px-5 py-2.5 bg-[#ea2330] text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8 font-playfair">Why Book Hotels With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: '💰', title: 'Best Price Guarantee', desc: 'We match & beat any price' },
              { icon: '✅', title: 'Verified Properties', desc: 'All hotels personally checked' },
              { icon: '🆓', title: 'Free Cancellation', desc: 'On most bookings' },
              { icon: '📞', title: '24/7 Helpdesk', desc: 'Support during your stay' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-gray-800 text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#ea2330] text-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold font-playfair">Can't Find What You're Looking For?</h2>
            <p className="text-red-100 mt-1">Call us and we'll find the perfect hotel for your stay!</p>
          </div>
          <a href="tel:+916388116241" className="px-8 py-3 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition whitespace-nowrap">
            📞 +91 63881 16241
          </a>
        </div>
      </section>

      {selectedHotel && <EnquiryModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />}
    </>
  )
}
