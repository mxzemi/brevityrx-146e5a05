
-- Create waitlist_emails table
CREATE TABLE public.waitlist_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public waitlist form, no auth required)
CREATE POLICY "Anyone can submit waitlist email"
  ON public.waitlist_emails
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
