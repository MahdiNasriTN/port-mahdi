import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiBook, FiCode, FiAward } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import { experiences } from '../constants/experience';

// Helper component for the awesome tab design
const TabButton = ({ active, onClick, children, icon }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
      active 
        ? 'text-white' 
        : 'text-gray-400 dark:text-gray-500 hover:text-gray-200'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {children}
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    )}
  </motion.button>
);

// Stylized separator component
const Separator = ({ className = '' }) => (
  <div className={`flex items-center my-8 ${className}`}>
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
    <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse"></div>
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
  </div>
);

// Beautiful experience timeline card
const ExperienceCard = ({ experience: exp, index, side = 'left' }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Define icon based on skills
  const getSkillIcon = (skill) => {
    if (skill.toLowerCase().includes('mern') || skill.toLowerCase().includes('developer')) return <FiCode className="text-accent" />;
    if (skill.toLowerCase().includes('teaching') || skill.toLowerCase().includes('mentor')) return <FiBook className="text-info" />;
    return <FiAward className="text-success" />;
  };
  
  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: 0.7, 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }}
      className={`relative mb-16`}
    >
      {/* Experience Content Card */}
      <motion.div 
        className={`relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl overflow-hidden ${
          side === 'left' ? 'ml-10 md:ml-0 md:mr-12' : 'ml-10 md:ml-12'
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Glow effect in background */}
        <div className={`absolute ${
          exp.type === 'work' ? 'bg-secondary/10' : 'bg-accent/10'
        } -z-10 w-64 h-64 rounded-full blur-[80px] opacity-60 ${
          side === 'left' ? '-top-20 -right-20' : '-top-20 -left-20'
        }`}></div>
        
        {/* Badge */}
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <div className={`${
            exp.type === 'work' ? 'bg-secondary' : 'bg-accent'
          } px-4 py-1 text-xs font-bold text-white rounded-full shadow-lg`}>
            {exp.type === 'work' ? 'WORK' : 'EDUCATION'}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative">
          {/* Title & Icon */}
          <div className="flex items-center mb-4">
            <motion.div 
              className={`flex items-center justify-center p-3 mr-4 rounded-xl ${
                exp.type === 'work' 
                  ? 'bg-secondary/20 text-secondary' 
                  : 'bg-accent/20 text-accent'
              }`}
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
            >
              {exp.type === 'work' ? <FiBriefcase size={22} /> : <FiBook size={22} />}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {exp.title}
              </h3>
              <h4 className={`font-medium ${
                exp.type === 'work' ? 'text-secondary/90' : 'text-accent/90'
              }`}>
                {exp.type === 'work' ? exp.company : exp.institution}
              </h4>
            </div>
          </div>
          
          {/* Info badges */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white/80">
              <FiCalendar className="mr-1.5" /> {exp.period}
            </div>
            {exp.location && (
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white/80">
                <FiMapPin className="mr-1.5" /> {exp.location}
              </div>
            )}
          </div>
          
          {/* Description */}
          <div className="relative mb-5">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary/80 to-accent/80 rounded"></div>
            <p className="pl-4 text-gray-300">
              {exp.description}
            </p>
          </div>
          
          {/* Skills */}
          {exp.skills && (
            <div className="mt-5">
              <h5 className="text-sm uppercase tracking-wider text-white/60 mb-2">Skills & Expertise</h5>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-secondary/20 to-accent/20 text-white border border-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {getSkillIcon(skill)} 
                    <span className="ml-1.5">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          )}
          
          {/* Line connector to timeline */}
          <div className={`absolute top-10 ${side === 'left' ? '-left-32' : '-right-32'} w-20 border-t-2 border-dashed border-white/20 hidden md:block`}></div>
        </div>
      </motion.div>
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ 
          delay: 0.2, 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }}
        className={`absolute top-10 z-20 ${
          side === 'left' ? '-left-5 md:left-[calc(100%-12px)]' : '-left-5 md:-left-5'
        }`}
      >
        <div className="relative">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            exp.type === 'work' 
              ? 'bg-secondary text-white' 
              : 'bg-accent text-white'
          }`}>
            {exp.type === 'work' ? 
              <FiBriefcase size={18} /> : 
              <FiBook size={18} />
            }
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping-slow opacity-50"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Journey"
      subtitle="Explore my professional background and education path"
      className="bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden text-white"
      titleClassName="text-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-10 w-96 h-96 bg-secondary/10 rounded-full mix-blend-overlay filter blur-[100px] opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full mix-blend-overlay filter blur-[100px] opacity-70"></div>
      </div>
      
      {/* Fancy Filter Tabs */}
      <div className="mb-20 relative z-10">
        <div className="flex justify-center">
          <motion.div 
            className="relative p-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-2">
              <TabButton 
                active={activeTab === 'all'} 
                onClick={() => setActiveTab('all')}
                icon={<FiAward />}
              >
                All
              </TabButton>
              <TabButton 
                active={activeTab === 'work'} 
                onClick={() => setActiveTab('work')}
                icon={<FiBriefcase />}
              >
                Work
              </TabButton>
              <TabButton 
                active={activeTab === 'education'} 
                onClick={() => setActiveTab('education')}
                icon={<FiBook />}
              >
                Education
              </TabButton>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative z-10" ref={sectionRef}>
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-10 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-accent/50 to-transparent rounded-full hidden md:block"></div>
        
        {/* Timeline wrapper with alternating sides */}
        <div className="relative max-w-7xl mx-auto">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="md:grid md:grid-cols-2 md:gap-8">
              {index % 2 === 0 ? (
                <>
                  <ExperienceCard experience={exp} index={index} side="left" />
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <ExperienceCard experience={exp} index={index} side="right" />
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Timeline end decoration */}
        {filteredExperiences.length > 0 && (
          <motion.div 
            className="relative z-20 flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center">
                <span className="text-white text-4xl font-light">
                  {filteredExperiences.length}+
                </span>
              </div>
            </div>
          </motion.div>
        )}
        
        <Separator className="mt-16" />
        
        {/* Quote section */}
        <motion.div
          className="relative max-w-4xl mx-auto text-center mt-16 z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="mb-6 text-6xl font-serif text-secondary/50">"</div>
          <blockquote className="text-2xl font-light text-white/90 italic mb-6">
            Every experience, whether work or education, has been a stepping stone towards mastering my craft and delivering exceptional digital experiences.
          </blockquote>
          <div className="text-lg font-medium text-secondary">Mahdi Nasri</div>
          <div className="text-sm text-white/50">Full Stack Developer</div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;