import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { COMPANY_INFO } from '../../constants';

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

  const faqs = [
    {
      q: `${COMPANY_INFO.legalNameShortUpper} PROJELERİNDE HANGİ STANDARTLARI KULLANIYOR?`,
      a: 'Tüm projelerimizde Eurocode 8 ve güncel Türkiye Deprem Yönetmeliği standartlarını temel alıyoruz. Yapısal tasarımda C40 ve üzeri beton sınıflarını tercih etmekteyiz.',
    },
    {
      q: 'TEKLİF SÜRECİ NASIL İŞLİYOR?',
      a: 'Web sitemizdeki teknik talep formunu doldurduktan sonra, uzman mühendis kadromuz 48 saat içerisinde projenizin ön değerlendirmesini yaparak sizinle iletişime geçer.',
    },
    {
      q: 'YAZILIM FAALİYETLERİNİZİN İNŞAAT SEKTÖRÜYLE BAĞLANTISI NEDİR?',
      a: 'Geliştirdiğimiz yazılımlar (Tutar.io, CloudBook), inşaat muhasebesi ve saha operasyonlarının dijitalleşmesini sağlayarak verimliliği artırmayı hedefler.',
    },
    {
      q: 'KENTSEL DÖNÜŞÜM HİZMETİ VERİYOR MUSUNUZ?',
      a: 'Evet, özellikle İstanbul ve çevresinde mühendislik odaklı kentsel dönüşüm taahhütleri gerçekleştirmekteyiz.',
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
            Bilgi Merkezi
          </span>
          <h1
            className={`font-serif text-headline-xl text-primary uppercase leading-tight ${isModern ? 'text-2xl' : ''}`}
          >
            Sıkça Sorulan
            <br />
            Sorular
          </h1>
          <div
            className={`h-1 w-20 bg-primary mx-auto mt-8 ${isModern ? 'h-[2px] w-12 mt-6' : ''}`}
          ></div>
        </header>

        <div className="border-t-4 border-primary">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              q={faq.q}
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
            Aradığınız cevabı bulamadınız mı?
          </p>
          <Link
            to="/iletisim"
            className={`inline-block border-2 border-primary px-8 py-4 font-label-caps text-xs tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase ${isModern ? 'px-6 py-3 border-4 duration-200' : 'duration-300'}`}
          >
            Mühendislerimize Danışın
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
