-- Create ebook_leads table
CREATE TABLE public.ebook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT,
  email TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.ebook_leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (no auth required for lead capture)
CREATE POLICY "Anyone can submit ebook form" 
ON public.ebook_leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users can view leads
CREATE POLICY "Authenticated users can view ebook leads" 
ON public.ebook_leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create storage bucket for ebook
INSERT INTO storage.buckets (id, name, public) VALUES ('ebook-automation', 'ebook-automation', true);

-- Allow public read access to ebook files
CREATE POLICY "Public can read ebook files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'ebook-automation');