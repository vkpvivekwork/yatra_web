'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import TestimonialSlider from '@/components/TestimonialSlider'

const testimonialsSliderImages = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=1920&auto=format&fit=crop',
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'New Delhi',
    rating: 5,
    review: 'Varanasi trip was absolutely amazing! The driver was very polite and acted as our guide throughout. Ganga Aarti experience was breathtaking. Best service at this price point. Highly recommended for families.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    package: 'Varanasi Tour Package',
    date: 'December 2024',
    verified: true,
  },
  {
    name: 'Raj Kumar',
    location: 'Mumbai',
    rating: 5,
    review: 'Booked a taxi for Ayodhya Darshan. The car was very clean (Innova Crysta), and the journey was extremely comfortable. Driver arrived 10 minutes early. Thank you Yatraksathi team!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    package: 'Ayodhya Cab Service',
    date: 'November 2024',
    verified: true,
  },
  {
    name: 'Ahmed Khan',
    location: 'Lucknow',
    rating: 5,
    review: 'Had a wonderful experience with the Chardham package. Hotels were decent and food was good everywhere. The guide had excellent knowledge of all the holy places. Will definitely book again next year.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    package: 'Chardham Yatra Package',
    date: 'October 2024',
    verified: true,
  },
  {
    name: 'Sunita Devi',
    location: 'Patna',
    rating: 5,
    review: 'Excellent service from start to finish! The guide was very knowledgeable about the temples and their history. Ganga Aarti experience was truly breathtaking. Our whole family had an amazing time. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    package: 'Varanasi Family Package',
    date: 'January 2025',
    verified: true,
  },
  {
    name: 'Mohan Lal',
    location: 'Kanpur',
    rating: 5,
    review: 'Booked Golden Triangle package. Everything was perfectly organized — hotels, transport, sightseeing. Value for money service! The driver was very professional and the car was spotlessly clean.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    package: 'Golden Triangle Package',
    date: 'February 2025',
    verified: true,
  },
  {
    name: 'Rekha Singh',
    location: 'Allahabad',
    rating: 5,
    review: 'Very professional team. Driver arrived on time, car was clean and AC worked perfectly. Prayagraj to Varanasi journey was very smooth. Reasonable prices compared to others. Will book again for our next trip!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    package: 'Outstation Cab Service',
    date: 'March 2025',
    verified: true,
  },
  {
    name: 'Ravi Gupta',
    location: 'Gorakhpur',
    rating: 5,
    review: 'Used Yatraksathi for our family Chardham Yatra. The team was extremely helpful in planning everything. Kedarnath trek support was excellent. Accommodation was good throughout. Spiritual experience of a lifetime!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    package: 'Chardham Yatra Package',
    date: 'June 2024',
    verified: true,
  },
  {
    name: 'Meena Agarwal',
    location: 'Jaipur',
    rating: 5,
    review: 'Booked Goa holiday package. Resort was exactly as described, beach was walking distance. Sightseeing cab service was prompt. Great value for money! Would definitely recommend to friends and family.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
    package: 'Goa Beach Holiday',
    date: 'January 2025',
    verified: true,
  },
  {
    name: 'Vikram Tiwari',
    location: 'Varanasi',
    rating: 5,
    review: 'Best local cab service in Varanasi! I use them regularly for airport pickups and temple visits. Always on time, always professional. The Innova is very comfortable for long journeys. 10/10!',
    avatar: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=100&h=100&fit=crop',
    package: 'Local Cab Service',
    date: 'February 2025',
    verified: true,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'tour', label: 'Tour Packages' },
    { id: 'cab', label: 'Cab Service' },
    { id: 'hotel', label: 'Hotel Booking' },
  ]

  const filtered = testimonials.filter((t) => {
    if (filter === 'all') return true
    if (filter === 'tour') return t.package.toLowerCase().includes('package') || t.package.toLowerCase().includes('yatra')
    if (filter === 'cab') return t.package.toLowerCase().includes('cab') || t.package.toLowerCase().includes('taxi') || t.package.toLowerCase().includes('service')
    if (filter === 'hotel') return t.package.toLowerCase().includes('hotel') || t.package.toLowerCase().includes('resort')
    return true
  })

  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={testimonialsSliderImages} heightClass="min-h-[500px] sm:min-h-[520px] md:min-h-[560px]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/15 border border-white/20 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            ⭐ Trusted by 1000+ Customers
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-2 sm:mb-3 leading-tight">
            Customer Reviews
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 sm:mb-5">Real stories from our happy travellers</p>

          {/* Aggregate Rating */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-5">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">4.9</p>
              <p className="text-gray-300 text-xs mt-1">Out of 5</p>
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 sm:gap-1 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-200 text-xs sm:text-sm">Based on 1000+ reviews</p>
              <p className="text-green-400 text-xs">✓ Verified Customers Only</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="/packages" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">Book Your Trip</Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Contact Us</Link>
          </div>
        </div>
      </HeroSlider>

      {/* Filter */}
      <section className="bg-white py-4 border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                filter === f.id ? 'bg-[#ea2330] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Rating Overview */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Overall Satisfaction', value: '98%', icon: '😊' },
              { label: 'On-Time Service', value: '99%', icon: '⏱️' },
              { label: 'Value for Money', value: '97%', icon: '💰' },
              { label: 'Would Recommend', value: '99%', icon: '👍' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <p className="text-2xl font-bold text-[#ea2330]">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid / Mobile Slider */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-6">{filtered.length} reviews found</p>
          <TestimonialSlider
            items={filtered}
            columns="md:grid-cols-2 lg:grid-cols-3"
            renderCard={(t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-[#ea2330]/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <StarRating rating={t.rating} />
                <p className="text-gray-600 mt-3 mb-5 leading-relaxed text-sm flex-1">&ldquo;{t.review}&rdquo;</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                      {t.verified && (
                        <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs truncate">{t.location} • {t.date}</p>
                    <p className="text-[#ea2330] text-xs font-medium truncate">{t.package}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ea2330] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-playfair">Ready to Create Your Story?</h2>
          <p className="text-red-100 mb-8 text-base sm:text-lg">Join 1000+ happy travellers. Book your perfect Yatra today!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/packages" className="px-8 py-3.5 bg-white text-[#ea2330] rounded-xl font-bold hover:bg-gray-100 transition">
              Explore Packages
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
