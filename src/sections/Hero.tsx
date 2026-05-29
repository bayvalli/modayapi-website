import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-48 pb-block-gap px-margin overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter relative">
        {/* Massive Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-span-12 md:col-span-9 z-10 pt-12"
        >
          <h1 className="text-headline-xl text-primary mix-blend-multiply leading-[0.9]">
            YAPININ
            <br />
            İSKELETİNİ
            <br />
            ORTAYA ÇIKARIYORUZ.
          </h1>
        </motion.div>

        {/* Oversized Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="col-span-12 md:col-span-8 md:col-start-5 mt-12 md:-mt-48 z-0"
        >
          <div className="w-full h-[500px] md:h-[650px] border-heavy bg-surface-container relative overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS6jIj7ArqW1cTDlwomAMg20hLxWkUNGgU0lutXIthIwMuQva0cdHPbMivbl3Rx8HwwUNSLT55dCimttKxmqx9wj4rHgyYK3h0rigzZSlznjFVmSfaAAYTICNIrSKLbRlMz5_Q9gr7tUdRklsNlcutrShaxMZ0-nz5T5nL78D17faSYjpEKBdXItnRVkSRunxVoMCJ7G3YhFLunMmaB5PwUxCCfyBZdbqE59Kp_f_evH0BDAbTg4tEdrqTU2kpAmeA9z48G1eVy0lx"
              alt="Raw concrete architecture"
              className="w-full h-full object-cover saturate-50 contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Structural Overlay */}
            <div className="absolute inset-x-0 bottom-0 py-4 px-8 bg-primary/20 backdrop-blur-sm border-t-2 border-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label-caps text-on-primary">MÜHENDİSLİK ÜSTÜNLÜĞÜ / 2024</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blueprint Line */}
      <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-primary/10 -rotate-12 pointer-events-none"></div>
    </section>
  );
};
