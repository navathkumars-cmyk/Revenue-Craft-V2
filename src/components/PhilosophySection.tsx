import React, { useState } from 'react';
import { ABOUT_HOME_CONTENT } from '../data/mockData';
import { Calculator, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PhilosophySectionProps {
  onOpenConsultationWithData?: (revenue: number, lift: number) => void;
  theme?: 'dark' | 'light';
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenConsultationWithData,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';

  // Simulator State in INR (Crores / Lakhs)
  const [currentRevenue, setCurrentRevenue] = useState<number>(25); // ₹ Crores ARR
  const [adSpend, setAdSpend] = useState<number>(30); // ₹ Lakhs / month
  const [salesCycleDays, setSalesCycleDays] = useState<number>(90); // Days

  // Calculated metrics
  const estimatedLiftPercent = 35 + (currentRevenue > 50 ? 15 : 10);
  const estimatedLiftDollar = (currentRevenue * (estimatedLiftPercent / 100)).toFixed(1);
  const estimatedCACReduction = Math.round(adSpend * 12 * 0.32); // ₹ Lakhs annual savings
  const projectedDays = Math.round(salesCycleDays * 0.45);

  return (
    <section id="simulator" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
          MEASUREMENT-FIRST GROWTH
        </span>
        <h2 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          REVENUE LIFT ENGINE<span className="text-orange-500">.</span>
        </h2>
        <p className={`font-geist text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-neutral-600' : 'text-white/60'
        }`}>
          Growth is an engineering discipline. We reject generic templates, vanity metrics, and isolated media silos in favor of synchronized, full-funnel revenue engines.
        </p>
      </div>

      {/* 4 Tenets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {ABOUT_HOME_CONTENT.guidingPrinciples.map((tenet, idx) => (
          <div
            key={idx}
            className={`p-6 relative group hover:border-orange-500 transition-colors shadow-xl border ${
              isLight
                ? 'bg-white border-neutral-200 text-neutral-900'
                : 'bg-[#111111] border-white/10 text-white'
            }`}
          >
            <span className="font-syne text-3xl font-black text-orange-500 block mb-3">
              0{idx + 1}
            </span>
            <ShieldCheck className="w-5 h-5 text-orange-500 mb-3" />
            <h3 className={`font-syne text-lg font-black uppercase tracking-tight mb-2 ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              {tenet.title}
            </h3>
            <p className={`font-geist text-xs leading-relaxed ${
              isLight ? 'text-neutral-600' : 'text-white/60'
            }`}>
              {tenet.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Growth Engine & Revenue Lift Simulator */}
      <div className={`p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-orange-500 ${
        isLight ? 'bg-white text-neutral-900' : 'bg-[#111111] text-white'
      }`}>
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Calculator className="w-64 h-64 text-orange-500" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold">
              ENTERPRISE SIMULATOR (INR / ₹)
            </span>
          </div>

          <div>
            <h3 className={`font-syne text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2 ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              ESTIMATE REVENUE LIFT POTENTIAL<span className="text-orange-500">.</span>
            </h3>
            <p className={`font-geist text-sm max-w-xl ${
              isLight ? 'text-neutral-600' : 'text-white/60'
            }`}>
              Adjust baseline metrics to model projected ARR expansion and acquisition cost efficiency in INR (₹) under our growth architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Annual Revenue */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className={isLight ? 'text-neutral-600 font-medium' : 'text-white/60'}>
                    Current Annual Revenue (ARR)
                  </span>
                  <span className="text-orange-500 font-black">₹{currentRevenue} Crores / year</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={200}
                  step={2}
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className={`w-full accent-orange-500 h-2 cursor-pointer ${
                    isLight ? 'bg-neutral-200' : 'bg-[#0A0A0A]'
                  }`}
                />
              </div>

              {/* Slider 2: Monthly Media Spend */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className={isLight ? 'text-neutral-600 font-medium' : 'text-white/60'}>
                    Monthly Media / Growth Spend
                  </span>
                  <span className="text-orange-500 font-black">₹{adSpend} Lakhs / month</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={150}
                  step={2}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className={`w-full accent-orange-500 h-2 cursor-pointer ${
                    isLight ? 'bg-neutral-200' : 'bg-[#0A0A0A]'
                  }`}
                />
              </div>

              {/* Slider 3: Sales Cycle */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono-custom text-xs">
                  <span className={isLight ? 'text-neutral-600 font-medium' : 'text-white/60'}>
                    Average Sales Cycle Duration
                  </span>
                  <span className="text-orange-500 font-black">{salesCycleDays} Days</span>
                </div>
                <input
                  type="range"
                  min={14}
                  max={180}
                  step={2}
                  value={salesCycleDays}
                  onChange={(e) => setSalesCycleDays(Number(e.target.value))}
                  className={`w-full accent-orange-500 h-2 cursor-pointer ${
                    isLight ? 'bg-neutral-200' : 'bg-[#0A0A0A]'
                  }`}
                />
              </div>
            </div>

            {/* Right Output Box */}
            <div className={`lg:col-span-5 p-6 space-y-6 border ${
              isLight ? 'bg-neutral-50 border-neutral-300' : 'bg-[#0A0A0A] border-white/20'
            }`}>
              <span className={`font-mono-custom text-[10px] uppercase tracking-widest font-bold block border-b pb-2 ${
                isLight ? 'text-neutral-500 border-neutral-200' : 'text-white/40 border-white/10'
              }`}>
                PROJECTED 12-MONTH ARCHITECTURE LIFT (INR / ₹)
              </span>

              <div>
                <span className={`font-geist text-xs block ${
                  isLight ? 'text-neutral-600' : 'text-white/60'
                }`}>
                  Additional Net ARR Growth
                </span>
                <span className="font-syne text-4xl sm:text-5xl font-black text-orange-500">
                  +₹{estimatedLiftDollar} Cr
                </span>
                <span className="font-mono-custom text-xs text-orange-500 font-bold block mt-1">
                  (~{estimatedLiftPercent}% ARR Increase)
                </span>
              </div>

              <div className={`grid grid-cols-2 gap-4 pt-4 border-t ${
                isLight ? 'border-neutral-200' : 'border-white/10'
              }`}>
                <div>
                  <span className={`font-geist text-[11px] block ${
                    isLight ? 'text-neutral-600' : 'text-white/60'
                  }`}>
                    Annual CAC Savings
                  </span>
                  <span className={`font-mono-custom text-lg font-black ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    ₹{estimatedCACReduction} Lakhs
                  </span>
                </div>
                <div>
                  <span className={`font-geist text-[11px] block ${
                    isLight ? 'text-neutral-600' : 'text-white/60'
                  }`}>
                    Optimized Sales Cycle
                  </span>
                  <span className={`font-mono-custom text-lg font-black ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {projectedDays} Days
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenConsultationWithData &&
                  onOpenConsultationWithData(currentRevenue, Number(estimatedLiftDollar))
                }
                className={`w-full font-mono-custom text-xs uppercase tracking-widest font-black py-4 transition-colors flex items-center justify-center space-x-2 cursor-pointer ${
                  isLight
                    ? 'bg-black text-white hover:bg-orange-500'
                    : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                }`}
              >
                <span>LOCK IN MODEL DATA CONSULTATION (INR)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
