import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { CHICAGO_NEIGHBORHOODS, COMPANY_INFO } from '../data/companyData';

interface ServiceAreaSectionProps {
  onRequestQuote: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onRequestQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNeighborhoods = CHICAGO_NEIGHBORHOODS.filter((n) =>
    n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#E5162D]" />
              Local Chicago Presence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
              CHICAGO &amp; SURROUNDING SUBURBS
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#084A9F] mb-4 font-display">
              Serving with Purpose across the Greater Chicagoland Area.
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              BE BLESSED SERVICES proudly provides residential cleaning, commercial cleaning,
              post-construction cleaning, move-in/move-out turnovers, and HVAC services throughout the
              City of Chicago and its vibrant surrounding suburbs in Cook, DuPage, and Lake Counties.
            </p>

            {/* Quick search input */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="service-area-search"
                  type="text"
                  placeholder="Check your neighborhood or suburb..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#084A9F] shadow-2xs"
                />
              </div>
            </div>

            {/* Neighborhood Pill Grid */}
            <div className="flex flex-wrap gap-2 mb-8 max-h-56 overflow-y-auto pr-2">
              {filteredNeighborhoods.map((area, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs hover:border-[#084A9F] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F]" />
                  <span>{area.name}</span>
                  <span className="text-[10px] text-slate-400">({area.type})</span>
                </div>
              ))}
              {filteredNeighborhoods.length === 0 && (
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                  We frequently serve custom locations across the Chicagoland area! Call us at (847) 436-2288 to confirm.
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="service-area-quote-btn"
                type="button"
                onClick={onRequestQuote}
                className="bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
              >
                REQUEST SERVICE IN YOUR AREA
              </button>

              <a
                id="service-area-phone"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#071A59] hover:text-[#084A9F]"
              >
                <Phone className="w-4 h-4 text-[#E5162D]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Chicago Map / Coverage Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#084A9F]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#071A59] text-white flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-[#1596D2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#071A59] text-base font-display">
                    Full Chicagoland Coverage
                  </h3>
                  <p className="text-xs text-slate-500">
                    City Center, North Shore, West Suburbs, South Suburbs
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 mb-6">
                <div className="p-3 bg-[#F7F9FC] rounded-lg border border-slate-100 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A59] block">Residential Dispatches:</strong>
                    Directly to your apartment, high-rise condo, townhome, or suburban house.
                  </div>
                </div>

                <div className="p-3 bg-[#F7F9FC] rounded-lg border border-slate-100 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A59] block">24/7 Commercial Crews:</strong>
                    Scheduled off-peak, overnight, and weekends for zero operational disruption.
                  </div>
                </div>

                <div className="p-3 bg-[#F7F9FC] rounded-lg border border-slate-100 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A59] block">Post-Construction Teams:</strong>
                    Flexible staging for contractors, punch lists, and move-in deadlines.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-500 font-medium">
                  Don’t see your specific suburb listed? Contact us directly — we service clients throughout the metropolitan area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
