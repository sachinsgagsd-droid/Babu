import React, { useState } from 'react';
import { COLORS } from '../../constants/colors';

const Button = ({ children, onClick, variant = 'primary', size = 'md', loading = false, disabled = false, className = '', ...props }) => {
  const [hovered, setHovered] = useState(false);

  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-5 py-2.5 text-sm', lg: 'px-8 py-3.5 text-base' };
  const variants = {
    primary: `bg-gradient-to-r from-[#FF6B00] to-[#CC2200] text-white border-0`,
    ghost: `bg-transparent text-white border border-[${COLORS.border}]`
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled || loading}
      className={`font-bold cursor-pointer transition-all rounded-lg ${sizes[size]} ${variants[variant] || variants.primary} ${className}`}
      style={{ boxShadow: hovered && variant === 'primary' ? `0 0 20px ${COLORS.orange}66` : 'none', transform: hovered && !disabled ? 'scale(1.02)' : 'scale(1)' }}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;