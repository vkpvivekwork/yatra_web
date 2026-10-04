import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

const offerSliderImages = [
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
]

export const metadata = {
  title: 'Special Offers - Yatra K Sathi',
  description: 'Grab the best deals and discounts on tour packages, taxi, and hotel bookings.',
}

export default function OfferPage() {
  return (
    <>
      {/* Hero — Image Slider */}
      <HeroSlider images={offerSliderImages} heightClass="min-h-[400px] sm:min-h-[460px] md:min-h-[520px]" overlayClass="bg-black/60">
        <div className="text-center text-white max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-5">
            <span className="animate-pulse text-yellow-300">🔥</span>
            <span className="font-semibold text-xs sm:text-sm md:text-base">Limited Time Offer — 20% OFF</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair mb-2 sm:mb-3 leading-tight">
            Special Offers
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
            Exclusive deals on spiritual &amp; leisure tour packages
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="/packages" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition text-sm text-center">Grab the Deal</Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black active:scale-95 transition text-sm text-center">Contact Us</Link>
          </div>
        </div>
      </HeroSlider>

      {/* Varanasi Special Offer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Offer Details */}
            <div>
              <div className="inline-block bg-red-100 text-[#ea2330] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                🔥 Limited Time — 20% OFF
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-playfair mb-4">
                Varanasi Kashi Darshan Premium Package
              </h2>
              <p className="text-gray-600 mb-4">3 Days / 2 Nights | Ganga Aarti | Temple Tour | Airport Pickup</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">4.9/5 | 500+ Happy Yatris</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'VIP Darshan Assistance (No Waiting)',
                  'Private AC Cab for 3 Days',
                  'Best Hotel Stay Included',
                  'Pickup & Drop from Station/Airport',
                  'English/Hindi Speaking Guide',
                  '24/7 Support during trip',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-green-500">✓</span> {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-gray-400 line-through text-xl">₹6,249</span>
                <span className="text-[#ea2330] font-bold text-4xl">₹4,999</span>
                <span className="text-gray-500 text-sm">/person</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-3 bg-[#ea2330] text-white rounded-lg font-bold hover:bg-red-700 transition text-center">
                  Book This Offer
                </Link>
                <a href="https://wa.me/916388116241?text=I am interested in the Varanasi special offer" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#25D366] text-white rounded-lg font-bold hover:bg-green-600 transition text-center">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Quote Form */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get Free Quote</h3>
              <p className="text-gray-500 text-sm mb-6">Fill details to get best price on WhatsApp</p>
              <form className="space-y-4">
                <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                <button type="submit" className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                  Get Price on WhatsApp
                </button>
                <p className="text-gray-400 text-xs text-center">No spam guaranteed.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
