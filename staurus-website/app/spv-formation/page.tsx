import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Building2, ArrowRight } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/site'

const PATH = '/spv-formation'

export const metadata: Metadata = {
  title: 'SPV Formation for Property Investors',
  description:
    'Set up a property investment SPV (special purpose vehicle) the right way. In partnership with Mint Formations, Staurus Properties offers three SPV packages — Essential, Investor and Elite — with company formation, registered office, correct SIC codes and bank account introductions.',
  keywords: [
    'property SPV formation',
    'limited company buy to let',
    'SPV company setup UK',
    'Mint Formations property',
    'property investment company SIC codes',
  ],
  openGraph: {
    title: 'SPV Formation for Property Investors',
    description:
      'Three SPV packages in partnership with Mint Formations — Essential, Investor and Elite — built for UK property investors.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

interface Pkg {
  name: string
  tagline: string
  highlighted: boolean
  features: string[]
}

const packages: Pkg[] = [
  {
    name: 'Essential',
    tagline: 'Everything you need to get a compliant property SPV trading.',
    highlighted: false,
    features: [
      'Same-day limited company formation',
      'Correct property SIC codes (68100 / 68209 / 68320)',
      'Standard share structure (ordinary shares)',
      'Digital certificate of incorporation & memorandum',
      'Share certificate and statutory registers',
      'Companies House filing handled for you',
    ],
  },
  {
    name: 'Investor',
    tagline: 'For active investors building a serious property portfolio.',
    highlighted: true,
    features: [
      'Everything in Essential',
      'Registered office address (12 months)',
      "Director's service address for privacy",
      'Multiple share classes for tax planning',
      'Business bank account introduction',
      'Lender-ready company structuring guidance',
      'Priority support from the Staurus team',
    ],
  },
  {
    name: 'Elite',
    tagline: 'A fully structured vehicle for portfolio landlords and SPV groups.',
    highlighted: false,
    features: [
      'Everything in Investor',
      'Holding company / group structure setup',
      'Bespoke share structure for multiple shareholders',
      'Registered office address (24 months)',
      'Tax setup guidance with specialist introduction',
      'Shareholder agreement template',
      'Dedicated formation manager end-to-end',
    ],
  },
]

export default function SpvFormationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'SPV Formation', url: `${SITE_URL}${PATH}` },
        ]}
      />

      <section className="bg-hero-gradient">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-22 text-center">
          <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            In Partnership with Mint Formations
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            SPV Formation
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Most serious property investors now buy through a limited company —
            a special purpose vehicle (SPV). We make sure yours is set up correctly
            from day one, with the right SIC codes, share structure and lender-ready
            paperwork.
          </p>
        </div>
      </section>

      <section className="bg-slate-site py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Choose Your Package
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Three Ways to Get Started
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you are buying your first investment property or restructuring
              a growing portfolio, there is a package built for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-sm-md p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover flex flex-col ${
                  pkg.highlighted
                    ? 'border-2 border-gold md:-mt-3'
                    : 'border border-slate-100'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-2xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={18} className="text-gold" />
                  <h3 className="font-display text-2xl font-bold text-navy">
                    {pkg.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {pkg.tagline}
                </p>
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-700">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-sm-md transition-all duration-200 active:scale-[0.98] text-sm tracking-wide ${
                    pkg.highlighted
                      ? 'bg-gold text-navy hover:bg-gold-light hover:shadow-gold'
                      : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  Enquire about {pkg.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            SPV formation is delivered through our partnership with Mint Formations.
            Staurus Properties does not provide regulated tax, legal or accountancy
            advice; we introduce you to specialists where appropriate. Capital at
            risk.
          </p>
        </div>
      </section>

      <CTASection
        campaign="spv-formation"
        title="Not sure which structure is right for you?"
        subtitle="Speak to the Staurus team about your portfolio goals and we will help you choose the SPV package that keeps you lender-ready and tax-efficient."
      />
      <ComplianceBar />
    </>
  )
}
