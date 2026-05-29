import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ZoomLightbox as DefaultLightbox } from './default/ZoomLightbox';
import { ZoomLightbox as AlternativeLightbox } from './alternative/ZoomLightbox';

interface ZoomLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  activeIndex?: number;
  onNavigate?: (index: number) => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ZoomLightbox: React.FC<ZoomLightboxProps> = (props) => {
  const { theme } = useTheme();
  return theme === 'alternative' ? (
    <AlternativeLightbox {...props} />
  ) : (
    <DefaultLightbox {...props} />
  );
};

export default ZoomLightbox;
