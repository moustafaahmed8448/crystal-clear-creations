DROP POLICY IF EXISTS "Anyone can upload a CV" ON storage.objects;

CREATE POLICY "Anyone can upload a CV to cvs folder"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'job-applications'
  AND (storage.foldername(name))[1] = 'cvs'
);