import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck, CalendarClock, Ban, Wrench, HeartHandshake } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FaqSection } from '@/components/sections/FaqSection'
import { BreadcrumbJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, portalLink } from '@/lib/site'

const PATH = '/strategies/social-housing'

export const metadata: Metadata = {
  title: 'Social Housing Investment | Guaranteed Lease Property | Staurus Properties',
  description:
    'Hands-off social housing investment with 5-year guaranteed leases — zero voids, zero arrears, zero management. Stable, government-backed income across Manchester and Liverpool.',
  keywords: [
    'social housing investment UK',
    'guaranteed rent property',
    'social housing lease',
    'zero void property investment',
    'LHA rental income',
    'hands-off social housing',
  ],
  openGraph: {
    title: 'Social Housing Investment | Staurus Properties',
    description:
      'Five-year guaranteed leases with zero voids, zero arrears and zero management. Stable, hands-off social housing income.',
    images: ['/images/og-image.png'],
    url: SITE_URL + PATH,
  },
  alternates: { canonical: SITE_URL + PATH },
}

const FAQS = [
  {
    question: 'How does the guaranteed lease model work?',
    answer:
      'Your property is let on a long-term lease — typically five years — to a registered provider or housing organisation that, in turn, houses tenants in need. The provider pays you a fixed rent every month for the full term regardless of whether the property is occupied, who lives there, or whether a tenant ever pays. You are the landlord to the provider, not to the end occupant, which is what makes the income so stable.',
  },
  {
    question: 'What do "zero voids, zero arrears, zero management" actually mean?',
    answer:
      'Zero voids: you are paid the agreed rent even during empty periods, because the lease — not occupancy — drives your income. Zero arrears: the provider is the rent payer, so individual tenant non-payment is not your problem. Zero management: the provider takes responsibility for tenant-facing management and day-to-day upkeep within the lease terms. The result is rental income that behaves more like a fixed-income contract than a typical tenancy.',
  },
  {
    question: 'What is Local Housing Allowance (LHA) and how does it relate to the rent?',
    answer:
      'Local Housing Allowance is the rate used to calculate housing support for eligible tenants in the private rented sector, set by area and property size. Social housing leases are typically underpinned by LHA-linked funding, which is what allows providers to offer rent backed by public funding. Because the income source is government-supported rather than dependent on one tenant\'s wages, it tends to be more resilient than open-market lettings.',
  },
  {
    question: 'Will I earn as much as an open-market let or HMO?',
    answer:
      'Usually the headline rent is a little lower than you might achieve on the open market, because you are trading some yield for certainty. But once you account for eliminated void periods, no arrears, no management fees and no maintenance hassle, the net, risk-adjusted return is highly competitive — and far more predictable. It is a stability play, not a maximum-yield play.',
  },
  {
    question: 'Who is social housing investment ideal for?',
    answer:
      'It suits investors who prioritise predictable, genuinely passive income over chasing the highest possible yield — for example, those building retirement income, overseas investors who want zero operational involvement, or anyone who values a fixed monthly figure they can rely on for years. It also appeals to investors who want their capital to do social good by helping address the UK housing shortage.',
  },
  {
    question: 'Does Staurus source social housing stock in Manchester and Liverpool?',
    answer:
      'Yes. We source suitable properties below market value in our North West target areas and connect them with reputable lease providers, handling the due diligence and the lease arrangement so you receive guaranteed income from completion. Every social housing opportunity on our portal sets out the lease length and the guaranteed monthly rent.',
  },
]

const pillars = [
  { icon: Ban, title: 'Zero voids', body: 'Rent is paid for the full lease term whether or not the property is occupied.' },
  { icon: ShieldCheck, title: 'Zero arrears', body: 'A registered provider is your rent payer — individual tenant non-payment is not your risk.' },
  { icon: Wrench, title: 'Zero management', body: 'The provider handles tenant-facing management and upkeep within the lease terms.' },
]

export default function SocialHousingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Strategies', url: SITE_URL + '/strategies' },
          { name: 'Social Housing', url: SITE_URL + PATH },
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
            Social housing: guaranteed income, genuinely passive
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Let your property on a five-year guaranteed lease to a registered provider and collect a
            fixed rent every month — with zero voids, zero arrears and zero management. The most
            hands-off strategy we offer, underpinned by government-supported funding.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('social-housing')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* The three zeros */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">
            The pitch in three zeros
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
            Everything that makes ordinary letting stressful is removed by the guaranteed lease model.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-slate-site border border-slate-100 rounded-sm-md p-7 shadow-card text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-sm-md bg-navy text-gold mb-4">
                  <p.icon size={22} />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the lease works */}
      <section className="bg-slate-site py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">
            How the 5-year guaranteed lease works
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
              <CalendarClock size={24} className="text-gold mb-3" />
              <h3 className="font-semibold text-navy text-lg mb-3">A fixed term, a fixed rent</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You grant a long lease — typically five years — to a registered provider. They pay you
                an agreed monthly rent for the entire term. Your relationship is with the provider, a
                stable counterparty, not with the end occupant.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
              <HeartHandshake size={24} className="text-gold mb-3" />
              <h3 className="font-semibold text-navy text-lg mb-3">LHA-backed, socially useful</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The provider houses tenants in need, with rent typically underpinned by Local Housing
                Allowance-linked funding. Your income helps address the UK housing shortage while
                remaining backed by a public-funding source rather than a single tenant&apos;s wages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal investor */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-navy rounded-sm-md p-8 md:p-12 shadow-card">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">
              Is social housing right for you?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-5 max-w-2xl">
              This strategy is built for investors who value certainty over chasing the highest yield.
              It is an especially strong fit if you:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                'Want a predictable, fixed monthly income you can rely on for years',
                'Prefer a genuinely passive, zero-operation investment — ideal for overseas investors',
                'Are building stable retirement or family income rather than maximising short-term return',
                'Want your capital to do social good by helping house people in need',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200 text-sm">
                  <ShieldCheck size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} heading="Social Housing FAQs" />

      <CTASection campaign="social-housing" />
      <ComplianceBar />
    </>
  )
}
