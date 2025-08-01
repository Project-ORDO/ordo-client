
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type {IUserDetails} from '@/types/User.types';
import {Github, Linkedin, ExternalLink} from 'lucide-react';

const SocialLinksSection: React.FC<{ userDetails: IUserDetails; isEditing: boolean; onUpdate: (field: string, value: string) => void }> = ({ 
  userDetails, 
  isEditing, 
  onUpdate 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links & Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">GitHub</label>
            {isEditing ? (
              <Input
                value={userDetails.github}
                onChange={(e) => onUpdate('github', e.target.value)}
                placeholder="GitHub URL"
              />
            ) : (
              <a href={userDetails.github} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-primary hover:underline">
                <Github className="w-4 h-4" />
                GitHub Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">LinkedIn</label>
            {isEditing ? (
              <Input
                value={userDetails.linkedIn}
                onChange={(e) => onUpdate('linkedIn', e.target.value)}
                placeholder="LinkedIn URL"
              />
            ) : (
              <a href={userDetails.linkedIn} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-primary hover:underline">
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Portfolio</label>
            {isEditing ? (
              <Input
                value={userDetails.portfolio}
                onChange={(e) => onUpdate('portfolio', e.target.value)}
                placeholder="Portfolio URL"
              />
            ) : (
              <a href={userDetails.portfolio} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-primary hover:underline">
                <ExternalLink className="w-4 h-4" />
                Visit Portfolio
              </a>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">LeetCode</label>
            {isEditing ? (
              <Input
                value={userDetails.leetcode}
                onChange={(e) => onUpdate('leetcode', e.target.value)}
                placeholder="LeetCode URL"
              />
            ) : (
              <a href={userDetails.leetcode} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-primary hover:underline">
                <ExternalLink className="w-4 h-4" />
                LeetCode Profile
              </a>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Resume</label>
          {isEditing ? (
            <Input
              value={userDetails.resumeURL}
              onChange={(e) => onUpdate('resumeURL', e.target.value)}
              placeholder="Resume URL"
            />
          ) : (
            <a href={userDetails.resumeURL} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-primary hover:underline">
              <ExternalLink className="w-4 h-4" />
              View Resume
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinksSection;