import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultScrollToTop from './default/ScrollToTop';
import AlternativeScrollToTop from './alternative/ScrollToTop';

export const ScrollToTop: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeScrollToTop /> : <DefaultScrollToTop />;
};

export default ScrollToTop;
