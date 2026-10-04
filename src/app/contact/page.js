'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

const contactSliderImages = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=1920&auto=format&fit=crop',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    persons: '2',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

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
          email: form.email,
          travel_date: form.date,
          service_type: form.service || 'general',
          passengers: form.persons,
          message: form.message || `Service: ${form.service} | Persons: ${form.persons}`,
          source: 'contact_page',
        }),
      })
    } catch (err) {
      // Continue even if backend offline
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={contactSliderImages} heightClass="min-h-[340px] sm:min-h-[400px] md:min-h-[460px]">
        <div className="text-center text-white max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair mb-2 sm:mb-3 leading-tight">
            Contact Us
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
            We're here 24/7 to plan your perfect Yatra
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <a href="tel:+916388116241" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">📞 Call Now</a>
            <Link href="/packages" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">View Packages</Link>
          </div>
        </div>
      </HeroSlider>

      {/* Quick Contact Cards */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="tel:+916388116241" className="flex items-center gap-4 p-4 bg-[#ea2330]/5 border border-[#ea2330]/20 rounded-xl hover:bg-[#ea2330]/10 transition group">
            <div className="w-12 h-12 bg-[#ea2330] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Call / WhatsApp</p>
              <p className="font-bold text-gray-800">+91 63881 16241</p>
            </div>
          </a>

          <a href="mailto:yatraksathi@gmail.com" className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition group">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Email Us</p>
              <p className="font-bold text-gray-800 text-sm">yatraksathi@gmail.com</p>
            </div>
          </a>

          <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition group">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
              <p className="font-bold text-gray-800">Chat with Us</p>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 font-playfair mb-1">Plan Your Dream Yatra</h2>
                    <p className="text-gray-500">Fill in the details and we'll get back to you within 30 minutes!</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                        <input
                          required type="text" name="name" placeholder="Enter your full name"
                          value={form.name} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                        <input
                          required type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email" name="email" placeholder="your@email.com"
                        value={form.email} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date <span className="text-red-500">*</span></label>
                        <input
                          required type="date" name="date"
                          value={form.date} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">No. of Persons</label>
                        <select
                          name="persons" value={form.persons} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent"
                        >
                          {[1,2,3,4,5,6,8,10,15,20].map((n) => (
                            <option key={n} value={n}>{n} Person{n>1?'s':''}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Required <span className="text-red-500">*</span></label>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                        {[
                          { val: 'tour', label: '🧳 Tour' },
                          { val: 'taxi', label: '🚗 Cab' },
                          { val: 'hotel', label: '🏨 Hotel' },
                        ].map((s) => (
                          <button
                            key={s.val}
                            type="button"
                            onClick={() => setForm({ ...form, service: s.val })}
                            className={`py-2.5 px-1 sm:px-3 border rounded-xl text-xs sm:text-sm font-medium transition text-center active:scale-95 ${
                              form.service === s.val
                                ? 'bg-[#ea2330] text-white border-[#ea2330]'
                                : 'border-gray-300 text-gray-700 hover:border-[#ea2330]'
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message / Destination</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your travel plans, preferred destination, budget..."
                        value={form.message} onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#ea2330] text-white py-4 rounded-xl font-semibold text-base hover:bg-red-700 transition disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Enquiry — Get Free Quote
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Enquiry Submitted!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you, <strong>{form.name}</strong>! Our team will call you on <strong>{form.phone}</strong> within 30 minutes with the best offer.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <a href="tel:+916388116241" className="bg-[#ea2330] text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                      📞 Call Now
                    </a>
                    <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition">
                      💬 WhatsApp
                    </a>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-gray-400 text-sm hover:text-gray-600">
                    Submit another enquiry
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6">
              {/* Info cards */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-5 font-playfair">Get In Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ea2330] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Call / WhatsApp</p>
                      <a href="tel:+916388116241" className="text-[#ea2330] text-lg font-semibold hover:underline">+91 63881 16241</a>
                      <p className="text-gray-400 text-xs mt-0.5">Available 24/7 for bookings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ea2330] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Email Us</p>
                      <a href="mailto:yatraksathi@gmail.com" className="text-[#ea2330] hover:underline">yatraksathi@gmail.com</a>
                      <p className="text-gray-400 text-xs mt-0.5">We reply within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ea2330] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Our Office</p>
                      <p className="text-gray-600 text-sm">Varanasi, Uttar Pradesh, India</p>
                      <p className="text-gray-400 text-xs mt-0.5">PIN: 221002</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Banner */}
              <div className="bg-[#ea2330] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="font-bold text-xl">We're Available 24/7</p>
                </div>
                <p className="text-red-100 text-sm">Our team is always ready to assist you — mornings, evenings, weekends, and holidays. Don't hesitate to call!</p>
                <div className="mt-4 flex gap-3">
                  <a href="tel:+916388116241" className="bg-white text-[#ea2330] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-600 transition">
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Services Quick Links */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-bold text-gray-800 mb-4">Our Services</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: '🧳 Tour Packages', href: '/packages' },
                    { label: '🚗 Cab Booking', href: '/taxi' },
                    { label: '🏨 Hotel Booking', href: '/hotels' },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="text-center p-3 bg-gray-50 rounded-xl text-xs font-medium text-gray-700 hover:bg-[#ea2330]/5 hover:text-[#ea2330] transition border border-transparent hover:border-[#ea2330]/20"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map placeholder */}
      <section className="h-64 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d83.0!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0xbf9b3f2df3a5df05!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yatra K Sathi Location"
        />
      </section>
    </>
  )
}
