/**
 * Image Upload Utilities
 * Handles image upload, validation, and organization
 */

export interface ImageUploadOptions {
  maxSize?: number; // in bytes, default 5MB
  allowedTypes?: string[];
  folder?: 'projects' | 'profile' | 'skills' | 'general';
}

export const DEFAULT_UPLOAD_OPTIONS: ImageUploadOptions = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  folder: 'general'
};

/**
 * Validates an uploaded image file
 */
export const validateImage = (file: File, options: ImageUploadOptions = {}): string | null => {
  const opts = { ...DEFAULT_UPLOAD_OPTIONS, ...options };
  
  // Check file type
  if (!opts.allowedTypes?.includes(file.type)) {
    return `Invalid file type. Allowed types: ${opts.allowedTypes?.join(', ')}`;
  }
  
  // Check file size
  if (opts.maxSize && file.size > opts.maxSize) {
    const maxSizeMB = opts.maxSize / (1024 * 1024);
    return `File too large. Maximum size: ${maxSizeMB}MB`;
  }
  
  return null; // Valid
};

/**
 * Generates a unique filename for uploaded images
 */
export const generateImageFilename = (originalName: string, folder: string = 'general'): string => {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop()?.toLowerCase();
  const baseName = originalName.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  return `${folder}/${baseName}-${timestamp}-${randomId}.${extension}`;
};

/**
 * Creates a preview URL for an uploaded image
 */
export const createImagePreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Compresses an image file (basic implementation)
 */
export const compressImage = (file: File, quality: number = 0.8): Promise<File> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const { width, height } = img;
      canvas.width = width;
      canvas.height = height;
      
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const compressedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now()
          });
          resolve(compressedFile);
        } else {
          resolve(file);
        }
      }, file.type, quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};