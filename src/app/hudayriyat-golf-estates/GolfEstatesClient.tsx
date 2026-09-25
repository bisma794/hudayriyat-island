"use client";

import React, { useState } from "react";
import GolfHeader from "@/components/golf-estates/GolfHeader";
import GolfHero from "@/components/golf-estates/GolfHero";
import GolfHighlights from "@/components/golf-estates/GolfHighlights";
import GolfAboutVideo from "@/components/golf-estates/GolfAboutVideo";
import GolfAmenities from "@/components/golf-estates/GolfAmenities";
import GolfGallery from "@/components/golf-estates/GolfGallery";
import GolfFloorPlans from "@/components/golf-estates/GolfFloorPlans";
import GolfArticle from "@/components/golf-estates/GolfArticle";
import GolfPaymentPlan from "@/components/golf-estates/GolfPaymentPlan";
import GolfPaymentMethods from "@/components/golf-estates/GolfPaymentMethods";
import GolfMasterPlan from "@/components/golf-estates/GolfMasterPlan";
import GolfLocation from "@/components/golf-estates/GolfLocation";
import GolfLandmarks from "@/components/golf-estates/GolfLandmarks";
import GolfFaq from "@/components/golf-estates/GolfFaq";
import GolfContact from "@/components/golf-estates/GolfContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import GolfBrochureModal from "@/components/golf-estates/GolfBrochureModal";

export default function GolfEstatesClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Navigation Header */}
      <GolfHeader onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Section with Slider & Call Back Form */}
      <GolfHero onOpenBrochureModal={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <GolfHighlights />

      {/* About & Video Showcase */}
      <GolfAboutVideo />

      {/* 8 Amenities Grid */}
      <GolfAmenities />

      {/* Gallery with Tabs & Lightbox */}
      <GolfGallery />

      {/* Floor Plans Interactive Section */}
      <GolfFloorPlans onOpenBrochureModal={() => setBrochureModalOpen(true)} />

      {/* Detailed Project Article & Specifications */}
      <GolfArticle />

      {/* Payment Plan with List/Grid Toggle */}
      <GolfPaymentPlan />

      {/* Accepted Payment Methods */}
      <GolfPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <GolfMasterPlan />

      {/* Location & Attractions (Map + Accordion) */}
      <GolfLocation />

      {/* Nearby Landmarks (Ferrari World, Airport, Louvre) */}
      <GolfLandmarks />

      {/* Frequently Asked Questions */}
      <GolfFaq />

      {/* Secondary Contact & Request Call Back */}
      <GolfContact />

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
      <GolfBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
