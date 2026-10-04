'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// ── Data ─────────────────────────────────────────────────────────────────────

const packageDropdown = [
  { label: 'All India Tour Package', href: '/packages' },
  {
    label: 'Golden Triangle – Varanasi, Ayodhya & Prayagraj',
    href: '/packages/golden-triangle-varanasi-ayodhya-prayagraj',
  },
  {
    label: 'Divya Dham Yatra – Varanasi, Ayodhya, Prayagraj & Bodh Gaya',
    href: '/packages/divya-dham-yatra',
  },
  {
    label: 'Varanasi Ayodhya 3 Day Tour Package & Itinerary',
    href: '/packages/varanasi-ayodhya-3-day',
  },
  {
    label: 'Varanasi Tour Package & Itinerary',
    href: '/packages/varanasi-tour',
    subItems: [
      { label: 'Varanasi Tour Package & Itinerary – 2 Days 1 Night', href: '/packages/varanasi-tour-2-days-1-night' },
      { label: 'Varanasi 3 Days Itinerary', href: '/packages/varanasi-3-days' },
      { label: 'Varanasi Tour Package & Itinerary – 4 Days', href: '/packages/varanasi-tour-4-days' },
    ],
  },
  { label: 'Varanasi Family Tour Package', href: '/packages/varanasi-family-tour' },
  {
    label: 'Varanasi Group Tour Package',
    href: '/packages/varanasi-group-tour',
    subItems: [
      { label: 'Varanasi Group Tour Package & Itinerary', href: '/packages/varanasi-group-tour-itinerary' },
    ],
  },
  { label: 'Varanasi 2 Days Tour Plan', href: '/packages/varanasi-2-days' },
]

const sightseeingDropdown = [
  {
    label: 'Activities',
    href: '/sightseeing/activities',
    subItems: [
      { label: 'Morning Boat Ride in Varanasi', href: '/sightseeing/activities/morning-boat-ride' },
      { label: 'Bajra Boat Ride Booking in Varanasi', href: '/sightseeing/activities/bajra-boat-ride' },
      { label: 'Hand Boat Ride Booking in Varanasi', href: '/sightseeing/activities/hand-boat-ride' },
      { label: 'Varanasi Motor Boat Booking', href: '/sightseeing/activities/motor-boat' },
    ],
  },
  {
    label: 'Festivals',
    href: '/sightseeing/festivals',
    subItems: [
      { label: 'Dev Deepawali', href: '/sightseeing/festivals/dev-deepawali' },
      { label: 'Dev Diwali Boat Booking', href: '/sightseeing/festivals/dev-diwali-boat' },
      { label: 'Dev Deepawali 2026 Important Timings', href: '/sightseeing/festivals/dev-deepawali-timings' },
      { label: 'Dev Deepawali Varanasi Boat Booking', href: '/sightseeing/festivals/dev-deepawali-boat' },
      { label: 'Laser Show at Chet Singh Ghat', href: '/sightseeing/festivals/laser-show' },
      { label: 'Firework Show on Dev Diwali', href: '/sightseeing/festivals/firework-show' },
    ],
  },
  { label: 'Sightseeing in Varanasi', href: '/sightseeing' },
  {
    label: 'Temples',
    href: '/sightseeing/temples',
    subItems: [
      { label: 'Kashi Vishwanath Temple', href: '/sightseeing/temples/kashi-vishwanath' },
      { label: 'Kal Bhairav Temple, Varanasi', href: '/sightseeing/temples/kal-bhairav' },
      { label: 'Vishalakshi Temple, Varanasi', href: '/sightseeing/temples/vishalakshi' },
      { label: 'Sankat Mochan Hanuman Temple, Varanasi', href: '/sightseeing/temples/sankat-mochan' },
      { label: 'Annapurna Mandir, Varanasi', href: '/sightseeing/temples/annapurna' },
      { label: 'Tulsi Manas Mandir, Varanasi', href: '/sightseeing/temples/tulsi-manas' },
      { label: 'Birla Temple BHU (VT), Varanasi', href: '/sightseeing/temples/birla-temple' },
      { label: 'Durga Temple, Varanasi', href: '/sightseeing/temples/durga-temple' },
      { label: 'Chaukhandi Stupa, Varanasi', href: '/sightseeing/temples/chaukhandi-stupa' },
    ],
  },
  {
    label: 'Ghat',
    href: '/sightseeing/ghats',
    subItems: [
      { label: 'Dashashwamedh Ghat', href: '/sightseeing/ghats/dashashwamedh' },
      { label: 'Assi Ghat – Popular Ghat of Varanasi', href: '/sightseeing/ghats/assi-ghat' },
      { label: 'Manikarnika Ghat', href: '/sightseeing/ghats/manikarnika' },
      { label: 'Tulsi Ghat, Varanasi', href: '/sightseeing/ghats/tulsi-ghat' },
    ],
  },
  {
    label: 'Historical Places',
    href: '/sightseeing/historical-places',
    subItems: [
      { label: 'Ramnagar Fort, Varanasi', href: '/sightseeing/historical-places/ramnagar-fort' },
      { label: 'Sarnath, Varanasi – Baudha & Historical Attraction', href: '/sightseeing/historical-places/sarnath' },
    ],
  },
  {
    label: 'Darshan at Temples',
    href: '/sightseeing/darshan',
    subItems: [
      { label: 'Darshan at Temples in Varanasi', href: '/sightseeing/darshan/temples-varanasi' },
      { label: 'Kashi Vishwanath Temple, Varanasi', href: '/sightseeing/darshan/kashi-vishwanath' },
    ],
  },
  { label: 'Mahakumbh Important Snan Dates', href: '/sightseeing/mahakumbh' },
]

const cabDropdown = [
  { label: 'Varanasi Cab Service', href: '/taxi' },
  {
    label: 'Cab Service in Varanasi',
    href: '/taxi/cab-service-in-varanasi',
    subItems: [
      { label: 'Book Sedan Cab in Varanasi | Sedan Taxi Online Booking', href: '/taxi/sedan-cab-varanasi' },
      { label: '4 Seater Cab in Varanasi | 4 Seater Cab Online Booking', href: '/taxi/4-seater-cab-varanasi' },
    ],
  },
  {
    label: 'Varanasi to Ayodhya Cab',
    href: '/taxi/varanasi-to-ayodhya',
    subItems: [
      { label: 'Varanasi to Ayodhya 4 Seater Sedan Cab & Taxi', href: '/taxi/varanasi-to-ayodhya-4-seater-sedan' },
    ],
  },
  { label: 'Varanasi Airport Cab Service', href: '/taxi/airport' },
  { label: 'Swift Dzire on Rent', href: '/taxi/swift-dzire' },
  { label: 'Innova Crysta on Rent', href: '/taxi/innova-crysta' },
  { label: 'Ertiga on Rent', href: '/taxi/ertiga' },
  { label: 'Tempo Traveler on Rent', href: '/taxi/tempo-traveller' },
  { label: 'Force Cruiser on Rent', href: '/taxi/force-cruiser' },
]

const boatingDropdown = [
  { label: '⛵ All Boating Services', href: '/boating' },
  { label: '🪔 Ganga Aarti Boat Ride', href: '/boating/ganga-aarti' },
  { label: '🌅 Sunrise Boat Tour', href: '/boating/sunrise-tour' },
  { label: '🚣 84 Ghats Tour', href: '/boating/84-ghats' },
  { label: '🎉 Events on Boat', href: '/boating/events' },
]

// ── Desktop: Single item with optional fly-out sub-menu ─────────────────────

function DropdownItem({ item, pathname, closeParent }) {
  const [subOpen, setSubOpen] = useState(false)
  const subTimeoutRef = useRef(null)
  const hasSubItems = item.subItems && item.subItems.length > 0

  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + '/') ||
    (hasSubItems && item.subItems.some((s) => pathname === s.href || pathname.startsWith(s.href + '/')))

  const handleMouseEnter = () => {
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current)
    if (hasSubItems) setSubOpen(true)
  }
  const handleMouseLeave = () => {
    if (hasSubItems) {
      subTimeoutRef.current = setTimeout(() => setSubOpen(false), 150)
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasSubItems ? (
        <div
          className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 group ${
            isActive
              ? 'text-[#ea2330] bg-red-50 font-semibold'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#ea2330]'
          }`}
        >
          <Link href={item.href} onClick={closeParent} className="flex-1 pr-2">
            {item.label}
          </Link>
          {/* Arrow icon indicating sub-menu */}
          <svg
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${subOpen ? 'text-[#ea2330] -rotate-90' : 'rotate-0'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ) : (
        <Link
          href={item.href}
          onClick={closeParent}
          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
            isActive
              ? 'text-[#ea2330] bg-red-50 font-semibold'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#ea2330]'
          }`}
        >
          {item.label}
        </Link>
      )}

      {/* Fly-out sub-menu — opens to the RIGHT */}
      {hasSubItems && subOpen && (
        <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100">
          {item.subItems.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={closeParent}
              className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                pathname === sub.href
                  ? 'text-[#ea2330] bg-red-50 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#ea2330]'
              }`}
            >
              › {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Desktop: Full dropdown menu ──────────────────────────────────────────────

function DropdownMenu({ label, items, pathname }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const allHrefs = items.flatMap((item) => [item.href, ...(item.subItems?.map((s) => s.href) || [])])
  const isActive = allHrefs.some((href) => pathname === href || pathname.startsWith(href + '/'))

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
          isActive ? 'text-[#ea2330]' : 'text-white hover:text-[#ea2330]'
        }`}
        onClick={() => setOpen(!open)}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100">
          {items.map((item) => (
            <DropdownItem
              key={item.href}
              item={item}
              pathname={pathname}
              closeParent={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Mobile: Dropdown with nested sub-items ───────────────────────────────────

function MobileSubItem({ sub, pathname, onClose }) {
  return (
    <Link
      href={sub.href}
      onClick={onClose}
      className={`py-2 pl-6 text-xs flex items-center gap-1 transition-colors ${
        pathname === sub.href ? 'text-[#ea2330] font-semibold' : 'text-gray-400 hover:text-[#ea2330]'
      }`}
    >
      <span className="text-[#ea2330] font-bold">›</span> {sub.label}
    </Link>
  )
}

function MobileDropdownItem({ item, pathname, onClose }) {
  const [subOpen, setSubOpen] = useState(false)
  const hasSubItems = item.subItems && item.subItems.length > 0

  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + '/') ||
    (hasSubItems && item.subItems.some((s) => pathname === s.href))

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex-1 py-2 text-sm transition-colors ${
            isActive ? 'text-[#ea2330] font-semibold' : 'text-gray-300 hover:text-[#ea2330]'
          }`}
        >
          › {item.label}
        </Link>
        {hasSubItems && (
          <button
            onClick={() => setSubOpen(!subOpen)}
            className="p-1 text-gray-400 hover:text-[#ea2330] transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${subOpen ? 'rotate-90' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {hasSubItems && subOpen && (
        <div className="flex flex-col border-l border-gray-700 ml-3 pl-2">
          {item.subItems.map((sub) => (
            <MobileSubItem key={sub.href} sub={sub} pathname={pathname} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  )
}

function MobileDropdown({ label, items, pathname, onClose }) {
  const [open, setOpen] = useState(false)
  const allHrefs = items.flatMap((item) => [item.href, ...(item.subItems?.map((s) => s.href) || [])])
  const isActive = allHrefs.some((href) => pathname === href || pathname.startsWith(href + '/'))

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between py-3 text-sm font-medium transition-colors ${
          isActive ? 'text-[#ea2330]' : 'text-white'
        }`}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-2 pl-3 flex flex-col gap-0.5">
          {items.map((item) => (
            <MobileDropdownItem
              key={item.href}
              item={item}
              pathname={pathname}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* ── Logo + Brand ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10 md:w-11 md:h-11">
            <Image
              src="/logo.PNG"
              alt="Yatra K Sathi Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="text-white font-extrabold text-lg md:text-xl tracking-wide leading-none">
            YATRA<span className="text-[#ea2330]">k</span>{' '}SA<span className="text-[#ea2330]">थी</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">

          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-150 ${
              pathname === '/' ? 'text-[#ea2330]' : 'text-white hover:text-[#ea2330]'
            }`}
          >
            Home
          </Link>

          <DropdownMenu label="Packages" items={packageDropdown} pathname={pathname} />
          <DropdownMenu label="Cab" items={cabDropdown} pathname={pathname} />

          <Link
            href="/hotels"
            className={`text-sm font-medium transition-colors duration-150 ${
              pathname === '/hotels' ? 'text-[#ea2330]' : 'text-white hover:text-[#ea2330]'
            }`}
          >
            Hotels
          </Link>

          <DropdownMenu label="Sightseeing" items={sightseeingDropdown} pathname={pathname} />
          <DropdownMenu label="⛵ Boating" items={boatingDropdown} pathname={pathname} />

          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors duration-150 ${
              pathname === '/blog' ? 'text-[#ea2330]' : 'text-white hover:text-[#ea2330]'
            }`}
          >
            📖 Blog
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors duration-150 ${
              pathname === '/about' ? 'text-[#ea2330]' : 'text-white hover:text-[#ea2330]'
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="bg-[#ea2330] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors duration-150 whitespace-nowrap shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-5 py-4 flex flex-col pb-safe">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`py-3 text-sm font-medium border-b border-gray-800 transition-colors ${
              pathname === '/' ? 'text-[#ea2330]' : 'text-white'
            }`}
          >
            Home
          </Link>

          <MobileDropdown
            label="Packages"
            items={packageDropdown}
            pathname={pathname}
            onClose={() => setMenuOpen(false)}
          />

          <MobileDropdown
            label="Cab"
            items={cabDropdown}
            pathname={pathname}
            onClose={() => setMenuOpen(false)}
          />

          <Link
            href="/hotels"
            onClick={() => setMenuOpen(false)}
            className={`py-3 text-sm font-medium border-b border-gray-800 transition-colors ${
              pathname === '/hotels' ? 'text-[#ea2330]' : 'text-white'
            }`}
          >
            Hotels
          </Link>

          <MobileDropdown
            label="Sightseeing"
            items={sightseeingDropdown}
            pathname={pathname}
            onClose={() => setMenuOpen(false)}
          />

          <MobileDropdown
            label="⛵ Boating"
            items={boatingDropdown}
            pathname={pathname}
            onClose={() => setMenuOpen(false)}
          />

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className={`py-3 text-sm font-medium border-b border-gray-800 transition-colors ${
              pathname === '/blog' ? 'text-[#ea2330]' : 'text-white'
            }`}
          >
            📖 Blog
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`py-3 text-sm font-medium border-b border-gray-800 transition-colors ${
              pathname === '/about' ? 'text-[#ea2330]' : 'text-white'
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#ea2330] text-white text-sm font-semibold py-3.5 rounded-full text-center hover:bg-red-700 active:bg-red-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
