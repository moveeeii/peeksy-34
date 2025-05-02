import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

// Using a placeholder image instead of an import
const defaultProfileImage = 'https://via.placeholder.com/150';

interface ProfileHeaderProps {
  username: string;
  setUsername: (username: string) => void;
  profileImage: string;
  setProfileImage: (image: string) => void;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ 
  username, 
  setUsername, 
  profileImage, 
  setProfileImage,
  stats
}) => {
  const [editing, setEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);

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

  return (
    <div className="px-4 py-3">
      {/* Back button and username row */}
      <div className="flex items-center mb-4">
        <button className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        {editing ? (
          <div className="flex items-center">
            <input
              type="text"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              className="border-b-2 border-primary outline-none bg-transparent"
              autoFocus
            />
            <button 
              onClick={handleUsernameSubmit}
              className="ml-2 text-primary"
            >
              Save
            </button>
          </div>
        ) : (
          <h1 className="text-xl font-semibold flex-grow" onClick={() => setEditing(true)}>
            {username}
          </h1>
        )}
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"/>
            <circle cx="19" cy="12" r="1"/>
            <circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Profile info section */}
      <div className="flex mb-4">
        <div className="mr-8 relative">
          <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden">
            <img 
              src={profileImage || defaultProfileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <label className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">
            <span className="text-xs">+</span>
            <input 
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={handleProfileImageChange}
            />
          </label>
        </div>
        <div className="flex justify-between flex-grow text-center">
          <div>
            <div className="font-semibold">{stats.posts}</div>
            <div className="text-sm">Posts</div>
          </div>
          <div>
            <div className="font-semibold">{stats.followers.toLocaleString()}</div>
            <div className="text-sm">Followers</div>
          </div>
          <div>
            <div className="font-semibold">{stats.following}</div>
            <div className="text-sm">Following</div>
          </div>
        </div>
      </div>

      {/* Profile description and buttons */}
      <div className="mb-4">
        <div className="mb-1 font-semibold">Nesha | Business Mentor</div>
        <div className="text-sm text-gray-600 mb-1">Entrepreneur</div>
        <div className="text-sm mb-1">• Build a profitable online business without the hustle & crazy work hours</div>
        <div className="text-sm mb-1">• Podcast: The Simple Business Show 🎙️</div>
        <div className="text-sm mb-1">• Free Masterclass ↓</div>
        <div className="text-sm text-blue-600 mb-1">neshawoolery.com/instagram</div>
        <div className="text-sm text-gray-500">Followed by tropicmediaco, _emeraldscity and 20 others</div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-2 mb-4">
        <Button className="flex-1 bg-gray-200 text-black hover:bg-gray-300" variant="secondary">Following</Button>
        <Button className="flex-1 bg-gray-200 text-black hover:bg-gray-300" variant="secondary">Message</Button>
        <Button className="flex-1 bg-gray-200 text-black hover:bg-gray-300" variant="secondary">Email</Button>
        <Button className="w-10 bg-gray-200 text-black hover:bg-gray-300" variant="secondary">▼</Button>
      </div>

      {/* Highlights */}
      <div className="flex space-x-4 overflow-x-auto py-2">
        <div className="flex flex-col items-center">
          <div className="highlight-circle border border-gray-300 mb-1">
            <img src="https://via.placeholder.com/60" alt="Highlight" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">results</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="highlight-circle border border-gray-300 mb-1">
            <img src="https://via.placeholder.com/60" alt="Highlight" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">podcast</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="highlight-circle border border-gray-300 mb-1">
            <img src="https://via.placeholder.com/60" alt="Highlight" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">results</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="highlight-circle border border-gray-300 mb-1">
            <img src="https://via.placeholder.com/60" alt="Highlight" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">free trainings</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="highlight-circle border border-gray-300 mb-1">
            <img src="https://via.placeholder.com/60" alt="Highlight" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">about</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
