import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultPrivacyPolicy from './default/PrivacyPolicy';
import AlternativePrivacyPolicy from './alternative/PrivacyPolicy';

const PrivacyPolicy: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativePrivacyPolicy /> : <DefaultPrivacyPolicy />;
};

export default PrivacyPolicy;
