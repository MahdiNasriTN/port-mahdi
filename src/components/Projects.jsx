import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiBox, FiStar, FiCode, FiLayers } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import { projects } from '../constants/projects';

// Enhanced project card with no hover tilt animation
const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            delay: index * 0.1 
          }
        }
      }}
      initial="hidden"
      animate={controls}
      className="h-full"
    >
      <div className="h-full backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-2xl overflow-hidden relative">
        {/* Crystalline corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent z-0 rotate-45 translate-x-16 -translate-y-16 opacity-70"></div>
        
        <div className="relative z-10">
          <div className="relative overflow-hidden">
            {/* Cinematic image with custom overlay */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              {/* Animated scanning line effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-transparent h-1/3 z-20 opacity-50"
                animate={{ 
                  y: ['0%', '300%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              />
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-4000 ease-in-out"
              />
              
              {/* Glowing status indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="flex items-center px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                  {project.featured ? 'Featured Project' : 'Project'}
                </div>
              </div>
              
              {/* Project title with tech pill */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2 gap-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-secondary/80">
                        {project.category || 'Web App'}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Action buttons with elegant styling */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black/60 border border-white/10 text-white rounded-full transition-colors hover:bg-black/80 group"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub className="transition-transform group-hover:scale-110" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-secondary/90 border border-white/10 text-white rounded-full transition-colors hover:bg-secondary group"
                      aria-label="View live demo"
                    >
                      <FiExternalLink className="transition-transform group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project details card body */}
          <div className="p-6 relative">
            {/* Styled project description */}
            <p className="text-gray-300 mb-5 relative">
              <span className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-secondary to-transparent rounded-full"></span>
              {project.description}
            </p>
            
            {/* Tech stack with subtle styling */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <FiCode className="text-secondary" />
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Card status indicator */}
        {project.status && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs font-medium bg-dark-card border border-white/10 text-white/70">
            {project.status}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Ultra-modern featured project component
const FeaturedProject = ({ project }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
      initial="hidden"
      animate={controls}
      className="relative"
    >
      {/* Masked background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-20 h-20 border border-secondary/30 rounded-full"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
        {/* Image Section */}
        <div className="md:col-span-7 order-2 md:order-1 h-full">
          <div className="relative h-full overflow-hidden">
            {/* Cinematic image styling */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
            
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            
            {/* Edge light effect */}
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-secondary/80 via-accent/50 to-transparent"></div>
            
            {/* Bottom action bar */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium bg-secondary/90 text-white px-2 py-0.5 rounded-md">v{project.version || '1.0'}</span>
                  {project.featured && (
                    <span className="text-xs font-medium bg-accent/80 text-white px-2 py-0.5 rounded-md ml-2 flex items-center">
                      <FiStar className="mr-1" /> Featured
                    </span>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-black/70 hover:bg-black border border-white/10 text-white rounded-xl transition-all group"
                    aria-label="View GitHub repository"
                  >
                    <FiGithub className="group-hover:text-secondary" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-secondary/80 hover:bg-secondary border border-white/10 text-white rounded-xl transition-all"
                    aria-label="View live demo"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="md:col-span-5 order-1 md:order-2 p-6 md:p-8 flex flex-col justify-center relative">
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/20 to-transparent"></div>
          
          {/* Project content */}
          <div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center px-3 py-1.5 mb-3 rounded-full text-xs font-medium bg-gradient-to-r from-secondary/30 to-accent/20 text-white backdrop-blur-sm"
            >
              <FiStar className="mr-1.5" /> Featured Project
            </motion.div>
            
            <motion.h4 
              className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.3,
                    duration: 0.5
                  }  
                }
              }}
              initial="hidden"
              animate={controls}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {project.title}
              </span>
            </motion.h4>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.4,
                    duration: 0.5
                  }  
                }
              }}
              initial="hidden"
              animate={controls}
              className="relative mb-8"
            >
              <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-secondary via-accent to-transparent rounded-full"></div>
              <p className="text-gray-300">
                {project.description}
              </p>
            </motion.div>
            
            {/* Project statistics */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.5 }
                }
              }}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="text-xs text-gray-400 mb-1">Category</div>
                <div className="font-medium text-white flex items-center">
                  <FiLayers className="mr-2 text-secondary" />
                  {project.category || 'Web App'}
                </div>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="text-xs text-gray-400 mb-1">Tech</div>
                <div className="font-medium text-white flex items-center">
                  <FiCode className="mr-2 text-secondary" />
                  {project.mainTech || project.tags[0]}
                </div>
              </div>
            </motion.div>
            
            {/* Tech stack */}
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    delay: 0.6,
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate={controls}
            >
              {project.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/80 border border-white/10 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const featuredProjects = projects.filter(project => project.featured);
  const carouselRef = useRef(null);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects
    : projects.filter(project => project.category === activeFilter || project.tags.includes(activeFilter));
  
  const categories = ['all', ...new Set(projects.flatMap(p => [p.category, ...p.tags]).filter(Boolean))];
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  // Auto-advance carousel
  useEffect(() => {
    if (featuredProjects.length <= 1) return;
    
    const timer = setInterval(() => {
      nextProject();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentProject, featuredProjects.length]);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Discover my most impressive digital creations"
      className="bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden text-white"
      titleClassName="text-white"
    >
      {/* Advanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-[30rem] h-[30rem] rounded-full bg-primary-800/20 mix-blend-overlay blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-[20rem] h-[20rem] rounded-full bg-secondary/10 mix-blend-overlay blur-[100px]"></div>
        <div className="absolute top-1/4 right-1/3 w-[15rem] h-[15rem] rounded-full bg-accent/10 mix-blend-overlay blur-[80px]"></div>
        
        {/* Particle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_100%)] opacity-30"></div>
        
        {/* Animated lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      </div>
      
      {/* Featured Project Carousel */}
      <div className="relative mb-24" ref={carouselRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20"
          >
            <FeaturedProject project={featuredProjects[currentProject]} />
          </motion.div>
        </AnimatePresence>

        {featuredProjects.length > 1 && (
          <div className="flex justify-center items-center mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-md mr-3 hover:bg-white/10 transition-colors border border-white/10 shadow-lg group"
              aria-label="Previous project"
            >
              <FiChevronLeft className="text-xl text-white group-hover:text-secondary transition-colors" />
            </motion.button>
            
            <div className="flex items-center space-x-3">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`transition-all duration-300 ${
                    currentProject === index
                      ? 'w-12 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full'
                      : 'w-2.5 h-1.5 bg-white/20 hover:bg-white/30 rounded-full'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-md ml-3 hover:bg-white/10 transition-colors border border-white/10 shadow-lg group"
              aria-label="Next project"
            >
              <FiChevronRight className="text-xl text-white group-hover:text-secondary transition-colors" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Elegant section divider */}
      <div className="relative py-10 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="mx-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
              <FiBox className="text-secondary" />
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          {/* Project filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.slice(0, 7).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  activeFilter === category
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid with staggered animation */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </motion.div>
      
      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <div className="inline-block p-6 rounded-full bg-white/5 border border-white/10 mb-6">
            <FiBox className="text-4xl text-gray-500" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            There are no projects matching your current filter. Try selecting a different category.
          </p>
          <button
            onClick={() => setActiveFilter('all')}
            className="mt-6 px-6 py-2 bg-secondary/80 hover:bg-secondary text-white rounded-full transition-colors"
          >
            View All Projects
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;