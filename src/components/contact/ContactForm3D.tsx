import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader } from 'lucide-react';

const ContactForm3D = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormState('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-xl" />
      
      <motion.div
        className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-xl border border-blue-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <motion.input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <motion.input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <motion.textarea
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </div>
          
          <motion.button
            type="submit"
            disabled={formState !== 'idle'}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {formState === 'idle' && (
                <motion.div
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.div>
              )}
              
              {formState === 'submitting' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Loader size={18} className="animate-spin" />
                  <span>Sending...</span>
                </motion.div>
              )}
              
              {formState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Check size={18} />
                  <span>Message Sent!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm3D;