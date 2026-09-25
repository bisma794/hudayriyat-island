import React from "react";
import Image from "next/image";
import styles from "./BashayerLandmarks.module.css";

const landmarksData = [
  {
    title: "Sheikh Zayed Grand Mosque",
    time: "18 Mins",
    image: "/images/communities/card-1.jpg",
  },
  {
    title: "Ferrari World Abu Dhabi",
    time: "35 Mins",
    image: "/images/communities/card-2.jpg",
  },
  {
    title: "Warner Bros. World Abu Dhabi",
    time: "38 Mins",
    image: "/images/communities/card-3.jpg",
  },
];

export default function BashayerLandmarks() {
  return (
    <section className={styles.landmarksSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Nearby Landmarks</h2>
          <p className={styles.subtitle}>
            Bashayer Residences on Hudayriyat Island offers exceptional
            connectivity to Abu Dhabi&apos;s most celebrated landmarks, cultural
            attractions, and leisure destinations. With convenient access to
            business hubs, retail centres, and major highways, residents enjoy
            effortless modern urban living.
          </p>
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
