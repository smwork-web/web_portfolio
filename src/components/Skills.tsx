import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, Database, Network, LineChart } from 'lucide-react';

const skills = [
  {
    name: "PyTorch",
    icon: Brain,
    category: "Deep Learning"
  },
  {
    name: "TensorFlow",
    icon: Network,
    category: "Deep Learning"
  },
  {
    name: "LangChain",
    icon: Bot,
    category: "LLM"
  },
  {
    name: "Hugging Face",
    icon: Bot,
    category: "LLM"
  },
  {
    name: "scikit-learn",
    icon: LineChart,
    category: "ML"
  },
  {
    name: "OpenAI API",
    icon: Brain,
    category: "LLM"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                
                <div className="relative p-6 bg-gray-900 rounded-xl border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-4">
                    <Icon className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;