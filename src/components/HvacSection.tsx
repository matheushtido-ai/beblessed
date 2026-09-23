import React, { useState } from 'react';
import {
  Wind,
  Gauge,
  Zap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Info,
  Check,
  ThermometerSnowflake,
  Flame,
  Wrench,
  Layers,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavSection } from '../types';

interface HvacSectionProps {
  onNavigate?: (section: NavSection) => void;
  onRequestQuote: (serviceType?: string) => void;
}

export const HvacSection: React.FC<HvacSectionProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);

  const hvacServices = [
    {
      id: 'filter-replacement',
      title: 'Filter Replacement & Airflow Optimization',
      shortTitle: 'Filter Replacement',
      icon: Wind,
      concept:
        'Proper filtration and airflow are important to both HVAC performance and indoor comfort. Regular filter replacement can help maintain proper airflow, support indoor air quality, protect internal HVAC components, and reduce unnecessary strain on the system.',
      items: [
        'HVAC filter inspection',
        'Filter replacement with proper MERV rating sizing',
        'Airflow evaluation across return and supply registers',
        'Airflow optimization and register condition review',
        'Preventive system care to protect blower motor and coils',
      ],
      tag: 'Airflow & Air Quality',
    },
    {
      id: 'diagnostics',
      title: 'Refrigerant Testing & System Diagnostics',
      shortTitle: 'System Diagnostics',
      icon: Gauge,
      concept:
        'Proper refrigerant levels and system pressures are essential to heating and cooling performance. Our diagnostic process includes precise evaluation of refrigerant levels and system pressure to help identify performance issues and support proper HVAC operation.',
      items: [
        'Refrigerant level evaluation & pressure manifold testing',
        'Pressure testing for high and low sides',
        'Cooling performance temperature delta checks',
        'Heating performance and airflow temperature checks',
        'HVAC system diagnostics to isolate operational inefficiencies',
        'Identification of potential operating issues and cycle irregularities',
      ],
      tag: 'Pressure & Performance',
      disclaimer: 'Diagnostics are designed to assess observable operating metrics and accessible system conditions.',
    },
    {
      id: 'electrical-inspection',
      title: 'Electrical & Outdoor Unit Inspection',
      shortTitle: 'Electrical & Condenser',
      icon: Zap,
      concept:
        'HVAC systems depend on reliable electrical connections and properly functioning outdoor equipment. Our inspection process evaluates accessible wiring, connections, and outdoor condenser components to help identify visible wear, electrical concerns, and potential performance issues.',
      items: [
        'Electrical connection tightness and contactor inspection',
        'Accessible wiring inspection for corrosion or visible heat wear',
        'Outdoor condenser casing, fan blade and debris inspection',
        'Visible component evaluation (capacitors, disconnect switches)',
        'System operation evaluation during live cycle startup',
      ],
      tag: 'Safety & Equipment Condition',
    },
    {
      id: 'coil-cleaning',
      title: 'Coil Cleaning & Efficiency Restoration',
      shortTitle: 'Coil Cleaning',
      icon: Sparkles,
      concept:
        'Dust, dirt, and buildup on HVAC coils can interfere with proper heat transfer and system performance. Professional condenser and evaporator coil cleaning helps restore cleaner heat-transfer surfaces and supports efficient HVAC operation.',
      items: [
        'Condenser coil cleaning to remove leaves, dirt and urban grime',
        'Evaporator coil cleaning where accessible',
        'Dust, pet dander and particulate buildup removal',
        'Equipment condition inspection of fin alignment and casing',
        'Preventive maintenance for improved heat-transfer capabilities',
      ],
      tag: 'Heat Transfer Surfaces',
    },
    {
      id: 'preventive-maintenance',
      title: 'Internal System Inspection & Preventive Maintenance',
      shortTitle: 'Preventive Maintenance',
      icon: Wrench,
      concept:
        'Preventive HVAC maintenance helps identify visible wear and operating concerns before they potentially develop into larger problems. Our team performs a detailed evaluation of accessible HVAC components and provides preventive maintenance based on the condition and needs of the system.',
      items: [
        'Internal component inspection of accessible blower and cabinet areas',
        'Visible wear evaluation on belts, motor mounts and seals',
        'Preventive maintenance tune-up checklist',
        'Basic operational checks across thermostat and cycle triggers',
        'Equipment condition assessment report',
        'Recommendations based on observed system condition',
      ],
      tag: 'Long-Term System Care',
    },
  ];

  return (
    <section id="hvac-services" className="py-16 sm:py-24 bg-[#F7F9FC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#1596D2]/30 text-[#071A59] text-xs font-bold uppercase tracking-wider mb-3">
            <Wind className="w-3.5 h-3.5 text-[#1596D2]" />
            Heating &amp; Cooling Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            HVAC SERVICES FOR HOMES &amp; BUSINESSES
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#084A9F] font-display mb-4">
            Comfort, Performance &amp; Preventive Care Throughout the Year
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            At BE BLESSED SERVICES, we understand that the comfort of your home or business depends
            on a properly functioning HVAC system. We offer complete solutions for heating, cooling,
            airflow, and system maintenance designed to help maintain a comfortable environment
            throughout the year.
          </p>
        </div>

        {/* 5 Core Services Overview Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-[#071A59] font-display mb-2">
              Complete HVAC Care
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              From routine filter replacement to system diagnostics, coil cleaning, and preventive maintenance,
              BE BLESSED SERVICES provides HVAC support for residential and commercial properties throughout Chicago and surrounding suburbs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hvacServices.map((svc, idx) => {
              const Icon = svc.icon;
              const isSelected = selectedServiceIdx === idx;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedServiceIdx(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#071A59] text-white border-[#071A59] shadow-lg scale-[1.02]'
                      : 'bg-white text-[#071A59] border-slate-200 hover:border-[#1596D2] shadow-2xs hover:shadow'
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                        isSelected ? 'bg-white/15 text-[#1596D2]' : 'bg-[#EEF2F6] text-[#084A9F]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                        isSelected ? 'text-[#1596D2]' : 'text-slate-500'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold font-display leading-tight mb-2">
                      {svc.shortTitle}
                    </h4>
                  </div>
                  <span
                    className={`text-[11px] font-semibold mt-3 pt-2 border-t inline-flex items-center gap-1 ${
                      isSelected
                        ? 'border-white/20 text-[#1596D2]'
                        : 'border-slate-100 text-[#084A9F]'
                    }`}
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Service Deep Dive Card */}
        {(() => {
          const current = hvacServices[selectedServiceIdx];
          const Icon = current.icon;
          return (
            <div className="bg-white rounded-2xl border-2 border-[#084A9F]/20 p-6 sm:p-10 shadow-md mb-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1596D2] bg-[#EEF2F6] px-2.5 py-0.5 rounded-md">
                      {current.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A59] font-display mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{current.title}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
                    {current.concept}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onRequestQuote(current.title)}
                      className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                    >
                      <span>REQUEST THIS SERVICE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 bg-[#EEF2F6] hover:bg-slate-200 text-[#071A59] font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#E5162D]" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F7F9FC] rounded-xl p-6 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#071A59] mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                    <span>Included in This Service Scope:</span>
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F]" />
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {current.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1596D2] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {current.disclaimer && (
                    <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 italic">
                      * {current.disclaimer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* HVAC Support for Homes & Businesses Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Column 1: Residential HVAC */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm hover:border-[#084A9F] transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] mb-4">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#084A9F] block mb-1">
                Homeowners &amp; Condos
              </span>
              <h3 className="text-2xl font-bold text-[#071A59] mb-3 font-display">
                Residential HVAC Support
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Maintain comfortable indoor conditions with HVAC inspection, filter replacement, coil cleaning, diagnostics, and preventive maintenance for residential properties.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                  <span>Seasonal heating and cooling inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                  <span>Prompt filter replacement to support cleaner airflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                  <span>Outdoor condenser unit cleaning &amp; debris removal</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRequestQuote('Residential HVAC Service')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#084A9F] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
            >
              <span>REQUEST RESIDENTIAL HVAC SERVICE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Column 2: Commercial HVAC */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm hover:border-[#1596D2] transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1596D2]/10 flex items-center justify-center text-[#1596D2] mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1596D2] block mb-1">
                Offices, Retail &amp; Facilities
              </span>
              <h3 className="text-2xl font-bold text-[#071A59] mb-3 font-display">
                Commercial HVAC Support
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Support reliable HVAC performance in offices, commercial facilities, retail environments, and other business properties through preventive inspection and maintenance services.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                  <span>Scheduled preventive maintenance programs for facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                  <span>Multi-unit commercial coil cleaning and airflow checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1596D2] shrink-0" />
                  <span>Flexible scheduling designed to prevent business disruption</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRequestQuote('Commercial HVAC Service')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#EEF2F6] hover:bg-[#071A59] text-[#071A59] hover:text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors cursor-pointer"
            >
              <span>REQUEST COMMERCIAL HVAC SERVICE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cross-Link back to Cleaning */}
        {onNavigate && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center max-w-2xl mx-auto mb-14 shadow-2xs">
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mb-3">
              Need professional cleaning for your home or business facility as well?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('residential')}
                className="text-xs font-bold text-[#084A9F] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" /> Explore Residential Cleaning
              </button>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={() => onNavigate('commercial')}
                className="text-xs font-bold text-[#084A9F] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5" /> Explore Commercial Cleaning
              </button>
            </div>
          </div>
        )}

        {/* HVAC Call to Action Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#071A59] via-[#084A9F] to-[#1596D2] p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1596D2] bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
              Fast, Reliable Scheduling in Chicago
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-3 font-display">
              NEED HVAC SERVICE?
            </h3>
            <p className="text-sm sm:text-base text-slate-100 mb-8 leading-relaxed">
              Tell us what you're experiencing with your heating or cooling system and we'll discuss the appropriate next step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('HVAC Preventive Maintenance')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-[#071A59] font-bold text-sm px-7 py-3.5 rounded-xl shadow transition-all cursor-pointer"
              >
                <span>REQUEST HVAC SERVICE</span>
                <ArrowRight className="w-4 h-4 text-[#084A9F]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>CALL {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
