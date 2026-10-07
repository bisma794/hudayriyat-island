"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./ParkViewsLocation.module.css";

const categories = [
  {
    id: "clinic",
    title: "Clinic",
    items: [
      { name: "Al Qadi Medical Center - Dermatology & Skin Clinic", time: "Approximately 15 mins" },
      { name: "Exeter Medical Center", time: "Approximately 17 mins" },
      { name: "DNA Health & Wellness", time: "Approximately 18 mins" },
      { name: "Louvre Medical Clinic", time: "Approximately 21 mins" },
    ],
  },
  {
    id: "school",
    title: "School",
    items: [
      { name: "St Joseph’s School", time: "Approximately 17 mins" },
      { name: "Vision Private School", time: "Approximately 20 mins" },
      { name: "The British School Al Khubairat", time: "Approximately 18 mins" },
      { name: "International Community Schools", time: "Approximately 19 mins" },
      { name: "Emirates Private School", time: "Approximately 25 mins" },
    ],
  },
  {
    id: "restaurants",
    title: "Restaurants",
    items: [
      { name: "Cello SOL Restaurant Abu Dhabi", time: "Approximately 12 mins" },
      { name: "Al Shader Restaurant and Grill", time: "Approximately 7 mins" },
      { name: "Nonna Stella Osteria Restaurant", time: "Approximately 7 mins" },
      { name: "Aroy Dee Thai Restaurant", time: "Approximately 22 mins" },
    ],
  },
  {
    id: "mall",
    title: "Mall",
    items: [
      { name: "Al Mushrif Co-operative Society Shopping Mall", time: "Approximately 21 mins" },
      { name: "Mushrif Mall", time: "Approximately 22 mins" },
      { name: "Al Seef Village Mall", time: "Approximately 26 mins" },
      { name: "Abu Dhabi Mall", time: "Approximately 26 mins" },
    ],
  },
];

export default function ParkViewsLocation() {
  const [openCategory, setOpenCategory] = useState<string>("clinic");

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="location" className={styles.locationSection}>
      <div className="container">
        {/* Main Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Ideally located on Hudayriyat Island, <strong>Nawayef Park Views</strong> offers seamless access to Abu Dhabi’s top landmarks and lifestyle attractions. Just minutes from the beach, Nawayef Souq, and lush parklands, residents also enjoy close proximity to iconic destinations like Emirates Palace and Louvre Abu Dhabi.
          </p>
        </div>

        {/* Map & Accordion Grid */}
        <div className={styles.grid}>
          <div className={styles.mapWrapper} style={{ position: "relative" }}>
            <Image
              src="/images/3_3.jpg"
              alt="Nawayef Park Views Location"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.accordion}>
            {categories.map((cat) => {
              const isOpen = openCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`${styles.accordionItem} ${
                    isOpen ? styles.accordionItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.accordionIcon} ${
                        isOpen ? styles.accordionIconRotated : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <ul className={styles.placeList}>
                        {cat.items.map((item, idx) => (
                          <li key={idx} className={styles.placeItem}>
                            <strong>{item.name}</strong> - {item.time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
