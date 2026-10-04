'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * TestimonialSlider
 * - Mobile (< md / 768px): horizontal drag-to-swipe slider, auto-advances every 3.5s
 * - Tablet / Desktop (≥ md): normal CSS grid
 *
 * Props:
 *   items      — array of data objects to render
 *   renderCard — (item, index) => JSX  — render prop for each card
 *   columns    — Tailwind grid-cols string for desktop, e.g. "md:grid-cols-3"
 *   autoDelay  — milliseconds between auto-slides (default 3500)
 */
export default function TestimonialSlider({
  items = [],
  renderCard,
  columns = 'md:grid-cols-2 lg:grid-cols-3',
  autoDelay = 3500,
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)
  const touchStartX           = useRef(null)
  const touchStartY           = useRef(null)
  const isDragging            = useRef(false)

  const goNext = useCallback(
    () => setCurrent(c => (c + 1) % items.length),
    [items.length]
  )
  const goPrev = useCallback(
    () => setCurrent(c => (c - 1 + items.length) % items.length),
    [items.length]
  )

  // Auto-advance — pauses on touch
  useEffect(() => {
    if (items.length <= 1 || paused) return
    const id = setInterval(goNext, autoDelay)
    return () => clearInterval(id)
  }, [goNext, items.length, paused, autoDelay])

  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    isDragging.current  = false
    setPaused(true)
  }

  const onTouchMove = e => {
    if (touchStartX.current === null) return
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
    // If horizontal movement is dominant, prevent vertical scroll
    if (dx > dy && dx > 8) {
      isDragging.current = true
      e.preventDefault()
    }
  }

  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? goNext() : goPrev()
    touchStartX.current = null
    touchStartY.current = null
    // Resume auto-advance after 4 seconds of inactivity
    setTimeout(() => setPaused(false), 4000)
  }

  return (
    <>
      {/* ── Mobile Slider (hidden on md+) ─────────────────────── */}
      <div
        className="md:hidden relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full shrink-0 px-0.5">
              {renderCard(item, i)}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
              aria-label={`Go to review ${i + 1}`}
              className="p-1 touch-manipulation select-none"
            >
              <span className={[
                'block rounded-full transition-all duration-300',
                i === current
                  ? 'w-5 h-2 bg-[#ea2330]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400',
              ].join(' ')} />
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <p className="text-center text-xs text-gray-400 mt-1 select-none">
          {current + 1} / {items.length}
        </p>
      </div>

      {/* ── Desktop Grid (hidden below md) ────────────────────── */}
      <div className={`hidden md:grid ${columns} gap-6`}>
        {items.map((item, i) => renderCard(item, i))}
      </div>
    </>
  )
}
