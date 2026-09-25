'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import styles from './VillasMasterPlan.module.css';

export default function VillasMasterPlan() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.masterSection} id="master">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Villas Master Plan</h2>
        </div>

        <div
          className={styles.imageCard}
          onClick={() => setIsZoomOpen(true)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/bashayer-villas/master-plan.jpg"
              alt="Bashayer Villas Master Plan on Hudayriyat Island, Abu Dhabi"
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
              src="/images/bashayer-villas/master-plan.jpg"
              alt="Bashayer Villas Master Plan"
              width={1200}
              height={800}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
