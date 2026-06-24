-- Blog posts table (AI-generated and manual)
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,
  category text default 'General',
  seo_title text,
  seo_description text,
  featured_image text,
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table blog_posts enable row level security;

-- Public can read published posts
create policy "Public can read published posts"
  on blog_posts for select
  using (published = true);

-- Service role can do everything (Make.com webhook uses this)
create policy "Service role full access"
  on blog_posts for all
  using (auth.role() = 'service_role');

-- Newsletter subscribers table
create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  first_name text,
  source text default 'website',
  subscribed boolean default true,
  subscribed_at timestamptz default now(),
  unsubscribed_at timestamptz
);

alter table newsletter_subscribers enable row level security;

-- Only service role can access subscribers (privacy)
create policy "Service role only"
  on newsletter_subscribers for all
  using (auth.role() = 'service_role');

-- Indexes
create index if not exists blog_posts_slug_idx on blog_posts(slug);
create index if not exists blog_posts_published_idx on blog_posts(published, published_at desc);
create index if not exists newsletter_email_idx on newsletter_subscribers(email);
