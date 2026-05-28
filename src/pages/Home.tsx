import React from 'react';
import { Hero } from '../sections/Hero';
import { Manifesto } from '../sections/Manifesto';
import { Services } from '../sections/Services';
import { motion } from 'motion/react';

const Home: React.FC = () => {
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
      <section className="w-full py-margin border-y-4 border-primary bg-surface-container-low">
        <div className="w-full h-[600px] relative overflow-hidden group">
          <img 
            alt="Steel and concrete texture" 
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 transition-transform duration-1000 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZK00LxqoKLnUFTh--0-WHtUKeByXQOeyXu-CEChrsNUToI01aleAupWUzhQbzVKuCNbR6LulgIsbuvyJvuk-FcLN2oBCAHOD95ww-ZpHOr2JTvLc572xtWUo9ZG8XTfqp-urIZfsVO2lL-CYawrfbsBkNHiwpqKCwo5DHYZR8NZaTF1q89xRwIHEpfeHBzXTzk0gURlt9EjSygmNMxwKuKXSi7aJWA0mKiMOW2x43uCZ6kP5Yw9yWqJMzZE36x0UqNGJI2PO_hSBN" 
          />
          <div className="absolute bottom-margin right-margin bg-surface border-4 border-primary p-6 max-w-sm">
            <h4 className="font-serif text-headline-md text-primary mb-2">HAM MADDE</h4>
            <p className="font-sans text-body-md text-on-surface">Bir binanın güzelliği, bileşenleri gizlenmeden önceki dürüstlüğünde yatar.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
