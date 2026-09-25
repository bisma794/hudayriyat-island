'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import styles from './ProjectMasterPlan.module.css';

interface ProjectMasterPlanProps {
  name: string;
  subtitle?: string;
  planImage?: string;
}

export default function ProjectMasterPlan({
  name,
  subtitle = 'A masterfully conceived coastal community layout featuring integrated transport networks, scenic paths, and natural waterfront settings on Hudayriyat Island.',
  planImage = '/images/placeholder-plan.svg',
}: ProjectMasterPlanProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.masterSection} id="masterplan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Master Plan</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div
          className={styles.imageCard}
          onClick={() => setIsZoomOpen(true)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={planImage}
              alt={`${name} Master Plan on Hudayriyat Island, Abu Dhabi`}
              width={1600}
              height={900}
              className={styles.masterImg}
              priority
            />
          </div>
          <div className={styles.zoomHint}>
            <ZoomIn size={16} /> Click to expand Master Plan
          </div>
        </div>
      </div>

      {isZoomOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsZoomOpen(false)}
          >
            <X size={32} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={planImage}
              alt={`${name} Master Plan Full View`}
              width={1400}
              height={900}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
