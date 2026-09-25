"use client";

import React, { useState } from "react";
import WadeemHeader from "@/components/wadeem/WadeemHeader";
import WadeemHero from "@/components/wadeem/WadeemHero";
import WadeemHighlights from "@/components/wadeem/WadeemHighlights";
import WadeemAboutVideo from "@/components/wadeem/WadeemAboutVideo";
import WadeemAmenities from "@/components/wadeem/WadeemAmenities";
import WadeemGallery from "@/components/wadeem/WadeemGallery";
import WadeemArticle from "@/components/wadeem/WadeemArticle";
import WadeemPaymentPlan from "@/components/wadeem/WadeemPaymentPlan";
import WadeemPaymentMethods from "@/components/wadeem/WadeemPaymentMethods";
import WadeemMasterPlan from "@/components/wadeem/WadeemMasterPlan";
import WadeemLocation from "@/components/wadeem/WadeemLocation";
import WadeemFaq from "@/components/wadeem/WadeemFaq";
import WadeemContact from "@/components/wadeem/WadeemContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import WadeemBrochureModal from "@/components/wadeem/WadeemBrochureModal";

export default function WadeemGardensPage() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Navigation Header */}
      <WadeemHeader onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Section with Slider & Call Back Form */}
      <WadeemHero onOpenBrochureModal={() => setBrochureModalOpen(true)} />

      {/* 6 Quick Project Highlights */}
      <WadeemHighlights />

      {/* About & Video Showcase */}
      <WadeemAboutVideo />

      {/* 8 Amenities Grid */}
      <WadeemAmenities />

      {/* Gallery with Tabs & Lightbox */}
      <WadeemGallery />

      {/* Detailed Project Article & Specifications */}
      <WadeemArticle />

      {/* Payment Plan with List/Grid Toggle */}
      <WadeemPaymentPlan />

      {/* Accepted Payment Methods */}
      <WadeemPaymentMethods />

      {/* Master Plan with Zoom Lightbox */}
      <WadeemMasterPlan />

      {/* Location & Attractions (Map + Accordion) */}
      <WadeemLocation />

      {/* Frequently Asked Questions */}
      <WadeemFaq />

      {/* Secondary Contact & Request Call Back */}
      <WadeemContact />

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
      <WadeemBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
