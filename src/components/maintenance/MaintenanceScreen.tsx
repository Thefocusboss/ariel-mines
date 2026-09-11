import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '@/context/AdminContext';
import { asset } from '@/lib/utils';
import { Phone, Mail, MapPin, Lock, ShieldAlert } from 'lucide-react';

export const MaintenanceScreen: React.FC = () => {
  const { maintenanceConfig } = useAdmin();

  return (
    <div className="min-h-screen bg-[#0F0D0B] text-stone-200 flex flex-col justify-between p-4 sm:p-6 lg:p-12 relative overflow-hidden select-none">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between z-10 border-b border-stone-800/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-gold/40 bg-black p-0.5 shadow-md">
            <img
              src={asset('images/company-logo.png')}
              alt="Ariel Mines and Koncepts Ltd"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-heading text-lg font-black tracking-wider text-white block leading-none">
              ARIEL
            </span>
            <span className="text-[9px] font-mono tracking-widest text-stone-400 uppercase">
              MINES & KONCEPTS LTD
            </span>
          </div>
        </div>

        {/* Maintenance Beacon */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-amber-400 -ml-4" />
          <span>SYSTEM UNDER MAINTENANCE</span>
        </div>
      </div>

      {/* Main Center Message */}
      <div className="max-w-3xl mx-auto text-center my-auto py-12 z-10">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6 shadow-xl">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block mb-3">
          INFRASTRUCTURE & SERVICE UPDATE
        </span>

        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
          {maintenanceConfig.headline}
        </h1>

        <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          {maintenanceConfig.message}
        </p>

        {maintenanceConfig.expectedReturnTime && (
          <div className="inline-block p-4 rounded bg-stone-900/80 border border-stone-800 text-xs font-mono text-stone-400 mb-10 shadow-sm">
            <span className="text-gold block font-bold mb-1">OPERATIONAL TIMELINE</span>
            <span>{maintenanceConfig.expectedReturnTime}</span>
          </div>
        )}

        {/* Direct Emergency Contact Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          <div className="p-4 bg-stone-900/60 border border-stone-800 rounded-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-1">
              Direct Communication Desk
            </span>
            <a
              href={`tel:${maintenanceConfig.emergencyPhone.replace(/\s+/g, '')}`}
              className="text-sm font-mono text-white hover:text-gold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>{maintenanceConfig.emergencyPhone}</span>
            </a>
          </div>

          <div className="p-4 bg-stone-900/60 border border-stone-800 rounded-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-1">
              Urgent Business Dispatch
            </span>
            <a
              href={`mailto:${maintenanceConfig.emergencyEmail}`}
              className="text-sm font-mono text-white hover:text-gold transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span className="truncate">{maintenanceConfig.emergencyEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer & Admin Login Entry */}
      <div className="max-w-6xl mx-auto w-full pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 z-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-stone-400" />
          <span>Plot 10247 Sabon Barki, Jos Bukuru Road, Plateau State, Nigeria</span>
        </div>

        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Ariel Mines and Koncepts Ltd</span>
          <span className="text-stone-700">|</span>
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors font-mono"
            title="Administrator Login"
          >
            <Lock className="w-3 h-3 text-gold" />
            <span>Admin Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
