"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import styles from "./WadeemMasterPlan.module.css";

export default function WadeemMasterPlan() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="master" className={styles.masterSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Wadeem Gardens Master Plan</h2>
        </div>

        <div className={styles.planCard} onClick={() => setModalOpen(true)}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/wadeem-gardens/master-plan.png"
              alt="Wadeem Gardens master plan showing three gated villa clusters, 2.3 km spine, waterfront promenade and community facilities"
              width={1100}
              height={620}
              className={styles.planImg}
            />
            <div className={styles.zoomBadge}>
              <Maximize2 size={18} />
              <span>Click to Enlarge</span>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setModalOpen(false)}
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/wadeem-gardens/master-plan.png"
              alt="Wadeem Gardens Master Plan Full"
              width={1400}
              height={850}
              className={styles.fullImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
