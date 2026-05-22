import React from 'react';
import { COLORS } from '../../constants/colors';
import { useAppStore } from '../../store/appStore';

const NAV_ITEMS = {
  admin: [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'leads', icon: '🎯', label: 'Leads' },
    { id: 'members', icon: '👥', label: 'Members' },
    { id: 'trainers', icon: '🏋️', label: 'Trainers' }
  ],
  landing: [
    { id: 'home', icon: '🌐', label: 'Home' }
  ]
};

const modules = [
  { id: 'admin', icon: '⚙️', label: 'Admin' },
  { id: 'landing', icon: '🌐', label: 'Website' }
];

const Sidebar = () => {
  const { activeModule, activeSection, setActiveModule, setActiveSection } = useAppStore();

  return (
    <div className="w-56 flex flex-col flex-shrink-0 h-screen border-r" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
      <div className="p-5 border-b" style={{ borderColor: COLORS.border }}>
        <div className="text-2xl font-black bg-gradient-to-r from-[#FF6B00] to-[#CC2200] bg-clip-text text-transparent font-barlow">BABA'S GYM</div>
        <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: COLORS.muted }}>AI OS</div>
      </div>

      <div className="p-3 border-b" style={{ borderColor: COLORS.border }}>
        {modules.map((m) => (
          <button key={m.id} onClick={() => { setActiveModule(m.id); setActiveSection(NAV_ITEMS[m.id][0].id); }} className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg border-l-4 mb-0.5 transition-all text-xs font-semibold" style={{ background: activeModule === m.id ? 'rgba(255,107,0,0.12)' : 'transparent', color: activeModule === m.id ? COLORS.orange : '#aaa', borderColor: activeModule === m.id ? COLORS.orange : 'transparent' }}>
            <span className="text-base">{m.icon}</span>{m.label}
          </button>
        ))}
      </div>

      <div className="p-3 flex-1 overflow-y-auto">
        <div className="text-xs uppercase tracking-widest mb-2 px-2.5" style={{ color: COLORS.muted }}>PAGES</div>
        {(NAV_ITEMS[activeModule] || []).map((item) => (
          <button key={item.id} onClick={() => setActiveSection(item.id)} className="w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg border-l-4 mb-0.5 transition-all text-xs font-medium text-left" style={{ background: activeSection === item.id ? 'rgba(255,107,0,0.1)' : 'transparent', color: activeSection === item.id ? '#fff' : '#999', borderColor: activeSection === item.id ? COLORS.orange : 'transparent' }}>
            <span className="text-sm">{item.icon}</span>{item.label}
          </button>
        ))}
      </div>

      <div className="p-3.5 border-t" style={{ borderColor: COLORS.border }}>
        <div className="text-xs" style={{ color: COLORS.muted }}>Kopargaon, Maharashtra</div>
        <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>v1.0</div>
      </div>
    </div>
  );
};

export default Sidebar;