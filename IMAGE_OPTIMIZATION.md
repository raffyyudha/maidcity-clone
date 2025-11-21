# Image Optimization Guide

## 🎯 Overview

Proyek ini menggunakan AVIF format untuk kompresi gambar terbaik (90% lebih kecil dari JPG).

## 📁 Jenis Gambar

### 1. Static Images (Logo, Hero, Icons)
**Location:** `/public` folder
**Format:** PNG/JPG (original)
**Optimization:** Auto-converted oleh Next.js saat display

**Cara Kerja:**
```tsx
// File: /public/logo.png (masih PNG)
<Image src="/logo.png" width={150} height={60} />
// Browser menerima: AVIF (jika support) atau WebP (fallback)
```

**Kenapa tidak convert manual?**
- Next.js sudah auto-convert saat serve
- Lebih mudah maintain
- Source file tetap high quality
- Browser dapat format terbaik otomatis

### 2. User Uploaded Images (Worker Photos)
**Location:** Supabase Storage
**Format:** AVIF (auto-converted)
**Optimization:** Manual convert sebelum upload

**Cara Kerja:**
```typescript
// Admin upload photo
const file = event.target.files[0]; // JPG 500KB
const avifBlob = await optimizeImageToAVIF(file); // AVIF 50KB
await supabase.storage.upload('photo.avif', avifBlob);
```

## 🚀 Next.js Auto-Optimization

### Configuration (next.config.js)
```javascript
images: {
  formats: ['image/avif', 'image/webp'], // Priority order
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### How It Works
1. Browser requests image
2. Next.js checks browser support
3. Serves AVIF if supported (Chrome, Firefox, Safari 16+)
4. Falls back to WebP (older browsers)
5. Falls back to original (very old browsers)

### Example
```tsx
// Source: logo.png (200KB)
<Image src="/logo.png" width={150} height={60} />

// Browser receives:
// - Chrome 85+: logo.avif (20KB) ✅
// - Safari 15: logo.webp (40KB) ✅
// - IE 11: logo.png (200KB) ⚠️
```

## 📊 Compression Comparison

| Format | Size | Quality | Browser Support |
|--------|------|---------|-----------------|
| Original JPG | 500KB | 100% | 100% |
| WebP | 100KB | 95% | 95% |
| **AVIF** | **50KB** | **95%** | **90%** ⭐ |

## 🔧 Implementation

### For Admin Upload (Worker Photos)

```typescript
import { optimizeImageToAVIF, getAVIFFileName } from '@/lib/imageOptimizer';

const handlePhotoUpload = async (file: File) => {
  try {
    // 1. Optimize to AVIF
    const avifBlob = await optimizeImageToAVIF(file, {
      maxWidth: 1200,
      maxHeight: 1600,
      quality: 0.80
    });
    
    // 2. Get AVIF filename
    const fileName = getAVIFFileName(file.name);
    // photo.jpg → photo.avif
    
    // 3. Upload to Supabase
    const { data, error } = await supabase.storage
      .from('worker-photos')
      .upload(fileName, avifBlob);
    
    console.log(`Optimized: ${file.size} → ${avifBlob.size} bytes`);
    // Original: 500000 → 50000 bytes (90% smaller!)
    
  } catch (error) {
    console.error('Optimization failed:', error);
  }
};
```

### For Display (All Images)

```tsx
import Image from 'next/image';

// Static images (auto-optimized)
<Image 
  src="/logo.png"
  width={150}
  height={60}
  alt="Logo"
/>

// Supabase images (already AVIF)
<Image 
  src={worker.photo_url}
  fill
  className="object-cover"
  alt={worker.name}
/>
```

## ⚙️ Settings

### AVIF Optimization
- **Max Width:** 1200px
- **Max Height:** 1600px
- **Quality:** 80%
- **Smoothing:** High
- **Aspect Ratio:** Preserved

### Why These Settings?
- 1200x1600: Perfect for portrait photos
- 80% quality: Excellent visual, great compression
- High smoothing: No pixelation
- Preserved ratio: No distortion

## 🎨 Quality Examples

### 80% Quality AVIF
- File size: ~50KB
- Visual quality: Excellent
- Indistinguishable from original
- Perfect for web

### 90% Quality AVIF
- File size: ~80KB
- Visual quality: Near-perfect
- Slightly larger
- Overkill for web

### 70% Quality AVIF
- File size: ~30KB
- Visual quality: Good
- Slight artifacts visible
- Too aggressive

## 📱 Browser Support

### AVIF Support (90% of users)
- ✅ Chrome 85+ (Sep 2020)
- ✅ Edge 121+ (Jan 2024)
- ✅ Firefox 93+ (Oct 2021)
- ✅ Safari 16+ (Sep 2022)
- ✅ Opera 71+ (Sep 2020)

### Fallback Chain
1. Try AVIF (best)
2. Try WebP (good)
3. Use original (safe)

## 🔍 Verification

### Check Image Format
```bash
# In browser DevTools Network tab
# Look for Content-Type header:
Content-Type: image/avif  ✅ Best
Content-Type: image/webp  ✅ Good
Content-Type: image/png   ⚠️ Fallback
```

### Check File Size
```bash
# Original
logo.png: 200KB

# After Next.js optimization
logo.avif: 20KB (90% smaller!)
```

## 💡 Best Practices

### DO ✅
- Use Next.js Image component
- Let Next.js auto-optimize static images
- Convert uploaded images to AVIF
- Set appropriate quality (80%)
- Use lazy loading (default)

### DON'T ❌
- Don't use `<img>` tag directly
- Don't set `unoptimized={true}`
- Don't use 100% quality
- Don't skip optimization
- Don't forget alt text

## 🚨 Troubleshooting

### Images not optimizing?
1. Check `next.config.js` has `unoptimized: false`
2. Verify using Next.js Image component
3. Check browser DevTools Network tab
4. Clear Next.js cache: `rm -rf .next`

### AVIF not working?
1. Check browser support (Chrome 85+)
2. Verify `formats: ['image/avif']` in config
3. Test in different browsers
4. Check server logs

### File size still large?
1. Verify quality setting (should be 0.80)
2. Check max dimensions (1200x1600)
3. Ensure using optimizeImageToAVIF()
4. Test with different source images

## 📈 Performance Impact

### Before Optimization
- Total images: 10 photos
- Average size: 500KB each
- Total: 5MB
- Load time: 15 seconds (3G)

### After Optimization
- Total images: 10 photos
- Average size: 50KB each (AVIF)
- Total: 500KB
- Load time: 1.5 seconds (3G)

**Result: 10x faster! 🚀**

## 🎯 Summary

1. **Static images** (logo, hero): Keep as PNG/JPG, Next.js auto-converts
2. **Uploaded images** (workers): Convert to AVIF before upload
3. **Display**: Always use Next.js Image component
4. **Format priority**: AVIF → WebP → Original
5. **Quality**: 80% for perfect balance

**Result: 90% smaller files, excellent quality, fast loading! 🎉**
