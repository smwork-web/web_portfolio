import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingContext } from './LoadingContext';
import NeuralNetwork from './NeuralNetwork';
import LoadingText from './LoadingText';
import LoadingProgress from './LoadingProgress';

const LoadingAnimation = () => {
  const { isLoading } = useLoadingContext();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black"
          ref={containerRef}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
          
          <div className="relative h-full flex flex-col items-center justify-center">
            <NeuralNetwork />
            <LoadingText />
            <LoadingProgress />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;