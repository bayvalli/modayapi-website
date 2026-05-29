import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DefaultSEO from './default/SEO';
import { SEO as AlternativeSEO } from './alternative/SEO';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = (props) => {
  const { theme } = useTheme();
  return theme === 'alternative' ? <AlternativeSEO {...props} /> : <DefaultSEO {...props} />;
};

export default SEO;
