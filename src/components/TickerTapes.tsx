import React from 'react';

export const TickerTapes: React.FC = () => {
  const tapeItems = [
    'GROWTH-FOCUSED',
    'AI-POWERED',
    'DATA-DRIVEN',
    'PERFORMANCE-LED',
    'REVENUE-FOCUSED',
    'CREATIVE',
    'STRATEGIC',
    'CONVERSION-ORIENTED',
  ];

  return (
    <div className="relative py-12 overflow-hidden bg-[#141414] select-none">
      {/* Tape 1: Yellow Ribbon angled slightly downwards */}
      <div className="relative py-2 -rotate-1 sm:-rotate-2 scale-105 z-20 shadow-2xl">
        <div className="bg-[#FECF05] text-[#141414] py-3.5 flex overflow-hidden font-black text-xs sm:text-sm tracking-widest uppercase border-y-2 border-[#141414]">
          <div className="flex shrink-0 items-center tape-animate-left whitespace-nowrap">
            {Array.from({ length: 4 }).flatMap(() => tapeItems).map((item, idx) => (
              <span key={`tape1-${idx}`} className="mx-6 flex items-center gap-6">
                <span>{item}</span>
                <span className="w-2 h-2 rounded-full bg-[#141414]" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tape 2: Black Ribbon angled upwards crossing Tape 1 */}
      <div className="dark-surface relative py-2 rotate-2 sm:rotate-2.5 scale-105 z-10 -mt-7 sm:-mt-8 shadow-2xl">
        <div className="bg-[#1C1C1C] text-[#FECF05] py-3.5 flex overflow-hidden font-extrabold text-xs sm:text-sm tracking-widest uppercase border-y border-[#FECF05]/40">
          <div className="flex shrink-0 items-center tape-animate-right whitespace-nowrap">
            {Array.from({ length: 4 }).flatMap(() => tapeItems).map((item, idx) => (
              <span key={`tape2-${idx}`} className="mx-6 flex items-center gap-6">
                <span className="text-white hover:text-[#FECF05] transition-colors">{item}</span>
                <span className="w-2 h-2 rounded-full bg-[#FECF05]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
