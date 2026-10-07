'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
          {/* Left Column: Location Image */}
          <div className={styles.mapWrapper} style={{ position: 'relative' }}>
            <Image
              src="/images/Hudayriyat-Island---Marsana-East-Beach---Sign---Sunset-2.jpg"
              alt="Al Naseem Villas Location"
              fill
              style={{ objectFit: 'cover' }}
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
