import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const storyItems = [
    {
      title: "First Meeting",
      date: "Rome, 2019",
      description: "Our eyes met across the crowded Spanish Steps, and we knew something magical was beginning.",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Proposal",
      date: "Santorini, 2023",
      description: "Marco got down on one knee as the sun set over the Aegean Sea, with the white-washed buildings as our witness.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Choosing Tuscany",
      date: "Our Dream",
      description: "We fell in love with the rolling hills, ancient villas, and the promise of celebrating our love where time stands still.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="story" className="py-20 bg-linen-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-terracotta-600 dark:text-terracotta-400 mb-4">
            Our Tuscan Tale
          </h2>
          <div className="w-24 h-1 bg-olive-500 mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-olive-700 dark:text-olive-300 max-w-3xl mx-auto">
            A love story that began in the eternal city and found its perfect setting among the vineyards of Tuscany
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-dancing text-2xl font-bold">{item.title}</div>
                  <div className="font-inter text-sm opacity-90">{item.date}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-inter text-olive-700 dark:text-olive-300 leading-relaxed">
                  {item.description}
                </p>
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
            <blockquote className="font-playfair text-2xl text-olive-700 dark:text-olive-300 italic mb-4">
              "In the heart of Tuscany, where ancient stones whisper tales of love, we begin our forever."
            </blockquote>
            <div className="font-dancing text-xl text-terracotta-600 dark:text-terracotta-400">
              - Isabella & Marco
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;