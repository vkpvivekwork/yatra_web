'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ForceCruiserPage() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', passengers: '12' })
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
          name: form.name, phone: form.phone, travel_date: form.date,
          service_type: 'taxi',
          message: `Vehicle: Force Cruiser | Pickup: ${form.pickup} | Drop: ${form.drop} | Passengers: ${form.passengers}`,
          source: 'force_cruiser_page',
        }),
      })
    } catch (err) {}
    finally { setLoading(false); setSubmitted(true) }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-black py-20 text-white text-center px-4">
        <div className="inline-flex items-center bg-blue-500/20 border border-blue-400 text-blue-300 text-sm px-4 py-1.5 rounded-full mb-4">
          🚌 Luxury Bus
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3">
          Force Cruiser <span className="text-blue-400">on Rent</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-xl mx-auto">Premium luxury bus for 12-15 passengers. Ideal for group tours, corporate outings, and family vacations with AC comfort.</p>
        <div className="flex justify-center gap-8 mt-6 text-sm">
          <span>👥 12-15 Seater</span>
          <span>❄️ Full AC</span>
          <span>🧳 Spacious</span>
          <span>💰 ₹18/km</span>
        </div>
      </section>

      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link> &nbsp;›&nbsp;
          <Link href="/taxi" className="hover:text-[#ea2330]">Cab Service</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">Force Cruiser on Rent</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 font-playfair mb-4">Force Cruiser — Specifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Seating', val: '12-15 Passengers' },
                { label: 'Luggage', val: 'Extra Spacious' },
                { label: 'AC', val: 'Full AC' },
                { label: 'Rate', val: '₹18/km' },
                { label: 'Min Fare', val: '₹2,000' },
                { label: 'Type', val: 'Luxury Bus' },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="font-bold text-[#ea2330] text-lg">{s.val}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Routes — Force Cruiser</h2>
            <div className="space-y-3">
              {[
                { from: 'Varanasi', to: 'Ayodhya', price: '₹3,600', km: '200 km' },
                { from: 'Varanasi', to: 'Prayagraj', price: '₹2,250', km: '125 km' },
                { from: 'Varanasi', to: 'Lucknow', price: '₹5,220', km: '290 km' },
                { from: 'Varanasi', to: 'Gorakhpur', price: '₹4,230', km: '235 km' },
              ].map(r => (
                <div key={r.to} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#ea2330] transition">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-semibold text-gray-800">{r.from}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="font-semibold text-gray-800">{r.to}</span>
                    <span className="text-gray-400 text-xs">({r.km})</span>
                  </div>
                  <span className="font-bold text-[#ea2330]">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book Force Cruiser</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input required type="text" placeholder="Your Name *" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input required type="tel" placeholder="Mobile Number *" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input required type="text" placeholder="📍 Pickup Location *" value={form.pickup}
                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input required type="text" placeholder="🏁 Drop Location *" value={form.drop}
                    onChange={(e) => setForm({ ...form, drop: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <input required type="date" value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                  <button type="submit" disabled={loading}
                    className="w-full bg-[#ea2330] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                    {loading ? 'Sending...' : 'Book Now'}
                  </button>
                  <a href="tel:+916388116241"
                    className="block text-center border-2 border-[#ea2330] text-[#ea2330] py-2.5 rounded-xl font-semibold hover:bg-[#ea2330] hover:text-white transition text-sm">
                    📞 +91 63881 16241
                  </a>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Received!</h3>
                <p className="text-gray-500 text-sm mb-4">We will call you within 15 minutes.</p>
                <button onClick={() => setSubmitted(false)} className="text-[#ea2330] text-sm hover:underline">Book another</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
