import jsQR from 'jsqr';
import sharp from 'sharp';
import path from 'path';

async function decodeQR() {
  const filePath = path.resolve('src/assets/upi-qr-smarthub-card.png');
  const metadata = await sharp(filePath).metadata();
  console.log('Image metadata:', metadata);

  // Convert to 4-channel RGBA
  const { data, info } = await sharp(filePath)
    .toColorspace('srgb')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const clamped = new Uint8ClampedArray(data);
  const code = jsQR(clamped, info.width, info.height);
  if (code) {
    console.log('FOUND QR CODE!');
    console.log('Decoded data:', code.data);
    return;
  }

  // Try cropping different regions (top, center, etc.)
  for (let top = 0; top < info.height - 200; top += 100) {
    for (let left = 0; left < info.width - 200; left += 100) {
      const h = Math.min(600, info.height - top);
      const w = Math.min(600, info.width - left);
      const { data: cropData, info: cropInfo } = await sharp(filePath)
        .extract({ left, top, width: w, height: h })
        .toColorspace('srgb')
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
      const c = jsQR(new Uint8ClampedArray(cropData), cropInfo.width, cropInfo.height);
      if (c) {
        console.log(`FOUND QR at crop (${left}, ${top}):`, c.data);
        return;
      }
    }
  }
  console.log('Could not detect QR code in any region.');
}

decodeQR().catch(console.error);
