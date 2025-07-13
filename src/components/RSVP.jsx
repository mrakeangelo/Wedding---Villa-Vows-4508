import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCheck, FiX } = FiIcons;

const RSVP = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-terracotta-600 text-white rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center">
              <SafeIcon icon={FiHeart} className="w-16 h-16" />
            </div>
            <h2 className="font-dancing text-5xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
              Grazie Mille!
            </h2>
            <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 mb-8">
              Thank you for your response. We can't wait to celebrate with you in beautiful Tuscany!
            </p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl"
            >
              🍷
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            RSVP - Sí, con Amore
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            Please let us know if you'll be joining us for our special day in Tuscany
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-linen-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-white dark:bg-gray-700 text-olive-700 dark:text-olive-300"
                />
              </div>
              <div>
                <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-white dark:bg-gray-700 text-olive-700 dark:text-olive-300"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-4">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.attendance === 'yes' 
                      ? 'border-terracotta-500 bg-terracotta-50 dark:bg-terracotta-900/20' 
                      : 'border-linen-200 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-terracotta-600 mr-2" />
                  <span className="font-inter font-medium text-olive-700 dark:text-olive-300">
                    Yes, I'll be there!
                  </span>
                </motion.label>
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.attendance === 'no' 
                      ? 'border-terracotta-500 bg-terracotta-50 dark:bg-terracotta-900/20' 
                      : 'border-linen-200 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiX} className="w-5 h-5 text-terracotta-600 mr-2" />
                  <span className="font-inter font-medium text-olive-700 dark:text-olive-300">
                    Sorry, can't make it
                  </span>
                </motion.label>
              </div>
            </div>

            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-white dark:bg-gray-700 text-olive-700 dark:text-olive-300"
                    >
                      <option value="1">Just me</option>
                      <option value="2">Me + 1 guest</option>
                      <option value="3">Me + 2 guests</option>
                      <option value="4">Me + 3 guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                      Dietary Restrictions
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      placeholder="e.g., vegetarian, gluten-free"
                      className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-white dark:bg-gray-700 text-olive-700 dark:text-olive-300"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mb-8">
              <label className="block font-inter font-medium text-olive-700 dark:text-olive-300 mb-2">
                Special Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Share your excitement or any special requests..."
                className="w-full px-4 py-3 border border-linen-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent bg-white dark:bg-gray-700 text-olive-700 dark:text-olive-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-inter font-medium py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Send RSVP with Love
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;