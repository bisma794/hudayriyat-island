import React from "react";
import Image from "next/image";
import styles from "./NaseemHighlights.module.css";

const highlightsData = [
  {
    label: "Developer",
    value: "Modon Properties",
    iconSrc: "/images/al-naseem-villas/hl-dev.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    label: "Launch Price",
    value: "AED 7,800,000",
    iconSrc: "/images/al-naseem-villas/hl-price.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    label: "Handover Date",
    value: "Q4 2026",
    iconSrc: "/images/al-naseem-villas/hl-handover.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    label: "Property Type",
    value: "Luxury Villas",
    iconSrc: "/images/al-naseem-villas/hl-prop.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Bedrooms",
    value: "4 to 6 Bedrooms",
    iconSrc: "/images/al-naseem-villas/hl-bed.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    label: "Down Payment",
    value: "10%",
    iconSrc: "/images/al-naseem-villas/hl-downpayment.png",
    svgFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function NaseemHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlightsData.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.accentCircle} />
                <div className={styles.iconContent}>
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    width={32}
                    height={32}
                    className={styles.iconImg}
                  />
                </div>
              </div>
              <div className={styles.highlightInfo}>
                <span className={styles.highlightLabel}>{item.label}</span>
                <span className={styles.highlightValue}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
