'use client';

import React, { useState } from 'react';
import VillasHeader from '@/components/bashayer-villas/VillasHeader';
import VillasHero from '@/components/bashayer-villas/VillasHero';
import VillasHighlights from '@/components/bashayer-villas/VillasHighlights';
import VillasAboutVideo from '@/components/bashayer-villas/VillasAboutVideo';
import VillasAmenities from '@/components/bashayer-villas/VillasAmenities';
import VillasGallery from '@/components/bashayer-villas/VillasGallery';
import VillasArticle from '@/components/bashayer-villas/VillasArticle';
import VillasPaymentPlan from '@/components/bashayer-villas/VillasPaymentPlan';
import VillasPaymentMethods from '@/components/bashayer-villas/VillasPaymentMethods';
import VillasMasterPlan from '@/components/bashayer-villas/VillasMasterPlan';
import VillasLocation from '@/components/bashayer-villas/VillasLocation';
import VillasFaq from '@/components/bashayer-villas/VillasFaq';
import VillasContact from '@/components/bashayer-villas/VillasContact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ListPropertyModal from '@/components/ListPropertyModal';
import VillasBrochureModal from '@/components/bashayer-villas/VillasBrochureModal';

export default function BashayerVillasPage() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation Header */}
      <VillasHeader
        onOpenListProperty={() => setListModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Hero Section with Slider & Call Back Form */}
      <VillasHero onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <VillasHighlights />

      {/* About & Video Showcase with solid brown half-backdrop */}
      <VillasAboutVideo />

      {/* 8 Amenities Grid */}
      <VillasAmenities />

      {/* Gallery with Carousel Slider, Left Aligned Text & Lightbox */}
      <VillasGallery />

      {/* Detailed Project Article & Specifications */}
      <VillasArticle />

      {/* Payment Plan with List/Grid Toggle */}
      <VillasPaymentPlan onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* Accepted Payment Methods */}
      <VillasPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <VillasMasterPlan />

      {/* Location & Attractions (Map + Accordion) */}
      <VillasLocation />

      {/* Frequently Asked Questions */}
      <VillasFaq />

      {/* Secondary Contact & Request Call Back */}
      <VillasContact />

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
      <VillasBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
