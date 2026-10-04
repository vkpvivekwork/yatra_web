export const metadata = {
  title: 'Terms & Conditions - Yatra K Sathi',
  description: 'Terms and Conditions for Yatra K Sathi travel agency.',
}

const sections = [
  {
    title: '1. Booking & Payments',
    items: [
      { sub: 'Advance Payment', desc: 'Minimum 50% advance payment is required to confirm your booking.' },
      { sub: 'Balance Payment', desc: 'Remaining amount is due 2 days before the trip.' },
      { sub: 'Payment Modes', desc: 'UPI, Bank Transfer, and Cash are accepted.' },
    ],
  },
  {
    title: '2. Cancellation & Refund Policy',
    items: [
      { sub: '15+ Days before trip', desc: '90% Refund' },
      { sub: '7–14 Days before trip', desc: '50% Refund' },
      { sub: 'Less than 7 Days', desc: 'No Refund' },
    ],
  },
  {
    title: '3. Important Guidelines',
    items: [
      { sub: 'ID Proof', desc: 'Every guest must carry valid Government ID (Aadhar/Voter ID).' },
      { sub: 'Force Majeure', desc: 'Yatra K Sathi is not responsible for delays caused by landslides, extreme weather, or strikes.' },
      { sub: 'Luggage', desc: 'We are not liable for lost or damaged luggage during the journey.' },
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-2">Terms & Conditions</h1>
        <p className="text-orange-100">Yatraksathi • Travel Guidelines</p>
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
                      <span className="font-semibold text-gray-800">{item.sub}: </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-orange-50 rounded-xl p-6">
              <h2 className="font-bold text-gray-800 mb-2">Questions or Disputes?</h2>
              <p className="text-gray-600">Contact us at: <a href="mailto:support@yatraksathi.com" className="text-[#ea2330] hover:underline">support@yatraksathi.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
