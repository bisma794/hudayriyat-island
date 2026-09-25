"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./BashayerLocation.module.css";

interface AttractionGroup {
  id: string;
  category: string;
  items: { name: string; time: string }[];
}

const locationData: AttractionGroup[] = [
  {
    id: "restaurants",
    category: "Restaurants",
    items: [
      { name: "Restaurant Louvre Abu Dhabi", time: "Around 5 minutes away" },
      { name: "Fouquet’s", time: "Around 10 minutes away" },
      { name: "Black Tap", time: "Around 10 minutes away" },
      { name: "NIRI Restaurant & Bar", time: "Around 10 minutes away" },
      { name: "Wake n’ Bake", time: "Around 15 minutes away" },
      { name: "Raclette Brasserie & Cafe", time: "Around 15 minutes away" },
    ],
  },
  {
    id: "hotels",
    category: "Hotels",
    items: [
      { name: "Bab Al Nojoum Hudayriyat Villas", time: "Around 5 minutes away" },
      { name: "Dusit Thani Abu Dhabi", time: "Around 19 minutes away" },
      { name: "Premier Inn Abu Dhabi", time: "Around 20 minutes away" },
      { name: "Holiday Inn Abu Dhabi by IHG", time: "Around 23 minutes away" },
      { name: "Royal M Hotel by Gewan Abu Dhabi", time: "Around 32 minutes away" },
    ],
  },
  {
    id: "schools",
    category: "Schools",
    items: [
      { name: "St. Joseph's School", time: "Around 17 minutes away" },
      { name: "American International School", time: "Around 19 minutes away" },
      { name: "International Community Schools", time: "Around 19 minutes away" },
      { name: "The British School", time: "Around 19 minutes away" },
    ],
  },
  {
    id: "landmarks",
    category: "Landmarks",
    items: [
      { name: "Natural History Museum", time: "Around 33 minutes away" },
      { name: "Louvre Abu Dhabi", time: "Around 34 minutes away" },
      { name: "Zayed National Museum", time: "Around 35 minutes away" },
      { name: "Warner Bros. World, Yas Island", time: "Around 38 minutes away" },
    ],
  },
];

export default function BashayerLocation() {
  const [openAccordion, setOpenAccordion] = useState<string>("restaurants");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Bashayer Residences Location &amp; Attractions
          </h2>
          <p className={styles.subtitle}>
            Bashayer Residences is located on Hudayriyat Island, Abu Dhabi, giving residents access to beaches, waterfront areas, sports destinations, restaurants, and leisure attractions.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Google Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95813.49709552733!2d54.197054143359345!3d24.425125499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6f35f2ff0d6f%3A0x4c12341b13da96f7!2sAl%20Hudayriat%20Island!5e1!3m2!1sen!2s!4v1785327350646!5m2!1sen!2s"
              title="Bashayer Residences Location Map"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Accordion */}
          <div className={styles.accordionList}>
            {locationData.map((group) => {
              const isOpen = openAccordion === group.id;
              return (
                <div
                  key={group.id}
                  className={`${styles.accordionItem} ${
                    isOpen ? styles.accordionOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.accordionBtn}
                    onClick={() => toggleAccordion(group.id)}
                  >
                    <span>{group.category}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <ul className={styles.placesList}>
                        {group.items.map((item, idx) => (
                          <li key={idx} className={styles.placeItem}>
                            <span className={styles.placeName}>
                              {item.name}
                            </span>{" "}
                            – {item.time}
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
