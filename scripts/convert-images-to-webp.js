const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const BACKUP_DIR = path.join(PUBLIC_DIR, 'backup-images');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const QUALITY = 85; // WebP quality (85 is a good balance)

// Directories to process
const DIRECTORIES_TO_PROCESS = [
  'services',
  'hero-section',
  'projects',
  'instrument',
  'about',
  'slider',
  'clients'
];

// Track statistics
const stats = {
  totalFiles: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  newSize: 0
};

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (error) {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Backup original file
 */
function backupFile(filePath, relativePath) {
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupDir = path.dirname(backupPath);
  
  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Copy file to backup
  fs.copyFileSync(filePath, backupPath);
  console.log(`  ✓ Backed up: ${relativePath}`);
}

/**
 * Convert image to WebP
 */
async function convertToWebP(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if not an image we want to convert
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }
  
  // Skip if already WebP
  if (ext === '.webp') {
    stats.skipped++;
    return;
  }
  
  stats.totalFiles++;
  
  const originalSize = getFileSize(filePath);
  stats.originalSize += originalSize;
  
  // Generate WebP filename
  const webpPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    console.log(`  ⊘ Skipped (WebP exists): ${relativePath}`);
    stats.skipped++;
    return;
  }
  
  try {
    console.log(`  → Converting: ${relativePath}`);
    console.log(`    Original size: ${formatBytes(originalSize)}`);
    
    // Backup original file
    backupFile(filePath, relativePath);
    
    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);
    
    const newSize = getFileSize(webpPath);
    stats.newSize += newSize;
    stats.converted++;
    
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`    WebP size: ${formatBytes(newSize)} (${savings}% smaller)`);
    console.log(`  ✓ Converted: ${path.basename(webpPath)}\n`);
    
    // Delete original file after successful conversion
    fs.unlinkSync(filePath);
    
  } catch (error) {
    stats.errors++;
    console.error(`  ✗ Error converting ${relativePath}:`, error.message);
  }
}

/**
 * Process directory recursively
 */
async function processDirectory(dirPath, baseDir = dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (entry.isDirectory()) {
      // Skip backup directory
      if (entry.name === 'backup-images') {
        continue;
      }
      await processDirectory(fullPath, baseDir);
    } else if (entry.isFile()) {
      await convertToWebP(fullPath, relativePath);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting image conversion to WebP...\n');
  console.log(`📁 Public directory: ${PUBLIC_DIR}`);
  console.log(`💾 Backup directory: ${BACKUP_DIR}\n`);
  
  // Ensure backup directory exists
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  
  const startTime = Date.now();
  
  // Process each directory
  for (const dir of DIRECTORIES_TO_PROCESS) {
    const dirPath = path.join(PUBLIC_DIR, dir);
    
    if (!fs.existsSync(dirPath)) {
      console.log(`⊘ Directory not found: ${dir}\n`);
      continue;
    }
    
    console.log(`\n📂 Processing: ${dir}/`);
    console.log('─'.repeat(60));
    await processDirectory(dirPath, PUBLIC_DIR);
  }
  
  // Print summary
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log('\n' + '═'.repeat(60));
  console.log('📊 CONVERSION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`Total files processed: ${stats.totalFiles}`);
  console.log(`Successfully converted: ${stats.converted}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`\nOriginal total size: ${formatBytes(stats.originalSize)}`);
  console.log(`New total size: ${formatBytes(stats.newSize)}`);
  
  if (stats.originalSize > 0) {
    const totalSavings = ((stats.originalSize - stats.newSize) / stats.originalSize * 100).toFixed(1);
    const savedBytes = stats.originalSize - stats.newSize;
    console.log(`Total savings: ${formatBytes(savedBytes)} (${totalSavings}%)`);
  }
  
  console.log(`\n⏱️  Time taken: ${duration}s`);
  console.log('═'.repeat(60));
  
  if (stats.converted > 0) {
    console.log('\n✅ Conversion completed successfully!');
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Update image references in your code to use .webp extension`);
    console.log(`   2. Test the website to ensure all images load correctly`);
    console.log(`   3. Original files are backed up in: ${BACKUP_DIR}`);
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
