import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type {IUser, IUserDetails} from '@/types/User.types';



const PersonalInfoSection: React.FC<{ user:IUser; userDetails: IUserDetails; isEditing: boolean; onUpdate: (field: string, value: any) => void }> = ({ 
  user,
  userDetails, 
  isEditing, 
  onUpdate 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education & Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="text-sm font-medium mb-2 block">Name</label>
            {isEditing ? (
              <Input
                value={user.name}
                onChange={(e) => onUpdate('name', e.target.value)}
                placeholder="Name"
              />
            ) : (
              <p className="text-foreground">{user.name}</p>
            )}
          </div>
            <div>
            <label className="text-sm font-medium mb-2 block">Batch</label>
            {isEditing ? (
              <Input
                value={user.batch}
                onChange={(e) => onUpdate('batch', e.target.value)}
                placeholder="Batch"
              />
            ) : (
              <p className="text-foreground">{user.batch}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">College</label>
            {isEditing ? (
              <Input
                value={userDetails.college}
                onChange={(e) => onUpdate('college', e.target.value)}
                placeholder="College Name"
              />
            ) : (
              <p className="text-foreground">{userDetails.college}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Qualification</label>
            {isEditing ? (
              <Input
                value={userDetails.qualification}
                onChange={(e) => onUpdate('qualification', e.target.value)}
                placeholder="Qualification"
              />
            ) : (
              <p className="text-foreground">{userDetails.qualification}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Year of Graduation</label>
            {isEditing ? (
              <Input
                type="number"
                value={userDetails.yearOfGraduation}
                onChange={(e) => onUpdate('yearOfGraduation', parseInt(e.target.value))}
                placeholder="2024"
              />
            ) : (
              <p className="text-foreground">{userDetails.yearOfGraduation}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Age</label>
            {isEditing ? (
              <Input
                type="number"
                value={userDetails.age}
                onChange={(e) => onUpdate('age', parseInt(e.target.value))}
                placeholder="Age"
              />
            ) : (
              <p className="text-foreground">{userDetails.age} years</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Gender</label>
            {isEditing ? (
              <Input
                value={userDetails.gender}
                onChange={(e) => onUpdate('gender', e.target.value)}
                placeholder="Gender"
              />
            ) : (
              <p className="text-foreground">{userDetails.gender}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Date of Birth</label>
            {isEditing ? (
              <Input
                type="date"
                value={userDetails.dob}
                onChange={(e) => onUpdate('dob', e.target.value)}
              />
            ) : (
              <p className="text-foreground">{new Date(userDetails.dob).toLocaleDateString()}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">City</label>
              {isEditing ? (
                <Input
                  value={userDetails.location.city}
                  onChange={(e) => onUpdate('location', { ...userDetails.location, city: e.target.value })}
                  placeholder="City"
                />
              ) : (
                <p className="text-foreground">{userDetails.location.city}</p>
              )}
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">State</label>
              {isEditing ? (
                <Input
                  value={userDetails.location.state}
                  onChange={(e) => onUpdate('location', { ...userDetails.location, state: e.target.value })}
                  placeholder="State"
                />
              ) : (
                <p className="text-foreground">{userDetails.location.state}</p>
              )}
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Country</label>
              {isEditing ? (
                <Input
                  value={userDetails.location.country}
                  onChange={(e) => onUpdate('location', { ...userDetails.location, country: e.target.value })}
                  placeholder="Country"
                />
              ) : (
                <p className="text-foreground">{userDetails.location.country}</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoSection