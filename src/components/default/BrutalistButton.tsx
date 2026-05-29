import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const BrutalistButton: React.FC<ButtonProps> = ({
  variant = 'outline',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 font-label-caps uppercase tracking-widest transition-all duration-300 active:translate-y-1 block w-fit';
  const variants = {
    primary:
      'bg-primary text-on-primary border-2 border-primary hover:bg-surface hover:text-primary',
    outline:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-on-primary',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
