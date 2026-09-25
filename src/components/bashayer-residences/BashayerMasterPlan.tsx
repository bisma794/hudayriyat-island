"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import styles from "./BashayerMasterPlan.module.css";

export default function BashayerMasterPlan() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className={styles.masterSection} id="master">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Master Plan</h2>
          <p style={{ color: "#666", fontSize: "15.5px", maxWidth: "840px", margin: "14px auto 0", lineHeight: "1.6" }}>
            The Bashayer master plan is built around a waterfront residential environment with a 3.5 km promenade, marina, landscaped parks, community facilities, and residential buildings. The latest Residences 5 &amp; 6 release consists of two G+5 buildings positioned along the waterfront promenade. The wider community connects residential areas with leisure, sports, dining, retail, and wellness facilities.
          </p>
        </div>

        <div
          className={styles.imageCard}
          onClick={() => setIsZoomOpen(true)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/bashayer-residences/master-plan.jpg"
              alt="Bashayer Residences Master Plan on Hudayriyat Island, Abu Dhabi"
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
              src="/images/bashayer-residences/master-plan.jpg"
              alt="Bashayer Residences Master Plan"
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
