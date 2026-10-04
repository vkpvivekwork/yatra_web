'use client'
import Link from 'next/link'

// ── Reusable Components ───────────────────────────────────────────────────────

function CallBar({ color = 'red', text, sub }) {
  const colors = {
    red: 'bg-[#ea2330] hover:bg-red-700',
    blue: 'bg-blue-700 hover:bg-blue-800',
    green: 'bg-green-500 hover:bg-green-600',
    dark: 'bg-gray-900 hover:bg-black',
  }
  return (
    <a
      href="tel:+919876543210"
      className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${colors[color]} text-white rounded-2xl py-4 px-6 my-8 transition-opacity shadow-lg text-center`}
    >
      <span className="text-2xl">📞</span>
      <div>
        <p className="font-extrabold text-lg tracking-wide">{text || 'CALL – +91 98765 43210'}</p>
        {sub && <p className="text-xs opacity-80 font-medium uppercase tracking-wider mt-0.5">{sub}</p>}
      </div>
    </a>
  )
}

function DayImage({ emoji, label, caption }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden shadow-lg">
      <div className="h-72 md:h-80 w-full bg-gradient-to-br from-orange-900 via-red-800 to-yellow-900 flex flex-col items-center justify-center gap-3">
        <span className="text-8xl">{emoji}</span>
        <p className="text-white font-bold text-xl">{label}</p>
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 italic py-2 bg-gray-50 border-t border-gray-200">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function SectionHeading({ black, red, center = true }) {
  return (
    <h2 className={`text-xl md:text-2xl font-extrabold text-gray-900 mb-5 ${center ? 'text-center' : ''}`}>
      {black} <span className="text-[#ea2330]">{red}</span>
    </h2>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const quickSummary = [
  {
    day: 'Day 1',
    items: [
      'Darshan at Baba Kal Bhairav Temple',
      'Darshan at Shri Kashi Vishwanath Temple',
      'Darshan at Maa Annapurna Temple',
      'Enjoy Evening Boat Ride on River Ganga',
    ],
  },
  {
    day: 'Day 2',
    items: [
      'Sunrise Ganga Aarti at Assi Ghat',
      'Morning Boat Ride of Varanasi (Most Popular Activity in Winter Season)',
      'Enjoy Morning Local Breakfast (Specially Kachori Sabji Jalebi)',
      'Darshan at Sankatmochan Temple',
      'Darshan at Durgakund Temple & Tulsi Manas Temple',
      'Enjoy BHU Tour',
      'Watch Evening Ganga Aarti at Dashashwamedh Ghat',
    ],
  },
  {
    day: 'Day 3',
    items: [
      'Sarnath & Historical Buddha Site Visit',
      'Swarved Mahamandir Dham Visit',
      'Ramnagar Fort',
    ],
  },
]

const day1Temples = [
  { name: 'Kal Bhairav Temple', emoji: '🛕' },
  { name: 'Kashi Vishwanath Temple', emoji: '🛕' },
  { name: 'Annapurna Maa Temple', emoji: '🛕' },
  { name: 'Maa Vishalakshi Temple', emoji: '🛕' },
  { name: 'Mritunjay Mahadev Temple', emoji: '🛕' },
]

const day2Temples = [
  { name: 'Sankat Mochan Temple', emoji: '🛕' },
  { name: 'Durga Maa Temple', emoji: '🛕' },
  { name: 'Tulsi Manas Temple', emoji: '🛕' },
  { name: 'Birla Temple BHU (VT BHU)', emoji: '🛕' },
  { name: 'Sarnath (Baudha Site)', emoji: '☸️' },
  { name: 'Sant Ravidas Mandir', emoji: '🛕' },
]

const activities = [
  { name: 'Evening Ganga Aarti', emoji: '🪔' },
  { name: 'Subah-e-Banaras', emoji: '🌅' },
  { name: 'Darshan & Puja', emoji: '🙏' },
  { name: 'Boating In Ganga', emoji: '⛵' },
  { name: 'Dev Deepawali', emoji: '✨' },
  { name: 'Local Shopping', emoji: '🛍️' },
]

const historicalSites = [
  { site: 'Ramnagar Fort', desc: 'Ancient fort with museum and architectural marvels', distance: '~14 km' },
  { site: 'Dhamek Stupa', desc: "Iconic stupa where Buddha delivered his first sermon", distance: '~11 km' },
  { site: 'Sarnath Archaeological Site', desc: 'Significant Buddhist site with ancient ruins and monuments', distance: '~10 km' },
  { site: 'Chaukhandi Stupa', desc: "Ancient stupa commemorating Buddha's first disciples", distance: '~11.5 km' },
  { site: 'Ashoka Pillar', desc: 'Historic pillar erected by Emperor Ashoka with ancient inscriptions', distance: '~10.5 km' },
  { site: 'Archaeological Museum', desc: "Museum housing artifacts and relics from Varanasi's past", distance: '~11.5 km' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Varanasi3DaysPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-800" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="bg-[#ea2330] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            3 Days Itinerary
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Varanasi 3 Days Itinerary
          </h1>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-xl">
            Kashi Vishwanath • Ganga Aarti • Sarnath • All Major Ghats & Temples
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href="tel:+919876543210" className="bg-[#ea2330] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors text-sm">
              📞 Book Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors text-sm">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-2 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#ea2330]">Home</Link>
          <span>/</span>
          <Link href="/packages/varanasi-tour" className="hover:text-[#ea2330]">Varanasi Tour Package</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Varanasi 3 Days Itinerary</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">

        {/* ── Hero Image Placeholder ── */}
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5">Varanasi 3 Days Itinerary</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
          <div className="h-80 md:h-[420px] bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-8xl block mb-3">🛕</span>
              <p className="text-2xl font-extrabold">Kashi Vishwanath</p>
              <p className="text-base opacity-75 mt-1">Varanasi, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* ── Detailed Explanation + Quick Summary ── */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Varanasi 3 Day Itinerary Detailed Explanation :
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            This <strong>3 day Varanasi Itinerary</strong> was formed from the exact itinerary you can follow
            during your 3 Day varanasi visit in Varanasi and it looks a little something like this:
          </p>

          {/* Quick day-wise summary */}
          <div className="space-y-6">
            {quickSummary.map((d) => (
              <div key={d.day}>
                <h3 className="text-base font-bold text-gray-900 mb-3">{d.day} of Varanasi 3 Day Itinerary:</h3>
                <ul className="space-y-2 pl-2">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <CallBar color="dark" text="CALL – +91 98765 43210" sub="DO YOU NEED ANY ASSISTANCE RELATED TO VARANASI ITINERARY?" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── DAY 1 ── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#ea2330] pl-4">
            Day 1 : Varanasi 3 Days Itinerary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5 font-semibold">
            Let&apos;s explore most important activities for Day 1 From Varanasi 3 Days Itinerary:
          </p>

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>1.</strong> Arrive in Varanasi and check into your hotel / Guest House / Home Stay
            </p>
            <p>
              <strong>2.</strong> Darshan at{' '}
              <strong className="text-[#ea2330]">Baba Kalbhairav Temple</strong>{' '}
              (Because it&apos;s a saying that when you arrive in Varanasi, first you should take permission from
              Baba Kalbhairav)
            </p>
            <p>
              <strong>3.</strong> Darshan at Mritunjay Mahadev Temple{' '}
              <span className="text-gray-500">(Optional / Not Necessary)</span>
            </p>
            <p>
              <strong>4.</strong> Visit the{' '}
              <strong className="text-[#ea2330]">Kashi Vishwanath Temple</strong>, which is one of the most
              famous and oldest temples in India.
            </p>
          </div>

          {/* Kashi Vishwanath Image */}
          <DayImage emoji="🛕" label="Kashi Vishwanath Temple" caption="Shri Kashi Vishwanath Jyotirlinga — Varanasi" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>5.</strong> Darshan at{' '}
              <strong className="text-[#ea2330]">Maa Annapurna Temple</strong>{' '}
              (This temple is near to Shri Kashi Vishwanath Temple).
            </p>
            <p>
              <strong>6.</strong> You can have rest in your hotel if you want or if you have time before the{' '}
              <strong className="text-[#ea2330]">Evening Ganga Aarti</strong> which starts at{' '}
              <strong className="text-[#ea2330]">6:30 PM</strong>.
            </p>
            <p>
              <strong>7.</strong> Take a <Link href="/boating/ganga-aarti" className="text-[#ea2330] hover:underline font-medium">boat ride</Link>{' '}
              on the Ganges river in the evening — you can take the boat from any ghat of Varanasi but most
              popular ghats for starting Boat ride are{' '}
              <strong>Assi Ghat, Dashashwamedh Ghat, Namo Ghat &amp; Kedar Ghat</strong> — and witness the
              Aarti from the water.
            </p>
          </div>

          {/* Boat Ride Image */}
          <DayImage emoji="⛵" label="Boat Ride on River Ganga in Varanasi" caption="Boat Ride on River Ganga in Varanasi" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>8.</strong> Visit the{' '}
              <strong className="text-[#ea2330]">Dashashwamedh Ghat</strong>{' '}
              (which is one of the most famous ghats in Varanasi and is known for its beautiful evening Aarti),
              either from the Boat or by walking through famous <strong>Godowlia Market</strong>.
            </p>
          </div>

          {/* Ganga Aarti Image */}
          <DayImage emoji="🪔" label="Ganga Aarti — Dashashwamedh Ghat" caption="Ganga Aarti — Varanasi" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>9.</strong> Explore the nearby{' '}
              <strong className="text-[#ea2330]">Manikarnika Ghat</strong> from boat or by walking, which is
              known as the main cremation ghat in Varanasi and is considered a sacred place by Hindus. It is
              advised that if you can&apos;t see the cremation you should not visit there.
            </p>
            <p>
              <strong>10.</strong> Explore the nearby{' '}
              <strong>Vishwanath Gali</strong>, which is a narrow lane known for its shops selling silk sarees,
              jewelry, and handicrafts.
            </p>
            <p>
              <strong>11.</strong> Have{' '}
              <strong>Dinner at a Local restaurant</strong> and try some of the famous street food of Varanasi.
            </p>
          </div>

          {/* Day 1 Temples Grid */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6">
            <SectionHeading black="Temples To Be Covered On" red="Day 1 Of 3 Day Varanasi Itinerary" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {day1Temples.map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-[#ea2330] transition-all">
                  <span className="text-3xl block mb-2">{t.emoji}</span>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{t.name}</p>
                </div>
              ))}
            </div>
            <CallBar color="red" text="CALL – +91 98765 43210" sub="FOR ANY ASSISTANCE RELATED TO VARANASI TOUR PLAN" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── DAY 2 ── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#ea2330] pl-4">
            Day 2 : Varanasi 3 Day Itinerary
          </h2>

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>1.</strong> Wakeup early and be ready by <strong>7 AM</strong> to explore other popular
              temples of Varanasi.
            </p>
            <p>
              <strong>2.</strong> Darshan at{' '}
              <strong className="text-[#ea2330]">Durga Mata Mandir, Durgakund</strong> (Maa Durga Mandir)
            </p>
          </div>

          {/* Durga Temple Image */}
          <DayImage emoji="🛕" label="Durga Mata Mandir — Durgakund, Varanasi" caption="Durga Mata Mandir — Durgakund" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>3.</strong> Darshan at{' '}
              <strong className="text-[#ea2330]">Tulsi Manas Mandir</strong>{' '}
              (Bhagwan Shri Ram) which is nearby Durga Mata Mandir.
            </p>
          </div>

          {/* Tulsi Manas / Birla Temple Image */}
          <DayImage emoji="🏛️" label="Tulsi Manas Mandir — Varanasi" caption="Birla Temple / Tulsi Manas Mandir" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>4.</strong> Darshan at{' '}
              <strong className="text-[#ea2330]">Sankatmochan Mandir</strong> (Shri Hanuman Ji Temple).
            </p>
          </div>

          {/* Sankatmochan Image */}
          <DayImage emoji="🛕" label="Sankat Mochan Hanuman Temple" caption="Sankat Mochan Mandir — Varanasi" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>5.</strong> Explore the{' '}
              <strong>Banaras Hindu University campus</strong>, which is one of the largest residential
              universities in Asia and is known for its beautiful architecture and lush greenery.
            </p>
            <p>
              <strong>6.</strong> Explore the{' '}
              <strong className="text-[#ea2330]">New Kashi Vishwanath Temple of BHU</strong>.
            </p>
          </div>

          {/* New KV Temple BHU Image */}
          <DayImage emoji="🕌" label="New Kashi Vishwanath Temple — BHU" caption="New Vishwanath Temple, Banaras Hindu University" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>7.</strong> Visit the <strong>Bharat Kala Bhavan Museum</strong> and learn more about the
              history and culture of Varanasi.{' '}
              <span className="text-gray-400">(It may close sometime on holidays)</span>
            </p>
            <p>
              <strong>8.</strong> Have{' '}
              <strong>Delicious Kachauri, Sabji &amp; Jalebi Breakfast</strong> on the Streets of Varanasi &amp;
              you can also try <strong>Famous Banarasi Paan</strong>.
            </p>
            <p>
              <strong>9.</strong> Explore local handcraft market of{' '}
              <Link href="/sightseeing/activities" className="text-[#ea2330] hover:underline font-medium">
                Banarasi Sarees
              </Link>.
            </p>
          </div>

          {/* Banarasi Sarees Image */}
          <DayImage emoji="🧣" label="Famous Banarasi Sarees" caption="Handcrafted Banarasi Silk Sarees — Varanasi" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>10.</strong> Visit the{' '}
              <strong className="text-[#ea2330]">Sarnath</strong> and visit there{' '}
              <strong>Archaeological Museum</strong> and explore the{' '}
              <strong>ancient Buddhist ruins and artifacts</strong>.
            </p>
          </div>

          {/* Sarnath Image */}
          <DayImage emoji="☸️" label="Sarnath — Dhamek Stupa" caption="Sarnath Archaeological Site — Where Buddha gave his first sermon" />

          {/* Day 2 Temples Grid */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6">
            <SectionHeading black="Temples To Be Covered On" red="Day 2 Of Varanasi 3 Day Itinerary" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {day2Temples.map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-[#ea2330] transition-all">
                  <span className="text-3xl block mb-2">{t.emoji}</span>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{t.name}</p>
                </div>
              ))}
            </div>
            <CallBar color="red" text="CALL – +91 98765 43210" sub="FOR ANY ASSISTANCE RELATED TO VARANASI ITINERARY" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── DAY 3 ── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#ea2330] pl-4">
            Day 3 : Varanasi 3 Day Itinerary
          </h2>

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>1.</strong> Visit{' '}
              <strong className="text-[#ea2330]">Sarnath</strong> — the sacred place where Lord Buddha gave
              his first sermon after attaining enlightenment. See the Dhamek Stupa, Deer Park, and the
              magnificent Buddhist monuments.
            </p>
          </div>

          <DayImage emoji="🏛️" label="Dhamek Stupa — Sarnath" caption="Dhamek Stupa, Sarnath — Where Buddha delivered his first sermon" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>2.</strong> Visit the{' '}
              <strong className="text-[#ea2330]">Swarved Mahamandir Dham</strong> — a magnificent 7-storey
              meditation temple located in Varanasi, built by the followers of Sadguru Sadafal Deo Ji Maharaj.
              It is known for its incredible architecture and spiritual ambience.
            </p>
          </div>

          <DayImage emoji="🧘" label="Swarved Mahamandir Dham — Varanasi" caption="Swarved Mahamandir Dham — 7-storey Meditation Temple" />

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>3.</strong> Visit{' '}
              <strong className="text-[#ea2330]">Ramnagar Fort</strong> — situated on the eastern banks of the
              Ganges, this 18th-century fort is home to a museum with vintage cars, weapons, and royal artifacts.
              A must-visit for history lovers.
            </p>
          </div>

          <DayImage emoji="🏰" label="Ramnagar Fort — Varanasi" caption="Ramnagar Fort — 18th Century Heritage Fort on the banks of River Ganga" />

          <CallBar color="dark" text="CALL – +91 98765 43210" sub="DO YOU NEED ANY ASSISTANCE RELATED TO VARANASI ITINERARY?" />
        </section>

        {/* ── Activities Section ── */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-6">
          <SectionHeading black="Activities Covered In" red="Varanasi 3 Days Itinerary" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {activities.map((a) => (
              <div key={a.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-[#ea2330] transition-all">
                <span className="text-4xl block mb-2">{a.emoji}</span>
                <p className="text-xs font-bold text-gray-700">{a.name}</p>
              </div>
            ))}
          </div>
          <CallBar color="green" text="CALL – +91 98765 43210" sub="CALL NOW & TALK TO OUR EXPERT" />
        </section>

        {/* ── Historical Sites Table ── */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
            Historical Sites You Can Include In Your{' '}
            <span className="text-[#ea2330]">Varanasi Itinerary</span>
          </h2>
          <p className="text-gray-500 text-sm italic mb-5">
            Our custom designed Varanasi tour itinerary takes you to explore the city&apos;s historical sites,
            where you&apos;ll witness ancient forts, and palaces.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#ea2330] text-white">
                  <th className="px-5 py-3 text-left font-semibold">HISTORICAL SITE</th>
                  <th className="px-5 py-3 text-left font-semibold">DESCRIPTION</th>
                  <th className="px-5 py-3 text-left font-semibold whitespace-nowrap">DISTANCE FROM KASHI VISHWANATH TEMPLE</th>
                </tr>
              </thead>
              <tbody>
                {historicalSites.map((row, i) => (
                  <tr key={row.site} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.site}</td>
                    <td className="px-5 py-3 text-gray-600">{row.desc}</td>
                    <td className="px-5 py-3 text-gray-600 whitespace-nowrap">{row.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Related Packages ── */}
        <section className="mb-10">
          <SectionHeading black="Explore More" red="Varanasi Tour Packages" center={false} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Varanasi 2 Days 1 Night', href: '/packages/varanasi-tour-2-days-1-night', emoji: '🌙' },
              { label: 'Varanasi Ayodhya 3 Day Tour', href: '/packages/varanasi-ayodhya-3-day', emoji: '🙏' },
              { label: 'Varanasi 4 Days Package', href: '/packages/varanasi-tour-4-days', emoji: '📅' },
            ].map((pkg) => (
              <Link
                key={pkg.label}
                href={pkg.href}
                className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-5 py-4 hover:border-[#ea2330] hover:bg-red-50 transition-all group"
              >
                <span className="text-2xl">{pkg.emoji}</span>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#ea2330] transition-colors">
                  {pkg.label}
                </span>
                <svg className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#ea2330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-r from-[#ea2330] to-red-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Plan Your Varanasi Trip Today!</h2>
          <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
            Our Varanasi travel experts are available 24/7 to help you create the perfect itinerary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-[#ea2330] font-extrabold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-lg">
              📞 Call Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-white font-extrabold px-8 py-3.5 rounded-full hover:bg-green-500 transition-colors text-sm shadow-lg">
              💬 WhatsApp
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
