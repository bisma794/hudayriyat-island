"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bed, Bath, Car, Maximize2, ZoomIn, ChevronDown, X } from "lucide-react";
import styles from "./ParkViewsFloorPlans.module.css";

interface ParkViewsFloorPlansProps {
  onOpenModal?: () => void;
}

const floorPlansData = [
  {
    id: 1,
    title: "1 Bedroom Apartment – Type A",
    bedrooms: 1,
    bathrooms: 2,
    parking: 1,
    area: "1090",
    image: "/images/nawayef-park-views/asset_48.png",
    description:
      "Elegant 1 bedroom apartment at Nawayef Park Views, Hudayriyat Island, featuring a spacious living/dining area, modern kitchen, private balcony, and laundry area designed for serene island living.",
  },
  {
    id: 2,
    title: "2 Bedroom Apartment – Type A",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "1752",
    image: "/images/nawayef-park-views/asset_49.png",
    description:
      "Spacious 2 bedroom apartment at Nawayef Park Views on Hudayriyat Island, featuring a large living/dining area, modern kitchen, two en-suite bedrooms, maid’s room, and a private balcony.",
  },
  {
    id: 3,
    title: "3 Bedroom Apartment – Type A",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "2503",
    image: "/images/nawayef-park-views/asset_50.png",
    description:
      "Elegant 3-bedroom apartment offering spacious interiors with separate living and dining areas, an open-plan kitchen, en-suite bedrooms, maid’s quarters, and a generous balcony with serene park or sea views.",
  },
  {
    id: 4,
    title: "4 Bedroom Apartment – Type A",
    bedrooms: 4,
    bathrooms: 6,
    parking: 3,
    area: "5332",
    image: "/images/nawayef-park-views/asset_51.png",
    description:
      "Ultra-spacious 4 bedroom apartment featuring a closed kitchen, show kitchen, expansive living and dining areas, en-suite bedrooms, maid’s quarters, multiple balconies, and dedicated utility spaces ideal for luxury coastal living.",
  },
];

export default function ParkViewsFloorPlans({ onOpenModal }: ParkViewsFloorPlansProps) {
  const [activePlan, setActivePlan] = useState(floorPlansData[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const filteredPlans = floorPlansData.filter((plan) =>
    plan.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const toggleRow = (id: number) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <section id="floor" className={styles.floorSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Floor Plan</h2>

          {/* Plan Selector Buttons */}
          <div className={styles.tabNav}>
            {floorPlansData.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`${styles.tabBtn} ${
                  activePlan.id === plan.id ? styles.tabActive : ""
                }`}
                onClick={() => setActivePlan(plan)}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Plan Showcase Card */}
        <div className={styles.showcaseCard}>
          <div className={styles.showcaseGrid}>
            {/* Left: Image with Zoom badge */}
            <div
              className={styles.imageCol}
              onClick={() => setZoomImage(activePlan.image)}
            >
              <div className={styles.planImageWrapper}>
                <Image
                  src={activePlan.image}
                  alt={activePlan.title}
                  fill
                  className={styles.planImage}
                />
              </div>
              <div className={styles.zoomBadge}>
                <ZoomIn size={14} />
                <span>Click to expand</span>
              </div>
            </div>

            {/* Right: Specifications & Details */}
            <div className={styles.detailsCol}>
              <h3 className={styles.planTitle}>{activePlan.title}</h3>
              <p className={styles.planDesc}>{activePlan.description}</p>

              <div className={styles.specsList}>
                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Bed size={18} className={styles.specIcon} />
                    <span>Bedroom</span>
                  </div>
                  <span className={styles.specValue}>{activePlan.bedrooms}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Bath size={18} className={styles.specIcon} />
                    <span>Bathrooms</span>
                  </div>
                  <span className={styles.specValue}>{activePlan.bathrooms}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Car size={18} className={styles.specIcon} />
                    <span>Parking</span>
                  </div>
                  <span className={styles.specValue}>{activePlan.parking}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Maximize2 size={18} className={styles.specIcon} />
                    <span>Total Area (sqft)</span>
                  </div>
                  <span className={styles.specValue}>{activePlan.area}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plan List Table with Search & Accordion */}
        <div className={styles.tableToolbar}>
          <div className={styles.searchBox}>
            <input
              type="search"
              placeholder="Search floor plan title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <div style={{ overflowX: "auto" }}>
            <table className={styles.listTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Bedrooms</th>
                  <th>Parking</th>
                  <th>Area</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlans.map((plan, index) => {
                  const isExpanded = expandedRow === plan.id;
                  return (
                    <React.Fragment key={plan.id}>
                      <tr
                        className={styles.listRow}
                        onClick={() => toggleRow(plan.id)}
                      >
                        <td>{index + 1}</td>
                        <td>
                          <Image
                            src={plan.image}
                            alt={plan.title}
                            width={64}
                            height={48}
                            className={styles.thumbImg}
                          />
                        </td>
                        <td>
                          <span className={styles.expandTitle}>
                            <strong>{plan.title}</strong>
                            <ChevronDown
                              size={16}
                              className={`${styles.expandIcon} ${
                                isExpanded ? styles.expandIconRotated : ""
                              }`}
                            />
                          </span>
                        </td>
                        <td>{plan.bedrooms}</td>
                        <td>{plan.parking}</td>
                        <td>{plan.area}</td>
                      </tr>

                      {isExpanded && (
                        <tr className={styles.detailRow}>
                          <td colSpan={6}>
                            <div className={styles.detailCard}>
                              <img
                                src={plan.image}
                                alt={plan.title}
                                className={styles.detailCardImg}
                              />
                              <div className={styles.detailInfo}>
                                <h4>{plan.title}</h4>
                                <div className={styles.detailDesc}>
                                  {plan.description}
                                </div>
                                <div className={styles.detailGrid}>
                                  <div>
                                    <strong>Bedrooms:</strong> {plan.bedrooms}
                                  </div>
                                  <div>
                                    <strong>Bathrooms:</strong> {plan.bathrooms}
                                  </div>
                                  <div>
                                    <strong>Parking:</strong> {plan.parking}
                                  </div>
                                  <div>
                                    <strong>Area:</strong> {plan.area} sqft
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={onOpenModal}
          >
            Download Floor Plan
          </button>
        </div>
      </div>

      {/* Lightbox Zoom */}
      {zoomImage && (
        <div className={styles.lightbox} onClick={() => setZoomImage(null)}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setZoomImage(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <div className={styles.lightboxImgWrapper}>
              <Image
                src={zoomImage}
                alt="Enlarged floor plan"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
