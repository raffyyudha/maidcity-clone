-- Create biodata_workers table
CREATE TABLE IF NOT EXISTS biodata_workers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  ref_no TEXT,
  name TEXT NOT NULL,
  photo_url TEXT,
  nationality TEXT NOT NULL,
  age INTEGER NOT NULL,
  date_of_birth TEXT,
  place_of_birth TEXT,
  height INTEGER,
  weight INTEGER,
  passport TEXT,
  no_of_siblings INTEGER DEFAULT 0,
  marital_status TEXT,
  no_of_children INTEGER DEFAULT 0,
  age_of_children TEXT,
  religion TEXT,
  education TEXT,
  off_days TEXT,
  basic_salary TEXT,
  languages JSONB DEFAULT '[]'::jsonb,
  special_mention TEXT,
  introduction TEXT,
  
  -- Medical History
  medical_conditions JSONB DEFAULT '{
    "allergies": false,
    "physical_disabilities": false,
    "mental_illness": false,
    "diabetes": false,
    "heart_disease": false,
    "covid": false,
    "epilepsy": false,
    "hypertension": false,
    "malaria": false,
    "other_medical": false,
    "dietary_restrictions": false,
    "asthma": false,
    "tuberculosis": false,
    "operations": false
  }'::jsonb,
  
  food_handling JSONB DEFAULT '{
    "no_beef": false,
    "no_pork": false,
    "other": ""
  }'::jsonb,
  
  -- Skills Assessment
  skills_assessment JSONB DEFAULT '{
    "care_of_infant": {
      "age_range": "",
      "willingness": false,
      "experience": false,
      "rating": 0
    },
    "care_of_elderly": {
      "willingness": false,
      "experience": false,
      "rating": 0
    },
    "care_of_disable": {
      "willingness": false,
      "experience": false,
      "rating": 0
    },
    "general_housework": {
      "willingness": false,
      "experience": false,
      "rating": 0
    },
    "cooking": {
      "willingness": false,
      "experience": false,
      "rating": 0,
      "dishes": ""
    },
    "language_skill": {
      "rating": 0
    },
    "other_skills": ""
  }'::jsonb,
  
  -- Additional Information
  additional_info JSONB DEFAULT '{
    "child_care": {
      "newborn_0_3_months": {"willingness": false, "experience": false},
      "babies_4_12_months": {"willingness": false, "experience": false},
      "children_1_5_years": {"willingness": false, "experience": false},
      "children_6_10_years": {"willingness": false, "experience": false},
      "children_above_10_years": {"willingness": false, "experience": false},
      "special_needs": {"willingness": false, "experience": false}
    },
    "general_housework": {
      "washing_machine": {"willingness": false, "experience": false},
      "gas_stove": {"willingness": false, "experience": false},
      "vacuum_cleaner": {"willingness": false, "experience": false},
      "microwave_oven": {"willingness": false, "experience": false},
      "ironing": {"willingness": false, "experience": false}
    },
    "care_of_pets": {
      "dog": {"willingness": false, "experience": false},
      "cat": {"willingness": false, "experience": false}
    }
  }'::jsonb,
  
  -- Work Experience
  work_experience JSONB DEFAULT '[]'::jsonb,
  
  -- Recommended For
  recommended_for TEXT[] DEFAULT ARRAY[]::TEXT[],
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_biodata_workers_slug ON biodata_workers(slug);
CREATE INDEX IF NOT EXISTS idx_biodata_workers_nationality ON biodata_workers(nationality);

-- Enable Row Level Security (RLS)
ALTER TABLE biodata_workers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON biodata_workers
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON biodata_workers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON biodata_workers
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON biodata_workers
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for worker photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('worker-photos', 'worker-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for public read
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'worker-photos');

-- Create storage policy for authenticated upload
CREATE POLICY "Allow authenticated upload" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'worker-photos');

-- Create storage policy for authenticated update
CREATE POLICY "Allow authenticated update" ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'worker-photos');

-- Create storage policy for authenticated delete
CREATE POLICY "Allow authenticated delete" ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'worker-photos');
