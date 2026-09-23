import React from 'react';
import {
  ArrowRight,
  Phone,
  Home,
  Building2,
  HardHat,
  Truck,
  Wind,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-white to-[#EEF2F6]"
    >
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#084A9F]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#1596D2]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2F6] border border-[#084A9F]/20 text-[#071A59] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E5162D] animate-pulse" />
              <span>BE BLESSED SERVICES • Serving with Purpose</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#071A59] tracking-tight leading-[1.12] mb-4 font-display">
              PROFESSIONAL CLEANING &amp; PROPERTY SERVICES IN{' '}
              <span className="text-[#084A9F] relative inline-block">
                CHICAGO
                <span className="absolute left-0 bottom-1 w-full h-1.5 bg-[#E5162D]/70 rounded-full" />
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-lg sm:text-2xl font-bold text-[#1596D2] mb-5 font-display">
              Residential, Commercial, Post-Construction, Move-In/Out &amp; HVAC Solutions
            </h2>

            {/* Core Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-4 font-normal">
              BE BLESSED SERVICES provides residential cleaning, commercial cleaning,
              post-construction cleaning, move-in/move-out cleaning, and HVAC services throughout
              Chicago and surrounding suburbs.
            </p>

            {/* Brand Statement */}
            <p className="text-sm sm:text-base font-semibold text-[#071A59] italic mb-8 flex items-center gap-2 border-l-3 border-[#E5162D] pl-3 py-0.5">
              <Sparkles className="w-4 h-4 text-[#1596D2] shrink-0" />
              “Professional service. Detailed results. Serving with purpose.”
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-request-quote-btn"
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-3 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-b-4 border-[#E5162D] cursor-pointer"
              >
                <span>REQUEST A FREE QUOTE</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <a
                id="hero-phone-call-btn"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-[#071A59] font-bold text-base px-6 py-4 rounded-xl border-2 border-[#071A59]/20 hover:border-[#084A9F] shadow-sm transition-all"
              >
                <Phone className="w-5 h-5 text-[#E5162D]" />
                <span>CALL {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* 5 Service Indicators */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Core Service Capabilities:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                <button
                  id="hero-pill-residential"
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#084A9F] text-xs font-semibold text-[#071A59] shadow-2xs hover:bg-[#EEF2F6] transition-colors cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5 text-[#084A9F]" />
                  <span>Residential Cleaning</span>
                </button>

                <button
                  id="hero-pill-commercial"
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#084A9F] text-xs font-semibold text-[#071A59] shadow-2xs hover:bg-[#EEF2F6] transition-colors cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#084A9F]" />
                  <span>Commercial Cleaning</span>
                </button>

                <button
                  id="hero-pill-post-construction"
                  type="button"
                  onClick={() => onNavigate('post-construction')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#084A9F] text-xs font-semibold text-[#071A59] shadow-2xs hover:bg-[#EEF2F6] transition-colors cursor-pointer"
                >
                  <HardHat className="w-3.5 h-3.5 text-[#E5162D]" />
                  <span>Post-Construction</span>
                </button>

                <button
                  id="hero-pill-move-in-out"
                  type="button"
                  onClick={() => onNavigate('move-in-out')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#084A9F] text-xs font-semibold text-[#071A59] shadow-2xs hover:bg-[#EEF2F6] transition-colors cursor-pointer"
                >
                  <Truck className="w-3.5 h-3.5 text-[#084A9F]" />
                  <span>Move-In / Move-Out</span>
                </button>

                <button
                  id="hero-pill-hvac"
                  type="button"
                  onClick={() => onNavigate('hvac')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#084A9F] text-xs font-semibold text-[#071A59] shadow-2xs hover:bg-[#EEF2F6] transition-colors cursor-pointer"
                >
                  <Wind className="w-3.5 h-3.5 text-[#1596D2]" />
                  <span>HVAC Services</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Composite Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Box */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cleaning and property services in modern Chicago property by Be Blessed Services"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A59]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#084A9F] px-2 py-0.5 rounded text-white mb-1">
                    Chicago &amp; Suburbs
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    Pristine standards for homes, commercial facilities, turnovers &amp; HVAC systems.
                  </p>
                </div>
              </div>

              {/* Floating Mini Badge 1: W-2 Staff */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-[#EEF2F6] flex items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071A59] leading-tight">W-2 Employed Cleaners</p>
                  <p className="text-[11px] text-slate-500">Background-checked &amp; trained</p>
                </div>
              </div>

              {/* Floating Mini Badge 2: Since 2023 & Insured */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-xl shadow-xl border border-[#EEF2F6] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5162D]/10 flex items-center justify-center text-[#E5162D] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071A59]">Serving Since 2023</p>
                  <p className="text-[11px] font-semibold text-[#084A9F]">Fully Insured • Liability Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

