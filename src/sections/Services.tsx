import React from 'react';
import { HardHat, Package, Flame, Terminal, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

const icons: Record<string, LucideIcon> = {
  Engineering: HardHat,
  Inventory: Package,
  Flame: Flame,
  Terminal: Terminal,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="px-margin py-block-gap">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-margin">
          <h2 className="font-label-caps text-primary border-b-2 border-primary pb-2 inline-block">
            HİZMETLERİMİZ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border-heavy p-8 flex flex-col justify-between min-h-[400px] ${service.colorClass}`}
              >
                <div>
                  {Icon && <Icon size={40} className="mb-6 text-primary" />}
                  <h3 className="text-headline-md text-primary mb-4">{service.title}</h3>
                  <p className="text-body-md text-on-surface-variant font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t-2 border-primary pt-4 flex justify-between items-center">
                  <span className="font-label-caps text-secondary">
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
