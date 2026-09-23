import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileStickyBarProps {
  onRequestQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onRequestQuote }) => {
  return (
    <div
      id="mobile-persistent-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#EEF2F6] p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-[#071A59] text-white active:scale-95 transition-transform shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#E5162D]" />
          <span>CALL NOW</span>
        </a>

        <button
          id="mobile-sticky-quote-btn"
          type="button"
          onClick={onRequestQuote}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-[#084A9F] hover:bg-[#071A59] text-white active:scale-95 transition-transform shadow-sm border-b-2 border-[#E5162D] cursor-pointer"
        >
          <FileText className="w-4 h-4 text-white" />
          <span>FREE QUOTE</span>
        </button>
      </div>
    </div>
  );
};
