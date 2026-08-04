import React, { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/mockData';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  onOpenConsultationWithData?: (revenue: number, lift: number) => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenConsultationWithData
}) => {
  // Simulator State
  const [currentRevenue, setCurrentRevenue] = useState<number>(15); // Millions $
  const [adSpend, setAdSpend] = useState<number>(120); // Thousands $/mo
  const [salesCycleDays, setSalesCycleDays] = useState<number>(90); // Days

  // Calculated metrics
  const estimatedLiftPercent = 35 + (currentRevenue > 20 ? 15 : 10);
  const estimatedLiftDollar = (currentRevenue * (estimatedLiftPercent / 100)).toFixed(1);
  const estimatedCACReduction = Math.round(adSpend * 12 * 0.32);
  const projectedDays = Math.round(salesCycleDays * 0.45);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-white/10">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
          STRATEGIC PHILOSOPHY
        </span>
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
          INVISIBLE ARCHITECTURE<span className="text-orange-500">.</span>
        </h2>
        <p className="font-geist text-base sm:text-lg text-white/60 leading-relaxed">
          Growth is an algorithmic engineering discipline. We reject generic templates, vanity metrics, and isolated media silos in favor of synchronized, full-funnel revenue engines.
        </p>
      </div>

      {/* 4 Tenets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {PHILOSOPHY_PILLARS.map((tenet) => (
          <div
            key={tenet.number}
            className="bg-[#111111] border border-white/10 p-8 sm:p-10 relative group hover:border-orange-500 transition-colors shadow-xl"
          >
            <span className="font-syne text-4xl font-black text-orange-500/40 group-hover:text-orange-500 transition-colors block mb-4">
              {tenet.number}
            </span>
            <span className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 block mb-2 font-bold">
              {tenet.subtitle}
            </span>
            <h3 className="font-syne text-2xl font-black text-white uppercase tracking-tight mb-4">
              {tenet.title}
            </h3>
            <p className="font-geist text-sm text-white/60 leading-relaxed">
              {tenet.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Growth Engine & Revenue Lift Simulator */}
      <div className="bg-[#111111] border border-orange-500 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Calculator className="w-64 h-64 text-orange-500" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold">
              ENTERPRISE SIMULATOR
            </span>
          </div>

          <div>
            <h3 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
              ESTIMATE REVENUE LIFT POTENTIAL<span className="text-orange-500">.</span>
            </h3>
            <p className="font-geist text-sm text-white/60 max-w-xl">
              Adjust baseline metrics to model projected ARR expansion and acquisition cost efficiency under our growth architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Annual Revenue */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className="text-white/60">Current Annual Revenue (ARR)</span>
                  <span className="text-orange-500 font-black">${currentRevenue}M / year</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={100}
                  step={1}
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-[#0A0A0A] h-2 cursor-pointer"
                />
              </div>

              {/* Slider 2: Monthly Media Spend */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className="text-white/60">Monthly Media / Growth Spend</span>
                  <span className="text-orange-500 font-black">${adSpend}k / month</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-[#0A0A0A] h-2 cursor-pointer"
                />
              </div>

              {/* Slider 3: Sales Cycle */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className="text-white/60">Average Sales Cycle Duration</span>
                  <span className="text-orange-500 font-black">{salesCycleDays} Days</span>
                </div>
                <input
                  type="range"
                  min={14}
                  max={180}
                  step={2}
                  value={salesCycleDays}
                  onChange={(e) => setSalesCycleDays(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-[#0A0A0A] h-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/20 p-6 space-y-6">
              <span className="font-mono-custom text-[10px] text-white/40 uppercase tracking-widest font-bold block border-b border-white/10 pb-2">
                PROJECTED 12-MONTH ARCHITECTURE LIFT
              </span>

              <div>
                <span className="font-geist text-xs text-white/60 block">Additional Net ARR Growth</span>
                <span className="font-syne text-4xl sm:text-5xl font-black text-orange-500">
                  +${estimatedLiftDollar}M
                </span>
                <span className="font-mono-custom text-xs text-orange-500 font-bold block mt-1">
                  (~{estimatedLiftPercent}% ARR Increase)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="font-geist text-[11px] text-white/60 block">Annual CAC Savings</span>
                  <span className="font-mono-custom text-lg font-black text-white">
                    ${(estimatedCACReduction / 1000).toFixed(0)}k
                  </span>
                </div>
                <div>
                  <span className="font-geist text-[11px] text-white/60 block">Optimized Sales Cycle</span>
                  <span className="font-mono-custom text-lg font-black text-white">
                    {projectedDays} Days
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenConsultationWithData &&
                  onOpenConsultationWithData(currentRevenue, Number(estimatedLiftDollar))
                }
                className="w-full bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black py-4 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>LOCK IN MODEL DATA CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
