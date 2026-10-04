'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { getBlogBySlug, blogs } from '@/lib/blogs'

// ── Markdown-like renderer (renders ## headings, **bold**, bullet lists) ──────
function renderContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-extrabold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
          {line.replace('## ', '')}
        </h2>
      )
    }
    // H3
    else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-gray-800 mt-7 mb-3">
          {line.replace('### ', '')}
        </h3>
      )
    }
    // Table (markdown table with |)
    else if (line.startsWith('|')) {
      const tableLines = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const headers = tableLines[0].split('|').filter(c => c.trim())
      const rows = tableLines.slice(2).map(r => r.split('|').filter(c => c.trim()))
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#ea2330] text-white">
                {headers.map((h, idx) => <th key={idx} className="px-4 py-3 text-left font-semibold">{h.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, cIdx) => <td key={cIdx} className="px-4 py-3 border-b border-gray-100">{cell.trim()}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }
    // Bullet list
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listItems.push(lines[i].replace(/^[-*] /, ''))
        i++
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#ea2330] mt-1 font-bold shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      )
      continue
    }
    // Empty line
    else if (line.trim() === '') {
      // skip
    }
    // Normal paragraph
    else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      )
    }
    i++
  }

  return elements
}

// Inline formatting: **bold**, *italic*
function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}

// ── Related Blog Card ─────────────────────────────────────────
function RelatedCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
        <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-[#ea2330] font-semibold">{blog.city}</span>
        <p className="text-sm font-semibold text-gray-800 leading-snug mt-0.5 line-clamp-2 group-hover:text-[#ea2330] transition-colors">
          {blog.title}
        </p>
        <span className="text-xs text-gray-400 mt-1 block">{blog.readTime}</span>
      </div>
    </Link>
  )
}

// ── Blog Detail Page ──────────────────────────────────────────
export default function BlogDetailPage() {
  const params = useParams()
  const blog = getBlogBySlug(params.slug)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold text-gray-800">Blog Not Found</h2>
        <p className="text-gray-500">This blog post doesn't exist or may have been removed.</p>
        <Link href="/blog" className="mt-2 bg-[#ea2330] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  const related = blogs.filter(b => b.slug !== blog.slug && (b.city === blog.city || b.tags.some(t => blog.tags.includes(t)))).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Reading progress bar ── */}
      <div className="fixed top-16 left-0 z-50 h-1 bg-[#ea2330] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* ── Hero Image ── */}
      <div className="relative h-[50vh] min-h-[320px] bg-black">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-10">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#ea2330] text-white text-xs font-bold px-3 py-1.5 rounded-full">{blog.category}</span>
              <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">📍 {blog.city}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <span>✍️ {blog.author}</span>
              <span>🗓 {blog.date}</span>
              <span>⏱ {blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Main Article ── */}
          <article className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#ea2330] transition">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#ea2330] transition">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 truncate">{blog.title}</span>
            </nav>

            {/* Excerpt / lead */}
            <div className="bg-red-50 border-l-4 border-[#ea2330] rounded-r-xl px-6 py-4 mb-8">
              <p className="text-gray-700 italic leading-relaxed">{blog.excerpt}</p>
            </div>

            {/* Main content */}
            <div className="prose-custom">
              {renderContent(blog.content)}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <Link key={tag} href={`/blog?q=${tag}`}
                    className="bg-gray-100 hover:bg-red-50 hover:text-[#ea2330] text-gray-600 text-sm px-4 py-1.5 rounded-full transition">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Share bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">Share:</span>
              <a href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' - ' + typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition flex items-center gap-1.5">
                <span>💬</span> WhatsApp
              </a>
              <button onClick={() => { if (typeof window !== 'undefined') { navigator.clipboard.writeText(window.location.href) } }}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition flex items-center gap-1.5">
                <span>🔗</span> Copy Link
              </button>
            </div>

            {/* CTA box */}
            <div className="mt-10 sm:mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 sm:p-7 text-white">
              <h3 className="text-xl font-extrabold mb-2">
                Planning to Visit <span className="text-[#f87171]">{blog.city}?</span>
              </h3>
              <p className="text-gray-400 text-sm mb-5">
                Let Yatra K Sathi make your trip seamless — cab booking, hotel stays, and customized tour packages.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/packages"
                  className="bg-[#ea2330] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition">
                  View Packages
                </Link>
                <Link href="/contact"
                  className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-80 shrink-0 space-y-8">

            {/* Author card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ea2330] to-red-700 rounded-full flex items-center justify-center text-2xl text-white">
                  ✈️
                </div>
                <div>
                  <p className="font-bold text-gray-800">{blog.author}</p>
                  <p className="text-xs text-gray-500">Travel Expert at Yatra K Sathi</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Sharing travel tips, temple guides, and cultural insights from the spiritual heartland of India.
              </p>
            </div>

            {/* Quick booking */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-4 text-base">🚕 Plan Your Trip</h4>
              <div className="space-y-3 text-sm">
                <Link href="/packages" className="flex items-center justify-between p-3 bg-red-50 rounded-xl hover:bg-red-100 transition group">
                  <span className="text-gray-700 font-medium">Tour Packages</span>
                  <span className="text-[#ea2330] group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link href="/taxi" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                  <span className="text-gray-700 font-medium">Cab Booking</span>
                  <span className="text-gray-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link href="/hotels" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                  <span className="text-gray-700 font-medium">Hotel Booking</span>
                  <span className="text-gray-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link href="/boating" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                  <span className="text-gray-700 font-medium">Boat Tours</span>
                  <span className="text-gray-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h4 className="font-extrabold text-gray-800 mb-4 text-base">📚 Related Articles</h4>
                <div className="space-y-3">
                  {related.map(b => <RelatedCard key={b.slug} blog={b} />)}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <Link href="/blog"
              className="block text-center bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-[#ea2330] hover:text-[#ea2330] transition text-sm">
              ← All Blog Posts
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
