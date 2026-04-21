-- Create public bucket for job application CVs
INSERT INTO storage.buckets (id, name, public)
VALUES ('job-applications', 'job-applications', false)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload a CV (write-only public access)
CREATE POLICY "Anyone can upload a CV"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'job-applications');

-- Add a column on contact_submissions to store the CV path for job applications
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS cv_path TEXT;