"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import styles from "./GolfMasterPlan.module.css";

export default function GolfMasterPlan() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="master" className={styles.masterSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Master Plan</h2>
          <p className={styles.subtitle}>
            The Hudayriyat Golf Estates master plan is designed around a golf-focused residential lifestyle. The community includes villa plots, landscaped areas, open spaces, and access to leisure and recreational facilities. The master plan aims to create a comfortable environment where residents can enjoy green surroundings and outdoor activities while remaining connected to the wider Hudayriyat Island community.
          </p>
        </div>

        <div
          className={styles.planCard}
          onClick={() => setLightboxOpen(true)}
          title="Click to expand master plan"
        >
          <div className={styles.imgWrapper}>
            <Image
              src="/images/golf-estates/master-plan.jpg"
              alt="Hudayriyat Golf Estates Master Plan"
              fill
              className={styles.planImg}
            />
            <div className={styles.zoomHint}>
              <Maximize2 size={16} /> Click to Enlarge
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/golf-estates/master-plan.jpg"
              alt="Hudayriyat Golf Estates Master Plan Full"
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
