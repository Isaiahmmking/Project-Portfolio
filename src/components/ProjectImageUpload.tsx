import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Copy, Image as ImageIcon } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { useToast } from '@/hooks/use-toast';

interface UploadedImage {
  id: string;
  name: string;
  path: string;
  uploadedAt: Date;
}

const ProjectImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const { toast } = useToast();

  const handleImageSelect = (file: File, filename: string) => {
    const newImage: UploadedImage = {
      id: Date.now().toString(),
      name: file.name,
      path: `/assets/images/${filename}`,
      uploadedAt: new Date()
    };

    setUploadedImages(prev => [...prev, newImage]);
    
    toast({
      title: "Image uploaded!",
      description: `${file.name} is ready to use in your projects`,
    });
  };

  const copyImagePath = (path: string) => {
    navigator.clipboard.writeText(`import image from '@${path}';`);
    toast({
      title: "Import code copied!",
      description: "Paste this in your projects.ts file",
    });
  };

  const getImportInstructions = () => `
// 1. Add this import to src/data/projects.ts:
import myImage from '@/assets/images/projects/your-image-name.jpg';

// 2. Use it in your project object:
{
  title: "Your Project",
  image: myImage,
  // ... other properties
}
  `;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Project Image Upload</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload Image</TabsTrigger>
            <TabsTrigger value="recent">Recent Uploads</TabsTrigger>
            <TabsTrigger value="instructions">How to Use</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4">
              Upload images for your projects. They'll be automatically organized in the projects folder.
            </div>
            <ImageUpload
              onImageSelect={handleImageSelect}
              options={{ folder: 'projects' }}
            />
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            {uploadedImages.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No images uploaded yet</p>
                <p className="text-sm">Upload some images to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Recent Uploads ({uploadedImages.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uploadedImages.map(image => (
                    <Card key={image.id} className="border border-border">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="text-sm font-medium truncate">
                            {image.name}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Uploaded {image.uploadedAt.toLocaleDateString()}
                          </Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            onClick={() => copyImagePath(image.path)}
                          >
                            <Copy className="h-3 w-3 mr-2" />
                            Copy Import Code
                          </Button>
                          <code className="text-xs bg-muted p-2 rounded block overflow-x-auto">
                            {image.path}
                          </code>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="instructions" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">How to use uploaded images in your projects:</h3>
              
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap text-muted-foreground">
                  {getImportInstructions()}
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Tips:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Images are automatically optimized and compressed</li>
                  <li>• Use descriptive filenames (e.g., "circuit-diagram.jpg")</li>
                  <li>• Images are stored in src/assets/images/projects/</li>
                  <li>• Click "Copy Import Code" to get the exact import statement</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProjectImageUpload;
