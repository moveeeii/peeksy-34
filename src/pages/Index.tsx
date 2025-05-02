
import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';
import ImageUpload from '@/components/ImageUpload';
import PhoneMockup from '@/components/PhoneMockup';
import ProfileSettings from '@/components/ProfileSettings';

// Default placeholder image
const defaultProfileImage = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80';

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('neshawoolery');
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImage);
  const [showStories, setShowStories] = useState<boolean>(true);
  const [profileInfo, setProfileInfo] = useState({
    displayName: 'Nesha | Business Mentor',
    bio: 'Entrepreneur',
    description: [
      '• Build a profitable online business without the hustle & crazy work hours',
      '• Podcast: The Simple Business Show 🎙️',
      '• Free Masterclass ↓'
    ],
    website: 'neshawoolery.com/instagram',
    followedBy: 'tropicmediaco, _emeraldscity and 20 others'
  });
  const [stats, setStats] = useState({
    followers: 9963,
    following: 79
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleImagesAdded = (newImages: string[]) => {
    setImages((prev) => [...prev, ...newImages]);
    toast.success(`${newImages.length} image${newImages.length > 1 ? 's' : ''} added`);
  };

  const handleReorder = (newOrder: string[]) => {
    setImages(newOrder);
    toast.success('Feed order updated');
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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Instagram Feed Preview</h1>
        <p className="text-center text-gray-600 mb-4">
          Upload, arrange, and preview your Instagram feed
        </p>
        
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setSettingsOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Advanced Profile Settings
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upload Your Images</h2>
            <ImageUpload onImagesAdded={handleImagesAdded} />
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Your Images ({images.length})</h3>
              {images.length > 0 && (
                <button 
                  onClick={clearAllImages}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Clear All
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2 h-[300px] overflow-y-auto p-2 bg-gray-50 rounded border">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="relative aspect-square">
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
                <div className="col-span-4 flex items-center justify-center h-full text-gray-500">
                  No images uploaded yet
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
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Click on username to edit • Drag images to reorder
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
