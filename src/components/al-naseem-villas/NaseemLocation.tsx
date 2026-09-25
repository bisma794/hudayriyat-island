'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './NaseemLocation.module.css';

interface LocationGroup {
  category: string;
  items: { name: string; time: string }[];
}

const locationData: LocationGroup[] = [
  {
    category: 'Clinic',
    items: [
      { name: 'Healthplus Diabetes & Endocrinology Center', time: 'Approximately 10 mins' },
      { name: 'Burjeel Medical City', time: 'Approximately 15 mins' },
      { name: 'Cleveland Clinic Abu Dhabi', time: 'Approximately 20 mins' },
    ],
  },
  {
    category: 'Schools',
    items: [
      { name: 'Sheikh Zayed Private Academy for Girls', time: 'Approximately 12 mins' },
      { name: 'Japanese Private School', time: 'Approximately 13 mins' },
      { name: 'Al Bateen Academy', time: 'Approximately 14 mins' },
      { name: 'Lycee Francais Theodore Monod', time: 'Approximately 29 mins' },
    ],
  },
  {
    category: 'Restaurants',
    items: [
      { name: 'Switch Restaurant', time: 'Approximately 13 mins' },
      { name: 'Salar Restaurant - ADNEC', time: 'Approximately 14 mins' },
      { name: 'Sama AlMoheet Seafood & Grill Restaurant', time: 'Approximately 16 mins' },
      { name: 'Marsana Promenade Waterfront Dining', time: 'Approximately 8 mins' },
    ],
  },
  {
    category: 'Nurseries',
    items: [
      { name: 'Little Haven Nursery', time: 'Approximately 10 mins' },
      { name: 'Humpty Dumpty Nursery', time: 'Approximately 12 mins' },
      { name: 'Redwood Montessori Nursery', time: 'Approximately 15 mins' },
    ],
  },
];

export default function NaseemLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            <strong>Al Naseem Villas</strong> are strategically located on <em>Hudayriyat Island</em>, one of Abu Dhabi&rsquo;s most iconic waterfront destinations. The community offers seamless access to world-class leisure, sports, and lifestyle facilities providing residents with a perfect balance of tranquility and vibrant island living.
          </p>
        </div>

        {/* 2-Column Content: Map (Compact) + Brown Accordion */}
        <div className={styles.contentGrid}>
          {/* Left Column: Compact Google Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.770507746915!2d54.3820618495175!3d24.408420939156112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e690030b3058b%3A0x56f192c21b63ee44!2sModon%20Al%20Naseem!5e1!3m2!1sen!2s!4v1751962626803!5m2!1sen!2s"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Al Naseem Villas Location Map"
            />
          </div>

          {/* Right Column: Solid Brown Accordion Bars */}
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
