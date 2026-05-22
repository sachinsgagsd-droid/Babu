import React from 'react';
import { GOAL_COLORS } from '../../constants/colors';

const Badge = ({ type = 'goal', value, className = '' }) => {
  const config = GOAL_COLORS[value] || GOAL_COLORS.fitness;
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`} style={{ backgroundColor: config.bg, color: config.text }}>
      {config.label}
    </span>
  );
};

export default Badge;