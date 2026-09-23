import React from 'react';
import {
  Users,
  ShieldCheck,
  FileCheck,
  Clock,
  Briefcase,
  Sparkles,
  HardHat,
  MapPin,
  Quote,
  Building,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Professional W-2 Team',
      desc: 'Cleaners are payroll W-2 employees rather than 1099 independent contractors, providing direct accountability, consistent training, and quality control.',
    },
    {
      icon: ShieldCheck,
      title: 'Vetted & Background-Checked',
      desc: 'All cleaners undergo thorough background screening before entering client homes, commercial facilities, or sensitive job sites.',
    },
    {
      icon: FileCheck,
      title: 'Fully Insured Protection',
      desc: 'Complete peace of mind knowing BE BLESSED SERVICES carries comprehensive commercial liability coverage.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling & 24/7 Commercial',
      desc: 'Schedules designed around client needs, including after-hours, overnight, and weekend commercial cleaning windows.',
    },
    {
      icon: Briefcase,
      title: 'Residential & Commercial Mastery',
      desc: 'Equipped to service private luxury residences, high-traffic retail spaces, corporate offices, and institutions with equal precision.',
    },
    {
      icon: Sparkles,
      title: 'Unrushed Attention to Detail',
      desc: 'A meticulous, checklist-driven approach focused on deep cleanliness rather than superficial rushing.',
    },
    {
      icon: HardHat,
      title: 'Post-Construction Capability',
      desc: 'Specialized industrial HEPA vacuums and multi-pass techniques to clear stubborn construction dust and trade residue.',
    },
    {
      icon: MapPin,
      title: 'Local Chicago Company',
      desc: 'Serving Chicago and surrounding suburbs with genuine care, respectful values, and prompt local communication.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5162D]" />
            The Be Blessed Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            WHY CHOOSE BE BLESSED SERVICES
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#084A9F] font-display">
            Reliable cleaning from a team you can trust.
          </p>
        </div>

        {/* 8 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#084A9F] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#071A59] mb-2 font-display">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Spotlight / Testimonials Architecture */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5162D] block mb-2">
                Verified Client Spotlight
              </span>
              <h3 className="text-xl font-bold text-[#071A59] mb-2 font-display">
                Honored to Serve Our Community
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in earning trust through work on the ground. As we continue expanding our
                verified feedback network, here is a recognized institutional partner we proudly serve.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#071A59] text-white flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-[#1596D2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#084A9F] font-bold uppercase tracking-wider mb-1">
                    <Quote className="w-3.5 h-3.5 text-[#E5162D]" />
                    <span>Commercial Client</span>
                  </div>
                  <h4 className="text-base font-bold text-[#071A59] font-display">
                    Emmanuel Temple – West Chester
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Provided dedicated, scheduled sanitation and facility care with reverence and professionalism.
                  </p>
                </div>
              </div>

              {/* Transparent "Customer reviews coming soon" note strictly respecting user guideline */}
              <div className="bg-[#F7F9FC] border border-slate-200 rounded-xl px-4 py-3 text-center sm:text-right shrink-0">
                <span className="text-xs font-bold text-[#071A59] block">
                  Customer Reviews
                </span>
                <span className="text-[11px] text-slate-500 italic">
                  Customer testimonials coming soon
                </span>
              </div>
            </div>
          </div>

          {/* Insurance & Credential Trust Bar */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#084A9F]/10 flex items-center justify-center text-[#084A9F] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#071A59]">Commercial Liability Insurance Active</p>
                <p className="text-[11px] text-slate-500">Protecting client properties, homes, and corporate facilities.</p>
              </div>
            </div>

            {/* Insurance Canopy Badge */}
            <div className="shrink-0 bg-[#F7F9FC] p-1.5 rounded-xl border border-slate-200 hover:border-[#084A9F] transition-colors">
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
                  className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
