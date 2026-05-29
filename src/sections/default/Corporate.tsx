import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';

export const Corporate: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="corporate" className="py-block-gap">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2 z-20">
            <h1 className="text-headline-xl text-on-primary mb-12 uppercase">
              {t('corporate.title')}
            </h1>
          </div>

          <div className="col-span-12 md:col-span-11 md:col-start-2 -mt-24 md:-mt-48 z-10">
            <div className="w-full h-[500px] border-heavy overflow-hidden bg-primary">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxpG76DoAYO13UGlRRASrcKWIgxnVZe2U1U9eDF7HxS4Wc1gVJuv-S1uR1ftRr2yol0Bj0QLn4pHlWHKAfPYLhHQlHdgSai0ETm6d029U0NMFugMpnJl1Gf8W32-obLrnaMLj_1sbZK_4OAWlNqJPWhperM37WzSmNL62XixHHM_IoVG7Puq47aCk8cDNIMQ1xpg58UiQvoeVIDt6EQjuGF0OU-8jdhtn1r8D0LQTAD4-ylP6Lu_4EgUwyjddjAS3mgv6HgjSvPa8N"
                className="w-full h-full object-cover grayscale opacity-80"
                alt="Architecture study"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-gutter mt-block-gap">
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <div className="bg-surface border-heavy p-12 -mt-32 md:-mt-64 relative z-30">
              <h3 className="text-headline-lg mb-8 leading-tight">
                {language === 'tr' ? (
                  <>
                    Köklü Geçmiş, <br />
                    Yenilikçi Gelecek.
                  </>
                ) : (
                  <>
                    Deep-Rooted Past, <br />
                    Innovative Future.
                  </>
                )}
              </h3>
              <p className="text-body-lg text-on-surface mb-8">{t('corporate.historyDesc')}</p>

              <div className="space-y-6">
                <div className="border-b-2 border-primary pb-4">
                  <h4 className="text-headline-md leading-none mb-2">1960</h4>
                  <span className="font-label-caps text-secondary text-xs uppercase">
                    {language === 'tr'
                      ? 'Kiremit üretimi ve inşaat malzemesi Satışı'
                      : 'Roof Tile Production & Building Materials Sales'}
                  </span>
                </div>
                <div className="border-b-2 border-primary pb-4">
                  <h4 className="text-headline-md leading-none mb-2">1980</h4>
                  <span className="font-label-caps text-secondary text-xs uppercase">
                    {language === 'tr'
                      ? "Aile Şirketi olan Ayvallı İnşaat Ltd. Şti.'nin kuruluşu"
                      : 'Establishment of family business Ayvalli Construction Ltd.'}
                  </span>
                </div>
                <div className="border-b-2 border-primary pb-4">
                  <h4 className="text-headline-md leading-none mb-2">1999</h4>
                  <span className="font-label-caps text-secondary text-xs uppercase">
                    {language === 'tr'
                      ? 'Perakende kömür satışı faaliyetinin eklenmesi'
                      : 'Addition of retail coal distribution operations'}
                  </span>
                </div>
                <div className="border-b-2 border-primary pb-4">
                  <h4 className="text-headline-md leading-none mb-2">2017</h4>
                  <span className="font-label-caps text-secondary text-xs uppercase">
                    {language === 'tr'
                      ? `Yeni bir kimlik ile inşaat sektörüne adım atılması ve ${COMPANY_INFO.shortName}'nın kuruluşu`
                      : `Stepping into construction under a new identity and founding of ${COMPANY_INFO.shortName}`}
                  </span>
                </div>
                <div className="border-b-2 border-primary pb-4">
                  <h4 className="text-headline-md leading-none mb-2">2025</h4>
                  <span className="font-label-caps text-secondary text-xs uppercase">
                    {language === 'tr'
                      ? 'Dijital dönüşüm ve yazılım'
                      : 'Digital transformation and software'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
