/**
 * Image optimization utilities for converting and compressing images to WebP
 */

export interface ImageOptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
}

/**
 * Convert and compress image to AVIF format (best compression)
 * @param file - The image file to optimize
 * @param options - Optimization options
 * @returns Promise<Blob> - Optimized AVIF image blob
 */
export async function optimizeImageToAVIF(
  file: File,
  options: ImageOptimizationOptions = {}
): Promise<Blob> {
  const {
    maxWidth = 1200,
    maxHeight = 1600,
    quality = 0.80, // 80% quality for AVIF (better compression)
  } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions while maintaining aspect ratio
        let width = img.width;
        let height = img.height;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        // Create canvas for image processing
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        
        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to AVIF blob (best compression)
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to create AVIF blob'));
            }
          },
          'image/avif',
          quality
        );
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Get optimized file name with .avif extension
 * @param originalName - Original file name
 * @returns string - New file name with .avif extension
 */
export function getAVIFFileName(originalName: string): string {
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  return `${nameWithoutExt}.avif`;
}

/**
 * Validate if file is an image
 * @param file - File to validate
 * @returns boolean - True if file is an image
 */
export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/');
}

/**
 * Get file size in KB
 * @param blob - Blob to measure
 * @returns number - Size in KB
 */
export function getFileSizeKB(blob: Blob): number {
  return Math.round(blob.size / 1024);
}
