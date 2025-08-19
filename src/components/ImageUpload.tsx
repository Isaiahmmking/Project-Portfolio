import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { validateImage, createImagePreview, generateImageFilename, ImageUploadOptions } from '@/utils/imageUpload';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  onImageSelect: (file: File, filename: string) => void;
  options?: ImageUploadOptions;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImageSelect, 
  options = {},
  className = ''
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate the image
    const validationError = validateImage(file, options);
    if (validationError) {
      toast({
        title: "Invalid Image",
        description: validationError,
        variant: "destructive"
      });
      return;
    }

    try {
      // Create preview
      const previewUrl = await createImagePreview(file);
      setPreview(previewUrl);
      setSelectedFile(file);

      // Generate filename and notify parent
      const filename = generateImageFilename(file.name, options.folder);
      onImageSelect(file, filename);

      toast({
        title: "Image Selected",
        description: `${file.name} is ready to upload`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process image",
        variant: "destructive"
      });
    }
  }, [onImageSelect, options, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif']
    },
    multiple: false
  });

  const clearSelection = () => {
    setPreview(null);
    setSelectedFile(null);
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        {!preview ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">
              {isDragActive ? 'Drop the image here' : 'Upload an Image'}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop an image file, or click to select
            </p>
            <p className="text-xs text-muted-foreground">
              Supports JPEG, PNG, WebP, GIF (max 5MB)
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={clearSelection}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
              <span>{selectedFile?.name}</span>
              <span>({(selectedFile?.size || 0 / 1024 / 1024).toFixed(2)} MB)</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;