import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

const KVKK: React.FC = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
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
            {t('legal.kvkkTitle')}
          </h1>
          <p className={`text-secondary font-sans mt-4 ${isModern ? 'text-sm mt-3' : ''}`}>
            {COMPANY_INFO.shortName}{' '}
            {language === 'tr'
              ? 'İnşaat A.Ş. Aydınlatma Metni'
              : 'Construction Corp. Disclosure Text'}
          </p>
        </header>

        <div
          className={`space-y-8 font-sans text-body-md text-primary leading-relaxed ${isModern ? 'space-y-6 text-sm' : ''}`}
        >
          <p className="font-mono text-xs text-primary bg-primary/5 p-4 border border-dashed border-primary mb-6">
            {t('legal.kvkkBrief')}
          </p>

          <section className="space-y-6">
            <p>{t('legal.kvkkParagraph1')}</p>
            <p>{t('legal.kvkkParagraph2')}</p>
            <p>{t('legal.kvkkParagraph3')}</p>
          </section>

          <div className="border-t border-dashed border-primary/25 pt-6 font-mono text-[10px] text-primary">
            {language === 'tr'
              ? 'SON GÜNCELLEME: 29.05.2026 // HUKUK DEPARTMANI'
              : 'LAST UPDATE: 29.05.2026 // LEGAL DEPARTMENT'}{' '}
            // {COMPANY_INFO.shortNameUpper}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KVKK;
