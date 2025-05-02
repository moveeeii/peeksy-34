
import React from 'react';
import ProfileHeader from './ProfileHeader';
import InstagramTabs from './InstagramTabs';

interface ProfileInfo {
  displayName: string;
  bio: string;
  description: string[];
  website: string;
  followedBy: string;
}

interface PhoneMockupProps {
  username: string;
  setUsername: (username: string) => void;
  profileImage: string;
  setProfileImage: (image: string) => void;
  profileInfo: ProfileInfo;
  showStories?: boolean;
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
  profileInfo,
  showStories = true,
  stats,
  images,
  onReorder
}) => {
  return (
    <div className="phone-mockup bg-white border-4 border-gray-300 mx-auto">
      {/* App content */}
      <div className="h-[600px] overflow-y-auto">
        <ProfileHeader 
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
