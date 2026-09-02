import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Globe, MapPin } from 'lucide-react';

export const NigeriaGlobalMap: React.FC = () => {
  return (
    <div className="relative rounded-sm border border-gold/40 bg-gradient-to-br from-amber-50/40 via-white to-slate-50 p-8 md:p-12 overflow-hidden shadow-sm">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Text narrative (Col 1-7) */}
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="gold">Geological Heritage • Global Ambition</Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-950 uppercase tracking-tight leading-tight">
            Rooted in Nigeria.<br />
            <span className="text-gold-gradient">Built for Global Value.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Rooted in Nigeria's historic mineral heartland in Plateau State, Ariel Mines and Koncepts Ltd is positioned to participate dynamically in the geological resource value chain—transforming raw earth materials into standardized commodities that fuel domestic industries and international markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-sm">
              <div className="flex items-center gap-2 text-gold-deep font-mono font-bold text-xs uppercase mb-1">
                <MapPin className="w-4 h-4 text-gold-deep" />
                <span>Plateau State Hub</span>
              </div>
              <p className="text-xs text-slate-600">
                Sabon Barki, Jos Bukuru Corridor. Direct access to rich regional mineral belts.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-sm">
              <div className="flex items-center gap-2 text-sky-800 font-mono font-bold text-xs uppercase mb-1">
                <Globe className="w-4 h-4 text-sky-700" />
                <span>Market Integration</span>
              </div>
              <p className="text-xs text-slate-600">
                Supplying verified grade minerals to manufacturing, metallurgical, and global value streams.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Button href="/suppliers" variant="primary" withArrow>
              Connect with Our Sourcing Desk
            </Button>
          </div>
        </div>

        {/* Visual Map/Hub Representation (Col 8-12) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-sm aspect-square relative rounded-full border border-gold/30 flex items-center justify-center p-8 bg-white/90 shadow-md">
            {/* Outer Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-gold/30" />

            {/* Central Node: Jos, Nigeria */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-slate-950 border-2 border-gold rounded-full shadow-xl">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5 text-gold animate-bounce" />
              </div>
              <span className="font-heading font-black text-sm text-white uppercase tracking-wider">
                JOS, PLATEAU
              </span>
              <span className="text-[10px] font-mono text-gold-light uppercase mt-0.5">
                Central Operations
              </span>
            </div>

            {/* Radial Nodes */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white border border-slate-300 rounded text-[10px] font-mono font-bold text-slate-700 shadow-sm">
              Extraction Belt
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white border border-slate-300 rounded text-[10px] font-mono font-bold text-slate-700 shadow-sm">
              Processing & Beneficiation
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-amber-50 border border-gold/50 rounded text-[10px] font-mono font-bold text-gold-deep shadow-sm">
              Industrial Off-Take
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white border border-slate-300 rounded text-[10px] font-mono font-bold text-slate-700 shadow-sm">
              Supplier Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
