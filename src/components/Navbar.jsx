import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode, FiLayers, FiShield, FiMessageCircle } from 'react-icons/fi';
import { RiRocketLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <RiRocketLine /> },
    { name: 'About', href: '#about', icon: <BsPerson /> },
    { name: 'Projects', href: '#projects', icon: <FiLayers /> },
    { name: 'Skills', href: '#skills', icon: <FiCode /> },
    { name: 'Experience', href: '#experience', icon: <FiShield /> },
    { name: 'Contact', href: '#contact', icon: <FiMessageCircle /> },
  ];

  // Variants for staggered animations
  const navContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3' 
          : 'py-6'
      }`}
    >
      <motion.div 
        className={`absolute inset-0 backdrop-blur-md ${
          scrolled 
            ? 'bg-dark/70 shadow-lg' 
            : 'bg-transparent'
        } transition-all duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <div className="container-wrapper relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="group flex items-center"
          >
            <div className="relative mr-2 w-10 h-10">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-lg"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <div className="absolute inset-0.5 bg-dark flex items-center justify-center rounded-md text-white font-bold">M</div>
            </div>
            <div className="relative overflow-hidden">
              <motion.span 
                className="text-xl font-display font-semibold text-white"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0, transition: { duration: 0.1 } }}
              >
                Mahdi
              </motion.span>
              <motion.span 
                className="absolute inset-0 text-xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-info"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              >
                Mahdi
              </motion.span>
            </div>
            <span className="text-secondary font-bold text-xl">.</span>
          </a>

          {/* Desktop Nav */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/10 p-1.5 shadow-xl">
              <motion.ul 
                className="flex items-center"
                variants={navContainerVariants}
                initial="hidden"
                animate="show"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li key={item.name} variants={navItemVariants}>
                      <a
                        href={item.href}
                        className={`flex items-center px-3 py-2 mx-1 rounded-full relative group transition-all duration-300 ${
                          isActive 
                            ? 'text-white bg-white/20' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="mr-1.5">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div 
                            layoutId="activeNavIndicator"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 -z-10"
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
                <li className="ml-1">
                  <ThemeToggle />
                </li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Mobile Nav Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle className="mr-2" />
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors shadow-lg"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 backdrop-blur-xl bg-dark/90 z-40 overflow-hidden"
          >
            <motion.ul 
              className="container-wrapper py-8 space-y-3"
              variants={navContainerVariants}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li key={item.name} variants={navItemVariants}>
                    <a
                      href={item.href}
                      className={`flex items-center px-6 py-3.5 rounded-xl transition-colors ${
                        isActive 
                          ? 'bg-gradient-to-r from-secondary/20 to-accent/20 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`p-2.5 rounded-lg mr-4 ${isActive ? 'bg-white/10 text-secondary' : 'bg-white/5 text-gray-400'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;