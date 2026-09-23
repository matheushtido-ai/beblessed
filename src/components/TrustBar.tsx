import React from 'react';
import { Calendar, Users, ShieldCheck, FileCheck, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Calendar,
      title: 'Serving Chicago Since 2023',
      subtitle: 'Dedicated local presence',
    },
    {
      icon: Users,
      title: 'W-2 Cleaning Professionals',
      subtitle: 'Accountable payroll employees',
    },
    {
      icon: ShieldCheck,
      title: 'Background-Checked Team',
      subtitle: 'Screened & trusted staff',
    },
    {
      icon: FileCheck,
      title: 'Fully Insured',
      subtitle: 'Comprehensive liability coverage',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      subtitle: 'Residential & 24/7 commercial',
    },
  ];

  return (
    <section
      id="trust-bar"
      aria-label="Trust and Credibility"
      className="bg-[#071A59] border-y-2 border-[#E5162D] text-white py-6 sm:py-8 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#1596D2] group-hover:bg-[#084A9F] group-hover:text-white transition-colors shrink-0 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug tracking-tight font-display">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 truncate font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
