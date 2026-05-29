import React from 'react';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  id?: string;
  className?: string;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  variant = 'primary',
  id,
  className = '',
  children,
  ...props
}) => {
  const baseStyle =
    'px-6 py-3 font-mono font-bold text-sm tracking-widest uppercase transition-all duration-200 relative active:translate-x-[2px] active:translate-y-[2px] cursor-pointer select-none inline-flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-primary text-on-primary border-4 border-primary shadow-[4px_4px_0px_0px_var(--color-secondary)] hover:shadow-[2px_2px_0px_0px_var(--color-secondary)] active:shadow-[0px_0px_0px_0px_var(--color-secondary)] hover:bg-on-primary hover:text-primary transition-all duration-200',
    secondary:
      'bg-white text-primary border-4 border-primary shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_0px_var(--color-primary)] active:shadow-[0px_0px_0px_0px_var(--color-primary)] hover:bg-primary hover:text-on-primary transition-all duration-200',
    outline:
      'bg-transparent text-primary border-4 border-primary hover:bg-primary hover:text-on-primary transition-all duration-200',
  };

  return (
    <button id={id} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default BrutalistButton;
