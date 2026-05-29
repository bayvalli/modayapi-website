import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';
import { SEO } from '../../components/alternative/SEO';

export const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col justify-center items-center p-8 bg-white"
    >
      <SEO
        title="404 - Sayfa Bulunamadı"
        description="Arka plan yapısı veya talep edilen sayfa bulunamadı."
      />

      <div className="max-w-md w-full border-4 border-primary p-12 text-center bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-none rotate-45 translate-x-12 -translate-y-12"></div>

        <div className="flex justify-center text-primary mb-6">
          <Compass size={48} className="animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2 block">
          HATA KODU // ERROR_404
        </span>

        <h1 className="text-6xl md:text-7xl font-sans font-bold text-primary mb-6">404</h1>

        <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
          SAYFA BULUNAMADI
        </h2>

        <p className="text-sm text-secondary leading-relaxed mb-10 font-sans">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı
          bırakılmış olabilir.
        </p>

        <Link to="/">
          <BrutalistButton
            variant="primary"
            className="w-full flex justify-center items-center gap-2 py-4"
          >
            <ArrowLeft size={16} />
            <span>ANA SAYFAYA DÖN</span>
          </BrutalistButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
