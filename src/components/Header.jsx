import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon, FiMenu, FiX } = FiIcons;

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our Story', href: '#story' },
    { label: 'Wedding Info', href: '#wedding-info' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
    { label: 'Things to Do', href: '#things-to-do' },
    { label: 'Registry', href: '#registry' },
    { label: 'Guestbook', href: '#guestbook' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-linen-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-dancing text-2xl font-bold text-terracotta-600 dark:text-terracotta-400"
          >
            Villa Vows
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-olive-700 dark:text-olive-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-inter text-sm"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-linen-100 dark:bg-gray-800 text-olive-700 dark:text-olive-300 hover:bg-linen-200 dark:hover:bg-gray-700 transition-colors"
            >
              <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-linen-100 dark:bg-gray-800 text-olive-700 dark:text-olive-300"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-linen-200 dark:border-gray-700 pt-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-olive-700 dark:text-olive-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-inter"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;