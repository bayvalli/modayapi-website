import React from 'react';
import { Projects as ProjectsSection } from '../sections/Projects';
import { motion } from 'motion/react';

const Projects: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <ProjectsSection />
      
      {/* Pagination / Project Navigation from the plan */}
      <section className="w-full px-margin mb-block-gap flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl border-t-4 border-primary pt-8 flex justify-between items-center">
          <button className="group flex items-center gap-4 text-primary hover:text-secondary transition-colors font-label-caps uppercase">
            <span className="border-2 border-current p-2 rounded-full group-hover:bg-primary group-hover:text-surface transition-colors">←</span>
            ÖNCEKİ PROJELER
          </button>
          <div className="flex gap-4 font-label-caps text-lg">
            <span className="w-10 h-10 flex items-center justify-center border-2 border-primary bg-primary text-on-primary">1</span>
          </div>
          <button className="group flex items-center gap-4 text-primary hover:text-secondary transition-colors font-label-caps uppercase">
            SONRAKİ PROJELER
            <span className="border-2 border-current p-2 rounded-full group-hover:bg-primary group-hover:text-surface transition-colors">→</span>
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
