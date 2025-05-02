
import React, { useState } from 'react';
import { Toaster } from 'sonner';
import ImageUpload from '@/components/ImageUpload';
import PhoneMockup from '@/components/PhoneMockup';
import defaultProfileImage from '/public/lovable-uploads/80960353-ec92-431d-a1bd-84a7beb0bdad.png';

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('neshawoolery');
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImage);
  const [stats, setStats] = useState({
    followers: 9963,
    following: 79
  });

  const handleImagesAdded = (newImages: string[]) => {
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleReorder = (newOrder: string[]) => {
    setImages(newOrder);
  };

  const clearAllImages = () => {
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Instagram Feed Preview</h1>
        <p className="text-center text-gray-600 mb-8">
          Upload, arrange, and preview your Instagram feed
        </p>

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
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Index;
