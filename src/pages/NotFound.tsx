import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultNotFound from './default/NotFound';
import AlternativeNotFound from './alternative/NotFound';

const NotFound: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeNotFound /> : <DefaultNotFound />;
};

export default NotFound;
