import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Shield, Terminal, HardHat, Layers, Award } from 'lucide-react';
import { PROJECTS, SERVICES, COMPANY_INFO } from '../../constants';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';
import { SEO } from '../../components/alternative/SEO';

export const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Engineering':
        return <HardHat size={28} className="text-primary" />;
      case 'Inventory':
        return <Layers size={28} className="text-primary" />;
      case 'Flame':
        return <Flame size={28} className="text-primary" />;
      case 'Terminal':
        return <Terminal size={28} className="text-primary" />;
      default:
        return <HardHat size={28} className="text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEO
        title="Güvene Atılan Sarsılmaz Temeller"
        description={`Mühendisliğin estetikle buluştuğu ${COMPANY_INFO.legalNameShortUpper} projeleri. Depreme dayanıklı, C30 beton standartlarında modern ve minimalist yarınlar inşa ediyoruz.`}
      />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-margin bg-white border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-gutter relative z-10 py-16">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-secondary uppercase mb-6 block">
                {COMPANY_INFO.shortNameUpper} // GÜVEN VE İHTİŞAM BİR ARADA
              </span>
              <h1 className="text-[11vw] lg:text-[7.5rem] font-bold text-primary leading-[0.85] uppercase tracking-tighter mb-8 font-sans">
                SARSILMAZ
                <br />
                TEMELLER.
              </h1>
              <p className="text-body-lg text-secondary max-w-xl mb-10 leading-relaxed border-l-4 border-primary pl-6 font-sans">
                Yüksek dayanıklılık normları ve brütalist yapı estetiğini harmanlayarak, depreme tam
                dayanıklı, güvenli ve lüks yaşam merkezleri üretiyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projeler">
                  <BrutalistButton variant="primary">PROJELERİ İNCELE</BrutalistButton>
                </Link>
                <Link to="/teklif-al">
                  <BrutalistButton variant="secondary">HIZLI TEKLİF AL</BrutalistButton>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-4 hidden lg:flex items-center justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-[4/5] border-heavy bg-surface-container overflow-hidden shadow-[12px_12px_0px_0px_#111111]"
            >
              <img
                src="/assets/h_salih_1.png"
                alt={`${COMPANY_INFO.shortName} Monolithic Structure`}
                className="w-full h-full object-cover contrast-115 grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-all pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Manifesto / Vision */}
      <section className="py-24 px-margin bg-surface-container border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
              <span className="font-mono text-xs tracking-widest text-secondary block mb-4">
                // MANİFESTO
              </span>
              <h2 className="font-serif text-[3.5rem] leading-[1] text-primary uppercase font-bold tracking-tight mb-8">
                Mühendislik
                <br />
                Dürüstlüktür.
              </h2>
              <div className="w-20 h-2 bg-primary"></div>
            </div>

            <div className="col-span-12 lg:col-span-7 space-y-6">
              <p className="text-xl text-primary leading-relaxed font-sans">
                {COMPANY_INFO.shortName} olarak her beton dökümünde, her demir bağında ve her mimari
                kararda yalnızca bina değil; güven ve gelecek dokuyoruz. Estetik çizgilerimizin
                arkasında, en zorlu zeminlerde dahi sarsılmaz kalacak matematik yatıyor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-primary bg-white text-primary">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      Maksimum Deprem Güvenliği
                    </h4>
                    <p className="text-sm text-secondary">
                      C30+ beton standartları, asmolen döşeme ve zemin mekaniği hassasiyeti.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-primary bg-white text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      Mimari Disiplin
                    </h4>
                    <p className="text-sm text-secondary">
                      Monolitik dış cephe bütünlüğü ve modern brutalist minimalist fonksiyonel
                      tasarımlar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-margin bg-white border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16 flex justify-between items-end border-b-4 border-primary pb-8">
            <div>
              <span className="font-mono text-xs tracking-widest text-secondary uppercase block mb-2">
                // KABİLİYETLERİMİZ
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase text-primary">
                İŞ KARTELİMİZ
              </h2>
            </div>
            <Link
              to="/kurumsal"
              className="text-xs md:text-sm font-mono text-secondary hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider"
            >
              BİZİ TANIYIN <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="col-span-12 md:col-span-6 lg:col-span-3 border-4 border-primary p-8 md:p-10 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 border-2 border-primary bg-surface-container">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <span className="font-mono text-xs text-secondary/40 font-bold">#{srv.id}</span>
                  </div>
                  <span className="font-mono text-[10px] bg-primary text-on-primary px-2.5 py-1 tracking-widest uppercase mb-4 inline-block">
                    {srv.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase text-primary mb-4 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-sans mb-8">
                    {srv.description}
                  </p>
                </div>
                {srv.id === '04' && (
                  <div className="border-t border-dashed border-primary/25 pt-4 mt-auto">
                    <span className="font-mono text-[9px] text-secondary tracking-wider block">
                      ENTEGRE ARAÇLAR:
                    </span>
                    <span className="font-mono text-xs font-bold text-primary">
                      Tutar.io & CloudBook
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel / Grid */}
      <section className="py-24 px-margin bg-surface-container">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16 flex justify-between items-end border-b-4 border-primary pb-8">
            <div>
              <span className="font-mono text-xs tracking-widest text-secondary uppercase block mb-2">
                // DETAYLI PORTFÖY
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase text-primary">
                ÖNE ÇIKAN PROJELERİMİZ
              </h2>
            </div>
            <Link
              to="/projeler"
              className="text-xs md:text-sm font-mono text-secondary hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider"
            >
              TÜM PROJELER <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="col-span-12 lg:col-span-4 border-4 border-primary overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden border-b-4 border-primary relative group">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-on-primary/10">
                    {proj.location}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      {proj.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary uppercase mb-4 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-3 mb-8">
                      {proj.description ||
                        `${proj.title} projesi yüksek kalite standartlarımızla hayata geçirilmektedir.`}
                    </p>
                  </div>
                  <Link to={`/projeler/${proj.id}`} className="mt-auto">
                    <BrutalistButton
                      variant="primary"
                      className="w-full flex justify-between items-center px-6"
                    >
                      <span>DETAYLARI İNCELE</span>
                      <ArrowRight size={16} />
                    </BrutalistButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
