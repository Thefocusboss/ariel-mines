import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PillarsGrid } from '@/components/sections/PillarsGrid';
import { Target, Eye } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Corporate Profile</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            WHO WE ARE
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ariel Mines and Koncepts Ltd is focused on the sourcing, purchasing, and processing of raw geological materials, transforming raw earth resources into valuable commodities for industry and society.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Foundation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="gold">Geological Foundation</Badge>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-stone-900 uppercase leading-tight">
              Bridging Raw Earth & Industrial Supply
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Founded in the mineral-rich territory of Plateau State, Nigeria, Ariel Mines and Koncepts Ltd was created to address persistent market inefficiencies in raw geological material availability and beneficiation.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Rather than treating mineral trading as a detached transaction, Ariel operates on the ground with direct procurement desks, physical density classification, and electromagnetic separation systems. This hands-on capability ensures that every batch sourced meets stringent industrial purity thresholds.
            </p>

            <div className="p-4 bg-amber-50/80 border-l-4 border-gold rounded-r text-xs font-mono text-stone-800 space-y-1 shadow-sm">
              <span className="text-gold-deep font-bold block">CORPORATE CORE POSITIONING</span>
              <span>Quality • Consistency • Integrity • Reliability</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-stone-200 shadow-xl bg-stone-100 relative">
              <img
                src="/images/facility-exterior.jpg"
                alt="Ariel Mines Operational Grounds"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded text-xs font-mono text-stone-700 shadow-md">
                <span className="text-gold-deep block font-bold">Jos Central Operations Hub</span>
                <span>Plot 10247 Sabon Barki, Jos Bukuru Road, Plateau State</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 md:p-10 rounded-sm bg-white border border-gold/40 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-amber-50 border border-gold/40 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6 text-gold-deep" />
              </div>
              <Badge variant="gold">Our Mission</Badge>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-stone-900 uppercase mt-3 mb-4">
                Addressing Scarcity Through Processing
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                "{COMPANY_INFO.mission}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs font-mono font-bold text-gold-deep">
              Core Purpose & Mandate
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 md:p-10 rounded-sm bg-white border border-stone-300 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-sky-50 border border-sky-300 flex items-center justify-center mb-6 shadow-sm">
                <Eye className="w-6 h-6 text-sky-800" />
              </div>
              <Badge variant="navy">Our Vision</Badge>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-stone-900 uppercase mt-3 mb-4">
                Sustainable Economic Expansion
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                "{COMPANY_INFO.vision}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs font-mono font-bold text-sky-900">
              Global Aspiration
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Guiding Principles"
          subtitle="Corporate Ethics"
          title="OUR VALUES"
          description="Every trade agreement, beneficiation protocol, and supply dispatch is governed by four core pillars."
        />

        <PillarsGrid />
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3EFEA] border-t border-stone-200 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase mb-4">
            Partner With Ariel Mines and Koncepts Ltd
          </h2>
          <p className="text-sm text-stone-600 mb-8 max-w-xl mx-auto">
            Whether you supply raw mineral ores or require consistent, verified commodities for industrial manufacture, our team is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/suppliers" variant="primary" withArrow>
              Supplier Intake Portal
            </Button>
            <Button href="/contact" variant="outline">
              Contact Management Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
