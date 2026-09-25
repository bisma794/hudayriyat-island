import React from "react";
import styles from "./BashayerHighlights.module.css";

const highlightsData = [
  {
    label: "Developer",
    value: "Modon Properties",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    ),
  },
  {
    label: "Price From",
    value: "AED 2.5 Million",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
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
    value: "30 April 2030",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Property Types",
    value: "Apartments & Townhomes",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Unit Types",
    value: "1–3 Bed AP, 2–4 Bed TH",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
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
    value: "50/50 (5% Down)",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
        <path d="M6 15h2" />
        <path d="M12 15h6" />
      </svg>
    ),
  },
];

export default function BashayerHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlightsData.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              {/* Brown Accent circle backdrop */}
              <div className={styles.iconWrapper}>
                <span className={styles.accentCircle} />
                <span className={styles.svgIcon}>{item.icon}</span>
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
