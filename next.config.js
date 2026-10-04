/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce JS bundle size by removing dev-only code in production
  reactStrictMode: true,

  // Compress responses
  compress: true,

  images: {
    // NOTE: Do NOT add 'image/avif' here — AVIF generation in dev mode is
    // computationally heavy (on-demand conversion), which delays hero image
    // load and directly worsens LCP. WebP is a good balance in dev + prod.
    // In production this is fine, but dev mode Lighthouse will punish AVIF.
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
    ],
    // Cache optimized images for 7 days (production)
    minimumCacheTTL: 604800,
  },

  // Reduce bundle size — remove unused locales
  i18n: undefined,
}

module.exports = nextConfig
