import React from 'react';
import StatCard from '../../components/ui/StatCard';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { MEMBERS, LEADS } from '../../data/mock';
import { COLORS } from '../../constants/colors';

const AdminOverview = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-black font-barlow mb-1">GOOD MORNING, BABA 👋</h2>
          <div style={{ color: COLORS.muted }} className="text-sm">Friday, 22 May 2026 · Kopargaon</div>
        </div>
        <Button size="sm">+ Quick Action</Button>
      </div>

      <div className="rounded-xl p-3 mb-6 flex items-center gap-3 border text-sm" style={{ backgroundColor: 'rgba(255,107,0,0.1)', borderColor: 'rgba(255,107,0,0.3)' }}>
        <span className="text-lg">⚠️</span>
        <span><strong style={{ color: COLORS.orange }}>3 memberships</strong> expiring</span>
        <Button size="sm" variant="ghost" className="ml-auto">View All</Button>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        <StatCard label="Today's Revenue" value="₹4200" trend="+18%" icon="💰" sparkData={[2100, 2800, 3200, 2900, 3800, 4200, 4200]} />
        <StatCard label="Active Members" value={82} trend="+12%" icon="👥" sparkData={[70, 73, 75, 77, 78, 80, 82]} />
        <StatCard label="New Leads" value={6} trend="+3" icon="🎯" sparkData={[3, 5, 4, 7, 5, 6, 6]} />
        <StatCard label="Trials This Week" value={4} trend="+2" icon="🏋️" sparkData={[1, 2, 3, 2, 4, 3, 4]} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card className="p-5">
          <div className="font-bold mb-3 text-sm">🎯 Recent Leads</div>
          <div className="space-y-2.5">
            {LEADS.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between pb-2 border-b" style={{ borderColor: COLORS.border }}>
                <div>
                  <div className="text-sm font-semibold">{lead.name}</div>
                  <div className="text-xs" style={{ color: COLORS.muted }}>{lead.source}</div>
                </div>
                <Badge type="goal" value={lead.goal} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="font-bold mb-3 text-sm">⚠️ Expiring Soon</div>
          <div className="space-y-2.5">
            {MEMBERS.filter((m) => m.status === 'expiring').map((member) => (
              <div key={member.id} className="pb-2 border-b" style={{ borderColor: COLORS.border }}>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="text-sm font-semibold">{member.name}</div>
                  <span className="text-xs" style={{ color: COLORS.orange }}>⏰ {member.daysLeft}d</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;