import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  proficiency: number;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, proficiency, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative p-6 bg-black rounded-xl border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-xl" />
        
        <div className="flex items-start space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
            <Icon className="w-12 h-12 text-blue-500 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 mb-4">{description}</p>
            
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
            <div className="mt-2 text-sm text-blue-400">
              Proficiency: {proficiency}%
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;