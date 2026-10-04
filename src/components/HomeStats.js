'use client'
import { useState, useEffect, useRef } from 'react'

// Animated counter — starts when element enters viewport
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = end / (duration / 16)
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + step, end)
          setCount(Math.floor(current))
          if (current >= end) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>
}

const stats = [
  { val: 500, suffix: '+', label: 'Happy Customers' },
  { val: 6,   suffix: '+', label: 'Destinations Covered' },
  { val: 4,   suffix: '+', label: 'Years Experience' },
  { val: 100, suffix: '%', label: 'Safe & Verified' },
]

export default function HomeStats() {
  return (
    <section className="bg-[#ea2330] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
          {stats.map((s, i) => (
            <div key={i} className="py-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                <Counter end={s.val} suffix={s.suffix} />
              </p>
              <p className="text-red-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
