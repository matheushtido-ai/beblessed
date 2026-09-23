import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ThreeServicesSection } from './components/ThreeServicesSection';
import { ResidentialSection } from './components/ResidentialSection';
import { CommercialSection } from './components/CommercialSection';
import { PostConstructionSection } from './components/PostConstructionSection';
import { MoveInOutSection } from './components/MoveInOutSection';
import { HvacSection } from './components/HvacSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import { SHOWCASE_A_IMAGES, SHOWCASE_B_IMAGES } from './data/companyData';
import { NavSection, ProjectImage } from './types';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<ProjectImage | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quotePrefillService, setQuotePrefillService] = useState<string>('Residential Standard Cleaning');

  const allProjectImages = [...SHOWCASE_A_IMAGES, ...SHOWCASE_B_IMAGES];

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    switch (section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        scrollToSection('about-section');
        break;
      case 'services':
        scrollToSection('services-overview');
        break;
      case 'residential':
        scrollToSection('residential-cleaning');
        break;
      case 'commercial':
        scrollToSection('commercial-cleaning');
        break;
      case 'post-construction':
        scrollToSection('post-construction-cleaning');
        break;
      case 'move-in-out':
        scrollToSection('move-in-out-cleaning');
        break;
      case 'hvac':
        scrollToSection('hvac-services');
        break;
      case 'our-work':
        scrollToSection('post-construction-showcase');
        break;
      case 'service-area':
        scrollToSection('service-area');
        break;
      case 'contact':
        scrollToSection('main-footer');
        break;
    }
  };

  const handleOpenQuote = (serviceType?: string) => {
    if (serviceType) {
      setQuotePrefillService(serviceType);
    }
    setQuoteModalOpen(true);
  };

  // Observe scroll position to update current active nav item
  useEffect(() => {
    const sectionIds: { id: string; name: NavSection }[] = [
      { id: 'hero-section', name: 'home' },
      { id: 'about-section', name: 'about' },
      { id: 'services-overview', name: 'services' },
      { id: 'residential-cleaning', name: 'residential' },
      { id: 'commercial-cleaning', name: 'commercial' },
      { id: 'post-construction-cleaning', name: 'post-construction' },
      { id: 'move-in-out-cleaning', name: 'move-in-out' },
      { id: 'hvac-services', name: 'hvac' },
      { id: 'why-choose-us', name: 'about' },
      { id: 'service-area', name: 'service-area' },
      { id: 'main-footer', name: 'contact' },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].id);
        if (el && el.offsetTop <= scrollY) {
          setCurrentSection(sectionIds[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1D2430] font-sans antialiased selection:bg-[#084A9F] selection:text-white">
      {/* Persistent Navigation Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Main Page Flow following requested structure */}
      <main id="main-content">
        {/* 1. Hero Section (updated with 5 primary service pills) */}
        <Hero
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 2. Quick Trust Bar */}
        <TrustBar />

        {/* 3. About Section */}
        <AboutSection
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 4. Services Overview (5 primary categories) */}
        <ThreeServicesSection onNavigate={handleNavigate} />

        {/* 5. Residential Cleaning Deep-Dive */}
        <ResidentialSection onRequestQuote={handleOpenQuote} />

        {/* 6. Commercial Cleaning Deep-Dive (24/7 & 11 Industry Cards) */}
        <CommercialSection onRequestQuote={handleOpenQuote} />

        {/* 7. Post-Construction Cleaning (Showcase A & B with Lightbox) */}
        <PostConstructionSection
          onOpenLightbox={(img) => setSelectedLightboxImage(img)}
          onRequestQuote={handleOpenQuote}
        />

        {/* 8. Move-In / Move-Out Cleaning Section (NEW) */}
        <MoveInOutSection
          onNavigate={handleNavigate}
          onRequestQuote={handleOpenQuote}
        />

        {/* 9. HVAC Services Section (NEW) */}
        <HvacSection
          onNavigate={handleNavigate}
          onRequestQuote={handleOpenQuote}
        />

        {/* 10. Trust / Why Choose Us Section (with Insurance Canopy Badge) */}
        <WhyChooseUs />

        {/* 11. Service Area Section */}
        <ServiceAreaSection onRequestQuote={() => handleOpenQuote()} />
      </main>

      {/* 12. Footer (updated links & Insurance Canopy badge) */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Persistent Mobile Bottom CTA Bar */}
      <MobileStickyBar onRequestQuote={() => handleOpenQuote()} />

      {/* Lightbox Modal for Project Inspection */}
      <LightboxModal
        image={selectedLightboxImage}
        allImages={allProjectImages}
        onClose={() => setSelectedLightboxImage(null)}
        onSelectImage={(img) => setSelectedLightboxImage(img)}
      />

      {/* Interactive Free Quote Request Modal with Dynamic HVAC Fields */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={quotePrefillService}
      />
    </div>
  );
}
