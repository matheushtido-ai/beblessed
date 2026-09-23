import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

interface FaqSectionProps {
  onRequestQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRequestQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [category, setCategory] = useState<string>('all');

  const filteredFaqs = category === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === category);

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E5162D]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-base text-slate-600">
            Clear, honest answers about our standards, staff vetting, supplies, and scheduling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'post-construction', label: 'Post-Construction' },
          ].map((cat) => (
            <button
              key={cat.id}
              id={`faq-filter-${cat.id}`}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                category === cat.id
                  ? 'bg-[#084A9F] text-white shadow-sm'
                  : 'bg-[#F7F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-[#F7F9FC] transition-colors"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#071A59] hover:text-[#084A9F] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#084A9F] text-white border-transparent' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-[#071A59] font-display">
              Have a specific question about your property?
            </h3>
            <p className="text-xs text-slate-500">
              Our Chicago service directors are available to discuss tailored arrangements.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="faq-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-[#071A59] border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold hover:border-[#084A9F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5162D]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              id="faq-quote-btn"
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-[#084A9F] hover:bg-[#071A59] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
