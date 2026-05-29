import React from 'react';
import { Hero } from '../../sections/default/Hero';
import { Manifesto } from '../../sections/default/Manifesto';
import { Services } from '../../sections/default/Services';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Home: React.FC = () => {
  const { theme, mode } = useTheme();
  const { language } = useLanguage();
  const isModern = theme === 'alternative';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Hero />
      <Manifesto />
      <Services />

      {/* Full width image break from the plan */}
      <section
        className={`w-full py-margin border-y-4 border-primary bg-surface-container-low ${isModern ? 'shadow-md' : ''}`}
      >
        <div
          className={`w-full h-[600px] relative overflow-hidden group ${isModern ? 'opacity-95' : ''}`}
        >
          <img
            alt="Steel and concrete texture"
            className={`w-full h-full object-cover transition-transform ${mode === 'dark' ? 'mix-blend-normal opacity-50' : 'mix-blend-multiply opacity-80'} ${isModern ? 'duration-300 group-hover:scale-125 contrast-150' : 'duration-1000 group-hover:scale-110 grayscale'}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZK00LxqoKLnUFTh--0-WHtUKeByXQOeyXu-CEChrsNUToI01aleAupWUzhQbzVKuCNbR6LulgIsbuvyJvuk-FcLN2oBCAHOD95ww-ZpHOr2JTvLc572xtWUo9ZG8XTfqp-urIZfsVO2lL-CYawrfbsBkNHiwpqKCwo5DHYZR8NZaTF1q89xRwIHEpfeHBzXTzk0gURlt9EjSygmNMxwKuKXSi7aJWA0mKiMOW2x43uCZ6kP5Yw9yWqJMzZE36x0UqNGJI2PO_hSBN"
          />
          <div
            className={`absolute bottom-margin right-margin bg-surface border-4 border-primary p-6 max-w-sm ${isModern ? 'shadow-lg' : 'shadow-md'}`}
          >
            <h4
              className={`font-serif text-headline-md text-primary mb-2 ${isModern ? 'tracking-tighter' : ''}`}
            >
              {language === 'tr' ? 'HAM MADDE' : 'RAW MATERIAL'}
            </h4>
            <p className={`font-sans text-body-md text-on-surface ${isModern ? 'text-sm' : ''}`}>
              {language === 'tr'
                ? 'Bir binanın güzelliği, bileşenleri gizlenmeden önceki dürüstlüğünde yatar.'
                : 'The beauty of a building lies in its honesty before its components are concealed.'}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
