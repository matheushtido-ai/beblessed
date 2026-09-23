export type NavSection =
  | 'home'
  | 'services'
  | 'residential'
  | 'commercial'
  | 'post-construction'
  | 'move-in-out'
  | 'hvac'
  | 'about'
  | 'our-work'
  | 'service-area'
  | 'contact';

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  serviceNeeded: string;
  propertyType: string;
  squareFootage: string;
  preferredDate: string;
  preferredFrequency: string;
  preferredContactMethod: 'phone' | 'text' | 'email';
  message: string;
  // HVAC specific dynamic fields
  hvacSector?: 'Residential' | 'Commercial';
  hvacSystemType?: 'Heating' | 'Cooling' | 'Both' | 'Not Sure';
  issueDescription?: string;
}

export interface ProjectImage {
  id: string;
  title: string;
  caption: string;
  beforeUrl?: string;
  afterUrl: string;
  category: 'residential' | 'commercial' | 'post-construction';
  isRealWork: boolean;
  notes?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'residential' | 'commercial' | 'post-construction';
}
