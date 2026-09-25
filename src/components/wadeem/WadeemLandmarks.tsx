import React from "react";
import Image from "next/image";
import styles from "./WadeemLandmarks.module.css";

const landmarksData = [
  {
    name: "Zayed International Airport",
    time: "~15 mins",
    image: "/images/wadeem-gardens/landmark-airport.jpg",
  },
  {
    name: "Sheikh Zayed Grand Mosque",
    time: "~15 mins",
    image: "/images/wadeem-gardens/landmark-mosque.jpg",
  },
  {
    name: "Louvre Abu Dhabi",
    time: "~23 mins",
    image: "/images/wadeem-gardens/landmark-louvre.jpg",
  },
];

export default function WadeemLandmarks() {
  return (
    <section className={styles.landmarksSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Wadeem Gardens Nearby Landmarks</h2>
          <p className={styles.subtitle}>
            Wadeem Gardens on Hudayriyat Island provides access to key Abu Dhabi
            destinations, including Zayed International Airport, ADGM, and Louvre
            Museum.
          </p>
        </div>

        <div className={styles.grid}>
          {landmarksData.map((item, idx) => (
            <div key={idx} className={styles.landmarkCard}>
              <div className={styles.imgWrap}>
                <Image
                  src={item.image}
                  alt={`${item.name} near Wadeem Gardens`}
                  fill
                  className={styles.landmarkImg}
                />
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <h3 className={styles.landmarkName}>{item.name}</h3>
                  <span className={styles.landmarkTime}>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
