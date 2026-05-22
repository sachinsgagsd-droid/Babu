import React, { useState } from 'react';
import { COLORS } from '../../constants/colors';

const Card = ({ children, onClick, glow = false, className = '', ...props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl border transition-all duration-200 ${className}`}
      style={{
        backgroundColor: COLORS.elevated,
        borderColor: hovered && glow ? COLORS.orange : COLORS.border,
        boxShadow: hovered && glow ? `0 0 28px ${COLORS.orange}33` : 'none',
        transform: hovered && onClick ? 'scale(1.01)' : 'scale(1)'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;