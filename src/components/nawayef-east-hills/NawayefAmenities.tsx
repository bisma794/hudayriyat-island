import React from 'react';
import Image from 'next/image';
import styles from './NawayefAmenities.module.css';

const amenitiesData = [
  { name: 'Bike Track', icon: '/images/nawayef-east-hills/amenity-1.png' },
  { name: 'Food and Beverage', icon: '/images/nawayef-east-hills/amenity-2.png' },
  { name: 'Retail Shop', icon: '/images/nawayef-east-hills/amenity-3.png' },
  { name: 'Sports Centre', icon: '/images/nawayef-east-hills/amenity-4.png' },
  { name: 'Beach', icon: '/images/nawayef-east-hills/amenity-5.png' },
  { name: 'Club House', icon: '/images/nawayef-east-hills/amenity-6.png' },
  { name: 'Velodrome Abu Dhabi', icon: '/images/nawayef-east-hills/amenity-7.png' },
  { name: 'Mosque', icon: '/images/nawayef-east-hills/amenity-8.png' },
];

export default function NawayefAmenities() {
  return (
    <section className={styles.amenitiesSection} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef East Hills Amenities</h2>
          <p className={styles.subtitle}>
            Residents at Nawayef East Hills can enjoy a range of facilities planned for relaxation, fitness, recreation, and everyday convenience. The community includes a swimming pool, clubhouse, gym, tennis facilities, jogging trails, children&apos;s play areas, landscaped parkland, and a mosque.
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
