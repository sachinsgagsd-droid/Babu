import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { COLORS } from '../../constants/colors';

const LandingHome = () => {
  const services = ['🏋️ Physical Fitness', '💪 Weight Gain', '🔥 Fat Loss', '🏆 Strength', '🏃 Running', '⚡ Lifting'];
  const testimonials = [
    { name: 'Vijay', text: 'Best fitness center in Kopargaon. Great results!', rating: 5 },
    { name: 'Mobin', text: 'Friendly environment, customized plans!', rating: 5 },
    { name: 'Siddhu', text: 'Perfect for all levels. Amazing diet guidance!', rating: 5 }
  ];

  return (
    <div className="text-white font-dm">
      <div className="relative overflow-hidden rounded-2xl p-12 mb-6 min-h-96" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(255,107,0,0.15) 0%, transparent 65%), linear-gradient(160deg, #0A0A0A 0%, #111 100%)' }}>
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6 border" style={{ background: 'rgba(255,107,0,0.12)', borderColor: 'rgba(255,107,0,0.3)', color: COLORS.orange }}>
            ★★★★★ TRUSTED BY 80+ MEMBERS
          </div>
          <h1 className="text-6xl font-black font-barlow leading-tight mb-4">BUILD YOUR DREAM PHYSIQUE</h1>
          <p className="text-lg mb-8" style={{ color: COLORS.muted }}>Kopargaon's most results-focused fitness center.</p>
          <div className="flex gap-3 flex-wrap">
            <Button size="lg">Join Now →</Button>
            <Button size="lg" variant="ghost">Book Free Trial</Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg py-2.5 overflow-hidden mb-6 animate-marquee" style={{ backgroundColor: COLORS.orange }}>
        <div className="flex gap-8 whitespace-nowrap text-sm font-black text-black">
          {[...services, ...services].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-4xl font-black font-barlow mb-6">OUR SERVICES</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: '🏋️', name: 'Fitness', desc: 'Complete programs for strength' },
            { icon: '💪', name: 'Weight Gain', desc: 'Progressive mass building' },
            { icon: '🔥', name: 'Fat Loss', desc: 'Science-backed cutting' },
            { icon: '🏆', name: 'Strength', desc: 'Powerlifting focus' },
            { icon: '🏃', name: 'Running', desc: 'Marathon training' },
            { icon: '⚡', name: 'Lifting', desc: 'Olympic techniques' }
          ].map((s, i) => (
            <Card key={i} glow className="p-5">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-sm mb-1">{s.name}</div>
              <div className="text-xs" style={{ color: COLORS.muted }}>{s.desc}</div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-black font-barlow mb-6">MEMBER STORIES</h2>
        <div className="grid grid-cols-3 gap-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white" style={{ background: 'linear-gradient(135deg,#FF6B00,#CC2200)' }}>{t.name[0]}</div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div style={{ color: COLORS.orange }} className="text-xs">{'★'.repeat(t.rating)}</div>
                </div>
              </div>
              <div className="text-xs italic" style={{ color: COLORS.muted }}>" {t.text}"</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingHome;