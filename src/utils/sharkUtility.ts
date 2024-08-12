import sharp from 'sharp';

export async function resizeImage(imgpath: string, resizedPath: string, width: number, height: number) {
  await sharp(imgpath)
    .resize(width, height)
    .toFile(resizedPath);
}
