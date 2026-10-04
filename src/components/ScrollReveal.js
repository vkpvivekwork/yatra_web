'use client'
import { useRef, useEffect, useState } from 'react'

// ─── ScrollReveal ─────────────────────────────────────────────
// Wraps children in a fade+slide animation triggered when element enters viewport.
// Usage:
//   <ScrollReveal direction="up" delay={100}>
//     <YourComponent />
//   </ScrollReveal>
export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',   // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,          // ms delay before animation starts
  duration = 600,     // ms animation duration
  threshold = 0.12,   // how much of element must be visible
  once = true,        // animate only once
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediate setup — do NOT defer with requestIdleCallback.
    // Deferring keeps content at opacity:0 too long and kills LCP.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const initialTransform = {
    up:    'translateY(32px)',
    down:  'translateY(-32px)',
    left:  'translateX(32px)',
    right: 'translateX(-32px)',
    fade:  'translateY(0)',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : initialTransform,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
