'use client'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="max-w-lg w-full mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">Your booking has been confirmed. Our team will contact you shortly with the details.</p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Booking ID</span>
              <span className="font-semibold text-gray-800">#YKS{Math.floor(Math.random() * 90000) + 10000}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600 font-semibold">Confirmed</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Support</span>
              <span className="font-semibold text-gray-800">+91 63881 162419</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/" className="w-full py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 transition">
              Back to Home
            </Link>
            <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-600 transition">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
