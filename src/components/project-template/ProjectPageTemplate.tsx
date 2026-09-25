'use client';

import React, { useState } from 'react';
import { ProjectData } from './ProjectTypes';
import ProjectHeader from './ProjectHeader';
import ProjectHero from './ProjectHero';
import ProjectHighlights from './ProjectHighlights';
import ProjectAbout from './ProjectAbout';
import ProjectAmenities from './ProjectAmenities';
import ProjectGallery from './ProjectGallery';
import ProjectFloorPlans from './ProjectFloorPlans';
import ProjectArticle from './ProjectArticle';
import ProjectPaymentPlan from './ProjectPaymentPlan';
import ProjectPaymentMethods from './ProjectPaymentMethods';
import ProjectMasterPlan from './ProjectMasterPlan';
import ProjectLocation from './ProjectLocation';
import ProjectFaq from './ProjectFaq';
import ProjectContact from './ProjectContact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ListPropertyModal from '@/components/ListPropertyModal';
import ProjectBrochureModal from './ProjectBrochureModal';

interface ProjectPageTemplateProps {
  data: ProjectData;
}

export default function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* 1. Header with full community navigation */}
      <ProjectHeader
        currentSlug={data.slug}
        onOpenListProperty={() => setListModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* 2. Hero with luxury background and Call Back Form */}
      <ProjectHero
        badge={data.badge}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        freeholdTag={data.freeholdTag}
        heroSlides={data.heroSlides}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* 3. 6 Quick Project Highlights */}
      <ProjectHighlights highlights={data.highlights} />

      {/* 4. About & Media Showcase with solid brown half-backdrop */}
      <ProjectAbout
        slug={data.slug}
        name={data.name}
        title={data.aboutTitle}
        description={data.aboutDescription}
        mediaPlaceholder={data.aboutImage || (data.heroSlides && data.heroSlides[0])}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* 5. 8 Amenities Grid */}
      <ProjectAmenities
        name={data.name}
        subtitle={data.amenitiesSubtitle}
        amenities={data.amenities}
      />

      {/* 6. Gallery with Category Tabs, Carousel & Lightbox */}
      <ProjectGallery
        name={data.name}
        subtitle={data.gallerySubtitle}
        items={data.gallery}
      />

      {/* 7. Floor & Plot Plans Interactive Section */}
      <ProjectFloorPlans
        name={data.name}
        subtitle={data.floorPlansSubtitle}
        plans={data.floorPlans}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* 8. Detailed Project Article, Specs & Vision */}
      <ProjectArticle
        name={data.name}
        leadTitle={`${data.name}, Hudayriyat Island – Prestigious Coastal Living`}
        leadText={`Discover ${data.name}, an exclusive development offering spacious customized layouts, world-class infrastructure, and scenic waterfront living by Modon Properties.`}
        specs={data.articleOverview}
        highlights={data.articleHighlights}
        stylesList={data.architecturalStyles}
      />

      {/* 9. Payment Plan with List & Grid Toggles */}
      <ProjectPaymentPlan
        name={data.name}
        subtitle={data.paymentPlanSubtitle}
        schedule={data.paymentPlan}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* 10. Accepted Payment Methods */}
      <ProjectPaymentMethods name={data.name} />

      {/* 11. Master Plan with Zoom Lightbox */}
      <ProjectMasterPlan
        name={data.name}
        subtitle={data.masterPlanSubtitle}
        planImage={data.masterPlanImage}
      />

      {/* 12. Location & Attractions (Nearby and Similar Projects REMOVED per user request) */}
      <ProjectLocation
        name={data.name}
        subtitle={data.locationSubtitle}
        mapIframeUrl={data.mapIframeUrl}
        categories={data.locationCategories}
      />

      {/* 13. Frequently Asked Questions */}
      <ProjectFaq
        name={data.name}
        faqs={data.faqs}
      />

      {/* 14. Secondary Request Call Back Form */}
      <ProjectContact name={data.name} />

      {/* 15. Footer */}
      <Footer />

      {/* 16. Scroll-To-Top Button */}
      <ScrollToTop />

      {/* Modals */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />

      <ProjectBrochureModal
        name={data.name}
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </main>
  );
}
