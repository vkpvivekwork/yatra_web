'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

// ─── Parallax Banner ─────────────────────────────────────────────
// Drop between any two sections for a depth-scrolling image break.
// Usage:
//   <ParallaxBanner image="https://..." title="Your Title" subtitle="..." cta={{ label: 'Book Now', href: '/taxi' }} />
export default function ParallaxBanner({
  image,
  overlay = 'bg-black/55',
  minHeight = 'min-h-[260px] md:min-h-[320px]',
  title,
  subtitle,
  cta,
  children,
}) {
  const ref = useRef(null)
  const bgRef = useRef(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Detect mobile/iOS where bg-attachment:fixed doesn't work
    const mobile = window.innerWidth < 768 || /iPhone|iPad|iPod/i.test(navigator.userAgent)
    setIsMobile(mobile)
    if (mobile) return

    const handleScroll = () => {
      if (!ref.current || !bgRef.current) return
      const rect = ref.current.getBoundingClientRect()
      // Move background at 40% of scroll speed for depth effect
      const offset = rect.top * -0.35
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    // Defer scroll listener until browser is idle — avoids blocking initial load (TBT fix)
    const attach = () => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(attach, { timeout: 2000 })
      return () => { cancelIdleCallback(id); window.removeEventListener('scroll', handleScroll) }
    } else {
      const t = setTimeout(attach, 300)
      return () => { clearTimeout(t); window.removeEventListener('scroll', handleScroll) }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      {/* Background layer — slightly oversized so translateY never shows gaps */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '140%',
          top: '-20%',
          willChange: 'transform',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 py-10 w-full max-w-3xl mx-auto">
        {children ?? (
          <>
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-playfair mb-3 drop-shadow-lg">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-[#ea2330] hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl transition shadow-lg text-sm sm:text-base"
              >
                {cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  )
}
