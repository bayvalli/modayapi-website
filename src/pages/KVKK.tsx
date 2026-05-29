import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultKVKK from './default/KVKK';
import AlternativeKVKK from './alternative/KVKK';

const KVKK: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeKVKK /> : <DefaultKVKK />;
};

export default KVKK;
