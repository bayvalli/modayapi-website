import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultCookiePreferences from './default/CookiePreferences';
import AlternativeCookiePreferences from './alternative/CookiePreferences';

const CookiePreferences: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeCookiePreferences /> : <DefaultCookiePreferences />;
};

export default CookiePreferences;
