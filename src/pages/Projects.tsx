import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultProjects from './default/Projects';
import AlternativeProjects from './alternative/Projects';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeProjects /> : <DefaultProjects />;
};

export default Projects;
