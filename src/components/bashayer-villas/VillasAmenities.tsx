import React from 'react';
import Image from 'next/image';
import styles from './VillasAmenities.module.css';

const amenitiesData = [
  { name: 'Retail Outlets', icon: '/images/bashayer-villas/amenity-1.png' },
  { name: "Children's Play Areas", icon: '/images/bashayer-villas/amenity-2.png' },
  { name: 'Gated Community', icon: '/images/bashayer-villas/amenity-3.png' },
  { name: 'Multi-Sports Courts', icon: '/images/bashayer-villas/amenity-4.png' },
  { name: 'Equipped Gym', icon: '/images/bashayer-villas/amenity-5.png' },
  { name: 'Landscaped Parks', icon: '/images/bashayer-villas/amenity-6.png' },
  { name: 'Jogging Tracks', icon: '/images/bashayer-villas/amenity-7.png' },
  { name: 'Swimming Pool', icon: '/images/bashayer-villas/amenity-8.png' },
];

export default function VillasAmenities() {
  return (
    <section className={styles.amenitiesSection} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Villas Amenities</h2>
          <p className={styles.subtitle}>
            Discover a curated collection of world-class amenities at Bashayer Villas, thoughtfully designed to enrich waterfront living on Hudayriyat Island.
          </p>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={26}
                  height={26}
                  className={styles.iconImg}
                />
              </div>
              <h3 className={styles.amenityName}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
