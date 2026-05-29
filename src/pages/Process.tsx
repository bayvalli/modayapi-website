import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultProcess from './default/Process';
import AlternativeProcess from './alternative/Process';

const Process: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeProcess /> : <DefaultProcess />;
};

export default Process;
