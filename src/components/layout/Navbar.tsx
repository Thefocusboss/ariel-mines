import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { asset } from '@/lib/utils';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Corporate Metadata Bar (Desktop only) */}
      <div className="hidden lg:block bg-[#15120F] text-stone-300 border-b border-stone-800 text-[11px] font-mono py-2 px-6 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-200">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{COMPANY_INFO.locationCity}, Nigeria</span>
            </span>
            <span className="text-stone-700">|</span>
            <span className="text-stone-400">GEOLOGICAL SOURCING & BENEFICIATION</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors text-stone-200"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors text-stone-200"
            >
              <Mail className="w-3 h-3 text-gold" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Ariel Mines and Koncepts Ltd - Home"
          >
            {/* Exact Logo Emblem */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-sm overflow-hidden border border-gold/40 bg-black p-0.5 shadow-sm group-hover:border-gold transition-colors">
              <img
                src={asset('images/company-logo.png')}
                alt="Ariel Mines and Koncepts Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-black tracking-wider text-stone-900 group-hover:text-gold-deep transition-colors duration-200 leading-none">
                ARIEL
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-stone-600 uppercase mt-0.5">
                MINES & KONCEPTS LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-1.5 text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 relative ${
                    isActive
                      ? 'text-gold-deep font-black'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/suppliers"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              withArrow
            >
              Partner With Us
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded border border-stone-200 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-deep" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[73px] inset-x-0 bg-[#FAF8F5] border-b border-stone-200 shadow-2xl z-30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-center justify-between py-3 px-3 rounded text-sm font-heading font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'bg-amber-100/70 text-gold-deep border-l-2 border-gold'
                          : 'text-stone-800 hover:bg-stone-100/80 hover:text-stone-950'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-stone-200 space-y-3">
                <Button
                  href="/suppliers"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  withArrow
                >
                  Become a Supplier
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                >
                  Contact Corporate Office
                </Button>
              </div>

              <div className="pt-4 border-t border-stone-200 text-xs text-stone-600 space-y-2 font-mono">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-deep" />
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-gold-deep font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-deep" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-deep font-semibold">
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
