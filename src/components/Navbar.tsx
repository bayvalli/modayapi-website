import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Navbar as DefaultNavbar } from './default/Navbar';
import { Navbar as AlternativeNavbar } from './alternative/Navbar';

export const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeNavbar /> : <DefaultNavbar />;
};

export default Navbar;
