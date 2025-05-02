
import React from 'react';
import { Grid2x2, Image, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGrid from './ImageGrid';

interface InstagramTabsProps {
  images: string[];
  onReorder: (newOrder: string[]) => void;
}

const InstagramTabs: React.FC<InstagramTabsProps> = ({ images, onReorder }) => {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className="grid grid-cols-3 border-t">
        <TabsTrigger value="grid" className="flex justify-center py-3">
          <Grid2x2 size={20} />
        </TabsTrigger>
        <TabsTrigger value="reels" className="flex justify-center py-3">
          <Video size={20} />
        </TabsTrigger>
        <TabsTrigger value="tagged" className="flex justify-center py-3">
          <Image size={20} />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="m-0 p-0">
        <ImageGrid images={images} onReorder={onReorder} />
      </TabsContent>
      <TabsContent value="reels" className="m-0 p-0">
        <div className="flex justify-center items-center h-48 text-gray-500">
          Reels will appear here
        </div>
      </TabsContent>
      <TabsContent value="tagged" className="m-0 p-0">
        <div className="flex justify-center items-center h-48 text-gray-500">
          Tagged photos will appear here
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default InstagramTabs;
