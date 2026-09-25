'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Bed, Bath, Car, Maximize2, ChevronLeft, ChevronRight, ChevronDown, X, ZoomIn } from 'lucide-react';
import styles from './NaseemFloorPlans.module.css';

interface FloorPlan {
  id: string;
  num: number;
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  totalAreaFormatted: string;
  description: string;
  image: string;
}

const floorPlansData: FloorPlan[] = [
  {
    id: '4bed',
    num: 1,
    name: '4 Bedroom Villa',
    bedrooms: 4,
    bathrooms: 8,
    parking: 4,
    area: 8073,
    totalAreaFormatted: '8073',
    description:
      'Explore the 4-bedroom villa floor plan at Al Naseem Villas, a spacious luxury home in Abu Dhabi featuring elegant interiors and private outdoor space.',
    image: '/images/al-naseem-villas/floor-4bed.webp',
  },
  {
    id: '5bed',
    num: 2,
    name: '5 Bedroom Villa',
    bedrooms: 5,
    bathrooms: 9,
    parking: 4,
    area: 10010,
    totalAreaFormatted: '10010',
    description:
      'Explore the 5-bedroom villa floor plan at Al Naseem Villas, an expansive luxury layout with private pool, landscaped gardens, and open-plan living in Abu Dhabi.',
    image: '/images/al-naseem-villas/floor-5bed.webp',
  },
  {
    id: '6bed',
    num: 3,
    name: '6 Bedroom Villa',
    bedrooms: 6,
    bathrooms: 10,
    parking: 4,
    area: 10010,
    totalAreaFormatted: '10010',
    description:
      'Explore the 6-bedroom grand estate villa floor plan at Al Naseem Villas, showcasing sprawling interiors, lavish master suites, and magnificent outdoor entertaining spaces.',
    image: '/images/al-naseem-villas/floor-6bed.webp',
  },
];

interface NaseemFloorPlansProps {
  onOpenBrochure?: () => void;
}

export default function NaseemFloorPlans({ onOpenBrochure }: NaseemFloorPlansProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const activePlan = floorPlansData[selectedIndex] || floorPlansData[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev <= 0 ? floorPlansData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev >= floorPlansData.length - 1 ? 0 : prev + 1));
  };

  const filteredPlans = useMemo(() => {
    if (!searchTerm.trim()) return floorPlansData;
    const q = searchTerm.toLowerCase();
    return floorPlansData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.bedrooms.toString().includes(q) ||
        p.area.toString().includes(q)
    );
  }, [searchTerm]);

  return (
    <section className={styles.floorPlansSection} id="floor">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Floor Plan</h2>
          <p className={styles.subtitle}>
            <strong>Al Naseem Villas</strong> offer spacious 4 to 6 bedroom layouts thoughtfully designed across two levels, featuring open-plan living and dining areas, en-suite bedrooms, a private garden, a maid’s room, and dedicated parking. Select layouts also include family lounges, terraces, and a private pool, combining functionality with elegant indoor or outdoor living.
          </p>
        </div>

        {/* Featured Showcase Box with Carousel Arrows */}
        <div className={styles.showcaseWrapper}>
          {/* Left Arrow Button */}
          <button
            type="button"
            className={`${styles.navArrow} ${styles.prevArrow}`}
            onClick={handlePrev}
            aria-label="Previous Floor Plan"
          >
            <ChevronLeft size={22} />
          </button>

          <div className={styles.showcaseContent}>
            {/* Left Column: Image Blueprint */}
            <div
              className={styles.imageCol}
              onClick={() => setZoomImage(activePlan.image)}
              title="Click to zoom in"
            >
              <div className={styles.imageContainer}>
                <Image
                  src={activePlan.image}
                  alt={activePlan.name}
                  width={680}
                  height={440}
                  className={styles.planImg}
                  priority
                />
                <div className={styles.zoomHint}>
                  <ZoomIn size={16} />
                  <span>Click to zoom</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Description & Specs */}
            <div className={styles.infoCol}>
              <h3 className={styles.villaTitle}>{activePlan.name}</h3>
              <p className={styles.villaDesc}>{activePlan.description}</p>

              <div className={styles.specsList}>
                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Bed size={20} className={styles.specIcon} />
                    <span className={styles.specLabel}>Bedroom</span>
                  </div>
                  <span className={styles.specVal}>{activePlan.bedrooms}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Bath size={20} className={styles.specIcon} />
                    <span className={styles.specLabel}>Bathrooms</span>
                  </div>
                  <span className={styles.specVal}>{activePlan.bathrooms}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Car size={20} className={styles.specIcon} />
                    <span className={styles.specLabel}>Parking</span>
                  </div>
                  <span className={styles.specVal}>{activePlan.parking}</span>
                </div>

                <div className={styles.specRow}>
                  <div className={styles.specLeft}>
                    <Maximize2 size={20} className={styles.specIcon} />
                    <span className={styles.specLabel}>Total Area (sqft)</span>
                  </div>
                  <span className={styles.specVal}>{activePlan.totalAreaFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className={`${styles.navArrow} ${styles.nextArrow}`}
            onClick={handleNext}
            aria-label="Next Floor Plan"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Centered Download Floor Plan CTA */}
        <div className={styles.ctaRow}>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={onOpenBrochure}
          >
            Download Floor Plan
          </button>
        </div>

        {/* Search Input Bar */}
        <div className={styles.tableControls}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search floor plan title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Floor Plan List Table */}
        <div className={styles.tableCard}>
          <table className={styles.plansTable}>
            <thead>
              <tr>
                <th className={styles.thNum}>#</th>
                <th className={styles.thImage}>Image</th>
                <th className={styles.thTitle}>Title</th>
                <th className={styles.thBeds}>Bedrooms</th>
                <th className={styles.thParking}>Parking</th>
                <th className={styles.thArea}>Area</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan) => {
                const isSelected = plan.id === activePlan.id;
                return (
                  <tr
                    key={plan.id}
                    className={`${styles.tableRow} ${isSelected ? styles.rowSelected : ''}`}
                    onClick={() => {
                      const idx = floorPlansData.findIndex((p) => p.id === plan.id);
                      if (idx !== -1) setSelectedIndex(idx);
                    }}
                  >
                    <td className={styles.tdNum}>{plan.num}</td>
                    <td className={styles.tdImage}>
                      <div
                        className={styles.thumbWrapper}
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomImage(plan.image);
                        }}
                        title="Click to view image"
                      >
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          width={65}
                          height={45}
                          className={styles.thumbImg}
                        />
                      </div>
                    </td>
                    <td className={styles.tdTitle}>
                      <span className={styles.planNameText}>{plan.name}</span>
                      <ChevronDown size={15} className={styles.chevronIcon} />
                    </td>
                    <td className={styles.tdBeds}>{plan.bedrooms}</td>
                    <td className={styles.tdParking}>{plan.parking}</td>
                    <td className={styles.tdArea}>{plan.totalAreaFormatted}</td>
                  </tr>
                );
              })}
              {filteredPlans.length === 0 && (
                <tr>
                  <td colSpan={6} className={styles.noResults}>
                    No floor plans match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div className={styles.modalOverlay} onClick={() => setZoomImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setZoomImage(null)}
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={zoomImage}
                alt="Floor Plan Detailed Blueprint"
                width={1200}
                height={850}
                className={styles.modalImg}
              />
            </div>
            <p className={styles.modalCaption}>{activePlan.name} Layout Diagram</p>
          </div>
        </div>
      )}
    </section>
  );
}
