import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroSocialLinkProps {
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export const HeroSocialLink: React.FC<HeroSocialLinkProps> = ({ 
  href, 
  icon: Icon,
  external = true 
}) => {
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a
      href={href}
      className="group relative p-4 hover:scale-110 transition-transform"
      {...externalProps}
    >
      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
      <Icon className="w-8 h-8 text-blue-300 relative" />
    </a>
  );
};