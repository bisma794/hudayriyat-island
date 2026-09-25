"use client";

import React, { useState } from "react";
import ParkViewsHeader from "@/components/nawayef-park-views/ParkViewsHeader";
import ParkViewsHero from "@/components/nawayef-park-views/ParkViewsHero";
import ParkViewsHighlights from "@/components/nawayef-park-views/ParkViewsHighlights";
import ParkViewsAboutVideo from "@/components/nawayef-park-views/ParkViewsAboutVideo";
import ParkViewsAmenities from "@/components/nawayef-park-views/ParkViewsAmenities";
import ParkViewsGallery from "@/components/nawayef-park-views/ParkViewsGallery";
import ParkViewsArticle from "@/components/nawayef-park-views/ParkViewsArticle";
import ParkViewsPaymentPlan from "@/components/nawayef-park-views/ParkViewsPaymentPlan";
import ParkViewsPaymentMethods from "@/components/nawayef-park-views/ParkViewsPaymentMethods";
import ParkViewsFloorPlans from "@/components/nawayef-park-views/ParkViewsFloorPlans";
import ParkViewsMasterPlan from "@/components/nawayef-park-views/ParkViewsMasterPlan";
import ParkViewsLocation from "@/components/nawayef-park-views/ParkViewsLocation";
import ParkViewsFaq from "@/components/nawayef-park-views/ParkViewsFaq";
import ParkViewsContact from "@/components/nawayef-park-views/ParkViewsContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import ParkViewsBrochureModal from "@/components/nawayef-park-views/ParkViewsBrochureModal";

export default function NawayefParkViewsClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [downloadModal, setDownloadModal] = useState<{
    open: boolean;
    title: string;
    pdfUrl: string;
  }>({
    open: false,
    title: "FREE BROCHURE",
    pdfUrl: "/images/nawayef-park-views/asset_58.pdf",
  });

  const openDownloadModal = (title: string, pdfUrl: string) => {
    setDownloadModal({
      open: true,
      title,
      pdfUrl,
    });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Navigation Header */}
      <ParkViewsHeader onOpenListModal={() => setListModalOpen(true)} />

      {/* 1. Hero Page (Home page style) */}
      <ParkViewsHero
        onOpenBrochureModal={() =>
          openDownloadModal("FREE BROCHURE", "/images/nawayef-park-views/asset_58.pdf")
        }
      />

      {/* 2. Icon Bar (Theme matching home page / requested icons) */}
      <ParkViewsHighlights />

      {/* 3. Video Section */}
      <ParkViewsAboutVideo />

      {/* 4. Amenities */}
      <ParkViewsAmenities />

      {/* 5. Gallery (Sliding Gallery with Lightbox) */}
      <ParkViewsGallery />

      {/* 6. Mediterranean-Inspired Luxury in the Heart of Hudayriyat Island */}
      <ParkViewsArticle />

      {/* 7. Nawayef Park Views Payment Plan */}
      <ParkViewsPaymentPlan
        onOpenModal={() =>
          openDownloadModal("PAYMENT PLAN", "/images/nawayef-park-views/asset_59.pdf")
        }
      />

      {/* 8. Nawayef Park Views Payment Method */}
      <ParkViewsPaymentMethods />

      {/* 9. Nawayef Park Views Floor Plan */}
      <ParkViewsFloorPlans
        onOpenModal={() =>
          openDownloadModal("FLOOR PLAN", "/images/nawayef-park-views/asset_60.pdf")
        }
      />

      {/* 10. Nawayef Park Views Master Plan */}
      <ParkViewsMasterPlan
        onOpenModal={() =>
          openDownloadModal("MASTER PLAN", "/images/nawayef-park-views/asset_58.pdf")
        }
      />

      {/* 11. Nawayef Park Views Location & Attractions */}
      <ParkViewsLocation />

      {/* 12. FAQs */}
      <ParkViewsFaq />

      {/* Request Call Back Contact Section */}
      <ParkViewsContact />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop />

      {/* Modals */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />

      <ParkViewsBrochureModal
        isOpen={downloadModal.open}
        onClose={() =>
          setDownloadModal((prev) => ({ ...prev, open: false }))
        }
        title={downloadModal.title}
        pdfUrl={downloadModal.pdfUrl}
      />
    </main>
  );
}
