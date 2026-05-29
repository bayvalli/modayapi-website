import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultBackToTop from './default/BackToTop';
import AlternativeBackToTop from './alternative/BackToTop';

const BackToTop: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeBackToTop /> : <DefaultBackToTop />;
};

export default BackToTop;
