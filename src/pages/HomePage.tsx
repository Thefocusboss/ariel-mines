import React from 'react';
import { PURPOSE_STAGES, OPERATIONS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HeroIntro } from '@/components/sections/HeroIntro';
import { ValueChainDiagram } from '@/components/sections/ValueChainDiagram';
import { FacilityGallery } from '@/components/sections/FacilityGallery';
import { PillarsGrid } from '@/components/sections/PillarsGrid';
import { NigeriaGlobalMap } from '@/components/sections/NigeriaGlobalMap';
import { asset } from '@/lib/utils';
import {
  Layers,
  Cpu,
  Truck,
  MapPin,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const getPurposeIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-gold-deep" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-gold-deep" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-gold-deep" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-gold-deep" />;
      default:
        return <Layers className="w-5 h-5 text-gold-deep" />;
    }
  };

  return (
    <div className="relative bg-[#FAF8F5] text-stone-900 overflow-hidden">
      {/* Intro Animation on Initial Load */}
      <HeroIntro />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5]">
        {/* Background Image with 50% Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={asset('images/facility-exterior.jpg')}
            alt="Ariel Mines Processing Facility Jos"
            className="w-full h-full object-cover filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-[#FAF8F5]/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/40 opacity-50" />
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          {/* Metadata Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-white/90 border border-gold/40 text-[10px] sm:text-xs font-mono font-bold text-stone-800 shadow-sm backdrop-blur-sm"
          >
            <span className="text-gold-deep">MINERAL RESOURCES</span>
            <span className="text-stone-300">•</span>
            <span>SOURCING</span>
            <span className="text-stone-300">•</span>
            <span>PROCESSING</span>
            <span className="text-stone-300">•</span>
            <span className="text-sky-800">INDUSTRIAL VALUE</span>
          </motion.div>

          {/* Core Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-stone-900 uppercase max-w-5xl leading-[1.08] mb-6"
          >
            WE TURN EARTH'S <br className="hidden sm:inline" />
            <span className="text-gold-gradient">RESOURCES INTO</span> <br className="hidden sm:inline" />
            INDUSTRIAL VALUE.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Ariel Mines and Koncepts Ltd is focused on the sourcing, purchasing and processing of raw geological materials into valuable commodities for society and industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href="/operations"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md"
              withArrow
            >
              Explore Our Business
            </Button>
            <Button
              href="/suppliers"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Partner With Us
            </Button>
          </motion.div>

          {/* Location & Brand Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-stone-200 w-full max-w-3xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-600 font-semibold"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span>HEADQUARTERS: JOS, PLATEAU STATE</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <span>EST. NIGERIA</span>
              <span className="text-stone-300">|</span>
              <span className="text-gold-deep">GLOBAL COMMODITY REACH</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "FROM THE EARTH. FOR THE WORLD." SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] relative border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="gold">Brand Narrative</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-stone-900 uppercase tracking-tight leading-tight">
                FROM THE EARTH.<br />
                <span className="text-gold-gradient">FOR THE WORLD.</span>
              </h2>
              <div className="w-20 h-1 bg-gold mt-4 rounded-full" />
            </div>

            {/* Right Narrative Copy */}
            <div className="lg:col-span-6 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                The global economy depends on the continuous, dependable availability of refined mineral commodities. Yet between underground deposits and modern industrial manufacturing lies an immense gap in sourcing, processing, and standard compliance.
              </p>
              <p className="text-stone-600 text-sm sm:text-base">
                Ariel Mines and Koncepts Ltd bridges this vital gap. Located in the mineral-abundant corridors of Plateau State, Nigeria, we identify, purchase, beneficiate, and supply geological materials—transforming raw earth resources into high-purity industrial commodities that drive sustainable economic expansion.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="gold-outline" size="sm" withArrow>
                  Learn About Our Foundation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR PURPOSE (4-STAGE PROCESS) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Operational Engine"
            subtitle="The 4-Stage Methodology"
            title="OUR PURPOSE"
            description="Our structured approach guarantees seamless movement from initial deposit discovery to final industrial delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PURPOSE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="bg-white border border-stone-200 hover:border-gold/60 p-6 sm:p-8 rounded-sm transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-sm bg-amber-50 border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-amber-100 transition-colors shadow-sm">
                      {getPurposeIcon(stage.icon)}
                    </div>
                    <span className="text-2xl font-mono font-black text-stone-300 group-hover:text-gold-deep transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep mb-1">
                    {stage.subtitle}
                  </p>
                  <h3 className="text-xl font-heading font-black text-stone-900 uppercase tracking-wide mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-semibold text-stone-500 group-hover:text-gold-deep transition-colors">
                  <span>Phase {stage.step} Flow</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR OPERATIONS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] relative border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Core Framework"
            subtitle="Operational Excellence"
            title="OUR OPERATIONS"
            description="From raw geological procurement to high-gradient beneficiation and industrial supply distribution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPERATIONS.map((op) => (
              <div
                key={op.id}
                className="bg-white border border-stone-200 hover:border-gold/60 rounded-sm overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                  <img
                    src={op.image}
                    alt={op.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">Phase {op.id}</Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase mb-1">
                      {op.subtitle}
                    </p>
                    <h3 className="text-2xl font-heading font-black text-stone-900 uppercase mb-3 group-hover:text-gold-deep transition-colors">
                      {op.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-6">
                      {op.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {op.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs font-mono font-semibold text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <Button href="/operations" variant="outline" size="sm" withArrow>
                      Explore Capabilities
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VALUE PROPOSITION (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Core Philosophy"
            subtitle="The Standard of Excellence"
            title="QUALITY IS NOT A CLAIM. IT'S OUR STANDARD."
            description="Our commercial reputation is anchored in four uncompromising commitments to our suppliers and industrial partners."
          />

          <PillarsGrid />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. RESOURCE VALUE CHAIN */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] relative border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="End-to-End Pipeline"
            subtitle="Value Transformation"
            title="THE RESOURCE VALUE CHAIN"
            description="Visualizing the journey from deep geological strata to refined industrial commodities."
          />

          <ValueChainDiagram />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. AUTHENTIC PROCESSING FACILITY & MACHINERY SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Operational Assets"
            subtitle="Sabon Barki, Jos Processing Hub"
            title="INFRASTRUCTURE & BENEFICIATION SYSTEMS"
            description="Tour our active industrial processing equipment, magnetic separators, density tables, and classification facilities."
          />

          <FacilityGallery />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ROOTED IN NIGERIA. BUILT FOR GLOBAL VALUE. */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] relative border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <NigeriaGlobalMap />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RESPONSIBLE RESOURCE DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Sustainable Economic Growth</Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            BUILDING VALUE. <span className="text-gold-gradient">RESPONSIBLY.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Ariel Mines and Koncepts Ltd believes that enduring industrial value can only be achieved through responsible resource development, transparent supplier engagements, rigorous quality standards, and long-term economic stewardship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            <div className="p-6 bg-white border border-stone-200 rounded-sm shadow-sm">
              <h4 className="font-heading font-black text-stone-900 uppercase text-base mb-2">
                Long-Term Value
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Investing in physical beneficiation infrastructure that outlasts short-term market cycles.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm shadow-sm">
              <h4 className="font-heading font-black text-stone-900 uppercase text-base mb-2">
                Fair Sourcing
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Empowering extraction networks and mining communities with transparent commercial pricing.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm shadow-sm">
              <h4 className="font-heading font-black text-stone-900 uppercase text-base mb-2">
                Standardized Supply
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Eliminating industrial supply friction through consistent grading and quality verification.
              </p>
            </div>
          </div>

          <Button href="/approach" variant="primary" size="lg" withArrow>
            Read Our Strategic Approach
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SUPPLIER & PARTNER CTA */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#110E0B] text-white relative overflow-hidden border-t border-gold/40">
        <div className="absolute inset-0 bg-gold-gradient-light opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="gold">Supplier Ingestion Desk</Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mt-4 mb-4">
            WE'RE LOOKING FOR QUALITY RESOURCES.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Are you a supplier, miner, or syndicate with raw geological materials? Connect with Ariel Mines and Koncepts to explore dependable purchase agreements and industrial processing off-take.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/suppliers" variant="primary" size="lg" withArrow>
              Become a Supplier
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:text-gold-deep hover:bg-white">
              Contact Corporate Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
