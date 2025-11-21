import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cevrdgbrzjvbfmkkukpj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNldnJkZ2Jyemp2YmZta2t1a3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NzM2MDksImV4cCI6MjA3OTI0OTYwOX0.sSmMQ0jqE-hK-RNo9KHd1-dS1Qlwx282U0A9kCoGTc8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface BiodataWorker {
  id: string
  slug: string
  ref_no: string
  name: string
  photo_url: string
  nationality: string
  age: number
  date_of_birth: string
  place_of_birth: string
  height: number
  weight: number
  passport: string
  no_of_siblings: number
  marital_status: string
  no_of_children: number
  age_of_children: string
  religion: string
  education: string
  off_days: string
  basic_salary: string
  languages: {
    language: string
    proficiency: number
  }[]
  special_mention: string
  introduction: string
  
  // Medical History
  medical_conditions: {
    allergies: boolean
    physical_disabilities: boolean
    mental_illness: boolean
    diabetes: boolean
    heart_disease: boolean
    covid: boolean
    epilepsy: boolean
    hypertension: boolean
    malaria: boolean
    other_medical: boolean
    dietary_restrictions: boolean
    asthma: boolean
    tuberculosis: boolean
    operations: boolean
  }
  food_handling: {
    no_beef: boolean
    no_pork: boolean
    other: string
  }
  
  // Skills Assessment
  skills_assessment: {
    care_of_infant: {
      age_range: string
      willingness: boolean
      experience: boolean
      rating: number
    }
    care_of_elderly: {
      willingness: boolean
      experience: boolean
      rating: number
    }
    care_of_disable: {
      willingness: boolean
      experience: boolean
      rating: number
    }
    general_housework: {
      willingness: boolean
      experience: boolean
      rating: number
    }
    cooking: {
      willingness: boolean
      experience: boolean
      rating: number
      dishes: string
    }
    language_skill: {
      rating: number
    }
    other_skills: string
  }
  
  // Additional Information
  additional_info: {
    child_care: {
      newborn_0_3_months: { willingness: boolean, experience: boolean }
      babies_4_12_months: { willingness: boolean, experience: boolean }
      children_1_5_years: { willingness: boolean, experience: boolean }
      children_6_10_years: { willingness: boolean, experience: boolean }
      children_above_10_years: { willingness: boolean, experience: boolean }
      special_needs: { willingness: boolean, experience: boolean }
    }
    general_housework: {
      washing_machine: { willingness: boolean, experience: boolean }
      gas_stove: { willingness: boolean, experience: boolean }
      vacuum_cleaner: { willingness: boolean, experience: boolean }
      microwave_oven: { willingness: boolean, experience: boolean }
      ironing: { willingness: boolean, experience: boolean }
    }
    care_of_pets: {
      dog: { willingness: boolean, experience: boolean }
      cat: { willingness: boolean, experience: boolean }
    }
  }
  
  // Work Experience
  work_experience: {
    employer: string
    date_from_to: string
    country: string
    nationality_race: string
    language_used: string
    type_of_house: string
    members_in_family: string
    salary: string
    age_of_children_elderly: string
    off_days_given: string
    duties_detail: string
    reason_for_leaving: string
  }[]
  
  // Recommended For
  recommended_for: string[]
  
  created_at: string
  updated_at: string
}
