export const businessInfo = {
  /** Possessive branding used across the site (matches logo/marketing copy). */
  name: "Sunshine's Handy Gal Services",
  owner: "Sheena Hotaling",
  phoneDisplay: "(321) 339-6686",
  phoneHref: "tel:+13213396686",
  textHref: "sms:+13213396686",
  email: "sunshineshandygalservices@gmail.com",
  emailHref: "mailto:sunshineshandygalservices@gmail.com",
  location: "Orlando, Florida",
  serviceAreaSummary:
    "Orlando, Lake Nona, Winter Park, Lake Mary, St. Cloud, and nearby Central Florida communities",
  /** Google Maps — embed (iframe src) and external link for contact sidebar */
  serviceAreaMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450945.36688370604!2d-81.82079895859483!3d28.554348382689693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773ed8e347581%3A0xf72aa23ed13aab69!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1735689600000!5m2!1sen!2sus",
  serviceAreaGoogleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Orlando%2C%20Florida",
  /**
   * Google Business Profile “Get more reviews” URL (recommended).
   * Replace with your direct review link from Google Business; until then this opens Google search for the business.
   */
  googleReviewUrl:
    "https://www.google.com/search?q=Sunshine%27s+Handy+Gal+Services+Orlando+reviews",
};

/** Footer hours table — adjust times to match your real schedule. */
export const businessHoursRows = [
  { id: "mon" as const, labelShort: "Mon", hours: "8:00 AM – 5:30 PM" },
  { id: "tue" as const, labelShort: "Tue", hours: "8:00 AM – 5:30 PM" },
  { id: "wed" as const, labelShort: "Wed", hours: "8:00 AM – 5:30 PM" },
  { id: "thu" as const, labelShort: "Thu", hours: "8:00 AM – 5:30 PM" },
  { id: "fri" as const, labelShort: "Fri", hours: "8:00 AM – 5:30 PM" },
  { id: "sat" as const, labelShort: "Sat", hours: "By appointment" },
  { id: "sun" as const, labelShort: "Sun", hours: "Closed" },
];

/** Maps `businessHoursRows` id to JavaScript `Date#getDay()` (0 = Sunday). */
export const businessHoursDayIndex: Record<
  (typeof businessHoursRows)[number]["id"],
  number
> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

/** Social profiles — add X / Instagram URLs when ready (empty = icon shown disabled). */
export const socialLinks = {
  /** WhatsApp chat — digits only, country code included */
  whatsAppE164: "13213396686",
  facebook: "https://www.facebook.com/profile.php?id=61577972807389",
  x: "",
  instagram: "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const trustBadges = [
  "100% Recommended",
  "Women-Owned",
  "Online Booking Available",
  "Serving Orlando & Nearby Areas",
];

/** Hero images are royalty-free stills from Unsplash (https://unsplash.com/license), hosted under /images/services/. Where people appear, imagery highlights women doing the work—aligned with our women-owned team. */
export const services = [
  {
    title: "Detailed Clean",
    description:
      "Detailed cleaning includes thorough, top-to-bottom attention to all areas of your home, focusing on buildup, high-touch surfaces, and areas that need extra care.",
    benefit:
      "Delivers a polished, refreshed feel with careful attention where it matters most—without cutting corners.",
    whoItsFor:
      "Homes that deserve consistent, detail-focused care on a recurring rhythm.",
    icon: "Sparkles",
    imageSrc: "/images/services/detailed-clean.jpg",
    imageAlt:
      "Woman caring for a bright kitchen—checking the refrigerator during detailed cleaning",
    examples: [
      "Dusting shelves, trim, and décor—including spots often skipped on quick cleans",
      "Vacuuming carpets and prepping hard floors for a thorough mop finish",
      "Kitchen sinks, counters, and appliance exteriors wiped and polished",
      "Bathroom vanities, mirrors, and fixtures cleaned and dried streak-free",
      "Spot-cleaning cabinet fronts and disinfecting high-touch door handles",
      "Emptying main trash bins and replacing liners where supplies are provided",
      "Straightening common areas for a tidy “welcome home” presentation",
      "Interior glass on sliding doors and selected reachable windows",
      "Stair rails and banisters wiped down for fingerprints and dust",
      "Final walk-through touch-ups guided by your priority list",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "Detailed top-to-bottom attention for neglected areas, buildup, and high-touch surfaces that need extra care.",
    benefit:
      "Creates that true reset feeling clients describe as refreshed, renewed, and noticeably cleaner.",
    whoItsFor:
      "Seasonal refreshes, first-time cleanings, or homes needing a full reset.",
    icon: "ShieldCheck",
    imageSrc: "/images/services/deep-cleaning.jpg",
    imageAlt:
      "Woman in gloves wiping a wooden surface during a thorough deep clean",
    examples: [
      "Grease and grime treatment on backsplashes, range areas, and hood exteriors",
      "Microwave interior wipe-down; refrigerator exterior detailed",
      "Tubs, showers, and tile grout scrubbed for soap scum and buildup",
      "Baseboards and door frames hand-wiped for settled dust",
      "Light switches, outlets, and thermostat plates sanitized",
      "Ceiling fans and reachable vent covers dusted",
      "Windowsills and tracks cleared where accessible",
      "Furniture fronts and legs dusted or wiped as appropriate for finish",
      "Edge vacuum along corners and under light furniture where reachable",
      "Hard-water spots treated on glass enclosures and fixtures",
    ],
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Comprehensive cleaning to prepare a property for listing, handoff, or a fresh start in your new space.",
    benefit:
      "Helps protect first impressions and reduces moving-day overwhelm.",
    whoItsFor:
      "Homeowners, renters, and families in transition.",
    icon: "Home",
    imageSrc: "/images/services/move-in-out.jpg",
    imageAlt: "Woman carrying moving boxes across a sunlit living room",
    examples: [
      "Empty cabinets and closets wiped—ready for belongings or listing photos",
      "Kitchen deep-clean including sink polish and appliance fronts",
      "Full bathroom sanitize including toilets, tubs, and showers",
      "All floors vacuumed and hard surfaces mopped",
      "Interior windows and tracks wiped in main living areas",
      "Garage entry zone sweep-out where accessible",
      "Cobweb removal along ceilings and corners within safe reach",
      "Patio slider tracks and interior glass cleaned",
      "Light fixtures and ceiling fans dusted",
      "Checklist alignment with landlord, HOA, or realtor notes when provided",
    ],
  },
  {
    title: "Organization Services",
    description:
      "Practical organizing support for closets, kitchens, and everyday spaces to improve flow and reduce clutter.",
    benefit:
      "Brings order and calm to the areas that impact your routine most.",
    whoItsFor:
      "Anyone who wants a cleaner, calmer, more functional home.",
    icon: "LayoutGrid",
    imageSrc: "/images/services/organization.jpg",
    imageAlt:
      "Woman arranging items on tidy pantry shelves during an in-home organization session",
    examples: [
      "Closet sorting—donate, keep, and relocate piles with your guidance",
      "Pantry categorization and shelf zoning for faster meal prep",
      "Kitchen drawer and utensil tidy-up",
      "Bathroom vanity and linen closet refresh",
      "Entryway shoe, bag, and coat zone setup",
      "Kids’ toy or craft area containment and labeling",
      "Home office paper, cable, and supply sorting",
      "Laundry room workflow improvements",
      "Seasonal clothing rotation support",
      "Donation staging and simple bin labels so systems stick",
    ],
  },
  {
    title: "Residential Cleaning",
    description:
      "Personalized in-home cleaning with thoughtful care and respectful service from entryway to bedrooms.",
    benefit:
      "Delivers peace of mind knowing your space is cared for like it matters.",
    whoItsFor:
      "Single-family homes, apartments, condos, and townhomes.",
    icon: "House",
    imageSrc: "/images/services/residential.jpg",
    imageAlt: "Woman cleaning floors in a bright, modern living room",
    examples: [
      "Whole-home dusting of surfaces, frames, and décor",
      "Kitchen and dining cleanup tailored to how you use the space",
      "Bathroom refreshes across full baths and powder rooms",
      "Bed linens smoothed and nightstands wiped",
      "Living areas vacuumed including upholstery edges where reachable",
      "Hard floors swept and mopped with care for your finish type",
      "Trash emptied for kitchens and bathrooms",
      "Stainless and panel appliance fronts wiped for fingerprints",
      "Mirrors and glass tabletops polished",
      "Pet-hair pickup routines where requested",
    ],
  },
  {
    title: "Light Commercial Cleaning",
    description:
      "Reliable cleaning for offices and small business spaces with detail-focused standards and professional communication.",
    benefit:
      "Supports a polished environment for your team and your customers.",
    whoItsFor:
      "Studios, boutiques, offices, and small professional spaces.",
    icon: "BriefcaseBusiness",
    imageSrc: "/images/services/commercial.jpg",
    imageAlt: "Two women collaborating at a sunlit desk in a professional setting",
    examples: [
      "Reception and lobby dusting with glass smudge touch-up",
      "Conference tables sanitized and seating aligned neatly",
      "Break room sinks, counters, and appliance exteriors wiped",
      "Restroom restock assist when supplies are provided on-site",
      "Office kitchen microwave and refrigerator exterior wipe-down",
      "Deskside and common trash removal with liner replacement",
      "Traffic-lane vacuum and hard-floor mop",
      "Entry mats vacuumed or shaken at perimeter",
      "Light workstation dusting while respecting electronics and papers",
      "Interior glass partitions spot-cleaned for handprints",
    ],
  },
  {
    title: "Airbnb & Vacation Rental Cleaning",
    description:
      "Guest-ready turnover cleans between bookings—fresh linens attention, kitchen and bath reset, and quick resets so your listing always feels welcoming.",
    benefit:
      "Helps protect your reviews and calendar with reliable, photo-ready results.",
    whoItsFor:
      "Hosts and property managers with short-term rentals in Orlando and nearby areas.",
    icon: "KeyRound",
    imageSrc: "/images/services/airbnb.jpg",
    imageAlt: "Woman making the bed and smoothing linens for a guest-ready rental",
    examples: [
      "Crisp bed-making with hospital corners when linens are provided",
      "Towel and amenity staging from your host checklist",
      "Kitchen reset—dishes, counters, and appliance wipe-down",
      "Coffee station straightened and supplies refilled if stocked",
      "Bathroom sanitize with toilet paper and soap restock when on hand",
      "Living areas—fluff pillows, fold throws, reset décor",
      "Patio or balcony quick sweep and outdoor table wipe",
      "Trash removal and fresh liners in kitchens and baths",
      "Under-bed and sofa edge checks for guest-left items",
      "Photo notes or messages for owners when something needs attention",
    ],
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Removal of fine dust, debris, and smudges after remodels or new builds so you can move in or list without a second round of scrubbing.",
    benefit:
      "Delivers a move-in-ready finish after contractors wrap up—floors, fixtures, and surfaces included.",
    whoItsFor:
      "Homeowners, landlords, and contractors who need a thorough cleanup after construction work.",
    icon: "Paintbrush",
    imageSrc: "/images/services/post-construction.jpg",
    imageAlt:
      "Young woman wiping a shelf with gloves during a post-renovation dust-down cleanup",
    examples: [
      "Fine drywall dust removal from horizontal surfaces and ledges",
      "Post-trade window glass and sill wipe-down",
      "Initial vacuum passes for construction grit on carpets",
      "Safe removal of painter’s tape residue and stray labels on finishes",
      "Cabinet interiors vacuumed and wiped before dishes move in",
      "Fixture and hardware polish after dust settles",
      "Cool light fixtures and ceiling fans dusted post-install",
      "Baseboards and trim wiped following sanding dust",
      "Garage or work zone sweep toward exits",
      "Final detail pass ahead of owner or contractor walkthrough",
    ],
  },
];

export const processSteps = [
  {
    title: "Request a Quote",
    description:
      "Tell us what you need, your space type, and your preferred timing. We will follow up quickly.",
  },
  {
    title: "Schedule Your Service",
    description:
      "Choose a convenient day and service plan that fits your home, business, and routine.",
  },
  {
    title: "Enjoy a Fresh, Clean Space",
    description:
      "Come back to a clean, organized environment with thoughtful finishing touches.",
  },
];

export const serviceAreas = [
  {
    name: "Orlando",
    description:
      "If you are searching for dependable house cleaning in Orlando, we provide thorough, friendly service that makes your home feel refreshed and cared for.",
    hoverImageSrc: "/images/service-areas/orlando.jpg",
    hoverImageAlt: "Sunlit Florida neighborhood palms and skyline suggesting Orlando",
  },
  {
    name: "Lake Nona",
    description:
      "Lake Nona homes and small businesses trust us for reliable cleaning, responsive communication, and detail-oriented care.",
    hoverImageSrc: "/images/service-areas/lake-nona.jpg",
    hoverImageAlt: "Green avenues and contemporary homes suggesting Lake Nona",
  },
  {
    name: "Winter Park",
    description:
      "From regular upkeep to deep clean resets, Winter Park clients choose us for polished results and professional service.",
    hoverImageSrc: "/images/service-areas/winter-park.jpg",
    hoverImageAlt: "Tree-lined residential street suggesting Winter Park charm",
  },
  {
    name: "Lake Mary",
    description:
      "Lake Mary families and professionals count on us for warm service, consistent quality, and spaces that feel renewed.",
    hoverImageSrc: "/images/service-areas/lake-mary.jpg",
    hoverImageAlt: "Welcoming suburban home exterior suggesting Lake Mary",
  },
  {
    name: "St. Cloud",
    description:
      "Need home cleaning in St. Cloud? We deliver personalized service that helps your home feel calm, clean, and ready.",
    hoverImageSrc: "/images/service-areas/st-cloud.jpg",
    hoverImageAlt: "Lake shoreline with palms suggesting Central Florida towns like St. Cloud",
  },
  {
    name: "Nearby Central Florida Areas",
    description:
      "We proudly serve nearby Central Florida communities with trusted cleaning and organizing support tailored to each client.",
    hoverImageSrc: "/images/service-areas/central-florida.jpg",
    hoverImageAlt: "Rolling hills and fields suggesting broader Central Florida",
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  location?: string;
  date?: string;
  rating?: number;
  source?: string;
};

const normalizeTestimonialText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const uniqueTestimonialsByReviewerAndQuote = (items: Testimonial[]) => {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = `${normalizeTestimonialText(item.name)}::${normalizeTestimonialText(item.quote)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const testimonials = uniqueTestimonialsByReviewerAndQuote([
  /** Quotes sourced from local customer recommendations and reviews. */
  {
    name: "Andrew Nemchik",
    location: "Lake Mary, FL",
    date: "12 May",
    source: "Facebook recommendation",
    quote:
      "Very professional, efficient and fair priced. Couldn't ask for a better cleaning service.",
  },
  {
    name: "Richard Naraine",
    location: "Pinellas Park, FL",
    date: "14 Apr",
    rating: 5,
    source: "Facebook review",
    quote:
      "I moved to Orlando 6 months ago and was recently recommended Sunshine's Handy Gal Services by a trusted friend. On her very first visit, Sheena did a deep cleaning...",
  },
  {
    name: "Kelvin Hill",
    location: "Windhover",
    date: "9 Apr",
    source: "Facebook recommendation",
    quote:
      "Great customer service, don't hesitate to contact them.",
  },
  {
    name: "Jeff Zawacki",
    location: "Deer Run East",
    date: "26 Mar",
    source: "Facebook recommendation",
    quote:
      "Had them do an initial cleaning and did a fantastic and thorough job. Looking forward to continuing to use them for our bi-weekly cleaning.",
  },
  {
    name: "Brandon Randolph",
    location: "Pine Castle",
    date: "20 Mar",
    source: "Facebook recommendation",
    quote:
      "Best customer service ever...",
  },
  {
    name: "Angel Daniel",
    location: "Minneola, FL",
    date: "16 Mar",
    source: "Facebook recommendation",
    quote:
      "Sheena and her team were remarkable with their cleaning services! This didn't leave not one spot behind! Highly recommend!",
  },
  {
    name: "Colton Shadron",
    location: "Winter Springs, FL",
    date: "23 Feb",
    source: "Facebook recommendation",
    quote:
      "The best house cleaner in the area hands down!",
  },
  {
    name: "Julia Schmertzler",
    location: "South Semoran",
    date: "10 Feb",
    source: "Facebook recommendation",
    quote:
      "Extremely detailed, affordable and does a great job with residential and commercial!",
  },
  {
    name: "Molly Herrera",
    location: "Kaley/Bumby",
    date: "29 Jan",
    source: "Facebook recommendation",
    quote:
      "Her service is out of this world! She does her job with pride. She lives up to her standards. She has reasonable prices and will work with what your needs are. I definitely recommend her. 🌻 💗",
  },
  {
    name: "David Wasdin",
    location: "Robinsdale",
    date: "4 Sep",
    source: "Facebook recommendation",
    quote:
      "Sunshine offers only the best when it comes to cleaning. She'll leave your house looking brand new. Your windows looking see through clean. Would definitely recommend, 10/10.",
  },
  {
    name: "Joshua Bonaccorso",
    location: "Countryside",
    date: "8 Jul",
    source: "Facebook recommendation",
    quote:
      "Highly recommend the SUN IS SHINING 😘",
  },
  {
    name: "Tiffany Johnson",
    quote:
      "Responsive and professional from the first message. The house looked amazing, and I loved the little special touches.",
  },
  {
    name: "Amy Uselton Snellings",
    quote:
      "The absolute best and most thorough clean I have ever received. Every room felt refreshed.",
  },
  {
    name: "Amber Jones",
    quote:
      "Huge help when we were preparing our home to sell. The detail and care made a big difference.",
  },
  {
    name: "Tony Mims",
    quote:
      "Best cleaner in Orlando. Residential and commercial work is both top quality and detail focused.",
  },
  {
    name: "Tiyahna Carter-Murray",
    quote:
      "Dependable, kind, and very detail-oriented. You can tell this business takes pride in every visit.",
  },
  {
    name: "Usha Surapaneni",
    quote:
      "Professional and thorough. Communication was easy, and our home felt truly renewed after service.",
  },
  {
    name: "Chelsea Monroe",
    quote:
      "Move-out cleaning was excellent. Everything was spotless, and the process was smooth from start to finish.",
  },
  {
    name: "Leighann Rivera Penaga",
    quote:
      "So grateful for the organization help and deep cleaning. It brought peace back into our daily routine.",
  },
]);

export const faqItems = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "We offer Detailed Clean, deep cleaning, move-in and move-out cleaning, organization services, residential cleaning, light commercial cleaning, Airbnb and vacation rental turnovers, and post-construction cleaning.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes. We bring professional cleaning supplies and tools. If you have preferred products for your home, we are happy to discuss those too.",
  },
  {
    question: "Do you serve areas outside Orlando?",
    answer:
      "Yes. We serve Orlando, Lake Nona, Winter Park, Lake Mary, St. Cloud, and nearby Central Florida areas.",
  },
  {
    question: "Can I book recurring cleaning?",
    answer:
      "Absolutely. We can help you set a recurring schedule that fits your routine, whether weekly, bi-weekly, or monthly.",
  },
  {
    question: "Do you offer move-out cleaning?",
    answer:
      "Yes. Move-in and move-out cleaning is one of our most requested services, especially for renters, sellers, and families in transition.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can call, text, email, or submit the contact form with your service needs and preferred date. We respond quickly with next steps and availability.",
  },
  {
    question: "How much do services cost?",
    answer:
      "Every home is different, so pricing is customized based on your needs. Please call or text for a personalized quote. A 3-hour minimum service rate of $150 applies.",
  },
  {
    question: "Do you list prices on the website?",
    answer:
      "No. Because every home and cleaning need is different, pricing is based on the size of the job and the services requested. Please call or text for a personalized quote. A 3-hour minimum service rate of $150 applies.",
  },
  {
    question: "Do you offer organizing help too?",
    answer:
      "Yes. We provide practical organization support for areas like kitchens, closets, and high-use spaces to create better flow and less stress.",
  },
  {
    question: "How soon can I get scheduled?",
    answer:
      "Availability changes week to week. Reach out with your preferred date and we will do our best to accommodate your timeline.",
  },
];

export const siteChecklist = [
  "Background-checked professionalism and respectful in-home care",
  "Thorough detail work in high-touch and often-missed areas",
  "Flexible scheduling options with responsive call, text, and email communication",
  "Trusted by local clients for residential and light commercial service",
  "Professional supplies and equipment brought to each visit—your preferred products welcome too",
  "Scope tailored to your priorities, layout, and timing—not one-size-fits-all",
  "Women-owned team focused on dependable, friendly service across Central Florida",
  "Move-ready, listing-ready, and rental turnover options when life gets busy",
  "Straightforward quoting so you know what to expect before we arrive",
  "Recurring plans available to keep your space consistently guest- or family-ready",
];
