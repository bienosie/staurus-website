# Staurus Properties — Marketing Website

Next.js 14 marketing site for Staurus Properties Limited.

## Stack
- **Framework:** Next.js 14 (App Router)
- **Hosting:** Vercel Pro
- **Database:** Supabase (shared with investor portal)
- **Email (transactional):** Resend
- **Email (newsletter):** Zoho Campaigns via Make.com
- **Blog generation:** Claude API via Make.com S8 scenario

## Getting Started

```bash
cp .env.local.example .env.local
# Fill in environment variables
npm install
npm run dev
```

## Project Structure

```
app/                  Next.js App Router pages
components/
  layout/             Navigation, Footer
  sections/           Homepage sections
  ui/                 Shared UI components
  blog/               Blog-specific components
lib/                  Supabase, Resend, SEO utilities
```

## Supabase Tables Required

Run migrations in /supabase/migrations before first deploy:
- blog_posts
- newsletter_subscribers

## Deployment

1. Push to GitHub
2. Connect to Vercel (upgrade to Pro before DNS cutover)
3. Add environment variables in Vercel dashboard
4. Point staurusproperties.com DNS to Vercel
