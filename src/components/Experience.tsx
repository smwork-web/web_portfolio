import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, Database } from 'lucide-react';

const experiences = [
  {
    title: "Senior ML Engineer",
    company: "AI Tech Solutions",
    period: "2022 - Present",
    description: "Leading the development of large language models and implementing cutting-edge ML solutions.",
    icon: Brain,
    color: "blue"
  },
  {
    title: "AI Research Engineer",
    company: "Data Innovations Lab",
    period: "2020 - 2022",
    description: "Conducted research in generative AI and developed novel deep learning architectures.",
    icon: Bot,
    color: "purple"
  },
  {
    title: "ML Engineer",
    company: "Tech Innovators",
    period: "2018 - 2020",
    description: "Built and deployed production-ready ML models for computer vision applications.",
    icon: Code,
    color: "green"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-end md:pr-32' : 'justify-start md:pl-32'
                }`}
              >
                <div className="w-full md:w-1/2 bg-gray-900 rounded-xl p-6 border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-blue-500/10">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2">{exp.description}</p>
                  <span className="text-sm text-blue-500">{exp.period}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;