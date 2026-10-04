'use client'
import { useState } from 'react'
import { submitEnquiry } from '@/lib/api'

const cabDestinations = ['Ayodhya', 'Prayagraj', 'Chitrakoot', 'Vindhyachal', 'Bodh Gaya', 'Lucknow', 'Agra', 'Delhi']
const boatingServices = ['Ganga Aarti Boat Ride', '84 Ghats Tour', 'Sunrise Boat Ride', 'Birthday Celebration', 'Anniversary on Boat', 'Pre-Wedding Shoot', 'Corporate Event']

export default function HeroBookingWidget() {
  const [tab, setTab] = useState('cab')
  const [form, setForm] = useState({ name: '', phone: '', from: 'Varanasi', to: '', date: '', vehicle: '', service: 'Ganga Aarti Boat Ride', persons: '2' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const message = tab === 'cab'
      ? `CAB BOOKING: ${form.from} → ${form.to} | Date: ${form.date} | Vehicle: ${form.vehicle}`
      : tab === 'boating'
      ? `BOATING: ${form.service} | Date: ${form.date} | Persons: ${form.persons}`
      : `TOUR PACKAGE: ${form.to || 'General'} | Date: ${form.date} | Persons: ${form.persons}`
    try {
      await submitEnquiry({ name: form.name, phone: form.phone, travel_date: form.date, service_type: tab, message, source: 'hero_widget' })
    } catch (e) {}
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-1">Booking Request Sent!</h3>
      <p className="text-gray-500 text-sm mb-4">We'll call you within 15 minutes.</p>
      <a href="tel:+916388116241" className="block w-full bg-[#ea2330] text-white py-3 rounded-xl font-bold">📞 +91 63881 16241</a>
      <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-gray-400 hover:text-gray-600">New Booking</button>
    </div>
  )

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex">
        {[{ id: 'cab', label: '🚗 Cab' }, { id: 'boating', label: '⛵ Boating' }, { id: 'package', label: '🧳 Package' }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 py-3 text-sm font-bold transition-all ${tab === t.id ? 'bg-[#ea2330] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-5 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input required type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
            className="col-span-2 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
          <input required type="tel" placeholder="Mobile Number *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
            className="col-span-2 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
        </div>

        {tab === 'cab' && (
          <div className="grid grid-cols-2 gap-3">
            <select value={form.from} onChange={e => setForm({...form, from: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              <option value="Varanasi">📍 Varanasi</option>
              <option value="Ayodhya">📍 Ayodhya</option>
              <option value="Prayagraj">📍 Prayagraj</option>
            </select>
            <select value={form.to} onChange={e => setForm({...form, to: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              <option value="">🏁 Destination</option>
              {cabDestinations.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
            <select value={form.vehicle} onChange={e => setForm({...form, vehicle: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              <option value="">🚗 Vehicle</option>
              <option value="Swift Dzire">Swift Dzire (4 Seat)</option>
              <option value="Ertiga">Ertiga (7 Seat)</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="Tempo Traveller">Tempo Traveller</option>
            </select>
          </div>
        )}

        {tab === 'boating' && (
          <div className="grid grid-cols-2 gap-3">
            <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
              className="col-span-2 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              {boatingServices.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
            <select value={form.persons} onChange={e => setForm({...form, persons: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              {['1','2','3','4','5','6','7','8','10','15','20+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
            </select>
          </div>
        )}

        {tab === 'package' && (
          <div className="grid grid-cols-2 gap-3">
            <select value={form.to} onChange={e => setForm({...form, to: e.target.value})}
              className="col-span-2 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              <option value="">Select Destination</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Varanasi + Ayodhya">Varanasi + Ayodhya</option>
              <option value="Golden Triangle">Golden Triangle</option>
              <option value="Chardham">Chardham Journey</option>
              <option value="Divya Dham">Divya Dham Journey</option>
            </select>
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
            <select value={form.persons} onChange={e => setForm({...form, persons: e.target.value})}
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
              {['1','2','3','4','5','6','8','10','15','20+'].map(n => <option key={n} value={n}>{n} Persons</option>)}
            </select>
          </div>
        )}

        <button type="submit" disabled={loading}
          className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition text-sm tracking-wide shadow-lg shadow-red-200 disabled:opacity-60">
          {loading ? 'Sending...' : '🔍 Get Free Quote Now'}
        </button>
        <p className="text-center text-xs text-gray-400">Or call us directly: <a href="tel:+916388116241" className="text-[#ea2330] font-semibold">+91 63881 16241</a></p>
      </form>
    </div>
  )
}
