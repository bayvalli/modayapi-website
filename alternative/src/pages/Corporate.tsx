import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hammer, Monitor, Cpu, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Corporate: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title="Kurumsal Kimliğimiz ve Şartnamelerimiz"
        description="Biz kimiz? MODA YAPI'nın tarihçesi, mühendislik değerleri ve entegre Tutar.io & CloudBook dijital faaliyetleri."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Title */}
        <div className="border-b-4 border-primary pb-8 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // MAY MODA YAPI LTD. ŞTİ.
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
            KURUMSAL PORTAL
          </h1>
        </div>

        {/* Structure Detail block Grid */}
        <div className="grid grid-cols-12 gap-gutter mb-20 items-stretch">
          <div className="col-span-12 lg:col-span-6 border-4 border-primary p-8 md:p-12 bg-white flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-secondary/50 block mb-2">
                // KİLOMETRE TAŞLARI
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary uppercase mb-6">
                MİSYON & ŞAFFFAFLIK
              </h2>
              <p className="text-body-lg text-primary leading-relaxed mb-6">
                Yalvaç merkezli kurulan şirketimiz, taahhüt, inşaat malzemeleri temini ve kömür
                tedariki alanlarında bölgenin köklü markası haline gelmiştir. İnşa ettiğimiz
                binalarda estetik detayları yüksek mukavemetli kaba yapı mühendislikleriyle
                sabitleyerek geleceğe kalıcı yuvalar bırakıyoruz.
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                Her projede zemin analizlerinden malzeme alımlarına kadar tüm dokümantasyonu iş
                ortaklarımızla şeffaf bir biçimde paylaşmak kurumsal anayasamızın birinci
                maddesidir.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-dashed border-primary/25 pt-8 mt-12">
              <div>
                <span className="font-mono text-[9px] text-secondary/40 block">
                  DEPREM KATEGORİSİ
                </span>
                <span className="font-sans font-bold text-sm text-primary">
                  EN ÜST DAYANIKLILIK
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-secondary/40 block">
                  BETONARME KALİTESİ
                </span>
                <span className="font-sans font-bold text-sm text-primary">C30 ve ÜZERİ</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 bg-primary text-on-primary p-8 md:p-12 flex flex-col justify-between border-4 border-primary">
            <div>
              <span className="font-mono text-xs text-on-primary/60 block mb-2">
                // TEKNİK ŞARTNAMELER
              </span>
              <h2 className="font-serif text-3xl font-bold text-white uppercase mb-6">
                BRÜTALİST PRENSİPLERİMİZ
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Shield size={24} className="mt-1 flex-shrink-0 opacity-80" />
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-1">
                      Mühendislik Dominansı
                    </h4>
                    <p className="text-xs opacity-70">
                      Mimariyi lüks gösteren süsler değil, onu ayakta tutan statik elemanların
                      dürüstlüğüdür.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Hammer size={24} className="mt-1 flex-shrink-0 opacity-80" />
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-1">
                      Hatasız İşçilik Garantisi
                    </h4>
                    <p className="text-xs opacity-70">
                      Milimetrik derzler, hatasız dökümler, pürüzsüz beton formlar ve kaliteli
                      malzeme seçimi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 border-2 border-on-primary/25 bg-white/5 mt-12">
              <span className="font-mono text-[9px] opacity-60">C30 YAPISAL STANDART</span>
              <p className="text-xs opacity-80 mt-2">
                Beton dökümleri sırasında sahada bağımsız yapı denetim kuruluşları gözetiminde
                numuneler alınarak laboratuvar kırım testlerine tabi tutulur.
              </p>
            </div>
          </div>
        </div>

        {/* Software Operations Branch (DİJİTAL DÖNÜŞÜM) */}
        <div className="border-4 border-primary p-8 md:p-12 bg-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs bg-primary text-on-primary px-3 py-1 font-bold tracking-widest uppercase">
                  DİJİTAL SİSTEMLER
                </span>
                <span className="text-secondary/40 text-xs font-mono">//</span>
                <Cpu size={20} className="text-primary" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold uppercase text-primary mb-6">
                YAZILIM FAALİYETLERİMİZ
              </h3>
              <p className="text-body-lg text-secondary leading-relaxed mb-6 font-sans">
                Diğer inşaat taahhüt ofislerinden farklı olarak, teknolojik vizyona sahip dinamik
                yazılım geliştiricilerle iş ortaklığı kuruyoruz. İşletmelerin dijital dönüşümlerini
                hızlandıran ve operasyonel verimliliği maksimize eden öncü finansal yönetim araçları
                geliştiriyoruz:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mb-4">
                <div className="p-6 border-2 border-primary bg-surface-container relative">
                  <h5 className="font-mono text-xs font-bold text-primary uppercase mb-2 flex items-center justify-between">
                    TUTAR.IO
                    <ChevronRight size={14} />
                  </h5>
                  <p className="text-xs text-secondary leading-relaxed">
                    Bulut tabanlı modern ön muhasebe ve finansal yönetim yazılımı. Nakit
                    akışlarınızı, faturalandırma süreçlerinizi ve gelir-gider dengenizi tek bir
                    brutalist arayüzden yönetmenizi sağlar.
                  </p>
                </div>

                <div className="p-6 border-2 border-primary bg-surface-container relative">
                  <h5 className="font-mono text-xs font-bold text-primary uppercase mb-2 flex items-center justify-between">
                    CLOUDBOOK
                    <ChevronRight size={14} />
                  </h5>
                  <p className="text-xs text-secondary leading-relaxed">
                    Kurumsal evrak arşivleme, döküman yönetimi ve şirketler arası bulut veri tabanı
                    senkronizasyon aracı. Tüm muhasebe ve inşaat hak ediş dosyalarınızı güven
                    altında tutar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex justify-center hidden lg:block">
              <div className="border-4 border-primary p-8 bg-surface-container-high relative rotate-1 shadow-[4px_4px_0px_0px_#111111]">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/10">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-secondary">
                    SYSTEM LOGS // CORE_STABLE
                  </span>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="space-y-4 font-mono text-[11px] text-primary">
                  <div>
                    <span className="text-secondary/65">&gt; npm run init:tutar</span>
                    <p className="font-bold text-green-700">TutarCloudEngine loaded successfully</p>
                  </div>
                  <div>
                    <span className="text-secondary/65">&gt; connect:cloudbook</span>
                    <p className="font-bold">Sync speed: 12GB/s [secure-tls]</p>
                  </div>
                  <div className="border-t border-dashed border-primary/25 pt-4">
                    <span className="opacity-40">MÜTEAHHİTLİK + MODERN BİLİŞİM ENTEGRASYONU</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Corporate;
