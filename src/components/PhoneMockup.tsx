
import React from 'react';
import ProfileHeader from './ProfileHeader';
import InstagramTabs from './InstagramTabs';
import { useTheme } from 'next-themes';

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
  const { theme } = useTheme();
  
  return (
    <div className={`relative mx-auto w-full max-w-[375px] ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* Phone frame */}
      <div className="relative rounded-[40px] overflow-hidden border-[12px] border-black">
        {/* Camera notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[20px] z-10"></div>
        
        {/* App content */}
        <div className="h-[600px] overflow-y-auto scrollbar-none">
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
        <div className={`h-16 border-t ${theme === 'dark' ? 'border-gray-800 bg-[#121212]' : 'border-gray-200 bg-white'} flex justify-around items-center`}>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"></path><path d="m2 8 10 6 10-6"></path><path d="m12 14 10-6"></path><path d="m12 14-10-6"></path></svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
