'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './NawayefLocation.module.css';

interface LocationGroup {
  category: string;
  items: { name: string; time: string }[];
}

const locationData: LocationGroup[] = [
  {
    category: 'Clinic',
    items: [
      { name: 'Al Qadi Medical Center – Dermatology & Skin Clinic', time: 'Around 15 minutes away' },
      { name: 'Exeter Medical Center', time: 'Around 17 minutes away' },
      { name: 'DNA Health & Wellness', time: 'Around 18 minutes away' },
      { name: 'Louvre Medical Clinic', time: 'Around 21 minutes away' },
    ],
  },
  {
    category: 'School',
    items: [
      { name: 'St. Joseph’s School', time: 'Around 17 minutes away' },
      { name: 'Vision Private School', time: 'Around 20 minutes away' },
      { name: 'The British School Al Khubairat', time: 'Around 18 minutes away' },
      { name: 'International Community Schools', time: 'Around 19 minutes away' },
      { name: 'Emirates Private School', time: 'Around 25 minutes away' },
    ],
  },
  {
    category: 'Restaurants',
    items: [
      { name: 'Cello SOL Restaurant Abu Dhabi', time: 'Around 12 minutes away' },
      { name: 'Al Shader Restaurant and Grill', time: 'Around 7 minutes away' },
      { name: 'Nonna Stella Osteria Restaurant', time: 'Around 7 minutes away' },
      { name: 'Aroy Dee Thai Restaurant', time: 'Around 22 minutes away' },
    ],
  },
  {
    category: 'Shopping Malls',
    items: [
      { name: 'Al Mushrif Co-operative Society Shopping Mall', time: 'Around 21 minutes away' },
      { name: 'Mushrif Mall', time: 'Around 22 minutes away' },
      { name: 'Al Seef Village Mall', time: 'Around 26 minutes away' },
      { name: 'Abu Dhabi Mall', time: 'Around 26 minutes away' },
    ],
  },
];

export default function NawayefLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef East Hills Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Nawayef East Hills is located on Hudayriyat Island, Abu Dhabi, giving residents access to beaches, sports facilities, outdoor attractions, restaurants, and leisure destinations across the island.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194130.03710649227!2d54.09619026720643!3d24.372268763212894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6f35f2ff0d6f%3A0x4c12341b13da96f7!2sAl%20Hudayriat%20Island!5e1!3m2!1sen!2s!4v1752847650286!5m2!1sen!2s"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hudayriyat Island Map"
            />
          </div>

          <div className={styles.accordionList}>
            {locationData.map((group, idx) => (
              <div
                key={idx}
                className={`${styles.accordionItem} ${openIndex === idx ? styles.accordionOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span>{group.category}</span>
                  {openIndex === idx ? (
                    <ChevronUp size={20} color="#856D52" />
                  ) : (
                    <ChevronDown size={20} color="#64748b" />
                  )}
                </button>

                {openIndex === idx && (
                  <div className={styles.accordionBody}>
                    <ul className={styles.placesList}>
                      {group.items.map((item, i) => (
                        <li key={i} className={styles.placeItem}>
                          <span className={styles.placeName}>{item.name}</span> &ndash; {item.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
