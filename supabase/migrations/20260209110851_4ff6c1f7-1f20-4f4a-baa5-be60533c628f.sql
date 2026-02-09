
-- Create rate limiting table
CREATE TABLE public.rate_limits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  request_count INT DEFAULT 1,
  window_start TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(ip_address, endpoint)
);

-- Index for fast lookups
CREATE INDEX idx_rate_limits_lookup ON public.rate_limits(ip_address, endpoint, window_start);

-- Enable RLS (service role key used in edge functions bypasses RLS)
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- No public access policies needed - only accessed via service role in edge functions

-- Make ebook-automation bucket private
UPDATE storage.buckets SET public = false WHERE id = 'ebook-automation';

-- Drop the public read policy
DROP POLICY IF EXISTS "Public can read ebook files" ON storage.objects;
