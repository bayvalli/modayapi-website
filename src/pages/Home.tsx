import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultHome from './default/Home';
import AlternativeHome from './alternative/Home';

const Home: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeHome /> : <DefaultHome />;
};

export default Home;
