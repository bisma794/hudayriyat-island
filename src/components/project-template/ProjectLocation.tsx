'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LocationCategory } from './ProjectTypes';
import styles from './ProjectLocation.module.css';

interface ProjectLocationProps {
  name: string;
  subtitle?: string;
  mapIframeUrl?: string;
  categories: LocationCategory[];
}

const defaultCategories: LocationCategory[] = [
  {
    category: 'Clinic & Medical',
    items: [
      { name: 'Healthplus Diabetes & Endocrinology Center', time: 'Approximately 10 mins' },
      { name: 'Mediclinic Al Mamora', time: 'Approximately 14 mins' },
    ],
  },
  {
    category: 'Schools & Education',
    items: [
      { name: 'Sheikh Zayed Private Academy for Girls', time: 'Approximately 12 mins' },
      { name: 'Japanese Private School', time: 'Approximately 13 mins' },
      { name: 'Al Bateen Academy', time: 'Approximately 14 mins' },
      { name: 'American Community School', time: 'Approximately 16 mins' },
    ],
  },
  {
    category: 'Restaurants & Dining',
    items: [
      { name: 'Switch Restaurant', time: 'Approximately 13 mins' },
      { name: 'Salar Restaurant - ADNEC', time: 'Approximately 14 mins' },
      { name: 'Sama AlMoheet Seafood & Grill', time: 'Approximately 16 mins' },
    ],
  },
  {
    category: 'Nurseries',
    items: [
      { name: 'Little Haven Nursery', time: 'Approximately 10 mins' },
      { name: 'Humpty Dumpty Nursery', time: 'Approximately 12 mins' },
    ],
  },
];

export default function ProjectLocation({
  name,
  subtitle = 'Strategically positioned on Hudayriyat Island, offering direct connectivity to Abu Dhabi’s key commercial hubs and scenic coastal destinations.',
  mapIframeUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95813.49709552733!2d54.197054143359345!3d24.425125499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6f35f2ff0d6f%3A0x4c12341b13da96f7!2sAl%20Hudayriat%20Island!5e1!3m2!1sen!2s!4v1785401377430!5m2!1sen!2s',
  categories,
}: ProjectLocationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategories = categories.length > 0 ? categories : defaultCategories;

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Location &amp; Attractions</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mapWrapper}>
            <iframe
              src={mapIframeUrl}
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`${name} Location Map`}
            />
          </div>

          <div className={styles.accordionList}>
            {activeCategories.map((group, idx) => (
              <div
                key={idx}
                className={`${styles.accordionItem} ${openIndex === idx ? styles.accordionOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className={styles.accordionCategory}>{group.category}</span>
                  {openIndex === idx ? (
                    <ChevronUp size={20} className={styles.chevron} />
                  ) : (
                    <ChevronDown size={20} className={styles.chevron} />
                  )}
                </button>

                {openIndex === idx && (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
