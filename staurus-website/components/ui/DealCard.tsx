'use client'

import { Lock, MapPin, TrendingUp, ArrowRight } from 'lucide-react'
import { portalLink } from '@/lib/site'

interface DealCardProps {
  area: string
  strategy: string
  headlineRoi: string
  bmv: string
}

export function DealCard({ area, strategy, headlineRoi, bmv }: DealCardProps) {
  return (
    <div className="relative bg-white border border-slate-100 rounded-sm-md overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="bg-navy px-5 py-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-widest text-gold">
          <MapPin size={13} />
          {area}
        </span>
        <span className="text-2xs font-semibold uppercase tracking-widest text-slate-300">
          {strategy}
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-2xs uppercase tracking-widest text-slate-400 mb-1">Projected ROI</p>
            <p className="inline-flex items-center gap-1 text-2xl font-bold text-navy">
              <TrendingUp size={18} className="text-gold" />
              {headlineRoi}
            </p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-widest text-slate-400 mb-1">BMV Discount</p>
            <p className="text-2xl font-bold text-navy">{bmv}</p>
          </div>
        </div>

        {/* Blurred teaser: price + address are members-only */}
        <div className="relative rounded-sm-md border border-slate-100 bg-slate-site p-4 mb-5">
          <div className="select-none blur-[6px] pointer-events-none">
            <p className="text-2xs uppercase tracking-widest text-slate-400 mb-1">Asking Price</p>
            <p className="text-xl font-bold text-navy">£185,000</p>
            <p className="text-sm text-slate-600 mt-1">42 Investment Avenue, Manchester</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 bg-navy/90 text-gold text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm-md">
              <Lock size={13} />
              Members only
            </span>
          </div>
        </div>

        <a
          href={portalLink('live-deals')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-5 py-3 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
        >
          View on portal
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export default DealCard
