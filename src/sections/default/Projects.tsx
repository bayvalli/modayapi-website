import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import { BrutalistButton } from '../../components/BrutalistButton';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const isModern = theme === 'alternative';
  const animationDuration = isModern ? 0.4 : 0.8;
  const borderClass = isModern ? 'border-4' : 'border-heavy';
  const shadowClass = isModern ? 'shadow-md' : 'shadow-none';

  return (
    <section
      id="projects"
      className={`py-block-gap ${isModern ? 'bg-gradient-to-br from-surface via-surface-container/30 to-surface' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        <header className="mb-block-gap flex flex-col md:flex-row justify-between items-end gap-gutter">
          <h2
            className={`text-headline-xl text-primary leading-none ${isModern ? 'tracking-tighter' : ''}`}
          >
            {language === 'tr' ? (
              <>
                İNŞAAT
                <br />
                KALİTESİ
              </>
            ) : (
              <>
                CONSTRUCTION
                <br />
                EXCELLENCE
              </>
            )}
          </h2>
          <div className={`md:w-1/3 ${isModern ? 'border-b-4' : 'border-b-4'} border-primary pb-4`}>
            <p
              className={`text-body-md text-secondary lowercase ${isModern ? 'text-sm' : ''} font-sans`}
            >
              {language === 'tr'
                ? 'Güvenilir, dayanıklı ve modern mühendislik standartlarında inşa edilmiş seçkin taahhüt projelerimiz.'
                : 'Our select contracting projects constructed under reliable, robust, and modern engineering guidelines.'}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-block-gap">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const projKey =
              project.id === 'proj-01' ? 'p01' : project.id === 'proj-02' ? 'p02' : 'p03';
            const translatedFeatures = t(`projects.${projKey}.features`) as string;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: animationDuration }}
                className="grid grid-cols-12 gap-gutter items-center relative py-6 md:py-12"
              >
                {/* Image Column */}
                <div
                  className={`col-span-12 md:col-span-8 md:row-start-1 ${isEven ? 'md:col-start-1' : 'md:col-start-5'}`}
                >
                  <Link
                    to={`/projeler/${project.id}`}
                    className={`block aspect-[16/9] ${borderClass} bg-surface-container overflow-hidden group relative cursor-pointer ${shadowClass}`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={t(`projects.${projKey}.title`)}
                      className={`w-full h-full object-cover transition-all ${isModern ? 'duration-300 group-hover:scale-110 contrast-150' : 'duration-700 group-hover:scale-105 grayscale-[30%] contrast-125 group-hover:grayscale-0'}`}
                    />
                  </Link>
                </div>

                {/* Info Block */}
                <div
                  className={`col-span-12 md:col-span-5 bg-surface ${borderClass} p-8 md:p-12 z-20 ${shadowClass} mt-8 md:mt-0 md:row-start-1 md:self-center ${isEven ? 'md:col-start-8' : 'md:col-start-1'} ${isModern ? 'border-dashed' : ''}`}
                >
                  <span
                    className={`font-label-caps text-secondary mb-4 block uppercase ${isModern ? 'text-[10px] tracking-[0.2em]' : ''}`}
                  >
                    {t(`projects.${projKey}.category`)}
                  </span>
                  <h3
                    className={`text-3xl sm:text-4xl md:text-headline-lg text-primary mb-6 leading-tight break-words ${isModern ? 'tracking-tighter' : ''}`}
                  >
                    {t(`projects.${projKey}.title`)}
                  </h3>

                  <div
                    className={`grid ${isModern ? 'grid-cols-3' : 'grid-cols-2'} gap-x-8 gap-y-4 mb-8`}
                  >
                    <div>
                      <span
                        className={`font-label-caps text-secondary block mb-1 ${isModern ? 'text-[9px]' : ''}`}
                      >
                        {language === 'tr' ? 'KONUM' : 'LOCATION'}
                      </span>
                      <span
                        className={`text-body-md font-bold ${isModern ? 'text-sm' : ''} font-sans`}
                      >
                        {t(`projects.${projKey}.location`)}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`font-label-caps text-secondary block mb-1 ${isModern ? 'text-[9px]' : ''}`}
                      >
                        {language === 'tr' ? 'ALAN' : 'GROSS AREA'}
                      </span>
                      <span
                        className={`text-body-md font-bold ${isModern ? 'text-sm' : ''} font-sans`}
                      >
                        {t(`projects.${projKey}.area`) || project.area}
                      </span>
                    </div>
                    <div className={isModern ? 'col-span-1' : 'col-span-2'}>
                      <span
                        className={`font-label-caps text-secondary block mb-1 ${isModern ? 'text-[9px]' : ''}`}
                      >
                        {isModern
                          ? language === 'tr'
                            ? 'ÖZ.'
                            : 'FEAT.'
                          : language === 'tr'
                            ? 'ÖZELLİKLER'
                            : 'FEATURES'}
                      </span>
                      <span
                        className={`text-body-md font-bold ${isModern ? 'text-[11px]' : ''} font-sans`}
                      >
                        {isModern
                          ? translatedFeatures.substring(0, 20) + '...'
                          : translatedFeatures}
                      </span>
                    </div>
                  </div>

                  <Link to={`/projeler/${project.id}`}>
                    <BrutalistButton
                      id={`project-btn-${project.id}`}
                      variant="primary"
                      className="flex items-center gap-4 w-full md:w-auto justify-center"
                    >
                      {isModern
                        ? language === 'tr'
                          ? 'İNCELE'
                          : 'EXAMINE'
                        : language === 'tr'
                          ? 'PROJEYİ İNCELE'
                          : 'EXPLORE PROJECT'}{' '}
                      <ArrowRight size={18} />
                    </BrutalistButton>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
