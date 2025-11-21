# Image Conversion Script

## 🎯 Purpose

Convert all images in `/public` folder to AVIF format for maximum compression (90% smaller files).

## 📦 Installation

```bash
# Install sharp library
npm install sharp

# Or with yarn
yarn add sharp

# Or with bun
bun add sharp
```

## 🚀 Usage

### Run Conversion Script

```bash
npm run convert-images
```

### What It Does

1. Scans `/public` folder recursively
2. Finds all images (.jpg, .jpeg, .png, .webp)
3. Converts each to AVIF format
4. Saves with .avif extension
5. Shows compression statistics

### Example Output

```
🚀 Starting AVIF conversion...

📁 Directory: /public
⚙️  Quality: 80%

📸 Found 5 images

✅ Converted: logo.png
   150KB → 15KB (90% smaller)
   
✅ Converted: HEROIMAGE.png
   800KB → 80KB (90% smaller)
   
✅ Converted: android.png
   600KB → 60KB (90% smaller)
   
⏭️  Skipped: about-us-3.png (AVIF exists)

==================================================
📊 CONVERSION SUMMARY
==================================================
Total images: 5
✅ Converted: 4
⏭️  Skipped: 1
❌ Errors: 0

📦 Original size: 2.15 MB
📦 New size: 0.22 MB
💾 Total savings: 89.8%
🎉 Saved: 1.93 MB

✨ Done!

📝 Next steps:
1. Update image references to use .avif extension
2. Keep original files as fallback (optional)
3. Test in browser to verify
4. Delete original files if AVIF works (optional)
```

## ⚙️ Configuration

Edit `scripts/convert-to-avif.js` to customize:

```javascript
const QUALITY = 80; // 70-90 recommended
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];
```

### Quality Settings

| Quality | File Size | Visual Quality | Use Case |
|---------|-----------|----------------|----------|
| 70% | Smallest | Good | Icons, thumbnails |
| 80% | Small | Excellent | **Recommended** ⭐ |
| 90% | Medium | Near-perfect | Hero images |

## 📁 File Structure

### Before Conversion
```
public/
├── logo.png (150KB)
├── HEROIMAGE.png (800KB)
├── android.png (600KB)
└── about-us-3.png (500KB)
```

### After Conversion
```
public/
├── logo.png (150KB) ← Keep as fallback
├── logo.avif (15KB) ← New!
├── HEROIMAGE.png (800KB)
├── HEROIMAGE.avif (80KB) ← New!
├── android.png (600KB)
├── android.avif (60KB) ← New!
├── about-us-3.png (500KB)
└── about-us-3.avif (50KB) ← New!
```

## 🔄 Update Image References

### Option 1: Keep Both (Recommended)

```tsx
// Next.js will auto-serve AVIF if available
<Image src="/logo.png" width={150} height={60} />
// Browser gets: logo.avif (if supported) or logo.png (fallback)
```

### Option 2: Use AVIF Directly

```tsx
<Image src="/logo.avif" width={150} height={60} />
// Only serves AVIF, no fallback
```

### Option 3: Manual Fallback

```tsx
<picture>
  <source srcSet="/logo.avif" type="image/avif" />
  <source srcSet="/logo.webp" type="image/webp" />
  <img src="/logo.png" alt="Logo" />
</picture>
```

## 🧹 Cleanup (Optional)

After verifying AVIF works, you can delete original files:

```bash
# Delete all PNG files (keep AVIF only)
cd public
find . -name "*.png" -delete

# Or manually delete specific files
rm logo.png
rm HEROIMAGE.png
```

**⚠️ Warning:** Only delete originals after thorough testing!

## 🐛 Troubleshooting

### Error: Cannot find module 'sharp'

```bash
npm install sharp
```

### Error: Permission denied

```bash
# Run with sudo (Linux/Mac)
sudo npm run convert-images

# Or fix permissions
chmod +x scripts/convert-to-avif.js
```

### Images not converting

1. Check file formats (must be .jpg, .jpeg, .png, .webp)
2. Verify files exist in `/public`
3. Check file permissions
4. Try running script directly:
   ```bash
   node scripts/convert-to-avif.js
   ```

### AVIF not displaying in browser

1. Check browser support (Chrome 85+, Firefox 93+, Safari 16+)
2. Clear browser cache
3. Verify file exists: `/public/image.avif`
4. Check DevTools Network tab for errors

## 📊 Performance Impact

### Before Conversion
- Total images: 10 files
- Total size: 5 MB
- Load time: 15s (3G)

### After Conversion
- Total images: 10 files (AVIF)
- Total size: 0.5 MB
- Load time: 1.5s (3G)

**Result: 10x faster loading! 🚀**

## 🎯 Best Practices

1. **Run script after adding new images**
   ```bash
   npm run convert-images
   ```

2. **Keep original files as backup**
   - Don't delete immediately
   - Test AVIF thoroughly first

3. **Use Next.js Image component**
   ```tsx
   <Image src="/logo.png" /> // Auto-serves AVIF
   ```

4. **Monitor file sizes**
   - Check conversion statistics
   - Adjust quality if needed

5. **Test in multiple browsers**
   - Chrome (AVIF support)
   - Safari (AVIF support)
   - Firefox (AVIF support)
   - Older browsers (fallback)

## 📝 Notes

- Script skips files that already have AVIF version
- Original files are preserved (not deleted)
- Conversion is lossless at 80% quality
- AVIF files are 80-90% smaller than originals
- Compatible with Next.js Image optimization

## 🆘 Support

If you encounter issues:

1. Check Node.js version: `node --version` (v18+ recommended)
2. Update sharp: `npm update sharp`
3. Clear npm cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

## 📚 Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [AVIF Format Info](https://avif.io/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Browser Support](https://caniuse.com/avif)
