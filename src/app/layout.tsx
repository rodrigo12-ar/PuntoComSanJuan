import type { Metadata } from 'next';
import "./globals.css"; 
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';
import { VisitTracker } from '@/components/VisitTracker';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://puntocomsanjuan.com'),
  title: {
    default: 'Punto Com San Juan | Servicio Técnico Informático',
    template: '%s | Punto Com San Juan'
  },
  description: 'Servicio técnico informático en San Juan, Argentina. Reparación de computadoras, eliminación de virus y optimización de equipos.',
  openGraph: {
    title: 'Punto Com San Juan | Servicio Técnico Informático',
    description: 'Reparación de computadoras, eliminación de virus y optimización de equipos en San Juan, Argentina.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://puntocomsanjuan.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    image: `${BUSINESS.url}/og-image.jpg`,
    url: BUSINESS.url,
    telephone: BUSINESS.whatsappNumberE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: 'San Juan',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -31.5375,
      longitude: -68.5364
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    areaServed: {
      '@type': 'City',
      name: BUSINESS.city
    },
    sameAs: [BUSINESS.instagramUrl]
  };

  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-slate-950 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AIChatWidget />
        <VisitTracker />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(ldJson)}
        </script>
      </body>
    </html>
  );
}
