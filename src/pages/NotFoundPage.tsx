import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-[#FAF8F5] text-stone-900 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-gold/40 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8 text-gold-deep" />
        </div>

        <Badge variant="gold">404 Error</Badge>

        <h1 className="text-3xl sm:text-4xl font-heading font-black text-stone-900 uppercase tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-stone-600 leading-relaxed">
          The geological coordinate or document requested does not exist or has been relocated.
        </p>

        <div className="pt-2">
          <Button href="/" variant="primary" size="md" withArrow>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
