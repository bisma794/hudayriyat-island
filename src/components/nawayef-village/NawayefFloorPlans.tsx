'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Bed, Bath, Car, Maximize2, ChevronLeft, ChevronRight, ChevronDown, X, ZoomIn } from 'lucide-react';
import styles from './NawayefFloorPlans.module.css';

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
    id: '3bed',
    num: 1,
    name: '3 Bedroom Townhouse',
    bedrooms: 3,
    bathrooms: 6,
    parking: 2,
    area: 2669,
    totalAreaFormatted: '2669',
    description:
      'Spanning 2,669.45 sqft, this 3 bedroom townhouse features ensuite bathrooms, a study, maid’s room, and 2 parking spaces offering modern, upscale living in Nawayef Village.',
    image: '/images/nawayef-village/asset_49.png',
  },
  {
    id: '4bed',
    num: 2,
    name: '4 Bedroom Townhouse',
    bedrooms: 4,
    bathrooms: 8,
    parking: 3,
    area: 2669,
    totalAreaFormatted: '2669',
    description:
      'Discover a spacious 4 bedroom townhouse featuring ensuite bedrooms, a guest suite, maid’s room, study/family area, and 2 parking spaces designed for modern island living.',
    image: '/images/nawayef-village/asset_50.png',
  },
  {
    id: '5bed',
    num: 3,
    name: '5 Bedroom Twin Villa',
    bedrooms: 5,
    bathrooms: 8,
    parking: 3,
    area: 2669,
    totalAreaFormatted: '2669',
    description:
      'A spacious 5 bedroom twin villa spanning 3,670.50 sqft with ensuite rooms, guest and maid’s quarters, two kitchens, family lounges, and a rooftop gym with plunge pool and sauna ideal for luxury island living in Nawayef Village.',
    image: '/images/nawayef-village/asset_51.png',
  },
];

interface NawayefFloorPlansProps {
  onOpenBrochure?: () => void;
}

export default function NawayefFloorPlans({ onOpenBrochure }: NawayefFloorPlansProps) {
  // Default to 4 Bedroom Townhouse (index 1) matching the user's screenshot
  const [selectedIndex, setSelectedIndex] = useState(1);
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
          <h2 className={styles.title}>Nawayef Village Floor Plan</h2>
          <p className={styles.subtitle}>
            The floor plans at <strong>Nawayef Village</strong> are thoughtfully designed to offer functionality, flexibility, and comfort across all unit types. Ranging from <strong>3 to 5 bedroom townhouses</strong> and twin villas, each home features well zoned living spaces that cater to modern family needs.
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
            {/* Left Column: Blueprint Image */}
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
                          width={72}
                          height={54}
                          className={styles.thumbImg}
                        />
                      </div>
                    </td>
                    <td className={styles.tdTitle}>
                      <span className={styles.titleText}>{plan.name}</span>
                      <ChevronDown
                        size={16}
                        className={`${styles.expandIcon} ${isSelected ? styles.expandActive : ''}`}
                      />
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
                    No floor plans match your search &ldquo;{searchTerm}&rdquo;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Image Zoom Modal Lightbox */}
        {zoomImage && (
          <div className={styles.modalOverlay} onClick={() => setZoomImage(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setZoomImage(null)}
                aria-label="Close Preview"
              >
                <X size={24} />
              </button>
              <div className={styles.modalImageWrap}>
                <Image
                  src={zoomImage}
                  alt="Floor Plan Full Preview"
                  width={1200}
                  height={800}
                  className={styles.modalImage}
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
