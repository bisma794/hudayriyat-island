"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bed, Bath, Car, Maximize2, Download, X } from "lucide-react";
import styles from "./GolfFloorPlans.module.css";

interface GolfFloorPlansProps {
  onOpenBrochureModal?: () => void;
}

const floorPlansData = [
  {
    id: "par-3",
    name: "Par 3 Villas",
    tagline: "3 Bedroom Practical Villa",
    bedrooms: "3",
    bathrooms: "4",
    parking: "2",
    totalArea: "2,464 sq. ft.",
    image: "/images/golf-estates/floor-par-3.jpg",
    description:
      "Par 3 Villas feature a practical 3-bedroom layout designed for comfortable family living. The ground floor includes spacious living and dining areas, a show kitchen, powder room, maid’s room with an attached bathroom, and a dedicated laundry area. Upstairs, the villa offers a master bedroom with a wardrobe and private bathroom, along with two additional bedrooms and a balcony.",
  },
  {
    id: "par-4",
    name: "Par 4 Villas",
    tagline: "4 Bedroom Golf Course Villa",
    bedrooms: "4",
    bathrooms: "5",
    parking: "2",
    totalArea: "4,004 sq. ft.",
    image: "/images/golf-estates/floor-par-4.jpg",
    description:
      "Par 4 Villas offer a well-planned 4-bedroom layout with spacious living areas and elegant Andalusian-inspired architecture. Designed for comfortable family living, the villas also feature uninterrupted views of the golf course, creating a peaceful and scenic residential setting.",
  },
];

export default function GolfFloorPlans({ onOpenBrochureModal }: GolfFloorPlansProps) {
  const [selectedPlanId, setSelectedPlanId] = useState("par-3");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const selectedPlan =
    floorPlansData.find((p) => p.id === selectedPlanId) || floorPlansData[0];

  return (
    <section id="floorplans" className={styles.floorPlansSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Floor Plans</h2>
          <p className={styles.subtitle}>
            Explore the well-planned floor layouts at Hudayriyat Golf Estates on Hudayriyat Island, Abu Dhabi, featuring spacious Par 3 and Par 4 villas designed for comfortable family living with golf course views.
          </p>

          {/* Unit Type Tabs */}
          <div className={styles.tabsWrapper}>
            {floorPlansData.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`${styles.tabBtn} ${
                  selectedPlanId === plan.id ? styles.tabActive : ""
                }`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Plan Details & Layout View */}
        <div className={styles.planCard}>
          <div className={styles.planGrid}>
            {/* Left: Interactive Specs */}
            <div className={styles.specsCol}>
              <h3 className={styles.planName}>{selectedPlan.name}</h3>
              <p className={styles.planTagline}>{selectedPlan.tagline}</p>
              <p className={styles.planDesc}>{selectedPlan.description}</p>

              {/* Spec Badges */}
              <div className={styles.specGrid}>
                <div className={styles.specItem}>
                  <Bed size={20} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Bedrooms</span>
                    <strong className={styles.specVal}>{selectedPlan.bedrooms}</strong>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Bath size={20} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Bathrooms</span>
                    <strong className={styles.specVal}>{selectedPlan.bathrooms}</strong>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Car size={20} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Parking</span>
                    <strong className={styles.specVal}>{selectedPlan.parking}</strong>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Maximize2 size={20} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Total Area</span>
                    <strong className={styles.specVal}>{selectedPlan.totalArea}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionRow}>
                <button
                  type="button"
                  className={styles.downloadBtn}
                  onClick={onOpenBrochureModal}
                >
                  <Download size={18} />
                  Download Floor Plan
                </button>
                <button
                  type="button"
                  className={styles.zoomBtn}
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <Maximize2 size={18} />
                  Enlarge Plan
                </button>
              </div>
            </div>

            {/* Right: Floor Plan Schematic Image */}
            <div
              className={styles.imageCol}
              onClick={() => setIsLightboxOpen(true)}
              title="Click to enlarge"
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={selectedPlan.image}
                  alt={`${selectedPlan.name} Floor Plan`}
                  fill
                  className={styles.planImage}
                />
                <div className={styles.zoomHint}>
                  <Maximize2 size={16} /> Click to Enlarge
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPlan.image}
              alt={`${selectedPlan.name} Layout`}
              width={1100}
              height={800}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
