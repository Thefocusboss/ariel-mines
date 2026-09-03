import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { asset } from '@/lib/utils';

export const HeroIntro: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('ariel_intro_seen');
    if (hasSeenIntro) {
      setStage(4);
      return;
    }

    const t1 = setTimeout(() => setStage(1), 250);
    const t2 = setTimeout(() => setStage(2), 900);
    const t3 = setTimeout(() => setStage(3), 1600);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('ariel_intro_seen', 'true');
      setStage(4);
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('ariel_intro_seen', 'true');
    setStage(4);
  };

  if (stage === 4) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center p-6 select-none"
      >
        <div className="text-center max-w-lg mx-auto flex flex-col items-center">
          {/* Emblem Reveal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={stage >= 1 ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-sm overflow-hidden border border-gold/40 bg-black p-1 shadow-2xl mb-6 flex items-center justify-center"
          >
            <img
              src={asset('images/company-logo.png')}
              alt="Ariel Mines and Koncepts"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Corporate Name Reveal */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={stage >= 2 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-1"
          >
            <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-widest text-stone-900">
              ARIEL
            </h1>
            <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-gold-deep uppercase">
              MINES AND KONCEPTS LTD
            </p>
          </motion.div>

          {/* Subtitle statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={stage >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 flex items-center gap-3 text-xs font-mono font-semibold text-stone-500 tracking-wider"
          >
            <span className="w-8 h-[1.5px] bg-gold" />
            <span>THE POWER BENEATH US</span>
            <span className="w-8 h-[1.5px] bg-gold" />
          </motion.div>
        </div>

        {/* Skip button for user accessibility */}
        <button
          onClick={handleSkip}
          className="absolute bottom-8 text-xs font-mono font-semibold text-stone-400 hover:text-gold-deep uppercase tracking-widest transition-colors py-2 px-4"
        >
          [ Skip Intro ]
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
