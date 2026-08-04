import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRevenue?: number;
  initialLift?: number;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialRevenue,
  initialLift
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: initialRevenue ? `$${initialRevenue}M ARR` : '$10M - $50M ARR',
    notes: initialLift ? `Projected model lift: +$${initialLift}M ARR` : ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#111111] border border-orange-500 max-w-2xl w-full relative shadow-2xl p-8 sm:p-12 space-y-6 my-8">
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-6 right-6 font-mono-custom text-xs text-white/50 hover:text-white uppercase tracking-widest p-2 border border-white/10 flex items-center space-x-1 cursor-pointer font-bold"
        >
          <X className="w-4 h-4" />
          <span>CLOSE</span>
        </button>

        {!submitted ? (
          <>
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold block mb-2">
                REVENUE ARCHITECTURE AUDIT
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                BOOK A PRIVATE SESSION<span className="text-orange-500">.</span>
              </h2>
              <p className="font-geist text-sm text-white/60 mt-2 leading-relaxed">
                Connect with our quantitative strategists for a 30-minute diagnostic on your acquisition funnel, media efficiency, and RevOps architecture.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-custom text-xs text-white/60 uppercase font-bold mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 font-geist text-sm text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-custom text-xs text-white/60 uppercase font-bold mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 font-geist text-sm text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-custom text-xs text-white/60 uppercase font-bold mb-1">
                    COMPANY / BRAND *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enterprise Corp"
                    className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 font-geist text-sm text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-custom text-xs text-white/60 uppercase font-bold mb-1">
                    CURRENT REVENUE STAGE
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 font-geist text-sm text-white focus:border-orange-500 outline-none transition-colors cursor-pointer"
                  >
                    <option value="<$5M ARR">&lt; $5M ARR</option>
                    <option value="$5M - $20M ARR">$5M - $20M ARR</option>
                    <option value="$20M - $50M ARR">$20M - $50M ARR</option>
                    <option value="$50M+ ARR">$50M+ ARR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono-custom text-xs text-white/60 uppercase font-bold mb-1">
                  GROWTH OBJECTIVES / SIMULATOR NOTES
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your acquisition targets, CAC bottlenecks, or tech stack..."
                  className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 font-geist text-sm text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-black font-mono-custom text-xs uppercase tracking-widest font-black py-4 hover:bg-white transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>SUBMIT ARCHITECTURE AUDIT REQUEST</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 bg-orange-500/20 border border-orange-500 text-orange-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-syne text-3xl font-black text-white uppercase tracking-tight">
              AUDIT REQUEST RECEIVED<span className="text-orange-500">.</span>
            </h3>
            <p className="font-geist text-sm text-white/60 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.name}</span>. A principal growth strategist from RevenueCraft Digital will reach out within 1 business day to confirm your audit timing.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-3.5 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
            >
              RETURN TO SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
