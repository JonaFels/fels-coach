-- CMS Images Storage Bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('cms-images', 'cms-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "CMS images public read"
ON storage.objects FOR SELECT
USING (bucket_id = 'cms-images');

-- Admin-only write
CREATE POLICY "Admins can upload CMS images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'cms-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update CMS images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'cms-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete CMS images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'cms-images' AND public.has_role(auth.uid(), 'admin'));
