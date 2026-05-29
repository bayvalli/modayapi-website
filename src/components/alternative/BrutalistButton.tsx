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
      'bg-primary text-on-primary border-4 border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)] hover:bg-neutral-800 transition-colors',
    secondary:
      'bg-white text-primary border-4 border-primary shadow-[4px_4px_0px_0px_#111111] hover:shadow-[2px_2px_0px_0px_#111111] active:shadow-[0px_0px_0px_0px_#111111] hover:bg-neutral-50 transition-colors',
    outline: 'bg-transparent text-primary border-4 border-primary hover:bg-black/5',
  };

  return (
    <button id={id} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default BrutalistButton;
