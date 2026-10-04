'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from '@/components/HeroSlider'

const blogSliderImages = [
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=1920&auto=format&fit=crop',
]
import { blogs, allCities } from '@/lib/blogs'

// ── Blog Card ──────────────────────────────────────────────────
function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {blog.category}
        </span>
        {/* City badge */}
        <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full z-10 backdrop-blur-sm">
          📍 {blog.city}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span>🗓 {blog.date}</span>
          <span>•</span>
          <span>⏱ {blog.readTime}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#ea2330] transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {blog.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div className="flex items-center gap-1 text-[#ea2330] text-sm font-semibold">
          Read Full Blog
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

// ── Featured Card (large) ──────────────────────────────────────
function FeaturedBlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group relative block rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1 rounded-full">⭐ Featured</span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">📍 {blog.city}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug mb-2 group-hover:text-[#f87171] transition-colors">
          {blog.title}
        </h2>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">{blog.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>🗓 {blog.date}</span>
          <span>•</span>
          <span>⏱ {blog.readTime}</span>
        </div>
      </div>
    </Link>
  )
}

// ── Main Blog Page ─────────────────────────────────────────────
export default function BlogPage() {
  const [activeCity, setActiveCity] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = blogs.filter(blog => {
    const matchCity = activeCity === 'All'
      || (activeCity === 'Customer Story' ? blog.category === 'Customer Story' : blog.city === activeCity)
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCity && matchSearch
  })

  const featured = blogs[0]
  const rest = filtered.filter(b => b.slug !== featured.slug)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Banner — Image Slider ── */}
      <HeroSlider images={blogSliderImages} heightClass="min-h-[540px] sm:min-h-[560px] md:min-h-[580px]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#ea2330] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 sm:mb-4 tracking-widest uppercase">
            📖 Yatra K Sathi Blog
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
            Travel Stories &<br />
            <span className="text-[#f87171]">Destination Guides</span>
          </h1>
          <p className="text-gray-200 text-xs sm:text-base md:text-lg mb-4 sm:mb-6">
            Explore detailed travel guides, temple tips, local food recommendations, and cultural insights for Varanasi, Ayodhya, Prayagraj, Chitrakoot and beyond.
          </p>
          {/* Search */}
          <div className="relative max-w-lg mx-auto mb-4 sm:mb-5">
            <input
              type="text"
              placeholder="Search blogs — Varanasi, Aarti, Ayodhya..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 rounded-full px-6 py-3 sm:py-3.5 pr-12 focus:outline-none focus:border-[#ea2330] text-sm"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="/packages" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">View Packages</Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Plan Your Trip</Link>
          </div>
        </div>
      </HeroSlider>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ── Featured Blog ── */}
        {activeCity === 'All' && !searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
              📌 Featured Post
            </h2>
            <FeaturedBlogCard blog={featured} />
          </div>
        )}

        {/* ── City Filter ── */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          <span className="text-sm font-semibold text-gray-600 shrink-0">Filter by city:</span>
          {allCities.map(city => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shrink-0 ${
                activeCity === city
                  ? 'bg-[#ea2330] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#ea2330] hover:text-[#ea2330]'
              }`}
            >
              {city === 'All' ? '🌐 All' :
               city === 'Varanasi' ? '🕉️ Varanasi' :
               city === 'Ayodhya' ? '🛕 Ayodhya' :
               city === 'Prayagraj' ? '💧 Prayagraj' :
               city === 'Chitrakoot' ? '🌿 Chitrakoot' : '⭐ Customer Stories'}
            </button>
          ))}
        </div>

        {/* ── Results count ── */}
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} blog{filtered.length !== 1 ? 's' : ''} found
          {activeCity !== 'All' ? ` in ${activeCity}` : ''}
          {searchQuery ? ` for "${searchQuery}"` : ''}
        </p>

        {/* ── Blog Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {(activeCity === 'All' && !searchQuery ? rest : filtered).map(blog => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No blogs found</h3>
            <p className="text-gray-500">Try a different search term or city filter</p>
            <button onClick={() => { setActiveCity('All'); setSearchQuery('') }}
              className="mt-4 text-[#ea2330] font-semibold underline text-sm">
              Clear all filters
            </button>
          </div>
        )}

        {/* ── Newsletter CTA ── */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-10 text-center">
          <div className="text-4xl mb-4">✈️</div>
          <h3 className="text-2xl font-extrabold text-white mb-2">Planning a Trip to UP?</h3>
          <p className="text-gray-400 mb-7 max-w-md mx-auto">
            Let Yatra K Sathi plan your perfect spiritual journey. Custom packages, cab booking, and hotel stays across Varanasi, Ayodhya, Prayagraj & beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="bg-[#ea2330] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
              View Tour Packages
            </Link>
            <Link href="/contact"
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
