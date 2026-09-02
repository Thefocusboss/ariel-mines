import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  withArrow = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider transition-all duration-300 select-none group relative overflow-hidden text-xs md:text-sm';

  const variants = {
    primary:
      'bg-gold text-slate-950 hover:bg-gold-light shadow-sm hover:shadow-gold-subtle active:scale-[0.98]',
    secondary:
      'bg-navy text-white hover:bg-navy-light shadow-sm active:scale-[0.98]',
    outline:
      'bg-white text-slate-800 border border-slate-300 hover:border-gold hover:text-gold-deep shadow-sm active:scale-[0.98]',
    'gold-outline':
      'bg-white text-gold-deep border border-gold/60 hover:bg-amber-50/70 hover:border-gold shadow-sm active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-100 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 gap-1.5 text-xs',
    md: 'px-5 py-2.5 gap-2',
    lg: 'px-7 py-3.5 gap-2.5 text-sm md:text-base font-bold',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-current" />
        )}
      </span>
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};
