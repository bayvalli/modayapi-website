import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

const KVKK: React.FC = () => {
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
            Kişisel Verilerin Korunması Kanunu (KVKK)
          </h1>
          <p className={`text-secondary font-sans mt-4 ${isModern ? 'text-sm mt-3' : ''}`}>
            May Moda Yapı İnşaat A.Ş. Aydınlatma Metni
          </p>
        </header>

        <div
          className={`space-y-8 font-sans text-body-md text-primary leading-relaxed ${isModern ? 'space-y-6 text-sm' : ''}`}
        >
          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              1. Veri Sorumlusu
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, May Moda Yapı İnşaat Anonim
              Şirketi olarak kişisel verilerinizi veri sorumlusu sıfatıyla işliyoruz.
            </p>
          </section>

          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              2. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p>Kişisel verileriniz, aşağıdaki amaçlarla sınırlı olarak işlenmektedir:</p>
            <ul
              className={`list-disc pl-6 mt-2 space-y-2 ${isModern ? 'pl-4 mt-1 space-y-1' : ''}`}
            >
              <li>Faaliyetlerin mevzuata uygun yürütülmesi</li>
              <li>Sözleşme süreçlerinin takibi</li>
              <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması</li>
              <li>Hukuk işlerinin takibi ve yürütülmesi</li>
            </ul>
          </section>

          <section>
            <h2
              className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-base mb-3' : ''}`}
            >
              3. Kişisel Veri Toplamanın Yöntemi
            </h2>
            <p>
              Kişisel verileriniz; web sitemiz, teklif formlarımız ve kurumsal iletişim kanallarımız
              aracılığıyla fiziksel veya dijital ortamlarda toplanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-headline-sm mb-4 uppercase">4. İletişim</h2>
            <p>
              KVKK kapsamındaki haklarınız için kvkk@modayapi.com adresi üzerinden bizimle iletişime
              geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default KVKK;
