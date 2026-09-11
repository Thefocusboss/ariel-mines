import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '@/context/AdminContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { asset } from '@/lib/utils';
import { BUSINESS_AREAS, COMPANY_INFO } from '@/lib/constants';
import {
  ShieldCheck,
  Lock,
  Power,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  LogOut,
  Save,
  Radio,
  Server,
  Layers,
  ArrowLeft
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    isAdmin,
    adminEmail,
    isMaintenanceMode,
    maintenanceConfig,
    login,
    logout,
    toggleMaintenanceMode,
    updateMaintenanceConfig,
  } = useAdmin();

  // Login form state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Maintenance editor state
  const [headline, setHeadline] = useState(maintenanceConfig.headline);
  const [message, setMessage] = useState(maintenanceConfig.message);
  const [expectedReturnTime, setExpectedReturnTime] = useState(
    maintenanceConfig.expectedReturnTime || ''
  );
  const [emergencyPhone, setEmergencyPhone] = useState(maintenanceConfig.emergencyPhone);
  const [emergencyEmail, setEmergencyEmail] = useState(maintenanceConfig.emergencyEmail);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const res = login(emailInput, passwordInput);
    if (!res.success) {
      setLoginError(res.error || 'Authentication failed.');
    }
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateMaintenanceConfig({
      headline,
      message,
      expectedReturnTime,
      emergencyPhone,
      emergencyEmail,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // =========================================================================
  // VIEW 1: ADMIN LOGIN (Only bjblinky@gmail.com allowed)
  // =========================================================================
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-sm overflow-hidden border border-gold/40 bg-black p-1 shadow-lg">
              <img
                src={asset('images/company-logo.png')}
                alt="Ariel Mines and Koncepts"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-deep uppercase block mb-1">
              EXECUTIVE SECURITY PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase tracking-tight">
              ADMINISTRATIVE ACCESS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Authorized personnel login for Ariel Mines and Koncepts Ltd.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-white py-8 px-6 shadow-xl border border-stone-200/90 rounded-sm sm:px-10">
            {loginError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-xs text-red-700 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Access Restricted</span>
                  <span>{loginError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Authorized Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="bjblinky@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
                <p className="mt-1 text-[11px] font-mono text-stone-600">
                  Restricted to authorized administrator account only.
                </p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Security Passcode
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
                <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-stone-600">
                  <span>Passcode credential required</span>
                  <span className="text-gold-deep font-semibold">Protected 256-bit</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Authenticate & Enter Console</span>
                </Button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <Link
                to="/"
                className="text-stone-500 hover:text-gold-deep flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Website</span>
              </Link>
              <span className="text-stone-600">v2.4 Console</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ADMIN DASHBOARD & MAINTENANCE CONTROL PANEL
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 pb-24">
      {/* Top Admin Navigation Bar */}
      <header className="bg-[#110E0B] text-stone-100 border-b border-stone-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm overflow-hidden border border-gold/40 bg-black p-0.5">
              <img
                src={asset('images/company-logo.png')}
                alt="Ariel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-white text-base tracking-wide leading-none">
                  ARIEL ADMIN CONSOLE
                </span>
                <span className="px-2 py-0.5 bg-gold/20 border border-gold/40 text-gold text-[10px] font-mono font-bold rounded">
                  AUTHENTICATED
                </span>
              </div>
              <span className="text-xs font-mono text-stone-400">
                Logged in as: <strong className="text-white">{adminEmail}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-xs font-mono text-stone-300 hover:text-gold hover:border-gold transition-colors"
              title="Open public website in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Site</span>
            </Link>

            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/60 border border-red-800/80 text-xs font-mono text-red-300 hover:bg-red-900/60 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        {/* Page Title & Status Banner */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-gold-deep" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep">
                Executive Control Hub
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-black text-stone-900 uppercase tracking-tight">
              SYSTEM & MAINTENANCE CONTROLLER
            </h1>
          </div>

          {/* Current Live Status Pill */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-sm border border-stone-200 shadow-sm">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider font-bold">
                Public Website State
              </span>
              <span
                className={`text-sm font-mono font-black ${
                  isMaintenanceMode ? 'text-amber-600' : 'text-emerald-700'
                }`}
              >
                {isMaintenanceMode ? 'MAINTENANCE MODE ACTIVE' : 'LIVE & OPERATIONAL'}
              </span>
            </div>
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center ${
                isMaintenanceMode ? 'bg-amber-100' : 'bg-emerald-100'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isMaintenanceMode
                    ? 'bg-amber-500 animate-ping'
                    : 'bg-emerald-500 animate-pulse'
                }`}
              />
            </div>
          </div>
        </div>

        {/* 1. PRIMARY MAINTENANCE TOGGLE CARD */}
        <div
          className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 shadow-lg ${
            isMaintenanceMode
              ? 'bg-amber-50/70 border-amber-300'
              : 'bg-white border-stone-200'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Power
                  className={`w-5 h-5 ${
                    isMaintenanceMode ? 'text-amber-600' : 'text-emerald-700'
                  }`}
                />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-600">
                  Global Site Availability Switch
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-black text-stone-900 uppercase">
                {isMaintenanceMode
                  ? 'Maintenance Mode is currently ON'
                  : 'Maintenance Mode is currently OFF'}
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {isMaintenanceMode
                  ? 'Public visitors navigating to any page will see the dedicated executive maintenance notice. Direct telephone and email channels remain listed on screen.'
                  : 'The public website is fully accessible worldwide. All 5 business area pathways, inquiry forms, and company assets are live.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={toggleMaintenanceMode}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-sm font-mono text-xs font-black uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2.5 ${
                  isMaintenanceMode
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
              >
                <Power className="w-4 h-4" />
                <span>
                  {isMaintenanceMode ? 'Deactivate Maintenance (Go Live)' : 'Activate Maintenance Mode'}
                </span>
              </button>

              <Link
                to="/"
                className="w-full sm:w-auto px-5 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-center transition-colors"
              >
                View Live Site
              </Link>
            </div>
          </div>
        </div>

        {/* 2. MAINTENANCE MESSAGE CUSTOMIZER */}
        <div className="bg-white rounded-sm border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep block mb-1">
                Content Customization
              </span>
              <h3 className="font-heading text-lg font-black text-stone-900 uppercase">
                Maintenance Notice Configuration
              </h3>
            </div>
            {savedSuccess && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-mono font-bold rounded animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Settings Saved</span>
              </span>
            )}
          </div>

          <form onSubmit={handleSaveConfig} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Headline Title
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="SCHEDULED SYSTEM MAINTENANCE"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Estimated Timeline / Return Note
                </label>
                <input
                  type="text"
                  value={expectedReturnTime}
                  onChange={(e) => setExpectedReturnTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Systems will resume normal public operations shortly."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                Notice Message Description
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Detailed notice explaining the scheduled maintenance..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Emergency Contact Telephone
                </label>
                <input
                  type="text"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="+234 8139630807"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Emergency Contact Email
                </label>
                <input
                  type="email"
                  value={emergencyEmail}
                  onChange={(e) => setEmergencyEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm text-sm text-stone-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="arielbulus7@gmail.com"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-4">
              <Button type="submit" variant="primary" size="md">
                <Save className="w-4 h-4 mr-2" />
                <span>Save Maintenance Notice</span>
              </Button>
            </div>
          </form>
        </div>

        {/* 3. PLATFORM & BUSINESS AREAS OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: System Info */}
          <div className="p-6 bg-white rounded-sm border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-gold-deep" />
              <h4 className="font-heading text-sm font-bold uppercase text-stone-900">
                Deployment Architecture
              </h4>
            </div>
            <div className="space-y-2 text-xs font-mono text-stone-600">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span>Repository:</span>
                <span className="font-bold text-stone-900">Thefocusboss/ariel-mines</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span>DNS / Edge CDN:</span>
                <span className="font-bold text-stone-900">Cloudflare & GitHub Pages</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span>App Framework:</span>
                <span className="font-bold text-stone-900">React 18 + Vite 6</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Active Routing:</span>
                <span className="font-bold text-stone-900">Single Page App (HashRouter)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Business Portfolio */}
          <div className="p-6 bg-white rounded-sm border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold-deep" />
              <h4 className="font-heading text-sm font-bold uppercase text-stone-900">
                Active Business Areas
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs font-mono">
              {BUSINESS_AREAS.map((area) => (
                <li key={area.id} className="flex items-center justify-between text-stone-700">
                  <span>{area.number}. {area.shortTitle}</span>
                  <Badge variant="navy">{area.badge}</Badge>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Administrator Credentials */}
          <div className="p-6 bg-white rounded-sm border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-gold-deep" />
              <h4 className="font-heading text-sm font-bold uppercase text-stone-900">
                Security Profile
              </h4>
            </div>
            <div className="space-y-2 text-xs font-mono text-stone-600">
              <p>
                Authorized administrative session active for:
              </p>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded font-bold text-stone-900 truncate">
                {adminEmail}
              </div>
              <p className="text-[11px] text-stone-600">
                Headquarters: {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
