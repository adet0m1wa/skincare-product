const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS = path.join(__dirname, '..', 'assets');
const THRESHOLD = 500 * 1024;
const MAX_WIDTH = 1200;
const QUALITY = 85;

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

(async () => {
  const files = walk(ASSETS);
  const over = files.filter(f => fs.statSync(f).size > THRESHOLD);
  console.log(`Scanning ${files.length} raster files in assets/, ${over.length} over 500KB.\n`);

  let savedTotal = 0;
  const rows = [];

  for (const file of over) {
    const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const meta = await sharp(file).metadata();
    const needsResize = meta.width > MAX_WIDTH;

    let pipeline = sharp(file);
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }
    await pipeline.webp({ quality: QUALITY }).toFile(out);

    const origBytes = fs.statSync(file).size;
    const newBytes = fs.statSync(out).size;
    savedTotal += origBytes - newBytes;

    rows.push({
      file: path.relative(path.join(__dirname, '..'), file),
      fromKB: Math.round(origBytes / 1024),
      toKB: Math.round(newBytes / 1024),
      origW: meta.width,
      resized: needsResize,
      ratio: Math.round((1 - newBytes / origBytes) * 100),
    });
  }

  rows.sort((a, b) => b.fromKB - a.fromKB);
  for (const r of rows) {
    const badge = r.resized ? `${r.origW}→1200w` : `${r.origW}w kept`;
    console.log(
      `${r.file.padEnd(50)} ${String(r.fromKB).padStart(5)}KB → ${String(r.toKB).padStart(4)}KB  -${String(r.ratio).padStart(2)}%  ${badge}`
    );
  }

  console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB across ${rows.length} files.`);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
