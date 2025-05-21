
import React from 'react';
import ProfileHeader from './ProfileHeader';
import InstagramTabs from './InstagramTabs';
import { useTheme } from 'next-themes';
import { Settings } from 'lucide-react';
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
  onOpenSettings: () => void;
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
  onReorder,
  onOpenSettings
}) => {
  const {
    theme
  } = useTheme();
  return <div className="relative mx-auto w-full max-w-[375px]">
      {/* Phone frame with silver border */}
      <div className="relative rounded-[40px] overflow-hidden border-[14px] border-black bg-gray-200 shadow-xl">
        {/* Silver inner border */}
        <div className="absolute inset-[-2px] border-[2px] border-gray-300 pointer-events-none"></div>
        
        {/* iPhone-style camera notch */}
        <div className="w-full h-[32px] bg-black relative">
          {/* Dynamic Island / Camera notch */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[160px] h-[32px] bg-black z-20 flex items-center justify-center">
            {/* Camera and sensors */}
            <div className="absolute left-[40px] w-[8px] h-[8px] rounded-full bg-[#0077e6] opacity-50"></div>
            <div className="absolute left-[55px] w-[12px] h-[12px] rounded-full bg-gray-800"></div>
            <div className="absolute right-[40px] w-[8px] h-[8px] rounded-full bg-[#f57c00] opacity-50"></div>
          </div>
        </div>
        
        {/* App content */}
        <div className={`h-[600px] overflow-y-auto scrollbar-none ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <ProfileHeader username={username} setUsername={setUsername} profileImage={profileImage} setProfileImage={setProfileImage} profileInfo={profileInfo} showStories={showStories} stats={{
          posts: images.length,
          followers: stats.followers,
          following: stats.following
        }} onOpenSettings={onOpenSettings} />
          <InstagramTabs images={images} onReorder={onReorder} />
        </div>

        {/* Bottom nav */}
        <div className={`h-16 border-t ${theme === 'dark' ? 'border-gray-800 bg-[#121212]' : 'border-gray-200 bg-white'} flex justify-around items-center rounded-b-[25px]`}>
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0.5" y="0.5" width="19" height="19" rx="5.5"/>
            <path d="M6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V6.5H0.5V6C0.5 2.96243 2.96243 0.5 6 0.5Z" />
            <line x1="4.41603" y1="0.72265" x2="8.41603" y2="6.72265" />
            <line x1="11.416" y1="0.72265" x2="15.416" y2="6.72265" />
            <path d="M13.3057 12.2754L8.5 15.0498V9.50098L13.3057 12.2754Z"/>
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
        </div>
      </div>
    </div>;
};
export default PhoneMockup;
