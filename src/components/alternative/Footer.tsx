import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Palette, Sun, Moon, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const { theme, mode, toggleTheme, toggleMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const quickLinks = [
    { to: '/projeler', label: t('nav.projects') },
    { to: '/surec', label: t('nav.process') },
    { to: '/kurumsal', label: t('nav.corporate') },
    { to: '/iletisim', label: t('nav.contact') },
    { to: '/teklif-al', label: t('nav.quote') },
  ];

  const policyLinks = [
    { to: '/kvkk', label: t('legal.kvkkTitle') },
    { to: '/gizlilik-politikasi', label: t('legal.privacyTitle') },
    { to: '/cerez-tercihleri', label: t('legal.cookiesTitle') },
    { to: '/sss', label: language === 'tr' ? 'S.S.S.' : 'F.A.Q.' },
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
            <p className="opacity-70 text-sm max-w-sm leading-relaxed mb-6">{t('hero.subtitle')}</p>
          </div>
          <div className="font-mono text-xs opacity-40">
            © {currentYear} {COMPANY_INFO.shortNameUpper} // {t('common.systemActive')}
          </div>
        </div>

        {/* Links Col */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col gap-6 mb-8 md:mb-0">
          <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">
            {t('common.navigation')}
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
              {t('common.contactChannels')}
            </span>
            <div className="space-y-4 text-sm opacity-80 font-mono">
              <a
                href={`tel:${COMPANY_INFO.phoneCall}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={14} />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.addressFull}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-on-primary/10 pt-6">
            <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase mb-3 block">
              {t('common.legalLinks')}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] opacity-60">
              {policyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-4 py-3 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-all border border-on-primary/30 hover:border-on-primary/50 font-mono text-[10px] uppercase font-bold cursor-pointer"
                aria-label="Tema değiştir"
                title={`${theme === 'default' ? 'Alternatif' : 'Varsayılan'} temaya geç`}
              >
                <Palette size={12} />
                <span>
                  {theme === 'default' ? t('common.alternativeTheme') : t('common.defaultTheme')}
                </span>
              </button>

              <button
                onClick={toggleMode}
                className="inline-flex items-center gap-2 px-4 py-3 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-all border border-on-primary/30 hover:border-on-primary/50 font-mono text-[10px] uppercase font-bold cursor-pointer"
                aria-label="Koyu/Açık tema değiştir"
                title={`${mode === 'light' ? 'Koyu' : 'Açık'} temaya geç`}
              >
                {mode === 'light' ? <Moon size={12} /> : <Sun size={12} />}
                <span>{mode === 'light' ? t('common.darkMode') : t('common.lightMode')}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-4 py-3 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-all border border-on-primary/30 hover:border-on-primary/50 font-mono text-[10px] uppercase font-bold cursor-pointer"
                aria-label="Dil değiştir"
                title="Change Language / Dil Değiştir"
              >
                <Globe size={12} />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
