import React from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { NavSection } from '../types';

interface AboutSectionProps {
  onNavigate: (section: NavSection) => void;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onRequestQuote }) => {
  const commitments = [
    'Trained, reliable W-2 team members',
    'Comprehensive background checks on all staff',
    'Fully insured with liability protection',
    'High-touch respect for client property & confidentiality',
    'Flexible scheduling tailored to residential & commercial needs',
    'Consistent quality with attention to the finest details',
  ];

  const spaces = [
    'Family Homes',
    'Apartments & Condos',
    'Corporate Offices',
    'Retail Stores',
    'Commercial Properties',
    'Newly Built Developments',
    'Post-Renovation Spaces',
  ];

  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-[#E5162D]" />
              About Be Blessed Services
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-4 font-display">
              CLEANING WITH CARE.{' '}
              <span className="text-[#084A9F]">SERVING WITH PURPOSE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              BE BLESSED SERVICES was established in 2023 with a foundational mission: to provide
              dependable, meticulous, and genuinely caring cleaning solutions for homes, businesses,
              and job sites across Chicago and its surrounding suburbs.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              We understand that inviting cleaners into your space requires trust. Whether it is your family’s
              living room, a high-volume commercial office, an active retail storefront, or a newly remodeled
              showcase property, we treat every environment with the utmost dignity, organization, and attention
              to detail.
            </p>

            {/* Spaces Trusted Tag Clouds */}
            <div className="mb-8 p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F6]">
              <p className="text-xs font-bold text-[#071A59] uppercase tracking-wider mb-2.5">
                Spaces Entrusted To Our Care:
              </p>
              <div className="flex flex-wrap gap-2">
                {spaces.map((space, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    {space}
                  </span>
                ))}
              </div>
            </div>

            {/* Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#084A9F] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#1D2430]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                id="about-discover-services-btn"
                type="button"
                onClick={() => onNavigate('residential')}
                className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>DISCOVER OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-quote-btn"
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 bg-[#EEF2F6] hover:bg-slate-200 text-[#071A59] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                <span>GET A FREE ESTIMATE</span>
              </button>
            </div>
          </div>

          {/* Right Image/Values Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                  alt="Be Blessed Services professional cleaning equipment and meticulous care"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-6 bg-[#071A59] text-white">
                  <div className="flex items-center gap-2 text-[#1596D2] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Our Standard</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">
                    W-2 Professional Employees
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We invest in trained employees on our payroll rather than random subcontractors.
                    This means consistent quality, strict background checks, and workers who take pride
                    in every home and facility they clean.
                  </p>
                </div>
              </div>

              {/* Decorative Red Accent Tag */}
              <div className="absolute -top-3 -right-3 bg-[#E5162D] text-white font-display text-xs font-black uppercase px-3 py-1.5 rounded-md shadow-md tracking-wider">
                Est. 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
