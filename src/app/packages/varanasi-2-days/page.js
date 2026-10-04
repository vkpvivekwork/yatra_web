'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── Image Data ────────────────────────────────────────────────────────────────

const day1Temples = [
  {
    name: 'Kal Bhairav Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kalbhairav_temple_Varanasi.jpg/480px-Kalbhairav_temple_Varanasi.jpg',
  },
  {
    name: 'Kashi Vishwanath Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kashi_Vishwanath_Temple.jpg/480px-Kashi_Vishwanath_Temple.jpg',
  },
  {
    name: 'Annapurna Maa Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Annapurna_Temple%2C_Varanasi.jpg/480px-Annapurna_Temple%2C_Varanasi.jpg',
  },
  {
    name: 'Maa Vishalakshi Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Vishalakshi_Temple_Varanasi.jpg/480px-Vishalakshi_Temple_Varanasi.jpg',
  },
  {
    name: 'Annapurna Maa Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Annapurna_Temple%2C_Varanasi.jpg/480px-Annapurna_Temple%2C_Varanasi.jpg',
  },
]

const day2Temples = [
  {
    name: 'Sankat Mochan Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sankat_Mochan_temple_exterior%2CVaranasi.jpg/480px-Sankat_Mochan_temple_exterior%2CVaranasi.jpg',
  },
  {
    name: 'Durga Maa Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Durga_temple_varanasi.jpg/480px-Durga_temple_varanasi.jpg',
  },
  {
    name: 'Tulsi Manas Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tulsi_Manas_Mandir.jpg/480px-Tulsi_Manas_Mandir.jpg',
  },
  {
    name: 'Birla Temple BHU (VT BHU)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Vishwanath_Temple.jpg/480px-New_Vishwanath_Temple.jpg',
  },
  {
    name: 'Sarnath (Baudha Site)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dhamek_stupa.jpg/480px-Dhamek_stupa.jpg',
  },
  {
    name: 'Sant Ravidas Mandir, Varanasi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sant_Ravidas_temple_Varanasi.jpg/480px-Sant_Ravidas_temple_Varanasi.jpg',
  },
]

const activities = [
  {
    name: 'Evening Ganga Aarti',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ganga_aarti_at_varanasi_%28cropped%29.jpg/480px-Ganga_aarti_at_varanasi_%28cropped%29.jpg',
  },
  {
    name: 'Subah-e-Banaras',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Varanasi_at_dawn.jpg/480px-Varanasi_at_dawn.jpg',
  },
  {
    name: 'Darshan & Puja',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Puja_varanasi.jpg/480px-Puja_varanasi.jpg',
  },
  {
    name: 'Boating In Ganga',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Varanasi_river-side.jpg/480px-Varanasi_river-side.jpg',
  },
  {
    name: 'Dev Deepawali',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Dev_Diwali_2016.jpg/480px-Dev_Diwali_2016.jpg',
  },
  {
    name: 'Local Shopping',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Banarasi_silk_saree.jpg/480px-Banarasi_silk_saree.jpg',
  },
]

const historicalSites = [
  { site: 'Ramnagar Fort', desc: 'Ancient fort with museum and architectural marvels', distance: 'Approximately 14 km' },
  { site: 'Dhamek Stupa', desc: "Iconic stupa where Buddha delivered his first sermon", distance: 'Approximately 11 km' },
  { site: 'Sarnath Archaeological Site', desc: 'Significant Buddhist site with ancient ruins and monuments', distance: 'Approximately 10 km' },
  { site: 'Chaukhandi Stupa', desc: "Ancient stupa commemorating Buddha's first disciples", distance: 'Approximately 11.5 km' },
  { site: 'Ashoka Pillar', desc: 'Historic pillar erected by Emperor Ashoka with ancient inscriptions', distance: 'Approximately 10.5 km' },
  { site: 'Archaeological Museum', desc: "Museum housing artifacts and relics from Varanasi's past", distance: 'Approximately 11.5 km' },
]

// ── Reusable Components ───────────────────────────────────────────────────────

function CallBar({ color = 'blue', subtitle }) {
  const bg = color === 'red' ? 'bg-[#ea2330]' : color === 'green' ? 'bg-green-500' : 'bg-blue-700'
  return (
    <a
      href="tel:+916388116241"
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 ${bg} text-white rounded-xl py-4 px-6 my-8 hover:opacity-90 transition-opacity shadow-lg`}
    >
      <span className="text-xl">📞</span>
      <div className="text-center sm:text-left">
        <p className="font-extrabold text-lg tracking-wide">CALL – 6388116241</p>
        <p className="text-xs opacity-80 font-medium uppercase tracking-wider">{subtitle}</p>
      </div>
    </a>
  )
}

function SectionHeading({ black, red }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
      {black} <span className="text-[#ea2330]">{red}</span>
    </h2>
  )
}

function TempleCard({ name, img }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ea2330] transition-all">
      <div className="relative h-36 w-full overflow-hidden bg-orange-100">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${name.replace(/\s/g, '-')}/400/300` }}
        />
      </div>
      <div className="p-3 text-center">
        <p className="text-xs font-semibold text-gray-800 leading-snug">{name}</p>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Varanasi2DaysTourPlan() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Varanasi_Ghats_during_Ganga_Aarti.jpg/1200px-Varanasi_Ghats_during_Ganga_Aarti.jpg"
          alt="Varanasi Ghats Panoramic View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl italic">
            Varanasi 2 Days Tour Plan
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#ea2330]">❯</span>
            <span className="text-white font-medium">Varanasi 2 Days Tour Plan</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-14">

        {/* ── Intro ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Varanasi 2 Day Tour Plan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This <strong>2-day Varanasi Tour Plan</strong> was formed from the exact itinerary I followed on my 2-days
            in Varanasi and it looks a little something like this:
          </p>

          {/* Day 1 Summary */}
          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            Day 1 of Varanasi 2 Day Tour Plan :
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2">
            <li>Darshan at Baba Kal Bhairav Temple</li>
            <li>Darshan at Shri Kashi Vishwanath Temple</li>
            <li>Darshan at Maa Annapurna Temple</li>
            <li>Enjoy Evening Boat Ride on River Ganga</li>
            <li>Watch Evening Ganga Aarti</li>
          </ul>

          {/* Day 2 Summary */}
          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            Day 2 of Varanasi 2 Day Tour Plan :
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2">
            <li>Sunrise Arti</li>
            <li>Darshan at Sankatmochan Temple</li>
            <li>Darshan at Durgakund Temple & Tulsi Manas Temple</li>
            <li>Enjoy BHU Tour</li>
            <li>Enjoy Morning Local Breakfast (Specially Kachori Sabji Jalebi)</li>
            <li>Visit Sarnath – Famous Baudh Site</li>
          </ul>
        </section>

        {/* ── Hero Image ── */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kashi_Vishwanath_Temple.jpg/1200px-Kashi_Vishwanath_Temple.jpg"
            alt="Varanasi Night View - Kashi Vishwanath Temple"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </div>

        {/* ── Call Banner ── */}
        <CallBar color="red" subtitle="DO YOU NEED ANY ASSISTANCE RELATED TO VARANASI ITINERARY ?" />

        {/* ── Day 1 Detailed ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Day 1 : Varanasi 2 Days Tour Plan
          </h2>
          <p className="text-[#ea2330] font-semibold mb-6 text-lg">
            Let&apos;s explore most important activities for Day 1 From Varanasi 2 Days Tour Plan :
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <p>
                <strong>1.</strong> Arrive in Varanasi and check into your hotel / Guest House / Home Stay
              </p>
            </div>

            <div>
              <p>
                <strong>2.</strong> Darshan at{' '}
                <span className="text-[#ea2330] font-bold">Baba Kalbhairav Temple</span>{' '}
                (Because Its a saying that when you arrive to varanasi first you should take Permission from Baba Kalbhairav)
              </p>
            </div>

            <div>
              <p>
                <strong>3.</strong> Darshan at Mritunjay Mahadev Temple (Optional / Not Necessary)
              </p>
            </div>

            <div>
              <p>
                <strong>4.</strong> Visit{' '}
                <span className="text-[#ea2330] font-bold">Kashi Vishwanath Temple</span>,
                which is one of the most famous and oldest temples in India.
              </p>
            </div>

            {/* Kashi Vishwanath Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kashi_Vishwanath_Temple.jpg/1200px-Kashi_Vishwanath_Temple.jpg"
                alt="Kashi Vishwanath Temple"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>5.</strong> Darshan at{' '}
                <span className="text-[#ea2330] font-bold">Maa Annapurna Temple</span>{' '}
                (This temple is near to Shri Kashi Vishwanath Temple).
              </p>
            </div>

            <div>
              <p>
                <strong>6.</strong> You can have rest in your hotel if you want or if you have time before the{' '}
                <span className="text-[#ea2330] font-bold">Evening ganga Aarti</span> which starts at{' '}
                <strong>6:30 PM</strong>.
              </p>
            </div>

            <div>
              <p>
                <strong>7.</strong> Take a{' '}
                <span className="text-[#ea2330] font-bold">boat ride</span>{' '}
                on the Ganges river in the evening you can take the boat from any ghat of varanasi but most popular ghats for starting Boat ride are Assi Ghat, Dashashwamedh Ghat, Namo Ghat & Kedar Ghat. and witness the aarti from the water.
              </p>
            </div>

            {/* Boat Ride Image */}
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-2xl w-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Varanasi_river-side.jpg/640px-Varanasi_river-side.jpg"
                  alt="Boat Ride on River Ganga in Varanasi"
                  className="w-full h-[250px] md:h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-500 italic text-sm mt-2">Boat Ride on River Ganga in Varanasi</p>
            </div>

            <div>
              <p>
                <strong>8.</strong> Visit the{' '}
                <span className="text-[#ea2330] font-bold">Dashashwamedh Ghat</span>{' '}
                ( which is one of the most famous ghats in Varanasi and is known for its beautiful evening aarti), either from the Boat or by walking through famous <strong>Godowlia Market</strong>.
              </p>
            </div>

            {/* Ganga Aarti Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ganga_aarti_at_varanasi_%28cropped%29.jpg/640px-Ganga_aarti_at_varanasi_%28cropped%29.jpg"
                alt="Ganga Aarti at Dashashwamedh Ghat"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>9.</strong> Explore the nearby{' '}
                <span className="text-[#ea2330] font-bold">Manikarnika Ghat</span>{' '}
                from boat or by walking, which is known as the main cremation ghat in Varanasi and is considered a sacred place by Hindus. It is advised that if you cant see the cremation you should not visit there.
              </p>
            </div>

            <div>
              <p>
                <strong>10.</strong> Explore the nearby <strong>Vishwanath Gali</strong>, which is a narrow lane known for its shops selling silk sarees, jewelry, and handicrafts.
              </p>
            </div>

            <div>
              <p>
                <strong>11.</strong> Have <strong>Dinner at a Local restaurant</strong> and try some of the famous street food of Varanasi
              </p>
            </div>
          </div>
        </section>

        {/* ── Day 1 Temples Gallery ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Temples To Be Covered On" red="Day 1 Of Varanasi Tour Plan" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {day1Temples.map((t, idx) => (
              <TempleCard key={`${t.name}-${idx}`} name={t.name} img={t.img} />
            ))}
          </div>
        </section>

        {/* ── Call Banner ── */}
        <CallBar color="red" subtitle="FOR ANY ASSISTANCE RELATED TO VARANASI TOUR PLAN" />

        {/* ── Day 2 Detailed ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Day 2 : Varanasi 2 Days Tour Plan
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <p>
                <strong>1.</strong> Wakeup early and be ready by 7 AM to explore other popular temples of Varanasi.
              </p>
            </div>

            <div>
              <p>
                <strong>2.</strong> Darshan at{' '}
                <span className="text-[#ea2330] font-bold">Durga Mata Mandir, Durgakund</span>{' '}
                (Maa Durga Mandir)
              </p>
            </div>

            {/* Durga Temple Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Durga_temple_varanasi.jpg/640px-Durga_temple_varanasi.jpg"
                alt="Durga Mata Mandir Varanasi"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>3.</strong> Darshan at{' '}
                <span className="text-[#ea2330] font-bold">Tulsi Manas Mandir</span>{' '}
                (Bhagwan Shri Ram) which is nearby Durga Mata Mandir.
              </p>
            </div>

            {/* Tulsi Manas Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tulsi_Manas_Mandir.jpg/640px-Tulsi_Manas_Mandir.jpg"
                alt="Tulsi Manas Mandir Varanasi"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>4.</strong> Darshan at{' '}
                <span className="text-[#ea2330] font-bold">Sankatmochan Mandir</span>{' '}
                (Shri Hanuman Ji Temple).
              </p>
            </div>

            {/* Sankat Mochan Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sankat_Mochan_temple_exterior%2CVaranasi.jpg/640px-Sankat_Mochan_temple_exterior%2CVaranasi.jpg"
                alt="Sankatmochan Mandir Varanasi"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>5.</strong> Explore the{' '}
                <strong>Banaras Hindu University campus</strong>, which is one of the largest residential universities in Asia and is known for its beautiful architecture and lush greenery.
              </p>
            </div>

            <div>
              <p>
                <strong>6.</strong> Explore the{' '}
                <span className="text-[#ea2330] font-bold">New Kashi Vishwanath Temple of BHU</span>.
              </p>
            </div>

            {/* BHU Temple Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Vishwanath_Temple.jpg/640px-New_Vishwanath_Temple.jpg"
                alt="New Kashi Vishwanath Temple of BHU"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>7.</strong> Visit the Bharat Kala Bhavan Museum and learn more about the history and culture of Varanasi. (It may close sometime on holidays)
              </p>
            </div>

            <div>
              <p>
                <strong>8.</strong> Have <strong>Delicious Kachauri, Sabji & Jalebi Breakfast</strong> on the Streets of Varanasi & you can also try <strong>Famous Banarasi Paan</strong>.
              </p>
            </div>

            <div>
              <p>
                <strong>9.</strong> Explore local handcraft market of{' '}
                <span className="text-[#ea2330] font-bold">Banarasi Sarees</span>.
              </p>
            </div>

            {/* Banarasi Saree Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Banarasi_silk_saree.jpg/640px-Banarasi_silk_saree.jpg"
                alt="Banarasi Sarees"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p>
                <strong>10.</strong> Visit the{' '}
                <span className="text-[#ea2330] font-bold">Sarnath</span>{' '}
                and Visit there <strong>Archaeological Museum</strong> and explore the{' '}
                <strong>ancient Buddhist ruins and artifacts.</strong>
              </p>
            </div>

            {/* Sarnath Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dhamek_stupa.jpg/640px-Dhamek_stupa.jpg"
                alt="Sarnath - Dhamek Stupa"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Day 2 Temples Gallery ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Temples To Be Covered On" red="Day 2 Of Varanasi Tour Plan" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {day2Temples.map((t, idx) => (
              <TempleCard key={`${t.name}-${idx}`} name={t.name} img={t.img} />
            ))}
          </div>
        </section>

        {/* ── Call Banner ── */}
        <CallBar color="red" subtitle="FOR ANY ASSISTANCE RELATED TO VARANASI ITINERARY" />

        {/* ── Activities Section ── */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <SectionHeading black="Activities Covered In" red="Varanasi 2 Days Tour Plan" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {activities.map((a) => (
              <div key={a.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ea2330] transition-all">
                <div className="relative h-32 w-full overflow-hidden bg-orange-100">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/${a.name.replace(/\s/g, '-')}/400/300` }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-bold text-gray-700">{a.name}</p>
                </div>
              </div>
            ))}
          </div>
          <CallBar color="green" subtitle="CALL NOW & TALK TO OUR EXPERT" />
        </section>

        {/* ── Historical Sites ── */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
            Historical Sites You Can Include In Your{' '}
            <span className="text-[#ea2330]">Varanasi Tour Plan</span>
          </h2>
          <p className="text-gray-500 text-sm italic mb-5">
            Our custom designed varanasi tour itinerary takes you to explore the city&apos;s historical sites, where you&apos;ll witness ancient forts, and palaces.
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
                    <td className="px-5 py-4 font-semibold text-gray-800">{row.site}</td>
                    <td className="px-5 py-4 text-gray-600">{row.desc}</td>
                    <td className="px-5 py-4 text-gray-600">{row.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-r from-[#ea2330] to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Experience Kashi?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
            Book your Varanasi 2 Days Tour today. Our experts are available 24/7 to help you plan your perfect pilgrimage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+916388116241" className="bg-white text-[#ea2330] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm">
              📞 Call Now
            </a>
            <a href="https://wa.me/916388116241" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-green-500 transition-colors text-sm">
              💬 WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
