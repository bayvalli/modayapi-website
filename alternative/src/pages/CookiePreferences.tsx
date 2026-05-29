import React from 'react';
import { motion } from 'motion/react';
import { Settings } from 'lucide-react';
import { SEO } from '../components/SEO';

export const CookiePreferences: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title="Çerez Tercihleri Yönetimi"
        description="Web sitemizin performans ve kullanım çerezlerini dilediğiniz gibi düzenleyin."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="border-b-4 border-primary pb-8 mb-16 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
              // WEB SEANS AYARLARI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
              ÇEREZ TERCİHLERİ
            </h1>
          </div>
          <Settings size={48} className="text-primary hidden md:block" />
        </div>

        <div className="max-w-4xl bg-white border-4 border-primary p-8 md:p-12 space-y-8 font-sans text-sm text-secondary leading-relaxed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              MİNİMAL ÇEREZ SEÇENEKLERİ
            </h2>
            <p>
              Moda Yapı portalını ziyaret ettiğinizde yasal mevzuat sınırlarında teknik çerezler
              kullanılmaktadır. Üçüncü taraf reklam ağları veya davranış takip pikselleri sitemizde
              aktif değildir. Sadece sayfa hızı ve temel stabilite optimizasyon çerezleri
              barındırılır.
            </p>
          </section>

          <section className="bg-surface-container p-6 border-2 border-primary border-dashed">
            <span className="font-mono text-[10px] text-primary block mb-2 font-bold">
              TERCİH STATÜSÜ:
            </span>
            <p className="text-xs text-secondary">
              Gizliliğinize saygı duyduğumuz için tüm davranış takipçi botları ve harici pikseller
              varsayılan olarak **%100 KALICI BLOKE** edilmiştir. Hiçbir ayar yapmanıza gerek
              yoktur.
            </p>
          </section>

          <div className="border-t border-dashed border-primary/25 pt-6 font-mono text-[10px] text-primary">
            SİSTEM GÜVENLİ // MAY MODA YAPI
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePreferences;
