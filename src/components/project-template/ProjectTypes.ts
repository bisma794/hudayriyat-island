export interface ProjectHighlight {
  label: string;
  value: string;
  icon?: string;
}

export interface ProjectAmenity {
  name: string;
  icon?: string;
  desc?: string;
}

export interface ProjectGalleryItem {
  id: number;
  src?: string;
  category: 'community' | 'interior' | 'exterior' | 'all';
  alt: string;
}

export interface ProjectFloorPlan {
  id: string;
  name: string;
  tabName?: string;
  type?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  parking?: number | string;
  totalArea: string;
  description: string;
  image?: string;
}

export interface PaymentItem {
  installment: string;
  percentage: string;
  milestone: string;
  description?: string;
}

export interface LocationItem {
  name: string;
  time: string;
}

export interface LocationCategory {
  category: string;
  items: LocationItem[];
}

export interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  badge?: string;
  heroTitle: string;
  heroSubtitle: string;
  freeholdTag?: string;
  price?: string;
  handover?: string;
  developer?: string;
  propertyType?: string;
  configurations?: string;
  downPayment?: string;
  heroSlides?: string[];
  highlights: ProjectHighlight[];
  aboutTitle: string;
  aboutDescription: string;
  aboutImage?: string;
  aboutVideoUrl?: string;
  aboutPoster?: string;
  amenitiesSubtitle?: string;
  amenities: ProjectAmenity[];
  gallerySubtitle?: string;
  gallery: ProjectGalleryItem[];
  floorPlansSubtitle?: string;
  floorPlans: ProjectFloorPlan[];
  articleOverview: { label: string; value: string }[];
  articleHighlights: { title: string; desc: string }[];
  architecturalStyles?: { title: string; desc: string }[];
  paymentPlanSubtitle?: string;
  paymentPlan: PaymentItem[];
  masterPlanSubtitle?: string;
  masterPlanImage?: string;
  locationSubtitle?: string;
  mapIframeUrl?: string;
  locationCategories: LocationCategory[];
  attractions?: { title: string; time: string; image: string }[];
  faqs: FaqItem[];
}

