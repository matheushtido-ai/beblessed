import React, { useState } from 'react';
import {
  Truck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Home,
  Building2,
  Check,
  ShieldAlert,
  Info,
  Layers,
  HardHat,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavSection } from '../types';

interface MoveInOutSectionProps {
  onNavigate?: (section: NavSection) => void;
  onRequestQuote: (serviceType?: string) => void;
}

export const MoveInOutSection: React.FC<MoveInOutSectionProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'kitchen' | 'bathrooms' | 'living' | 'details' | 'final'>('all');

  const propertyTypes = [
    { title: 'Residential Homes & Condos', desc: 'Single-family houses, high-rise condos, townhomes & multi-unit properties.' },
    { title: 'Apartments & Studios', desc: 'Thorough turnover cleaning for tenants, lease endings & move-in inspections.' },
    { title: 'Offices & Corporate Suites', desc: 'Clean handovers for relocating corporate tenants, executive suites & shared workspaces.' },
    { title: 'Rental Property Turnovers', desc: 'Quick, reliable turnover solutions for landlords, Airbnb hosts & property managers.' },
    { title: 'Realtor Showcases', desc: 'Pristine prep for closing days, listing photos, and fresh occupant walk-throughs.' },
  ];

  const checklistCategories = [
    {
      id: 'kitchen',
      title: 'Kitchen Detailing',
      items: [
        'Detailed countertop cleaning & sanitization',
        'Deep sink scrub & chrome faucet polishing',
        'Inside and outside cabinet & drawer cleaning',
        'Exterior appliance cleaning (fridge, dishwasher, hood)',
        'Stove top degreasing & surface wipe-down',
        'Oven exterior & interior deep clean (upon request)',
        'Microwave interior & exterior turntable sanitization',
        'Floor sweeping, scrubbing & mopping',
        'Baseboard wipe-down & edge detailing',
        'Refrigerator interior cleaning available as an optional add-on service',
      ],
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms Disinfection',
      items: [
        'Full toilet sanitization (bowl, tank, base & hinge points)',
        'Sink, vanity counter & splashback cleaning',
        'Shower wall scrubbing, grout detailing & door polishing',
        'Bathtub scrub & residue elimination',
        'Mirror streak-free glass polishing',
        'Tile scrubbing & disinfectant wash',
        'Floor washing & sanitary finishing',
        'Baseboards, towel racks & ventilation trim wipe-down',
        'Medicine cabinet interior & exterior cleaning',
      ],
    },
    {
      id: 'living',
      title: 'Bedrooms & Living Areas',
      items: [
        'Complete floor vacuuming and damp mopping',
        'Full baseboard wiping and perimeter dusting',
        'Interior door, trim and doorframe cleaning',
        'Interior window glass and window sill cleaning',
        'Closet shelves, rods and organizers wiped down',
        'Built-in shelving, mantelpiece and nook dusting',
        'Ceiling fan and overhead lighting fixture dusting',
        'Surface dust extraction from accessible corners',
      ],
    },
    {
      id: 'details',
      title: 'Hallways & Extra Details',
      items: [
        'Cobweb elimination from high ceilings and corners',
        'Interior glass, entryway sidelights & glass sliders',
        'Switch plates, outlets and thermostat wipe-downs',
        'High-touch doorknobs and handrail disinfection',
        'Utility closet shelving and laundry room exterior wipe-down',
        'Hard-to-reach surfaces dusted where safely accessible',
        'Detailed edge-to-edge dust removal throughout premises',
      ],
    },
    {
      id: 'final',
      title: 'Final Touches & Walkthrough',
      items: [
        'Multi-pass HEPA carpet vacuuming',
        'Hard surface floor washing and finishing',
        'High-touch surface sanitization protocols',
        'Quality assurance inspection of every room',
        'Preparation of the property for move-in inspection or lease deposit return',
        'Turnkey handover condition for new occupants',
      ],
    },
  ];

  const filteredCategories = activeCategory === 'all'
    ? checklistCategories
    : checklistCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="move-in-out-cleaning" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] border border-[#084A9F]/20 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-[#084A9F]" />
            Move-In &amp; Move-Out Service
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            MOVE-IN &amp; MOVE-OUT CLEANING IN CHICAGO
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#1596D2] font-display mb-4">
            A Fresh Start for Your Next Space
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Moving to a new home or office is an important moment, but it can also be stressful.
            BE BLESSED SERVICES provides detailed Move-In and Move-Out Cleaning designed to prepare
            properties for a fresh start.
          </p>
        </div>

        {/* Narrative & Property Versatility */}
        <div className="bg-[#F7F9FC] rounded-2xl border border-slate-200 p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5162D] block mb-2">
                Residential &amp; Commercial Turnovers
              </span>
              <h3 className="text-2xl font-bold text-[#071A59] mb-4 font-display">
                Ready for Use, Inspection, or Deposit Return
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Whether you are moving into a new property, leaving your current space, preparing a rental,
                turning over an office, or getting a property ready for its next occupant, our team focuses
                on the details needed to leave the space clean, organized, and ready for use.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our goal is to provide a clean, refreshed, and ready-to-use space so you can focus on your
                move instead of the cleaning details. Services are performed by trained W-2 professionals
                using quality cleaning products and a detail-focused approach.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#071A59] mb-4 flex items-center gap-2">
                <Home className="w-4 h-4 text-[#084A9F]" />
                Available Across All Property Types:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {propertyTypes.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#071A59]">{pt.title}:</strong>{' '}
                      <span className="text-slate-600">{pt.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What's Included Filter & Checklist */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#071A59] font-display">
                What’s Included in Move-In / Move-Out Cleaning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Detailed scope covering every major room, cabinet interior, appliance, and trim surface.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'All Rooms' },
                { id: 'kitchen', label: 'Kitchen' },
                { id: 'bathrooms', label: 'Bathrooms' },
                { id: 'living', label: 'Bedrooms & Living' },
                { id: 'details', label: 'Extra Details' },
                { id: 'final', label: 'Final Touches' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#084A9F] text-white shadow-xs'
                      : 'bg-[#EEF2F6] text-[#071A59] hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Checklist Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#F7F9FC] rounded-xl p-6 border border-slate-200 flex flex-col justify-between hover:border-[#084A9F] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F]">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-base text-[#071A59] font-display">
                      {cat.title}
                    </h4>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 mb-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {cat.id === 'kitchen' && (
                  <div className="mt-2 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                    * Appliance interior cleaning (such as inside the refrigerator or inside the oven) is scoped based on client request.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who Is This Service For & Professional Scope Disclaimer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Who is it for */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#071A59] mb-4 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E5162D]" />
              Who Is This Service For?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Homeowners buying or selling</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Renters seeking deposit return</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Apartment &amp; condo tenants</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Landlords &amp; property managers</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Realtors preparing listings</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Offices &amp; businesses relocating</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Rental property turnovers</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-[#084A9F] shrink-0" />
                <span>Newly purchased properties</span>
              </div>
            </div>
          </div>

          {/* Realistic Service Disclaimer */}
          <div className="lg:col-span-5 bg-[#F7F9FC] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#071A59] font-bold text-sm mb-3">
                <Info className="w-4 h-4 text-[#084A9F]" />
                <span>Professional Scope Transparency</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Our service is focused on deep, rigorous, professional cleaning for turnover readiness.
                While our team uses commercial-grade techniques and supplies, we maintain honest standards:
                normal cleaning cannot guarantee the complete elimination of permanent pre-existing stains,
                underlying subfloor damage, permanent paint drips, or aged materials that cannot safely
                be removed without surface damage.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                We work diligently to restore surfaces to their highest possible hygienic cleanliness.
              </p>
            </div>

            {/* Internal link to Post-Construction */}
            {onNavigate && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-700 font-semibold mb-2">
                  Recently completed a construction or remodel project?
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('post-construction')}
                  className="text-xs font-bold text-[#084A9F] hover:text-[#071A59] inline-flex items-center gap-1.5 cursor-pointer underline"
                >
                  <HardHat className="w-3.5 h-3.5 text-[#E5162D]" />
                  <span>Learn about our Post-Construction Cleaning service</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Strong Move-In / Move-Out CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#071A59] via-[#084A9F] to-[#071A59] p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1596D2] block mb-2">
              Ready for a Seamless Move?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-3 font-display">
              MOVING SOON?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mb-8 leading-relaxed">
              Let BE BLESSED SERVICES handle the cleaning so your property is ready for its next chapter.
              Book your turnover cleaning or request a free estimate today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('Move-In / Move-Out Cleaning')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-[#071A59] font-bold text-sm px-7 py-3.5 rounded-xl shadow transition-all cursor-pointer"
              >
                <span>REQUEST MOVE-IN / MOVE-OUT CLEANING</span>
                <ArrowRight className="w-4 h-4 text-[#084A9F]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#1596D2]" />
                <span>CALL {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
