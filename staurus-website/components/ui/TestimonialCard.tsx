// Investor testimonial card. Server component — no client code.
import { Quote, Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  role?: string
  rating?: number
}

export function TestimonialCard({ quote, name, role, rating }: TestimonialCardProps) {
  return (
    <figure className="bg-white border border-slate-100 rounded-sm-md p-6 md:p-7 shadow-card flex flex-col h-full">
      <Quote size={28} className="text-gold mb-4" aria-hidden />

      {typeof rating === 'number' && (
        <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? 'fill-gold text-gold' : 'text-slate-200'}
            />
          ))}
        </div>
      )}

      <blockquote className="text-slate-700 leading-relaxed flex-grow">{quote}</blockquote>

      <figcaption className="mt-5 pt-5 border-t border-slate-100">
        <p className="font-semibold text-navy">{name}</p>
        {role && <p className="text-sm text-slate-500">{role}</p>}
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
