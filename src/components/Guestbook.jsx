import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { supabase } from '../lib/supabase';

const { FiHeart, FiUser, FiMessageSquare } = FiIcons;

const Guestbook = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah & David",
      message: "We're so excited to celebrate your love in beautiful Tuscany! Can't wait to dance under the stars with you both. ❤️",
      date: "2024-08-15",
      location: "New York"
    },
    {
      id: 2,
      name: "Maria Rossi",
      message: "Che bello! What a perfect setting for your special day. Sending love from Roma! 🇮🇹",
      date: "2024-08-14",
      location: "Rome, Italy"
    },
    {
      id: 3,
      name: "James & Emily",
      message: "Already planning our outfits for your Tuscan wedding! This is going to be magical. Love you both! 💕",
      date: "2024-08-13",
      location: "London"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newMessage = {
      id: messages.length + 1,
      name: formData.name,
      message: formData.message,
      location: formData.location,
      date: new Date().toISOString().split('T')[0]
    };

    setMessages([newMessage, ...messages]);
    setFormData({ name: '', message: '', location: '' });
  };

  return (
    <section id="guestbook" className="py-20 bg-linen-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            Our Travel Journal
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            Leave us a note in our travel journal - we'd love to hear from you before our big day!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg mb-12"
          >
            <h3 className="font-playfair text-2xl font-bold text-olive-700 dark:text-olive-300 mb-6 text-center">
              Leave a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-linen-50 dark:bg-gray-800 text-olive-700 dark:text-olive-300"
                  />
                </div>
                <div>
                  <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                    Your Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., New York, USA"
                    className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-linen-50 dark:bg-gray-800 text-olive-700 dark:text-olive-300"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Share your excitement, memories, or well wishes..."
                  className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-linen-50 dark:bg-gray-800 text-olive-700 dark:text-olive-300"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-inter font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Add to Journal
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-terracotta-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 dark:bg-terracotta-900/30 p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={FiUser} className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-playfair text-lg font-bold text-olive-700 dark:text-olive-300">
                        {msg.name}
                      </h4>
                      {msg.location && (
                        <span className="text-sm text-olive-500 dark:text-olive-400">
                          from {msg.location}
                        </span>
                      )}
                      <span className="text-sm text-olive-400 dark:text-olive-500">
                        {new Date(msg.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="font-inter text-olive-700 dark:text-olive-300 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center space-x-2 text-terracotta-600 dark:text-terracotta-400">
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
              <span className="font-inter text-sm">
                {messages.length} messages of love
              </span>
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;