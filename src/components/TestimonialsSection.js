'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition border border-gray-100 h-full">
      <div className="flex gap-0.5 mb-3">
        {[...Array(t.rating || 5)].map((_, j) => (
          <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 text-sm italic leading-relaxed mb-4 line-clamp-3">"{t.review}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <Image
          src={t.avatar || t.avatar_url || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <div>
          <p className="font-bold text-gray-800 text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection({ items = [], autoDelay = 3500 }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const goNext = useCallback(() => setCurrent(c => (c + 1) % items.length), [items.length])
  const goPrev = useCallback(() => setCurrent(c => (c - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (items.length <= 1 || paused) return
    const id = setInterval(goNext, autoDelay)
    return () => clearInterval(id)
  }, [goNext, items.length, paused, autoDelay])

  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setPaused(true)
  }

  const onTouchMove = e => {
    if (touchStartX.current === null) return
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
    if (dx > dy && dx > 8) e.preventDefault()
  }

  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? goNext() : goPrev()
    touchStartX.current = null
    touchStartY.current = null
    setTimeout(() => setPaused(false), 4000)
  }

  return (
    <>
      {/* Mobile Slider */}
      <div
        className="md:hidden relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((t, i) => (
            <div key={t.id || i} className="w-full shrink-0 px-1">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
              aria-label={`Review ${i + 1}`}
              className="p-1 touch-manipulation select-none"
            >
              <span className={[
                'block rounded-full transition-all duration-300',
                i === current ? 'w-5 h-2 bg-[#ea2330]' : 'w-2 h-2 bg-gray-300',
              ].join(' ')} />
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-1 select-none">
          {current + 1} / {items.length}
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((t, i) => (
          <TestimonialCard key={t.id || i} t={t} />
        ))}
      </div>
    </>
  )
}
