
import React from 'react';
import { Grid2x2, Image, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGrid from './ImageGrid';
import { useTheme } from 'next-themes';

interface InstagramTabsProps {
  images: string[];
  onReorder: (newOrder: string[]) => void;
}

const InstagramTabs: React.FC<InstagramTabsProps> = ({ images, onReorder }) => {
  const { theme } = useTheme();
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className={`grid grid-cols-3 border-t ${borderColor} ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
        <TabsTrigger value="grid" className="flex justify-center py-3 data-[state=active]:border-t-2 data-[state=active]:border-t-black dark:data-[state=active]:border-t-white rounded-none">
          <Grid2x2 size={24} />
        </TabsTrigger>
        <TabsTrigger value="reels" className="flex justify-center py-3 data-[state=active]:border-t-2 data-[state=active]:border-t-black dark:data-[state=active]:border-t-white rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12c0 3.5 2.5 6.5 6 7.25 3.5.75 7-.5 9-3.5s1.5-7-.5-9.5-5.5-3.5-9-2.75c-3.5.75-6 3.75-6 7.25Z"></path>
            <circle cx="12" cy="12" r="1"></circle>
          </svg>
        </TabsTrigger>
        <TabsTrigger value="tagged" className="flex justify-center py-3 data-[state=active]:border-t-2 data-[state=active]:border-t-black dark:data-[state=active]:border-t-white rounded-none">
          <Image size={24} />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="m-0 p-0">
        <ImageGrid images={images} onReorder={onReorder} />
      </TabsContent>
      <TabsContent value="reels" className="m-0 p-0">
        <div className={`flex justify-center items-center h-48 ${theme === 'dark' ? 'bg-[#121212] text-gray-400' : 'bg-white text-gray-500'}`}>
          Reels will appear here
        </div>
      </TabsContent>
      <TabsContent value="tagged" className="m-0 p-0">
        <div className={`flex justify-center items-center h-48 ${theme === 'dark' ? 'bg-[#121212] text-gray-400' : 'bg-white text-gray-500'}`}>
          Tagged photos will appear here
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default InstagramTabs;
