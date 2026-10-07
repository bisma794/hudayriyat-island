"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./WadeemLocation.module.css";

interface AccordionItem {
  title: string;
  items: { name: string; time: string }[];
}

const locationData: AccordionItem[] = [
  {
    title: "Restaurants",
    items: [
      { name: "Marmoura Restaurant & Lounge", time: "Approximately 4 mins" },
      { name: "The Plage Restaurant", time: "Approximately 4 mins" },
      { name: "Rain Cafe Hudayriat", time: "Approximately 5 mins" },
      { name: "Souvlaki Nation", time: "Approximately 6 mins" },
      { name: "Nalu Restaurant & Lounge", time: "Approximately 8 mins" },
    ],
  },
  {
    title: "Hospitals & Clinics",
    items: [
      { name: "Mediclinic Al Mamora", time: "Approximately 15 mins" },
      { name: "Burjeel Hospital", time: "Approximately 18 mins" },
      { name: "Healthpoint Hospital", time: "Approximately 20 mins" },
      { name: "Sheikh Khalifa Medical City (SKMC)", time: "Approximately 20 mins" },
      { name: "Ahalia Hospital Hamdan", time: "Approximately 22 mins" },
    ],
  },
  {
    title: "Schools",
    items: [
      { name: "321 Sports Nursery", time: "Approximately 2 mins" },
      {
        name: "American Community School of Abu Dhabi",
        time: "Approximately 12 mins",
      },
      {
        name: "The British School Al Khubairat",
        time: "Approximately 15 mins",
      },
      { name: "International Community School", time: "Approximately 15 mins" },
      { name: "Brighton College Abu Dhabi", time: "Approximately 18 mins" },
    ],
  },
  {
    title: "Landmarks",
    items: [
      { name: "Marsana Waterfront", time: "Approximately 5 mins" },
      { name: "Hudayriyat Mar Vista Beach", time: "Approximately 6 mins" },
      { name: "Circuit X Adventure Park", time: "Approximately 7 mins" },
      { name: "Surf Abu Dhabi", time: "Approximately 8 mins" },
      { name: "321 Sports", time: "Approximately 8 mins" },
    ],
  },
];

export default function WadeemLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.locationSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Wadeem Gardens Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Wadeem Gardens is located on Hudayriyat Island, Abu Dhabi, with
            restaurants, schools and healthcare facilities accessible from the
            island. The wider destination also offers waterfront dining,
            beaches, sports facilities and leisure attractions.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Location Image */}
          <div className={styles.mapContainer} style={{ position: "relative" }}>
            <Image
              src="/images/20231014_191447.webp"
              alt="Wadeem Gardens Location"
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
