
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type {IUser, IUserDetails} from '@/types/User.types';
import { Save, X} from 'lucide-react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import TechStackSection from '@/components/profile/TechStackSection';
import SocialLinksSection from '@/components/profile/SocialLinkSection';
import PersonalInfoSection from '@/components/profile/PersonalInfoSection';

// Mock data
const mockUser: IUser = {
  isLoggedIn: true,
  name: "Alex Johnson",
  avatar: "/api/placeholder/150/150",
  notifications: 3,
  _id: "507f1f77bcf86cd799439011",
  uid: "user_123",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  profileImage: "/api/placeholder/150/150",
  authProvider: ["email", "google"],
  isActive: true,
  createdAt: new Date("2023-01-15"),
  lastLogin: new Date("2025-01-30"),
  batch: "2024"
};

const mockUserDetails: IUserDetails = {
  _id: "507f1f77bcf86cd799439012",
  uid: "user_123",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  leetcode: "https://leetcode.com/alexjohnson",
  portfolio: "https://alexjohnson.dev",
  resumeURL: "https://example.com/resume.pdf",
  techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
  currentlyLearning: ["GraphQL", "Kubernetes", "Machine Learning"],
  qualification: "Bachelor of Technology",
  yearOfGraduation: 2024,
  college: "MIT",
  location: {
    city: "San Francisco",
    state: "California",
    country: "USA"
  },
  gender: "Male",
  age: 24,
  dob: "1999-05-15",
  createdAt: new Date("2023-01-15"),
  updatedAt: new Date("2025-01-20")
};


// Main Profile Page Component
const Profile: React.FC = () => {
  const [user, setUser] = useState<IUser>(mockUser);
  const [userDetails, setUserDetails] = useState<IUserDetails>(mockUserDetails);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Saving profile data:', { user, userDetails });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values
    setUser(mockUser);
    setUserDetails(mockUserDetails);
  };

  console.log('userDetails' ,userDetails)

  const updateUserDetail = (field: string, value: string | number | string[]) => {
    console.log('value',value)
    console.log('field',field)
  setUserDetails(prev => ({
    ...prev,
    [field]: value,
  }));
};

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <ProfileHeader isEditing={isEditing} user={user} userDetails={userDetails} onEdit={handleEdit} onSave={handleSave} onCancel={handleCancel} />
        
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TechStackSection 
              techStack={userDetails.techStack}
              currentlyLearning={userDetails.currentlyLearning}
              isEditing={isEditing}
              onUpdate={updateUserDetail}
            />
            <SocialLinksSection 
              userDetails={userDetails}
              isEditing={isEditing}
              onUpdate={updateUserDetail}
            />
          </div>
          
          <div>
            <PersonalInfoSection 
              user={user}
              userDetails={userDetails}
              isEditing={isEditing}
              onUpdate={updateUserDetail}
            />
          </div>
        </div>
      </div>
      
    </div>
     {isEditing && (
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">You're in edit mode. Make your changes and save them.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCancel}>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
    </>
    
  );
};

export default Profile;