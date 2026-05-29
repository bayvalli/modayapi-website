import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

const NotFound: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isModern = theme === 'alternative';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-[80vh] pt-32 flex items-center justify-center px-margin ${isModern ? 'pt-24' : ''}`}
    >
      <div className="max-w-2xl w-full text-center">
        <header className={`mb-12 ${isModern ? 'mb-8' : ''}`}>
          <span
            className={`font-label-caps text-secondary text-sm tracking-[0.3em] mb-4 block ${isModern ? 'text-xs tracking-[0.2em] mb-3' : ''}`}
          >
            {language === 'tr'
              ? 'HATALI KOORDİNAT // ERROR 404'
              : 'INVALID COORDINATE // ERROR 404'}
          </span>
          <h1
            className={`font-serif text-[12vw] lg:text-headline-xl text-primary leading-none uppercase select-none ${isModern ? 'lg:text-4xl' : ''}`}
          >
            404
          </h1>
          <div
            className={`h-2 w-24 bg-primary mx-auto mt-8 ${isModern ? 'h-[1.5px] w-16 mt-6' : ''}`}
          ></div>
        </header>

        <div className={`space-y-8 ${isModern ? 'space-y-6' : ''}`}>
          <p
            className={`font-sans text-body-lg text-secondary max-w-md mx-auto leading-relaxed ${isModern ? 'text-sm' : ''}`}
          >
            {language === 'tr'
              ? 'Aradığınız yapı veya sayfa mevcut planlarımızda bulunamadı. Lütfen adresi kontrol edin veya ana sayfaya dönün.'
              : 'The requested structure or page could not be found in our current plans. Please check the address or return to the home page.'}
          </p>

          <Link
            to="/"
            className={`inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 font-label-caps text-xs tracking-widest hover:bg-secondary ${isModern ? 'px-8 py-3 text-[10px] tracking-[0.15em] duration-200 shadow-sm' : 'transition-all'} group`}
          >
            <ArrowLeft
              size={16}
              className={`group-hover:-translate-x-2 transition-transform ${isModern ? 'size-4' : ''}`}
            />
            {language === 'tr' ? 'ANA SAYFAYA DÖN' : 'RETURN TO HOME'}
          </Link>
        </div>

        <div className={`mt-24 pt-12 border-t border-primary/10 ${isModern ? 'mt-16 pt-8' : ''}`}>
          <p
            className={`font-mono text-[10px] text-secondary/30 uppercase tracking-[0.2em] ${isModern ? 'text-[8px] tracking-[0.15em]' : ''}`}
          >
            {COMPANY_INFO.legalNameShortUpper} /{' '}
            {language === 'tr' ? 'YAPISAL BÜTÜNLÜK ONAYLANDI' : 'STRUCTURAL INTEGRITY VERIFIED'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
