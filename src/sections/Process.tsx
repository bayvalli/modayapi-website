import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-block-gap bg-surface-container-low border-y-4 border-primary">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="max-w-2xl border-l-4 border-primary pl-8 mb-block-gap">
          <h2 className="text-headline-xl text-primary lowercase mb-6">Anıtsal<br />Adımlar.</h2>
          <p className="text-body-lg text-secondary">
             Projelerimizi hayata geçirirken izlediğimiz şeffaf, kararlı ve tavizsiz süreç. 
             Her aşama, kalıcı eserler bırakma vizyonumuzun bir parçasıdır.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row border-heavy bg-surface group hover:bg-primary transition-all duration-500 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/3 p-margin flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-primary group-hover:bg-primary">
                 <span className="font-serif text-[120px] font-black text-primary group-hover:text-on-primary transition-colors duration-500">
                    {step.id}
                 </span>
              </div>
              <div className="md:w-2/3 p-margin flex flex-col justify-center">
                 <h3 className="text-headline-lg mb-6 leading-none group-hover:text-on-primary transition-colors">{step.title}</h3>
                 <p className="text-body-lg text-secondary mb-8 group-hover:text-surface-dim transition-colors max-w-xl">
                    {step.description}
                 </p>
                 <ul className="flex flex-wrap gap-4">
                    {step.items.map(item => (
                      <li key={item} className="font-label-caps text-label-caps border-2 border-primary group-hover:border-on-primary px-4 py-2 uppercase group-hover:text-on-primary transition-colors">
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
