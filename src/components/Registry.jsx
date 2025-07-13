import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCamera, FiMapPin, FiGift } = FiIcons;

const Registry = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const registryItems = [
    {
      icon: FiHeart,
      title: "Honeymoon Fund",
      description: "Help us create magical memories on our romantic getaway to the Amalfi Coast",
      goal: "$3,000",
      raised: "$1,250",
      percentage: 42,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiCamera,
      title: "Professional Photography",
      description: "Capture our wedding day and Tuscan adventure with beautiful photographs",
      goal: "$2,500",
      raised: "$890",
      percentage: 36,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiMapPin,
      title: "Vineyard Tours",
      description: "Explore the finest wineries and vineyards throughout Tuscany",
      goal: "$800",
      raised: "$520",
      percentage: 65,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiGift,
      title: "Home Together Fund",
      description: "Help us start our new life together with essentials for our first home",
      goal: "$1,500",
      raised: "$340",
      percentage: 23,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="registry" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            Travel Keepsake Fund
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            Your presence is the greatest gift, but if you'd like to contribute to our journey, 
            we'd be honored by your support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-linen-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full mb-2">
                    <SafeIcon icon={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-inter text-olive-700 dark:text-olive-300 mb-4">
                  {item.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-sm text-olive-600 dark:text-olive-400">
                      Raised: {item.raised}
                    </span>
                    <span className="font-inter text-sm text-olive-600 dark:text-olive-400">
                      Goal: {item.goal}
                    </span>
                  </div>
                  <div className="w-full bg-linen-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 h-2 rounded-full"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <span className="font-inter text-sm text-terracotta-600 dark:text-terracotta-400 font-medium">
                      {item.percentage}% funded
                    </span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-inter font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Contribute with Love
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-terracotta-50 to-olive-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-dancing text-3xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
              A Note of Gratitude
            </h3>
            <p className="font-inter text-olive-700 dark:text-olive-300 mb-6">
              We are so grateful for your love and support as we begin this new chapter. 
              Your presence at our wedding is truly the greatest gift we could ask for.
            </p>
            <div className="font-dancing text-xl text-terracotta-600 dark:text-terracotta-400">
              With all our love, Isabella & Marco
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;