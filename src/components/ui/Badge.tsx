import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'cobalt' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className,
}) => {
  const variants = {
    gold: 'bg-amber-50/90 text-gold-deep border-gold/40 font-semibold',
    navy: 'bg-slate-100 text-slate-800 border-slate-300 font-semibold',
    cobalt: 'bg-sky-50 text-sky-900 border-sky-300 font-semibold',
    outline: 'bg-white text-slate-700 border-slate-200 shadow-sm font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border text-[11px] font-mono uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-90" />
      {children}
    </span>
  );
};
