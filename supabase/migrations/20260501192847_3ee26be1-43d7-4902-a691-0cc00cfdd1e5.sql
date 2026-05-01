ALTER TABLE public.site_content
  ADD COLUMN IF NOT EXISTS type text NOT NULL DEFAULT 'text',
  ADD COLUMN IF NOT EXISTS category text NOT NULL DEFAULT 'Allgemein';

-- Validierung des type-Feldes per Trigger (nicht CHECK, da wir flexibel bleiben wollen)
CREATE OR REPLACE FUNCTION public.validate_site_content_type()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.type NOT IN ('text', 'image', 'link') THEN
    RAISE EXCEPTION 'Invalid type: %. Must be text, image, or link.', NEW.type;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_site_content_type_trigger ON public.site_content;
CREATE TRIGGER validate_site_content_type_trigger
BEFORE INSERT OR UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.validate_site_content_type();

-- updated_at Trigger sicherstellen
DROP TRIGGER IF EXISTS update_site_content_updated_at ON public.site_content;
CREATE TRIGGER update_site_content_updated_at
BEFORE UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_site_content_category ON public.site_content(category);
CREATE INDEX IF NOT EXISTS idx_site_content_type ON public.site_content(type);