import sharp from 'sharp';
import path from 'path';

async function cleanSmartHubCard() {
  const inputPath = path.resolve('src/assets/upi-qr-smarthub-card.png');
  const outputPath = path.resolve('src/assets/upi-qr-scanner-clean.png');
  const outputPathClean = path.resolve('src/assets/upi-qr-clean.png');
  const outputPathCard = path.resolve('src/assets/upi-qr-smarthub-card-clean.png');

  console.log('Processing upi-qr-smarthub-card.png for ultra-clean white & crisp finish...');

  // Step 1: Read metadata
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  // Step 2: High quality upscale, white-balancing / colour curve correction, contrast boost, and sharpening
  // Removing yellow cast: normalize + linear tone curve + selective color adjustment + unsharp mask
  const processedBuffer = await sharp(inputPath)
    .resize(metadata.width * 2, metadata.height * 2, {
      kernel: sharp.kernel.lanczos3
    })
    .modulate({
      brightness: 1.12,   // Brighten overall card
      saturation: 0.95,   // Reduce excess warm saturation
      hue: 0
    })
    .linear(1.25, -28)   // Increase contrast: deepens darks, pushes whites to pure #FFF
    .sharpen({
      sigma: 1.5,
      m1: 1.0,
      m2: 2.0,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // Save to assets
  await sharp(processedBuffer).toFile(outputPath);
  await sharp(processedBuffer).toFile(outputPathClean);
  await sharp(processedBuffer).toFile(outputPathCard);
  await sharp(processedBuffer).toFile(path.resolve('src/assets/official-upi-qr.jpg'));

  console.log('Cleaned SmartHub card successfully saved to assets!');
}

cleanSmartHubCard().catch(console.error);
