'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';

export default function AddWorker() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  
  const [formData, setFormData] = useState({
    ref_no: '',
    name: '',
    date_of_birth: '',
    place_of_birth: '',
    nationality: '',
    age: '',
    height: '',
    weight: '',
    passport: 'Yes',
    no_of_siblings: '0',
    religion: '',
    marital_status: '',
    no_of_children: '0',
    age_of_children: '',
    education: '',
    off_days: '',
    basic_salary: '',
    special_mention: '',
    introduction: '',
  });

  const [languages, setLanguages] = useState<{ language: string; proficiency: number }[]>([
    { language: 'English', proficiency: 1 }
  ]);

  const [workExperience, setWorkExperience] = useState<any[]>([
    {
      country: '',
      period: '',
      employer: '',
      duties: '',
      offDays: '',
      reasonForLeaving: ''
    }
  ]);

  const [recommendedFor, setRecommendedFor] = useState<string[]>([]);

  const [medicalConditions, setMedicalConditions] = useState({
    covid: false,
    diabetes: false,
    operations: false,
    heart_disease: false,
    epilepsy: false,
    allergies: false,
    hypertension: false,
    malaria: false,
    other_medical: false,
    dietary_restrictions: false,
    asthma: false,
    tuberculosis: false,
    mental_illness: false,
    physical_disabilities: false
  });

  const [foodHandling, setFoodHandling] = useState({
    no_beef: false,
    no_pork: false,
    other: ''
  });

  const skillOptions = [
    'Child Care', 'Cooking', 'Baby Care', 'Elderly Care', 
    'Housekeeping', 'Disable Care', 'Pet Care', 'Marketing'
  ];

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addLanguage = () => {
    setLanguages([...languages, { language: '', proficiency: 1 }]);
  };

  const removeLanguage = (index: number) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const updateLanguage = (index: number, field: string, value: any) => {
    const updated = [...languages];
    updated[index] = { ...updated[index], [field]: value };
    setLanguages(updated);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, {
      country: '',
      period: '',
      employer: '',
      duties: '',
      offDays: '',
      reasonForLeaving: ''
    }]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const updateWorkExperience = (index: number, field: string, value: string) => {
    const updated = [...workExperience];
    updated[index] = { ...updated[index], [field]: value };
    setWorkExperience(updated);
  };

  const toggleSkill = (skill: string) => {
    if (recommendedFor.includes(skill)) {
      setRecommendedFor(recommendedFor.filter(s => s !== skill));
    } else {
      setRecommendedFor([...recommendedFor, skill]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Generate slug from name
      const slug = formData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

      // Upload photo if exists
      let photoUrl = '';
      if (photoFile) {
        const fileExt = photoFile.name.split('.').pop();
        const fileName = `${slug}-${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('worker-photos')
          .upload(fileName, photoFile);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('worker-photos')
          .getPublicUrl(fileName);
        
        photoUrl = publicUrl;
      }

      // Insert worker data
      const { error } = await supabase
        .from('biodata_workers')
        .insert({
          slug,
          ref_no: formData.ref_no,
          name: formData.name,
          photo_url: photoUrl,
          date_of_birth: formData.date_of_birth,
          place_of_birth: formData.place_of_birth,
          nationality: formData.nationality,
          age: parseInt(formData.age),
          height: parseInt(formData.height),
          weight: parseInt(formData.weight),
          passport: formData.passport,
          no_of_siblings: parseInt(formData.no_of_siblings),
          religion: formData.religion,
          marital_status: formData.marital_status,
          no_of_children: parseInt(formData.no_of_children),
          age_of_children: formData.age_of_children,
          education: formData.education,
          off_days: formData.off_days,
          basic_salary: formData.basic_salary,
          special_mention: formData.special_mention,
          introduction: formData.introduction,
          languages: languages,
          work_experience: workExperience,
          recommended_for: recommendedFor,
          medical_conditions: medicalConditions,
          food_handling: foodHandling
        });

      if (error) throw error;

      alert('Worker biodata added successfully!');
      router.push('/admin/dashboard');
    } catch (error: any) {
      alert('Error adding worker: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              Back
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Add New Worker</h1>
              <p className="text-sm text-gray-600">Fill in the worker biodata information</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            
            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Worker Photo *
              </label>
              <div className="flex items-start gap-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Upload size={32} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#FB4D66] file:text-white hover:file:bg-[#d43940] file:cursor-pointer"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload a clear photo of the worker (JPG, PNG)</p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ref No *
                </label>
                <input
                  type="text"
                  name="ref_no"
                  value={formData.ref_no}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., M2825"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="text"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="place_of_birth"
                  value={formData.place_of_birth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Place of birth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., Burmese, Filipino"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="18"
                  max="65"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Age"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Religion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marital Status
                </label>
                <select
                  name="marital_status"
                  value={formData.marital_status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Children
                </label>
                <input
                  type="number"
                  name="no_of_children"
                  value={formData.no_of_children}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., High School, College"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Height in cm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="Weight in kg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport
                </label>
                <select
                  name="passport"
                  value={formData.passport}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No of Siblings
                </label>
                <input
                  type="number"
                  name="no_of_siblings"
                  value={formData.no_of_siblings}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age of Children
                </label>
                <input
                  type="text"
                  name="age_of_children"
                  value={formData.age_of_children}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., N/A or 5, 8, 12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Off-days
                </label>
                <input
                  type="text"
                  name="off_days"
                  value={formData.off_days}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., 1 day/month"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Basic Salary
                </label>
                <input
                  type="text"
                  name="basic_salary"
                  value={formData.basic_salary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  placeholder="e.g., $550"
                />
              </div>
            </div>

            {/* Special Mention & Introduction */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Mention
              </label>
              <textarea
                name="special_mention"
                value={formData.special_mention}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                placeholder="Any special mentions or notes (e.g., N/A)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maid Introduction
              </label>
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                placeholder="Brief introduction about the worker (e.g., NAW MA HLA, from Myanmar, has experience in general household work...)"
              />
              <p className="text-xs text-gray-500 mt-1">This will be displayed on the biodata page</p>
            </div>

            {/* Languages */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Languages
                </label>
                <button
                  type="button"
                  onClick={addLanguage}
                  className="flex items-center gap-1 text-sm text-[#FB4D66] hover:text-[#d43940]"
                >
                  <Plus size={16} />
                  Add Language
                </button>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <input
                      type="text"
                      value={lang.language}
                      onChange={(e) => updateLanguage(index, 'language', e.target.value)}
                      placeholder="Language name"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                    />
                    <select
                      value={lang.proficiency}
                      onChange={(e) => updateLanguage(index, 'proficiency', parseInt(e.target.value))}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                    >
                      <option value={1}>Basic</option>
                      <option value={2}>Good</option>
                      <option value={3}>Fluent</option>
                    </select>
                    {languages.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLanguage(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Work Experience
                </label>
                <button
                  type="button"
                  onClick={addWorkExperience}
                  className="flex items-center gap-1 text-sm text-[#FB4D66] hover:text-[#d43940]"
                >
                  <Plus size={16} />
                  Add Experience
                </button>
              </div>
              <div className="space-y-4">
                {workExperience.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-700">Experience #{index + 1}</h4>
                      {workExperience.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeWorkExperience(index)}
                          className="text-red-500 hover:bg-red-50 p-1 rounded"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={exp.country}
                        onChange={(e) => updateWorkExperience(index, 'country', e.target.value)}
                        placeholder="Country"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                      />
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => updateWorkExperience(index, 'period', e.target.value)}
                        placeholder="Period (e.g., 2020-2022)"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                      />
                      <input
                        type="text"
                        value={exp.employer}
                        onChange={(e) => updateWorkExperience(index, 'employer', e.target.value)}
                        placeholder="Employer"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                      />
                      <input
                        type="text"
                        value={exp.offDays}
                        onChange={(e) => updateWorkExperience(index, 'offDays', e.target.value)}
                        placeholder="Off Days"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                      />
                    </div>
                    <textarea
                      value={exp.duties}
                      onChange={(e) => updateWorkExperience(index, 'duties', e.target.value)}
                      placeholder="Duties and responsibilities"
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      value={exp.reasonForLeaving}
                      onChange={(e) => updateWorkExperience(index, 'reasonForLeaving', e.target.value)}
                      placeholder="Reason for leaving"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Medical History / Dietary Restrictions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Medical History / Dietary Restrictions
              </label>
              <p className="text-xs text-gray-500 mb-4 italic">
                Past and existing illnesses (including chronic ailments and illnesses requiring medication):
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { key: 'covid', label: 'Covid' },
                  { key: 'asthma', label: 'Asthma' },
                  { key: 'malaria', label: 'Malaria' },
                  { key: 'diabetes', label: 'Diabetes' },
                  { key: 'epilepsy', label: 'Epilepsy' },
                  { key: 'allergies', label: 'Allergies' },
                  { key: 'operations', label: 'Operations' },
                  { key: 'hypertension', label: 'Hypertension' },
                  { key: 'tuberculosis', label: 'Tuberculosis' },
                  { key: 'heart_disease', label: 'Heart Disease' },
                  { key: 'other_medical', label: 'Other Medical' },
                  { key: 'mental_illness', label: 'Mental Illness' },
                  { key: 'dietary_restrictions', label: 'Dietary Restrictions' },
                  { key: 'physical_disabilities', label: 'Physical Disabilities' }
                ].map((condition) => (
                  <label key={condition.key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={medicalConditions[condition.key as keyof typeof medicalConditions]}
                      onChange={(e) => setMedicalConditions({
                        ...medicalConditions,
                        [condition.key]: e.target.checked
                      })}
                      className="w-4 h-4 text-[#FB4D66] border-gray-300 rounded focus:ring-[#FB4D66]"
                    />
                    <span className="text-sm text-gray-700">{condition.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Food Handling Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Food Handling Preferences
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={foodHandling.no_beef}
                    onChange={(e) => setFoodHandling({
                      ...foodHandling,
                      no_beef: e.target.checked
                    })}
                    className="w-4 h-4 text-[#FB4D66] border-gray-300 rounded focus:ring-[#FB4D66]"
                  />
                  <span className="text-sm text-gray-700">No Beef</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={foodHandling.no_pork}
                    onChange={(e) => setFoodHandling({
                      ...foodHandling,
                      no_pork: e.target.checked
                    })}
                    className="w-4 h-4 text-[#FB4D66] border-gray-300 rounded focus:ring-[#FB4D66]"
                  />
                  <span className="text-sm text-gray-700">No Pork</span>
                </label>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Other restrictions:</label>
                  <input
                    type="text"
                    value={foodHandling.other}
                    onChange={(e) => setFoodHandling({
                      ...foodHandling,
                      other: e.target.value
                    })}
                    placeholder="Specify other food handling restrictions"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB4D66] focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Recommended For */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Recommended For (Skills)
              </label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-lg border-2 transition ${
                      recommendedFor.includes(skill)
                        ? 'bg-[#FB4D66] text-white border-[#FB4D66]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#FB4D66]'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/admin/dashboard"
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-center font-semibold"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-[#FB4D66] text-white rounded-lg hover:bg-[#d43940] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Worker Biodata'}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
