const fs = require('fs');
const path = require('path');

// Files and directories to process
const filesToProcess = [
    'app/service/ServiceData.ts',
    'components/home/StoryHero.tsx',
    'components/home/AboutSection.tsx',
    'components/home/ProjectSlider.tsx',
    'components/home/RandomInstruments.tsx',
    'components/home/ClientTicker.tsx',
    'components/home/ClientMarquee.tsx',
    'components/home/ImageSlider.tsx',
    'components/instruments/InstrumentHero.tsx',
    'components/instruments/InstrumentList.tsx',
    'components/instruments/InstrumentTabs.tsx',
    'components/about/AboutHero.tsx',
];

const stats = {
    filesProcessed: 0,
    replacements: 0,
    errors: 0
};

/**
 * Update image references in a file
 */
function updateImageReferences(filePath) {
    try {
        const fullPath = path.join(__dirname, '..', filePath);

        if (!fs.existsSync(fullPath)) {
            console.log(`⊘ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;

        // Replace image extensions
        // Pattern 1: "/path/image.png" or '/path/image.png'
        content = content.replace(/(['"])(\/[^'"]*)\.(png|jpg|jpeg)(['"])/gi, (match, quote1, path, ext, quote2) => {
            stats.replacements++;
            return `${quote1}${path}.webp${quote2}`;
        });

        // Only write if changes were made
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            const count = (originalContent.match(/\.(png|jpg|jpeg)(['"])/gi) || []).length;
            console.log(`✓ Updated ${filePath} (${count} references)`);
            stats.filesProcessed++;
        } else {
            console.log(`⊘ No changes needed: ${filePath}`);
        }

    } catch (error) {
        stats.errors++;
        console.error(`✗ Error processing ${filePath}:`, error.message);
    }
}

/**
 * Main function
 */
function main() {
    console.log('🔄 Updating image references to WebP format...\n');

    filesToProcess.forEach(file => {
        updateImageReferences(file);
    });

    console.log('\n' + '═'.repeat(60));
    console.log('📊 UPDATE SUMMARY');
    console.log('═'.repeat(60));
    console.log(`Files processed: ${stats.filesProcessed}`);
    console.log(`Total replacements: ${stats.replacements}`);
    console.log(`Errors: ${stats.errors}`);
    console.log('═'.repeat(60));

    if (stats.filesProcessed > 0) {
        console.log('\n✅ Image references updated successfully!');
        console.log('\n💡 Next steps:');
        console.log('   1. Review the changes');
        console.log('   2. Test the website locally');
        console.log('   3. Build and deploy');
    }
}

// Run the script
main();
