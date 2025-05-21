
import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import ImageUpload from '@/components/ImageUpload';
import PhoneMockup from '@/components/PhoneMockup';
import ProfileSettings from '@/components/ProfileSettings';
import { Button } from '@/components/ui/button';
import LogoDark from '/peeksy-logo-dark.png';
import LogoLight from '/peeksy-logo-light.png'; 

// Default profile image from the provided URL
const defaultProfileImage = '/tumlet-half.png';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('tumlet.boardgames');
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImage);
  const [showStories, setShowStories] = useState<boolean>(false);
  const [profileInfo, setProfileInfo] = useState({
    displayName: 'Tumlet',
    bio: 'Board Game',
    description: [
      'Just two friends trying to spread playfulness amongst Nepali young adults.'
    ],
    website: 'tumlet.com + 2',
    followedBy: 'tsen0wa, saankalpaa, upasanaprdn + 69 more'
  });
  const [stats, setStats] = useState({
    followers: 444,
    following: 0
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleImagesAdded = (newImages: string[]) => {
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleReorder = (newOrder: string[]) => {
    setImages(newOrder);
  };

  const clearAllImages = () => {
    setImages([]);
    toast.info('All images cleared');
  };

  const handleProfileUpdate = (data: any) => {
    setProfileInfo(data);
    setUsername(data.username || username);
    if (data.profileImage) {
      setProfileImage(data.profileImage);
    }
    setShowStories(data.showStories);
    setSettingsOpen(false);
    toast.success('Profile updated');
  };

  return (
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="w-[192px] flex items-center">
            <img 
              className="w-full" 
              src={theme === 'dark' ? LogoLight : LogoDark}
              alt="GridGramam Logo" 
            />
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>upload your images</h2>
            <ImageUpload onImagesAdded={handleImagesAdded} />
            
            <div className="flex justify-between items-center mb-4">
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                your images ({images.length})
              </h3>
              {images.length > 0 && (
                <button 
                  onClick={clearAllImages}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  clear all
                </button>
              )}
            </div>
            
            <div className={`grid grid-cols-4 gap-2 h-[300px] overflow-y-auto p-2 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} scrollbar-thin`}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="relative aspect-[3/4]">
                    <img 
                      src={image} 
                      alt={`Uploaded ${index}`} 
                      className="w-full h-full object-cover rounded"
                    />
                    <button 
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <div className={`col-span-4 flex items-center justify-center h-full ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  no images uploaded yet
                </div>
              )}
            </div>
          </div>

          <div>
            <PhoneMockup
              username={username}
              setUsername={setUsername}
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              profileInfo={profileInfo}
              showStories={showStories}
              stats={{
                posts: images.length,
                followers: stats.followers,
                following: stats.following
              }}
              images={images}
              onReorder={handleReorder}
              onOpenSettings={() => setSettingsOpen(true)}
            />
            <p className={`text-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-4`}>
              click on the settings on top right to customize the profile • drag images to reorder
            </p>
          </div>
        </div>
      </div>
      
      <ProfileSettings 
        open={settingsOpen} 
        onClose={() => setSettingsOpen(false)}
        onSave={handleProfileUpdate}
        initialData={{
          ...profileInfo,
          username,
          profileImage,
          showStories
        }}
      />
      
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Index;
