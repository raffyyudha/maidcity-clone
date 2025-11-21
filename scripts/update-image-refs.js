/**
 * Script to update all image references from PNG/JPG to AVIF
 * Run: node scripts/update-image-refs.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SRC_DIR = path.join(__dirname, '../src');
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

// Image mappings (original -> AVIF)
const IMAGE_MAPPINGS = {
  '/logo.png': '/logo.avif',
  '/HEROIMAGE.png': '/HEROIMAGE.avif',
  '/android.png': '/android.avif',
  '/about us.png': '/about us.avif',
  '/about us2.png': '/about us2.avif',
  '/about us 3.png': '/about us 3.avif',
  '/helper.jpg': '/helper.avif',
};

// Statistics
let stats = {
  filesScanned: 0,
  filesModified: 0,
  replacements: 0,
};

/**
 * Get all files recursively
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next' && file !== 'dist') {
        getAllFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (FILE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Update image references in file
 */
function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileReplacements = 0;
  
  // Replace each image reference
  Object.entries(IMAGE_MAPPINGS).forEach(([oldPath, newPath]) => {
    // Match src="/path" or src='/path'
    const patterns = [
      new RegExp(`src="${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
      new RegExp(`src='${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        const quote = pattern.source.includes('"') ? '"' : "'";
        content = content.replace(pattern, `src=${quote}${newPath}${quote}`);
        fileReplacements += matches.length;
        modified = true;
      }
    });
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    stats.filesModified++;
    stats.replacements += fileReplacements;
    
    const relativePath = path.relative(SRC_DIR, filePath);
    console.log(`✅ Updated: ${relativePath} (${fileReplacements} replacements)`);
  }
  
  stats.filesScanned++;
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Updating image references to AVIF...\n');
  console.log(`📁 Directory: ${SRC_DIR}\n`);
  
  // Get all files
  const files = getAllFiles(SRC_DIR);
  
  if (files.length === 0) {
    console.log('❌ No files found!');
    return;
  }
  
  console.log(`📄 Found ${files.length} files\n`);
  
  // Update each file
  files.forEach(file => {
    updateImageReferences(file);
  });
  
  // Print summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 UPDATE SUMMARY');
  console.log('='.repeat(50));
  console.log(`Files scanned: ${stats.filesScanned}`);
  console.log(`✅ Files modified: ${stats.filesModified}`);
  console.log(`🔄 Total replacements: ${stats.replacements}`);
  console.log('\n✨ Done!\n');
  
  if (stats.filesModified > 0) {
    console.log('📝 Next steps:');
    console.log('1. Test website in browser');
    console.log('2. Verify images display correctly');
    console.log('3. Check DevTools Network tab for AVIF files');
    console.log('4. Commit changes if everything works\n');
  }
}

// Run
main();
