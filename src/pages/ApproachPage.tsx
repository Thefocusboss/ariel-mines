import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PillarsGrid } from '@/components/sections/PillarsGrid';
import { asset } from '@/lib/utils';
import {
  Scale,
  Cpu,
  Layers,
  CheckCircle2,
  FileCheck,
  FlaskConical,
  Gauge
} from 'lucide-react';

export const ApproachPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Physical & Laboratory Assaying',
      desc: 'Before any raw lot is acquired, representative samples undergo specific gravity determination, moisture checks, and chemical titration to verify purity grades and identify trace elements.',
      icon: <FileCheck className="w-6 h-6 text-gold-deep" />,
    },
    {
      num: '02',
      title: 'Fair & Transparent Valuation',
      desc: 'We cultivate direct, transparent relationships with local miners and extraction syndicates, offering honest, market-aligned pricing based on verified mineral purity.',
      icon: <Scale className="w-6 h-6 text-gold-deep" />,
    },
    {
      num: '03',
      title: 'Controlled Beneficiation',
      desc: 'Raw geological materials pass through multi-stage vibrating screens, magnetic separation, and shaker-table density classification to isolate valuable mineral fractions from gangue rock.',
      icon: <Cpu className="w-6 h-6 text-gold-deep" />,
    },
    {
      num: '04',
      title: 'Batch Standardization & Packaging',
      desc: 'Processed commodities are uniformly packaged in industrial sacks, tagged with assay certificates, and staged in secured holding bays ready for swift industrial haulage.',
      icon: <Layers className="w-6 h-6 text-gold-deep" />,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Operating Philosophy</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            OUR APPROACH
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A disciplined, transparent, and quality-driven methodology designed to bridge geological potential with reliable industrial supply.
          </p>
        </div>
      </section>

      {/* Strategic 4-Stage Operational Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Disciplined Execution"
          subtitle="Systematic Quality Control"
          title="THE 4-STAGE OPERATIONAL STANDARD"
          description="How Ariel Mines ensures dependable grades and transparent commercial engagements from extraction to off-take."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-sm bg-white border border-stone-200 hover:border-gold/60 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-amber-50 border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-amber-100 transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-mono font-black text-stone-300 group-hover:text-gold-deep transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-black text-stone-900 uppercase tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-semibold text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep" />
                <span>Verified Quality Gate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Laboratory Assay & Testing Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Col (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[3/4] rounded-sm overflow-hidden border border-stone-200 shadow-xl bg-white group">
                <img
                  src={asset('images/laboratory-assay-bench.jpg')}
                  alt="Geological Assay and Density Testing Station"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <Badge variant="navy">In-House Assay Station</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded border border-stone-200 text-xs font-mono text-stone-700 shadow-md">
                  <span className="text-gold-deep block font-bold">Jos Assay Testing Bench</span>
                  <span>Specific Gravity Titration & Density Calibration</span>
                </div>
              </div>
            </div>

            {/* Content Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">Scientific Verification</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-stone-900 uppercase tracking-tight leading-tight">
                IN-HOUSE QUALITY ASSAY & DENSITY VERIFICATION
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Mineral commodity integrity begins at the testing bench. At our Jos operational facility, incoming raw consignments undergo rigorous physical and scientific screening using laboratory titration, pycnometer specific gravity checks, and magnetic susceptibility measurements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm">
                  <div className="flex items-center gap-2 text-gold-deep font-mono font-bold text-xs uppercase mb-1">
                    <FlaskConical className="w-4 h-4 text-gold-deep" />
                    <span>Specific Gravity Testing</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Precise pycnometer and titration measurements to verify heavy mineral ratios.
                  </p>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm">
                  <div className="flex items-center gap-2 text-sky-800 font-mono font-bold text-xs uppercase mb-1">
                    <Gauge className="w-4 h-4 text-sky-700" />
                    <span>Grade Certification</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Batch documentation confirming moisture percentages and mineral purity.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/suppliers" variant="primary" size="md" withArrow>
                  Submit Ore Samples for Valuation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Institutional Trust"
          subtitle="The Foundations"
          title="QUALITY IS NOT A CLAIM. IT'S OUR STANDARD."
          description="Our commercial reputation is built on four core pillars that guide every transaction."
        />
        <PillarsGrid />
      </section>

      {/* Responsible Development Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-stone-200">
        <Badge variant="gold">Responsible Stewardship</Badge>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-stone-900 uppercase mt-4 mb-6">
          Building Long-Term Industrial Value
        </h2>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl mx-auto mb-10">
          We believe sustainable growth is achieved through operational precision, honest commercial relations, and continuous reinvestment in physical processing capabilities. By treating miners with dignity and industry clients with transparency, we construct supply chains built to endure.
        </p>
        <Button href="/suppliers" variant="primary" size="lg" withArrow>
          Join Our Supplier Network
        </Button>
      </section>
    </div>
  );
};
