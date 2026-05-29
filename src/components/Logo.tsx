import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Logo as DefaultLogo } from './default/Logo';
import { Logo as AlternativeLogo } from './alternative/Logo';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeLogo {...props} /> : <DefaultLogo {...props} />;
};

export default Logo;
