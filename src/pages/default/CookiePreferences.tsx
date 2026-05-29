import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

const CookiePreferences: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-32 pb-block-gap px-margin ${isModern ? 'pt-24 pb-block-gap-sm' : ''}`}
    >
      <div className="max-w-4xl mx-auto">
        <header
          className={`mb-12 border-b-4 border-primary pb-8 ${isModern ? 'mb-8 border-b-[3px] pb-6' : ''}`}
        >
          <h1
            className={`font-serif text-headline-lg text-primary uppercase ${isModern ? 'text-2xl' : ''}`}
          >
            Çerez Tercihleri
          </h1>
          <p className={`text-secondary font-sans mt-4 ${isModern ? 'text-sm mt-3' : ''}`}>
            Web sitemizdeki deneyiminizi optimize etmek için kullanılan teknolojiler.
          </p>
        </header>

        <div className={`space-y-12 ${isModern ? 'space-y-8' : ''}`}>
          <div
            className={`border-4 border-primary p-8 bg-surface-container ${isModern ? 'border-[3px] p-6 shadow-sm' : 'shadow-lg'}`}
          >
            <h3
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              Zorunlu Çerezler
            </h3>
            <p className={`text-body-md font-sans text-secondary ${isModern ? 'text-sm' : ''}`}>
              Web sitesinin temel fonksiyonlarının çalışması için zorunludur. Kapatılamazlar.
            </p>
          </div>

          <div
            className={`border-4 border-primary p-8 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${isModern ? 'border-[3px] p-6 gap-4 shadow-sm' : 'shadow-lg'}`}
          >
            <div>
              <h3
                className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
              >
                Analitik Çerezler
              </h3>
              <p className={`text-body-md font-sans text-secondary ${isModern ? 'text-sm' : ''}`}>
                Ziyaretçi trafiğini ölçmek ve sitemizi geliştirmek için kullanılır.
              </p>
            </div>
            <button
              className={`bg-primary text-on-primary px-8 py-3 font-label-caps uppercase text-xs tracking-widest ${isModern ? 'px-6 py-2 text-[10px] tracking-[0.15em] shadow-sm' : ''}`}
            >
              AKTİF
            </button>
          </div>

          <div
            className={`border-4 border-primary p-8 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${isModern ? 'border-[3px] p-6 gap-4 shadow-sm' : 'shadow-lg'}`}
          >
            <div>
              <h3
                className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
              >
                Pazarlama Çerezleri
              </h3>
              <p className={`text-body-md font-sans text-secondary ${isModern ? 'text-sm' : ''}`}>
                İlgi alanlarınıza yönelik içerik sunmak için tercih edilir.
              </p>
            </div>
            <button
              className={`border-2 border-primary text-primary px-8 py-3 font-label-caps uppercase text-xs tracking-widest hover:bg-primary hover:text-on-primary ${isModern ? 'border-[1.5px] px-6 py-2 text-[10px] tracking-[0.15em] duration-200' : 'transition-colors'}`}
            >
              KAPALI
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePreferences;
