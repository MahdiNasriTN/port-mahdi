import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={className}>
      <div className="container-wrapper">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            {title && (
              <motion.h2 
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
                <span className="text-secondary">.</span>
              </motion.h2>
            )}
            
            {subtitle && (
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;