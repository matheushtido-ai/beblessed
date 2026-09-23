import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService = '' }) => {
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission with instant reference code
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `BBS-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefNumber(generatedRef);
      setSubmitted(true);
    }, 700);
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
    });
  };

  return (
    <section id="quote-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Brand Assurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2F6] text-[#084A9F] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#E5162D]" />
                Free Estimate Request
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A59] tracking-tight mb-3 font-display">
                REQUEST A FREE QUOTE
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Tell us about your home, commercial facility, or post-construction site. We will
                promptly review your specifications and provide a clear, customized proposal with zero
                obligation.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  id="contact-box-phone"
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-[#084A9F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#084A9F] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Call Direct / Text Inquiries
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#071A59]">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  id="contact-box-email"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-[#084A9F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#071A59] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#071A59] break-all">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-[#071A59] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Service Territory
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#071A59]">
                      Chicago, Illinois &amp; Surrounding Suburbs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assurance Card */}
            <div className="p-6 rounded-2xl bg-[#071A59] text-white">
              <div className="flex items-center gap-2 text-[#1596D2] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#E5162D]" />
                <span>Our Privacy Promise</span>
              </div>
              <h3 className="text-base font-bold mb-2 font-display">
                Your Space &amp; Information Are Safe
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never sell or share your contact details. Your estimate is reviewed strictly by our
                licensed management team to configure your cleaning schedule accurately.
              </p>
            </div>
          </div>

          {/* Right Column: Complete High-Converting Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F9FC] rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-md">
              {submitted ? (
                <div id="quote-submission-success" className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071A59] mb-2 font-display">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                    Thank you, <strong>{formData.fullName}</strong>. A BE BLESSED SERVICES
                    coordinator will review your {formData.serviceNeeded} request for your property
                    in {formData.city}, {formData.state} and contact you via {formData.preferredContactMethod}.
                  </p>

                  <div className="inline-block bg-white border border-slate-300 rounded-xl px-4 py-2 mb-6">
                    <span className="text-xs text-slate-500 block">Confirmation Reference</span>
                    <span className="text-base font-bold text-[#084A9F] tracking-wider">{refNumber}</span>
                  </div>

                  <div>
                    <button
                      id="submit-another-quote-btn"
                      type="button"
                      onClick={handleReset}
                      className="bg-[#084A9F] hover:bg-[#071A59] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form id="quote-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3 mb-2">
                    <h3 className="text-base font-bold text-[#071A59] font-display">
                      Step 1: Your Contact Information
                    </h3>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-fullname" className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-fullname"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(312) 555-0123"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-company" className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Property Name (Optional)
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company or Building Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Street, City, State, Zip */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-6">
                      <label htmlFor="quote-street" className="block text-xs font-bold text-slate-700 mb-1">
                        Street Address <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-street"
                        type="text"
                        name="streetAddress"
                        required
                        value={formData.streetAddress}
                        onChange={handleChange}
                        placeholder="123 Michigan Ave"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="quote-city" className="block text-xs font-bold text-slate-700 mb-1">
                        City <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-city"
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Chicago"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="quote-zip" className="block text-xs font-bold text-slate-700 mb-1">
                        ZIP Code <span className="text-[#E5162D]">*</span>
                      </label>
                      <input
                        id="quote-zip"
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="60601"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="border-b border-slate-200 pb-3 pt-3 mb-2">
                    <h3 className="text-base font-bold text-[#071A59] font-display">
                      Step 2: Service &amp; Property Specifications
                    </h3>
                  </div>

                  {/* Service Needed & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-service-needed" className="block text-xs font-bold text-slate-700 mb-1">
                        Service Needed <span className="text-[#E5162D]">*</span>
                      </label>
                      <select
                        id="quote-service-needed"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="Residential Standard Cleaning">Residential Standard Cleaning</option>
                        <option value="Residential Deep Cleaning">Residential Deep Cleaning</option>
                        <option value="Recurring Residential Cleaning">Recurring Residential Cleaning</option>
                        <option value="Commercial Standard Cleaning">Commercial Standard Cleaning</option>
                        <option value="Commercial Deep Cleaning">Commercial Deep Cleaning</option>
                        <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                        <option value="Post-Renovation Cleaning">Post-Renovation Cleaning</option>
                        <option value="Other / Not Sure">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-property-type" className="block text-xs font-bold text-slate-700 mb-1">
                        Property Type <span className="text-[#E5162D]">*</span>
                      </label>
                      <select
                        id="quote-property-type"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo / High-Rise</option>
                        <option value="Townhome">Townhome</option>
                        <option value="Office">Office / Suite</option>
                        <option value="Retail Store">Retail Store</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Gym / Fitness Center">Gym / Fitness Center</option>
                        <option value="Medical Facility">Medical / Dental Facility</option>
                        <option value="School / Daycare">School / Daycare Center</option>
                        <option value="Religious Facility">Religious Facility / Place of Worship</option>
                        <option value="Salon / Spa">Salon / Spa</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Event Venue">Event Venue</option>
                        <option value="New Construction">New Construction</option>
                        <option value="Renovated Property">Renovated Property</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Square Footage & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-sqft" className="block text-xs font-bold text-slate-700 mb-1">
                        Approximate Square Footage
                      </label>
                      <input
                        id="quote-sqft"
                        type="text"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        placeholder="e.g., 1,500 sq ft"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-date" className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Service Date
                      </label>
                      <input
                        id="quote-date"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Frequency & Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-frequency" className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Cleaning Frequency
                      </label>
                      <select
                        id="quote-frequency"
                        name="preferredFrequency"
                        value={formData.preferredFrequency}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="One-Time Cleaning">One-Time Cleaning</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Multiple Times Per Week">Multiple Times Per Week</option>
                        <option value="Daily">Daily (Commercial)</option>
                        <option value="Custom Schedule">Custom Schedule</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-contact-method" className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        id="quote-contact-method"
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                      >
                        <option value="phone">Phone Call</option>
                        <option value="text">Text Message (SMS)</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Requirements */}
                  <div>
                    <label htmlFor="quote-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Specific Cleaning Requirements
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention any key areas, access instructions, pet details, or deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#084A9F] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[#084A9F] hover:bg-[#071A59] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-b-4 border-[#E5162D] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING YOUR REQUEST...</span>
                      ) : (
                        <>
                          <span>REQUEST MY FREE QUOTE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
