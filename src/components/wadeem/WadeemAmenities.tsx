import React from "react";
import Image from "next/image";
import styles from "./WadeemAmenities.module.css";

const amenitiesList = [
  { name: "Clubhouses", icon: "/images/wadeem-gardens/amenity-club.png" },
  { name: "Dining Areas", icon: "/images/wadeem-gardens/amenity-dining.png" },
  { name: "Retail Outlets", icon: "/images/wadeem-gardens/amenity-retail.png" },
  { name: "Fitness Center", icon: "/images/wadeem-gardens/amenity-fitness.png" },
  { name: "Landscape Gardens", icon: "/images/wadeem-gardens/amenity-gardens.png" },
  { name: "Healthcare Facilities", icon: "/images/wadeem-gardens/amenity-healthcare.png" },
  { name: "Kids Play Areas", icon: "/images/wadeem-gardens/amenity-kids.png" },
  { name: "Tracks", icon: "/images/wadeem-gardens/amenity-tracks.png" },
];

export default function WadeemAmenities() {
  return (
    <section id="amenities" className={styles.amenitiesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Wadeem Gardens Amenities</h2>
          <p className={styles.subtitle}>
            Wadeem Gardens provides spaces that support everyday convenience,
            recreation, social connection, and family living. Residents can
            access essential services, leisure destinations, and community
            spaces within the wider development, while the waterfront setting
            and connected community environment support an active and
            convenient lifestyle.
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
              <span className={styles.amenityName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
