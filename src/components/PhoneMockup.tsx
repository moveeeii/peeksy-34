
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
  const { theme } = useTheme();
  
  return (
    <div className="relative mx-auto w-full max-w-[375px]">
      {/* Phone frame with rounded corners matching iPhone 14 Pro */}
      <div className="relative rounded-[40px] overflow-hidden border-[14px] border-gray-800 bg-gray-200 shadow-xl">
        {/* Subtle inner border */}
        <div className="absolute inset-[-2px] border-[2px] border-gray-700 rounded-[42px] pointer-events-none"></div>
        
        {/* Power button */}
        <div className="absolute right-[-14px] top-[100px] w-[3px] h-[70px] bg-gray-700 rounded-l-sm"></div>
        
        {/* Volume buttons */}
        <div className="absolute left-[-14px] top-[80px] w-[3px] h-[25px] bg-gray-700 rounded-r-sm"></div>
        <div className="absolute left-[-14px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-r-sm"></div>
        
        {/* Status bar */}
        <div className={`w-full h-[30px] ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[120px] h-[34px] bg-black rounded-[20px] z-20 flex items-center justify-center">
            {/* Front camera */}
            <div className="absolute right-[25px] w-[8px] h-[8px] rounded-full bg-gray-700 border border-gray-600"></div>
            {/* Face ID sensors */}
            <div className="absolute left-[25px] w-[6px] h-[6px] rounded-full bg-gray-800"></div>
          </div>
          
          {/* Status bar content */}
          <div className="flex justify-between items-center px-6 pt-1 text-xs">
            <div className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>9:41</div>
            <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <path d="M20 6v12H4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"></path><path d="M17 2H7"></path><path d="M15 15v-2"></path><path d="M9 15v-2"></path><path d="M12 15v-6"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* App content */}
        <div className={`h-[600px] overflow-y-auto scrollbar-none ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
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
            onOpenSettings={onOpenSettings}
          />
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
        
        {/* Home indicator - iPhone bottom bar */}
        <div className={`absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-gray-600 rounded-full ${theme === 'dark' ? 'opacity-40' : 'opacity-30'}`}></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
