'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

/**
 * HeroSlider — Production-ready responsive slider
 *
 * Breakpoints:
 *   Mobile  : < 640px
 *   Tablet  : 640px – 1023px
 *   Desktop : ≥ 1024px
 *
 * Features:
 *   ✅ Auto-slides every 3 s (pauses on hover / touch)
 *   ✅ Touch swipe support (left/right)
 *   ✅ Responsive arrow sizes & positions
 *   ✅ Responsive dots with tap-friendly hit areas
 *   ✅ Black transparent overlay
 *   ✅ Content never overlaps arrows on any screen
 *
 * Props:
 *   images       string[]   Image URL array (3–4 recommended)
 *   heightClass  string     Tailwind height — always use min-h-* not h-*
 *   overlayClass string     Overlay colour, default bg-black/55
 *   children               Slot for title / subtitle / CTAs
 */
export default function HeroSlider({
  images = [],
  heightClass = 'min-h-[55vh]',
  overlayClass = 'bg-black/55',
  children,
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  /* ── navigation helpers ───────────────────────────────────── */
  const goNext = useCallback(
    () => setCurrent(c => (c + 1) % images.length),
    [images.length]
  )
  const goPrev = useCallback(
    () => setCurrent(c => (c - 1 + images.length) % images.length),
    [images.length]
  )

  /* ── auto-advance (3 s, pauses on hover/touch) ────────────── */
  useEffect(() => {
    if (images.length <= 1 || paused) return
    const id = setInterval(goNext, 3000)
    return () => clearInterval(id)
  }, [goNext, images.length, paused])

  /* ── touch / swipe ────────────────────────────────────────── */
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? goNext() : goPrev()
    touchStartX.current = null
  }

  return (
    <section
      /* ── outer shell ─────────────────────────────────────── */
      className={[
        'relative w-full overflow-hidden bg-black',
        'flex items-center',          // vertical centering of content
        heightClass,
      ].join(' ')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      {/* ── slides ───────────────────────────────────────────── */}
      {images.map((src, i) => (
        <div
          key={i}
          className={[
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            i === current ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── black overlay ────────────────────────────────────── */}
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />

      {/* ── content wrapper ──────────────────────────────────────
          Horizontal padding:
            Mobile  px-11  (44px) — arrow is w-8 at left-2 → right edge = 40px → 4px gap ✓
            Tablet  px-14  (56px) — arrow is w-10 at left-3 → right edge = 52px → 4px gap ✓
            Desktop px-20  (80px) — arrow is w-12 at left-4 → right edge = 64px → 16px gap ✓
          Vertical padding keeps content above dots:
            pb-10 / pb-12 so dots never overlap last line
      ──────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full px-11 sm:px-14 md:px-20 pt-8 sm:pt-10 pb-12 sm:pb-14 md:pb-16">
        {children}
      </div>

      {/* ── prev arrow ───────────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className={[
          'absolute top-1/2 -translate-y-1/2 z-30',
          'left-2 sm:left-3 md:left-4',
          'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
          'rounded-full flex items-center justify-center',
          'bg-black/40 hover:bg-black/70 active:scale-95',
          'text-white text-xl sm:text-2xl font-bold leading-none',
          'select-none touch-manipulation',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
        ].join(' ')}
      >
        ‹
      </button>

      {/* ── next arrow ───────────────────────────────────────── */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className={[
          'absolute top-1/2 -translate-y-1/2 z-30',
          'right-2 sm:right-3 md:right-4',
          'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
          'rounded-full flex items-center justify-center',
          'bg-black/40 hover:bg-black/70 active:scale-95',
          'text-white text-xl sm:text-2xl font-bold leading-none',
          'select-none touch-manipulation',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
        ].join(' ')}
      >
        ›
      </button>

      {/* ── indicator dots ───────────────────────────────────────
          Each dot has a large invisible tap target (p-1.5) for mobile.
      ──────────────────────────────────────────────────────── */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="p-1.5 sm:p-2 touch-manipulation select-none"
          >
            <span
              className={[
                'block rounded-full transition-all duration-300',
                i === current
                  ? 'w-5 sm:w-6 h-2 sm:h-2.5 bg-[#ea2330]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/55 hover:bg-white/80',
              ].join(' ')}
            />
          </button>
        ))}
      </div>

    </section>
  )
}
