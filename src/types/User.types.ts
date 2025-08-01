 

// Interface definitions based on your schema
export interface IUser {
  isLoggedIn: boolean;
  name: string;
  avatar: string;
  notifications: number;
  _id?: string;
  uid?: string;
  email: string;
  phone?: string;
  profileImage?: string;
  password?: string;
  authProvider?: string[];
  isActive: boolean;
  createdAt?: Date;
  lastLogin?: Date;
  batch: string;
}

export interface IUserDetails {
  _id?: string;
  uid: string;
  linkedIn: string;
  github: string;
  leetcode: string;
  portfolio: string;
  resumeURL: string;
  techStack: string[];
  currentlyLearning: string[];
  qualification: string;
  yearOfGraduation: number;
  college: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  gender: string;
  age: number;
  dob: string;
  createdAt: Date;
  updatedAt: Date;
}