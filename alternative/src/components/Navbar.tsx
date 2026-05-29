import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrutalistButton } from './BrutalistButton';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile navigation on pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/projeler', label: 'PROJELER' },
    { to: '/surec', label: 'SÜREÇ' },
    { to: '/kurumsal', label: 'KURUMSAL' },
    { to: '/iletisim', label: 'İLETİŞİM' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b-4 border-primary px-margin py-6"
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo variant="dark" />
          </Link>

          <ul className="hidden md:flex gap-8 items-center font-label-caps uppercase tracking-widest text-secondary">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-primary transition-colors py-2 ${isActive(link.to) ? 'text-primary border-b-2 border-primary' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/teklif-al">
              <BrutalistButton variant="primary" className="hidden md:block">
                TEKLİF AL
              </BrutalistButton>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary p-1 hover:bg-black/5 transition-colors cursor-pointer border-2 border-transparent active:border-primary"
              aria-label="Menüyü Aç"
              id="hamburger-menu-btn"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface pt-28 pb-8 px-6 flex flex-col justify-between border-b-8 border-primary md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-8">
              <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">
                NAVİGASYON SİSTEMİ // MENÜ
              </span>
              <ul className="flex flex-col gap-6 font-serif text-3xl uppercase tracking-tight text-primary">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center justify-between pb-3 border-b-2 ${
                        isActive(link.to)
                          ? 'border-primary text-primary font-bold'
                          : 'border-black/5 text-primary/70 hover:text-primary hover:border-black/20'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={20}
                        className={isActive(link.to) ? 'opacity-100' : 'opacity-40'}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-4 mt-auto pt-8"
            >
              <Link to="/teklif-al" className="w-full">
                <BrutalistButton
                  id="mobile-proposal-btn"
                  variant="primary"
                  className="w-full text-center py-4 flex justify-between items-center px-6"
                >
                  <span>TEKLİF ALIN</span>
                  <ArrowRight size={20} />
                </BrutalistButton>
              </Link>
              <div className="text-center font-mono text-[9px] text-secondary/50 uppercase tracking-widest pt-4 border-t border-black/5">
                © 2026 MODA YAPI // TÜM HAKLARI SAKLIDIR
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
