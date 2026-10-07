"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./GolfLocation.module.css";

interface AccordionItem {
  title: string;
  items: { name: string; time: string }[];
}

const locationData: AccordionItem[] = [
  {
    title: "Restaurants",
    items: [
      { name: "Fouquet’s", time: "Around 10 minutes away" },
      { name: "Black Tap", time: "Around 10 minutes away" },
      { name: "Wake n’ Bake", time: "Around 15 minutes away" },
      { name: "NIRI Restaurant & Bar", time: "Around 10 minutes away" },
      { name: "Raclette Brasserie & Cafe", time: "Around 15 minutes away" },
      { name: "Restaurant Louvre Abu Dhabi", time: "Around 5 minutes away" },
    ],
  },
  {
    title: "Hotels & Resort",
    items: [
      { name: "Holiday Inn Abu Dhabi by IHG", time: "Around 23 minutes away" },
      { name: "Premier Inn Abu Dhabi", time: "Around 20 minutes away" },
      { name: "Dusit Thani Abu Dhabi", time: "Around 19 minutes away" },
      { name: "Bab Al Nojoum Hudayriyat Villas", time: "Around 5 minutes away" },
      { name: "Royal M Hotel by Gewan Abu Dhabi", time: "Around 32 minutes away" },
    ],
  },
  {
    title: "Schools",
    items: [
      { name: "American International School", time: "Around 19 minutes away" },
      { name: "St. Joseph's School", time: "Around 17 minutes away" },
      { name: "International Community Schools", time: "Around 19 minutes away" },
      { name: "The British School", time: "Around 19 minutes away" },
    ],
  },
  {
    title: "Landmarks",
    items: [
      { name: "Louvre Abu Dhabi", time: "Around 34 minutes away" },
      { name: "Natural History Museum", time: "Around 33 minutes away" },
      { name: "Zayed National Museum", time: "Around 35 minutes away" },
      { name: "Warner Bros. World, Yas Island", time: "Around 38 minutes away" },
    ],
  },
];

export default function GolfLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.locationSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Hudayriyat Golf Estates is located on Hudayriyat Island, Abu Dhabi. The location provides residents with access to waterfront areas, beaches, sports facilities, restaurants, cycling routes, and leisure attractions.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Location Image */}
          <div className={styles.mapContainer} style={{ position: "relative" }}>
            <Image
              src="/images/20231014_191447.webp"
              alt="Hudayriyat Golf Estates Location"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right: Attractions Accordion */}
          <div className={styles.accordionContainer}>
            {locationData.map((section, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={styles.accordionItem}>
                  <button
                    type="button"
                    className={`${styles.accordionHeader} ${
                      isOpen ? styles.headerActive : ""
                    }`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <ul className={styles.itemList}>
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.listItem}>
                            <span className={styles.itemName}>
                              {item.name}:
                            </span>{" "}
                            <span className={styles.itemTime}>{item.time}</span>
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
