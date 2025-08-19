import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, Trash2, FolderOpen } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { useToast } from '@/hooks/use-toast';

interface ImageItem {
  id: string;
  name: string;
  path: string;
  folder: string;
  size: number;
  uploadedAt: Date;
}

export const ImageManager: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [activeFolder, setActiveFolder] = useState<string>('general');
  const { toast } = useToast();

  const folders = ['general', 'projects', 'profile', 'skills'];

  const handleImageSelect = (file: File, filename: string) => {
    // In a real implementation, this would upload to your server
    // For now, we'll just add it to the local state
    const newImage: ImageItem = {
      id: Date.now().toString(),
      name: file.name,
      path: `/assets/images/${filename}`,
      folder: filename.split('/')[0],
      size: file.size,
      uploadedAt: new Date()
    };

    setImages(prev => [...prev, newImage]);
  };

  const copyImagePath = (path: string) => {
    navigator.clipboard.writeText(path);
    toast({
      title: "Copied!",
      description: "Image path copied to clipboard",
    });
  };

  const deleteImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    toast({
      title: "Deleted",
      description: "Image removed from manager",
    });
  };

  const filteredImages = images.filter(img => img.folder === activeFolder);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FolderOpen className="h-5 w-5" />
            <span>Image Manager</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeFolder} onValueChange={setActiveFolder}>
            <TabsList className="grid w-full grid-cols-4">
              {folders.map(folder => (
                <TabsTrigger key={folder} value={folder} className="capitalize">
                  {folder}
                </TabsTrigger>
              ))}
            </TabsList>

            {folders.map(folder => (
              <TabsContent key={folder} value={folder} className="space-y-4">
                <ImageUpload
                  onImageSelect={handleImageSelect}
                  options={{ folder: folder as any }}
                />

                {filteredImages.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Images in {folder} ({filteredImages.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredImages.map(image => (
                        <Card key={image.id}>
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="text-sm font-medium truncate">
                                {image.name}
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {(image.size / 1024 / 1024).toFixed(2)} MB
                              </Badge>
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => copyImagePath(image.path)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => deleteImage(image.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                              <code className="text-xs bg-muted p-2 rounded block">
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
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageManager;