import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BrutalistButton as DefaultButton } from './default/BrutalistButton';
import { BrutalistButton as AlternativeButton } from './alternative/BrutalistButton';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = (props) => {
  const { theme } = useTheme();
  if (theme === 'alternative') {
    return <AlternativeButton {...props} />;
  }
  // Default button only supports 'primary' and 'outline'
  const defaultProps = { ...props };
  if (defaultProps.variant === 'secondary') {
    defaultProps.variant = 'primary'; // fallback secondary to primary for default theme
  }
  return (
    <DefaultButton {...(defaultProps as unknown as React.ComponentProps<typeof DefaultButton>)} />
  );
};

export default BrutalistButton;
