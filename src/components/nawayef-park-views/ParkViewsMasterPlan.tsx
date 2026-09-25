"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import styles from "./ParkViewsMasterPlan.module.css";

interface ParkViewsMasterPlanProps {
  onOpenModal?: () => void;
}

export default function ParkViewsMasterPlan({ onOpenModal }: ParkViewsMasterPlanProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const masterPlanImg = "/images/nawayef-park-views/asset_52.png";

  return (
    <section id="master" className={styles.masterSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Master Plan</h2>
        </div>

        <div
          className={styles.imageWrapper}
          onClick={() => setIsZoomOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to enlarge master plan"
        >
          <Image
            src={masterPlanImg}
            alt="Master plan layout of Nawayef Park Views on Hudayriyat Island, showcasing residential clusters, green spaces and community amenities"
            fill
            className={styles.masterImage}
          />
          <div className={styles.zoomHint}>
            <ZoomIn size={16} />
            <span>Click to enlarge</span>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={onOpenModal}
          >
            Download Master Plan
          </button>
        </div>
      </div>

      {isZoomOpen && (
        <div className={styles.lightbox} onClick={() => setIsZoomOpen(false)}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <div className={styles.lightboxImgWrapper}>
              <Image
                src={masterPlanImg}
                alt="Enlarged Master Plan"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
