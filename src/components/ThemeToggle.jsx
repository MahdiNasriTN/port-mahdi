import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import ThemeContext from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden backdrop-blur-lg border border-white/20 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isDarkMode 
            ? "linear-gradient(to right, rgba(142, 68, 173, 0.2), rgba(41, 128, 185, 0.2))" 
            : "linear-gradient(to right, rgba(241, 196, 15, 0.2), rgba(230, 126, 34, 0.2))"
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Sun and Moon Icons with magic animations */}
      <div className="relative w-6 h-6">
        <motion.div
          animate={{
            rotate: isDarkMode ? 45 : 0,
            opacity: isDarkMode ? 0 : 1,
            y: isDarkMode ? -30 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          className="absolute inset-0 flex items-center justify-center text-yellow-300"
        >
          <FiSun size={18} />
        </motion.div>
        <motion.div
          animate={{
            rotate: isDarkMode ? 0 : -45,
            opacity: isDarkMode ? 1 : 0,
            y: isDarkMode ? 0 : 30
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          className="absolute inset-0 flex items-center justify-center text-primary-600"
        >
          <FiMoon size={18} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;