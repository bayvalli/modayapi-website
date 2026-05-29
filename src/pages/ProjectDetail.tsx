import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultProjectDetail from './default/ProjectDetail';
import AlternativeProjectDetail from './alternative/ProjectDetail';

const ProjectDetail: React.FC = () => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeProjectDetail /> : <DefaultProjectDetail />;
};

export default ProjectDetail;
