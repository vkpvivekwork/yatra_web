import './globals.css'
import dynamic from 'next/dynamic'
import { Playfair_Display } from 'next/font/google'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// PopupForm only shows after 5 seconds — load it lazily so it doesn't block
// the initial JS bundle parse / main-thread work (helps TBT significantly).
const PopupForm = dynamic(() => import('@/components/PopupForm'), { ssr: false })

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata = {
  title: {
    default: 'YatraKSathi — Cab, Boating & Tour Packages in Varanasi',
    template: '%s | YatraKSathi',
  },
  description:
    'Varanasi\'s trusted travel partner for cab services (Ayodhya, Prayagraj, Chitrakoot), sacred Ganga boating (Aarti, 84 Ghats, events), and guided tour packages. Safe, affordable & 24/7 available.',
  keywords: [
    'travel agency varanasi',
    'cab service varanasi',
    'boating varanasi',
    'ganga aarti boat ride',
    'varanasi to ayodhya taxi',
    'tour packages varanasi',
    'char dham yatra',
    'yatra k sathi',
    'varanasi sightseeing',
    'tempo traveller varanasi',
  ],
  authors: [{ name: 'YatraKSathi', url: 'https://www.yatrakasathi.com' }],
  creator: 'YatraKSathi',
  publisher: 'YatraKSathi',
  metadataBase: new URL('https://www.yatrakasathi.com'),
  openGraph: {
    title: 'YatraKSathi — Cab, Boating & Tour Packages in Varanasi',
    description:
      'Book taxi, Ganga boat rides, and pilgrimage tours with Varanasi\'s most trusted travel company. 500+ happy travellers, 24/7 support.',
    url: 'https://www.yatrakasathi.com',
    siteName: 'YatraKSathi',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YatraKSathi — Cab, Boating & Tours in Varanasi',
    description: 'Book cab, Ganga boating & tour packages with Varanasi\'s trusted travel partner.',
    creator: '@yatraksathi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.yatrakasathi.com',
  },
  verification: {
    google: '',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'YatraKSathi',
  url: 'https://www.yatrakasathi.com',
  logo: 'https://www.yatrakasathi.com/logo.PNG',
  description:
    'Varanasi-based travel company offering cab services, Ganga boating, and guided tour packages.',
  telephone: '+916388116241',
  email: 'info@yatrakasathi.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Varanasi',
    addressRegion: 'Uttar Pradesh',
    postalCode: '221002',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3176,
    longitude: 82.9739,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '₹₹',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61584239009632',
    'https://www.instagram.com/yatra_k_sathi/',
  ],
  hasMap: 'https://maps.google.com/?q=Varanasi,UP,India',
  areaServed: [
    'Varanasi', 'Ayodhya', 'Prayagraj', 'Chitrakoot', 'Vindhyachal', 'Bodh Gaya', 'Lucknow',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        {/* Preload hero image — browser fetches it immediately, before JS runs → fast LCP */}
        <link rel="preload" as="image" href="/hero-varanasi.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white">
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <PopupForm />
      </body>
    </html>
  )
}
