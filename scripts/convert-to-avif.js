/**
 * Script to convert all images in /public to AVIF format
 * Run: node scripts/convert-to-avif.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 80; // 80% quality for good balance
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Statistics
let stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  newSize: 0
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Convert image to AVIF
 */
async function convertToAVIF(inputPath) {
  try {
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, '.avif');
    
    // Skip if AVIF already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipped: ${path.basename(inputPath)} (AVIF exists)`);
      stats.skipped++;
      return;
    }
    
    // Get original file size
    const originalSize = fs.statSync(inputPath).size;
    stats.originalSize += originalSize;
    
    // Convert to AVIF
    await sharp(inputPath)
      .avif({
        quality: QUALITY,
        effort: 6, // 0-9, higher = better compression but slower
        chromaSubsampling: '4:2:0'
      })
      .toFile(outputPath);
    
    // Get new file size
    const newSize = fs.statSync(outputPath).size;
    stats.newSize += newSize;
    
    // Calculate savings
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    const originalKB = (originalSize / 1024).toFixed(1);
    const newKB = (newSize / 1024).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)}`);
    console.log(`   ${originalKB}KB → ${newKB}KB (${savings}% smaller)`);
    
    stats.converted++;
    
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(inputPath)}:`, error.message);
    stats.errors++;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting AVIF conversion...\n');
  console.log(`📁 Directory: ${PUBLIC_DIR}`);
  console.log(`⚙️  Quality: ${QUALITY}%\n`);
  
  // Get all image files
  const imageFiles = getImageFiles(PUBLIC_DIR);
  stats.total = imageFiles.length;
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found!');
    return;
  }
  
  console.log(`📸 Found ${imageFiles.length} images\n`);
  
  // Convert each image
  for (const imagePath of imageFiles) {
    await convertToAVIF(imagePath);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 CONVERSION SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total images: ${stats.total}`);
  console.log(`✅ Converted: ${stats.converted}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors}`);
  console.log('');
  
  if (stats.converted > 0) {
    const totalOriginalMB = (stats.originalSize / 1024 / 1024).toFixed(2);
    const totalNewMB = (stats.newSize / 1024 / 1024).toFixed(2);
    const totalSavings = ((stats.originalSize - stats.newSize) / stats.originalSize * 100).toFixed(1);
    
    console.log(`📦 Original size: ${totalOriginalMB} MB`);
    console.log(`📦 New size: ${totalNewMB} MB`);
    console.log(`💾 Total savings: ${totalSavings}%`);
    console.log(`🎉 Saved: ${(totalOriginalMB - totalNewMB).toFixed(2)} MB`);
  }
  
  console.log('\n✨ Done!\n');
  
  // Instructions
  console.log('📝 Next steps:');
  console.log('1. Update image references to use .avif extension');
  console.log('2. Keep original files as fallback (optional)');
  console.log('3. Test in browser to verify');
  console.log('4. Delete original files if AVIF works (optional)\n');
}

// Run
main().catch(console.error);
