import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'gold' | 'navy' | 'cobalt' | 'outline';
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'gold',
  title,
  subtitle,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      {subtitle && (
        <p className="text-xs md:text-sm font-mono font-semibold tracking-widest text-gold-deep uppercase mb-2">
          {subtitle}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight leading-tight uppercase">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      )}

      <div
        className={cn(
          'w-16 h-[3px] bg-gold mt-6 rounded-full',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
};
