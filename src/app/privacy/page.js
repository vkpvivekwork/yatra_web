export const metadata = {
  title: 'Privacy Policy - Yatra K Sathi',
  description: 'Privacy Policy of Yatra K Sathi travel agency.',
}

const sections = [
  {
    title: '1. Information We Collect',
    items: [
      { sub: 'Personal Details', desc: 'Name, Phone Number, and Email Address' },
      { sub: 'Identity Proof', desc: 'Govt ID (Aadhar/Voter ID) for hotel check-ins' },
      { sub: 'Payment Info', desc: 'Processed securely via trusted gateways' },
    ],
  },
  {
    title: '2. How We Use Your Data',
    items: [
      { sub: null, desc: 'Confirming your Hotel and Taxi bookings' },
      { sub: null, desc: 'Sending trip itineraries, tickets, and updates' },
      { sub: null, desc: 'Providing emergency support during your journey' },
    ],
  },
  {
    title: '3. Data Security',
    items: [
      { sub: null, desc: 'We never sell your personal data. We only share necessary details (like your name and phone number) with our verified hotel partners and drivers to ensure your trip runs smoothly.' },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-2">Privacy Policy</h1>
        <p className="text-orange-100">Yatraksathi • Travel with Trust</p>
        <p className="text-orange-200 text-sm mt-2">Last Updated: November 30, 2025</p>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-600">
                      {item.sub && <span className="font-semibold text-gray-800">{item.sub}: </span>}
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-orange-50 rounded-xl p-6">
              <h2 className="font-bold text-gray-800 mb-2">Questions?</h2>
              <p className="text-gray-600">Contact us at: <a href="mailto:privacy@yatraksathi.com" className="text-[#ea2330] hover:underline">privacy@yatraksathi.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
