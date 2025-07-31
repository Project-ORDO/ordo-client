export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

export interface FooterLinks {
  quickLinks: FooterLink[];
}
