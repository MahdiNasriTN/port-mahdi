import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronsDown } from 'react-icons/fi';
import Button from './ui/Button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Get mouse position relative to the hero section
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update state with relative positions from -0.5 to 0.5
      setMousePosition({
        x: (x / rect.width - 0.5) * 2,
        y: (y / rect.height - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Text to be typed
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building digital experiences that impress";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      ref={heroRef} 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[40%] bg-gradient-to-r from-primary-800/30 to-primary-600/40 rounded-full blur-[100px] animate-aurora"></div>
            <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-l from-secondary/30 to-secondary-700/40 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] bg-gradient-to-tr from-accent/30 to-accent-light/40 rounded-full blur-[100px] animate-aurora animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dots opacity-20 z-20"></div>

      {/* Content */}
      <div className="container-wrapper relative z-30">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          style={{ y, opacity }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 relative"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-white">Full Stack JavaScript Developer</span>
            </div>
          </motion.div>
          
          {/* Main heading with 3D effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
            style={{
              perspective: '1000px',
              perspectiveOrigin: 'center',
            }}
          >
            <motion.h1
              className="heading-xl mb-4 text-white font-display font-bold drop-shadow-text tracking-tight"
              style={{
                rotateX: mousePosition.y * -5,
                rotateY: mousePosition.x * 5,
              }}
              transition={{ type: 'spring', damping: 15, stiffness: 150 }}
            >
              Hi, I'm <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-info animate-gradient bg-size-200">Mahdi Nasri</span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-accent to-info rounded-full"></span>
              </span>
            </motion.h1>
          </motion.div>
          
          {/* Typewriter text effect */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl mb-8"
          >
            {displayText}<span className="animate-pulse">|</span>
          </motion.h2>
          
          {/* Animated buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button 
              primary 
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary-700 hover:from-secondary-600 hover:to-secondary-800 shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 text-white border-none rounded-xl"
            >
              View My Work <FiArrowRight className="ml-2" />
            </Button>
            <Button 
              outline 
              href="#contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300 rounded-xl"
            >
              Get In Touch
            </Button>
            <Button 
              as="a" 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="!p-0 !bg-transparent !shadow-none !border-none text-gray-300 hover:text-white transition-colors"
            >
              <FiDownload className="mr-2" /> Download Resume
            </Button>
          </motion.div>
          
          {/* Animated social links */}
          <motion.div 
            className="flex justify-center mt-4 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {[
              { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/MahdiNasriTN", label: "GitHub" },
              { icon: <FiLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mahdi-nasri-b9378b23a/", label: "LinkedIn" },
              { icon: <FiMail className="w-5 h-5" />, href: "mailto:mahdi.nasri123@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white group-hover:text-secondary transition-colors">{social.icon}</span>
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-white/40 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
                ></motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* 3D Rotating Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex justify-center"
          style={{ y, opacity }}
        >
          <motion.div 
            className="relative w-full max-w-lg p-0.5 rounded-lg overflow-hidden"
            style={{
              rotateX: mousePosition.y * 10,
              rotateY: mousePosition.x * -10,
              transformStyle: 'preserve-3d',
              transformPerspective: '1000px'
            }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary animate-gradient bg-size-200"></div>
            <div className="relative bg-dark-lighter text-gray-200 p-6 rounded-lg font-code text-sm backdrop-blur-md">
              <div className="flex items-center mb-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-danger"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-xs text-gray-400 ml-2">portfolio.js</span>
              </div>
              <pre className="text-xs md:text-sm">
              <span className="text-info">const</span> <span className="text-secondary">developer</span> = {`{`}
                <span className="text-accent">name</span>: <span className="text-success">'Mahdi Nasri'</span>,
                <span className="text-accent">title</span>: <span className="text-success">'Full Stack JS Developer'</span>,
                <span className="text-accent">skills</span>: [<span className="text-success">'React'</span>, <span className="text-success">'Node.js'</span>, <span className="text-success">'MongoDB'</span>],
                <span className="text-accent">passion</span>: <span className="text-success">'Building amazing web apps'</span>,
                <span className="text-info">contact</span>: <span className="text-warning">()</span> <span className="text-info">connect</span>()
              {`}`};
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-white/70 mb-2">Scroll to explore</span>
          <FiChevronsDown className="text-secondary text-xl animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;