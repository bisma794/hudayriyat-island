import React from "react";
import Image from "next/image";
import styles from "./GolfLandmarks.module.css";

const landmarksData = [
  {
    title: "Ferrari World Abu Dhabi",
    time: "42 Mins",
    image: "/images/golf-estates/landmark-ferrari.jpg",
  },
  {
    title: "Zayed International Airport",
    time: "25 Mins",
    image: "/images/golf-estates/landmark-airport.jpg",
  },
  {
    title: "Louvre Abu Dhabi",
    time: "34 Mins",
    image: "/images/golf-estates/landmark-louvre.jpg",
  },
];

export default function GolfLandmarks() {
  return (
    <section className={styles.landmarksSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nearby Landmarks</h2>
        </div>

        <div className={styles.landmarksGrid}>
          {landmarksData.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.landmarkTitle}>{item.title}</h3>
                <p className={styles.landmarkTime}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
