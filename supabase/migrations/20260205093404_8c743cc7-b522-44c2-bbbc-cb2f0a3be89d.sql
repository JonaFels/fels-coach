-- Create a table for callback requests
CREATE TABLE public.callback_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact TEXT NOT NULL,
  contact_type TEXT NOT NULL DEFAULT 'unknown',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.callback_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts (no auth required for contact form)
CREATE POLICY "Allow public inserts" 
ON public.callback_requests 
FOR INSERT 
WITH CHECK (true);

-- No read policy - only owner can see via Supabase dashboard