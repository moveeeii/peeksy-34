import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from 'next-themes';
import { Settings } from 'lucide-react';

// Default placeholder story images - using public URLs
const defaultStoryImages = ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=60&q=80", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=60&q=80", "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=60&q=80", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=60&q=80", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=60&q=80"];
interface ProfileInfo {
  displayName: string;
  bio: string;
  description: string[];
  website: string;
  followedBy: string;
}
interface ProfileHeaderProps {
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
  onOpenSettings: () => void;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  setUsername,
  profileImage,
  setProfileImage,
  profileInfo,
  showStories = true,
  stats,
  onOpenSettings
}) => {
  const [editing, setEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const {
    theme
  } = useTheme();
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUsernameSubmit = () => {
    setUsername(tempUsername);
    setEditing(false);
  };
  const storyLabels = ["Before/After", "Quiz", "Architecture", "Design", "Tips"];
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const secondaryColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  return <div className={`px-4 py-3 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* Back button and username row */}
      <div className="flex items-center mb-4 justify-between">
        <button className={`${textColor}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        {editing ? <div className="flex items-center">
            <input type="text" value={tempUsername} onChange={e => setTempUsername(e.target.value)} className="border-b-2 border-primary outline-none bg-transparent" autoFocus />
            <button onClick={handleUsernameSubmit} className="ml-2 text-primary">
              Save
            </button>
          </div> : <h1 className={`text-lg font-semibold flex items-center ${textColor} cursor-pointer`} onClick={() => setEditing(true)}>
            {username}
            <Badge variant="outline" className="ml-2 bg-blue-500 text-white rounded-full p-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </Badge>
          </h1>}
        <div className="flex">
          <button className={`mr-4 ${textColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9 6 9-6"></path>
            </svg>
          </button>
          <button className={`${textColor}`} onClick={onOpenSettings}>
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* Profile info section */}
      <div className="flex mb-5 items-center">
        <div className="mr-8 relative my-0 px-0 w-[64px]">
          <div className="w-18 h-18 rounded-full overflow-hidden" style={{
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
        }}>
            <div className="w-17 h-17 m-[2px] rounded-full overflow-hidden border-2 border-white">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <label className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
            <span className="text-xs">+</span>
            <input type="file" className="hidden" accept="image/*" onChange={handleProfileImageChange} />
          </label>
        </div>
        <div className="flex justify-between flex-grow text-center">
          <div>
            <div className={`font-semibold ${textColor}`}>{stats.posts.toLocaleString()}</div>
            <div className={`text-sm ${secondaryColor}`}>posts</div>
          </div>
          <div>
            <div className={`font-semibold ${textColor}`}>{stats.followers >= 1000000 ? `${(stats.followers / 1000000).toFixed(1)}M` : stats.followers >= 1000 ? `${(stats.followers / 1000).toFixed(1)}K` : stats.followers.toLocaleString()}</div>
            <div className={`text-sm ${secondaryColor}`}>followers</div>
          </div>
          <div>
            <div className={`font-semibold ${textColor}`}>{stats.following}</div>
            <div className={`text-sm ${secondaryColor}`}>following</div>
          </div>
        </div>
      </div>

      {/* Profile description and buttons */}
      <div className="mb-4">
        <div className={`mb-1 font-semibold ${textColor}`}>{profileInfo.displayName}</div>
        <div className={`text-sm ${secondaryColor} mb-1`}>{profileInfo.bio}</div>
        {profileInfo.description.map((line, index) => <div key={index} className={`text-sm mb-0.5 ${textColor}`}>{line}</div>)}
        {/* Non-clickable website display */}
        <div className="text-sm text-blue-600 mb-1 block pointer-events-none">
          {profileInfo.website}
        </div>
        <div className={`text-sm ${secondaryColor}`}>Followed by {profileInfo.followedBy}</div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-2 mb-4">
        <Button className={`flex-1 rounded-md ${theme === 'dark' ? 'bg-[#262626] hover:bg-[#363636] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`} variant="secondary">Following</Button>
        <Button className={`flex-1 rounded-md ${theme === 'dark' ? 'bg-[#262626] hover:bg-[#363636] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`} variant="secondary">Message</Button>
        <Button className={`flex-1 rounded-md ${theme === 'dark' ? 'bg-[#262626] hover:bg-[#363636] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`} variant="secondary">Email</Button>
        <Button className={`w-10 rounded-md ${theme === 'dark' ? 'bg-[#262626] hover:bg-[#363636] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`} variant="secondary">▼</Button>
      </div>

      {/* Highlights */}
      {showStories && <div className="flex space-x-5 overflow-x-auto py-3 mb-2 scrollbar-none">
          {defaultStoryImages.map((image, index) => <div key={index} className="flex flex-col items-center min-w-[65px]">
              <div className="highlight-circle w-16 h-16 rounded-full border border-gray-300 mb-1 overflow-hidden">
                <img src={image} alt="Highlight" className="w-full h-full object-cover" />
              </div>
              <span className={`text-xs ${textColor}`}>{storyLabels[index]}</span>
            </div>)}
        </div>}
    </div>;
};
export default ProfileHeader;