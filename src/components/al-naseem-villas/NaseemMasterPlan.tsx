'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import styles from './NaseemMasterPlan.module.css';

export default function NaseemMasterPlan() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.masterSection} id="masterplan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Master Plan</h2>
          <p className={styles.subtitle}>
            A thoughtfully integrated master community with lush landscapes, dedicated internal road networks, pedestrian trails, and world-class waterfront amenities on Hudayriyat Island.
          </p>
        </div>

        <div
          className={styles.imageCard}
          onClick={() => setIsZoomOpen(true)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/al-naseem-villas/master-plan.webp"
              alt="Master Plan of Al Naseem Villas on Hudayriyat Island – Luxury Waterfront Villa Community with Lush Landscapes, Road Network, and Key Amenities"
              fill
              className={styles.masterImg}
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
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/al-naseem-villas/master-plan.webp"
              alt="Al Naseem Villas Master Plan Full View"
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
