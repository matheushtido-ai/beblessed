import React from 'react';
import { FileText, MessageSquare, Calculator, CalendarCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onRequestQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      num: '01',
      icon: FileText,
      title: 'Tell Us About Your Property',
      desc: 'Share details about your home, business, or post-construction site using our quick online form or by calling (847) 436-2288.',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Discuss Your Cleaning Needs',
      desc: 'We review your square footage, specific layout, preferred frequency, and any custom checklists or access requirements.',
    },
    {
      num: '03',
      icon: Calculator,
      title: 'Receive Your Custom Quote',
      desc: 'Get a transparent, honest, and competitive quote with zero hidden fees, tailored precisely to your property.',
    },
    {
      num: '04',
      icon: CalendarCheck,
      title: 'Schedule Your Service',
      desc: 'Pick your preferred date and time. Our vetted, W-2 cleaning professionals arrive on schedule ready to deliver flawless results.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#084A9F] block mb-2">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            HOW IT WORKS
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Getting your space professionally cleaned is seamless, transparent, and hassle-free.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#F7F9FC] rounded-2xl p-6 border border-slate-200 hover:border-[#084A9F] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#084A9F]/20 group-hover:text-[#084A9F]/40 transition-colors font-display">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center text-[#084A9F]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#071A59] mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-1 text-[11px] font-bold text-[#084A9F]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA */}
        <div className="text-center">
          <button
            id="how-it-works-quote-btn"
            type="button"
            onClick={onRequestQuote}
            className="inline-flex items-center gap-3 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-colors cursor-pointer border-b-2 border-[#E5162D]"
          >
            <span>GET STARTED WITH A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
