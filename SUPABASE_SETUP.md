# Supabase Setup Instructions

## Step 1: Create Database Table

1. Go to your Supabase Dashboard: https://app.supabase.com/project/cevrdgbrzjvbfmkkukpj
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the entire content of `supabase-schema.sql` file
5. Click "Run" to execute the SQL

This will create:
- `biodata_workers` table with all necessary columns
- Indexes for better query performance
- Row Level Security (RLS) policies
- Storage bucket for worker photos
- Storage policies for file upload/access

## Step 2: Create Admin User

1. Go to "Authentication" > "Users" in Supabase Dashboard
2. Click "Add user" > "Create new user"
3. Enter admin email and password:
   - Email: `admin@sweethome.com` (or your preferred email)
   - Password: Create a strong password
4. Click "Create user"

## Step 3: Test the System

### Login to Admin Dashboard
1. Start your Next.js development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Login with the admin credentials you created
4. You should be redirected to `/admin/dashboard`

### Add a Worker Biodata
1. Click "Add New Worker" button
2. Fill in all the required fields:
   - Upload worker photo
   - Enter name, nationality, age, etc.
   - Add languages with proficiency levels
   - Add work experience
   - Select recommended skills
3. Click "Save Worker Biodata"
4. The worker should appear in the dashboard list

### View Public Pages
1. Navigate to: `http://localhost:3000/biodatas`
2. You should see the worker you just added
3. Click on the worker card to view details
4. Only Name, Nationality, and Language should be visible to public

## Database Schema

### biodata_workers Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| slug | TEXT | URL-friendly identifier (unique) |
| name | TEXT | Worker's full name |
| photo_url | TEXT | URL to worker's photo in storage |
| nationality | TEXT | Worker's nationality |
| age | INTEGER | Worker's age |
| religion | TEXT | Worker's religion |
| marital_status | TEXT | Single/Married/Divorced/Widowed |
| number_of_children | INTEGER | Number of children |
| education | TEXT | Education level |
| languages | JSONB | Array of {language, proficiency} |
| height | INTEGER | Height in cm |
| weight | INTEGER | Weight in kg |
| work_experience | JSONB | Array of work history objects |
| recommended_for | TEXT[] | Array of skills/services |
| created_at | TIMESTAMP | Auto-generated creation time |
| updated_at | TIMESTAMP | Auto-generated update time |

### Storage Bucket

- **Bucket name**: `worker-photos`
- **Public access**: Yes (for displaying images)
- **Allowed file types**: Images (JPG, PNG, etc.)

## Security

### Row Level Security (RLS)
- **Public users**: Can only READ (SELECT) worker data
- **Authenticated users**: Can CREATE, UPDATE, and DELETE worker data
- This ensures only logged-in admins can modify data

### Storage Policies
- **Public users**: Can only READ (view) photos
- **Authenticated users**: Can UPLOAD, UPDATE, and DELETE photos

## Troubleshooting

### "relation biodata_workers does not exist"
- Make sure you ran the SQL schema file in Supabase SQL Editor
- Check if the table was created in "Table Editor"

### "Permission denied for table biodata_workers"
- Check if RLS policies are enabled
- Make sure you're logged in when trying to add/edit workers

### Photos not uploading
- Check if `worker-photos` bucket exists in Storage
- Verify storage policies are set correctly
- Check browser console for error messages

### Cannot login to admin
- Make sure you created an admin user in Supabase Authentication
- Check if email and password are correct
- Check browser console for error messages

## Next Steps

1. **Customize the form**: Add or remove fields as needed
2. **Add more features**: 
   - Search and filter workers
   - Bulk import workers
   - Export worker data
   - Email notifications
3. **Improve security**: 
   - Add role-based access control
   - Implement password reset
   - Add two-factor authentication
4. **Deploy**: Deploy to Vercel or your preferred hosting platform

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- Contact: admin@sweethome.com
