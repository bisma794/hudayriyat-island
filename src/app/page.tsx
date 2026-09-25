"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectHighlights from "@/components/ProjectHighlights";
import Communities from "@/components/Communities";
import IslandOverview from "@/components/IslandOverview";
import InvestmentPotential from "@/components/InvestmentPotential";
import OverviewLocation from "@/components/OverviewLocation";
import PaymentMethods from "@/components/PaymentMethods";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";

export default function Home() {
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <main>
      {/* Sticky Header with non-redirecting Communities dropdown and language switch */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Section with continuous 20s Ken Burns zoom effect and lead capture */}
      <Hero />

      {/* Project Highlights 6 Quick Badges */}
      <ProjectHighlights />

      {/* 10 Communities Showcase (Static display per instruction) */}
      <Communities />

      {/* Master Plan Overview & Key Lifestyle Features */}
      <IslandOverview />

      {/* Investment Potential & Flexible Financing Options */}
      <InvestmentPotential />

      {/* Hudayriyat Island Overview and Location */}
      <OverviewLocation />

      {/* Accepted Payment Methods (Card, Cheque, Cash, Bitcoin) */}
      <PaymentMethods />

      {/* 8 Interactive Real Estate FAQs */}
      <FaqAccordion />

      {/* Secondary Request A Call Back / Contact Section */}
      <ContactSection />

      {/* Footer with social channels and copyright */}
      <Footer />

      {/* Scroll-To-Top Button (Only floating button per instruction) */}
      <ScrollToTop />

      {/* List Your Property Modal */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />
    </main>
  );
}
