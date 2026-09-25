import React from "react";
import Image from "next/image";
import styles from "./BashayerAmenities.module.css";

const amenitiesList = [
  {
    name: "Multisport centre",
    icon: "/images/bashayer-residences/amenity-1.png",
  },
  {
    name: "Working lounges",
    icon: "/images/bashayer-residences/amenity-2.png",
  },
  {
    name: "Fully equipped gym",
    icon: "/images/bashayer-residences/amenity-3.png",
  },
  {
    name: "Swimming pools",
    icon: "/images/bashayer-residences/amenity-4.png",
  },
  {
    name: "BBQ Areas",
    icon: "/images/bashayer-residences/amenity-5.png",
  },
  {
    name: "Private pool",
    icon: "/images/bashayer-residences/amenity-6.png",
  },
  {
    name: "24/7 security",
    icon: "/images/bashayer-residences/amenity-7.png",
  },
  {
    name: "Mosque",
    icon: "/images/bashayer-residences/amenity-8.png",
  },
];

export default function BashayerAmenities() {
  return (
    <section className={styles.amenitiesSection} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Amenities</h2>
          <p className={styles.subtitle}>
            Residents at Bashayer can enjoy a range of facilities created for relaxation, recreation, and everyday convenience. The community includes a waterfront promenade, private marina and piers, clubhouse, rooftop infinity pool, gym, wellness facilities, sports courts, children&apos;s play areas, parks, cycling and jogging paths, dining, and retail spaces.
          </p>
        </div>

        <div className={styles.grid}>
          {amenitiesList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                  className={styles.iconImg}
                />
              </div>
              <p className={styles.amenityName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
