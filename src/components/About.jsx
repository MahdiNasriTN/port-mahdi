import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { FiCode, FiBook, FiUser, FiAward, FiArrowRight } from 'react-icons/fi';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const highlights = [
    {
      icon: <FiCode />,
      title: "MERN Stack Expert",
      description: "Building robust applications with MongoDB, Express, React, and Node.js",
      color: "from-primary-600/20 to-primary-400/5"
    },
    {
      icon: <FiBook />,
      title: "Programming Instructor",
      description: "Passionate about sharing knowledge and mentoring future developers",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <FiUser />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, efficient solutions",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: <FiAward />,
      title: "Self Learner",
      description: "Continuously expanding my skills and staying current with technologies",
      color: "from-info/20 to-info/5"
    }
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know more about me and my journey as a developer"
      className="relative overflow-hidden"
    >
      {/* Gorgeous decorative background elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] opacity-70"></div>
        <motion.div 
          className="absolute top-1/4 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-[50px]"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        {/* Fixed dot pattern instead of grid */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '20px 20px' 
             }}>
        </div>
      </div>

      <div ref={sectionRef} className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Journey Column */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-light-card dark:bg-dark-card backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            {/* Enhanced header with visual accent */}
            <div className="relative h-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 flex items-center px-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary"></div>
              <h3 className="text-xl font-semibold">My Journey</h3>
            </div>
            
            {/* Content with elegant styling */}
            <div className="p-6 space-y-6 text-gray-700 dark:text-gray-300">
              <div className="relative">
                <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-secondary/50 via-primary/30 to-transparent rounded-full"></div>
                <p className="pl-4">
                  I'm a passionate Full Stack JavaScript Developer specializing in building modern web applications 
                  with the MERN stack. With experience in both frontend and backend technologies, I create 
                  seamless digital experiences that combine beautiful interfaces with robust functionality.
                </p>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <FiBook className="text-secondary" />
                  </div>
                </div>
                <p>
                  As an instructor at <span className="font-medium text-secondary dark:text-secondary">GOMYCODE</span>, 
                  I've had the privilege of sharing my knowledge and helping aspiring 
                  developers start their coding journey. Teaching has sharpened my understanding of core concepts 
                  and improved my ability to communicate complex technical ideas clearly.
                </p>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <FiCode className="text-primary" />
                  </div>
                </div>
                <p>
                  I founded <span className="font-medium text-primary dark:text-primary">Taqwira</span>, a MERN-based football reservation platform, 
                  which gave me hands-on experience in the entire software development lifecycle—from concept and design 
                  to deployment and maintenance.
                </p>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <FiUser className="text-accent" />
                  </div>
                </div>
                <p>
                  I'm particularly interested in creating applications that solve real-world problems and provide 
                  exceptional user experiences. I'm always eager to learn new technologies and methodologies to 
                  expand my skill set and stay at the forefront of web development.
                </p>
              </div>
              
              {/* Enhanced stat badges */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700/30">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm flex items-center"
                >
                  <span className="font-medium">2</span>
                  <span className="mx-2">•</span>
                  <span>Years Experience</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm flex items-center"
                >
                  <span className="font-medium">6+</span>
                  <span className="mx-2">•</span>
                  <span>Projects Completed</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm flex items-center"
                >
                  <span className="font-medium">20+</span>
                  <span className="mx-2">•</span>
                  <span>Students Mentored</span>
                </motion.div>
              </div>
              
              {/* Enhanced CTA Button */}
              <div className="text-right">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center text-secondary hover:text-secondary-600 transition-colors"
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <span className="mr-2 font-medium">Get in touch</span>
                  <FiArrowRight />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Column */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Enhanced profile card */}
          <div className="mb-8 relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-primary/20 to-accent/20 rounded-2xl blur-md -z-10 opacity-70"></div>
            
            {/* Main card */}
            <div className="bg-light-card dark:bg-dark-card backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
                
                {/* Profile image */}
                <img 
                  src="/images/mahdi-profile.jpg"
                  alt="Mahdi Nasri"
                  className="w-full h-full object-cover" 
                />
                
                {/* Profile info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Mahdi Nasri</h3>
                    <p className="text-secondary">Full Stack Developer</p>
                  </div>
                </div>
                
                {/* Enhanced decorative elements - animated status indicators */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200"></div>
                  </div>
                </div>
                
                {/* Added corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700/30 mb-3">
                  <h3 className="font-semibold text-lg">Highlights</h3>
                  
                  <motion.a 
                    href="/resume.pdf" 
                    target="_blank" 
                    className="text-primary text-sm hover:underline flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Resume
                    <FiArrowRight className="ml-1 text-xs" />
                  </motion.a>
                </div>
                
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-xl border border-white/10 shadow-sm`}
                    >
                      <div className="flex items-start">
                        <div className="text-primary dark:text-secondary mr-4 mt-1 p-2 bg-white/20 dark:bg-black/20 rounded-lg text-xl">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced quote card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-light-card dark:bg-dark-card backdrop-blur-md rounded-2xl border border-white/10 p-5 shadow-xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -right-3 -top-3 w-12 h-12 rounded-full bg-secondary/5"></div>
            <div className="absolute -left-3 -bottom-3 w-12 h-12 rounded-full bg-primary/5"></div>
            
            {/* Quote marks */}
            <div className="absolute top-0 right-0 text-6xl text-primary/10 font-serif">"</div>
            <div className="absolute bottom-0 left-0 text-6xl text-primary/10 font-serif">"</div>
            
            {/* Quote text */}
            <blockquote className="text-gray-700 dark:text-gray-300 text-center italic py-3">
              My goal is to create digital experiences that are both beautiful and functional, combining technical expertise with a keen eye for design.
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;