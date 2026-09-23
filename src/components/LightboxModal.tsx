import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, SplitSquareVertical } from 'lucide-react';
import { ProjectImage } from '../types';

interface LightboxModalProps {
  image: ProjectImage | null;
  allImages: ProjectImage[];
  onClose: () => void;
  onSelectImage: (img: ProjectImage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side' | 'single'>('slider');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && image) {
        const idx = allImages.findIndex((i) => i.id === image.id);
        if (idx < allImages.length - 1) onSelectImage(allImages[idx + 1]);
      }
      if (e.key === 'ArrowLeft' && image) {
        const idx = allImages.findIndex((i) => i.id === image.id);
        if (idx > 0) onSelectImage(allImages[idx - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, allImages, onClose, onSelectImage]);

  if (!image) return null;

  const currentIndex = allImages.findIndex((i) => i.id === image.id);
  const hasBefore = Boolean(image.beforeUrl);

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071A59]/90 backdrop-blur-md p-4 sm:p-6"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'lightbox-backdrop') onClose();
      }}
    >
      <div className="relative flex flex-col w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EEF2F6] bg-[#071A59] text-white">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-[#E5162D] text-white">
              Real Project
            </span>
            <h3 className="text-base sm:text-lg font-bold font-display text-white truncate max-w-md sm:max-w-xl">
              {image.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {hasBefore && (
              <div className="hidden sm:flex items-center bg-[#05123D] rounded-lg p-1 border border-white/10 text-xs">
                <button
                  id="view-mode-slider"
                  type="button"
                  onClick={() => setViewMode('slider')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    viewMode === 'slider' ? 'bg-[#084A9F] text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Interactive Slider
                </button>
                <button
                  id="view-mode-side"
                  type="button"
                  onClick={() => setViewMode('side-by-side')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    viewMode === 'side-by-side' ? 'bg-[#084A9F] text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Side by Side
                </button>
              </div>
            )}
            <button
              id="lightbox-close-btn"
              type="button"
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="relative flex-1 bg-neutral-900 overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
          {hasBefore && viewMode === 'slider' && image.beforeUrl ? (
            <div className="relative w-full h-[380px] sm:h-[500px] select-none overflow-hidden flex items-center justify-center">
              {/* After Image (Full background) */}
              <img
                src={image.afterUrl}
                alt={`${image.title} - Completed Move-in Ready`}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#084A9F]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                AFTER: Clean & Move-In Ready
              </div>

              {/* Before Image (Clipped by slider) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={image.beforeUrl}
                  alt={`${image.title} - Construction Dust & Residue`}
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
                <div className="absolute top-4 left-4 bg-[#1D2430]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20 border border-white/20">
                  BEFORE: Construction Residue
                </div>
              </div>

              {/* Divider bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 -ml-3.5 rounded-full bg-[#084A9F] border-2 border-white shadow-xl flex items-center justify-center text-white">
                  <SplitSquareVertical className="w-4 h-4" />
                </div>
              </div>

              {/* Range Input controller */}
              <input
                id="slider-range-control"
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Drag to compare before and after"
              />
            </div>
          ) : hasBefore && viewMode === 'side-by-side' && image.beforeUrl ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full p-3 bg-neutral-950">
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                <div className="absolute top-3 left-3 bg-[#1D2430]/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                  BEFORE: Dust & Residue
                </div>
                <img
                  src={image.beforeUrl}
                  alt="Before Cleaning"
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                <div className="absolute top-3 left-3 bg-[#084A9F]/95 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                  AFTER: BE BLESSED Detailed Clean
                </div>
                <img
                  src={image.afterUrl}
                  alt="After Cleaning"
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <img
                src={image.afterUrl}
                alt={image.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          )}

          {/* Previous / Next buttons */}
          {currentIndex > 0 && (
            <button
              id="lightbox-prev-btn"
              type="button"
              onClick={() => onSelectImage(allImages[currentIndex - 1])}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors z-30"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {currentIndex < allImages.length - 1 && (
            <button
              id="lightbox-next-btn"
              type="button"
              onClick={() => onSelectImage(allImages[currentIndex + 1])}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors z-30"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Modal Caption & Details */}
        <div className="p-6 bg-[#F7F9FC] border-t border-[#EEF2F6]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[#071A59] font-semibold text-base">
                “{image.caption}”
              </p>
              {image.notes && (
                <p className="text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#084A9F] shrink-0" />
                  {image.notes}
                </p>
              )}
            </div>
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">
              Project {currentIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
