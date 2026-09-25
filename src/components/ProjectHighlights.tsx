import React from "react";
import styles from "./ProjectHighlights.module.css";

const highlightsData = [
  {
    label: "Developer",
    value: "Modon Properties",
    icon: (
      <svg
        width="32"
        height="32"
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
    value: "AED 6,000,000",
    icon: (
      <svg
        width="32"
        height="32"
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
    label: "Project Status",
    value: "Off-Plan",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="16" r="4" />
        <path d="m11 13 9-9" />
        <path d="m16 4 4 4" />
        <path d="m14 6 2 2" />
      </svg>
    ),
  },
  {
    label: "Property Type",
    value: "Apartments and Villas",
    icon: (
      <svg
        width="32"
        height="32"
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
    label: "Bedrooms",
    value: "3 to 8 bedrooms",
    icon: (
      <svg
        width="32"
        height="32"
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
    label: "Ownership",
    value: "For All Nationalities",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function ProjectHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlightsData.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              {/* Duotone Icon with green accent circle backdrop #6EAC5D */}
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
