import React from 'react';
import { Link } from 'react-router-dom';
import { PURPOSE_STAGES, COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HeroIntro } from '@/components/sections/HeroIntro';
import { BusinessAreasSection } from '@/components/sections/BusinessAreasSection';
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
  ChevronRight,
  Phone,
  Mail,
  ArrowRight
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
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5]">
        {/* Background Image with 50% Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={asset('images/facility-exterior.jpg')}
            alt="Ariel Mines Processing Facility Jos"
            className="w-full h-full object-cover filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-[#ffff]/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/40 opacity-50" />
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          {/* Metadata Top Line */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/90 border border-gold/40 text-[10px] sm:text-xs font-mono font-bold text-stone-800 shadow-sm backdrop-blur-sm"
          >
            <span className="text-gold-deep font-black">MINING</span>
            <span className="text-stone-300">•</span>
            <span>FABRICATION</span>
            <span className="text-stone-300">•</span>
            <span>IMPORT & EXPORT</span>
            <span className="text-stone-300">•</span>
            <span>GENERAL CONTRACTS</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-900 font-black">MERCHANDISE</span>
          </motion.div>

          {/* Core Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-stone-900 uppercase max-w-5xl leading-[1.08] mb-6"
          >
            FROM MINERAL RESOURCES <br className="hidden sm:inline" />
            <span className="text-gold-gradient">TO INDUSTRIAL SOLUTIONS.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {COMPANY_INFO.heroSupporting}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href="/business-areas"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md"
              withArrow
            >
              Explore Our Business
            </Button>
            <Button
              href="/contact"
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
              <span className="text-gold-deep">DIVERSIFIED INDUSTRIAL COMMERCE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FROM THE EARTH. FOR THE WORLD. */}
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
                Ariel Mines and Koncepts Ltd brings together mining, mineral resources, industrial services and general commerce under one professional business identity.
              </p>
              <p className="text-stone-600 text-sm sm:text-base">
                Located in the mineral-abundant corridors of Plateau State, Nigeria, we identify, purchase, beneficiate, and export geological materials while delivering precision metal fabrication, cross-border commerce, general contracts, and merchandise supply for modern industry.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="gold-outline" size="sm" withArrow>
                  Learn About Our Company
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 & 4. MORE THAN MINING. BUILT FOR INDUSTRY. (BUSINESS AREAS) */}
      {/* ========================================================================= */}
      <BusinessAreasSection />

      {/* ========================================================================= */}
      {/* 5. OUR PURPOSE (4-STAGE PROCESS) */}
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
      {/* 6. OUR APPROACH (STANDARDS & VALUE PILLARS) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] relative border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Strategic Approach"
            subtitle="The Standard of Excellence"
            title="OUR APPROACH: QUALITY. CONSISTENCY. INTEGRITY."
            description="Our commercial reputation is anchored in four uncompromising commitments across all mineral sourcing, fabrication, and trade operations."
          />

          <PillarsGrid />

          <div className="mt-12 text-center">
            <Button href="/approach" variant="outline" size="md" withArrow>
              Explore Our Full Strategic Approach
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. RESOURCE VALUE CHAIN & FACILITY ASSETS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="End-to-End Pipeline"
            subtitle="Value Transformation"
            title="THE RESOURCE VALUE CHAIN"
            description="Visualizing the journey from deep geological strata to refined industrial commodities."
          />

          <ValueChainDiagram />

          <div className="mt-20">
            <SectionHeader
              badge="Operational Infrastructure"
              subtitle="Sabon Barki, Jos Processing Grounds"
              title="MINERAL BENEFICIATION FACILITIES"
              description="Tour our active industrial processing equipment, magnetic separators, density tables, and classification facilities."
            />
            <FacilityGallery />
          </div>
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
      {/* 9. PARTNER WITH US */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#110E0B] text-white relative overflow-hidden border-t border-gold/40">
        <div className="absolute inset-0 bg-gold-gradient-light opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="gold">Commercial Engagement</Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mt-4 mb-4">
            PARTNER WITH ARIEL MINES AND KONCEPTS.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you are supplying raw minerals, requiring custom industrial fabrication, seeking trade opportunities, or placing commercial contracts, Ariel Mines and Koncepts Ltd is ready to partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Partner With Us
            </Button>
            <Button
              href="/business-areas"
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:text-gold-deep hover:bg-white"
            >
              Explore Business Areas
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CONTACT / CORPORATE DIRECTORY STRIP */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-sm border border-stone-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase">
                Corporate Location
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900">
                Jos Operations Hub
              </h4>
              <p className="text-xs text-stone-600">
                Plot 10247 Sabon Barki, Jos Bukuru Road, Plateau State, Nigeria
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase">
                Direct Communications
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900">
                Inquiries & Contracts
              </h4>
              <div className="flex flex-col text-xs text-stone-600 gap-1 font-mono">
                <a href="tel:+2348139630807" className="hover:text-gold-deep transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-deep" />
                  +234 813 963 0807
                </a>
                <a href="mailto:arielbulus7@gmail.com" className="hover:text-gold-deep transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-deep" />
                  arielbulus7@gmail.com
                </a>
              </div>
            </div>

            <div className="flex justify-start md:justify-end">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
