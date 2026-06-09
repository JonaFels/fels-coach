
-- 1. rate_limits: deny INSERT/UPDATE/DELETE for public & authenticated (service_role bypasses RLS)
CREATE POLICY "No public insert on rate_limits" ON public.rate_limits FOR INSERT TO public WITH CHECK (false);
CREATE POLICY "No public update on rate_limits" ON public.rate_limits FOR UPDATE TO public USING (false) WITH CHECK (false);
CREATE POLICY "No public delete on rate_limits" ON public.rate_limits FOR DELETE TO public USING (false);

-- 2. ebook-automation bucket: admin-only policies
CREATE POLICY "Admins can read ebook-automation"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'ebook-automation' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert ebook-automation"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'ebook-automation' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update ebook-automation"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'ebook-automation' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete ebook-automation"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'ebook-automation' AND public.has_role(auth.uid(), 'admin'));

-- 3. Public buckets: drop any broad SELECT policy that allows listing.
-- Direct public URLs continue to work (served by storage layer, not via RLS list).
DO $$
DECLARE p record;
BEGIN
  FOR p IN
    SELECT policyname FROM pg_policies
    WHERE schemaname='storage' AND tablename='objects' AND cmd='SELECT'
  LOOP
    -- Only drop policies that are clearly broad public-bucket read policies
    IF p.policyname ILIKE '%public%read%'
       OR p.policyname ILIKE '%public access%'
       OR p.policyname ILIKE '%anyone can view%'
       OR p.policyname ILIKE '%cms-images%public%'
       OR p.policyname ILIKE '%email-assets%public%' THEN
      EXECUTE format('DROP POLICY IF EXISTS %I ON storage.objects', p.policyname);
    END IF;
  END LOOP;
END $$;

-- 4. SECURITY DEFINER functions: revoke EXECUTE from anon & authenticated for trigger-only helpers.
-- has_role MUST remain callable by authenticated (used in RLS); revoke from anon.
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.validate_site_content_type() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
