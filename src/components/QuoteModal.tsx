import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    streetAddress: '',
    city: 'Chicago',
    state: 'IL',
    zipCode: '',
    serviceNeeded: initialService || 'Residential Standard Cleaning',
    propertyType: 'Apartment',
    squareFootage: '',
    preferredDate: '',
    preferredFrequency: 'One-Time Cleaning',
    preferredContactMethod: 'phone',
    message: '',
    hvacSector: 'Residential',
    hvacSystemType: 'Central AC',
    issueDescription: 'Preventive Maintenance',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: initialService.includes('HVAC')
          ? 'HVAC Services'
          : initialService.includes('Move-In')
          ? 'Move-In / Move-Out Cleaning'
          : initialService,
      }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isHvacSelected =
    formData.serviceNeeded === 'HVAC Services' || formData.serviceNeeded.includes('HVAC');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `BBS-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefNumber(generatedRef);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      companyName: '',
      streetAddress: '',
      city: 'Chicago',
      state: 'IL',
      zipCode: '',
      serviceNeeded: 'Residential Standard Cleaning',
      propertyType: 'Apartment',
      squareFootage: '',
      preferredDate: '',
      preferredFrequency: 'One-Time Cleaning',
      preferredContactMethod: 'phone',
      message: '',
      hvacSector: 'Residential',
      hvacSystemType: 'Central AC',
      issueDescription: 'Preventive Maintenance',
    });
  };

  return (
    <div
      id="quote-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#071A59] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#E5162D] shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1596D2]" />
            <h3 className="font-extrabold text-base sm:text-lg font-display tracking-tight">
              REQUEST A FREE ESTIMATE
            </h3>
          </div>
          <button
            id="quote-modal-close-btn"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#071A59] mb-2 font-display">
                Estimate Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Thank you, <strong>{formData.fullName}</strong>. A BE BLESSED SERVICES coordinator will
                review your request for <strong>{formData.serviceNeeded}</strong> and contact you via{' '}
                {formData.preferredContactMethod}.
              </p>

              <div className="inline-block bg-[#F7F9FC] border border-slate-200 rounded-xl px-5 py-2.5 mb-6">
                <span className="text-xs text-slate-500 block">Confirmation Code</span>
                <span className="text-base font-bold text-[#084A9F] tracking-wider">{refNumber}</span>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  New Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between bg-[#F7F9FC] p-3 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-600">Need immediate answers? Call direct:</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1 font-bold text-[#084A9F] hover:underline"
                >
                  <Phone className="w-3 h-3 text-[#E5162D]" />
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Step 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-[#E5162D]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-[#E5162D]">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(312) 555-0123"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-[#E5162D]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-city" className="block text-xs font-bold text-slate-700 mb-1">
                    City / Neighborhood <span className="text-[#E5162D]">*</span>
                  </label>
                  <input
                    id="modal-city"
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Chicago / Suburb"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  />
                </div>
              </div>

              {/* Service & Property */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-bold text-slate-700 mb-1">
                    Service Needed <span className="text-[#E5162D]">*</span>
                  </label>
                  <select
                    id="modal-service"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  >
                    <option value="Residential Standard Cleaning">Residential Standard Cleaning</option>
                    <option value="Residential Deep Cleaning">Residential Deep Cleaning</option>
                    <option value="Recurring Residential Cleaning">Recurring Residential Cleaning</option>
                    <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                    <option value="Commercial Standard Cleaning">Commercial Standard Cleaning</option>
                    <option value="Commercial Deep Cleaning">Commercial Deep Cleaning</option>
                    <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                    <option value="Post-Renovation Cleaning">Post-Renovation Cleaning</option>
                    <option value="HVAC Services">HVAC Services (Heating, AC &amp; Maintenance)</option>
                    <option value="Other">Other Property Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-property" className="block text-xs font-bold text-slate-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="modal-property"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Condo / High-Rise">Condo / High-Rise</option>
                    <option value="House">House / Single-Family</option>
                    <option value="Townhome">Townhome</option>
                    <option value="Office / Suite">Office / Corporate Suite</option>
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Retail Store">Retail Store / Restaurant</option>
                    <option value="Religious Facility">Religious Facility / School</option>
                    <option value="New Construction">New Construction Turnover</option>
                    <option value="Renovated Property">Renovated Property</option>
                  </select>
                </div>
              </div>

              {/* Conditional HVAC Fields */}
              {isHvacSelected && (
                <div className="bg-[#EEF2F6] p-3.5 rounded-xl border border-[#1596D2]/30 space-y-3">
                  <div className="flex items-center gap-1.5 text-[#071A59] font-bold text-xs">
                    <Wind className="w-3.5 h-3.5 text-[#1596D2]" />
                    <span>HVAC System &amp; Service Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="modal-hvac-sector" className="block text-[11px] font-bold text-slate-700 mb-1">
                        Sector
                      </label>
                      <select
                        id="modal-hvac-sector"
                        name="hvacSector"
                        value={formData.hvacSector || 'Residential'}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="modal-hvac-type" className="block text-[11px] font-bold text-slate-700 mb-1">
                        System Type
                      </label>
                      <select
                        id="modal-hvac-type"
                        name="hvacSystemType"
                        value={formData.hvacSystemType || 'Central AC'}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="Central AC">Central AC</option>
                        <option value="Furnace">Furnace / Heating</option>
                        <option value="Heat Pump">Heat Pump</option>
                        <option value="Rooftop Unit (RTU)">Rooftop Unit (RTU)</option>
                        <option value="Ductless Mini-Split">Ductless Mini-Split</option>
                        <option value="Not Sure">Not Sure / Needs Inspection</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="modal-hvac-issue" className="block text-[11px] font-bold text-slate-700 mb-1">
                        Service Focus
                      </label>
                      <select
                        id="modal-hvac-issue"
                        name="issueDescription"
                        value={formData.issueDescription || 'Preventive Maintenance'}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="Filter Replacement">Filter Replacement</option>
                        <option value="System Diagnostics">System Diagnostics</option>
                        <option value="Coil Cleaning">Coil Cleaning</option>
                        <option value="Preventive Maintenance">Preventive Maintenance</option>
                        <option value="Airflow Issues">Airflow / Temp Issue</option>
                        <option value="Other HVAC Need">Other HVAC Need</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Method & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-sqft" className="block text-xs font-bold text-slate-700 mb-1">
                    Approx. Sq Footage (Optional)
                  </label>
                  <input
                    id="modal-sqft"
                    type="text"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    placeholder="e.g., 1,500 sq ft"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-contact-method" className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    id="modal-contact-method"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                  >
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message (SMS)</option>
                    <option value="email">Email</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-bold text-slate-700 mb-1">
                  Project Notes / Specific Areas
                </label>
                <textarea
                  id="modal-notes"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about timing, key focus areas, system symptoms, or access requirements..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                />
              </div>

              <button
                id="modal-submit-quote-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-[#084A9F] hover:bg-[#071A59] text-white font-extrabold text-sm rounded-xl shadow transition-colors border-b-2 border-[#E5162D] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SUBMITTING REQUEST...</span>
                ) : (
                  <>
                    <span>SUBMIT FREE ESTIMATE REQUEST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

