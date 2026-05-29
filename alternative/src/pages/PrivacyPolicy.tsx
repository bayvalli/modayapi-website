import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title="Gizlilik Politikası"
        description="MAY MODA YAPI web ve platform sistemleri genel gizlilik politikası prensipleri."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="border-b-4 border-primary pb-8 mb-16 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
              // SİBER GÜVENLİK PROTOKOLLERİ
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
              GİZLİLİK POLİTİKASI
            </h1>
          </div>
          <Lock size={48} className="text-primary hidden md:block" />
        </div>

        <div className="max-w-4xl bg-white border-4 border-primary p-8 md:p-12 space-y-8 font-sans text-sm text-secondary leading-relaxed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              GİZLİLİK PRENSİPLERİ
            </h2>
            <p>
              Moda Yapı, kullanıcılarının dijital gizlilik haklarını korumak amacıyla gelişmiş veri
              şifreleme ve güvenlik mimarilerini uygular. Form alanlarımız ile gönderilen tüm
              bilgiler HTTPS / TLS şifreli tünellerle ulaştırılır.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              ÇEREZ SİSTEMLERİ VE LOG KALIPLARI
            </h2>
            <p>
              Moda Yapı internet portalında ziyaret seyirlerinin gözlemlenmesi ve kullanıcı
              deneyiminin optimize edilmesinden başka bir amaçla kullanıcı verisi toplanıp sisteme
              kaydedilmemektedir.
            </p>
          </section>

          <div className="border-t border-dashed border-primary/25 pt-6 font-mono text-[10px] text-primary">
            SON GÜNCELLEME: 29.05.2026 // BİLGİ İŞLEM MÜDÜRLÜĞÜ
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
