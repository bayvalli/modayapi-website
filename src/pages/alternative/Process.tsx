import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckSquare, Hammer, ShieldAlert, Award } from 'lucide-react';
import { SEO } from '../../components/alternative/SEO';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

export const Process: React.FC = () => {
  const { language, t } = useLanguage();

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Clock size={24} className="text-primary" />;
      case 2:
        return <Hammer size={24} className="text-primary" />;
      case 3:
        return <CheckSquare size={24} className="text-primary" />;
      default:
        return <Award size={24} className="text-primary" />;
    }
  };

  const steps = [
    {
      id: 1,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      items: t('process.step1.items').split(' // '),
    },
    {
      id: 2,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      items: t('process.step2.items').split(' // '),
    },
    {
      id: 3,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      items: t('process.step3.items').split(' // '),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title={t('process.title') + ' - ' + COMPANY_INFO.shortName}
        description={t('process.subtitle')}
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Title */}
        <div className="border-b-4 border-primary pb-8 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // {language === 'tr' ? 'RESMİ PROSES AKIŞI' : 'OFFICIAL PROCESS BLUEPRINT'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
            {t('process.title')}
          </h1>
        </div>

        {/* Process Roadmap */}
        <div className="relative border-l-4 border-primary ml-4 md:ml-12 pl-8 md:pl-16 space-y-20 py-8">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={step.id}
              className="relative group"
            >
              {/* Stepper Bullet */}
              <div className="absolute -left-[45px] md:-left-[81px] top-0 w-12 h-12 md:w-14 md:h-14 rounded-none bg-white border-4 border-primary flex items-center justify-center font-mono font-bold text-lg md:text-xl text-primary shadow-[4px_4px_0px_0px_#111111] group-hover:bg-primary group-hover:text-white transition-all duration-300">
                0{step.id}
              </div>

              {/* Box Info */}
              <div className="max-w-4xl border-4 border-primary p-8 md:p-12 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 bg-white relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 border-2 border-primary bg-surface-container">
                    {getStepIcon(step.id)}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-primary">
                    {step.title}
                  </h2>
                </div>

                <p className="text-body-lg text-secondary leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Sub items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-dashed border-primary/25 pt-8">
                  {step.items.map((it, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary"></div>
                      <span className="font-mono text-xs uppercase font-bold tracking-wider text-primary">
                        {it}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Structural Safety Warning Card */}
        <div className="mt-20 max-w-4xl border-4 border-primary p-8 md:p-12 bg-primary text-on-primary">
          <div className="flex items-start gap-6">
            <ShieldAlert size={36} className="mt-1 flex-shrink-0" />
            <div>
              <span className="font-mono text-xs tracking-widest text-on-primary/60 block mb-2">
                {language === 'tr' ? 'GÜVEN DEKLARASYONU' : 'SAFETY DECLARATION'}
              </span>
              <h3 className="font-serif text-2xl uppercase font-bold mb-4">
                {language === 'tr' ? 'DEPREM REZİLYANSI SÖZÜMÜZ' : 'OUR SEISMIC RESILIENCE PROMISE'}
              </h3>
              <p className="opacity-80 text-sm leading-relaxed mb-4">
                {language === 'tr'
                  ? 'Uyguladığımız her kaba inşaatta Isparta - Antalya tektonik fay hatlarının parametlerini esas alan statik simülasyonlar yürütülür. Kullandığımız betonlar tam nemlendirme kürü geçirerek gerçek dayanıklılık limitlerine erişmeden hiçbir sonraki adıma geçiş izni verilmez.'
                  : 'In every structural skeleton we construct, static simulations based on Isparta - Antalya tectonic fault line parameters are executed. No subsequent phase is authorized until the concrete passes structural hydration cycles and reaches its absolute durability limits.'}
              </p>
              <span className="font-mono text-[9px] opacity-40">
                MÜHENDİSLİK KURULU // {COMPANY_INFO.legalNameShortUpper}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Process;
