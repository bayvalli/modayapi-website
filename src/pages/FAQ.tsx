import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({
  q,
  a,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b-4 border-primary overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-10 flex items-start justify-between text-left group gap-8"
      >
        <h3
          className={`font-serif text-headline-sm text-primary uppercase transition-all duration-300 ${isOpen ? 'pl-4 text-secondary' : 'group-hover:pl-4'}`}
        >
          {q}
        </h3>
        <div className="mt-1 flex-shrink-0 bg-primary text-on-primary p-1">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-12 pl-4 pr-12">
              <p className="font-sans text-body-lg text-secondary leading-relaxed border-l-2 border-primary pl-6">
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'MAY MODA YAPI PROJELERİNDE HANGİ STANDARTLARI KULLANIYOR?',
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
      className="pt-32 pb-block-gap px-margin"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center">
          <span className="font-label-caps text-secondary text-sm tracking-[0.3em] mb-4 block uppercase">
            Bilgi Merkezi
          </span>
          <h1 className="font-serif text-headline-xl text-primary uppercase leading-tight">
            Sıkça Sorulan
            <br />
            Sorular
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mt-8"></div>
        </header>

        <div className="border-t-4 border-primary">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-24 p-12 bg-primary/5 text-center">
          <p className="font-serif text-headline-sm text-primary uppercase mb-6">
            Aradığınız cevabı bulamadınız mı?
          </p>
          <Link
            to="/iletisim"
            className="inline-block border-2 border-primary px-8 py-4 font-label-caps text-xs tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
          >
            Mühendislerimize Danışın
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
