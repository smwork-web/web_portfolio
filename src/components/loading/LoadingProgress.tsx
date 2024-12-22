import React from 'react';
import { motion } from 'framer-motion';
import { useLoadingContext } from './LoadingContext';

const LoadingProgress = () => {
  const { progress } = useLoadingContext();

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64">
      <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-400 text-sm text-center mt-2"
      >
        {progress}%
      </motion.div>
    </div>
  );
};

export default LoadingProgress;