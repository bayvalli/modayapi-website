import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultCorporate from './default/Corporate';
import AlternativeCorporate from './alternative/Corporate';

const Corporate: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeCorporate /> : <DefaultCorporate />;
};

export default Corporate;
