import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://staurusproperties.com'),
  title: {
    default: 'Staurus Properties | Below Market Value UK Property Investment',
    template: '%s | Staurus Properties',
  },
  description: 'Intelligence-led UK property deal sourcing for serious investors. Live below-market-value opportunities in Manchester and Liverpool across BTL, BRRR, HMO and Social Housing strategies. Trusted by investors in the UK and Nigeria.',
  keywords: ['UK property investment', 'below market value property Manchester', 'BRRR investment UK', 'buy to let Manchester', 'HMO investment', 'Nigerian investors UK property', 'property deal sourcing'],
  authors: [{ name: 'Staurus Properties Limited' }],
  creator: 'Staurus Properties Limited',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://staurusproperties.com',
    siteName: 'Staurus Properties',
    title: 'Staurus Properties | Below Market Value UK Property Investment',
    description: 'Live, data-scored below-market-value opportunities in Manchester and Liverpool. BTL, BRRR, HMO and Social Housing strategies for UK and international investors.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Staurus Properties' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@staurusproperti',
    creator: '@staurusproperti',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'PLACEHOLDER_GOOGLE_VERIFICATION',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Staurus Properties Limited',
              url: 'https://staurusproperties.com',
              logo: 'https://staurusproperties.com/images/logo.png',
              description: 'Intelligence-led UK property deal sourcing for domestic and international investors.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bartle House, Oxford Court',
                addressLocality: 'Manchester',
                postalCode: 'M2 3WQ',
                addressCountry: 'GB',
              },
              telephone: '+441613274269',
              email: 'info@staurusproperties.com',
              areaServed: ['Manchester', 'Liverpool', 'United Kingdom'],
              sameAs: [
                'https://www.facebook.com/staurusproperties',
                'https://www.instagram.com/staurusproperties',
                'https://x.com/staurusproperti',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
