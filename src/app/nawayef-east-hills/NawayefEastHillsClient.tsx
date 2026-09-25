'use client';

import React, { useState } from 'react';
import NawayefHeader from '@/components/nawayef-east-hills/NawayefHeader';
import NawayefHero from '@/components/nawayef-east-hills/NawayefHero';
import NawayefHighlights from '@/components/nawayef-east-hills/NawayefHighlights';
import NawayefAboutVideo from '@/components/nawayef-east-hills/NawayefAboutVideo';
import NawayefAmenities from '@/components/nawayef-east-hills/NawayefAmenities';
import NawayefGallery from '@/components/nawayef-east-hills/NawayefGallery';
import NawayefFloorPlans from '@/components/nawayef-east-hills/NawayefFloorPlans';
import NawayefArticle from '@/components/nawayef-east-hills/NawayefArticle';
import NawayefPaymentPlan from '@/components/nawayef-east-hills/NawayefPaymentPlan';
import NawayefPaymentMethods from '@/components/nawayef-east-hills/NawayefPaymentMethods';
import NawayefMasterPlan from '@/components/nawayef-east-hills/NawayefMasterPlan';
import NawayefLocation from '@/components/nawayef-east-hills/NawayefLocation';
import NawayefFaq from '@/components/nawayef-east-hills/NawayefFaq';
import NawayefContact from '@/components/nawayef-east-hills/NawayefContact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ListPropertyModal from '@/components/ListPropertyModal';
import NawayefBrochureModal from '@/components/nawayef-east-hills/NawayefBrochureModal';

export default function NawayefEastHillsClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation Header */}
      <NawayefHeader
        onOpenListProperty={() => setListModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Hero Section with Slider & Call Back Form */}
      <NawayefHero onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <NawayefHighlights />

      {/* About & Video Showcase with solid brown half-backdrop */}
      <NawayefAboutVideo />

      {/* 8 Amenities Grid */}
      <NawayefAmenities />

      {/* Gallery with Carousel Slider, Left Aligned Text & Lightbox */}
      <NawayefGallery />

      {/* Floor Plans Interactive Section with 2-line desc & single-line tabs */}
      <NawayefFloorPlans onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* Detailed Project Article & Specifications */}
      <NawayefArticle />

      {/* Payment Plan with List/Grid Toggle */}
      <NawayefPaymentPlan onOpenBrochure={() => setBrochureModalOpen(true)} />

      {/* Accepted Payment Methods */}
      <NawayefPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <NawayefMasterPlan />

      {/* Location & Attractions (Map + Accordion) */}
      <NawayefLocation />

      {/* Frequently Asked Questions */}
      <NawayefFaq />

      {/* Secondary Contact & Request Call Back */}
      <NawayefContact />

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
      <NawayefBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
