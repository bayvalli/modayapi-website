import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-on-primary border-t-8 border-primary px-margin py-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-gutter items-start">
          {/* Brand & Copy */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="font-serif text-headline-lg text-surface-bright mb-6 uppercase tracking-tighter">
                MODA YAPI
              </h2>
              <div className="h-2 w-32 bg-surface-bright mb-8"></div>
              <p className="text-surface-variant opacity-80 max-w-sm font-sans text-body-md leading-relaxed">
                Mühendislik mükemmelliği ve sarsılmaz temeller üzerine inşa edilen bir gelecek.
                Yapısal bütünlükte tavizsiz yaklaşım.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-surface-bright/20 pl-6">
              <p className="text-surface-bright font-label-caps text-xs tracking-[0.2em]">
                KAYITLI TİCARİ UNVAN:
              </p>
              <p className="text-surface-variant font-sans text-body-sm uppercase">
                2017 May Moda Yapı İnşaat Anonim Şirketi
              </p>
            </div>

            <p className="text-surface-variant/40 font-label-caps text-[10px] tracking-widest pt-8 uppercase">
              © Tüm hakları saklıdır.
            </p>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3 lg:col-start-8 space-y-8">
            <h3 className="font-label-caps text-surface-bright/60 text-xs tracking-widest uppercase">
              Kurumsal Hukuk
            </h3>
            <ul className="flex flex-col gap-6 font-label-caps text-sm">
              <li>
                <Link
                  to="/kvkk"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  KVKK AYDINLATMA METNİ
                </Link>
              </li>
              <li>
                <Link
                  to="/gizlilik-politikasi"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  GİZLİLİK POLİTİKASI
                </Link>
              </li>
              <li>
                <Link
                  to="/cerez-tercihleri"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  ÇEREZ TERCİHLERİ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 lg:col-start-11 space-y-8">
            <h3 className="font-label-caps text-surface-bright/60 text-xs tracking-widest uppercase">
              Bilgi Merkezi
            </h3>
            <ul className="flex flex-col gap-6 font-label-caps text-sm">
              <li>
                <Link
                  to="/sss"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  SSS
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  İLETİŞİM OFİSİ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
