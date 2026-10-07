'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './VillasLocation.module.css';

interface LocationGroup {
  category: string;
  items: { name: string; time: string }[];
}

const locationData: LocationGroup[] = [
  {
    category: 'Restaurants & Beach Clubs',
    items: [
      { name: 'Marmoura Hudayriat', time: 'Approximately 4 mins' },
      { name: 'The Plage Restaurant', time: 'Approximately 4 mins' },
      { name: 'Muncheeze', time: 'Approximately 4 mins' },
      { name: 'Shrimp Pot', time: 'Approximately 4 mins' },
      { name: 'Rain Cafe Hudayriat', time: 'Approximately 5 mins' },
      { name: 'Ilios Restaurant & Beach Club', time: 'Approximately 6 mins' },
      { name: 'Nalu Restaurant & Lounge', time: 'Approximately 6 mins' },
      { name: 'Souvlaki Nation', time: 'Approximately 6 mins' },
    ],
  },
  {
    category: 'Shopping Destinations',
    items: [
      { name: 'Leen Outlet Market (On-Island)', time: 'Approximately 3 mins' },
      { name: 'Marina Mall', time: 'Approximately 15 mins' },
      { name: 'Khalidiyah Mall', time: 'Approximately 18 mins' },
      { name: 'Mushrif Mall', time: 'Approximately 20 mins' },
      { name: 'Al Wahda Mall', time: 'Approximately 22 mins' },
      { name: 'The Galleria Al Maryah Island', time: 'Approximately 25 mins' },
    ],
  },
  {
    category: 'Hospitals & Medical Care',
    items: [
      { name: 'Mediclinic Al Mamora', time: 'Approximately 16 mins' },
      { name: 'Burjeel Hospital, Abu Dhabi', time: 'Approximately 20 mins' },
      { name: 'Healthpoint Hospital', time: 'Approximately 22 mins' },
      { name: 'Sheikh Khalifa Medical City (SKMC)', time: 'Approximately 22 mins' },
      { name: 'Ahalia Hospital Hamdan', time: 'Approximately 24 mins' },
      { name: 'Mediclinic Airport Road Hospital', time: 'Approximately 24 mins' },
    ],
  },
  {
    category: 'Top Schools & Academies',
    items: [
      { name: '321 Sports Nursery (On-Island)', time: 'Approximately 4 mins' },
      { name: 'American Community School of Abu Dhabi', time: 'Approximately 14 mins' },
      { name: 'The British School Al Khubairat', time: 'Approximately 16 mins' },
      { name: 'International Community School', time: 'Approximately 17 mins' },
      { name: 'Brighton College Abu Dhabi', time: 'Approximately 20 mins' },
      { name: 'Repton School Abu Dhabi', time: 'Approximately 26 mins' },
    ],
  },
];

export default function VillasLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.locationSection} id="location">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Villas Location &amp; Attractions</h2>
          <p className={styles.subtitle}>
            Bashayer Villas commands a prime waterfront address with seamless connectivity to major landmarks, business hubs, and leisure destinations across Abu Dhabi &mdash; ensuring a lifestyle defined by both convenience and prestige.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mapWrapper} style={{ position: 'relative' }}>
            <Image
              src="/images/3_3.jpg"
              alt="Bashayer Villas Location"
              fill
              style={{ objectFit: 'cover' }}
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
                    <ChevronUp size={20} className={styles.chevron} />
                  ) : (
                    <ChevronDown size={20} className={styles.chevron} />
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
