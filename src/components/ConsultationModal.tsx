import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRevenue?: number;
  initialLift?: number;
  theme?: 'dark' | 'light';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialRevenue,
  initialLift,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: initialRevenue ? `₹${initialRevenue} Cr ARR` : '₹5 Cr - ₹25 Cr ARR',
    notes: initialLift ? `Projected model lift: +₹${initialLift} Cr ARR` : ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className={`max-w-2xl w-full relative shadow-2xl p-8 sm:p-12 space-y-6 my-8 border border-orange-500 ${
        isLight ? 'bg-white text-neutral-900' : 'bg-[#111111] text-white'
      }`}>
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className={`absolute top-6 right-6 font-mono-custom text-xs uppercase tracking-widest p-2 border flex items-center space-x-1 cursor-pointer font-bold ${
            isLight
              ? 'text-neutral-500 hover:text-black border-neutral-300 bg-neutral-100'
              : 'text-white/50 hover:text-white border-white/10 bg-[#0A0A0A]'
          }`}
        >
          <X className="w-4 h-4" />
          <span>CLOSE</span>
        </button>

        {!submitted ? (
          <>
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold block mb-2">
                REVENUE ARCHITECTURE AUDIT (INDIA & GLOBAL)
              </span>
              <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase tracking-tight ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                BOOK A PRIVATE SESSION<span className="text-orange-500">.</span>
              </h2>
              <p className={`font-geist text-sm mt-2 leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-white/60'
              }`}>
                Connect with our quantitative strategists for a 30-minute diagnostic on your acquisition funnel, media efficiency, and RevOps architecture.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block font-mono-custom text-xs uppercase font-bold mb-1 ${
                    isLight ? 'text-neutral-700' : 'text-white/60'
                  }`}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className={`w-full border px-4 py-3 font-geist text-sm focus:border-orange-500 outline-none transition-colors ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                        : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block font-mono-custom text-xs uppercase font-bold mb-1 ${
                    isLight ? 'text-neutral-700' : 'text-white/60'
                  }`}>
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.in"
                    className={`w-full border px-4 py-3 font-geist text-sm focus:border-orange-500 outline-none transition-colors ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                        : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block font-mono-custom text-xs uppercase font-bold mb-1 ${
                    isLight ? 'text-neutral-700' : 'text-white/60'
                  }`}>
                    COMPANY / BRAND *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enterprise Brand"
                    className={`w-full border px-4 py-3 font-geist text-sm focus:border-orange-500 outline-none transition-colors ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                        : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block font-mono-custom text-xs uppercase font-bold mb-1 ${
                    isLight ? 'text-neutral-700' : 'text-white/60'
                  }`}>
                    CURRENT REVENUE STAGE (INR / ₹) *
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className={`w-full border px-4 py-3 font-geist text-sm focus:border-orange-500 outline-none transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900'
                        : 'bg-[#0A0A0A] border-white/20 text-white'
                    }`}
                  >
                    <option value="< ₹1 Cr ARR">&lt; ₹1 Crore ARR</option>
                    <option value="₹1 Cr - ₹5 Cr ARR">₹1 Crore - ₹5 Crores ARR</option>
                    <option value="₹5 Cr - ₹25 Cr ARR">₹5 Crores - ₹25 Crores ARR</option>
                    <option value="₹25 Cr - ₹100 Cr ARR">₹25 Crores - ₹100 Crores ARR</option>
                    <option value="₹100 Cr+ ARR">₹100 Crores+ ARR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block font-mono-custom text-xs uppercase font-bold mb-1 ${
                  isLight ? 'text-neutral-700' : 'text-white/60'
                }`}>
                  GROWTH OBJECTIVES / SIMULATOR NOTES (INR / ₹)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your target ARR in INR (₹), current CAC, media channels, or growth targets..."
                  className={`w-full border px-4 py-3 font-geist text-sm focus:border-orange-500 outline-none transition-colors resize-none ${
                    isLight
                      ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                      : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                  }`}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-black font-mono-custom text-xs uppercase tracking-widest font-black py-4 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-orange-500/10"
                >
                  <span>SUBMIT ARCHITECTURE AUDIT REQUEST (INR / ₹)</span>
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
            <h3 className={`font-syne text-3xl font-black uppercase tracking-tight ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              AUDIT REQUEST RECEIVED<span className="text-orange-500">.</span>
            </h3>
            <p className={`font-geist text-sm max-w-md mx-auto leading-relaxed ${
              isLight ? 'text-neutral-600' : 'text-white/60'
            }`}>
              Thank you, <span className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>{formData.name}</span>. A principal growth strategist from Revenue Craft Digital will reach out within 1 business day to confirm your audit timing for <span className="text-orange-500 font-bold">{formData.revenue}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-3.5 transition-colors cursor-pointer ${
                isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
              }`}
            >
              RETURN TO SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
