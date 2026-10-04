'use client'
import { useState, useEffect } from 'react'
import { submitEnquiry } from '@/lib/api'

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', mobile: '', destination: '' })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Show popup once per day using localStorage timestamp
    const KEY = 'popup_last_shown'
    const last = localStorage.getItem(KEY)
    const ONE_DAY = 24 * 60 * 60 * 1000 // 24 hours in ms

    if (last && Date.now() - parseInt(last, 10) < ONE_DAY) return

    const timer = setTimeout(() => setIsOpen(true), 5000) // 5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined') localStorage.setItem('popup_last_shown', Date.now().toString())
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.mobile.trim()) {
      setError('Please enter your name and mobile number.')
      return
    }
    if (form.mobile.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    setLoading(true)
    const res = await submitEnquiry({ ...form, source: 'popup_form', service: 'Tour Package' })
    setLoading(false)

    if (res.ok && res.data.success) {
      setSubmitted(true)
      setTimeout(() => { setIsOpen(false); localStorage.setItem('popup_last_shown', Date.now().toString()) }, 3000)
    } else {
      setError(res.data.message || 'Something went wrong. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-backdrop">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        {/* Top Banner */}
        <div className="bg-[#ea2330] text-white text-center px-6 py-4">
          <h2 className="text-xl font-bold">🙏 Plan Your Dream Yatra!</h2>
          <p className="text-red-100 text-sm mt-1">Get Exclusive Deals on Kashi & Ayodhya</p>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full text-white flex items-center justify-center transition"
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 text-sm">We will contact you shortly with the best deals.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination (Optional)</label>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="e.g. Varanasi, Ayodhya"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-60"
              >
                {loading ? 'Submitting...' : '🎯 Get Free Quote Now'}
              </button>
              <p className="text-center text-gray-400 text-xs">We respect your privacy. No spam.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
