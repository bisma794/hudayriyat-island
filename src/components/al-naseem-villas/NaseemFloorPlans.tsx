'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bed, Bath, Car, Maximize2, Download, ZoomIn, X } from 'lucide-react';
import styles from './NaseemFloorPlans.module.css';

interface FloorPlan {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  totalArea: string;
  description: string;
  image: string;
}

const floorPlans: FloorPlan[] = [
  {
    id: '4bed',
    name: '4 Bedroom Villa',
    bedrooms: 4,
    bathrooms: 8,
    parking: 4,
    totalArea: '8,073 sqft',
    description:
      'Explore the 4-bedroom villa floor plan at Al Naseem Villas, a spacious luxury home in Abu Dhabi featuring elegant interiors, generous living areas, and private outdoor space.',
    image: '/images/al-naseem-villas/floor-4bed.webp',
  },
  {
    id: '5bed',
    name: '5 Bedroom Villa',
    bedrooms: 5,
    bathrooms: 9,
    parking: 4,
    totalArea: '10,010 sqft',
    description:
      '5 bedroom villa layout at Al Naseem Villas ideal for families seeking a modern, spacious, and private villa with private pool, garden, and panoramic terrace views in Abu Dhabi.',
    image: '/images/al-naseem-villas/floor-5bed.webp',
  },
  {
    id: '6bed',
    name: '6 Bedroom Villa',
    bedrooms: 6,
    bathrooms: 10,
    parking: 4,
    totalArea: '10,010 sqft',
    description:
      '6-bedroom floor plan of Al Naseem Villas offering grand living spaces, lavish suites, premium finishes, and luxurious waterfront island living in Abu Dhabi.',
    image: '/images/al-naseem-villas/floor-6bed.webp',
  },
];

interface NaseemFloorPlansProps {
  onOpenBrochure?: () => void;
}

export default function NaseemFloorPlans({ onOpenBrochure }: NaseemFloorPlansProps) {
  const [activePlan, setActivePlan] = useState<FloorPlan>(floorPlans[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.floorPlansSection} id="floor">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Floor Plan</h2>
          <p className={styles.subtitle}>
            <strong>Al Naseem Villas</strong> offer spacious 4 to 6 bedroom layouts thoughtfully designed across two levels, featuring open-plan living and dining areas, en-suite bedrooms, a private garden, a maid&rsquo;s room, and dedicated parking. Select layouts also include family lounges, terraces, and a private pool, combining functionality with elegant indoor or outdoor living.
          </p>

          <div className={styles.tabNav}>
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`${styles.tabBtn} ${activePlan.id === plan.id ? styles.tabActive : ''}`}
                onClick={() => setActivePlan(plan)}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper} onClick={() => setIsZoomOpen(true)}>
              <Image
                src={activePlan.image}
                alt={activePlan.name}
                width={700}
                height={500}
                className={styles.planImg}
                priority
              />
              <button
                type="button"
                className={styles.zoomBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomOpen(true);
                }}
                aria-label="Zoom in"
              >
                <ZoomIn size={18} />
                <span>Zoom In</span>
              </button>
            </div>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.planTitle}>{activePlan.name}</h3>
            <p className={styles.planDesc}>{activePlan.description}</p>

            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <div className={styles.specIcon}>
                  <Bed size={18} />
                </div>
                <div className={styles.specDetails}>
                  <span className={styles.specLabel}>Bedrooms</span>
                  <span className={styles.specVal}>{activePlan.bedrooms}</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <div className={styles.specIcon}>
                  <Bath size={18} />
                </div>
                <div className={styles.specDetails}>
                  <span className={styles.specLabel}>Bathrooms</span>
                  <span className={styles.specVal}>{activePlan.bathrooms}</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <div className={styles.specIcon}>
                  <Car size={18} />
                </div>
                <div className={styles.specDetails}>
                  <span className={styles.specLabel}>Parking</span>
                  <span className={styles.specVal}>{activePlan.parking}</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <div className={styles.specIcon}>
                  <Maximize2 size={18} />
                </div>
                <div className={styles.specDetails}>
                  <span className={styles.specLabel}>Total Area (sqft)</span>
                  <span className={styles.specVal}>{activePlan.totalArea}</span>
                </div>
              </div>
            </div>

            <div className={styles.btnRow}>
              <a
                href="/images/al-naseem-villas/al-naseem-floor-plan.pdf"
                download="Al-Naseem-Villas-Floor-Plans.pdf"
                className={styles.downloadBtn}
              >
                <Download size={18} />
                <span>Download Floor Plan PDF</span>
              </a>

              {onOpenBrochure && (
                <button
                  type="button"
                  className={styles.inquireBtn}
                  onClick={onOpenBrochure}
                >
                  Inquire For Availability
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom */}
      {isZoomOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsZoomOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={activePlan.image}
                alt={activePlan.name}
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
