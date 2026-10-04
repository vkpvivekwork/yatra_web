import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const packageData = {
  1: {
    title: 'Varanasi Ganga Darshan',
    duration: '2 Days / 1 Night',
    price: '4,999',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'Experience the spiritual capital of India with our guided tour of Varanasi — the city of Lord Shiva.',
    itinerary: [
      { day: 'Day 01', title: 'Arrival & Ganga Aarti', desc: 'Pick up from Airport/Station. Check-in to hotel. Evening boat ride and the magnificent Ganga Aarti at Dashashwamedh Ghat.' },
      { day: 'Day 02', title: 'Temple Tour & Departure', desc: 'Morning Kashi Vishwanath Darshan, Kaal Bhairav, and Sarnath tour. Drop off at station/airport.' },
    ],
    inclusions: ['AC Vehicle', 'Hotel (1 Night)', 'Breakfast', 'Driver & Fuel'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees'],
  },
  2: {
    title: 'Ayodhya Ram Mandir Tour',
    duration: '1 Day',
    price: '1,499',
    image: '/Ayodhya.jpg',
    overview: 'Visit the holy birthplace of Lord Rama and the grand Ram Mandir — a once in a lifetime experience.',
    itinerary: [
      { day: 'Day 01', title: 'Darshan & Sightseeing', desc: 'Pickup from Ayodhya Cantt/Airport. Ram Janmabhoomi Darshan, Hanuman Garhi, and Kanak Bhawan. Evening Saryu Aarti.' },
    ],
    inclusions: ['AC Vehicle', 'Driver & Fuel', 'Guide'],
    exclusions: ['Train/Flight Tickets', 'Meals', 'Entry Fees'],
  },
  3: {
    title: 'Chardham Yatra Package',
    duration: '10 Days / 9 Nights',
    price: '25,999',
    image: '/Chardham.jpg',
    overview: 'The ultimate pilgrimage tour to all four sacred Dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    itinerary: [
      { day: 'Day 1-2', title: 'Haridwar to Barkot', desc: 'Journey begins from Haridwar. Stay at Barkot.' },
      { day: 'Day 3-5', title: 'Yamunotri & Gangotri', desc: 'Trek to Yamunotri and drive to Uttarkashi/Gangotri.' },
      { day: 'Day 6-8', title: 'Kedarnath Dham', desc: 'Drive to Guptkashi, trek to Kedarnath ji.' },
      { day: 'Day 9-10', title: 'Badrinath & Return', desc: 'Badrinath Darshan and return journey to Rishikesh/Haridwar.' },
    ],
    inclusions: ['AC Vehicle', 'Hotels (9 Nights)', 'Daily Breakfast', 'Driver & Fuel', 'Guide'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Helicopter charges', '5% GST'],
  },
  4: {
    title: 'Goa Beach Holiday',
    duration: '4 Days / 3 Nights',
    price: '12,500',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop',
    overview: 'Relax and rejuvenate at the beautiful beaches of North and South Goa.',
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Goa', desc: 'Pickup from Dabolim Airport. Check-in and leisure time at Calangute beach.' },
      { day: 'Day 02', title: 'North Goa Tour', desc: 'Visit Fort Aguada, Baga Beach, and Anjuna Beach. Nightlife experience.' },
      { day: 'Day 03', title: 'South Goa Tour', desc: 'Visit Old Goa Churches, Mangeshi Temple, and Colva Beach.' },
      { day: 'Day 04', title: 'Departure', desc: 'Shopping and drop at Airport.' },
    ],
    inclusions: ['AC Vehicle', 'Hotel (3 Nights)', 'Daily Breakfast', 'Sightseeing'],
    exclusions: ['Flight Tickets', 'Lunch & Dinner', 'Water Sports', '5% GST'],
  },
  'golden-triangle-varanasi-ayodhya-prayagraj': {
    title: 'Golden Triangle with Varanasi, Ayodhya & Prayagraj',
    duration: '8 Days / 7 Nights',
    price: '18,999',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'A divine journey combining the Golden Triangle (Delhi, Agra, Jaipur) with the sacred cities of Varanasi, Ayodhya, and Prayagraj for a complete spiritual experience.',
    itinerary: [
      { day: 'Day 01', title: 'Delhi Arrival', desc: 'Arrive in Delhi. Check-in to hotel. Visit India Gate, Raj Ghat, and Lal Qila in the evening.' },
      { day: 'Day 02', title: 'Delhi Sightseeing', desc: 'Jama Masjid, Chandni Chowk bazaar tour, Qutub Minar, and Lotus Temple.' },
      { day: 'Day 03', title: 'Agra Journey', desc: 'Drive to Agra. Visit Taj Mahal at sunset and Agra Fort.' },
      { day: 'Day 04', title: 'Jaipur Exploration', desc: 'Drive to Jaipur. Visit City Palace, Jantar Mantar, and Hawa Mahal.' },
      { day: 'Day 05', title: 'Varanasi Arrival', desc: 'Fly to Varanasi. Evening Ganga Aarti at Dashashwamedh Ghat.' },
      { day: 'Day 06', title: 'Ayodhya & Prayagraj', desc: 'Drive to Ayodhya for Ram Mandir Darshan. Visit Prayagraj in the evening.' },
      { day: 'Day 07', title: 'Prayagraj & Varanasi', desc: 'Prayagraj temple tours and Triveni Sangam. Return to Varanasi.' },
      { day: 'Day 08', title: 'Departure', desc: 'Morning Kashi Vishwanath Darshan and Sarnath visit. Depart Varanasi.' },
    ],
    inclusions: ['AC Vehicle', 'Hotels (7 Nights)', 'Daily Breakfast', 'Domestic Flights', 'Driver & Fuel', 'Professional Guide'],
    exclusions: ['International Flights', 'Lunch & Dinner', 'Monument Entry Fees', '5% GST'],
  },
  'divya-dham-yatra': {
    title: 'Divya Dham Yatra - 4 Sacred Abodes',
    duration: '6 Days / 5 Nights',
    price: '14,999',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'Embark on a sacred pilgrimage to the four divine abodes: Ayodhya (Ram Mandir), Varanasi (Kashi), Prayagraj (Sangam), and Bodh Gaya (Mahabodhi Temple).',
    itinerary: [
      { day: 'Day 01', title: 'Ayodhya Arrival', desc: 'Arrive in Ayodhya. Check-in and evening visit to Ram Mandir and Kanak Bhawan.' },
      { day: 'Day 02', title: 'Ayodhya Full Day', desc: 'Morning Darshan at Ram Janmabhoomi. Visit Hanuman Garhi, Nageshwarnath Temple, and Saryu Aarti.' },
      { day: 'Day 03', title: 'Varanasi Journey', desc: 'Drive to Varanasi. Evening Ganga Aarti and boat ride on the sacred river.' },
      { day: 'Day 04', title: 'Varanasi & Prayagraj', desc: 'Kashi Vishwanath Darshan and Sarnath in the morning. Drive to Prayagraj in the afternoon.' },
      { day: 'Day 05', title: 'Prayagraj to Bodh Gaya', desc: 'Triveni Sangam, Allahpur Temple tour. Drive to Bodh Gaya. Evening Mahabodhi Temple visit.' },
      { day: 'Day 06', title: 'Bodh Gaya & Departure', desc: 'Mahabodhi Temple Darshan, Bodhi Tree circumambulation, and return journey.' },
    ],
    inclusions: ['AC Vehicle', 'Hotels (5 Nights)', 'Daily Breakfast', 'Driver & Fuel', 'Guide Services'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees', '5% GST'],
  },
  'varanasi-ayodhya-3-day': {
    title: 'Varanasi & Ayodhya - 3 Days Divine Tour',
    duration: '3 Days / 2 Nights',
    price: '8,999',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'Experience the essence of North India spirituality with a combined tour of Varanasi and Ayodhya, the two most sacred pilgrimage destinations.',
    itinerary: [
      { day: 'Day 01', title: 'Varanasi Arrival', desc: 'Airport/Station pickup and check-in. Evening Ganga Aarti boat ride at Dashashwamedh Ghat.' },
      { day: 'Day 02', title: 'Varanasi Full Day', desc: 'Early morning Ghats tour and Kashi Vishwanath Darshan. Afternoon Sarnath visit. Evening second Ganga Aarti.' },
      { day: 'Day 03', title: 'Ayodhya Visit', desc: 'Drive to Ayodhya. Ram Mandir and Kanak Bhawan Darshan. Hanuman Garhi visit. Evening Saryu Aarti. Return to Varanasi.' },
    ],
    inclusions: ['AC Vehicle', 'Hotels (2 Nights)', 'Daily Breakfast', 'Driver & Fuel'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees', '5% GST'],
  },
  'varanasi-tour': {
    title: 'Varanasi Sacred City Tour',
    duration: '2 Days / 1 Night',
    price: '5,499',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'Discover the mystical charm of Varanasi, the city of eternal peace, with exclusive Ghat tours, temple darshans, and spiritual experiences.',
    itinerary: [
      { day: 'Day 01', title: 'Arrival & Evening Aarti', desc: 'Airport/Station pickup. Hotel check-in. Evening Ganga Aarti at Dashashwamedh Ghat with boat ride.' },
      { day: 'Day 02', title: 'Temple & Sarnath Tour', desc: 'Pre-dawn Ghats walk, Kashi Vishwanath Temple Darshan, Annapurna Temple, and Sarnath Buddhist complex. Afternoon departure.' },
    ],
    inclusions: ['AC Vehicle', 'Hotel (1 Night)', 'Breakfast', 'Driver & Fuel', 'Local Guide'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees'],
  },
  'varanasi-family-tour': {
    title: 'Varanasi Family Holiday Package',
    duration: '3 Days / 2 Nights',
    price: '9,999',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'A family-friendly exploration of Varanasi with comfortable accommodations, guided temple tours, and safe, memorable experiences for all ages.',
    itinerary: [
      { day: 'Day 01', title: 'Family Arrival', desc: 'Pickup from airport/station. Family-friendly hotel check-in. Evening leisure time and local market exploration.' },
      { day: 'Day 02', title: 'Temples & Ghats', desc: 'Morning relaxed Ghats tour with boat ride. Kashi Vishwanath Temple Darshan. Afternoon Manikarnika Ghat visit and shopping.' },
      { day: 'Day 03', title: 'Sarnath & Departure', desc: 'Morning Sarnath Buddhist temple visit with family guide. Afternoon museum tour and departue.' },
    ],
    inclusions: ['AC Vehicle', 'Family Rooms (2 Nights)', 'Daily Breakfast', 'Driver & Fuel', 'Family Guide'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees', 'Personal Expenses'],
  },
  'varanasi-group-tour': {
    title: 'Varanasi Group Tour - Spiritual Journey',
    duration: '2 Days / 1 Night',
    price: '4,499',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'An economical group tour package designed for pilgrim groups seeking authentic spiritual experiences in Varanasi with expert guidance.',
    itinerary: [
      { day: 'Day 01', title: 'Group Arrival & Aarti', desc: 'Group pickup from airport/station. Hotel accommodation. Evening group Ganga Aarti experience.' },
      { day: 'Day 02', title: 'Group Temple Tour', desc: 'Group guided temple tour of Kashi Vishwanath, Kaal Bhairav, and Sarnath. Afternoon departure.' },
    ],
    inclusions: ['AC Coach', 'Hotel (1 Night)', 'Breakfast', 'Driver & Fuel', 'Group Guide', 'Group Discount'],
    exclusions: ['Train/Flight Tickets', 'Lunch & Dinner', 'Entry Fees', 'GST'],
  },
  'varanasi-2-days': {
    title: 'Varanasi Weekend Getaway - 2 Days',
    duration: '2 Days / 1 Night',
    price: '6,499',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
    overview: 'Perfect weekend escape to experience the spiritual energy of Varanasi with comfortable stays, guided tours, and evening Aarti ceremonies.',
    itinerary: [
      { day: 'Day 01', title: 'Weekend Arrival', desc: 'Arrive in Varanasi. Hotel check-in at premium location. Evening Ganga Aarti with private boat ride.' },
      { day: 'Day 02', title: 'Exploration & Departure', desc: 'Morning Kashi Vishwanath Darshan and breakfast. Afternoon Sarnath visit. Evening departure.' },
    ],
    inclusions: ['AC Vehicle', 'Premium Hotel (1 Night)', 'Breakfast & Dinner', 'Private Boat Ride', 'Driver & Fuel', 'Experienced Guide'],
    exclusions: ['Train/Flight Tickets', 'Lunch', 'Premium Room Upgrade', '5% GST'],
  },
}

export default function PackageDetailPage({ params }) {
  const pkg = packageData[params.id]
  if (!pkg) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-56 sm:h-72 md:h-96 flex items-end bg-black">
        <div className="absolute inset-0">
          <Image src={pkg.image} alt={pkg.title} fill className="object-cover opacity-50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-6 sm:pb-8 w-full text-white">
          <Link href="/packages" className="text-sm text-gray-300 hover:text-white mb-2 inline-block active:opacity-70">← Back to Packages</Link>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-playfair">{pkg.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{pkg.overview}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                    <p className="font-bold text-gray-800 mt-1">{pkg.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Transport</p>
                    <p className="font-bold text-gray-800 mt-1">Private AC Car</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Starting Price</p>
                    <p className="font-bold text-[#ea2330] mt-1">₹{pkg.price}/person</p>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#ea2330] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                        {i < pkg.itinerary.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 mt-2"></div>}
                      </div>
                      <div className="pb-6">
                        <p className="text-[#ea2330] text-sm font-semibold">{item.day}</p>
                        <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-bold text-green-800 mb-4">✓ Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="text-green-700 text-sm">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="font-bold text-red-800 mb-4">✗ Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="text-red-700 text-sm">✗ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="lg:sticky lg:top-20 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#ea2330] p-6 text-white text-center">
                  <p className="text-sm opacity-80">Starting from</p>
                  <p className="text-4xl font-bold">₹{pkg.price}</p>
                  <p className="text-sm opacity-80">per person</p>
                </div>
                <div className="p-6 space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm" />
                  <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm" />
                  <button className="w-full bg-[#ea2330] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Send Enquiry</button>
                  <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-[#25D366] text-white rounded-lg text-center text-sm font-medium hover:bg-green-600 transition block">
                    💬 Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: 'golden-triangle-varanasi-ayodhya-prayagraj' },
    { id: 'divya-dham-yatra' },
    { id: 'varanasi-ayodhya-3-day' },
    { id: 'varanasi-tour' },
    { id: 'varanasi-family-tour' },
    { id: 'varanasi-group-tour' },
    { id: 'varanasi-2-days' },
  ]
}
