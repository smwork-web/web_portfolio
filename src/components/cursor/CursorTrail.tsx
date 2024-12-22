import React from 'react';
import { motion } from 'framer-motion';

interface CursorTrailProps {
  points: Array<{ x: number; y: number; timestamp: number }>;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ points }) => {
  return (
    <>
      {points.map((point, index) => (
        <motion.div
          key={point.timestamp}
          className="fixed w-3 h-3 rounded-full pointer-events-none z-50"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: point.x - 6,
            y: point.y - 6,
          }}
          transition={{ duration: 1 }}
          style={{
            background: `rgba(59, 130, 246, ${0.8 - index * 0.1})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;