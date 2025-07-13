import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import ThingsToDo from './components/ThingsToDo';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setLoading(false);
    };
    checkAuth();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linen-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-linen-50'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <OurStory />
              <WeddingInfo />
              <Gallery />
              <RSVP />
              <ThingsToDo />
              <Registry />
              <Guestbook />
            </main>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;