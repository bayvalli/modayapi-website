import React from 'react';
import { motion } from 'motion/react';

const CookiePreferences: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap px-margin"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b-4 border-primary pb-8">
          <h1 className="font-serif text-headline-lg text-primary uppercase">Çerez Tercihleri</h1>
          <p className="text-secondary font-sans mt-4">
            Web sitemizdeki deneyiminizi optimize etmek için kullanılan teknolojiler.
          </p>
        </header>

        <div className="space-y-12">
          <div className="border-4 border-primary p-8 bg-surface-container">
            <h3 className="font-serif text-headline-sm mb-4 uppercase">Zorunlu Çerezler</h3>
            <p className="text-body-md font-sans text-secondary">
              Web sitesinin temel fonksiyonlarının çalışması için zorunludur. Kapatılamazlar.
            </p>
          </div>

          <div className="border-4 border-primary p-8 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-serif text-headline-sm mb-4 uppercase">Analitik Çerezler</h3>
              <p className="text-body-md font-sans text-secondary">
                Ziyaretçi trafiğini ölçmek ve sitemizi geliştirmek için kullanılır.
              </p>
            </div>
            <button className="bg-primary text-on-primary px-8 py-3 font-label-caps uppercase text-xs tracking-widest">
              AKTİF
            </button>
          </div>

          <div className="border-4 border-primary p-8 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-serif text-headline-sm mb-4 uppercase">Pazarlama Çerezleri</h3>
              <p className="text-body-md font-sans text-secondary">
                İlgi alanlarınıza yönelik içerik sunmak için tercih edilir.
              </p>
            </div>
            <button className="border-2 border-primary text-primary px-8 py-3 font-label-caps uppercase text-xs tracking-widest hover:bg-primary hover:text-on-primary transition-colors">
              KAPALI
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePreferences;
