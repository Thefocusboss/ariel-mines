import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS, BUSINESS_AREAS } from '@/lib/constants';
import { asset } from '@/lib/utils';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#110E0B] text-stone-300 border-t border-stone-800 relative overflow-hidden">
      {/* Top gold accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Corporate Summary (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <img
                  src={asset('images/company-logo.png')}
                  alt="Ariel Mines and Koncepts Ltd Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-black tracking-wider text-white block leading-none">
                  ARIEL
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase mt-0.5 block font-bold">
                  MINES & KONCEPTS LTD
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A Nigerian company engaged in mining, mineral resources, industrial services, general commerce and business solutions.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Mining & Resources</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                <Building2 className="w-3.5 h-3.5 text-gold" />
                <span>Industrial Koncepts</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-heading">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-stone-400 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Areas (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
              Business Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-mono">
              {BUSINESS_AREAS.map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/business-areas#${area.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Commercial Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Corporate Office & Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-mono">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-mono font-bold text-gold hover:text-gold-light transition-colors"
              >
                <span>COMMERCIAL CONTACT DESK</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Compliance Bottom Strip */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>MINERAL RESOURCES</span>
            <span>•</span>
            <span>FABRICATION</span>
            <span>•</span>
            <span>COMMERCE</span>
            <span>•</span>
            <span>NIGERIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
