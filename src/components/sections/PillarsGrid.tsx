import React from 'react';
import { VALUE_PILLARS } from '@/lib/constants';
import { ShieldCheck, Repeat, Compass, Anchor } from 'lucide-react';

export const PillarsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold-deep" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 text-gold-deep" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-gold-deep" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-gold-deep" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold-deep" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {VALUE_PILLARS.map((pillar) => (
        <div
          key={pillar.number}
          className="group relative bg-white border border-slate-200 hover:border-gold/60 p-6 md:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-card-hover"
        >
          {/* Subtle top gold accent on hover */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-sm bg-amber-50 border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-amber-100/80 transition-all shadow-sm">
                {getIcon(pillar.icon)}
              </div>
              <span className="text-2xl font-mono font-black text-slate-300 group-hover:text-gold-deep transition-colors">
                {pillar.number}
              </span>
            </div>

            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold-deep mb-1">
              {pillar.subtitle}
            </p>

            <h3 className="text-xl font-heading font-black text-slate-950 uppercase tracking-wide mb-3">
              {pillar.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-mono font-medium text-slate-500 group-hover:text-slate-800 transition-colors block">
              {pillar.highlight}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
