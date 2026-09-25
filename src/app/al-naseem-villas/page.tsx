'use client';

import React, { useState } from 'react';
import NaseemHeader from '@/components/al-naseem-villas/NaseemHeader';
import NaseemHero from '@/components/al-naseem-villas/NaseemHero';
import NaseemHighlights from '@/components/al-naseem-villas/NaseemHighlights';
import NaseemAboutVideo from '@/components/al-naseem-villas/NaseemAboutVideo';
import NaseemAmenities from '@/components/al-naseem-villas/NaseemAmenities';
import NaseemGallery from '@/components/al-naseem-villas/NaseemGallery';
import NaseemFloorPlans from '@/components/al-naseem-villas/NaseemFloorPlans';
import NaseemArticle from '@/components/al-naseem-villas/NaseemArticle';
import NaseemPaymentPlan from '@/components/al-naseem-villas/NaseemPaymentPlan';
import NaseemPaymentMethods from '@/components/al-naseem-villas/NaseemPaymentMethods';
import NaseemMasterPlan from '@/components/al-naseem-villas/NaseemMasterPlan';
import NaseemLocation from '@/components/al-naseem-villas/NaseemLocation';
import NaseemFaq from '@/components/al-naseem-villas/NaseemFaq';
import NaseemContact from '@/components/al-naseem-villas/NaseemContact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ListPropertyModal from '@/components/ListPropertyModal';
import NaseemBrochureModal from '@/components/al-naseem-villas/NaseemBrochureModal';

export default function AlNaseemVillasPage() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation Header */}
      <NaseemHeader
        onOpenListProperty={() => setListModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Hero Section with Slider & Call Back Form */}
      <NaseemHero onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <NaseemHighlights />

      {/* About & Video Showcase with solid brown half-backdrop */}
      <NaseemAboutVideo onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* 8 Amenities Grid */}
      <NaseemAmenities />

      {/* Gallery with Carousel Slider, Tabs & Lightbox */}
      <NaseemGallery />

      {/* Blog Article Section */}
      <NaseemArticle />

      {/* Payment Plan with List/Grid Toggle (Matching User Screenshot) */}
      <NaseemPaymentPlan onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* Floor Plans Interactive Section (4, 5, 6 BR Villas) */}
      <NaseemFloorPlans onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* Accepted Payment Methods */}
      <NaseemPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <NaseemMasterPlan />

      {/* Location & Attractions (Map + Accordion) - Note: Nearby & Similar sections omitted */}
      <NaseemLocation />

      {/* Frequently Asked Questions */}
      <NaseemFaq />

      {/* Secondary Contact & Request Call Back */}
      <NaseemContact />

      {/* Footer */}
      <Footer />

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

      {/* List Property Modal */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />

      {/* Download Brochure Modal */}
      <NaseemBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
