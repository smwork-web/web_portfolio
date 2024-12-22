import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';
import { HeroSocialLink } from './hero/HeroSocialLink';
import { HeroContent } from './hero/HeroContent';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5
            }
          }
        }}
        className="container mx-auto px-4 z-10 text-center"
      >
        <HeroContent />
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1
            }
          }}
          className="flex justify-center space-x-6"
        >
          <HeroSocialLink
            href="https://github.com"
            icon={Github}
          />
          <HeroSocialLink
            href="https://linkedin.com"
            icon={Linkedin}
          />
          <HeroSocialLink
            href="mailto:contact@example.com"
            icon={Mail}
            external={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;