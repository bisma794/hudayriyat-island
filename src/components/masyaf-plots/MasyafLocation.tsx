'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './MasyafLocation.module.css';

interface LocationGroup {
  category: string;
  items: { name: string; time: string }[];
}

const locationData: LocationGroup[] = [
  {
    category: 'Clinic',
    items: [
      { name: 'Al Qadi Medical Center - Dermatology & Skin Clinic', time: 'Approximately 15 mins' },
      { name: 'Exeter Medical Center', time: 'Approximately 17 mins' },
      { name: 'DNA Health & Wellness', time: 'Approximately 18 mins' },
      { name: 'Louvre Medical Clinic', time: 'Approximately 21 mins' },
    ],
  },
  {
    category: 'School',
    items: [
      { name: "St Joseph's School", time: 'Approximately 17 mins' },
      { name: 'Vision Private School', time: 'Approximately 20 mins' },
      { name: 'The British School Al Khubairat', time: 'Approximately 18 mins' },
      { name: 'International Community Schools', time: 'Approximately 19 mins' },
      { name: 'Emirates Private School', time: 'Approximately 25 mins' },
    ],
  },
  {
    category: 'Restaurants',
    items: [
      { name: 'Cello SOL Restaurant Abu Dhabi', time: 'Approximately 12 mins' },
      { name: 'Al Shader Restaurant and Grill', time: 'Approximately 7 mins' },
      { name: 'Nonna Stella Osteria Restaurant', time: 'Approximately 7 mins' },
      { name: 'Aroy Dee Thai Restaurant', time: 'Approximately 22 mins' },
    ],
  },
  {
    category: 'Mall',
    items: [
      { name: 'Al Mushrif Co-operative Society Shopping Mall', time: 'Approximately 21 mins' },
      { name: 'Mushrif Mall', time: 'Approximately 22 mins' },
      { name: 'Al Seef Village Mall', time: 'Approximately 26 mins' },
      { name: 'Abu Dhabi Mall', time: 'Approximately 26 mins' },
    ],
  },
];

export default function MasyafLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Masyaf Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Located on <strong>Hudayriyat Island</strong>, <strong>Masyaf</strong> provides seamless access to Abu Dhabi&rsquo;s premier attractions, from pristine beaches to the iconic Sheikh Zayed Grand Mosque&mdash;just minutes away.
          </p>
        </div>

        {/* 2-Column Content: Compact Satellite Map + Brown Accordions */}
        <div className={styles.contentGrid}>
          {/* Left Column: Compact Satellite Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95813.49709552733!2d54.197054143359345!3d24.425125499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6f35f2ff0d6f%3A0x4c12341b13da96f7!2sAl%20Hudayriat%20Island!5e1!3m2!1sen!2s!4v1785401377430!5m2!1sen!2s"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Masyaf Hudayriyat Island Location Map"
            />
          </div>

          {/* Right Column: Theme Brown Accordion */}
          <div className={styles.accordionList}>
            {locationData.map((group, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.accordionBtn}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.accordionCategory}>{group.category}</span>
                    {isOpen ? (
                      <ChevronUp size={20} className={styles.chevron} />
                    ) : (
                      <ChevronDown size={20} className={styles.chevron} />
                    )}
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <ul className={styles.itemList}>
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.itemRow}>
                            <span className={styles.itemName}>{item.name}</span>
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
