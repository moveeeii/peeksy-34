
import React from 'react';
import ProfileHeader from './ProfileHeader';
import InstagramTabs from './InstagramTabs';

interface PhoneMockupProps {
  username: string;
  setUsername: (username: string) => void;
  profileImage: string;
  setProfileImage: (image: string) => void;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  images: string[];
  onReorder: (newOrder: string[]) => void;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  username,
  setUsername,
  profileImage,
  setProfileImage,
  stats,
  images,
  onReorder
}) => {
  return (
    <div className="phone-mockup bg-white border-4 border-gray-300 mx-auto">
      {/* Status bar */}
      <div className="h-6 bg-gray-100 flex justify-between items-center px-4 text-xs">
        <div>12:30</div>
        <div className="flex space-x-1">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* App content */}
      <div className="h-[600px] overflow-y-auto">
        <ProfileHeader 
          username={username} 
          setUsername={setUsername}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          stats={{
            posts: images.length,
            followers: stats.followers,
            following: stats.following
          }}
        />
        <InstagramTabs images={images} onReorder={onReorder} />
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-gray-200 flex justify-around items-center">
        <button className="p-2">🏠</button>
        <button className="p-2">🔍</button>
        <button className="p-2">➕</button>
        <button className="p-2">❤️</button>
        <button className="p-2">👤</button>
      </div>
    </div>
  );
};

export default PhoneMockup;
