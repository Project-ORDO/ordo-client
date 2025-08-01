import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Edit3,X,Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { IUser, IUserDetails } from "@/types/User.types";

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
  batch: "2024",
};

const mockUserDetails: IUserDetails = {
  _id: "507f1f77bcf86cd799439012",
  uid: "user_123",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  leetcode: "https://leetcode.com/alexjohnson",
  portfolio: "https://alexjohnson.dev",
  resumeURL: "https://example.com/resume.pdf",
  techStack: ["React", "Node.js", "TypeScript", "MongoDB", "Python", "Docker"],
  currentlyLearning: ["GraphQL", "Kubernetes", "Machine Learning"],
  qualification: "Bachelor of Technology",
  yearOfGraduation: 2024,
  college: "MIT",
  location: {
    city: "San Francisco",
    state: "California",
    country: "USA",
  },
  gender: "Male",
  age: 24,
  dob: "1999-05-15",
  createdAt: new Date("2023-01-15"),
  updatedAt: new Date("2025-01-20"),
};

const ProfileHeader: React.FC<{
  isEditing: boolean;
  user: IUser;
  userDetails: IUserDetails;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
}> = ({ isEditing, user, onEdit, onSave, onCancel }) => {
  return (
    <>
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
        <CardContent className="relative p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
              <AvatarImage src={user.profileImage} alt={user.name} />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-foreground">
                  {user.name}
                </h1>
                <Badge variant="secondary" className="w-fit">
                  {user.batch} Batch
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{user.phone}</span>
              </div> */}
                {/* <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{userDetails.location.city}, {userDetails.location.state}</span>
              </div> */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Joined{" "}
                    {user.createdAt && user.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {isEditing ? (
              <>
                <Button variant="outline" size="sm" onClick={onCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button size="sm" onClick={onSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={onEdit} className="flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileHeader;
