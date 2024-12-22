import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play } from 'lucide-react';

interface ProjectMetrics {
  accuracy?: string;
  performance?: string;
  dataset?: string;
  modelSize?: string;
}

interface ProjectProps {
  title: string;
  description: string;
  category: 'ML' | 'GenAI' | 'LLM';
  image: string;
  metrics: ProjectMetrics;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const ProjectCard3D: React.FC<ProjectProps> = ({
  title,
  description,
  category,
  image,
  metrics,
  demoUrl,
  githubUrl,
  tags
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[500px] w-full perspective-1000"
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <AnimatePresence initial={false}>
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute inset-0 bg-gray-900 rounded-xl overflow-hidden"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
              
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="space-y-4">
                  <span className={`px-3 py-1 rounded-full text-sm inline-block
                    ${category === 'ML' ? 'bg-blue-500/20 text-blue-400' :
                      category === 'GenAI' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-green-500/20 text-green-400'}`}
                  >
                    {category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute inset-0 bg-gray-900 rounded-xl p-6 border border-blue-500/20"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="bg-black/50 p-4 rounded-lg">
                    <div className="text-blue-400 font-bold">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto flex gap-4">
                {demoUrl && (
                  <motion.a
                    href={demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                    Live Demo
                  </motion.a>
                )}
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard3D;