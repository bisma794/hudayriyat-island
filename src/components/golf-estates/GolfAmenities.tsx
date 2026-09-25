import React from "react";
import Image from "next/image";
import styles from "./GolfAmenities.module.css";

const amenitiesData = [
  {
    title: "18-hole Golf Course",
    icon: "/images/golf-estates/amenity-golf.png",
  },
  {
    title: "Country Clubhouse",
    icon: "/images/golf-estates/amenity-clubhouse.png",
  },
  {
    title: "Community Retail",
    icon: "/images/golf-estates/amenity-retail.png",
  },
  {
    title: "Private School",
    icon: "/images/golf-estates/amenity-school.png",
  },
  {
    title: "Cycling Trails",
    icon: "/images/golf-estates/amenity-cycling.png",
  },
  {
    title: "Parks & Green Spaces",
    icon: "/images/golf-estates/amenity-parks.png",
  },
  {
    title: "Coworking Spaces",
    icon: "/images/golf-estates/amenity-coworking.png",
  },
  {
    title: "Dining & Retail",
    icon: "/images/golf-estates/amenity-dining.png",
  },
];

export default function GolfAmenities() {
  return (
    <section id="amenities" className={styles.amenitiesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Amenities</h2>
          <p className={styles.subtitle}>
            Hudayriyat Golf Estates offers a range of facilities designed for comfortable family living. Residents can enjoy access to golf facilities, landscaped spaces, outdoor areas, leisure attractions, dining options, and other community amenities.
          </p>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className={styles.iconImg}
                />
              </div>
              <p className={styles.amenityName}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
