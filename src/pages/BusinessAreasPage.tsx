import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BUSINESS_AREAS, COMPANY_INFO } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NigeriaGlobalMap } from '@/components/sections/NigeriaGlobalMap';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Ship,
  Hammer,
  Package,
  Layers,
  Phone,
  Mail,
  Compass
} from 'lucide-react';

const ICONS = [Layers, Hammer, Ship, Building2, Package];

export const BusinessAreasPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            DIVERSIFIED BUSINESS PORTFOLIO
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mb-4">
            ONE COMPANY.
            <br />
            <span className="text-gold-deep">MULTIPLE PATHWAYS TO VALUE.</span>
          </h1>
          <p className="text-base sm:text-xl font-mono font-bold tracking-widest text-stone-700 uppercase mb-6">
            EXPLORE THE BUSINESS AREAS OF ARIEL MINES AND KONCEPTS LTD.
          </p>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.diversifiedNarrative}
          </p>

          {/* Quick Jump Bar */}
          <div className="mt-12 pt-8 border-t border-stone-200/80 flex flex-wrap justify-center gap-2 sm:gap-3">
            {BUSINESS_AREAS.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white border border-stone-300 text-stone-700 hover:border-gold hover:text-gold-deep hover:shadow-sm transition-all"
              >
                {area.number}. {area.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FIVE LARGE EDITORIAL BUSINESS SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {BUSINESS_AREAS.map((area, idx) => {
          const isEven = idx % 2 === 0;
          const AreaIcon = ICONS[idx] || Compass;

          return (
            <section
              key={area.id}
              id={area.id}
              className="scroll-mt-28 relative"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Frame (7 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative rounded-sm overflow-hidden border border-stone-300/90 shadow-2xl bg-stone-900 group">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Number Badge & Metadata */}
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-3 py-1 bg-black/80 backdrop-blur-md text-gold border border-gold/40 rounded">
                        AREA {area.number}
                      </span>
                      <span className="text-xs font-mono text-stone-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                        {area.badge}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div>
                        <span className="text-xs font-mono text-gold tracking-widest uppercase block mb-1">
                          Ariel Mines and Koncepts Ltd
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-black text-white tracking-wide">
                          {area.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex w-12 h-12 rounded bg-black/60 backdrop-blur-md border border-gold/40 items-center justify-center text-gold">
                        <AreaIcon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Content Frame (5 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase">
                        {area.subtitle}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase tracking-tight">
                      {area.title}
                    </h2>
                  </div>

                  <p className="text-base text-stone-700 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Scope of Activity Box */}
                  <div className="p-6 bg-white rounded-sm border border-stone-200/90 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase">
                        Verified Business Scope
                      </span>
                      <ShieldCheck className="w-4 h-4 text-gold-deep" />
                    </div>

                    <ul className="space-y-2.5">
                      {area.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-start text-xs sm:text-sm text-stone-800">
                          <CheckCircle2 className="w-4 h-4 text-gold-deep shrink-0 mr-2.5 mt-0.5" />
                          <span className="font-medium">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button & Partner Link */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link to="/contact">
                      <Button variant="primary" size="md">
                        <span>{area.ctaText}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link
                      to="/contact"
                      className="text-xs font-mono font-bold tracking-wider text-stone-600 hover:text-gold-deep transition-colors"
                    >
                      DIRECT INQUIRY DESK →
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Divider between sections */}
              {idx < BUSINESS_AREAS.length - 1 && (
                <div className="mt-28 border-b border-stone-200" />
              )}
            </section>
          );
        })}
      </div>

      {/* 3. NIGERIA MAP & GLOBAL CORRIDORS */}
      <NigeriaGlobalMap />

      {/* 4. BOTTOM ENGAGEMENT BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#110E0B] text-stone-100 border-t border-stone-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="gold">COMMERCIAL COLLABORATION</Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
            READY TO ENGAGE OUR DIVERSIFIED CAPABILITIES?
          </h2>
          <p className="text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Whether you are sourcing mineral consignments, requiring industrial fabrication, or seeking reliable commercial contracts and merchandise supply, our team is prepared to engage.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                <span>PARTNER WITH US</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href="tel:+2348139630807"
              className="inline-flex items-center px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-widest border border-stone-700 hover:border-gold text-stone-200 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-gold" />
              <span>+234 813 963 0807</span>
            </a>
            <a
              href="mailto:arielbulus7@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-widest border border-stone-700 hover:border-gold text-stone-200 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2 text-gold" />
              <span>arielbulus7@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
