import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Sun, Moon, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

export const Footer: React.FC = () => {
  const { theme, mode, toggleTheme, toggleMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-on-primary border-t-8 border-primary px-margin py-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-gutter items-start">
          {/* Brand & Copy */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="font-serif text-headline-lg text-surface-bright mb-6 uppercase tracking-tighter">
                {COMPANY_INFO.shortNameUpper}
              </h2>
              <div className="h-2 w-32 bg-surface-bright mb-8"></div>
              <p className="text-surface-variant opacity-80 max-w-sm font-sans text-body-md leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-surface-bright/20 pl-6">
              <p className="text-surface-bright font-label-caps text-xs tracking-[0.2em]">
                {t('common.legalTitle')}
              </p>
              <p className="text-surface-variant font-sans text-body-sm uppercase">
                {COMPANY_INFO.legalName}
              </p>
            </div>

            <p className="text-surface-variant/40 font-label-caps text-[10px] tracking-widest pt-8 uppercase">
              {t('common.rightsReserved')}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-4 py-3 bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright transition-all border-2 border-surface-bright/30 hover:border-surface-bright/50 font-mono text-xs uppercase font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Tema değiştir"
                title={`${theme === 'default' ? 'Alternatif' : 'Varsayılan'} temaya geç`}
              >
                <Palette size={16} />
                <span>
                  {theme === 'default' ? t('common.alternativeTheme') : t('common.defaultTheme')}
                </span>
              </motion.button>

              <motion.button
                onClick={toggleMode}
                className="inline-flex items-center gap-2 px-4 py-3 bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright transition-all border-2 border-surface-bright/30 hover:border-surface-bright/50 font-mono text-xs uppercase font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Koyu/Açık tema değiştir"
                title={`${mode === 'light' ? 'Koyu' : 'Açık'} temaya geç`}
              >
                {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                <span>{mode === 'light' ? t('common.darkMode') : t('common.lightMode')}</span>
              </motion.button>

              <motion.button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-4 py-3 bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright transition-all border-2 border-surface-bright/30 hover:border-surface-bright/50 font-mono text-xs uppercase font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Dil değiştir"
                title="Change Language / Dil Değiştir"
              >
                <Globe size={16} />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </motion.button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3 lg:col-start-8 space-y-8">
            <h3 className="font-label-caps text-surface-bright/60 text-xs tracking-widest uppercase">
              {t('common.legalLinks')}
            </h3>
            <ul className="flex flex-col gap-6 font-label-caps text-sm">
              <li>
                <Link
                  to="/kvkk"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  {t('legal.kvkkTitle')}
                </Link>
              </li>
              <li>
                <Link
                  to="/gizlilik-politikasi"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  {t('legal.privacyTitle')}
                </Link>
              </li>
              <li>
                <Link
                  to="/cerez-tercihleri"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  {t('legal.cookiesTitle')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 lg:col-start-11 space-y-8">
            <h3 className="font-label-caps text-surface-bright/60 text-xs tracking-widest uppercase">
              {t('common.navigation')}
            </h3>
            <ul className="flex flex-col gap-6 font-label-caps text-sm">
              <li>
                <Link
                  to="/sss"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  {language === 'tr' ? 'S.S.S.' : 'F.A.Q.'}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-surface-variant hover:text-surface-bright transition-all inline-block hover:translate-x-2"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
