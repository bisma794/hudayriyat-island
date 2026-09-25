'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './NawayefFloorPlans.module.css';

interface FloorPlanData {
  id: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  totalArea: string;
  levels: string;
  parking: string;
  features: string;
  image: string;
}

const floorPlansData: FloorPlanData[] = [
  {
    id: '6-bed',
    tabLabel: '6 Bed Mansions',
    title: 'Nawayef Mansions – 6 Bedrooms',
    tagline: 'Multi-Level Ultra-Luxury Estate',
    description:
      'Nawayef Mansions are thoughtfully designed across the basement, ground, first, and second floors, offering a refined blend of luxury, comfort, and functionality. The layout features a grand majlis, guest suite, study, formal living and dining areas, office, pantries, and dedicated quarters for maids and drivers.',
    totalArea: '20,107 sq. ft.',
    levels: 'Basement + G + 2 Floors',
    parking: '6 Parking Spaces',
    features: '6 Beds | 9 Baths',
    image: '/images/nawayef-east-hills/floor-6bed.png',
  },
  {
    id: '7-bed',
    tabLabel: '7 Bed Heights',
    title: 'Nawayef Heights – 7 Bedrooms Type A',
    tagline: 'Panoramic Elevated Luxury',
    description:
      'Nawayef Heights – 7 Bedrooms Type A offers a spacious multi-level layout across the basement, ground, first, and second floors. The residence combines elegant design with practical living spaces, featuring a grand majlis, guest suite, study, formal living and dining areas, office, pantries, and dedicated maid’s and driver’s quarters.',
    totalArea: '31,506 sq. ft.',
    levels: 'Basement + G + 2 Floors',
    parking: '6 Parking Spaces',
    features: '7 Beds | 11 Baths',
    image: '/images/nawayef-east-hills/floor-7bed.png',
  },
  {
    id: '8-bed',
    tabLabel: '8 Bed Mansions',
    title: 'Nawayef Mansions – 8 Bedrooms Type 01',
    tagline: 'Grand Flagship Hilltop Estate',
    description:
      'Nawayef Mansions – 8 Bedrooms Type 01 is designed across the basement, ground, first, and second floors, offering generous spaces with a refined and practical layout. The residence includes a grand majlis, guest suite, study, formal living and dining areas, office, pantries, and dedicated quarters for maids and drivers.',
    totalArea: '31,835 sq. ft.',
    levels: 'Basement + G + 2 Floors',
    parking: '6 Parking Spaces',
    features: '8 Beds | 12 Baths',
    image: '/images/nawayef-east-hills/floor-8bed.png',
  },
];

interface FloorPlansProps {
  onOpenBrochure?: () => void;
}

export default function NawayefFloorPlans({ onOpenBrochure }: FloorPlansProps) {
  const [activePlanId, setActivePlanId] = useState('6-bed');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentPlan = floorPlansData.find((p) => p.id === activePlanId) || floorPlansData[0];

  return (
    <section className={styles.floorPlansSection} id="floor">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef East Hills Floor Plans</h2>
          <p className={styles.subtitle}>
            Explore the thoughtfully planned layouts at Nawayef East Hills on Hudayriyat Island, Abu Dhabi. The collection includes four- and five-bedroom Homes, five- to seven-bedroom Heights, and six- to eight-bedroom Mansions. Each residence is designed with spacious interiors, private outdoor areas, swimming pools, terraces, gardens, and majlis spaces.
          </p>

          <div className={styles.tabsWrapper}>
            {floorPlansData.map((plan) => (
              <button
                key={plan.id}
                className={`${styles.tabBtn} ${plan.id === activePlanId ? styles.tabActive : ''}`}
                onClick={() => setActivePlanId(plan.id)}
              >
                {plan.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planGrid}>
            <div
              className={styles.imageCol}
              onClick={() => setLightboxOpen(true)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={currentPlan.image}
                  alt={currentPlan.title}
                  fill
                  className={styles.planImage}
                />
              </div>
              <div className={styles.zoomHint}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Click to Zoom
              </div>
            </div>

            <div className={styles.specsCol}>
              <h3 className={styles.planName}>{currentPlan.title}</h3>
              <div className={styles.planTagline}>{currentPlan.tagline}</div>
              <p className={styles.planDesc}>{currentPlan.description}</p>

              <div className={styles.specGrid}>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.specLabel}>Total Area</span>
                    <span className={styles.specVal}>{currentPlan.totalArea}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.specLabel}>Levels</span>
                    <span className={styles.specVal}>{currentPlan.levels}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="8" cy="12" r="2" />
                      <circle cx="16" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.specLabel}>Parking</span>
                    <span className={styles.specVal}>{currentPlan.parking}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.specLabel}>Features</span>
                    <span className={styles.specVal}>{currentPlan.features}</span>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button
                  type="button"
                  className={styles.downloadBtn}
                  onClick={onOpenBrochure}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  DOWNLOAD FLOOR PLANS
                </button>
                <button
                  type="button"
                  className={styles.zoomBtn}
                  onClick={() => setLightboxOpen(true)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  View Large
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxOpen(false)}>
          <button className={styles.closeBtn} onClick={() => setLightboxOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPlan.image}
              alt={currentPlan.title}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
