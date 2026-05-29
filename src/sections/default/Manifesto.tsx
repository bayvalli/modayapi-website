import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';

export const Manifesto: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-secondary-container border-y-4 border-primary px-margin py-block-gap">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl pl-0 md:pl-asymmetric border-l-4 border-primary py-8"
        >
          <span className="font-label-caps text-secondary mb-6 block">
            {language === 'tr' ? 'BİZİM MANİFESTOMUZ' : 'OUR MANIFESTO'}
          </span>
          <p className="text-headline-md text-on-surface leading-tight font-sans">
            {language === 'tr' ? (
              <>
                {COMPANY_INFO.shortName}, mühendislik mükemmelliği ve sarsılmaz temeller üzerine
                inşa eder. Gelecek nesillere aktarılacak kalıcı yapılar oluşturmak için yapısal
                bütünlüğe, güvenliğe ve dayanıklılığa odaklanıyoruz. Her projemiz, sağlamlığın ve
                güvenin birer simgesidir.
              </>
            ) : (
              <>
                {COMPANY_INFO.shortName} builds upon engineering excellence and unshakeable
                foundations. We focus on structural integrity, safety, and durability to create
                permanent structures that will be passed to future generations. Each of our projects
                is a symbol of robustness and reliability.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
