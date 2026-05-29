import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const AccordionItem: React.FC<{
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
  isModern: boolean;
}> = ({ q, a, isOpen, onClick, isModern }) => {
  return (
    <div
      className={`border-b-4 border-primary overflow-hidden ${isModern ? 'transition-all duration-300' : ''}`}
    >
      <button
        onClick={onClick}
        className={`w-full py-10 flex items-start justify-between text-left group gap-8 ${isModern ? 'py-6 hover:bg-primary/5' : ''}`}
      >
        <h3
          className={`font-serif text-headline-sm text-primary uppercase transition-all ${isModern ? 'duration-200 text-sm' : 'duration-300'} ${isOpen ? 'pl-4 text-secondary' : 'group-hover:pl-4'}`}
        >
          {q}
        </h3>
        <div
          className={`mt-1 flex-shrink-0 bg-primary text-on-primary p-1 ${isModern ? 'shadow-sm' : ''}`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: isModern ? 0.25 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`pb-12 pl-4 pr-12 ${isModern ? 'pb-8' : ''}`}>
              <p
                className={`font-sans text-body-lg text-secondary leading-relaxed border-l-2 border-primary pl-6 ${isModern ? 'text-sm' : ''}`}
              >
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();

  const faqs =
    language === 'tr'
      ? [
          {
            q: 'Binalarınızda hangi beton kalitesini kullanıyorsunuz?',
            a: 'Moda Yapı projelerinde en düşük beton sınıfı olarak C30 (santimetrekarede 30 megapaskal basınca dayanıklı hazır beton) kullanmaktayız. Döküm aşamalarında numuneler alıp bağımsız yapı denetim laboratuvarlarında basınç kırım testleriyle sertifikalandırıyoruz.',
          },
          {
            q: 'Kat karşılığı inşaat tekliflerinde arsa değerleme kriterleriniz nelerdir?',
            a: 'Arsa payı, imar durumu, kat mülkiyeti imkanı, yol cephesi ve zemin parametreleri Yalvaç Belediyesi imar planları doğrultusunda analiz edilir. Şeffaf bir fizibilite çıkartılarak hak sahiplerine en adil paylaşım oranları sunulur.',
          },
          {
            q: 'Mevcut eski binamızı kentsel dönüşüme sokmak için süreç nasıl ilerliyor?',
            a: "Süreç ilk olarak yetkili kurumlardan 'Riskli Yapı Raporu' alınmasıyla başlar. Ardından hisselerin 2/3 çoğunluğuyla karar alınarak mühendislik ofisimize yetki verilir. Avan projeler onaylandıktan sonra yıkım aşamasına geçilir ve yeni sarsılmaz yapının temeli atılır.",
          },
          {
            q: 'Tutar.io ve CloudBook lisans faturalandırma prosedürleriniz nasıldır?',
            a: 'Yazılım faaliyetlerimizdeki lisanslar aylık veya yıllık abonelik şeklinde satışa sunulur. Kurulum, veri senkronizasyonu ve CloudBook dijital entegrasyonu tamamen ekibimiz tarafından tamamlanarak anahtar teslim teslim edilir.',
          },
          {
            q: 'Kömür tedariğinde Yalvaç içine sevkiyat yapıyor musunuz?',
            a: 'Evet, Isparta Yalvaç ilçesi genelinde yüksek kalitede, çevre dostu yerli ve ithal kömür çeşitlerimizi dilediğiniz adrese kendi lojistik araçlarımızla taşıyıp teslim ediyoruz.',
          },
        ]
      : [
          {
            q: 'What grade of concrete do you use in your projects?',
            a: 'In Moda Yapi projects, we use C30 ready-mix concrete (resistant to 30 MPa pressure per square centimeter) as the minimum concrete class. We certify each pour by taking structural samples and performing compression tests in independent structural testing laboratories.',
          },
          {
            q: 'What are your land valuation criteria for joint-venture property contracting?',
            a: 'Land share, zoning status, condominium potential, road frontage, and soil load parameters are analyzed in compliance with local municipal zoning blueprints. We compile a fully transparent feasibility report to present fair share percentages to stakeholders.',
          },
          {
            q: 'How does the kentsel dönüşüm (urban renewal) process work for old buildings?',
            a: "The process starts by obtaining a 'Risk Assessment Report' from authorized governmental organizations. Following the 2/3 shareholder majority resolution, our engineering office is authorized to draft layouts. After building demolition, the foundation for the new unshakeable structure is laid.",
          },
          {
            q: 'What are the billing models for Tutar.io and CloudBook software?',
            a: 'Our enterprise software solutions are available under flexible monthly or annual subscription plans. System setup, ledger data integrations, and CloudBook digital installations are fully managed by our technical team for a turnkey delivery.',
          },
          {
            q: 'Do you deliver coal within the Isparta Yalvac region?',
            a: 'Yes, we carry and deliver high-calorie, eco-friendly domestic and imported coal varieties directly to your address using our own logistics vehicles across Yalvac and Isparta.',
          },
        ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-32 pb-block-gap px-margin ${isModern ? 'pt-24 pb-block-gap' : ''}`}
    >
      <div className="max-w-4xl mx-auto">
        <header className={`mb-20 text-center ${isModern ? 'mb-16' : ''}`}>
          <span
            className={`font-label-caps text-secondary text-sm tracking-[0.3em] mb-4 block uppercase ${isModern ? 'text-xs' : ''}`}
          >
            {language === 'tr' ? 'Bilgi Merkezi' : 'Information Center'}
          </span>
          <h1
            className={`font-serif text-headline-xl text-primary uppercase leading-tight ${isModern ? 'text-2xl' : ''}`}
          >
            {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
          </h1>
          <div
            className={`h-1 w-20 bg-primary mx-auto mt-8 ${isModern ? 'h-[2px] w-12 mt-6' : ''}`}
          ></div>
        </header>

        <div className="border-t-4 border-primary">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              q={faq.q.toUpperCase()}
              a={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isModern={isModern}
            />
          ))}
        </div>

        <div
          className={`mt-24 p-12 bg-primary/5 text-center ${isModern ? 'mt-16 p-8 bg-primary/3 shadow-sm' : ''}`}
        >
          <p
            className={`font-serif text-headline-sm text-primary uppercase mb-6 ${isModern ? 'text-base mb-4' : ''}`}
          >
            {language === 'tr'
              ? 'Aradığınız cevabı bulamadınız mı?'
              : 'Could not find the answer you are looking for?'}
          </p>
          <Link
            to="/iletisim"
            className={`inline-block border-2 border-primary px-8 py-4 font-label-caps text-xs tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase ${isModern ? 'px-6 py-3 border-4 duration-200' : 'duration-300'}`}
          >
            {language === 'tr' ? 'Mühendislerimize Danışın' : 'Consult Our Engineers'}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
