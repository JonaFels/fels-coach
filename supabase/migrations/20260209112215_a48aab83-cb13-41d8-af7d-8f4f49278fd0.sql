
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Admin-only SELECT policy on user_roles
CREATE POLICY "Admins can view roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- rate_limits: deny all SELECT (only service role accesses it)
CREATE POLICY "No public select on rate_limits"
  ON public.rate_limits FOR SELECT
  USING (false);

-- Replace contacts SELECT policy with admin-only
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON public.contacts;
CREATE POLICY "Admins can view contacts"
  ON public.contacts FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Replace callback_requests SELECT policy with admin-only
DROP POLICY IF EXISTS "Authenticated users can view callback requests" ON public.callback_requests;
CREATE POLICY "Admins can view callback requests"
  ON public.callback_requests FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Replace ebook_leads SELECT policy with admin-only
DROP POLICY IF EXISTS "Authenticated users can view ebook leads" ON public.ebook_leads;
CREATE POLICY "Admins can view ebook leads"
  ON public.ebook_leads FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
