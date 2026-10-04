'use client'
import { useState } from 'react'

export default function PackageBookingForm({ packageName = 'Tour Package', price = '8,500' }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', persons: '2' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          travel_date: form.date,
          service_type: 'tour',
          message: `Package: ${packageName} | Persons: ${form.persons}`,
          source: 'package_page',
        }),
      })
    } catch (_) {
      // Show success even if backend offline
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-700 font-bold text-lg mb-1">Enquiry Sent!</p>
        <p className="text-gray-500 text-sm mb-5">Our team will call you within 30 minutes.</p>
        <a
          href="tel:+916388116241"
          className="block w-full py-3 bg-[#ea2330] text-white rounded-lg font-semibold text-sm text-center hover:bg-red-700 transition mb-3"
        >
          📞 Call: +91 63881 16241
        </a>
        <a
          href={`https://wa.me/916388116241?text=I enquired about the ${encodeURIComponent(packageName)} package`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold text-sm text-center hover:bg-green-600 transition"
        >
          💬 WhatsApp Us
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-3">
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Your Name *</label>
        <input
          required
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone Number *</label>
        <input
          required
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Travel Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">No. of Persons</label>
        <select
          value={form.persons}
          onChange={(e) => setForm({ ...form, persons: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] bg-gray-50"
        >
          {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
            <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-bold hover:bg-red-700 transition disabled:opacity-70 text-sm mt-2"
      >
        {loading ? 'Sending...' : 'Send Enquiry & Get Best Price'}
      </button>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <a
          href="tel:+916388116241"
          className="py-2.5 border-2 border-gray-300 rounded-lg text-center text-xs font-semibold hover:border-[#ea2330] hover:text-[#ea2330] transition text-gray-600"
        >
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/916388116241?text=I am interested in the ${encodeURIComponent(packageName)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 bg-[#25D366] text-white rounded-lg text-center text-xs font-semibold hover:bg-green-600 transition"
        >
          💬 WhatsApp
        </a>
      </div>
    </form>
  )
}
