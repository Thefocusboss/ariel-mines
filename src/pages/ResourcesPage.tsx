import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ValueChainDiagram } from '@/components/sections/ValueChainDiagram';
import { FacilityGallery } from '@/components/sections/FacilityGallery';
import { Layers, CheckCircle2 } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const capabilities = [
    {
      category: 'Geological Ores & Concentrates',
      desc: 'Sourcing and processing high-density raw ores and mineral sands from primary deposits and alluvial workings.',
      highlights: ['Density classification', 'Gangue elimination', 'Grade grading'],
    },
    {
      category: 'Magnetic Mineral Beneficiation',
      desc: 'Separation of ferromagnetic and paramagnetic mineral fractions using high-gradient electromagnetic equipment.',
      highlights: ['Electromagnetic field tuning', 'Multi-tier rotor separation', 'Clean concentrate recovery'],
    },
    {
      category: 'Gravity & Hydraulic Classification',
      desc: 'Multi-stage cascading chutes and shaking tables separating minerals according to specific gravity differences.',
      highlights: ['Specific gravity isolation', 'Heavy mineral concentration', 'Slime removal'],
    },
    {
      category: 'Industrial Batch Staging',
      desc: 'Standardized bagging, secured warehousing, and consignment logistics ready for industrial off-take.',
      highlights: ['Uniform industrial sacks', 'Assay tagging', 'Consignment staging'],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Resource Capabilities</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            RESOURCES & CAPABILITIES
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Unlocking the full potential of raw geological resources through physical beneficiation, rigorous grading, and supply chain integration.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Beneficiation Scope"
          subtitle="Technical Capabilities"
          title="MINERAL PROCESSING CAPABILITIES"
          description="Our facility infrastructure is configured to handle raw geological materials with diverse density and magnetic properties."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-white border border-stone-200 hover:border-gold/60 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gold-deep uppercase tracking-wider">
                    Capability 0{idx + 1}
                  </span>
                  <Layers className="w-5 h-5 text-stone-400 group-hover:text-gold-deep transition-colors" />
                </div>

                <h3 className="text-xl font-heading font-black text-stone-900 uppercase mb-3">
                  {cap.category}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {cap.desc}
                </p>

                <div className="space-y-2">
                  {cap.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100">
                <Button href="/suppliers" variant="outline" size="sm" withArrow>
                  Inquire on Mineral Ingestion
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Chain Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Full Value Stream"
            subtitle="Geological to Industrial"
            title="THE RESOURCE VALUE CHAIN"
            description="Our structured beneficiation workflow guarantees high concentrate recovery and consistent commodity quality."
          />
          <ValueChainDiagram />
        </div>
      </section>

      {/* Processing Machinery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Active Plant"
          subtitle="Jos Processing Grounds"
          title="PROCESSING ASSETS IN OPERATION"
          description="View active equipment currently performing separation and concentration at our facility."
        />
        <FacilityGallery />
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase mb-4">
            Looking to Supply Raw Geological Minerals?
          </h2>
          <p className="text-sm text-stone-600 mb-8">
            Submit your material details to our procurement team for assay verification and commercial purchase terms.
          </p>
          <Button href="/suppliers" variant="primary" size="lg" withArrow>
            Access Supplier Intake Desk
          </Button>
        </div>
      </section>
    </div>
  );
};
