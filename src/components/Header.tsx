import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Home,
  Building2,
  HardHat,
  Truck,
  Wind,
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { NavSection } from '../types';

interface HeaderProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  onRequestQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceCategories = [
    {
      id: 'residential' as NavSection,
      name: 'Residential Cleaning',
      desc: 'Standard, deep & recurring cleaning for homes & condos',
      icon: Home,
      badge: 'Supplies Included',
    },
    {
      id: 'commercial' as NavSection,
      name: 'Commercial Cleaning',
      desc: 'Offices, retail stores, facilities & 24/7 janitorial',
      icon: Building2,
      badge: '24/7 Available',
    },
    {
      id: 'post-construction' as NavSection,
      name: 'Post-Construction Cleaning',
      desc: 'Industrial dust, paint, adhesive & post-build turnover',
      icon: HardHat,
      badge: 'Real Photos',
    },
    {
      id: 'move-in-out' as NavSection,
      name: 'Move-In / Move-Out Cleaning',
      desc: 'Meticulous turnover for residential & commercial spaces',
      icon: Truck,
      badge: 'Fresh Start',
    },
    {
      id: 'hvac' as NavSection,
      name: 'HVAC Services',
      desc: 'Filter replacement, system diagnostics, coil cleaning & care',
      icon: Wind,
      badge: 'Complete Care',
    },
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isAnyServiceActive = [
    'residential',
    'commercial',
    'post-construction',
    'move-in-out',
    'hvac',
  ].includes(currentSection);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-[#EEF2F6]'
          : 'bg-white py-3.5 sm:py-4 border-b border-[#EEF2F6]'
      }`}
    >
      {/* Top micro-bar for quick local credibility & phone (desktop only) */}
      {!isScrolled && (
        <div className="hidden lg:block bg-[#071A59] text-white text-xs py-1.5 px-6 font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6 text-slate-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1596D2]" />
                Serving Chicago &amp; Surrounding Suburbs Since 2023
              </span>
              <span className="text-white/40">|</span>
              <span>W-2 Cleaning Professionals • Fully Insured • Background-Checked</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">24/7 Commercial Cleaning Available</span>
              <a
                id="header-top-phone"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#1596D2] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#E5162D]" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Official Logo on the left */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 shrink-0 focus:outline-none"
            aria-label="BE BLESSED SERVICES - Return to homepage"
          >
            <Logo
              variant="light"
              size={isScrolled ? 'sm' : 'md'}
              className="max-w-[220px] sm:max-w-[280px]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 lg:gap-1.5 text-[13px] font-semibold text-[#071A59]"
          >
            {/* 1. Home */}
            <button
              id="nav-link-home"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                currentSection === 'home'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                  : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* 2. Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isAnyServiceActive
                    ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                    : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#084A9F]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu Card */}
              {servicesDropdownOpen && (
                <div
                  id="services-dropdown-panel"
                  className="absolute top-full left-0 mt-1 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Primary Service Categories
                    </span>
                    <span className="text-[10px] font-bold text-[#084A9F] bg-[#EEF2F6] px-2 py-0.5 rounded-full">
                      Chicago &amp; Suburbs
                    </span>
                  </div>

                  <div className="space-y-1">
                    {serviceCategories.map((svc) => {
                      const Icon = svc.icon;
                      const isItemActive = currentSection === svc.id;
                      return (
                        <button
                          key={svc.id}
                          id={`dropdown-svc-${svc.id}`}
                          type="button"
                          onClick={() => handleNavClick(svc.id)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${
                            isItemActive
                              ? 'bg-[#071A59] text-white'
                              : 'hover:bg-[#F7F9FC] text-[#071A59]'
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isItemActive
                                ? 'bg-white/20 text-[#1596D2]'
                                : 'bg-[#EEF2F6] text-[#084A9F] group-hover:bg-[#084A9F] group-hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`font-bold text-xs ${isItemActive ? 'text-white' : 'text-[#071A59]'}`}>
                                {svc.name}
                              </span>
                              <span
                                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                  isItemActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                                }`}
                              >
                                {svc.badge}
                              </span>
                            </div>
                            <p
                              className={`text-[11px] truncate mt-0.5 ${
                                isItemActive ? 'text-slate-200' : 'text-slate-500'
                              }`}
                            >
                              {svc.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 bg-[#F7F9FC] rounded-xl flex items-center justify-between">
                    <span className="text-[11px] text-slate-600">Need a customized scope?</span>
                    <button
                      type="button"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        onRequestQuote();
                      }}
                      className="text-[11px] font-bold text-[#084A9F] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. About */}
            <button
              id="nav-link-about"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                currentSection === 'about'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                  : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
              }`}
            >
              About
            </button>

            {/* 4. Our Work */}
            <button
              id="nav-link-our-work"
              type="button"
              onClick={() => handleNavClick('our-work')}
              className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                currentSection === 'our-work'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                  : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
              }`}
            >
              Our Work
            </button>

            {/* 5. Service Area */}
            <button
              id="nav-link-service-area"
              type="button"
              onClick={() => handleNavClick('service-area')}
              className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                currentSection === 'service-area'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                  : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
              }`}
            >
              Service Area
            </button>

            {/* 6. Contact */}
            <button
              id="nav-link-contact"
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                currentSection === 'contact'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold border-b-2 border-[#E5162D]'
                  : 'text-slate-700 hover:text-[#084A9F] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              id="header-phone-cta"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden 2xl:flex items-center gap-2 text-sm font-bold text-[#071A59] hover:text-[#084A9F] transition-colors py-2 px-3 rounded-lg border border-slate-200 bg-white"
            >
              <div className="w-7 h-7 rounded-full bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              id="header-quote-cta"
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-sm hover:shadow transition-all duration-200 border-b-2 border-[#E5162D] cursor-pointer"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile Right Controls: Phone + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              id="mobile-header-call"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2.5 rounded-xl bg-[#084A9F]/10 text-[#084A9F] hover:bg-[#084A9F]/20 transition-colors"
              aria-label="Call Be Blessed Services"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#071A59] hover:bg-[#EEF2F6] transition-colors"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-white border-b border-[#EEF2F6] px-5 py-5 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-1.5">
            {/* Home */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentSection === 'home'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Collapsible Services Group */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70 my-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 bg-white text-sm font-bold text-[#071A59]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="p-2 space-y-1 bg-[#F7F9FC]">
                  {serviceCategories.map((svc) => {
                    const Icon = svc.icon;
                    const isItemActive = currentSection === svc.id;
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => handleNavClick(svc.id)}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-left text-xs font-semibold cursor-pointer ${
                          isItemActive
                            ? 'bg-[#084A9F] text-white font-bold'
                            : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0 text-[#1596D2]" />
                        <span className="flex-1">{svc.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* About */}
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentSection === 'about'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>About</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Our Work */}
            <button
              type="button"
              onClick={() => handleNavClick('our-work')}
              className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentSection === 'our-work'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Our Work</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Service Area */}
            <button
              type="button"
              onClick={() => handleNavClick('service-area')}
              className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentSection === 'service-area'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Service Area</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentSection === 'contact'
                  ? 'text-[#084A9F] bg-[#EEF2F6] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-quote"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 bg-[#084A9F] text-white font-bold text-center rounded-xl shadow-md border-b-2 border-[#E5162D] cursor-pointer"
              >
                REQUEST A FREE QUOTE
              </button>

              <a
                id="mobile-drawer-call"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-2.5 bg-[#EEF2F6] text-[#071A59] font-bold text-center rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#E5162D]" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

