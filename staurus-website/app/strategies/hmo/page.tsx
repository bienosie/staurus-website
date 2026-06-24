import type { Metadata } from 'next'
import { ArrowRight, Users, FileBadge, TrendingUp, AlertTriangle } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FaqSection } from '@/components/sections/FaqSection'
import { StrategyCalculator } from '@/components/ui/StrategyCalculator'
import { BreadcrumbJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, portalLink } from '@/lib/site'

const PATH = '/strategies/hmo'

export const metadata: Metadata = {
  title: 'HMO Property Investment in Manchester & Liverpool | Staurus Properties',
  description:
    'High-yield HMO investment sourcing in Manchester and Liverpool. Licensing guidance (mandatory, additional, selective, Article 4), strong yield uplift versus standard buy-to-let, and full management.',
  keywords: [
    'HMO investment Manchester',
    'HMO Liverpool',
    'house in multiple occupation',
    'HMO licensing Article 4',
    'high yield HMO property',
    'HMO sourcing UK',
  ],
  openGraph: {
    title: 'HMO Property Investment | Staurus Properties',
    description:
      'High-yield HMO sourcing in Manchester and Liverpool with full licensing guidance and management.',
    images: ['/images/og-image.png'],
    url: SITE_URL + PATH,
  },
  alternates: { canonical: SITE_URL + PATH },
}

const FAQS = [
  {
    question: 'What is an HMO and why does it yield more than a standard buy-to-let?',
    answer:
      'An HMO — House in Multiple Occupation — is a property let to three or more tenants from more than one household who share facilities such as a kitchen or bathroom. Because you rent by the room rather than as a single unit, gross rental income is typically far higher than a comparable single-let, which is why HMOs can produce double-digit gross yields. That uplift comes with more management and stricter regulation, which is exactly what we handle for you.',
  },
  {
    question: 'What licensing do I need for an HMO?',
    answer:
      'There are three layers. Mandatory licensing applies to larger HMOs (broadly five or more occupants from two or more households). Additional licensing is where a council extends mandatory rules to smaller HMOs in its area. Selective licensing can require a licence for any private rented property in a designated zone, HMO or not. Parts of Manchester and Liverpool operate additional and selective schemes, so the correct licence depends on the specific property and council. We confirm the requirement on every deal before you commit.',
  },
  {
    question: 'What is Article 4 and why does it matter for HMOs?',
    answer:
      'An Article 4 Direction removes permitted development rights in a designated area, meaning you need planning permission to convert a standard home (use class C3) into a small HMO (use class C4). Several neighbourhoods in Manchester and Liverpool are under Article 4. We check the planning position up front, because buying an unlicensable or non-compliant HMO can wreck the numbers.',
  },
  {
    question: 'How much management does an HMO really need?',
    answer:
      'Honestly, a lot more than a single-let. Multiple tenancies, higher turnover, shared-area cleaning, more frequent maintenance, fire-safety compliance and licence conditions all add up. This is the trade-off for the higher yield. We offer full HMO management so the intensity sits with us, not you — sourcing tenants, handling compliance and maintaining the property.',
  },
  {
    question: 'What yield uplift can an HMO deliver versus a standard BTL?',
    answer:
      'It varies by property and room count, but a well-run HMO in our Manchester and Liverpool postcodes can produce a gross yield roughly double that of an equivalent single-let — often into double digits — because each room generates its own rent. Use the room-rate model below to sketch the difference, then check the projected figures on each live HMO deal.',
  },
  {
    question: 'Do you source and manage HMOs for international investors?',
    answer:
      'Yes. HMOs are management-heavy, which makes them especially well suited to a hands-off arrangement. We source the deal, manage any conversion or refurbishment, handle licensing and run the property — so an overseas investor can own a high-yield HMO without being on the ground.',
  },
]

export default function HmoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Strategies', url: SITE_URL + '/strategies' },
          { name: 'HMO', url: SITE_URL + PATH },
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
            HMOs: the highest-yield strategy we source
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Let by the room, a House in Multiple Occupation can produce roughly double the gross yield
            of a single-let. We handle the harder parts — licensing, Article 4 planning, conversion
            and day-to-day management — across Manchester and Liverpool.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('hmo')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: TrendingUp, label: 'Double-digit gross yields achievable' },
              { icon: Users, label: 'Room-by-room rental income' },
              { icon: FileBadge, label: 'Full licensing & compliance handled' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 text-slate-200">
                <b.icon size={20} className="text-gold flex-shrink-0" />
                <span className="text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing overview */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">
            HMO licensing, in plain English
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
            Three licensing layers and one planning rule decide whether an HMO deal stacks up. We
            confirm all of them before you commit.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mandatory licensing', body: 'Applies to larger HMOs — broadly five or more occupants from two or more households sharing facilities. Required nationwide.' },
              { title: 'Additional licensing', body: 'Where a council extends licensing to smaller HMOs in its area. Common in parts of Manchester and Liverpool.' },
              { title: 'Selective licensing', body: 'A licence required for any private rental in a designated zone — HMO or not — to drive up standards.' },
              { title: 'Article 4 direction', body: 'Removes permitted development rights, so converting a standard home to a small HMO needs planning permission.' },
            ].map((card) => (
              <div key={card.title} className="bg-slate-site border border-slate-100 rounded-sm-md p-6 shadow-card">
                <FileBadge size={22} className="text-gold mb-3" />
                <h3 className="font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yield uplift + management intensity */}
      <section className="bg-slate-site py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
            <TrendingUp size={24} className="text-gold mb-3" />
            <h3 className="font-semibold text-navy text-lg mb-3">The yield uplift</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A single-let property earns one rent. The same property run as a four- or five-bed HMO
              earns four or five rents from one building, so gross yields frequently reach double
              digits where a comparable single-let would sit at 6–8%. That income multiplier is the
              entire case for HMO investment.
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
            <AlertTriangle size={24} className="text-gold mb-3" />
            <h3 className="font-semibold text-navy text-lg mb-3">The management reality</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Higher yield means higher intensity: more tenancies, more turnover, shared-area cleaning,
              frequent maintenance, fire-safety compliance and licence conditions. HMOs are not
              passive. Our full management service absorbs that workload so the strategy stays
              genuinely hands-off for you.
            </p>
          </div>
        </div>
      </section>

      {/* Room-rate calculator (HMO framing) */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Model your HMO room-rate yield
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-6">
            Use the calculator below for HMO numbers: enter the property purchase price and the{' '}
            <span className="font-semibold text-navy">total monthly rent from all rooms combined</span>{' '}
            (e.g. five rooms at £550 = £2,750) to see the gross yield uplift versus a single-let.
            Increase annual costs to reflect higher HMO running and compliance expenses.
          </p>
          <StrategyCalculator />
        </div>
      </section>

      <FaqSection items={FAQS} heading="HMO FAQs" />

      <CTASection campaign="hmo" />
      <ComplianceBar />
    </>
  )
}
