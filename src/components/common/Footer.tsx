import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import type { FooterLink, FooterLinks, SocialLink } from '@/types/Layout.types';


const Footer: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const currentYear: number = new Date().getFullYear();

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const footerLinks: FooterLinks = {
    quickLinks: [
      { name: 'Contact', href: '/contact' },
      { name: 'About', href: '/about' }
    ]
  };

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="border-t border-border bg-card">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            {/* Logo with proper heading alignment */}
            <div className="h-[57px] flex items-start -mt-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 justify-center">
                {/* <span className="text-primary-foreground font-bold text-xl">O</span> */}
                <img 
              src="/src/assets/Ordo_Logo.png" 
              alt="Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2 object-contain" 
            />
              </div>
            </div>
            <p className="flex items-center space-x-1 text-sm leading-relaxed max-w-sm text-muted-foreground">
              Small steps daily. Clarity grows. Confidence follows.
            </p>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-sm">support@ordo.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex space-x-2 -ml-4">
              {socialLinks.map((social: SocialLink, index: number) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Theme
            </h3>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Centered */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ordo. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;