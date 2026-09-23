import React, { useState } from 'react';
import {
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PlusCircle,
  Building,
} from 'lucide-react';
import { COMMERCIAL_INDUSTRIES } from '../data/companyData';

interface CommercialSectionProps {
  onRequestQuote: (serviceType?: string) => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'deep' | 'custom'>('standard');

  const standardChecklist = [
    {
      title: 'Cleaning of Common Area Surfaces',
      desc: 'Desks, countertops, waiting areas, chairs, shelves, conference tables, and shared office equipment.',
    },
    {
      title: 'Bathroom Sanitization',
      desc: 'Cleaning and sanitization of sinks, toilets, fixtures, and high-touch restroom contact surfaces.',
    },
    {
      title: 'Floor Cleaning',
      desc: 'Vacuuming and mopping of reception areas, lobbies, hallways, executive suites, and work areas.',
    },
    {
      title: 'Dusting',
      desc: 'Removal of dust from fixtures, office equipment, displays, ledges, and accessible air vents.',
    },
    {
      title: 'Trash Removal',
      desc: 'Collection and disposal of office waste, general trash, and fresh receptacle liner installation.',
    },
  ];

  const deepChecklist = [
    {
      title: 'Deep Cleaning of Common Areas',
      desc: 'Detailed scrubbing of walls, baseboards, break room surfaces, countertops, exterior cabinets, and shared office equipment.',
    },
    {
      title: 'Bathroom Deep Cleaning',
      desc: 'Intensive attention to tile walls, partition stalls, sinks, mirrors, chrome fixtures, and high-frequency touch points.',
    },
    {
      title: 'Detailed Dusting & Floor Cleaning',
      desc: 'Thorough vacuuming and multi-pass mopping, including appropriate less-accessible areas, edges, and corners.',
    },
    {
      title: 'Waste & Recycling Management',
      desc: 'Removal of business-related general waste, packaging materials, and recyclables where applicable.',
    },
  ];

  const optionalAddOns = [
    'Interior Cabinet Drawers & Shelving',
    'Full Kitchenette Deep Care & Degreasing',
    'Storage & Supply Closets',
    'Interior Refrigerator & Microwave Appliances',
    'Interior Window & Partition Glass Polishing',
  ];

  return (
    <section id="commercial-cleaning" className="py-16 sm:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#084A9F]" />
            Corporate &amp; Commercial Janitorial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            PROFESSIONAL COMMERCIAL CLEANING IN CHICAGO
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            BE BLESSED SERVICES provides 24/7 commercial cleaning services for businesses and
            professional facilities throughout Chicago and surrounding suburbs. We maintain
            environments that need to remain pristine, organized, sanitary, and impressive to your
            clients and workforce.
          </p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#071A59]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <Clock className="w-4 h-4 text-[#E5162D]" />
              <span>Available 24/7 (Day, Evening &amp; Overnight)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#084A9F]" />
              <span>Fully Insured • W-2 Vetted Cleaners</span>
            </div>
          </div>
        </div>

        {/* Commercial Service Scope Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                id="comm-tab-standard"
                type="button"
                onClick={() => setActiveTab('standard')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'standard'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-[#F7F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Standard Commercial Cleaning
              </button>

              <button
                id="comm-tab-deep"
                type="button"
                onClick={() => setActiveTab('deep')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'deep'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-[#F7F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Detailed Commercial Deep Cleaning
              </button>

              <button
                id="comm-tab-custom"
                type="button"
                onClick={() => setActiveTab('custom')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'custom'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-[#F7F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Customized Janitorial Plans
              </button>
            </div>

            <span className="text-xs text-slate-500 font-semibold">
              Daily • Multi-Day • Weekly Schedules
            </span>
          </div>

          {/* TAB 1: STANDARD COMMERCIAL */}
          {activeTab === 'standard' && (
            <div>
              <div className="max-w-2xl mb-6">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  STANDARD COMMERCIAL CLEANING CHECKLIST
                </h3>
                <p className="text-sm text-slate-600">
                  Reliable daily or recurring janitorial maintenance to preserve a professional,
                  healthy business environment for staff and visitors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {standardChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F7F9FC] border border-[#EEF2F6] hover:border-[#084A9F]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                      <h4 className="text-sm font-bold text-[#071A59] font-display">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Customized checklists and service frequency to match your corporate hours.
                </p>
                <button
                  id="request-comm-standard-btn"
                  type="button"
                  onClick={() => onRequestQuote('Commercial Standard Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>REQUEST STANDARD COMMERCIAL CLEANING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: DEEP COMMERCIAL */}
          {activeTab === 'deep' && (
            <div>
              <div className="max-w-2xl mb-6">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  DETAILED COMMERCIAL DEEP CLEANING
                </h3>
                <p className="text-sm text-slate-600">
                  Comprehensive overhaul of high-contact fixtures, restrooms, breakrooms, and less-accessible
                  areas requiring heavy-duty sanitization and renewal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {deepChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F7F9FC] border border-[#EEF2F6] hover:border-[#084A9F]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#E5162D] shrink-0" />
                      <h4 className="text-sm font-bold text-[#071A59] font-display">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Optional Add-Ons Section */}
              <div className="p-5 rounded-xl bg-white border border-[#EEF2F6] shadow-2xs mb-8">
                <h4 className="text-xs font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-[#084A9F]" />
                  Optional Add-Ons (Available upon request based on property requirements):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {optionalAddOns.map((addon, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] shrink-0" />
                      <span>{addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Additional services available upon request and tailored to your property.
                </p>
                <button
                  id="request-comm-deep-btn"
                  type="button"
                  onClick={() => onRequestQuote('Commercial Deep Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>REQUEST COMMERCIAL DEEP CLEANING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOM JANITORIAL */}
          {activeTab === 'custom' && (
            <div>
              <div className="max-w-2xl mb-6">
                <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                  CUSTOMIZED JANITORIAL ARRANGEMENTS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Every Chicago business is unique. We partner directly with property managers,
                  facility directors, and office coordinators to design a tailored scope of work,
                  cleaning schedule, and communication protocol.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <h4 className="font-bold text-[#071A59] text-sm mb-1">Tailored Timetables</h4>
                  <p className="text-xs text-slate-600">
                    Early morning before staff arrives, during operating hours, or 24/7 overnight shifts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <h4 className="font-bold text-[#071A59] text-sm mb-1">Facility-Specific Care</h4>
                  <p className="text-xs text-slate-600">
                    Custom attention tailored to fitness mats, retail fixtures, or reception suites.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <h4 className="font-bold text-[#071A59] text-sm mb-1">Direct Communication</h4>
                  <p className="text-xs text-slate-600">
                    Dedicated account contact and transparent supervisor check-ins for high standards.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Let us walk through your facility and provide a comprehensive proposal.
                </p>
                <button
                  id="request-comm-custom-btn"
                  type="button"
                  onClick={() => onRequestQuote('Commercial Standard Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>BUILD A CUSTOM CLEANING PLAN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Commercial Industries We Serve */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A59] mb-3 font-display">
              CUSTOMIZED CLEANING FOR YOUR BUSINESS
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              We serve diverse commercial operations across Chicago with trained staff and facility-specific protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMMERCIAL_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#084A9F] shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
              >
                <div className="h-36 overflow-hidden bg-slate-100 relative">
                  <img
                    src={ind.imageUrl}
                    alt={`${ind.name} cleaning service in Chicago`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A59]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white text-xs font-bold font-display drop-shadow">
                    {ind.name}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {ind.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onRequestQuote(`Commercial - ${ind.name}`)}
                    className="text-[11px] font-bold text-[#084A9F] hover:text-[#071A59] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Request Plan</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Client Section: Emmanuel Temple – West Chester */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#084A9F] block mb-1">
                A FEW OF OUR VALUED CLIENTS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071A59] mb-2 font-display">
                Trusted by Chicagoland Communities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We have the honor of serving respected institutions, corporate spaces, and local establishments throughout the Chicago metropolitan area.
              </p>
            </div>

            {/* Confirmed client badge */}
            <div className="flex items-center gap-3 bg-[#F7F9FC] border border-slate-200 rounded-xl px-5 py-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#071A59] block font-display">
                  Emmanuel Temple
                </span>
                <span className="text-[11px] text-slate-500">West Chester, IL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
