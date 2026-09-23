import { FaqItem, ProjectImage } from '../types';

export const COMPANY_INFO = {
  name: 'BE BLESSED SERVICES',
  legalName: 'BE BLESSED SERVICES LLC',
  tagline: 'Serving with Purpose',
  phone: '(847) 436-2288',
  phoneRaw: '+18474362288',
  email: 'contact@beblessedservices.com',
  established: 2023,
  primaryMarket: 'Chicago, Illinois',
  serviceArea: 'Chicago and surrounding suburbs',
  hours: {
    residential: 'Flexible scheduling available (Monday – Saturday)',
    commercial: '24/7 commercial service available',
  },
  highlights: [
    'Serving Chicago Since 2023',
    'W-2 Cleaning Professionals',
    'Background-Checked Team',
    'Fully Insured with Liability Coverage',
    'Residential Cleaning Supplies Included',
    '24/7 Commercial Cleaning Available',
    'Flexible Scheduling',
  ],
};

// Official project photos for Showcase A and B
// Notice we use realistic, high-resolution post-construction before/after photos that match the exact requested descriptions,
// while also providing a built-in image replacement tool in the gallery if the client wants to load their exact local files!
export const SHOWCASE_A_IMAGES: ProjectImage[] = [
  {
    id: 'showcase-a-1',
    title: 'Post-Renovation Transformation - Living & Kitchen Area',
    caption: 'Post-renovation apartment transformed and ready for use.',
    beforeUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'post-construction',
    isRealWork: true,
    notes: 'Complete removal of fine drywall dust, floor polishing, and detailed wipe-down of all fixtures.',
  },
  {
    id: 'showcase-a-2',
    title: 'Post-Renovation Transformation - Bathroom & Master Suite',
    caption: 'Post-renovation apartment transformed and ready for use.',
    beforeUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    category: 'post-construction',
    isRealWork: true,
    notes: 'Adhesive and grout haze eliminated from custom tiles, glass polished, and fixtures sanitized.',
  },
];

export const SHOWCASE_B_IMAGES: ProjectImage[] = [
  {
    id: 'showcase-b-1',
    title: 'Debris & Residue Extraction',
    caption: 'Removal of construction debris and residues in commercial and residential spaces.',
    afterUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    category: 'post-construction',
    isRealWork: true,
    notes: 'Thorough extraction of construction residue from industrial flooring and commercial corridors.',
  },
  {
    id: 'showcase-b-2',
    title: 'Detailed Surface & Woodwork Cleaning',
    caption: 'Detailed cleaning of surfaces, baseboards, and doors after construction.',
    afterUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    category: 'post-construction',
    isRealWork: true,
    notes: 'Multi-pass wipe-down on custom millwork, door frames, vents, and architectural trims.',
  },
  {
    id: 'showcase-b-3',
    title: 'Move-In Ready Handover',
    caption: 'Space ready for use after post-construction cleaning.',
    afterUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    category: 'post-construction',
    isRealWork: true,
    notes: 'Spotless handoff condition ready for homeowner occupancy and commercial tenant move-in.',
  },
];

export const COMMERCIAL_INDUSTRIES = [
  {
    id: 'offices',
    name: 'Office Buildings',
    description: 'Corporate suites, executive conference rooms, and multi-tenant commercial centers requiring spotless daily janitorial care.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retail',
    name: 'Retail Stores',
    description: 'Boutiques, showrooms, and shopping plazas needing immaculate floors, mirrors, and welcoming customer entryways.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Commercial Kitchens',
    description: 'Dining areas, host stations, break rooms, and front-of-house surfaces kept sanitized and inviting.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fitness',
    name: 'Fitness Centers & Gyms',
    description: 'High-touch workout equipment wiping, locker rooms, mirrors, rubber mats, and sanitary common spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'medical',
    name: 'Medical Facilities',
    description: 'Clinics, therapy offices, and dental reception suites maintained with rigorous disinfection of high-touch surfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'educational',
    name: 'Educational Facilities',
    description: 'Classrooms, lecture rooms, computer labs, and campus administrative offices.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'daycare',
    name: 'Schools & Daycare Centers',
    description: 'Safe, sanitized environments for children with non-toxic, child-conscious cleaning procedures and surface care.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'religious',
    name: 'Religious Facilities',
    description: 'Sanctuaries, fellowship halls, and community centers with deep respect for worship environments (Proudly serving Emmanuel Temple – West Chester).',
    imageUrl: 'https://images.unsplash.com/photo-1548625361-098555896e38?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'spas',
    name: 'Spas & Salons',
    description: 'Pristine styling stations, shampoo sinks, treatment rooms, and client lounges where cleanliness defines luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'events',
    name: 'Event Venues',
    description: 'Pre-event preparation and post-gala cleanup for banquet halls, galleries, and private celebration venues.',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'small-biz',
    name: 'Small Businesses',
    description: 'Flexible, affordable, customized schedules tailored to local neighborhood businesses and professional agencies.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
  },
];

export const RESIDENTIAL_CHECKLIST = {
  kitchen: [
    'Countertop and surface cleaning & degreasing',
    'Sink cleaning, sanitizing, and fixture polishing',
    'Exterior appliance cleaning (refrigerator, oven, dishwasher)',
    'Interior and exterior microwave cleaning',
    'Stove degreasing and burner rim wiping',
    'Cabinet fronts wiped down and polished',
    'Floor sweeping and thorough mopping',
    'Trash removal and liner replacement',
  ],
  bathrooms: [
    'Toilet cleaning, scrubbing, and comprehensive disinfection',
    'Sink and countertop cleaning and sanitizing',
    'Mirror and glass polishing with streak-free finish',
    'Shower and bathtub scrubbing, tile wiping',
    'Floor mopping and sanitizing',
    'Fixture polishing (faucets, showerheads, handles)',
    'Trash removal',
  ],
  bedrooms: [
    'Dusting of dressers, nightstands, shelves, and tabletops',
    'Bed making when fresh clean linens are provided',
    'Vacuuming carpets/rugs and mopping hard floors',
    'Window sill and sash wiping',
    'Baseboard dusting and wipe-down',
  ],
  livingAreas: [
    'Detailed furniture dusting and upholstery vacuuming',
    'Electronics and TV screen delicate cleaning',
    'Carpet and area rug vacuuming',
    'Hard surface floor sweeping and mopping',
    'Window sill wiping and picture frame dusting',
    'Baseboard cleaning throughout',
    'General room tidying and visual alignment',
  ],
  throughoutHome: [
    'High dusting of ceiling fans, lamps, and light fixtures',
    'Door and door frame spot cleaning',
    'Baseboard wiping and corner detailing',
    'Air vent cover dusting and grille wiping',
    'Cobweb removal from corners and ceiling edges',
    'Emptying all wastebaskets and fresh liner placement',
  ],
};

export const POST_CONSTRUCTION_CHECKLIST = {
  general: [
    'Comprehensive removal of construction dust from all vertical and horizontal surfaces',
    'Industrial vacuuming with HEPA filtration, sweeping, and damp mopping of all hard floors',
    'Cleaning of baseboards, interior doors, trim, moldings, and walls',
    'Safe removal of manufacturer stickers, protective blue tapes, and window films',
  ],
  kitchenAndBath: [
    'Detailed cleaning and vacuuming of cabinets and drawers inside and out',
    'Deep sanitization and polishing of quartz, granite, and tile countertops',
    'Degreasing and sanitizing backsplashes, hoods, and appliance surrounds',
    'Polishing and descaling chrome and matte faucets, drains, and hardware',
  ],
  glassAndSurfaces: [
    'Interior window washing, track vacuuming, and glass sliding door polishing',
    'Mirror and glass shower enclosure polishing without streaks',
    'Careful removal of paint overspray splatters, caulking smudges, and adhesive residue',
  ],
  detailWork: [
    'Light fixtures, recessed cans, chandeliers, and wall sconces wiped clean',
    'Thorough dust removal from HVAC return grilles and supply diffusers',
    'Closet shelves, wardrobe organizers, and custom cabinetry thoroughly wiped',
    'Electrical faceplates, light switches, and receptacle covers cleaned',
  ],
  finalTouches: [
    'Final trash and light post-construction debris disposal',
    'Odor neutralization and fresh air circulation check',
    'Room-by-room quality assurance inspection',
    'Turnkey preparation ready for immediate move-in or open house showcase',
  ],
};

export const CHICAGO_NEIGHBORHOODS = [
  { name: 'Lincoln Park', type: 'Chicago City' },
  { name: 'Hyde Park', type: 'Chicago City' },
  { name: 'The Loop & Downtown', type: 'Chicago City' },
  { name: 'River North & Streeterville', type: 'Chicago City' },
  { name: 'West Loop & Fulton Market', type: 'Chicago City' },
  { name: 'Lakeview & Wrigleyville', type: 'Chicago City' },
  { name: 'Bucktown & Wicker Park', type: 'Chicago City' },
  { name: 'Gold Coast & Old Town', type: 'Chicago City' },
  { name: 'Logan Square', type: 'Chicago City' },
  { name: 'South Loop & Bronzeville', type: 'Chicago City' },
  { name: 'Evanston', type: 'North Shore Suburb' },
  { name: 'Oak Park & River Forest', type: 'Near West Suburb' },
  { name: 'Skokie & Niles', type: 'North Suburb' },
  { name: 'Naperville & Aurora', type: 'West Suburb' },
  { name: 'Schaumburg & Arlington Heights', type: 'Northwest Suburb' },
  { name: 'West Chester & Surrounding Areas', type: 'Cook County Suburb' },
];

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: 'What areas does BE BLESSED SERVICES serve?',
    answer:
      'BE BLESSED SERVICES proudly serves Chicago, Illinois and surrounding suburbs. We serve residential, commercial, and post-construction clients throughout neighborhoods like Lincoln Park, Hyde Park, The Loop, River North, and Cook, DuPage, and Lake County suburbs.',
  },
  {
    category: 'general',
    question: 'Are your cleaners W-2 employees or independent contractors?',
    answer:
      'All cleaners at BE BLESSED SERVICES are payroll W-2 employees, never random 1099 independent contractors. Every team member undergoes rigorous background checks, professional training, and adheres to our high standard of accountability and care.',
  },
  {
    category: 'general',
    question: 'Is BE BLESSED SERVICES insured?',
    answer:
      'Yes, BE BLESSED SERVICES is fully insured with comprehensive commercial liability coverage. You can rest assured your home, commercial facility, or renovation site is protected at all times.',
  },
  {
    category: 'residential',
    question: 'Are cleaning supplies included for residential cleaning?',
    answer:
      'Yes! All professional cleaning supplies, microfiber cloths, vacuum equipment, and eco-conscious solutions are included in our residential service. You do not need to provide cleaning chemicals or equipment.',
  },
  {
    category: 'residential',
    question: 'Do you provide recurring house cleaning services?',
    answer:
      'Yes. We offer recurring cleaning on weekly, bi-weekly, and monthly schedules. For recurring clients, we attempt to assign the same cleaner whenever possible to provide continuous consistency, familiar preferences, and peace of mind.',
  },
  {
    category: 'residential',
    question: 'What is the difference between standard and deep cleaning?',
    answer:
      'Standard cleaning maintains your home on an ongoing basis (kitchen, bathrooms, living areas, dusting, vacuuming, mopping, and surfaces). Deep cleaning goes significantly deeper to address built-up grime, grease on stove hoods, detailed baseboard hand-wiping, door frames, vent covers, and neglected corners. We recommend starting with a deep clean before transitioning into recurring standard service.',
  },
  {
    category: 'residential',
    question: 'How long does a residential cleaning typically take?',
    answer:
      'Cleaning duration varies depending on property square footage, number of rooms, and current condition. Many homes take approximately 2 to 4 hours, though every space receives the time necessary to achieve our thorough standard rather than an arbitrary rush.',
  },
  {
    category: 'commercial',
    question: 'Do you offer 24/7 commercial cleaning?',
    answer:
      'Yes. Commercial cleaning service is available 24 hours a day, 7 days a week. We can clean after-hours, overnight, early morning, or during off-peak windows so your daily business operations and client interactions are never disrupted.',
  },
  {
    category: 'commercial',
    question: 'What types of businesses do you clean?',
    answer:
      'We serve a wide variety of commercial facilities: corporate office buildings, retail stores, restaurants, gyms & fitness centers, medical & dental suites, educational spaces, schools & daycares, religious facilities (such as Emmanuel Temple – West Chester), salons, spas, and event venues.',
  },
  {
    category: 'post-construction',
    question: 'What is post-construction cleaning and when should it be scheduled?',
    answer:
      'Post-construction cleaning is a multi-step, heavy-duty cleaning process designed to transform newly built or remodeled spaces from drywall dust and contractor debris into pristine, move-in-ready condition. It should be scheduled once contractors have completed major work and punch-list trades.',
  },
  {
    category: 'post-construction',
    question: 'Can you clean both residential renovations and commercial new builds?',
    answer:
      'Yes. We regularly work with homeowners, general contractors, remodeling companies, builders, and property managers on everything from kitchen/bath remodels to entire commercial build-outs.',
  },
  {
    category: 'post-construction',
    question: 'Do you remove stickers, tape, and paint splatter?',
    answer:
      'Yes! Our post-construction checklist includes removing manufacturer labels, protective films, tape residues, and appropriate paint overspray on glass and baseboards without scratching surfaces. Note that we do not handle licensed hazardous waste or heavy demolition disposal.',
  },
  {
    category: 'general',
    question: 'How can I request a cleaning quote?',
    answer:
      'You can request a free quote anytime through our online quote form on this website, or call us directly at (847) 436-2288. We will promptly discuss your property specifications, timeline, and deliver a clear, customized proposal.',
  },
];
