import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { SEO } from '../../components/alternative/SEO';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

export const PrivacyPolicy: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO title={t('legal.privacyTitle')} description={t('legal.privacyBrief')} />

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="border-b-4 border-primary pb-8 mb-16 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
              // {t('common.legalLinks')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
              {t('legal.privacyTitle')}
            </h1>
          </div>
          <Lock size={48} className="text-primary hidden md:block" />
        </div>

        <div className="max-w-4xl bg-white border-4 border-primary p-8 md:p-12 space-y-8 font-sans text-sm text-secondary leading-relaxed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-mono text-xs text-primary bg-primary/5 p-4 border border-dashed border-primary mb-6">
            {t('legal.privacyBrief')}
          </p>

          <section className="space-y-6">
            <p>{t('legal.privacyParagraph1')}</p>
            <p>{t('legal.privacyParagraph2')}</p>
          </section>

          <div className="border-t border-dashed border-primary/25 pt-6 font-mono text-[10px] text-primary">
            {language === 'tr'
              ? 'SON GÜNCELLEME: 29.05.2026 // BİLGİ İŞLEM MÜDÜRLÜĞÜ'
              : 'LAST UPDATE: 29.05.2026 // IT DEPARTMENT'}{' '}
            // {COMPANY_INFO.shortNameUpper}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
