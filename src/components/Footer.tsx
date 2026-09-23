import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#071A59] text-white pt-16 pb-24 lg:pb-16 border-t-4 border-[#E5162D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo variant="dark" size="lg" className="max-w-[280px]" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-5 max-w-sm">
              BE BLESSED SERVICES provides residential cleaning, commercial cleaning,
              post-construction cleaning, move-in/move-out cleaning, and HVAC services throughout
              Chicago and surrounding suburbs.
            </p>

            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1596D2] shrink-0" />
                <span>Serving Chicago Since {COMPANY_INFO.established}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1596D2] shrink-0" />
                <span>W-2 Cleaning Professionals • Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1596D2] shrink-0" />
                <span>24/7 Commercial Cleaning Availability</span>
              </div>
            </div>

            {/* Insurance Canopy Badge Integration */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#1596D2] mb-2">
                Verified Coverage:
              </p>
              <div className="inline-block bg-white p-2 rounded-xl shadow-md border border-white/20">
                <a
                  href="https://www.insurancecanopy.com/cleaning-business-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  title="Cleaning Insurance by Canopy"
                >
                  <img
                    src="https://www.insurancecanopy.com/images/badge/cleaning-insurance-by-canopy.png"
                    alt="Cleaning Insurance by Canopy"
                    className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display border-b border-white/10 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commercial Cleaning (24/7)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('post-construction')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Post-Construction
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('move-in-out')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Move-In / Move-Out
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hvac')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  HVAC Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('our-work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Work Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Scope (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display border-b border-white/10 pb-2">
              Service Categories
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="font-semibold text-white">Residential:</li>
              <li className="pl-2.5 text-slate-400">• Standard &amp; Deep House Cleaning</li>
              <li className="pl-2.5 text-slate-400">• Weekly, Bi-Weekly, Monthly</li>
              <li className="font-semibold text-white pt-1">Commercial:</li>
              <li className="pl-2.5 text-slate-400">• Offices &amp; Retail Suites</li>
              <li className="pl-2.5 text-slate-400">• Religious Facilities &amp; Centers</li>
              <li className="font-semibold text-white pt-1">Turnover &amp; Post-Construction:</li>
              <li className="pl-2.5 text-slate-400">• Post-Renovation Transformation</li>
              <li className="pl-2.5 text-slate-400">• Move-In / Move-Out Turnovers</li>
              <li className="font-semibold text-white pt-1">HVAC Services:</li>
              <li className="pl-2.5 text-slate-400">• Filter Replacement &amp; Diagnostics</li>
              <li className="pl-2.5 text-slate-400">• Coil Cleaning &amp; Maintenance</li>
            </ul>
          </div>

          {/* Column 4: Contact Direct & Quote CTA (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display border-b border-white/10 pb-2">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-300 mb-6">
              <a
                id="footer-phone"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-[#1596D2] transition-colors"
              >
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-[#E5162D] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-sm">{COMPANY_INFO.phone}</span>
              </a>

              <a
                id="footer-email"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors break-all"
              >
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-[#1596D2] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-[#1596D2] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Chicago, IL &amp; Surrounding Suburbs</span>
              </div>
            </div>

            <button
              id="footer-quote-btn"
              type="button"
              onClick={onRequestQuote}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#084A9F] hover:bg-[#1596D2] text-white font-bold text-xs py-3 px-4 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span>“Serving with Purpose”</span>
            <span>•</span>
            <span>Chicago, Illinois</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

