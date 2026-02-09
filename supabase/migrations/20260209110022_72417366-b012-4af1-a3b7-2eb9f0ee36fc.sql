-- Add SELECT policy for callback_requests to match contacts and ebook_leads tables
CREATE POLICY "Authenticated users can view callback requests" 
ON public.callback_requests 
FOR SELECT 
USING (auth.role() = 'authenticated');