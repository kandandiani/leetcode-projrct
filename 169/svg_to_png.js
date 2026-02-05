const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '169_recursion_tree.svg');
const outDir = path.resolve(__dirname, '..', 'images');
const outPath = path.join(outDir, '169_recursion_tree.png');

try {
  fs.mkdirSync(outDir, { recursive: true });
} catch (e) {}

sharp(svgPath)
  .png({ quality: 100 })
  .toFile(outPath)
  .then(() => console.log('Saved:', outPath))
  .catch((err) => {
    console.error('Conversion error:', err);
    process.exit(1);
  });
