import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultFAQ from './default/FAQ';
import AlternativeFAQ from './alternative/FAQ';

const FAQ: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeFAQ /> : <DefaultFAQ />;
};

export default FAQ;
