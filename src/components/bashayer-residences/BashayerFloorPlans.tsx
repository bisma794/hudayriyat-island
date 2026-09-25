"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bed, Bath, Car, Maximize2, Download, ZoomIn, X } from "lucide-react";
import styles from "./BashayerFloorPlans.module.css";

interface FloorPlan {
  id: string;
  name: string;
  tagline: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  totalArea: string;
  description: string;
  image: string;
}

const floorPlans: FloorPlan[] = [
  {
    id: "1bed",
    name: "1 Bedroom Apartment",
    tagline: "Typical Layout",
    bedrooms: 1,
    bathrooms: 2,
    parking: 1,
    totalArea: "988 sq. ft.",
    description:
      "The 1-bedroom apartments at Bashayer Residences feature a spacious and practical layout with bright interiors, modern finishes, and scenic waterfront views. The design provides a comfortable living space with well-planned areas for everyday needs.",
    image: "/images/bashayer-residences/floor-1bed.jpg",
  },
  {
    id: "2bed",
    name: "2 Bedroom Apartment",
    tagline: "Typical Layout",
    bedrooms: 2,
    bathrooms: 3,
    parking: 1,
    totalArea: "1,447 sq. ft.",
    description:
      "The 2-bedroom apartments at Bashayer Residences offer a spacious and well-planned layout designed for comfortable modern living. The open-plan interiors, contemporary finishes, and waterfront views create a bright and welcoming residential environment.",
    image: "/images/bashayer-residences/floor-2bed.jpg",
  },
  {
    id: "3bed",
    name: "3 Bedroom Apartment",
    tagline: "Typical Layout",
    bedrooms: 3,
    bathrooms: 4,
    parking: 1,
    totalArea: "2,003 sq. ft.",
    description:
      "The 3-bedroom apartments at Bashayer Residences offer a spacious and practical layout designed for comfortable family living. Generous living areas, elegant interiors, and well-planned spaces provide a balanced combination of comfort and functionality, complemented by the island's waterfront setting.",
    image: "/images/bashayer-residences/floor-3bed.jpg",
  },
];

interface BashayerFloorPlansProps {
  onOpenBrochureModal?: () => void;
}

export default function BashayerFloorPlans({
  onOpenBrochureModal,
}: BashayerFloorPlansProps) {
  const [activePlan, setActivePlan] = useState<FloorPlan>(floorPlans[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.floorPlansSection} id="floorplans">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Floor Plans</h2>
          <p className={styles.subtitle}>
            Explore the thoughtfully planned layouts at Bashayer Residences on Hudayriyat Island, Abu Dhabi. The collection includes 1 to 4-bedroom apartments and penthouses, designed with spacious interiors, modern kitchens, smart-home features, premium appliances, and beautiful waterfront views.
          </p>

          <div className={styles.tabsWrapper}>
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`${styles.tabBtn} ${
                  activePlan.id === plan.id ? styles.tabActive : ""
                }`}
                onClick={() => setActivePlan(plan)}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planGrid}>
            {/* Left: Interactive Layout Image */}
            <div
              className={styles.imageCol}
              onClick={() => setIsZoomOpen(true)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={activePlan.image}
                  alt={`${activePlan.name} ${activePlan.tagline}`}
                  fill
                  className={styles.planImage}
                />
              </div>
              <div className={styles.zoomHint}>
                <ZoomIn size={14} /> Click to expand
              </div>
            </div>

            {/* Right: Specifications & Details */}
            <div className={styles.specsCol}>
              <h3 className={styles.planName}>{activePlan.name}</h3>
              <p className={styles.planTagline}>{activePlan.tagline}</p>
              <p className={styles.planDesc}>{activePlan.description}</p>

              <div className={styles.specGrid}>
                <div className={styles.specItem}>
                  <Bed size={22} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Bedrooms</span>
                    <span className={styles.specVal}>
                      {activePlan.bedrooms}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Bath size={22} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Bathrooms</span>
                    <span className={styles.specVal}>
                      {activePlan.bathrooms}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Car size={22} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Parking</span>
                    <span className={styles.specVal}>
                      {activePlan.parking}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Maximize2 size={22} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>Total Area</span>
                    <span className={styles.specVal}>
                      {activePlan.totalArea}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button
                  type="button"
                  className={styles.downloadBtn}
                  onClick={onOpenBrochureModal}
                >
                  <Download size={16} /> Download Floor Plan
                </button>
                <button
                  type="button"
                  className={styles.zoomBtn}
                  onClick={() => setIsZoomOpen(true)}
                >
                  <ZoomIn size={16} /> View Larger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isZoomOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePlan.image}
              alt={`${activePlan.name} ${activePlan.tagline}`}
              width={900}
              height={700}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
