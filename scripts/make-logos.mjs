// Regenerates the company logos shown in the Experience section from the files
// the companies publish. Run with:  node scripts/make-logos.mjs
//
// Both end up as 160 px squares (shown at 40 px, so sharp on any screen) that the
// page clips to a circle.
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const SIZE = 160;

// SONDA: already a square mark, it only needs resizing.
await sharp('src/assets/source/sonda-logo.jpg').resize(SIZE, SIZE).png().toFile('src/assets/companies/sonda.png');

// Papyrus: the published file is a wide lockup (round icon + "Papyrus.vip" in white,
// which would vanish on a light page) stored as a PNG inside an SVG wrapper.
// Keep just the round icon.
const svg = await readFile('src/assets/source/papyrus-logo.svg', 'utf8');
const lockup = Buffer.from(svg.match(/base64,([^"]+)"/)[1], 'base64');
await sharp(lockup)
	.extract({ left: 52, top: 10, width: 480, height: 480 })
	.resize(SIZE, SIZE)
	.png()
	.toFile('src/assets/companies/papyrus.png');

console.log('companies/sonda.png, companies/papyrus.png written');
