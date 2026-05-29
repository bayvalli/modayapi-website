import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Grid, List } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';
import { SEO } from '../../components/alternative/SEO';

export const Projects: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('ALL');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const locations = ['ALL', 'Yalvaç, Isparta', 'Muratpaşa, Antalya'];

  const filteredProjects =
    selectedLocation === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.location === selectedLocation);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title="Mimari ve Mühendislik Projelerimiz"
        description="MAY MODA YAPI tarafından titizlikle inşa edilen konut projeleri, daire tadilatları ve kat karşılığı yapı taahhütleri."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Header Section */}
        <div className="border-b-4 border-primary pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
              // PORTFÖYÜMÜZ
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
              İNŞA EDİLEN YAPILAR
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* View switch buttons */}
            <div className="hidden sm:flex border-2 border-primary border-heavy-2 mr-4">
              <button
                onClick={() => setViewType('grid')}
                className={`p-2 cursor-pointer transition-colors ${viewType === 'grid' ? 'bg-primary text-white' : 'hover:bg-black/5'}`}
                title="Izgara Görünümü"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-2 cursor-pointer transition-colors ${viewType === 'list' ? 'bg-primary text-white' : 'hover:bg-black/5'}`}
                title="Liste Görünümü"
              >
                <List size={18} />
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 font-mono text-xs tracking-wider uppercase border-2 transition-all cursor-pointer ${selectedLocation === loc ? 'bg-primary text-on-primary border-primary' : 'bg-white border-primary hover:bg-neutral-50 text-primary'}`}
                >
                  {loc === 'ALL' ? 'TÜM BÖLGELER' : loc.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Display Layout */}
        <AnimatePresence mode="popLayout">
          {viewType === 'grid' ? (
            <motion.div layout className="grid grid-cols-12 gap-gutter">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={proj.id}
                  className="col-span-12 md:col-span-6 lg:col-span-4 border-4 border-primary bg-white flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b-4 border-primary relative group">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 border border-on-primary/10">
                      {proj.location}
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                        {proj.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold uppercase text-primary leading-tight mb-4">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-secondary leading-relaxed line-clamp-3 mb-8">
                        {proj.description ||
                          'Projelerimiz yüksek standartlara göre inşa edilmektedir.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-dashed border-primary/25 pt-6 mt-auto">
                      <div>
                        <span className="font-mono text-[9px] text-secondary/50 block">ALAN</span>
                        <span className="font-sans font-bold text-sm text-primary">
                          {proj.area}
                        </span>
                      </div>
                      {proj.units && (
                        <div>
                          <span className="font-mono text-[9px] text-secondary/50 block">
                            BİRİMLER
                          </span>
                          <span className="font-sans font-bold text-sm text-primary">
                            {proj.units}
                          </span>
                        </div>
                      )}
                    </div>

                    <Link to={`/projeler/${proj.id}`} className="mt-8 block">
                      <BrutalistButton
                        variant="primary"
                        className="w-full flex justify-between items-center px-6"
                      >
                        <span>DETAY & KAT PLANLARI</span>
                        <ArrowRight size={16} />
                      </BrutalistButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div layout className="space-y-6">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  key={proj.id}
                  className="border-col-span-12 border-4 border-primary bg-white p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]"
                >
                  <div className="w-full lg:w-1/3 aspect-[16/10] border-4 border-primary overflow-hidden relative flex-shrink-0">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover contrast-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-grow w-full">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">
                        {proj.category}
                      </span>
                      <span className="text-secondary/40 text-[10px] font-mono">•</span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-primary uppercase font-bold">
                        <MapPin size={10} />
                        {proj.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold uppercase text-primary mb-3">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-secondary leading-relaxed mb-6 max-w-3xl line-clamp-2">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-b border-dashed border-primary/25 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-secondary/60">ALAN:</span>
                        <span className="font-sans font-bold text-sm text-primary">
                          {proj.area}
                        </span>
                      </div>
                      {proj.units && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-secondary/60">
                            BİRİM SAYISI:
                          </span>
                          <span className="font-sans font-bold text-sm text-primary">
                            {proj.units}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-secondary/60">BETON:</span>
                        <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/5 border border-primary/20">
                          C30 HSR-HAZIR
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto flex-shrink-0">
                    <Link to={`/projeler/${proj.id}`}>
                      <BrutalistButton
                        variant="primary"
                        className="w-full lg:w-auto px-8 py-4 flex gap-3 items-center"
                      >
                        <span>İNCELE</span>
                        <ArrowRight size={16} />
                      </BrutalistButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
