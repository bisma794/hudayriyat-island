import React from "react";
import styles from "./ParkViewsHighlights.module.css";

const highlightsData = [
  {
    label: "Developer",
    value: "Modon Properties",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Price From",
    value: "AED 2,000,000",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="13" r="3" />
        <path d="M12 11v4" />
      </svg>
    ),
  },
  {
    label: "Handover Date",
    value: "Q1 2028",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6" />
        <path d="m15.5 7.5 3 3L22 7l-3-3" />
      </svg>
    ),
  },
  {
    label: "Property Type",
    value: "Apartments",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    label: "Bedrooms",
    value: "1 - 4 bedroom",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    label: "Payment Plan",
    value: "60 / 40",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c08364"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
        <path d="M6 14h2" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
];

export default function ParkViewsHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlightsData.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.svgIcon}>{item.icon}</div>
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
