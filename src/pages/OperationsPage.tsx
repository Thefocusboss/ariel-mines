import React from 'react';
import { OPERATIONS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FacilityGallery } from '@/components/sections/FacilityGallery';
import { ValueChainDiagram } from '@/components/sections/ValueChainDiagram';
import { CheckCircle2 } from 'lucide-react';

export const OperationsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Industrial Capabilities</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-4">
            OUR OPERATIONS
          </h1>
          <p className="text-sm sm:text-base font-mono font-bold tracking-widest text-gold-deep uppercase mb-6">
            FROM RAW RESOURCE TO INDUSTRIAL VALUE.
          </p>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive operational overview of our sourcing frameworks, advanced beneficiation technology, and quality-standardized commodity distribution.
          </p>
        </div>
      </section>

      {/* Deep-Dive Operational Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {OPERATIONS.map((op, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={op.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Col (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-200 shadow-xl bg-stone-100 group">
                  <img
                    src={op.image}
                    alt={op.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">Phase {op.id}</Badge>
                  </div>
                </div>
              </div>

              {/* Text Col (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase block mb-1">
                    Operational Pillar {op.id} • {op.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-stone-900 uppercase tracking-tight">
                    {op.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {op.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {op.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 bg-white border border-stone-200 rounded-sm flex items-start gap-2.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                      <span className="text-xs font-mono font-semibold text-stone-700 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button href="/suppliers" variant="gold-outline" size="sm" withArrow>
                    Supplier Intake for {op.title}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* End-to-End Value Chain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Pipeline Integration"
            subtitle="Step-by-step Transformation"
            title="THE RESOURCE VALUE CHAIN"
            description="Our integrated processing methodology maximizes mineral recovery rates and eliminates impurities."
          />
          <ValueChainDiagram />
        </div>
      </section>

      {/* Active Equipment Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Machinery & Systems"
          subtitle="Physical Processing Plant"
          title="BENEFICIATION INFRASTRUCTURE"
          description="High-gradient electromagnetic separators, density shaking tables, vibrating sizing decks, and gravity classification units operating at our Jos processing plant."
        />
        <FacilityGallery />
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase mb-4">
            Discuss Operational Requirements
          </h2>
          <p className="text-sm text-stone-600 mb-8">
            Contact our operations desk in Jos, Plateau State to discuss mineral consignments, processing runs, or supply contracts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" withArrow>
              Contact Operations Desk
            </Button>
            <Button href="/suppliers" variant="outline">
              Supplier Registration
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
