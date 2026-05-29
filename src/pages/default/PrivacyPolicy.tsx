import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

const PrivacyPolicy: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-32 pb-block-gap px-margin ${isModern ? 'pt-24 pb-block-gap-sm' : ''}`}
    >
      <div className="max-w-4xl mx-auto">
        <header
          className={`mb-12 border-b-4 border-primary pb-8 ${isModern ? 'mb-8 border-b-[3px] pb-6' : ''}`}
        >
          <h1
            className={`font-serif text-headline-lg text-primary uppercase ${isModern ? 'text-2xl' : ''}`}
          >
            Gizlilik Politikası
          </h1>
          <p className={`text-secondary font-sans mt-4 ${isModern ? 'text-sm mt-3' : ''}`}>
            Son Güncelleme: Mayıs 2024
          </p>
        </header>

        <div
          className={`space-y-8 font-sans text-body-md text-primary leading-relaxed ${isModern ? 'space-y-6 text-sm' : ''}`}
        >
          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              Genel Bilgilendirme
            </h2>
            <p>
              May Moda Yapı İnşaat A.Ş. olarak, ziyaretçilerimizin gizliliğine önem veriyoruz. Bu
              metin, verilerinizin nasıl toplandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              Veri Güvenliği
            </h2>
            <p>
              Toplanan tüm veriler, endüstri standardı güvenlik protokolleri ile korunmaktadır.
              Teknik ofisimiz ve yazılım altyapımız, verilerinizin yetkisiz erişime karşı
              güvenliğini sağlamak için sürekli güncellenmektedir.
            </p>
          </section>

          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              Üçüncü Taraf Paylaşımı
            </h2>
            <p>
              Verileriniz, yasal zorunluluklar haricinde hiçbir şekilde üçüncü taraflar ile
              pazarlama amacıyla paylaşılmaz.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
