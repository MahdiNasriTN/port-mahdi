import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/MahdiNasriTN', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mahdi-nasri-b9378b23a/', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:mahdi.nasri123@gmail.com', label: 'Email' }
  ];
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <footer className="bg-white dark:bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      
      <div className="container-wrapper py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="md:col-span-2">
            <motion.a 
              href="#home" 
              className="text-3xl font-bold inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary">Mahdi</span>
              <span className="text-secondary">.</span>
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Building seamless digital experiences with code, passion, and purpose. Let's work together to bring your ideas to life.
            </p>
            
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">More</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            © {year} Mahdi Nasri. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-gray-500 dark:text-gray-500">
            Designed and built with 
            <FiHeart className="text-red-500 mx-1.5" /> 
            by Mahdi Nasri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;