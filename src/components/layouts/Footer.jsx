import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Contact', href: '/contact' },
      { name: 'About', href: '/about' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="border-t" style={{ backgroundColor: 'rgb(var(--surface))', borderColor: 'rgb(var(--border))' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            {/* Logo with proper heading alignment */}
            <div className="h-[57px] flex items-start -mt-6"> {/* Match heading height for alignment */}
              <img 
                src="/src/assets/Ordo_Logo.png" 
                alt="Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" 
              />
            </div>
            <p className="flex items-center space-x-1 text-sm leading-relaxed max-w-sm" style={{ color: 'rgb(var(--text-secondary))' }}>
           Small steps daily. Clarity grows. Confidence follows.
            </p>
            <div className="flex items-center space-x-1" style={{ color: 'rgb(var(--text-secondary))' }}>
              <Mail className="w-4 h-4" />
              <span className="text-sm">support@ordo.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--text-primary))' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                    style={{ color: 'rgb(var(--text-secondary))' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--text-primary))' }}>
              Follow Us
            </h3>
            <div className="flex space-x-2 -ml-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-600 hover:text-white"
                    style={{ 
                      backgroundColor: 'rgb(var(--surface-variant))', 
                      color: 'rgb(var(--text-secondary))' 
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Centered */}
      <div className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <p className="text-sm" style={{ color: 'rgb(var(--text-secondary))' }}>
              © {currentYear} Ordo. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="/privacy" 
                className="text-sm transition-colors duration-200"
                style={{ color: 'rgb(var(--text-secondary))' }}
                onMouseEnter={(e) => e.target.style.color = 'rgb(var(--text-primary))'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(var(--text-secondary))'}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm transition-colors duration-200"
                style={{ color: 'rgb(var(--text-secondary))' }}
                onMouseEnter={(e) => e.target.style.color = 'rgb(var(--text-primary))'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(var(--text-secondary))'}
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