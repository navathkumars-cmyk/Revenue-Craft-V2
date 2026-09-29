import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, TrendingUp } from 'lucide-react';

interface FloatingControlsProps {
  onOpenAudit: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenAudit }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Revenue Craft Digital Right-Edge Vertical Tab */}
      <button
        onClick={onOpenAudit}
        className="wm-floating-btn flex items-center justify-center font-black tracking-widest uppercase cursor-pointer"
        aria-label="Request Free Revenue Growth Audit"
      >
        GROWTH AUDIT
      </button>

      {/* 2. Floating WhatsApp Co-Pilot Affordance */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Revenue%20Craft%20Digital!%20We'd%20like%20to%20audit%20our%20performance%20marketing%20and%20ad%20spend."
        target="_blank"
        rel="noopener noreferrer"
        className="wm-signal-btn group cursor-pointer"
        aria-label="Chat on WhatsApp with Revenue Craft Digital Co-Pilots"
      >
        <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </a>

      {/* 3. Smooth Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="wm-back-to-top cursor-pointer animate-fade-in"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}
    </>
  );
};
