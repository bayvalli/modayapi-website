import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Footer as DefaultFooter } from './default/Footer';
import { Footer as AlternativeFooter } from './alternative/Footer';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeFooter /> : <DefaultFooter />;
};

export default Footer;
