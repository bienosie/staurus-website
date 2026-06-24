// Pure server components that render JSON-LD structured data.
// No client code — safe to use directly inside server pages.
import { CONTACT, COMPLIANCE, SITE_URL, DIRECTOR } from '@/lib/site'

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function RealEstateAgentJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Staurus Properties',
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    founder: {
      '@type': 'Person',
      name: DIRECTOR.name,
      jobTitle: DIRECTOR.title,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bartle House, Oxford Court',
      addressLocality: 'Manchester',
      postalCode: 'M2 3WQ',
      addressCountry: 'GB',
    },
    areaServed: ['Manchester', 'Liverpool', 'United Kingdom'],
    identifier: [
      { '@type': 'PropertyValue', name: 'ICO Registration', value: COMPLIANCE.ico },
      { '@type': 'PropertyValue', name: 'AML Registration', value: COMPLIANCE.aml },
      { '@type': 'PropertyValue', name: 'PRS Membership', value: COMPLIANCE.prs },
      { '@type': 'PropertyValue', name: 'NRLA Membership', value: COMPLIANCE.nrla },
      { '@type': 'PropertyValue', name: 'Companies House', value: COMPLIANCE.companyNo },
    ],
  }
  return <JsonLdScript data={data} />
}

export interface FaqItem {
  q: string
  a: string
}

export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <JsonLdScript data={data} />
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <JsonLdScript data={data} />
}
