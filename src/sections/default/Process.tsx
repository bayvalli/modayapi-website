import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

export const Process: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';
  const borderClass = isModern ? 'border-4' : 'border-heavy';
  const animationDuration = isModern ? 0.4 : 0.6;

  return (
    <section
      id="process"
      className={`py-block-gap bg-surface-container-low border-y-4 border-primary ${isModern ? 'border-y-4' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        <div
          className={`max-w-2xl border-l-4 border-primary pl-8 mb-block-gap ${isModern ? 'border-l-4' : ''}`}
        >
          <h2
            className={`text-headline-xl text-primary lowercase mb-6 ${isModern ? 'tracking-tighter' : ''}`}
          >
            Anıtsal
            <br />
            Adımlar.
          </h2>
          <p className={`text-body-lg text-secondary ${isModern ? 'text-sm' : ''}`}>
            Projelerimizi hayata geçirirken izlediğimiz şeffaf, kararlı ve tavizsiz süreç. Her
            aşama, kalıcı eserler bırakma vizyonumuzun bir parçasıdır.
          </p>
        </div>

        <div className={`flex flex-col ${isModern ? 'gap-6' : 'gap-12'}`}>
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: animationDuration }}
              className={`flex flex-col md:flex-row ${borderClass} bg-surface group hover:bg-primary transition-all ${isModern ? 'duration-300 shadow-md' : 'duration-500'} ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div
                className={`md:w-1/3 p-margin flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-primary group-hover:bg-primary`}
              >
                <span
                  className={`font-serif ${isModern ? 'text-6xl' : 'text-[120px]'} font-black text-primary group-hover:text-on-primary transition-colors duration-500`}
                >
                  {step.id}
                </span>
              </div>
              <div className="md:w-2/3 p-margin flex flex-col justify-center">
                <h3
                  className={`text-headline-lg mb-6 leading-none group-hover:text-on-primary transition-colors ${isModern ? 'text-xl' : ''}`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-body-lg text-secondary mb-8 group-hover:text-surface-dim transition-colors max-w-xl ${isModern ? 'text-sm' : ''}`}
                >
                  {step.description}
                </p>
                <ul className={`flex flex-wrap ${isModern ? 'gap-2' : 'gap-4'}`}>
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className={`font-label-caps text-label-caps border-2 border-primary group-hover:border-on-primary px-4 py-2 uppercase group-hover:text-on-primary transition-colors ${isModern ? 'bg-primary/5 text-[10px]' : ''}`}
                    >
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
