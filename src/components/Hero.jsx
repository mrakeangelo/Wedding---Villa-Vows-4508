import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Falling Olive Leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-olive-500 text-2xl opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
          animate={{
            y: ['-10vh', '110vh'],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5
          }}
        >
          🍃
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-dancing text-6xl md:text-8xl font-bold mb-4 text-shadow-lg">
            Isabella & Marco
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-playfair text-xl md:text-2xl mb-8 text-linen-100"
        >
          Celebrating Love in Tuscany
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block border border-white/30"
        >
          <div className="font-inter text-lg md:text-xl mb-2 text-linen-100">
            September 15, 2024
          </div>
          <div className="font-inter text-base text-linen-200">
            Villa Bellavista, Tuscany, Italy
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-full font-inter font-medium transition-colors shadow-lg"
          >
            Our Tuscan Tale
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;