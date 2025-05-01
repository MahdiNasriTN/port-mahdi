import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FiMail, FiMessageSquare, FiSend, FiMapPin, FiLinkedin, 
  FiGithub, FiUser, FiFileText, FiArrowRight, FiCheckCircle, 
  FiClock, FiPhone
} from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';

const ContactForm = ({ onSubmit, isSubmitting, submitStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focused, setFocused] = useState(null);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const inputVariants = {
    focused: { scale: 0.98, borderColor: "rgba(var(--primary-rgb), 1)" },
    blurred: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
  };
  
  return (
    <motion.div 
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-lg opacity-70 -z-10"></div>
      
      {/* Form header with pulsing indicator */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <FiMessageSquare className="text-primary text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Send a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">I'll respond within 24 hours</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
          <span className="text-xs font-medium text-gray-500">Online Now</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label className="flex items-center text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <FiUser className="mr-2 text-primary" /> 
              <span>Your Name</span>
            </label>
            <motion.div
              variants={inputVariants}
              animate={focused === 'name' ? 'focused' : 'blurred'}
              className="relative"
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3.5 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-dark-lighter border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
                placeholder="John Doe"
                required
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-opacity duration-300 blur-md -z-10 group-hover:opacity-100"></div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label className="flex items-center text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <FiMail className="mr-2 text-primary" /> 
              <span>Your Email</span>
            </label>
            <motion.div
              variants={inputVariants}
              animate={focused === 'email' ? 'focused' : 'blurred'}
              className="relative"
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3.5 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-dark-lighter border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
                placeholder="johndoe@example.com"
                required
              />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label className="flex items-center text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            <FiFileText className="mr-2 text-primary" /> 
            <span>Subject</span>
          </label>
          <motion.div
            variants={inputVariants}
            animate={focused === 'subject' ? 'focused' : 'blurred'}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocused('subject')}
              onBlur={() => setFocused(null)}
              className="w-full px-4 py-3.5 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-dark-lighter border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
              placeholder="Project Inquiry / Job Opportunity"
              required
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <label className="flex items-center text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            <FiMessageSquare className="mr-2 text-primary" /> 
            <span>Your Message</span>
          </label>
          <motion.div
            variants={inputVariants}
            animate={focused === 'message' ? 'focused' : 'blurred'}
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              rows={5}
              className="w-full px-4 py-3.5 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-dark-lighter border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none shadow-sm"
              placeholder="Tell me about your project, ideas, or any questions you may have..."
              required
            ></textarea>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-2"
        >
          <Button 
            primary 
            type="submit"
            className="w-full py-3.5 text-base font-medium rounded-xl"
            disabled={isSubmitting}
          >
            <FiSend className="mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800/30 flex items-center"
              >
                <FiCheckCircle className="text-xl mr-3 text-green-500" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </form>
    </motion.div>
  );
};

const ContactInfo = () => {
  const infoRef = useRef(null);
  const isInView = useInView(infoRef, { once: true, amount: 0.3 });
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/mahdi-nasri-b9378b23a/",
      color: "from-[#0077B5]/20 to-[#0A66C2]/10",
      textColor: "text-[#0077B5]",
      hoverColor: "hover:bg-[#0077B5]/20"
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/MahdiNasriTN",
      color: "from-gray-200/80 to-gray-100/30 dark:from-gray-800 dark:to-gray-900",
      textColor: "text-gray-700 dark:text-gray-300",
      hoverColor: "hover:bg-gray-200 dark:hover:bg-gray-700"
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:mahdi.nasri123@gmail.com",
      color: "from-primary/20 to-accent/10",
      textColor: "text-primary",
      hoverColor: "hover:bg-primary/20"
    }
  ];
  
  return (
    <motion.div 
      ref={infoRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
              <FiMapPin className="text-secondary text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Let's Connect</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-14">
            I'm excited to hear about your project. Whether you have a question or just want to say hello, I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="space-y-4 pt-4">
          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            href="mailto:contact@mahdinasri.dev"
            className="flex p-5 bg-gradient-to-br from-white to-gray-50 dark:from-dark-lighter dark:to-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group"
          >
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 text-primary rounded-xl mr-4 group-hover:scale-110 transition-transform">
              <FiMail className="text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                mahdi.nasri123@gmail.com
              </p>
              <div className="mt-2 text-xs text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Write me</span>
                <FiArrowRight className="ml-1 text-xs" />
              </div>
            </div>
          </motion.a>
          
          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            href="tel:+21612345678"
            className="flex p-5 bg-gradient-to-br from-white to-gray-50 dark:from-dark-lighter dark:to-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group"
          >
            <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary rounded-xl mr-4 group-hover:scale-110 transition-transform">
              <FiPhone className="text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                +216 44 772 168
              </p>
              <div className="mt-2 text-xs text-secondary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Call me</span>
                <FiArrowRight className="ml-1 text-xs" />
              </div>
            </div>
          </motion.a>
          
          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            href="https://www.google.com/maps/dir//34.6767476,10.6948684/@34.6777667,10.6932483,927m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-5 bg-gradient-to-br from-white to-gray-50 dark:from-dark-lighter dark:to-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group"
          >
            <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/5 text-accent rounded-xl mr-4 group-hover:scale-110 transition-transform">
              <FiMapPin className="text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Sfax, Tunisia
              </p>
              <div className="mt-2 text-xs text-accent flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View on map</span>
                <FiArrowRight className="ml-1 text-xs" />
              </div>
            </div>
          </motion.a>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mr-4">
              <FiClock className="text-accent text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Availability</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Monday - Friday, 8:00 AM - 5:00 PM CET
              </p>
            </div>
          </div>
          
          <div className="pl-14 space-y-3">
            <h4 className="font-medium text-gray-800 dark:text-white text-sm">Connect on Socials</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gradient-to-br ${link.color} ${link.textColor} rounded-xl ${link.hoverColor} transition-all duration-300 transform hover:scale-110 shadow-sm`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  
  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss how we can work together to bring your ideas to life"
      className="bg-gradient-to-b from-transparent to-gray-50/30 dark:to-dark-lighter/20"
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Background glow effects */}
          <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] opacity-60"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] opacity-60"></div>
          </div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Top design accent */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact info section */}
              <div className="bg-gray-50/70 dark:bg-dark/70 p-8 md:p-12">
                <ContactInfo />
              </div>
              
              {/* Form section */}
              <div className="bg-white/70 dark:bg-dark-lighter/70 p-8 md:p-12">
                <ContactForm 
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                />
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="h-6 w-1 bg-gradient-to-b from-secondary to-transparent rounded-full mx-auto"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;