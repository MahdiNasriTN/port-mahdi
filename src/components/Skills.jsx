import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useSpring } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { skills } from '../constants/skills';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';

const SkillCard = ({ name, level, icon, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { damping: 30, stiffness: 300 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      progressValue.set(level);
    }
  }, [isInView, controls, level, progressValue]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5,
            delay: index * 0.05
          } 
        }
      }}
      initial="hidden"
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent"
        style={{ width: smoothProgress.get() + '%' }}
        animate={{ width: isHovered ? '100%' : level + '%' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      
      <div className="p-6 flex items-center">
        <div className="relative mr-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20 overflow-hidden">
            <img 
              src={`/images/skills/${icon}`} 
              alt={name} 
              className="w-7 h-7 object-contain"
              onError={(e) => {
                // Fallback for missing icons
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = name.charAt(0).toUpperCase();
              }}
            />
          </div>
          <motion.div 
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold bg-secondary text-white"
            animate={{ 
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 1
            }}
          >
            <motion.span>{Math.round(smoothProgress.get())}</motion.span>
          </motion.div>
        </div>
        
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <div className="mt-1 h-1 w-full bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-info"
              style={{ 
                width: smoothProgress, 
                backgroundSize: "200% 200%"
              }}
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"]
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const categories = [
  { id: "frontend", title: "Frontend", icon: <FiCode size={24} />, skills: skills.frontend },
  { id: "backend", title: "Backend", icon: <FiServer size={24} />, skills: skills.backend },
  { id: "tools", title: "DevOps & Tools", icon: <FiTool size={24} />, skills: skills.tools }
];

const ProgressCircle = ({ value, index }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  const controls = useAnimation();
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true, amount: 0.5 });
  const circleValue = useMotionValue(0);
  const smoothCircleValue = useSpring(circleValue, { damping: 30, stiffness: 300 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      circleValue.set(value);
    }
  }, [isInView, controls, value, circleValue]);

  return (
    <motion.div
      ref={circleRef}
      className="relative w-32 h-32 mx-auto"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { 
            delay: 0.3 + index * 0.1,
            duration: 0.6
          }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <svg width="100%" height="100%" viewBox="0 0 150 150" className="transform -rotate-90">
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="12"
          fill="transparent"
        />
        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="12"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          fill="transparent"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E67E22" />
            <stop offset="50%" stopColor="#8E44AD" />
            <stop offset="100%" stopColor="#3498DB" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
        >
          {Math.round(smoothCircleValue.get())}%
        </motion.span>
        <motion.span 
          className="text-xs text-gray-300 uppercase tracking-wider mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
        >
          {index === 0 ? "Frontend" : index === 1 ? "Backend" : "Tools"}
        </motion.span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const getAverage = (skills) => {
    return skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length;
  };

  const skillsOverview = [
    getAverage(skills.frontend),
    getAverage(skills.backend),
    getAverage(skills.tools)
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="My professional toolkit and technical abilities"
      className="bg-gradient-to-b from-dark-lighter to-dark relative overflow-hidden text-white"
      titleClassName="text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-overlay filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-overlay filter blur-[100px]"></div>
      </div>
      
      {/* Skills Overview */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {skillsOverview.map((value, index) => (
            <ProgressCircle key={index} value={value} index={index} />
          ))}
        </div>
      </div>
      
      {/* Skills Categories */}
      <div className="space-y-16 relative z-10">
        {categories.map((category, categoryIndex) => (
          <div key={category.id} className="relative">
            {/* Category Header */}
            <div className="flex items-center mb-8 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="p-3 rounded-lg mr-4 bg-gradient-to-br from-secondary/20 to-accent/20 text-white">
                {category.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{category.title}</h3>
            </div>
            
            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Learning section with gradient background */}
      <motion.div 
        className="mt-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-info/20 rounded-2xl"></div>
        <div className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-display font-bold mb-4 text-white">Always Growing</h3>
          <p className="text-gray-200 max-w-2xl mx-auto">
            I'm constantly learning and improving my skills. My approach is to stay curious, 
            embrace new challenges, and continuously expand my knowledge in emerging 
            technologies to deliver cutting-edge solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker'].map((tech, i) => (
              <span 
                key={i} 
                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;