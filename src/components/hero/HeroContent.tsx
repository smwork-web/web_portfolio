import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export const HeroContent = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }
        }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />
        <Brain className="w-24 h-24 mx-auto text-blue-400 relative" />
      </motion.div>
      
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
        }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
          ML & GenAI Engineer
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
          Pioneering the future of AI with cutting-edge machine learning models and generative systems. 
          Specializing in large language models, computer vision, and neural architectures for next-generation AI solutions.
        </p>
      </motion.div>
    </>
  );
};