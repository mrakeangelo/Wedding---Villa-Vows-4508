import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiMapPin, FiSun, FiCloud, FiHeart } = FiIcons;

const WeddingInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const schedule = [
    {
      time: "4:00 PM",
      event: "Ceremony",
      location: "Villa Gardens",
      description: "Exchange of vows under the ancient olive trees"
    },
    {
      time: "5:30 PM",
      event: "Cocktail Hour",
      location: "Terrace Overlooking Vineyards",
      description: "Aperitivo with local wines and Italian delicacies"
    },
    {
      time: "7:00 PM",
      event: "Reception Dinner",
      location: "Villa Courtyard",
      description: "Traditional Tuscan feast under the stars"
    },
    {
      time: "10:00 PM",
      event: "Dancing & Celebration",
      location: "Villa Ballroom",
      description: "Live music and dancing until dawn"
    }
  ];

  const travelInfo = [
    {
      icon: FiMapPin,
      title: "Getting There",
      content: "Villa Bellavista is 45 minutes from Florence Airport. Shuttle service available."
    },
    {
      icon: FiHeart,
      title: "Accommodation",
      content: "We've reserved rooms at nearby hotels. See our recommendations below."
    },
    {
      icon: FiSun,
      title: "Weather",
      content: "September in Tuscany is perfect - warm days, cool evenings. Bring a light jacket."
    }
  ];

  return (
    <section id="wedding-info" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            Wedding Day Details
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            Join us for a day of love, laughter, and la dolce vita in the heart of Tuscany
          </p>
        </motion.div>

        {/* Schedule */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-3xl font-bold text-olive-700 dark:text-olive-300 mb-8 text-center"
          >
            Schedule of Events
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-linen-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-600 text-white rounded-full p-3 flex-shrink-0">
                    <SafeIcon icon={FiClock} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-inter font-bold text-terracotta-600 dark:text-terracotta-400 text-lg">
                      {item.time}
                    </div>
                    <div className="font-playfair text-xl font-bold text-olive-700 dark:text-olive-300 mb-1">
                      {item.event}
                    </div>
                    <div className="font-inter text-sm text-olive-600 dark:text-olive-400 mb-2">
                      {item.location}
                    </div>
                    <p className="font-inter text-olive-700 dark:text-olive-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Travel Information */}
        <div className="grid md:grid-cols-3 gap-8">
          {travelInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="text-center bg-linen-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="bg-terracotta-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={item.icon} className="w-8 h-8" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-olive-700 dark:text-olive-300 mb-3">
                {item.title}
              </h4>
              <p className="font-inter text-olive-700 dark:text-olive-300">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-terracotta-50 to-olive-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8"
        >
          <div className="text-center">
            <h3 className="font-dancing text-4xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
              Villa Bellavista
            </h3>
            <p className="font-inter text-olive-700 dark:text-olive-300 max-w-2xl mx-auto mb-6">
              A 16th-century villa nestled in the rolling hills of Chianti, surrounded by vineyards 
              and olive groves. This historic venue offers breathtaking views and timeless elegance.
            </p>
            <div className="font-inter text-olive-600 dark:text-olive-400">
              Via della Vigna, 123<br />
              53017 Radda in Chianti, Italy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;