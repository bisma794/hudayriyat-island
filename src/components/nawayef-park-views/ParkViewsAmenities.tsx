import React from "react";
import Image from "next/image";
import styles from "./ParkViewsAmenities.module.css";

const amenitiesData = [
  {
    name: "Gymnasium",
    icon: "/images/nawayef-park-views/asset_16.png",
  },
  {
    name: "Yoga Zone",
    icon: "/images/nawayef-park-views/asset_17.png",
  },
  {
    name: "Co-working Area",
    icon: "/images/nawayef-park-views/asset_18.png",
  },
  {
    name: "Game Room",
    icon: "/images/nawayef-park-views/asset_19.png",
  },
  {
    name: "Beach",
    icon: "/images/nawayef-park-views/asset_20.png",
  },
  {
    name: "Concierge & Valet",
    icon: "/images/nawayef-park-views/asset_21.png",
  },
  {
    name: "Swimming Pool",
    icon: "/images/nawayef-park-views/asset_22.png",
  },
  {
    name: "Club House",
    icon: "/images/nawayef-park-views/asset_23.png",
  },
];

export default function ParkViewsAmenities() {
  return (
    <section id="amenities" className={styles.amenitiesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Amenities</h2>
          <span className={styles.subtitle}>
            Nawayef Park Views offers a complete lifestyle with luxury amenities for wellness, work, and community—including a gym, pools, clubhouse, and concierge—all just steps from fine dining and the beach.
          </span>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((item, idx) => (
            <div key={idx} className={styles.amenityCard}>
              <div className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={30}
                  height={30}
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
