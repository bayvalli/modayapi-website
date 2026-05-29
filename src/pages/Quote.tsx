import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultQuote from './default/Quote';
import AlternativeQuote from './alternative/Quote';

const Quote: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeQuote /> : <DefaultQuote />;
};

export default Quote;
