import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BUSINESS_AREAS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const BusinessAreasSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream border-t border-stone-200 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-3">
            DIVERSIFIED INDUSTRIAL CAPABILITIES
          </Badge>
          <SectionHeader
            title="MORE THAN MINING. BUILT FOR INDUSTRY."
            subtitle="Ariel Mines and Koncepts Ltd brings together mining, mineral resources, industrial services and general commerce under one professional business identity."
            align="center"
          />
        </div>

        {/* 5 Premium Business Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BUSINESS_AREAS.slice(0, 3).map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-sm border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-stone-900">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Number & Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-black/80 backdrop-blur-md text-gold border border-gold/40 rounded">
                    AREA {area.number}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                    {area.badge}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-gold tracking-widest uppercase block mb-0.5">
                    {area.subtitle}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide leading-tight">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-2.5">
                      Scope of Activity
                    </span>
                    <ul className="space-y-1.5">
                      {area.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0 mr-2" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/business-areas#${area.id}`}
                    className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-stone-900 group-hover:text-gold-deep transition-colors"
                  >
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[11px] font-mono text-stone-400 hover:text-gold-deep transition-colors flex items-center"
                  >
                    Inquire
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 2 Wider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {BUSINESS_AREAS.slice(3, 5).map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-white rounded-sm border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-300 flex flex-col md:flex-row overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden bg-stone-900 shrink-0">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-black/80 backdrop-blur-md text-gold border border-gold/40 rounded">
                    AREA {area.number}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <span className="text-[11px] font-mono text-gold tracking-widest uppercase block mb-0.5">
                    {area.subtitle}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide leading-tight">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Content Frame */}
              <div className="p-6 md:w-3/5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="hidden md:block mb-3">
                    <span className="text-[11px] font-mono text-gold-deep tracking-widest uppercase font-bold block mb-1">
                      {area.subtitle} • {area.badge}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-stone-900 tracking-wide leading-tight">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                      Scope of Activity
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {area.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0 mr-1.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/business-areas#${area.id}`}
                    className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-stone-900 group-hover:text-gold-deep transition-colors"
                  >
                    <span>VIEW FULL DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[11px] font-mono text-stone-400 hover:text-gold-deep transition-colors flex items-center"
                  >
                    Inquire
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action Banner */}
        <div className="p-6 md:p-8 bg-stone-900 rounded-sm border border-stone-800 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">
              Integrated Business Engagement
            </span>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              Looking for a Reliable Commercial or Industrial Partner?
            </h4>
            <p className="text-sm text-stone-400 max-w-2xl">
              From raw mineral consignments to industrial fabrication and commercial trade contracts, Ariel Mines and Koncepts Ltd executes with transparency and institutional discipline.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/business-areas"
              className="px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-widest border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white transition-colors"
            >
              All Business Areas
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-sm text-xs font-mono uppercase tracking-widest bg-gold hover:bg-gold-light text-stone-950 font-bold transition-all shadow-md"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
