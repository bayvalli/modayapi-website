import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/alternative/SEO';
import { COMPANY_INFO } from '../../constants';

export const KVKK: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title="KVKK Aydınlatma Metni"
        description={`6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca ${COMPANY_INFO.legalNameShortUpper} kişisel veri aydınlatma ve koruma politikası.`}
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="border-b-4 border-primary pb-8 mb-16 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
              // KANUNİ YÜKÜMLÜLÜKLER
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
              KVKK METNİ
            </h1>
          </div>
          <ShieldCheck size={48} className="text-primary hidden md:block" />
        </div>

        <div className="max-w-4xl bg-white border-4 border-primary p-8 md:p-12 space-y-8 font-sans text-sm text-secondary leading-relaxed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              1. VERİ SORUMLUSU
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ('KVKK') uyarınca,{' '}
              {COMPANY_INFO.legalNameUpper}
              olarak kişisel verilerinizi güvenli sınırlarda saklıyoruz.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              2. VERİLERİN İŞLENME AMACI
            </h2>
            <p>
              Ofislerimize ilettiğiniz teklif talepleri, iletişim bilgileri, adresler ve dijital
              araç siparişleri; projelerimizin yerine ulaştırılması, teklif analizi dökümleri ve
              yasal faturalandırmalar amacı doğrultusunda işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold uppercase text-primary mb-4">
              3. KİŞİSEL VERİNİN AKTARILMASI
            </h2>
            <p>
              Sistemlerimizde toplanan veriler hiçbir koşulda ticari amaç güden 3. şahıslara veya
              şirket ortaklıklarına pazarlanmak amacıyla aktarılmaz. Yalnızca emniyet veya adli
              makam doğrultusunda yasal taleplere istinaden paylaşılabilir.
            </p>
          </section>

          <div className="border-t border-dashed border-primary/25 pt-6 font-mono text-[10px] text-primary">
            SON GÜNCELLEME: 29.05.2026 // HUKUK DEPARTMANI // {COMPANY_INFO.shortNameUpper}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KVKK;
