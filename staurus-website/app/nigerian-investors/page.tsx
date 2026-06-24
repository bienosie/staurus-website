import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Banknote, Building2, ShieldCheck, Globe2 } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { LagosSummitSection } from '@/components/sections/LagosSummitSection'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { FaqSection, type FaqItem } from '@/components/sections/FaqSection'
import {
  BreadcrumbJsonLd,
  FaqPageJsonLd,
  RealEstateAgentJsonLd,
} from '@/components/seo/JsonLd'
import { CONTACT, COMPLIANCE, SITE_URL, portalLink } from '@/lib/site'

const PATH = '/nigerian-investors'

export const metadata: Metadata = {
  title: 'Invest in UK Property from Nigeria | Staurus Properties',
  description:
    'A clear, compliant route for Nigerian investors into UK below-market-value property: how Naira to GBP funding works through licensed channels, UK SPV company formation, and a Manchester-based team that came to Lagos. Speak to us on WhatsApp.',
  keywords: [
    'invest in UK property from Nigeria',
    'Nigerian investors UK property',
    'Naira to GBP property investment',
    'UK SPV for Nigerian investors',
    'Lagos UK property',
    'diaspora property investment UK',
    'below market value UK property Nigeria',
  ],
  openGraph: {
    title: 'Invest in UK Property from Nigeria | Staurus Properties',
    description:
      'A compliant route from Lagos to the UK property market: licensed FX funding, UK SPV formation and live below-market-value deals.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

const STEPS = [
  {
    icon: Globe2,
    title: 'Register and review live deals',
    body: 'Join the investor portal from anywhere in Nigeria and review fully-vetted UK below-market-value deals — with projected yields, refurb costings and exit strategies on every opportunity.',
  },
  {
    icon: Building2,
    title: 'Form a UK SPV',
    body: 'Most overseas investors buy through a UK limited company (an SPV). Through our Mint Formations partnership we set this up for you, with Essential, Investor and Elite packages to match your plan.',
  },
  {
    icon: Banknote,
    title: 'Move funds the compliant way',
    body: 'Funds are converted from Naira to GBP through licensed FX providers and money transfer operators, and settle into your UK SPV’s own UK bank account. Source-of-funds and AML checks are completed before completion.',
  },
  {
    icon: ShieldCheck,
    title: 'Complete and let',
    body: 'UK solicitors handle conveyancing; we project-manage any refurbishment. Your SPV holds the asset and receives the rent — with full UK regulatory protections behind every transaction.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I invest in UK property while living in Nigeria?',
    answer:
      'Yes. We work with Nigerian-based investors regularly — including the investors we met at our February 2025 Lagos Summit. You do not need to be UK-resident to buy UK property; most overseas investors purchase through a UK limited company (an SPV) that we help you form.',
  },
  {
    question: 'How do I move money from Naira to GBP for a purchase?',
    answer:
      'Funds are converted and transferred through licensed FX providers and regulated money transfer operators, then settle into your UK SPV’s own UK bank account ahead of completion. We do not use unlicensed channels. Standard source-of-funds and anti-money-laundering checks are completed first, in line with our AML obligations.',
  },
  {
    question: 'What is an SPV and why do I need one?',
    answer:
      'An SPV (Special Purpose Vehicle) is a UK limited company set up to hold property. It is the standard, tax-efficient structure for overseas and portfolio investors. Through our partnership with Mint Formations we offer three packages — Essential, Investor and Elite — and handle the formation for you.',
  },
  {
    question: 'How do I know Staurus Properties is legitimate?',
    answer: `Staurus Properties Limited is registered in England and Wales (Company No. ${COMPLIANCE.companyNo}) and holds ICO (${COMPLIANCE.ico}), AML (${COMPLIANCE.aml}), PRS (${COMPLIANCE.prs}) and NRLA (${COMPLIANCE.nrla}) registrations. We flew our Manchester team to Lagos in February 2025 to present live deals in person — and we are happy to speak with you directly on WhatsApp.`,
  },
]

export default function NigerianInvestorsPage() {
  return (
    <>
      <RealEstateAgentJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Nigerian Investors', url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FaqPageJsonLd items={FAQ.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Hero */}
      <section className="bg-navy-deeper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
            For Nigerian Investors
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Invest in UK property — <span className="text-gold">from Lagos to Manchester.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            A clear, compliant route from Naira into UK below-market-value property. We handle the
            deal sourcing, the UK company structure and the regulated funding path — and we came to
            Lagos in person to prove it.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp ({CONTACT.whatsapp})
            </a>
            <a
              href={portalLink('nigerian-investors')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:border-gold text-sm tracking-wide"
            >
              View Live Deals <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Reuse the Lagos Summit proof section */}
      <LagosSummitSection />

      {/* Why UK property */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              Why UK Property
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              A hard-currency asset, protected by UK law
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              For Nigerian investors, UK property is one of the most effective ways to hold value in
              a stable, hard-currency market. Rent is earned in pounds, title is protected by a
              transparent UK legal system, and below-market-value sourcing means you build in equity
              from day one. We focus on Manchester and Liverpool — the UK&apos;s highest-yielding
              major cities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/markets/manchester"
                className="inline-flex items-center gap-2 text-navy font-semibold text-sm border-b-2 border-gold pb-0.5 hover:text-gold transition-colors"
              >
                Manchester market <ArrowRight size={14} />
              </Link>
              <Link
                href="/markets/liverpool"
                className="inline-flex items-center gap-2 text-navy font-semibold text-sm border-b-2 border-gold pb-0.5 hover:text-gold transition-colors"
              >
                Liverpool market <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for Nigerian investors */}
      <section className="bg-slate-site py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              How It Works From Nigeria
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              From Naira to a UK asset, the compliant way
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Every step is structured around UK regulatory requirements and licensed funding
              channels — no shortcuts, no informal routes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-md bg-gold/15 flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold font-display font-bold text-lg">0{i + 1}</span>
                    <h3 className="font-semibold text-navy text-lg">{title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SPV callout */}
          <div className="mt-8 bg-navy rounded-sm-md p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Set up your UK SPV before you buy
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm max-w-2xl">
                Buying through a UK limited company is the standard structure for overseas investors.
                Through our Mint Formations partnership we offer Essential, Investor and Elite
                packages and handle the entire formation for you.
              </p>
            </div>
            <Link
              href="/spv-formation"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-7 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide whitespace-nowrap"
            >
              SPV Formation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              From Our Lagos Investors
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              Trusted by investors in Nigeria
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="I had wanted UK property exposure for years but never trusted the process from Lagos. Meeting the Staurus team in person at the summit changed that — they set up my SPV, walked me through how the funds moved through licensed channels, and I completed on a Manchester deal within months."
              name="Adebayo O."
              role="Investor, Lagos"
              rating={5}
            />
            <TestimonialCard
              quote="What stood out was the compliance. They insisted on proper source-of-funds checks and only used regulated transfer routes — exactly what you want when you are sending money abroad. The below-market-value deal they sourced in Liverpool is now cash-flowing in pounds."
              name="Chidinma E."
              role="Investor, Lagos"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Trust / compliance trust strip */}
      <section className="bg-slate-site py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-6">
            Regulated UK Company
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            {[
              { label: 'ICO', value: COMPLIANCE.ico },
              { label: 'AML', value: COMPLIANCE.aml },
              { label: 'PRS', value: COMPLIANCE.prs },
              { label: 'NRLA', value: COMPLIANCE.nrla },
              { label: 'Companies House', value: COMPLIANCE.companyNo },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center">
                <span className="text-slate-400 text-xs uppercase tracking-wide">{c.label}</span>
                <span className="font-mono font-bold text-navy">{c.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Staurus Properties Limited is registered in England and Wales. All overseas investment is
            handled in accordance with our AML, ICO and PRS obligations. Capital at risk.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} heading="Nigerian Investor FAQs" />

      <CTASection
        title="Speak to a UK property team that came to Lagos"
        subtitle="Message us directly on WhatsApp to discuss investing in UK below-market-value property from Nigeria — SPV formation, compliant funding and live deals."
        primaryLabel="Chat on WhatsApp"
        primaryHref={CONTACT.whatsappHref}
        campaign="nigerian-investors"
      />

      <ComplianceBar />
    </>
  )
}
