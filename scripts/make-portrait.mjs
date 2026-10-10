// Regenerates every image derived from the original photo. Run after changing the
// photo or the crops:  node scripts/make-portrait.mjs
//
//   src/assets/portrait.jpg       page avatar: square crop around the head
//   public/favicon.ico            browser tab icon (16, 32 and 48 px)
//   public/icon.png               192 px icon for browsers that prefer PNG
//   public/apple-touch-icon.png   180 px home-screen icon for iOS
//
// Everything is mirrored so the gaze points right, and the icons are greyscale to
// match the page (the avatar is greyscaled in CSS instead, so it stays reversible).
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const SOURCE = 'src/assets/source/cris.jpeg';
// Squares in pixels of the original (896 × 1195).
const AVATAR_CROP = { left: 218, top: 118, width: 540, height: 540 };
// Tighter than the avatar: at 16 px only the face can still be read.
const ICON_CROP = { left: 268, top: 138, width: 440, height: 440 };

await sharp(SOURCE).extract(AVATAR_CROP).flop().jpeg({ quality: 90, mozjpeg: true }).toFile('src/assets/portrait.jpg');

const face = () => sharp(SOURCE).extract(ICON_CROP).flop().grayscale();

/** A round icon on a transparent ground, the way the avatar appears on the page. */
function round(size) {
	const mask = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`);
	return face()
		.resize(size, size)
		.composite([{ input: mask, blend: 'dest-in' }])
		.png()
		.toBuffer();
}

/** An .ico is a small directory followed by ordinary PNG files. */
function ico(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(images.length, 4);
	let offset = 6 + images.length * 16;
	const entries = images.map(({ size, data }) => {
		const entry = Buffer.alloc(16);
		entry.writeUInt8(size, 0);
		entry.writeUInt8(size, 1);
		entry.writeUInt16LE(1, 4); // colour planes
		entry.writeUInt16LE(32, 6); // bits per pixel
		entry.writeUInt32LE(data.length, 8);
		entry.writeUInt32LE(offset, 12);
		offset += data.length;
		return entry;
	});
	return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

const sizes = [16, 32, 48];
await writeFile('public/favicon.ico', ico(await Promise.all(sizes.map(async (size) => ({ size, data: await round(size) })))));
await writeFile('public/icon.png', await round(192));
// iOS applies its own rounded mask and paints transparency black, so this one stays square.
await face().resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('portrait.jpg, favicon.ico, icon.png, apple-touch-icon.png written');
