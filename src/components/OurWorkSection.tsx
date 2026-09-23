import React from 'react';
import { Camera, Sparkles, Maximize2, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHOWCASE_A_IMAGES, SHOWCASE_B_IMAGES } from '../data/companyData';
import { ProjectImage } from '../types';

interface OurWorkSectionProps {
  onOpenLightbox: (img: ProjectImage) => void;
  onRequestQuote: () => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  onOpenLightbox,
  onRequestQuote,
}) => {
  return (
    <section id="our-work-section" className="py-16 sm:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E5162D]" />
            Real Chicago Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            OUR WORK &amp; PROJECT RESULTS
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real post-renovation and post-construction cleaning projects completed across Chicago.
            Click any project photo to inspect high-resolution details and before-and-after results.
          </p>
        </div>

        {/* Project Showcase A */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#E5162D] uppercase tracking-wider">
                Showcase A • Post-Renovation Transformation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071A59] font-display">
                Post-Renovation Apartment Transformed and Ready for Use
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#EEF2F6] text-[#071A59]">
              2 Detailed Angles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWCASE_A_IMAGES.map((img) => (
              <div
                key={img.id}
                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer"
                onClick={() => onOpenLightbox(img)}
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={img.afterUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A59]/85 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm sm:text-base font-bold font-display">{img.title}</p>
                    <p className="text-xs text-slate-200 italic mt-0.5">“{img.caption}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Showcase B */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#084A9F] uppercase tracking-wider">
                Showcase B • Detailed Post-Construction Results
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071A59] font-display">
                Debris Removal, Surface Detailing &amp; Move-In Ready Handover
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#EEF2F6] text-[#071A59]">
              3 Project Stages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHOWCASE_B_IMAGES.map((img) => (
              <div
                key={img.id}
                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer flex flex-col"
                onClick={() => onOpenLightbox(img)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={img.afterUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#071A59] mb-1 font-display">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-600 italic">“{img.caption}”</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-bold text-[#084A9F] flex items-center justify-between">
                    <span>Inspect Full Res</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-8 rounded-2xl bg-[#071A59] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-bold font-display mb-1">
              Have an upcoming construction or renovation project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We work with general contractors, homeowners, and developers across Chicago.
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#1596D2] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D] shrink-0"
          >
            <span>REQUEST JOB-SITE ESTIMATE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
