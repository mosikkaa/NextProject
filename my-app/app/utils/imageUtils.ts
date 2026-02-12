/**
 * Compresses and resizes an image to reduce its Base64 string size.
 * @param base64Str - The original Base64 string of the image.
 * @param maxWidth - Maximum width for the resized image.
 * @param maxHeight - Maximum height for the resized image.
 * @param quality - Compression quality (0 to 1).
 * @returns A promise that resolves to the compressed Base64 string.
 */
export const compressImage = (
  base64Str: string,
  maxWidth: number = 800,
  maxHeight: number = 800,
  quality: number = 0.7
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Calculate new dimensions while maintaining aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Convert to JPEG with specified quality
      const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
      resolve(compressedBase64);
    };
    img.onerror = (error) => reject(error);
  });
};
