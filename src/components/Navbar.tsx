import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { BrutalistButton } from './BrutalistButton';

import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-surface border-b-4 border-primary px-margin py-6"
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-headline-md font-bold text-primary tracking-tighter">
          MODA YAPI
        </Link>
        
        <ul className="hidden md:flex gap-8 items-center font-label-caps uppercase tracking-widest text-secondary">
          <li>
            <Link 
              to="/projeler" 
              className={`hover:text-primary transition-colors py-2 ${isActive('/projeler') ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              PROJELER
            </Link>
          </li>
          <li>
            <Link 
              to="/surec" 
              className={`hover:text-primary transition-colors py-2 ${isActive('/surec') ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              SÜREÇ
            </Link>
          </li>
          <li>
            <Link 
              to="/kurumsal" 
              className={`hover:text-primary transition-colors py-2 ${isActive('/kurumsal') ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              KURUMSAL
            </Link>
          </li>
          <li>
            <Link 
              to="/iletisim" 
              className={`hover:text-primary transition-colors py-2 ${isActive('/iletisim') ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              İLETİŞİM
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/teklif-al">
            <BrutalistButton variant="primary" className="hidden md:block">
              TEKLİF AL
            </BrutalistButton>
          </Link>
          <button className="md:hidden text-primary">
            <Menu size={32} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
