import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap px-margin"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b-4 border-primary pb-8">
          <h1 className="font-serif text-headline-lg text-primary uppercase">
            Gizlilik Politikası
          </h1>
          <p className="text-secondary font-sans mt-4">Son Güncelleme: Mayıs 2024</p>
        </header>

        <div className="space-y-8 font-sans text-body-md text-primary leading-relaxed">
          <section>
            <h2 className="font-serif text-headline-sm mb-4 uppercase">Genel Bilgilendirme</h2>
            <p>
              May Moda Yapı İnşaat A.Ş. olarak, ziyaretçilerimizin gizliliğine önem veriyoruz. Bu
              metin, verilerinizin nasıl toplandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-headline-sm mb-4 uppercase">Veri Güvenliği</h2>
            <p>
              Toplanan tüm veriler, endüstri standardı güvenlik protokolleri ile korunmaktadır.
              Teknik ofisimiz ve yazılım altyapımız, verilerinizin yetkisiz erişime karşı
              güvenliğini sağlamak için sürekli güncellenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-headline-sm mb-4 uppercase">Üçüncü Taraf Paylaşımı</h2>
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
