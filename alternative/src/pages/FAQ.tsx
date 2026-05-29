import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Binalarınızda hangi beton kalitesini kullanıyorsunuz?',
      answer:
        'Moda Yapı projelerinde en düşük beton sınıfı olarak C30 (santimetrekarede 30 megapaskal basınca dayanıklı hazır beton) kullanmaktayız. Döküm aşamalarında numuneler alıp bağımsız yapı denetim laboratuvarlarında basınç kırım testleriyle sertifikalandırıyoruz.',
    },
    {
      question: 'Kat karşılığı inşaat tekliflerinde arsa değerleme kriterleriniz nelerdir?',
      answer:
        'Arsa payı, imar durumu, kat mülkiyeti imkanı, yol cephesi ve zemin parametreleri Yalvaç Belediyesi imar planları doğrultusunda analiz edilir. Şeffaf bir fizibilite çıkartılarak hak sahiplerine en adil paylaşım oranları sunulur.',
    },
    {
      question: 'Mevcut eski binamızı kentsel dönüşüme sokmak için süreç nasıl ilerliyor?',
      answer:
        "Süreç ilk olarak yetkili kurumlardan 'Riskli Yapı Raporu' alınmasıyla başlar. Ardından hisselerin 2/3 çoğunluğuyla karar alınarak mühendislik ofisimize yetki verilir. Avan projeler onaylandıktan sonra yıkım aşamasına geçilir ve yeni sarsılmaz yapının temeli atılır.",
    },
    {
      question: 'Tutar.io ve CloudBook lisans faturalandırma prosedürleriniz nasıldır?',
      answer:
        'Yazılım faaliyetlerimizdeki lisanslar aylık veya yıllık abonelik şeklinde satışa sunulur. Kurulum, veri senkronizasyonu ve CloudBook dijital entegrasyonu tamamen ekibimiz tarafından tamamlanarak anahtar teslim teslim edilir.',
    },
    {
      question: 'Kömür tedariğinde Yalvaç içine sevkiyat yapıyor musunuz?',
      answer:
        'Evet, Isparta Yalvaç ilçesi genelinde yüksek kalitede, çevre dostu yerli ve ithal kömür çeşitlerimizi dilediğiniz adrese kendi lojistik araçlarımızla taşıyıp teslim ediyoruz.',
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
        title="Sıkça Sorulan Sorular"
        description="Mühendislik, statik şartnameler, kat karşılığı inşaat sözleşmeleri ve yazılım lisanslarımız hakkında en sık sorulan soruların cevapları."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Title */}
        <div className="border-b-4 border-primary pb-8 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // KAPSAMLI BİLGİ DOKÜMANI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
            SIKÇA SORULAN SORULAR
          </h1>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-4 border-primary bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 font-serif text-lg md:text-xl font-bold uppercase text-primary hover:bg-neutral-50 transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className="text-secondary/60 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div className="p-1 border-2 border-primary flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 md:p-8 pt-0 border-t-2 border-dashed border-primary/10 font-sans text-sm text-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
