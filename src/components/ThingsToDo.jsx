import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiCamera, FiCoffee, FiSun } = FiIcons;

const ThingsToDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const activities = [
    {
      icon: FiMapPin,
      title: "Vineyard Tours",
      description: "Explore the famous Chianti vineyards and taste world-class wines",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half day",
      category: "Wine & Dine"
    },
    {
      icon: FiCamera,
      title: "Historic Siena",
      description: "Visit the medieval city center and iconic Piazza del Campo",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Full day",
      category: "Culture"
    },
    {
      icon: FiCoffee,
      title: "Tuscan Cooking Class",
      description: "Learn to make authentic pasta and traditional Tuscan dishes",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 hours",
      category: "Culinary"
    },
    {
      icon: FiSun,
      title: "San Gimignano",
      description: "Explore the medieval towers and charming cobblestone streets",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half day",
      category: "Sightseeing"
    },
    {
      icon: FiMapPin,
      title: "Florence Day Trip",
      description: "Visit the Renaissance capital and see world-famous art",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Full day",
      category: "Culture"
    },
    {
      icon: FiSun,
      title: "Countryside Hike",
      description: "Walk through olive groves and enjoy panoramic views",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 hours",
      category: "Nature"
    }
  ];

  return (
    <section id="things-to-do" className="py-20 bg-linen-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            Explore Tuscany
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            Make the most of your time in Tuscany with these unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-terracotta-600 text-white px-3 py-1 rounded-full text-sm font-inter">
                    {activity.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 text-olive-700 dark:text-olive-300 p-2 rounded-full">
                    <SafeIcon icon={activity.icon} className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-olive-700 dark:text-olive-300 mb-2">
                  {activity.title}
                </h3>
                <p className="font-inter text-olive-600 dark:text-olive-400 mb-4">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-terracotta-600 dark:text-terracotta-400 font-medium">
                    Duration: {activity.duration}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-4 py-2 rounded-lg font-inter text-sm transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="font-dancing text-3xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
              Need Help Planning?
            </h3>
            <p className="font-inter text-olive-700 dark:text-olive-300 mb-6">
              We're happy to help you plan your perfect Tuscan adventure. Contact us for 
              personalized recommendations and booking assistance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-full font-inter font-medium transition-colors"
            >
              Get Travel Tips
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsToDo;