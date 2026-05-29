import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultContact from './default/Contact';
import AlternativeContact from './alternative/Contact';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeContact /> : <DefaultContact />;
};

export default Contact;
