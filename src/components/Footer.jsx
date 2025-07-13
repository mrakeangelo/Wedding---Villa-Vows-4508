import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMapPin, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-800 dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Wedding Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="font-dancing text-3xl font-bold text-terracotta-400 mb-4">
              Isabella & Marco
            </h3>
            <div className="space-y-2 text-linen-200">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span className="font-inter text-sm">September 15, 2024</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span className="font-inter text-sm">Villa Bellavista, Tuscany</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="font-playfair text-lg font-bold text-linen-100 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'Our Story', href: '#story' },
                { label: 'Wedding Info', href: '#wedding-info' },
                { label: 'RSVP', href: '#rsvp' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Registry', href: '#registry' },
                { label: 'Guestbook', href: '#guestbook' }
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block font-inter text-sm text-linen-200 hover:text-terracotta-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="font-playfair text-lg font-bold text-linen-100 mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-linen-200">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span className="font-inter text-sm">isabella.marco@wedding.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span className="font-inter text-sm">+39 123 456 7890</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-olive-700 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-terracotta-400" />
            <span className="font-dancing text-xl text-terracotta-400">
              Made with love in Tuscany
            </span>
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-terracotta-400" />
          </div>
          
          <p className="font-inter text-sm text-linen-300 mb-2">
            Villa Vows – A European Destination Wedding Template by Mrake Agency
          </p>
          
          <p className="font-inter text-xs text-linen-400">
            © {currentYear} Villa Vows. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;