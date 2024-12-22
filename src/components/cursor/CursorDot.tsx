import React from 'react';
import { motion } from 'framer-motion';

interface CursorDotProps {
  position: { x: number; y: number };
}

const CursorDot: React.FC<CursorDotProps> = ({ position }) => {
  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full border-2 border-blue-500 pointer-events-none z-50"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorDot;