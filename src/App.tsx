import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerTapes } from './components/TickerTapes';
import { AboutSection } from './components/AboutSection';
import { GrowthEcosystem } from './components/GrowthEcosystem';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WhyUsSection } from './components/WhyUsSection';
import { AuditCalloutSection } from './components/AuditCalloutSection';
import { TeamLocationSection } from './components/TeamLocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { CustomCursor } from './components/CustomCursor';
import { AuditModal } from './components/AuditModal';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { NavSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Light / Dark mode state management
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rcd_mode');
      return saved ? saved === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('rcd_mode', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('rcd_mode', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#E2E2E2] font-inter selection:bg-[#FECF05] selection:text-[#141414] relative transition-colors duration-300">
      {/* 1. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 2. Floating Right "GROWTH AUDIT" Tab, WhatsApp Signal & Back to Top */}
      <FloatingControls onOpenAudit={() => setAuditModalOpen(true)} />

      {/* 2b. Floating Theme Palette & Light/Dark Switcher */}
      <ThemeSwitcher
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* 3. Top Header with Pill Navigation, Brandmark & Light/Dark Toggle */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAudit={() => setAuditModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Single-Page Agency Experience */}
      <main>
        {/* Section 1: Hero Cockpit */}
        <section id="home">
          <Hero
            onNavigate={handleNavigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </section>

        {/* Section 2: Signature Dual Angled Ticker Tapes */}
        <TickerTapes />

        {/* Section 3: About Us */}
        <section id="about">
          <AboutSection
            onNavigate={handleNavigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </section>

        {/* Section 4: Our Growth Ecosystem */}
        <GrowthEcosystem />

        {/* Section 5: Services */}
        <ServicesSection onOpenAudit={() => setAuditModalOpen(true)} />

        {/* Section 6: Industries We Work With */}
        <IndustriesSection />

        {/* Section 7: How We Work */}
        <HowWeWorkSection />

        {/* Section 8: Performance Philosophy & Metrics */}
        <PhilosophySection />

        {/* Section 9: Why Revenue Craft Digital */}
        <WhyUsSection />

        {/* Section 10: Free Growth Audit Callout */}
        <AuditCalloutSection onOpenAudit={() => setAuditModalOpen(true)} />

        {/* Section 11: Team & Location */}
        <TeamLocationSection />

        {/* Section 12: Contact Section */}
        <ContactSection />

        {/* Section 13: Final CTA */}
        <FinalCTASection
          onNavigate={handleNavigate}
          onOpenAudit={() => setAuditModalOpen(true)}
        />
      </main>

      {/* 4. Comprehensive Enterprise Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* 5. Growth Audit Consultation Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
