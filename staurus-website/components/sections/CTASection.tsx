// Reusable dark navy CTA band. Server component — Tailwind hover classes only.
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT, portalLink } from '@/lib/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  campaign?: string
}

export function CTASection({
  title = 'Ready to access investment-grade UK property deals?',
  subtitle = 'Join our investor portal for live, fully-vetted below-market-value opportunities across Manchester and Liverpool — with projected returns, refurb costings and exit strategies on every deal.',
  primaryLabel = 'View Live Deals',
  primaryHref,
  campaign = 'cta-section',
}: CTASectionProps) {
  const href = primaryHref ?? portalLink(campaign)

  return (
    <section className="bg-navy-deeper py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
          >
            {primaryLabel}
            <ArrowRight size={18} />
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold hover:text-navy active:scale-[0.98] text-sm tracking-wide"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
