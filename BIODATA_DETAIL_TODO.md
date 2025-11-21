# Biodata Detail Page - TODO

## Current Status:
❌ Masih menggunakan hardcoded sample data
❌ Belum fetch dari Supabase
❌ UI belum match 100% dengan Maidcity
❌ Footer masih 3 cabang (perlu update ke single branch)

## Yang Perlu Dilakukan:

### 1. Fetch Data dari Supabase
```typescript
// Add useEffect to fetch worker by slug
useEffect(() => {
  fetchWorker();
}, [slug]);

const fetchWorker = async () => {
  const { data, error } = await supabase
    .from('biodata_workers')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (data) setWorker(data);
};
```

### 2. Update UI Layout (Match Maidcity)

**Header Section:**
- ✅ MDW/APS badge
- ✅ Ex-location badge (e.g., "Ex-Middle East")
- ✅ Action buttons (Speak to Agent, PDF, Save, Share)

**Main Info Card:**
- ✅ Photo (left side)
- ✅ Basic info table (right side):
  - Ref No
  - Name
  - Date Of Birth/Age
  - Height
  - Weight
  - Passport
  - No of Siblings
  - Marital Status
  - No of Children
  - Age of Children
  - Nationality
  - Religion
  - Education
  - Off-days
  - Basic Salary
  - Language (with star rating)
  - Special Mention

**Maid Introduction:**
- ✅ Blue box dengan disclaimer text
- ✅ Introduction paragraph

**Medical History/Dietary Restrictions:**
- ✅ Grid layout dengan X marks
- ✅ Allergies, Physical Disabilities, Dietary Restrictions
- ✅ Mental Illness, Epilepsy, Asthma
- ✅ Diabetes, Hypertension, Tuberculosis
- ✅ Heart disease, Malaria, Operations
- ✅ Covid, Other
- ✅ Food handling preferences (checkboxes)

**Skills Table:**
- ✅ Red header: "Assessment/Observation"
- ✅ Columns: Areas of Work | Willingness | Experience | Rate your skills
- ✅ Rows:
  - Care of Infant/Children (with age range)
  - Care of Elderly
  - Care of Disable
  - General Housework
  - Cooking (with dishes detail)
  - Language
  - Other skills

**Additional Information Table:**
- ✅ Red header
- ✅ Columns: Areas of Work | Willingness | Experience
- ✅ Child Care section (6 items)
- ✅ General Housework section (5 items)
- ✅ Care of pets section (2 items)

**Work Experience:**
- ✅ Employer 1, 2, 3... sections
- ✅ All fields displayed in 2-column grid

**Recommended For:**
- ✅ Checkbox list dengan checkmarks

### 3. Update Footer
- ❌ Remove 3 branches
- ✅ Add single Sweet Home branch info
- ✅ Update copyright

### 4. Visitor Restrictions
**Public visitors should only see:**
- ✅ Name
- ✅ Nationality
- ✅ Language

**All other fields should be:**
- ❌ Blurred or hidden
- ❌ Show "Login to view full details" message

## Recommendation:

Karena file biodata detail akan sangat panjang (~500+ lines), saya sarankan:

**Option 1:** Update existing file secara bertahap
- Pros: Maintain existing structure
- Cons: File akan sangat panjang

**Option 2:** Split into components
- Create: `BiodataHeader.tsx`
- Create: `BiodataBasicInfo.tsx`
- Create: `BiodataMedical.tsx`
- Create: `BiodataSkills.tsx`
- Create: `BiodataWorkExperience.tsx`
- Pros: Lebih maintainable
- Cons: Lebih banyak files

**Option 3:** Use current simplified version + enhance gradually
- Keep basic info display
- Add more sections over time
- Pros: Incremental development
- Cons: Not 100% match immediately

## Current Priority:

1. ✅ Database schema (DONE)
2. ✅ Admin form (DONE - enhanced)
3. ⚠️ Biodata detail page (NEEDS UPDATE)
4. ⚠️ Fetch from Supabase (NEEDS IMPLEMENTATION)

## Next Steps:

Saya bisa:
A. Update biodata detail page untuk fetch dari Supabase (basic version)
B. Create complete UI match dengan Maidcity (akan sangat panjang)
C. Focus ke testing & deployment dulu, UI enhancement nanti

Mana yang Anda prefer?
