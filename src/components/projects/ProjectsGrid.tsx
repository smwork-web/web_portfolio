import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard3D from './ProjectCard3D';

const projects = [
  // ML Projects
  {
    title: "Neural Vision Pro",
    description: "State-of-the-art computer vision system using YOLOv5 architecture",
    category: "ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    metrics: {
      accuracy: "98.5%",
      performance: "30 FPS",
      dataset: "1M+ Images"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["PyTorch", "Computer Vision", "YOLO", "Object Detection"]
  },
  {
    title: "DeepSpeech Transformer",
    description: "Advanced speech recognition using transformer architecture",
    category: "ML",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
    metrics: {
      accuracy: "95%",
      latency: "100ms",
      languages: "20+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["Transformers", "ASR", "PyTorch", "NLP"]
  },
  {
    title: "TimeSeriesNet",
    description: "Predictive analytics for financial forecasting",
    category: "ML",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    metrics: {
      accuracy: "92%",
      prediction: "7 days",
      dataPoints: "10M+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["LSTM", "Time Series", "Finance", "TensorFlow"]
  },
  // GenAI Projects
  {
    title: "StyleGAN Artist",
    description: "Advanced GAN model for generating artistic masterpieces",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80",
    metrics: {
      quality: "FID: 4.2",
      generation: "0.5s/img",
      styles: "50+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["GANs", "PyTorch", "Art Generation", "Deep Learning"]
  },
  {
    title: "Text2World",
    description: "Generate 3D environments from textual descriptions",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80",
    metrics: {
      quality: "CLIP: 0.82",
      generation: "2s/scene",
      objects: "1000+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["3D Generation", "CLIP", "Neural Rendering"]
  },
  {
    title: "MusicDiffusion",
    description: "AI music composition using diffusion models",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80",
    metrics: {
      quality: "MOS: 4.5/5",
      generation: "10s/track",
      genres: "15+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["Diffusion Models", "Audio", "PyTorch"]
  },
  // LLM Projects
  {
    title: "LangChain GPT",
    description: "Custom LLM built with advanced prompt engineering",
    category: "LLM",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    metrics: {
      performance: "50ms/query",
      context: "16K tokens",
      memory: "16GB"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["LangChain", "GPT", "NLP", "Transformers"]
  },
  {
    title: "CodePilot Pro",
    description: "AI pair programmer with multi-language support",
    category: "LLM",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
    metrics: {
      accuracy: "94%",
      languages: "20+",
      context: "8K tokens"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["Code Generation", "Transformers", "VSCode"]
  },
  {
    title: "MultiModal Chat",
    description: "Vision-language model for interactive conversations",
    category: "LLM",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80",
    metrics: {
      response: "100ms",
      modalities: "5+",
      languages: "10+"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["Vision-Language", "CLIP", "Transformers"]
  }
] as const;

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <>
      <motion.div
        className="flex justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['All', 'ML', 'GenAI', 'LLM'].map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${category === selectedCategory 
                ? 'bg-blue-500 text-white' 
                : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard3D {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectsGrid;