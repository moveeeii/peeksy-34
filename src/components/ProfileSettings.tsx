
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface ProfileSettingsProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData: {
    username: string;
    profileImage: string;
    displayName: string;
    bio: string;
    description: string[];
    website: string;
    followedBy: string;
    showStories: boolean;
  };
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  open,
  onClose,
  onSave,
  initialData
}) => {
  const [formData, setFormData] = useState(initialData);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setFormData(initialData);
    setDescription(initialData.description.join("\n"));
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleSave = () => {
    const descriptionLines = description
      .split("\n")
      .filter(line => line.trim() !== "");
    
    onSave({
      ...formData,
      description: descriptionLines
    });
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormData({
            ...formData,
            profileImage: reader.result
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      showStories: checked
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>profile settings</DialogTitle>
          <DialogDescription>
            customize your instagram profile preview
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              username
            </Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="displayName" className="text-right">
              display name
            </Label>
            <Input
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              category
            </Label>
            <Input
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              bio
            </Label>
            <Textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add description (one item per line)"
              className="col-span-3"
              rows={5}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="website" className="text-right">
              website
            </Label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="followedBy" className="text-right">
              followed by
            </Label>
            <Input
              id="followedBy"
              name="followedBy"
              value={formData.followedBy}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profileImage" className="text-right">
              profile image
            </Label>
            <div className="col-span-3 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src={formData.profileImage} alt="Profile" className="h-full w-full object-cover" />
              </div>
              <Input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="showStories" className="text-right">
              show stories
            </Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch
                id="showStories"
                checked={formData.showStories}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="showStories">
                {formData.showStories ? "Enabled" : "Disabled"}
              </Label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            cancel
          </Button>
          <Button type="button" onClick={handleSave}>
            save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;
