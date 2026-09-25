import React from 'react';
import Image from 'next/image';
import { ProjectAmenity } from './ProjectTypes';
import styles from './ProjectAmenities.module.css';

interface ProjectAmenitiesProps {
  name: string;
  subtitle?: string;
  amenities: ProjectAmenity[];
}

export default function ProjectAmenities({
  name,
  subtitle = 'Thoughtfully curated amenities designed to elevate coastal luxury living on Hudayriyat Island.',
  amenities,
}: ProjectAmenitiesProps) {
  return (
    <section className={styles.amenitiesSection} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Amenities</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.amenitiesGrid}>
          {amenities.map((item, index) => (
            <div key={index} className={styles.amenityCard}>
              <div className={styles.iconCircle}>
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={22}
                    height={22}
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <span className={styles.amenityName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
