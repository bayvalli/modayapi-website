import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { BrutalistButton } from '../components/BrutalistButton';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-block-gap">
      <div className="max-w-[1440px] mx-auto px-margin">
        <header className="mb-block-gap flex flex-col md:flex-row justify-between items-end gap-gutter">
          <h2 className="text-headline-xl text-primary leading-none">İNŞAAT<br />KALİTESİ</h2>
          <div className="md:w-1/3 border-b-4 border-primary pb-4">
             <p className="text-body-md text-secondary lowercase">Güvenilir, dayanıklı ve modern mühendislik standartlarında inşa edilmiş seçkin taahhüt projelerimiz.</p>
          </div>
        </header>

        <div className="flex flex-col gap-block-gap">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-12 gap-gutter items-center relative py-6 md:py-12"
              >
                {/* Image Column */}
                <div className={`col-span-12 md:col-span-8 md:row-start-1 ${isEven ? 'md:col-start-1' : 'md:col-start-5'}`}>
                   <Link to={`/projeler/${project.id}`} className="block aspect-[16/9] border-heavy bg-surface-container overflow-hidden group relative cursor-pointer">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale-[30%] contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      {/* Decorative Image Glow or hover tint if needed, otherwise clean list */}
                   </Link>
                </div>

                {/* Info Block - Overlapping grid row layout to prevent height collapse & collisions */}
                <div className={`col-span-12 md:col-span-5 bg-surface border-heavy p-8 md:p-12 z-20 shadow-none mt-8 md:mt-0 md:row-start-1 md:self-center ${isEven ? 'md:col-start-8' : 'md:col-start-1'}`}>
                  <span className="font-label-caps text-secondary mb-4 block uppercase">{project.category}</span>
                  <h3 className="text-3xl sm:text-4xl md:text-headline-lg text-primary mb-6 leading-tight break-words">{project.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                     <div>
                        <span className="font-label-caps text-secondary block mb-1">KONUM</span>
                        <span className="text-body-md font-bold">{project.location}</span>
                     </div>
                     <div>
                        <span className="font-label-caps text-secondary block mb-1">ALAN</span>
                        <span className="text-body-md font-bold">{project.area}</span>
                     </div>
                     <div className="col-span-2">
                        <span className="font-label-caps text-secondary block mb-1">ÖZELLİKLER</span>
                        <span className="text-body-md font-bold">{project.features}</span>
                     </div>
                  </div>

                  <Link to={`/projeler/${project.id}`}>
                    <BrutalistButton id={`project-btn-${project.id}`} variant="primary" className="flex items-center gap-4 w-full md:w-auto justify-center">
                      PROJEYİ İNCELE <ArrowRight size={18} />
                    </BrutalistButton>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
