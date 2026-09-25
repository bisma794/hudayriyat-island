import React from 'react';
import Image from 'next/image';
import styles from './NaseemAmenities.module.css';

const amenitiesList = [
  { name: 'Cycle Tracks', icon: '/images/al-naseem-villas/amenity-1.png' },
  { name: 'Gymnasium', icon: '/images/al-naseem-villas/amenity-2.png' },
  { name: '24/7 Security', icon: '/images/al-naseem-villas/amenity-3.png' },
  { name: 'Public Beach', icon: '/images/al-naseem-villas/amenity-4.png' },
  { name: 'Mosque', icon: '/images/al-naseem-villas/amenity-5.png' },
  { name: 'Luxury Spa', icon: '/images/al-naseem-villas/amenity-6.png' },
  { name: 'Park Area', icon: '/images/al-naseem-villas/amenity-7.png' },
  { name: 'Gated Community', icon: '/images/al-naseem-villas/amenity-8.png' },
];

export default function NaseemAmenities() {
  return (
    <section className={styles.amenitiesSection} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Amenities</h2>
          <p className={styles.subtitle}>
            Amenities at Al Naseem Villas are thoughtfully curated to elevate everyday living. Residents enjoy access to a country club with a gym, spa, and pool, a community mosque, and a secure gated entrance. Scenic pedestrian paths and cycling routes wind through the neighborhood. Beyond the community, the vibrant Hudayriyat Island offers attractions like Surf Abu Dhabi, 321 Sports, Marsana, Hudayriyat Marina, and pristine beaches, creating a dynamic lifestyle where wellness, leisure, and nature coexist.
          </p>
        </div>

        <div className={styles.amenitiesGrid}>
          {amenitiesList.map((item, index) => (
            <div key={index} className={styles.amenityCard}>
              <div className={styles.iconCircle}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={34}
                  height={34}
                  className={styles.amenityIcon}
                />
              </div>
              <span className={styles.amenityName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
