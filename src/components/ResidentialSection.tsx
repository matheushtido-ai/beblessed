import React, { useState } from 'react';
import {
  Home,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Calendar,
  PackageCheck,
  Heart,
  Eye,
  Repeat,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { RESIDENTIAL_CHECKLIST } from '../data/companyData';

interface ResidentialSectionProps {
  onRequestQuote: (serviceType?: string) => void;
}

export const ResidentialSection: React.FC<ResidentialSectionProps> = ({ onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'deep' | 'recurring'>('standard');

  const benefitCards = [
    {
      icon: Users,
      title: 'Professional W-2 Team',
      desc: 'Trained, employed directly by us on payroll for true accountability.',
    },
    {
      icon: ShieldCheck,
      title: 'Background-Checked Cleaners',
      desc: 'Every cleaner passes comprehensive vetting before stepping into your home.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      desc: 'Weekly, bi-weekly, monthly, or customized visits tailored to your schedule.',
    },
    {
      icon: PackageCheck,
      title: 'Cleaning Supplies Included',
      desc: 'All professional equipment, microfiber tools, and safe supplies provided.',
    },
    {
      icon: Heart,
      title: 'Pet-Friendly Service',
      desc: 'We adore pets and clean respectfully around your furry family members.',
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      desc: 'Corner-to-corner thoroughness with high dusting, baseboards, and glass care.',
    },
    {
      icon: Repeat,
      title: 'Consistent Cleaning',
      desc: 'We attempt to assign the same cleaner whenever possible for recurring care.',
    },
    {
      icon: Sparkles,
      title: 'Reliable Service',
      desc: 'Punctual, organized, and focused on leaving your sanctuary welcoming.',
    },
  ];

  const propertyTypes = [
    'Apartments',
    'Condos & High-Rises',
    'Townhomes',
    'Single-Family Homes',
  ];

  return (
    <section id="residential-cleaning" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="w-3.5 h-3.5 text-[#084A9F]" />
            Residential Cleaning Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            TRUSTED HOME CLEANING IN CHICAGO
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#084A9F] mb-4 font-display">
            We clean your home as if it were our own.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            At BE BLESSED SERVICES, we understand that your home is your sanctuary. That’s why we
            provide reliable, professional cleaning with the care and respect your space deserves.
            Our team arrives professionally, respects your property, is pet-friendly, and maintains
            uncompromising attention to detail.
          </p>

          {/* Chicago property types badge list */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#071A59] uppercase tracking-wider mr-1">
              Available For:
            </span>
            {propertyTypes.map((pt, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#F7F9FC] border border-slate-200 text-xs font-semibold text-slate-800 rounded-lg"
              >
                {pt}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits Grid: What Makes Be Blessed Different */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#071A59] mb-6 font-display">
            WHAT MAKES BE BLESSED SERVICES DIFFERENT
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-8">
            From cozy apartments to spacious condos and busy family homes, BE BLESSED SERVICES helps
            Chicago homeowners maintain clean, welcoming spaces through consistent quality,
            dependable service, and personalized care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefitCards.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#F7F9FC] border border-[#EEF2F6] hover:border-[#084A9F]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#071A59] mb-1 font-display">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Cleaning Type Tabs (Standard vs Deep vs Recurring) */}
        <div className="bg-[#F7F9FC] rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                id="tab-btn-standard"
                type="button"
                onClick={() => setActiveTab('standard')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'standard'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Standard Home Cleaning
              </button>

              <button
                id="tab-btn-deep"
                type="button"
                onClick={() => setActiveTab('deep')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'deep'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Deep House Cleaning
              </button>

              <button
                id="tab-btn-recurring"
                type="button"
                onClick={() => setActiveTab('recurring')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'recurring'
                    ? 'bg-[#084A9F] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Recurring Cleaning Program
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-4 h-4 text-[#084A9F]" />
              <span>Typical visit: 2–4 hours (varies with size &amp; condition)</span>
            </div>
          </div>

          {/* TAB 1: STANDARD CLEANING */}
          {activeTab === 'standard' && (
            <div>
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl font-bold text-[#071A59] mb-2 font-display">
                  STANDARD HOME CLEANING
                </h3>
                <p className="text-base text-slate-600 mb-3">
                  Cleaning services tailored to your home and lifestyle.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Standard cleaning is ideal for maintaining homes between deep cleaning sessions and
                  for recurring weekly, bi-weekly, or monthly schedules. Cleaning time may vary
                  depending on property size and condition; many homes take approximately 2–4 hours.
                </p>
              </div>

              {/* Room By Room Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Kitchen */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span>Kitchen Cleaning</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {RESIDENTIAL_CHECKLIST.kitchen.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bathrooms */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span>Bathrooms</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {RESIDENTIAL_CHECKLIST.bathrooms.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bedrooms */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span>Bedrooms</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {RESIDENTIAL_CHECKLIST.bedrooms.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Living Areas */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span>Living Areas</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {RESIDENTIAL_CHECKLIST.livingAreas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Throughout the Home */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs md:col-span-2 lg:col-span-2">
                  <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span>Throughout the Home</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {RESIDENTIAL_CHECKLIST.throughoutHome.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  * Note: Cleaning time may vary depending on property size and condition.
                </p>
                <button
                  id="book-standard-cleaning-btn"
                  type="button"
                  onClick={() => onRequestQuote('Residential Standard Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>BOOK STANDARD CLEANING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: DEEP CLEANING */}
          {activeTab === 'deep' && (
            <div>
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl font-bold text-[#071A59] mb-2 font-display">
                  DEEP HOUSE CLEANING
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  “Our deep cleaning service goes beyond standard cleaning to address built-up dust,
                  grease, grime, and areas that require additional attention.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep cleaning includes all Standard Cleaning items plus extensive detail work. Many
                  customers begin with a Deep Cleaning to establish a pristine baseline before
                  moving into recurring Standard Cleaning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#071A59] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E5162D]" />
                    When Deep Cleaning is Recommended
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                      <span>Homes that have not received professional cleaning recently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                      <span>First-time professional cleaning service with BE BLESSED</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                      <span>Seasonal or Spring refresh cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                      <span>Preparing for an ongoing recurring weekly or bi-weekly schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0 mt-0.5" />
                      <span>Properties requiring specialized attention to grease and grime</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#071A59] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#084A9F]" />
                    What Goes Beyond Standard Cleaning
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                      <span>Hand-wiping baseboards and door moldings throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                      <span>Deep degreasing of range hood, stovetop grates, and backsplash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                      <span>Intensive scrubbing of shower tile grout, soap scum, and limescale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                      <span>Detailed cleaning behind and under accessible furniture pieces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5162D] shrink-0 mt-0.5" />
                      <span>Wiping air vent returns, ceiling fans, and door frames</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Ready to give your home a complete reset? We will tailor the scope to your space.
                </p>
                <button
                  id="request-deep-cleaning-btn"
                  type="button"
                  onClick={() => onRequestQuote('Residential Deep Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>REQUEST DEEP CLEANING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: RECURRING CLEANING */}
          {activeTab === 'recurring' && (
            <div>
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl font-bold text-[#071A59] mb-2 font-display">
                  RECURRING RESIDENTIAL CLEANING
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  Keep your home consistently fresh without ever thinking about chores. For recurring
                  clients, BE BLESSED SERVICES attempts to assign the same cleaner whenever possible,
                  giving you peace of mind, reliable familiarity, and consistent excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#084A9F]/10 text-[#084A9F] flex items-center justify-center mx-auto mb-3 font-bold">
                    1W
                  </div>
                  <h4 className="font-bold text-[#071A59] mb-1">Weekly Cleaning</h4>
                  <p className="text-xs text-slate-600">
                    Perfect for busy households, families with kids or multiple pets, and maximum free time.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border-2 border-[#084A9F] text-center relative shadow-sm">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#084A9F] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                    Most Popular
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#084A9F]/10 text-[#084A9F] flex items-center justify-center mx-auto mb-3 font-bold">
                    2W
                  </div>
                  <h4 className="font-bold text-[#071A59] mb-1">Bi-Weekly Cleaning</h4>
                  <p className="text-xs text-slate-600">
                    Our most requested schedule for maintaining continuous cleanliness and order.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#084A9F]/10 text-[#084A9F] flex items-center justify-center mx-auto mb-3 font-bold">
                    1M
                  </div>
                  <h4 className="font-bold text-[#071A59] mb-1">Monthly Cleaning</h4>
                  <p className="text-xs text-slate-600">
                    A thorough monthly maintenance pass to handle heavy tasks and maintain hygiene.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Consistent cleaner assigned whenever possible • Flexible schedule adjustments
                </p>
                <button
                  id="schedule-recurring-cleaning-btn"
                  type="button"
                  onClick={() => onRequestQuote('Recurring Residential Cleaning')}
                  className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
                >
                  <span>SCHEDULE YOUR CLEANING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
