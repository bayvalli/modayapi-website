import React from 'react';
import { HardHat, Package, Flame, Terminal, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

const icons: Record<string, LucideIcon> = {
  Engineering: HardHat,
  Inventory: Package,
  Flame: Flame,
  Terminal: Terminal,
};

export const Services: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';
  const borderClass = isModern ? 'border-4' : 'border-heavy';
  const animationDuration = isModern ? 0.3 : 0.4;

  return (
    <section
      id="services"
      className={`px-margin py-block-gap ${isModern ? 'bg-surface-container/15' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className={`mb-margin ${isModern ? 'mb-8' : ''}`}>
          <h2
            className={`font-label-caps text-primary border-b-2 border-primary pb-2 inline-block ${isModern ? 'text-xs tracking-[0.2em]' : ''}`}
          >
            HİZMETLERİMİZ
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${isModern ? 'gap-6' : 'gap-gutter'}`}
        >
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: animationDuration, delay: index * (isModern ? 0.05 : 0.1) }}
                className={`${borderClass} p-8 flex flex-col justify-between min-h-[400px] ${service.colorClass} ${isModern ? 'shadow-sm hover:shadow-md transition-all duration-300' : 'hover:shadow-lg'}`}
              >
                <div>
                  {Icon && (
                    <Icon
                      size={isModern ? 32 : 40}
                      className={`mb-6 text-primary ${isModern ? 'opacity-90' : ''}`}
                    />
                  )}
                  <h3
                    className={`text-headline-md text-primary mb-4 ${isModern ? 'tracking-tight' : ''}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-body-md text-on-surface-variant font-sans ${isModern ? 'text-sm' : ''}`}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className={`mt-8 border-t-2 border-primary pt-4 flex justify-between items-center ${isModern ? 'border-dashed' : ''}`}
                >
                  <span
                    className={`font-label-caps text-secondary ${isModern ? 'text-[9px]' : ''}`}
                  >
                    {service.id} / {service.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
