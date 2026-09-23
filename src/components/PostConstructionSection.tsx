import React, { useState } from 'react';
import {
  HardHat,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Layers,
  Upload,
  RefreshCw,
  Check,
} from 'lucide-react';
import {
  POST_CONSTRUCTION_CHECKLIST,
  SHOWCASE_A_IMAGES,
  SHOWCASE_B_IMAGES,
} from '../data/companyData';
import { ProjectImage } from '../types';

interface PostConstructionSectionProps {
  onOpenLightbox: (img: ProjectImage) => void;
  onRequestQuote: (serviceType?: string) => void;
}

export const PostConstructionSection: React.FC<PostConstructionSectionProps> = ({
  onOpenLightbox,
  onRequestQuote,
}) => {
  const [showcaseA, setShowcaseA] = useState<ProjectImage[]>(SHOWCASE_A_IMAGES);
  const [showcaseB, setShowcaseB] = useState<ProjectImage[]>(SHOWCASE_B_IMAGES);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [customNotice, setCustomNotice] = useState<string | null>(null);

  const targetAudiences = [
    'General Contractors & Builders',
    'Renovation & Remodeling Companies',
    'Commercial Property Managers',
    'Homeowners Completing Remodels',
    'Real Estate Developers & Investors',
    'Architects & Interior Designers',
  ];

  // Helper for uploading user's own local files if they want to load their exact local files!
  const handleLocalImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    targetList: 'A' | 'B',
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        const url = loadEvt.target?.result as string;
        if (targetList === 'A') {
          const updated = [...showcaseA];
          updated[index] = { ...updated[index], afterUrl: url };
          setShowcaseA(updated);
        } else {
          const updated = [...showcaseB];
          updated[index] = { ...updated[index], afterUrl: url };
          setShowcaseB(updated);
        }
        setCustomNotice(`Updated image #${index + 1} with your uploaded file.`);
        setTimeout(() => setCustomNotice(null), 4000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetShowcase = () => {
    setShowcaseA(SHOWCASE_A_IMAGES);
    setShowcaseB(SHOWCASE_B_IMAGES);
    setCustomNotice('Reset project photos to high-definition defaults.');
    setTimeout(() => setCustomNotice(null), 3000);
  };

  return (
    <section id="post-construction-cleaning" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <HardHat className="w-3.5 h-3.5 text-[#E5162D]" />
            Post-Construction &amp; Renovation Turnover
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            POST-CONSTRUCTION CLEANING IN CHICAGO
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#084A9F] mb-4 font-display">
            From Construction Dust to Move-In Ready
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Construction and remodeling projects create fine airborne dust, plaster residue, adhesive
            tape markings, and surfaces that require heavy-duty detailing. BE BLESSED SERVICES
            provides thorough post-construction cleaning to make newly built or renovated spaces
            completely clean, safe, and ready for occupancy.
          </p>

          {/* Target Audience Badges */}
          <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F6]">
            <p className="text-xs font-bold text-[#071A59] uppercase tracking-wider mb-2.5">
              Serving Chicago Contractors, Property Managers &amp; Homeowners:
            </p>
            <div className="flex flex-wrap gap-2">
              {targetAudiences.map((aud, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-slate-200 text-xs font-medium text-slate-700 rounded-lg shadow-2xs"
                >
                  {aud}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT SHOWCASE A: POST-RENOVATION TRANSFORMATION (2 Images) */}
        {/* ========================================================================= */}
        <div id="post-construction-showcase" className="mb-20 bg-[#F7F9FC] rounded-2xl border-2 border-[#084A9F]/30 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5162D] animate-ping" />
                <span className="text-xs font-bold text-[#084A9F] uppercase tracking-wider">
                  Featured Project Showcase A
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A59] font-display">
                POST-RENOVATION TRANSFORMATION
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1 italic">
                “Post-renovation apartment transformed and ready for use.”
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCustomizerOpen(!customizerOpen)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Manage image assets"
              >
                <Upload className="w-3.5 h-3.5 text-[#084A9F]" />
                <span>Upload Local Photos</span>
              </button>
            </div>
          </div>

          {/* Optional Local Photo Replacement Bar */}
          {customizerOpen && (
            <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200 text-xs">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-[#071A59]">
                  Replace photos with your uploaded project files (stored in your browser session):
                </p>
                <button
                  type="button"
                  onClick={handleResetShowcase}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Default Photos</span>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {showcaseA.map((item, idx) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <label className="font-medium text-slate-600">Image {idx + 1}:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLocalImageUpload(e, 'A', idx)}
                      className="text-xs file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-[#084A9F] file:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {customNotice && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{customNotice}</span>
            </div>
          )}

          {/* 2-Image Grid (Side by side on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseA.map((img, idx) => (
              <div
                key={img.id}
                className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(img)}
              >
                <div className="relative h-72 sm:h-96 overflow-hidden bg-slate-900">
                  <img
                    src={img.afterUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A59]/80 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#084A9F] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                      Image {idx + 1} of 2
                    </span>
                    {img.beforeUrl && (
                      <span className="bg-white/90 text-[#071A59] text-[11px] font-bold px-2 py-1 rounded-md shadow flex items-center gap-1">
                        <Layers className="w-3 h-3 text-[#E5162D]" />
                        Before / After Available
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-base sm:text-lg font-bold font-display text-white mb-1 drop-shadow">
                      {img.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 italic drop-shadow">
                      “{img.caption}”
                    </p>
                    {img.notes && (
                      <p className="text-xs text-[#1596D2] font-semibold mt-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        {img.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100 text-xs font-bold text-[#084A9F]">
                  <span>Click to Inspect in High-Resolution Lightbox</span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT SHOWCASE B: DETAILED POST-CONSTRUCTION RESULTS (3 Images) */}
        {/* ========================================================================= */}
        <div className="mb-20 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="border-b border-slate-200 pb-5 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#084A9F]" />
              <span className="text-xs font-bold text-[#084A9F] uppercase tracking-wider">
                Featured Project Showcase B
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A59] font-display">
              DETAILED POST-CONSTRUCTION RESULTS
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Three critical stages of post-construction turnover executed with precision.
            </p>
          </div>

          {/* 3-Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseB.map((img, idx) => (
              <div
                key={img.id}
                className="group relative bg-[#F7F9FC] rounded-xl border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
                onClick={() => onOpenLightbox(img)}
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={img.afterUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3 bg-[#071A59] text-white text-xs font-bold px-2 py-0.5 rounded">
                    Photo {idx + 1}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/20 text-white p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#071A59] mb-2 font-display">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      “{img.caption}”
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-[#084A9F]">
                    <span>View Full Size</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* POST-CONSTRUCTION DETAILED CHECKLIST: 5 CATEGORIES */}
        {/* ========================================================================= */}
        <div className="bg-[#F7F9FC] rounded-2xl border border-slate-200 p-6 sm:p-10 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A59] mb-3 font-display">
              OUR 5-STAGE POST-CONSTRUCTION CLEANING CHECKLIST
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              We eliminate fine drywall dust, tape adhesive, and trade residues so properties can transition smoothly to inspection, leasing, or move-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* 1. General Cleaning */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-5 h-5 rounded-full bg-[#084A9F] text-white text-[10px] flex items-center justify-center font-bold">1</span>
                <span>General Cleaning</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {POST_CONSTRUCTION_CHECKLIST.general.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Kitchen & Bathroom Cleaning */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-5 h-5 rounded-full bg-[#084A9F] text-white text-[10px] flex items-center justify-center font-bold">2</span>
                <span>Kitchen &amp; Bathroom Detailing</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {POST_CONSTRUCTION_CHECKLIST.kitchenAndBath.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Glass & Surfaces */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-5 h-5 rounded-full bg-[#084A9F] text-white text-[10px] flex items-center justify-center font-bold">3</span>
                <span>Glass &amp; Surfaces</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {POST_CONSTRUCTION_CHECKLIST.glassAndSurfaces.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Detail Work */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-5 h-5 rounded-full bg-[#084A9F] text-white text-[10px] flex items-center justify-center font-bold">4</span>
                <span>Architectural Detail Work</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {POST_CONSTRUCTION_CHECKLIST.detailWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#084A9F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Final Touches */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs md:col-span-2 lg:col-span-2">
              <h4 className="text-sm font-bold text-[#084A9F] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-5 h-5 rounded-full bg-[#E5162D] text-white text-[10px] flex items-center justify-center font-bold">5</span>
                <span>Final Touches &amp; Quality Inspection</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {POST_CONSTRUCTION_CHECKLIST.finalTouches.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5162D] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Contractor and multi-phase turnaround schedules available.
            </p>
            <div className="flex gap-3">
              <button
                id="post-construction-schedule-btn"
                type="button"
                onClick={() => onRequestQuote('Post-Construction Cleaning')}
                className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors cursor-pointer border-b-2 border-[#E5162D]"
              >
                <span>SCHEDULE POST-CONSTRUCTION CLEANING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
