import React, { useState } from 'react';
import { X, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck, Sparkles, BarChart2 } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    monthlyBudget: '₹5L - ₹15L',
    serviceCategory: 'Scaling Ad Spend without Collapsing ROAS',
    goals: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-[#FECF05] text-[#141414] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#FECF05]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black font-syne text-white mb-3">
              Growth Audit Initiated!
            </h3>
            <p className="text-sm text-[#C1C1C1] max-w-md mx-auto mb-8 font-light leading-relaxed">
              Our growth architects at Revenue Craft Digital will inspect your ad accounts and tracking setup. We'll deliver a video breakdown and prioritized action plan within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3.5 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Return to Flight Deck
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="w-4 h-4 text-[#FECF05]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#FECF05]">
                Revenue Craft Growth Audit Protocol
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-syne text-white mb-2">
              Request Your Free Performance & Tracking Audit
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mb-8 font-light">
              See exactly where your Google Ads, Meta CAPI, and tracking setup are leaking revenue — plus the immediate fixes to compound your ROAS.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    Company Name / Website URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. apexbrand.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    Primary Growth Bottleneck
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  >
                    <option value="Scaling Ad Spend without Collapsing ROAS">Scaling Spend without Collapsing ROAS</option>
                    <option value="Tracking & Attribution Broken / Data Loss">Tracking & Attribution Broken / CAPI Setup</option>
                    <option value="High Cost Per Lead (CPL) / High CAC">High Cost Per Lead / High CAC</option>
                    <option value="Low Landing Page Conversion Rate">Low Landing Page Conversion Rate</option>
                    <option value="Creative Fatigue / Need High-ROAS Hooks">Creative Fatigue / Need High-ROAS Hooks</option>
                    <option value="Full-Stack Growth Co-Pilot">Full-Stack Growth Co-Pilot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                    Current Monthly Ad Spend
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  >
                    <option value="₹1L - ₹5L / month">₹1L - ₹5L / month</option>
                    <option value="₹5L - ₹15L / month">₹5L - ₹15L / month</option>
                    <option value="₹15L - ₹50L / month">₹15L - ₹50L / month</option>
                    <option value="₹50L+ Enterprise / Strategic">₹50L+ Enterprise / Strategic ($10k+/mo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-1.5">
                  Ad Channels Currently Active & Specific Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  placeholder="e.g. Running Meta Ads and Google Search, current ROAS is 2.1x, looking to scale to ₹20L/mo spend while maintaining 3.5x+..."
                  className="w-full px-4 py-3 rounded-xl bg-[#242424] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl shadow-[#FECF05]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#717171] pt-2">
                <span>Direct growth architect review</span>
                <span>·</span>
                <span>No long-term contracts required</span>
                <span>·</span>
                <span>NDA & Data Privacy Guaranteed</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
