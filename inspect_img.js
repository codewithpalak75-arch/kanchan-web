import sharp from 'sharp';
import path from 'path';

async function inspectImg() {
  const filePath = path.resolve('src/assets/upi-qr-smarthub-card.png');
  // Upscale and enhance contrast
  const enhanced = await sharp(filePath)
    .resize(1200, null, { kernel: 'lanczos3' })
    .toFile('src/assets/smarthub_enhanced.png');
  console.log('Saved smarthub_enhanced.png');
}

inspectImg().catch(console.error);
