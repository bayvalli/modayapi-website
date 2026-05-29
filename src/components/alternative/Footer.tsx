import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Palette } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const { theme, toggleTheme } = useTheme();

  const quickLinks = [
    { to: '/projeler', label: 'PROJELERİMİZ' },
    { to: '/surec', label: 'İŞ SÜRECİ' },
    { to: '/kurumsal', label: 'KURUMSAL' },
    { to: '/iletisim', label: 'İLETİŞİM' },
    { to: '/teklif-al', label: 'TEKLİF AL' },
  ];

  const policyLinks = [
    { to: '/kvkk', label: 'KVKK AYDINLATMA METNİ' },
    { to: '/gizlilik-politikasi', label: 'GİZLİLİK POLİTİKASI' },
    { to: '/cerez-tercihleri', label: 'ÇEREZ TERCİHLERİ' },
    { to: '/sss', label: 'S.S.S.' },
  ];

  return (
    <footer className="bg-primary text-on-primary border-t-8 border-primary px-margin py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter">
        {/* Brand Col */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between mb-8 lg:mb-0">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="opacity-70 text-sm max-w-sm leading-relaxed mb-6">
              Mühendisliğin estetikle buluştuğu yüksek standartlarda yapılar. Depreme dayanıklı,
              monolitik, dayanıklı tasarımlarla yarınların sarsılmaz temellerini inşa ediyoruz.
            </p>
          </div>
          <div className="font-mono text-xs opacity-40">
            © {currentYear} MODA YAPI // SİSTEM AKTİF
          </div>
        </div>

        {/* Links Col */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col gap-6 mb-8 md:mb-0">
          <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">
            NAVİGASYON
          </span>
          <ul className="space-y-3 font-label-caps text-xs">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white/80 hover:underline transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info & Policies */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase mb-4 block">
              İLETİŞİM KANALLARI
            </span>
            <div className="space-y-4 text-sm opacity-80 font-mono">
              <a
                href="tel:+902462181818"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={14} />
                +90 246 218 18 18
              </a>
              <a
                href="mailto:info@modayapi.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={14} />
                info@modayapi.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0" />
                <span>Sanayi Mahallesi, 104. Cadde, No: 42 Yalvaç / Isparta</span>
              </div>
            </div>
          </div>

          <div className="border-t border-on-primary/10 pt-6">
            <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase mb-3 block">
              YASAL KANUNLAR
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] opacity-60">
              {policyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-all border border-on-primary/30 hover:border-on-primary/50 font-mono text-[10px] uppercase font-bold"
              aria-label="Tema değiştir"
              title={`${theme === 'default' ? 'Alternatif' : 'Varsayılan'} temaya geç`}
            >
              <Palette size={12} />
              <span>{theme === 'default' ? 'ALTERNATİF' : 'VARSAYILAN'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
