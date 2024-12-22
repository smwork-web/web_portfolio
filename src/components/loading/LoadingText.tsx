import React from 'react';
import { motion } from 'framer-motion';
import { useLoadingContext } from './LoadingContext';

const phrases = [
  "Initializing Neural Networks",
  "Training Models",
  "Generating Intelligence",
  "Optimizing Algorithms",
  "Synthesizing Creativity"
];

const LoadingText = () => {
  const { progress } = useLoadingContext();
  const currentPhrase = phrases[Math.floor((progress / 100) * phrases.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mt-8"
    >
      <motion.h2
        key={currentPhrase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-2xl font-bold text-blue-400"
      >
        {currentPhrase}
      </motion.h2>
    </motion.div>
  );
};

export default LoadingText;