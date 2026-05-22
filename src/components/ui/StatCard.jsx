import React, { useState, useEffect } from 'react';
import { COLORS } from '../../constants/colors';

const StatCard = ({ label, value, trend, icon, sparkData }) => {
  const [count, setCount] = useState(0);
  const numVal = typeof value === 'number' ? value : parseInt(value?.replace(/[^\d]/g, '')) || 0;

  useEffect(() => {
    let start = 0;
    const inc = numVal / 40;
    const timer = setInterval(() => {
      start += inc;
      if (start >= numVal) { setCount(numVal); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [numVal]);

  const displayVal = typeof value === 'string' && value.includes('₹') ? `₹${count.toLocaleString('en-IN')}` : count.toLocaleString('en-IN');

  return (
    <div className="rounded-2xl border p-5 transition-all relative overflow-hidden" style={{ backgroundColor: COLORS.elevated, borderColor: COLORS.border }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 24px ${COLORS.orange}2e`; e.currentTarget.style.borderColor = `${COLORS.orange}4d`; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = COLORS.border; }}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: COLORS.muted }}>{label}</div>
          <div className="text-2xl font-black text-white font-barlow">{displayVal}</div>
          {trend && <div className="text-xs font-semibold mt-1.5" style={{ color: trend.startsWith('+') ? COLORS.success : COLORS.error }}>{trend} vs last month</div>}
        </div>
        <div className="text-xl opacity-70">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;