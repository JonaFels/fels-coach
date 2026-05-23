CREATE TABLE public.quiz_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  dominant_type TEXT NOT NULL,
  score_lastentraeger INTEGER NOT NULL DEFAULT 0,
  score_anpasser INTEGER NOT NULL DEFAULT 0,
  score_anklaeger INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quiz results"
ON public.quiz_submissions
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Admins can view quiz submissions"
ON public.quiz_submissions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));