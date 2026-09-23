import React from 'react';
import {
  Home,
  Building2,
  HardHat,
  Truck,
  Wind,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { NavSection } from '../types';

interface ThreeServicesSectionProps {
  onNavigate: (section: NavSection) => void;
}

export const ThreeServicesSection: React.FC<ThreeServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section id="services-overview-section" className="py-16 sm:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5162D]" />
            Complete Service Scope
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-4 font-display">
            PRIMARY SERVICE CATEGORIES
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From pristine residences to corporate facilities, post-renovation handovers, tenant turnovers,
            and HVAC system care, BE BLESSED SERVICES delivers dependable results throughout Chicago.
          </p>
        </div>

        {/* 5 Main Cards Layout */}
        <div className="space-y-8">
          {/* Row 1: 3 Core Cleaning Divisions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Residential Cleaning */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-[#084A9F] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                  alt="Residential home cleaning service in Chicago"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md text-[#084A9F]">
                  <Home className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  Residential Cleaning
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  Professional standard, deep, and recurring cleaning for homes, apartments, condos, and residential properties.
                </p>

                <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Standard House Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Deep House Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Recurring Service (Weekly, Bi-Weekly, Monthly)</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button
                    id="card-explore-residential-btn"
                    type="button"
                    onClick={() => onNavigate('residential')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#084A9F] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE RESIDENTIAL CLEANING</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Commercial Cleaning */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-[#084A9F] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial office and facility cleaning in Chicago"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md text-[#084A9F]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="absolute top-4 right-4 bg-[#071A59] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  24/7 Available
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  Commercial Cleaning
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  Professional cleaning for offices, businesses, retail stores, commercial facilities, and organizations.
                </p>

                <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Commercial Standard Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Commercial Deep Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                    <span>Customized Commercial Janitorial Plans</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button
                    id="card-explore-commercial-btn"
                    type="button"
                    onClick={() => onNavigate('commercial')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#084A9F] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE COMMERCIAL CLEANING</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Post-Construction Cleaning */}
            <div className="flex flex-col bg-white rounded-2xl border-2 border-[#084A9F] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
              <div className="bg-[#084A9F] text-white text-center py-1.5 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E5162D]" />
                <span>Real Work Project Gallery Featured</span>
              </div>

              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Post-construction apartment cleaned and move-in ready in Chicago"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md text-[#E5162D]">
                  <HardHat className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  Post-Construction Cleaning
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  Detailed cleaning after construction and renovation to remove construction dust, debris, residue, labels, and project-related mess.
                </p>

                <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0" />
                    <span>Drywall &amp; Fine Dust Extraction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0" />
                    <span>Paint Splash &amp; Tape Residue Removal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0" />
                    <span>Turnkey Move-In &amp; Occupancy Handover</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button
                    id="card-explore-post-construction-btn"
                    type="button"
                    onClick={() => onNavigate('post-construction')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                  >
                    <span>EXPLORE POST-CONSTRUCTION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Move-In / Move-Out Cleaning & HVAC Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 4: Move-In / Move-Out Cleaning */}
            <div className="flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200 hover:border-[#084A9F] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Move-in and move-out cleaning for apartments and homes in Chicago"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md text-[#084A9F]">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="absolute top-4 right-4 bg-[#084A9F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  Turnover Ready
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                    Move-In / Move-Out Cleaning
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Detailed cleaning designed to prepare residential and commercial properties for a move, turnover, or new occupant.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                      <span>Inside Cabinets &amp; Drawers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                      <span>Appliances, Ovens &amp; Stoves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                      <span>Deep Tile &amp; Bath Sanitizing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                      <span>Baseboards &amp; Detail Trim</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    id="card-explore-move-in-out-btn"
                    type="button"
                    onClick={() => onNavigate('move-in-out')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#084A9F] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE MOVE-IN / MOVE-OUT CLEANING</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: HVAC Services */}
            <div className="flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200 hover:border-[#1596D2] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="Professional HVAC services, filter replacement, and preventive maintenance in Chicago"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md text-[#1596D2]">
                  <Wind className="w-5 h-5" />
                </div>
                <div className="absolute top-4 right-4 bg-[#071A59] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  Homes &amp; Businesses
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                    HVAC Services
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    HVAC filter replacement, system diagnostics, inspection, coil cleaning, and preventive maintenance for residential and commercial properties.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                      <span>Filter Replacement &amp; Airflow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                      <span>Refrigerant &amp; Diagnostics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                      <span>Condenser &amp; Evaporator Coils</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                      <span>Preventive System Maintenance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    id="card-explore-hvac-btn"
                    type="button"
                    onClick={() => onNavigate('hvac')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#071A59] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE HVAC SERVICES</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

