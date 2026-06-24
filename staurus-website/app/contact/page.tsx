import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CONTACT, DIRECTOR, SITE_URL } from '@/lib/site'

const PATH = '/contact'

export const metadata: Metadata = {
  title: 'Contact Staurus Properties',
  description:
    'Talk to the Staurus Properties team about below-market-value property investment in Manchester and Liverpool. Call, email or message us on WhatsApp, or send an enquiry and we will respond within one working day.',
  keywords: [
    'contact Staurus Properties',
    'property sourcing Manchester contact',
    'property investment enquiry UK',
    'speak to a property sourcer',
  ],
  openGraph: {
    title: 'Contact Staurus Properties',
    description:
      'Call, email or WhatsApp the Staurus Properties team, or send an enquiry about UK property investment.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}${PATH}` },
        ]}
      />

      <section className="bg-hero-gradient">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-22 text-center">
          <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Let&rsquo;s Talk
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are ready to invest or simply exploring your options, the
            Staurus Properties team is here to help. We typically respond within one
            working day.
          </p>
        </div>
      </section>

      <section className="bg-slate-site py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-2">
              Send us a message
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Tell us about your investment goals and we will get back to you with the
              right next step.
            </p>
            <ContactForm />
          </div>

          <div className="space-y-4">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white border border-slate-100 rounded-sm-md p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-navy">
                <MessageCircle size={20} />
              </span>
              <span>
                <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400">
                  WhatsApp
                </span>
                <span className="block font-semibold text-navy">
                  {CONTACT.whatsapp}
                </span>
              </span>
            </a>

            <a
              href={CONTACT.phoneHref}
              className="group flex items-center gap-4 bg-white border border-slate-100 rounded-sm-md p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-navy">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400">
                  Telephone
                </span>
                <span className="block font-semibold text-navy">{CONTACT.phone}</span>
              </span>
            </a>

            <a
              href={CONTACT.emailHref}
              className="group flex items-center gap-4 bg-white border border-slate-100 rounded-sm-md p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-navy">
                <Mail size={20} />
              </span>
              <span>
                <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400">
                  Email
                </span>
                <span className="block font-semibold text-navy break-all">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 bg-white border border-slate-100 rounded-sm-md p-5 shadow-card">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-gold shrink-0">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                  Office
                </span>
                <span className="block font-semibold text-navy leading-snug">
                  {CONTACT.office}
                </span>
                <span className="block text-sm text-slate-500 mt-2">
                  {DIRECTOR.name}, {DIRECTOR.title}
                </span>
              </span>
            </div>

            <div className="bg-navy rounded-sm-md p-6 text-center">
              <p className="text-2xs font-semibold uppercase tracking-widest text-gold mb-2">
                Visit by appointment
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our office is located in the heart of Manchester at Oxford Court. We
                welcome investors by appointment — get in touch to arrange a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection campaign="contact" />
      <ComplianceBar />
    </>
  )
}
