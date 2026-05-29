import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const fillColor = variant === 'dark' ? '#111111' : '#ffffff';
  const strokeColor = variant === 'dark' ? '#111111' : '#ffffff';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brutalist Column / Foundation Vector Symbol */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:rotate-90"
      >
        {/* Outer Heavy Boundary */}
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          stroke={strokeColor}
          strokeWidth="10"
          fill="none"
        />
        {/* Diagonal pillar blocks cross (Architectural bracing) */}
        <path d="M15 15 L85 85" stroke={strokeColor} strokeWidth="8" strokeLinecap="square" />
        {/* Opposing monofilament brace */}
        <path d="M85 15 L50 50" stroke={strokeColor} strokeWidth="8" strokeLinecap="square" />
        {/* Monolithic center foundation square */}
        <rect x="38" y="38" width="24" height="24" fill={fillColor} />
      </svg>

      {/* Brand Text */}
      <span
        className="font-serif text-xl sm:text-2xl font-bold tracking-tighter"
        style={{ color: fillColor }}
      >
        MODA YAPI
      </span>
    </div>
  );
};

export default Logo;
