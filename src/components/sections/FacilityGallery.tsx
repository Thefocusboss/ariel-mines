import React, { useState } from 'react';
import { FACILITY_ASSETS, FacilityAsset } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Maximize2, X, MapPin, Eye, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FacilityGallery: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<FacilityAsset | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Machinery' | 'Laboratory' | 'Facility'>('All');

  const filteredAssets = activeFilter === 'All'
    ? FACILITY_ASSETS
    : FACILITY_ASSETS.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gold-deep" />
          <span>FACILITY SECTORS:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['All', 'Machinery', 'Laboratory', 'Facility'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-gold text-slate-950 border-gold font-bold shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-gold/60 hover:text-slate-950'
                }`}
              >
                {filter === 'All' ? 'All Operations (7)' : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Assets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset, idx) => (
          <motion.div
            key={asset.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            onClick={() => setSelectedAsset(asset)}
            className="group relative bg-white border border-slate-200 hover:border-gold/60 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer flex flex-col shadow-sm hover:shadow-card-hover"
          >
            {/* Top gold accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <Badge variant={asset.category === 'Laboratory' ? 'navy' : 'gold'}>
                  {asset.badge}
                </Badge>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded bg-white/90 border border-slate-200 flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-4 h-4 text-gold-deep" />
              </div>

              {/* Bottom tag inside image */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  {asset.category}
                </span>
                <span className="flex items-center gap-1 text-gold-light group-hover:underline">
                  <Eye className="w-3 h-3" /> Inspect Asset
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-heading font-bold text-slate-950 uppercase group-hover:text-gold-deep transition-colors line-clamp-1">
                  {asset.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-1.5 line-clamp-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-deep shrink-0" />
                  <span>{asset.location}</span>
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-2">
                  {asset.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="text-gold-deep font-semibold">Plateau Mineral Hub</span>
                <span>Active Facility →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Zoom Lightbox View */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAsset(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-gold/40 max-w-4xl w-full rounded-sm overflow-hidden shadow-2xl relative cursor-default"
            >
              <button
                onClick={() => setSelectedAsset(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/90 border border-slate-300 rounded text-slate-700 hover:text-gold-deep transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <img
                  src={selectedAsset.image}
                  alt={selectedAsset.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="gold">{selectedAsset.badge}</Badge>
                    <span className="text-xs font-mono font-semibold text-slate-600">
                      Sector: {selectedAsset.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {selectedAsset.location}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-black text-slate-950 uppercase">
                  {selectedAsset.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {selectedAsset.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
