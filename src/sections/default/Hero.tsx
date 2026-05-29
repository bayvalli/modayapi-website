import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const isModern = theme === 'alternative';
  const animationDuration = isModern ? 0.4 : 0.8;
  const borderClass = isModern ? 'border-4' : 'border-heavy';
  const shadowClass = isModern ? 'shadow-lg' : 'shadow-sm';

  return (
    <section
      className={`relative w-full pt-16 pb-block-gap px-margin overflow-hidden ${isModern ? 'bg-surface-container/20' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter relative">
        {/* Massive Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: animationDuration, ease: 'easeOut' }}
          className="col-span-12 md:col-span-9 z-10 pt-4"
        >
          <h1
            className={`text-headline-xl text-primary mix-blend-multiply leading-[0.9] ${isModern ? 'tracking-tighter' : ''}`}
          >
            {language === 'tr' ? (
              <>
                YAPININ
                <br />
                İSKELETİNİ
                <br />
                ORTAYA ÇIKARIYORUZ.
              </>
            ) : (
              <>
                WE EXPOSE
                <br />
                THE STRUCTURAL
                <br />
                SKELETON.
              </>
            )}
          </h1>
        </motion.div>

        {/* Oversized Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: isModern ? 0.6 : 1.2, ease: 'easeOut' }}
          className="col-span-16 md:col-span-8 md:col-start-5 mt-12 md:-mt-36 z-0"
        >
          <div
            className={`w-full h-[500px] md:h-[650px] ${borderClass} bg-surface-container relative overflow-hidden group ${shadowClass}`}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS6jIj7ArqW1cTDlwomAMg20hLxWkUNGgU0lutXIthIwMuQva0cdHPbMivbl3Rx8HwwUNSLT55dCimttKxmqx9wj4rHgyYK3h0rigzZSlznjFVmSfaAAYTICNIrSKLbRlMz5_Q9gr7tUdRklsNlcutrShaxMZ0-nz5T5nL78D17faSYjpEKBdXItnRVkSRunxVoMCJ7G3YhFLunMmaB5PwUxCCfyBZdbqE59Kp_f_evH0BDAbTg4tEdrqTU2kpAmeA9z48G1eVy0lx"
              alt="Raw concrete architecture"
              className={`w-full h-full object-cover transition-transform ${isModern ? 'duration-300 group-hover:scale-110' : 'duration-700 group-hover:scale-105'} ${isModern ? 'contrast-150' : 'saturate-50 contrast-125'}`}
            />
            {/* Structural Overlay */}
            <div
              className={`absolute inset-x-0 bottom-0 py-4 px-8 ${isModern ? 'bg-primary/30 border-t-4' : 'bg-primary/20 border-t-2'} backdrop-blur-sm border-primary translate-y-full group-hover:translate-y-0 transition-transform ${isModern ? 'duration-300' : 'duration-500'}`}
            >
              <span className="font-label-caps text-on-primary text-xs">
                {isModern
                  ? `[ ${language === 'tr' ? 'MÜHENDİSLİK ÜSTÜNLÜĞÜ' : 'ENGINEERING EXCELLENCE'} / 2024 ]`
                  : `${language === 'tr' ? 'MÜHENDİSLİK ÜSTÜNLÜĞÜ' : 'ENGINEERING EXCELLENCE'} / 2024`}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blueprint Line */}
      <div
        className={`absolute top-1/2 left-0 ${isModern ? 'w-1/2 h-[1px]' : 'w-1/3 h-[2px]'} bg-primary/10 ${isModern ? '-rotate-45' : '-rotate-12'} pointer-events-none`}
      ></div>
    </section>
  );
};
