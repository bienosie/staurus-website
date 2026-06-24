'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', phone: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(EMPTY)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-100 rounded-sm-md p-8 shadow-card text-center">
        <CheckCircle size={44} className="text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-navy mb-2">Thank you</h3>
        <p className="text-slate-600">
          Your message has reached the Staurus Properties team. We typically respond within one
          working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-semibold px-6 py-3 rounded-sm-md transition-all duration-200 hover:bg-gold hover:text-navy text-sm tracking-wide"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-sm-md px-4 py-3 text-navy outline-none transition-colors focus:border-gold placeholder:text-slate-400'

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-100 rounded-sm-md p-6 md:p-8 shadow-card"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
            Name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Your full name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
            Email
          </span>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block mt-4">
        <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
          Phone
        </span>
        <input
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          placeholder="+44 ..."
          className={inputClass}
        />
      </label>

      <label className="block mt-4">
        <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your investment goals…"
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === 'error' && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
