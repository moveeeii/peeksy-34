
import React from 'react';
import { Grid2x2 } from 'lucide-react';
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
        <TabsTrigger value="grid" className="flex justify-center py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-black dark:data-[state=active]:border-b-white rounded-none dark:data-[state=active]:bg-[#121212]">
          <Grid2x2 size={24} />
        </TabsTrigger>
        <TabsTrigger value="reels" className="flex justify-center py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-black dark:data-[state=active]:border-b-white rounded-none dark:data-[state=active]:bg-[#121212]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="currentColor"/>
            <path d="M6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V6.5H0.5V6C0.5 2.96243 2.96243 0.5 6 0.5Z" stroke="currentColor"/>
            <path d="M4.5 1L8 6.5" stroke="currentColor"/>
            <path d="M11.418 0.722656L15 6.5" stroke="currentColor"/>
            <path d="M13.3057 12.2754L8.5 15.0498V9.50098L13.3057 12.2754Z" stroke="currentColor"/>
          </svg>
        </TabsTrigger>
        <TabsTrigger value="tagged" className="flex justify-center py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-black dark:data-[state=active]:border-b-white rounded-none dark:data-[state=active]:bg-[#121212]">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.4678 3.97949L11.9313 4.54267L12.1566 4.75727H12.4678V3.97949ZM17.7998 3.97949L17.7999 3.20171H17.7998V3.97949ZM19.666 5.8457L20.4438 5.8457L20.4438 5.84565L19.666 5.8457ZM17.7998 19.6309L17.7998 20.4086L17.7999 20.4086L17.7998 19.6309ZM2.86621 19.6309L2.86616 20.4086H2.86621V19.6309ZM1 5.8457L0.222222 5.84565V5.8457H1ZM2.86621 3.97949L2.86621 3.20171L2.86616 3.20171L2.86621 3.97949ZM8.31152 3.97949V4.75727H8.62267L8.84797 4.54267L8.31152 3.97949ZM10.3896 2L10.9261 1.43683L10.3896 0.925842L9.8532 1.43683L10.3896 2ZM12.4678 3.97949V4.75727H17.7998V3.97949V3.20171H12.4678V3.97949ZM17.7998 3.97949L17.7998 4.75727C18.4011 4.75731 18.8882 5.24444 18.8882 5.84576L19.666 5.8457L20.4438 5.84565C20.4437 4.38531 19.2602 3.20181 17.7999 3.20171L17.7998 3.97949ZM19.666 5.8457H18.8882V17.7637H19.666H20.4438V5.8457H19.666ZM19.666 17.7637H18.8882C18.8882 18.3655 18.4006 18.853 17.7998 18.8531L17.7998 19.6309L17.7999 20.4086C19.2607 20.4085 20.4438 19.2236 20.4438 17.7637H19.666ZM17.7998 19.6309V18.8531H2.86621V19.6309V20.4086H17.7998V19.6309ZM2.86621 19.6309L2.86626 18.8531C2.26538 18.853 1.77778 18.3655 1.77778 17.7637H1H0.222222C0.222222 19.2236 1.40529 20.4085 2.86616 20.4086L2.86621 19.6309ZM1 17.7637H1.77778V5.8457H1H0.222222V17.7637H1ZM1 5.8457L1.77778 5.84576C1.77782 5.24444 2.26495 4.75731 2.86626 4.75727L2.86621 3.97949L2.86616 3.20171C1.40582 3.20181 0.222322 4.38531 0.222222 5.84565L1 5.8457ZM2.86621 3.97949V4.75727H8.31152V3.97949V3.20171H2.86621V3.97949ZM8.31152 3.97949L8.84797 4.54267L10.9261 2.56317L10.3896 2L9.8532 1.43683L7.77508 3.41632L8.31152 3.97949ZM10.3896 2L9.8532 2.56317L11.9313 4.54267L12.4678 3.97949L13.0042 3.41632L10.9261 1.43683L10.3896 2Z" fill="currentColor"/>
            <path d="M10.2175 12.0073C11.3344 12.0073 12.2398 11.102 12.2398 9.98511C12.2398 8.86827 11.3344 7.96289 10.2175 7.96289C9.10069 7.96289 8.19531 8.86827 8.19531 9.98511C8.19531 11.102 9.10069 12.0073 10.2175 12.0073Z" stroke="currentColor" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.768 18.8527C14.768 16.3399 12.7308 14.3027 10.218 14.3027C7.7051 14.3027 5.66797 16.3399 5.66797 18.8527" stroke="currentColor" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
