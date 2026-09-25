"use client";

import React, { useState } from "react";
import BashayerHeader from "@/components/bashayer-residences/BashayerHeader";
import BashayerHero from "@/components/bashayer-residences/BashayerHero";
import BashayerHighlights from "@/components/bashayer-residences/BashayerHighlights";
import BashayerAboutVideo from "@/components/bashayer-residences/BashayerAboutVideo";
import BashayerAmenities from "@/components/bashayer-residences/BashayerAmenities";
import BashayerGallery from "@/components/bashayer-residences/BashayerGallery";
import BashayerFloorPlans from "@/components/bashayer-residences/BashayerFloorPlans";
import BashayerArticle from "@/components/bashayer-residences/BashayerArticle";
import BashayerPaymentPlan from "@/components/bashayer-residences/BashayerPaymentPlan";
import BashayerPaymentMethods from "@/components/bashayer-residences/BashayerPaymentMethods";
import BashayerMasterPlan from "@/components/bashayer-residences/BashayerMasterPlan";
import BashayerLocation from "@/components/bashayer-residences/BashayerLocation";
import BashayerFaq from "@/components/bashayer-residences/BashayerFaq";
import BashayerContact from "@/components/bashayer-residences/BashayerContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import BashayerBrochureModal from "@/components/bashayer-residences/BashayerBrochureModal";

export default function BashayerResidencesClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Navigation Header */}
      <BashayerHeader onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Section with Slider & Call Back Form */}
      <BashayerHero onOpenBrochureModal={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <BashayerHighlights />

      {/* About & Video Showcase */}
      <BashayerAboutVideo />

      {/* 8 Amenities Grid */}
      <BashayerAmenities />

      {/* Gallery with Tabs & Lightbox */}
      <BashayerGallery />

      {/* Floor Plans Interactive Section */}
      <BashayerFloorPlans onOpenBrochureModal={() => setBrochureModalOpen(true)} />

      {/* Detailed Project Article & Specifications */}
      <BashayerArticle />

      {/* Payment Plan with List/Grid Toggle */}
      <BashayerPaymentPlan />

      {/* Accepted Payment Methods */}
      <BashayerPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <BashayerMasterPlan />

      {/* Location & Attractions (Map + Accordion) */}
      <BashayerLocation />

      {/* Frequently Asked Questions */}
      <BashayerFaq />

      {/* Secondary Contact & Request Call Back */}
      <BashayerContact />

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
      <BashayerBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
