import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-xl text-blue-400 mb-6">
            Machine Learning & Gen AI Engineer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg">
              Hi, I'm <span className="text-blue-400 font-bold">Adarsh S M</span>, a passionate Machine Learning and Generative AI Engineer with expertise in developing cutting-edge AI solutions.
            </p>
            <p className="text-lg">
              I specialize in building and deploying large language models, computer vision systems, and generative AI applications that push the boundaries of what's possible with artificial intelligence.
            </p>
            <p className="text-lg">
              My work focuses on creating innovative solutions that combine the latest advancements in ML/AI with practical business applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Brain, label: "Deep Learning", value: "Expert" },
              { icon: Network, label: "LLMs", value: "Advanced" },
              { icon: Cpu, label: "MLOps", value: "Proficient" },
              { icon: Brain, label: "Gen AI", value: "Expert" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl border border-blue-900/20"
              >
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-white font-bold mb-2">{item.label}</h3>
                <p className="text-blue-400">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;