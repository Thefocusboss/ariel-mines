import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';

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
                  src="/images/company-logo.png"
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
              Sourcing, purchasing, and processing raw geological materials from the earth and transforming them into valuable commodities for industry and society.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Quality Assayed</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                <Layers className="w-3.5 h-3.5 text-gold" />
                <span>Plateau State, Nigeria</span>
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

          {/* Core Operations (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
              Operations
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-mono">
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Mineral Sourcing
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Magnetic Separation
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Gravity Beneficiation
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Density Concentration
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="hover:text-gold transition-colors">
                  Supplier Onboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Corporate Office & Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-stone-400">
                  {COMPANY_INFO.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="hover:text-gold transition-colors font-mono font-bold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-gold transition-colors font-mono"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/suppliers"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 border border-gold/40 rounded text-xs font-mono text-gold hover:bg-gold/25 transition-colors font-bold"
              >
                <span>Supplier Portal →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Engagement</span>
            <span>•</span>
            <span className="text-stone-600">Plateau State Mineral Corridor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
