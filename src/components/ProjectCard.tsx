import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    demoLink?: string;
    githubLink?: string;
    metrics?: {
      accuracy?: string;
      performance?: string;
      dataset?: string;
    };
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative h-[400px] bg-gray-950 rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90"></div>
      </div>
      
      <div className="relative h-full p-6 flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 mb-4">{project.longDescription}</p>
            
            {project.metrics && (
              <div className="grid grid-cols-3 gap-4 mb-4">
                {project.metrics.accuracy && (
                  <div className="text-center">
                    <div className="text-blue-500 font-bold">{project.metrics.accuracy}</div>
                    <div className="text-sm text-gray-500">Accuracy</div>
                  </div>
                )}
                {project.metrics.performance && (
                  <div className="text-center">
                    <div className="text-blue-500 font-bold">{project.metrics.performance}</div>
                    <div className="text-sm text-gray-500">Performance</div>
                  </div>
                )}
                {project.metrics.dataset && (
                  <div className="text-center">
                    <div className="text-blue-500 font-bold">{project.metrics.dataset}</div>
                    <div className="text-sm text-gray-500">Dataset Size</div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex space-x-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;