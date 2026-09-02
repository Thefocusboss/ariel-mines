import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Newspaper } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const editorialTracks = [
    {
      topic: 'Mineral Beneficiation & Processing',
      description: 'Technical perspectives on gravity classification, magnetic separation, and recovery optimization.',
    },
    {
      topic: 'Geological Resource Development',
      description: 'Analysis of Nigeria’s mineral wealth corridors, exploration insights, and raw material trends.',
    },
    {
      topic: 'Industrial Supply Chains',
      description: 'Bridging upstream raw material procurement with downstream industrial manufacturing demand.',
    },
    {
      topic: 'Company & Facility Updates',
      description: 'Announcements on processing plant additions, supplier programs, and operational milestones.',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Perspectives & Updates</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            INSIGHTS & PERSPECTIVES
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Thought leadership, technical mineral notes, and updates from Ariel Mines and Koncepts Ltd.
          </p>
        </div>
      </section>

      {/* Elegant Editorial Empty State & Content Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Curated Editorial Holding Box */}
        <div className="p-10 sm:p-14 bg-[#F3EFEA] border border-gold/40 rounded-sm text-center relative overflow-hidden shadow-sm mb-16">
          <div className="w-16 h-16 rounded-full bg-white border border-gold/40 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Newspaper className="w-8 h-8 text-gold-deep" />
          </div>

          <Badge variant="gold">Editorial Desk</Badge>

          <h2 className="text-2xl sm:text-4xl font-heading font-black text-stone-900 uppercase mt-4 mb-4">
            INSIGHTS FROM THE RESOURCE FRONTIER.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Industry perspectives, company updates, and resource development publications will appear here as our editorial desk releases new technical briefs.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-sm text-xs font-mono text-stone-600 shadow-sm font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span>Editorial Schedule Active • Upcoming Releases Planned</span>
          </div>
        </div>

        {/* Editorial Categories Preview */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep mb-6 text-center">
            Upcoming Editorial Focus Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialTracks.map((track, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-stone-200 rounded-sm shadow-sm hover:border-gold/60 transition-colors"
              >
                <span className="text-[10px] font-mono font-bold text-gold-deep uppercase block mb-1">
                  Topic 0{idx + 1}
                </span>
                <h4 className="text-lg font-heading font-black text-stone-900 uppercase mb-2">
                  {track.topic}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center pt-10 border-t border-stone-200">
          <p className="text-sm text-stone-600 mb-4 font-mono font-medium">
            Have a technical inquiry or wish to collaborate on mineral research?
          </p>
          <Button href="/contact" variant="primary" withArrow>
            Contact Editorial & Corporate Office
          </Button>
        </div>
      </section>
    </div>
  );
};
