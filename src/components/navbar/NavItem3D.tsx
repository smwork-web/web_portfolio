import React from 'react';
import { motion } from 'framer-motion';

interface NavItem3DProps {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem3D: React.FC<NavItem3DProps> = ({
  label,
  href,
  isActive,
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="relative px-4 py-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* 3D Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-blue-500/10 rounded-lg"
          whileHover={{
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
        />
        
        {/* Background glow */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
            isActive
              ? 'bg-blue-500/20 blur-lg opacity-100'
              : 'opacity-0'
          }`}
        />
        
        {/* Text */}
        <span
          className={`relative z-10 ${
            isActive ? 'text-blue-400 font-medium' : 'text-gray-400'
          }`}
        >
          {label}
        </span>
        
        {/* Bottom border */}
        {isActive && (
          <motion.div
            layoutId="activeNavBorder"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </div>
    </motion.a>
  );
};

export default NavItem3D;