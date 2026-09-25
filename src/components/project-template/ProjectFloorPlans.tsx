'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bed, Bath, Car, Maximize2, Download, ZoomIn, X } from 'lucide-react';
import { ProjectFloorPlan } from './ProjectTypes';
import styles from './ProjectFloorPlans.module.css';

interface ProjectFloorPlansProps {
  name: string;
  subtitle?: string;
  plans?: ProjectFloorPlan[];
  onOpenBrochure?: () => void;
}

export default function ProjectFloorPlans({
  name,
  subtitle = 'Thoughtfully designed layouts and plot specifications tailored for optimal space utilization, privacy, and coastal elegance.',
  plans = [],
  onOpenBrochure,
}: ProjectFloorPlansProps) {
  const defaultPlans: ProjectFloorPlan[] = (plans && plans.length > 0) ? plans : [
    {
      id: 'plot-type-a',
      name: 'Plot Layout Type A',
      bedrooms: '4 - 5 Beds',
      bathrooms: '5 - 6 Baths',
      parking: '2 - 3 Cars',
      totalArea: '8,500 sqft',
      description: `Spacious residential layout designed for bespoke custom villa architecture with private garden and swimming pool space.`,
      image: '/images/placeholder-plan.svg',
    },
    {
      id: 'plot-type-b',
      name: 'Plot Layout Type B',
      bedrooms: '5 - 6 Beds',
      bathrooms: '6 - 7 Baths',
      parking: '3 - 4 Cars',
      totalArea: '10,500 sqft',
      description: `Grand executive plot configuration featuring expansive frontages, open orientations, and dedicated private access.`,
      image: '/images/placeholder-plan.svg',
    },
  ];

  const [activePlan, setActivePlan] = useState<ProjectFloorPlan>(defaultPlans[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.floorPlansSection} id="floor">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Floor &amp; Plot Plans</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.tabNav}>
            {defaultPlans.map((plan) => (
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
                src={activePlan.image || '/images/placeholder-plan.svg'}
                alt={activePlan.name}
                width={700}
                height={480}
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
              >
                <ZoomIn size={16} />
                <span>Zoom In</span>
              </button>
            </div>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.planTitle}>{activePlan.name}</h3>
            <p className={styles.planDesc}>{activePlan.description}</p>

            <div className={styles.specsList}>
              {activePlan.bedrooms !== undefined && (
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Bed size={18} /></div>
                  <div className={styles.specDetails}>
                    <span className={styles.specLabel}>Bedrooms / Type</span>
                    <span className={styles.specVal}>{activePlan.bedrooms}</span>
                  </div>
                </div>
              )}

              {activePlan.bathrooms !== undefined && (
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Bath size={18} /></div>
                  <div className={styles.specDetails}>
                    <span className={styles.specLabel}>Bathrooms</span>
                    <span className={styles.specVal}>{activePlan.bathrooms}</span>
                  </div>
                </div>
              )}

              {activePlan.parking !== undefined && (
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Car size={18} /></div>
                  <div className={styles.specDetails}>
                    <span className={styles.specLabel}>Parking</span>
                    <span className={styles.specVal}>{activePlan.parking}</span>
                  </div>
                </div>
              )}

              <div className={styles.specItem}>
                <div className={styles.specIcon}><Maximize2 size={18} /></div>
                <div className={styles.specDetails}>
                  <span className={styles.specLabel}>Total Area</span>
                  <span className={styles.specVal}>{activePlan.totalArea}</span>
                </div>
              </div>
            </div>

            <div className={styles.btnRow}>
              {onOpenBrochure && (
                <button
                  type="button"
                  className={styles.downloadBtn}
                  onClick={onOpenBrochure}
                >
                  <Download size={18} />
                  <span>Request Floor Plans PDF</span>
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
            >
              <X size={24} />
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={activePlan.image || '/images/placeholder-plan.svg'}
                alt={activePlan.name}
                width={1100}
                height={750}
                className={styles.modalImg}
              />
            </div>
            <p className={styles.modalCaption}>{activePlan.name} Diagram</p>
          </div>
        </div>
      )}
    </section>
  );
}
