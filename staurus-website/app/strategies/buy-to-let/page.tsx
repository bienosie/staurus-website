import type { Metadata } from 'next'
import { ArrowRight, TrendingUp, MapPin, ShieldCheck, Search, FileCheck, Handshake } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FaqSection } from '@/components/sections/FaqSection'
import { StrategyCalculator } from '@/components/ui/StrategyCalculator'
import { BreadcrumbJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd'
import {
  SITE_URL,
  portalLink,
  MANCHESTER_POSTCODES,
  LIVERPOOL_POSTCODES,
  FEES,
  COMMITMENT_FEE,
} from '@/lib/site'

const PATH = '/strategies/buy-to-let'

export const metadata: Metadata = {
  title: 'Buy-to-Let Property Investment in Manchester & Liverpool | Staurus Properties',
  description:
    'Hands-off below-market-value buy-to-let sourcing across Manchester (M9, M11, M12, M18, M40) and Liverpool (L1, L3, L6, L7, L8). Strong gross yields, fully vetted deals, end-to-end management.',
  keywords: [
    'buy to let Manchester',
    'buy to let Liverpool',
    'BTL property investment',
    'rental property sourcing',
    'below market value buy to let',
    'hands-off property investment UK',
  ],
  openGraph: {
    title: 'Buy-to-Let Property Investment | Staurus Properties',
    description:
      'Hands-off, below-market-value buy-to-let deals in Manchester and Liverpool with strong gross yields and end-to-end sourcing.',
    images: ['/images/og-image.png'],
    url: SITE_URL + PATH,
  },
  alternates: { canonical: SITE_URL + PATH },
}

const FAQS = [
  {
    question: 'What gross yields can I realistically expect on a buy-to-let in Manchester or Liverpool?',
    answer:
      'In the postcodes we source from — Manchester M9, M11, M12, M18 and M40, and Liverpool L1, L3, L6, L7 and L8 — indicative gross yields typically fall in the 6% to 9% range, with selected below-market-value deals pushing higher. Yields depend on purchase price, condition and tenant demand. Every deal on our portal carries its own projected gross and net yield so you can compare like for like.',
  },
  {
    question: 'How is your buy-to-let service hands-off?',
    answer:
      'We handle the full chain: sourcing the deal below market value, negotiating with the vendor, arranging surveys and conveyancing introductions, coordinating any light works, and — if you want it — placing a tenant and managing the property ongoing. You make the investment decision; we do the legwork on the ground in the North West.',
  },
  {
    question: 'What does the sourcing fee cost?',
    answer: `Our sourcing fee is tiered by purchase price: ${FEES[0].fee} for properties ${FEES[0].range.toLowerCase()}, ${FEES[1].fee} for ${FEES[1].range}, ${FEES[2].fee} for ${FEES[2].range}, and ${FEES[3].fee} on deals ${FEES[3].range.toLowerCase()}. A ${COMMITMENT_FEE} commitment fee secures the deal; it is non-refundable but credited against the sourcing fee at completion.`,
  },
  {
    question: 'Do I need to be UK-based to invest?',
    answer:
      'No. We work with both UK-based and international investors. Many of our clients invest remotely and never need to visit the property — we provide full photographic and video due diligence, surveyor reports and tenancy paperwork, and can coordinate everything through your solicitor.',
  },
  {
    question: 'Can I buy through a limited company (SPV)?',
    answer:
      'Yes, and most portfolio landlords do for tax efficiency. We partner with Mint Formations to set up a property SPV quickly across our Essential, Investor and Elite packages, so your buy-to-let can complete in a company name from day one.',
  },
  {
    question: 'Why focus on Manchester and Liverpool specifically?',
    answer:
      'Both cities combine strong rental demand, large student and professional populations, ongoing regeneration and entry prices well below London and the South East. That combination is what produces the higher yields and capital growth potential that make buy-to-let stack up in the North West.',
  },
]

const yieldRows = [
  { area: 'Manchester', codes: MANCHESTER_POSTCODES, yield: '6% – 8.5%', note: 'Regeneration corridors, strong professional rental demand' },
  { area: 'Liverpool', codes: LIVERPOOL_POSTCODES, yield: '7% – 9%', note: 'City-centre and student catchment, lower entry prices' },
]

const steps = [
  { icon: Search, title: 'We source below market value', body: 'We identify off-market and motivated-seller buy-to-let stock in our target postcodes, scored on yield, condition and demand.' },
  { icon: FileCheck, title: 'We vet and negotiate', body: 'Full due diligence — comparables, survey, tenant demand, refurb estimate — then we negotiate the purchase price down on your behalf.' },
  { icon: Handshake, title: 'You complete, we manage', body: 'We coordinate conveyancing, place a tenant and (optionally) manage the property, so your investment runs hands-off from day one.' },
]

export default function BuyToLetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Strategies', url: SITE_URL + '/strategies' },
          { name: 'Buy-to-Let', url: SITE_URL + PATH },
        ]}
      />
      <FaqPageJsonLd items={FAQS.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="text-2xs font-semibold uppercase tracking-widest text-gold mb-4">
            Investment Strategy
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Hands-off buy-to-let in Manchester &amp; Liverpool
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            We source fully-vetted, below-market-value rental properties in the North West&apos;s
            highest-demand postcodes — then handle the negotiation, completion and management so you
            own a cash-flowing asset without the legwork.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('buy-to-let')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: TrendingUp, label: '6–9% indicative gross yields' },
              { icon: MapPin, label: 'Manchester & Liverpool focus' },
              { icon: ShieldCheck, label: 'Fully vetted, below market value' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 text-slate-200">
                <b.icon size={20} className="text-gold flex-shrink-0" />
                <span className="text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">
            How our buy-to-let sourcing works
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
            A simple three-step path from deal selection to a tenanted, managed asset.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-slate-site border border-slate-100 rounded-sm-md p-7 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-sm-md bg-navy text-gold font-bold">
                    {i + 1}
                  </span>
                  <s.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yields by area */}
      <section className="bg-slate-site py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Indicative gross yields by area
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            We concentrate on a tight set of postcodes where rental demand and entry prices produce
            the strongest buy-to-let returns. Indicative only — capital at risk.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {yieldRows.map((row) => (
              <div key={row.area} className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-navy">{row.area}</h3>
                  <span className="bg-gold text-navy font-bold text-sm px-3 py-1 rounded-sm-md">
                    {row.yield}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {row.codes.map((c) => (
                    <span key={c} className="text-2xs font-semibold uppercase tracking-widest text-navy bg-slate-site border border-slate-200 px-2.5 py-1 rounded-sm-md">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Model your buy-to-let returns
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Estimate gross yield, net yield and return on cash invested for any deal.
          </p>
          <StrategyCalculator />
        </div>
      </section>

      <FaqSection items={FAQS} heading="Buy-to-Let FAQs" />

      <CTASection campaign="buy-to-let" />
      <ComplianceBar />
    </>
  )
}
