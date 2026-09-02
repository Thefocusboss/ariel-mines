import React, { useState } from 'react';
import { VALUE_CHAIN_STEPS } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export const ValueChainDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Desktop & Tablet Step Ribbon */}
      <div className="hidden lg:grid grid-cols-6 gap-3 mb-8">
        {VALUE_CHAIN_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.stage}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-sm border text-left transition-all duration-300 relative group shadow-sm ${
                isActive
                  ? 'bg-amber-50/90 border-gold shadow-md ring-1 ring-gold/40'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold tracking-widest ${
                    isActive ? 'text-gold-deep' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {step.stage}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${
                    isActive
                      ? 'border-gold/40 text-gold-deep bg-amber-100/60 font-semibold'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {step.tag}
                </span>
              </div>
              <h4 className="text-xs font-heading font-bold text-slate-900 tracking-wide uppercase line-clamp-2">
                {step.name}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Featured Stage Detail Box (Desktop) */}
      <div className="hidden lg:block bg-gradient-to-r from-amber-50/50 via-white to-slate-50 border border-gold/40 rounded-sm p-8 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <span className="text-9xl font-heading font-black text-gold-deep">
            {VALUE_CHAIN_STEPS[activeStep].stage}
          </span>
        </div>

        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 bg-amber-100/70 border border-gold/40 text-gold-deep text-xs font-mono font-bold uppercase tracking-wider rounded">
              Stage {VALUE_CHAIN_STEPS[activeStep].stage} • {VALUE_CHAIN_STEPS[activeStep].tag}
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">Integrated Value Pipeline</span>
          </div>

          <h3 className="text-2xl font-heading font-black text-slate-950 uppercase mb-3">
            {VALUE_CHAIN_STEPS[activeStep].name}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed mb-6">
            {VALUE_CHAIN_STEPS[activeStep].desc}
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5 text-gold-deep">
              <CheckCircle2 className="w-4 h-4 text-gold-deep" />
              <span>Verified Operational Standard</span>
            </span>
            <span>•</span>
            <span>Jos Beneficiation Corridor</span>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Connected Flow */}
      <div className="lg:hidden space-y-4">
        {VALUE_CHAIN_STEPS.map((step) => (
          <div
            key={step.stage}
            className="p-5 rounded-sm bg-white border border-slate-200 hover:border-gold/40 transition-colors shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-gold-deep font-bold">{step.stage}</span>
              <span className="text-[10px] font-mono text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">
                {step.tag}
              </span>
            </div>
            <h4 className="text-base font-heading font-bold text-slate-950 uppercase mb-1">
              {step.name}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
