# 🔐 Admin Access Guide

## 🆕 Cara Registrasi Admin (NEW!)

### Option 1: Self Registration (Recommended)

1. **Buka halaman registrasi**
   ```
   http://localhost:3000/admin/register
   ```

2. **Isi form registrasi**
   - Email: `admin@sweethome.com` (atau email lain)
   - Password: [min 6 karakter]
   - Confirm Password: [sama dengan password]

3. **Click "Register"**
   - Akun langsung dibuat
   - Bisa langsung login
   - Email confirmation optional

4. **Login**
   - Redirect otomatis ke login page
   - Atau buka: `http://localhost:3000/admin/login`

### Option 2: Manual via Supabase (Old Way)

Lihat section "Setup Admin User Manually" di bawah.

---

## Cara Login ke Admin Dashboard

### 1. **Akses Admin Login**

Ada 2 cara untuk akses admin:

**Option A: Direct URL**
```
http://localhost:3000/admin/login
```

**Option B: Shortcut URL** (Auto redirect ke login)
```
http://localhost:3000/admin
```

### 2. **Login Credentials**

Gunakan email dan password yang sudah dibuat:

```
Email: admin@sweethome.com
Password: [password yang Anda buat]
```

### 3. **Setelah Login**

Anda akan otomatis redirect ke:
```
http://localhost:3000/admin/dashboard
```

Di dashboard, Anda bisa:
- ✅ Lihat semua workers
- ✅ Add new worker
- ✅ Delete worker
- ✅ Logout

---

## 🚀 Setup Admin User Manually (Optional)

Jika belum ada admin user, ikuti langkah ini:

### Step 1: Buka Supabase Dashboard
```
https://app.supabase.com/project/cevrdgbrzjvbfmkkukpj
```

### Step 2: Go to Authentication
```
Left Sidebar > Authentication > Users
```

### Step 3: Add User
1. Click: **"Add user"**
2. Select: **"Create new user"**
3. Fill:
   - **Email**: `admin@sweethome.com` (atau email lain)
   - **Password**: [buat password yang kuat, min 6 karakter]
   - **Auto Confirm User**: ✅ Check this
4. Click: **"Create user"**

### Step 4: Save Credentials
Simpan email & password untuk login nanti!

---

## 🔒 Security Notes

1. **Tombol LOGIN dihapus dari public pages**
   - Visitor tidak bisa lihat tombol login
   - Admin akses via URL langsung `/admin` atau `/admin/login`

2. **Protected Routes**
   - Semua route `/admin/*` protected
   - Harus login dulu untuk akses
   - Auto redirect ke login jika belum login

3. **Session Management**
   - Login session disimpan di browser
   - Logout akan clear session
   - Session persistent sampai logout

---

## 📱 Admin URLs

| URL | Description |
|-----|-------------|
| `/admin` | Redirect ke login |
| `/admin/register` | **NEW!** Registration page |
| `/admin/login` | Login page |
| `/admin/dashboard` | Dashboard (list workers) |
| `/admin/dashboard/add` | Add new worker form |

---

## ❓ Troubleshooting

### Problem: "Invalid login credentials"
**Solution**: 
- Check email & password benar
- Pastikan user sudah dibuat di Supabase
- Check "Auto Confirm User" di-check saat create user

### Problem: Redirect loop
**Solution**:
- Clear browser cache & cookies
- Try incognito/private window
- Check Supabase connection

### Problem: Can't access dashboard
**Solution**:
- Make sure you're logged in
- Check browser console for errors
- Verify Supabase credentials in `src/lib/supabase.ts`

---

## 🎯 Quick Start

```bash
# 1. Run dev server
npm run dev

# 2. Open browser
http://localhost:3000/admin

# 3. Login dengan credentials
Email: admin@sweethome.com
Password: [your-password]

# 4. Start adding workers!
```

---

## 📝 Notes

- **No public login button**: Tombol login sudah dihapus dari semua public pages
- **Admin only access**: Hanya admin yang tahu URL `/admin`
- **Secure by design**: Public users tidak bisa akses admin area
- **Easy to remember**: Cukup ketik `/admin` untuk login

**Happy Managing! 🚀**
