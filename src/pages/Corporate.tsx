import React from 'react';
import { Corporate as CorporateSection } from '../sections/Corporate';
import { motion } from 'motion/react';

const Corporate: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <CorporateSection />

      {/* Faaliyet Konuları Section from the plan */}
      <section className="mt-block-gap px-margin relative">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-24 text-center">
            <h2 className="font-serif text-headline-xl text-primary uppercase">
              FAALİYET
              <br />
              KONULARI
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-32">
            {[
              {
                title: 'Müteahhitlik & İnşaat',
                desc: 'Ana faaliyet alanımız olan taahhüt işlerinde, büyük ölçekli ve nitelikli projelere imza atıyoruz.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3oDj4ILIAfdGKtQB_o3-NGzsB_lLjZu02e7xtSOG2z9pUhkSK4PzIzDlMZ5ofLeneJxN_fb0Eu_sVAtHo4CweX1skkdsvq_473wK_oVj5-83bHRaFFJoUXdq4gB9vAYGgkHu41cNcUAAHLSj7OEux7_UgM5akJ-aAflhoIJ4crglFOy_8EC_R5Wf8I2fjgwRiiLMzYMIEQxjELwiqEUQBrA3jL6ykAmYatnMIOfTVHzQq4DrXnTRoG60ZN0wInGPk0L9mfBPJKAfK',
              },
              {
                title: 'İnşaat Malzemeleri',
                desc: 'Küresel tedarik ağımızla, projeler için yüksek standartlarda inşaat malzemeleri sağlıyoruz.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaCW5RAbkUJeeWosciYb2Hu37mXAbTqoWMUExuGJ9OEGhDAFaEVqiTLGk_PhNbhO4ianrMMc983oohOHAb3kwE3o8vJVfdSr1iVGo4zRMJ74vlKoM0fQ2jusQlMoDW345f48mB7rc2P8GX7nW8sA_s3CX6T-NRMvjyyjVMC0tnuQRepITbZunBcHsySNpNESKJfdoZG9l78NuaDNAwEmhh4166cIxyvZNyxh2G99Hnn4y-PFdwPbcwqEEXXmECWyCBnvKVgb2cuepr',
              },
              {
                title: 'Kömür Satışı',
                desc: 'Enerji ve ticaret sektöründeki varlığımızı sürdürerek güvenilir kömür tedariği gerçekleştiriyoruz.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe4XDekyfaQEDCNq-xwrSbmXQZAQJWQ9SvSWWqsjGH-M9HiCPnqxeDQ3yGYwgJN8jnxeaP8vLTSC8L8Y3JjucB2yiOLz5FGGOzk4MAQ3A79nr27sr6ulzHhiFiWJMxnxXBhuPgKwyXJHu3GfOptz7NVJtreZ8wWcwG9kaimhcK-MfOz_0l-wUFU7VW3iVwT7XvcH0PAoUJ-S-Xrs1gVfpddyLPul9vaCtPerrCxCuIrd6mLtxqXy7IElI6TKsGYB461uxFpqsRCj-z',
              },
              {
                title: 'Yazılım Faaliyetleri',
                desc: 'Tutar.io ve CloudBook gibi platformlarla sektörde dijital dönüşüme öncülük ediyoruz.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFu06eygaogv98BVMwN5g14aoOCZjVnMs6J7G3YcFfUDNvO9lggEWRmJ9r4Qyoffy6BCgHHHV91X9usjX9624CTN15UNbzDIrzDSo9jRMaZxdi2vNIWdZWROl0xvuptDq0WQv4VInfRs3IvBhY5b0L3SwszZetpvw7tMxGWM0jOeH6sqWTuR5c4xlg1FZUgGBZbr1SJXZJt0hx0f1_SnaWqZW6beIKsEV4VEVptTjAxI1KnmeeTwsc3lhXAiX7oRm4DXo9kMwMSYSm',
              },
            ].map((item, i) => (
              <div key={i} className={`relative group ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
                <div className="w-full h-[400px] border-4 border-primary relative overflow-hidden bg-secondary z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
                  />
                </div>
                <div
                  className={`bg-surface border-4 border-primary p-8 absolute -bottom-16 ${i % 2 === 0 ? '-right-8' : '-left-8'} w-4/5 z-20 shadow-xl`}
                >
                  <h3 className="font-serif text-headline-md font-bold text-primary mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mühendislik Gücü Section */}
      <section className="mt-block-gap px-margin pt-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter relative">
          <div className="col-span-12 md:col-span-10 md:col-start-2 z-10">
            <div className="w-full h-[600px] border-4 border-primary relative overflow-hidden bg-secondary">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWOlvnnHkRpvKtPD4pjaOE0LI1kRI-ADRPRDHZYgKP8E_JNQQLYhu8Ybs43MWHcQ9QWZeuCPmQY47WRpmtGEubHFD0Vc2xkWmHbuP2pIudAEqTk6LybzwefWuBZKgDmIno2mGmPaerbbQ46BxyaQnowmE00aUHQou7SktPDYgfp3L_W7jQAZrXkBq2du3wLvRKaZbl-wK5CFO3pA04VweMak68UFFQaZSv0XYHIYU_vx7_oLZekvdHL1rPDHDKLwBTeKgKAVKDQeDp"
                className="w-full h-full object-cover grayscale opacity-90"
                alt="Engineering Team"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-6 z-20 -mt-32 md:-mt-64 relative">
            <div className="bg-surface border-4 border-primary p-12">
              <h2 className="font-serif text-headline-lg text-primary mb-8 leading-tight">
                Mühendislik
                <br />
                Gücü.
              </h2>
              <p className="font-sans text-body-lg text-on-surface mb-8">
                Kaliteden ödün vermeden, yenilikçi ve sağlam mühendislik çözümleri üretiriz. Tüm
                süreçlerimizde açık iletişim kurar, paydaşlarımızla güvene dayalı ilişkiler inşa
                ederiz.
              </p>
              <ul className="space-y-4 font-serif text-headline-md">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary"></div> Güvenilirlik
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary"></div> Mükemmellik
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary"></div> Şeffaflık
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Corporate;
