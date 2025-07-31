import React from 'react';
import { Bell, User } from 'lucide-react';

interface User {
  isLoggedIn: boolean;
  name: string;
  avatar: string;
  notifications: number;
}

const mockUser: User = {
  isLoggedIn: true,
  name: "John Doe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
  notifications: 3
};

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-soft border-b border-border bg-card">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          
          {/* Logo - Responsive sizing */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2  justify-center">
               <img 
              src="/src/assets/Ordo_Logo.png" 
              alt="Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2 object-contain" 
            />
            </div>
          </div>
          
          {/* Right Side Icons - Responsive spacing and sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            
            {/* Notifications - Only show if user is logged in */}
            {mockUser.isLoggedIn && (
              <div className="relative flex-shrink-0">
                <button 
                  className="p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:bg-muted text-muted-foreground"
                  aria-label="Notifications"
                >
                  <Bell size={18} className="sm:w-5 sm:h-5" />
                  {mockUser.notifications > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-medium">
                      {mockUser.notifications > 99 ? '99+' : mockUser.notifications}
                    </span>
                  )}
                </button>
              </div>
            )}
            
            {/* User Avatar - Responsive sizing */}
            <div className="flex items-center flex-shrink-0">
              {mockUser.isLoggedIn && mockUser.avatar ? (
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-transparent hover:border-muted transition-all duration-200 cursor-pointer object-cover"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-muted-foreground transition-all duration-200">
                  <User size={14} className="sm:w-4 sm:h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;