import React from "react";
import { Image as ImageIcon } from "lucide-react";
import styles from "./OverviewLocation.module.css";

const keyLocations = [
  { name: "Al Bateen", distance: "5 minutes by car" },
  { name: "Saadiyat Island", distance: "15 minutes by car" },
  { name: "Abu Dhabi City Centre", distance: "10 minutes by car" },
  { name: "Qasr Al Watan & Emirates Palace", distance: "12 minutes by car" },
];

export default function OverviewLocation() {
  return (
    <section
      id="overview-location"
      aria-label="Hudayriyat Island Overview and Location"
      className={styles.overviewSection}
    >
      <div className="container">
        <div className={styles.contentGrid}>
          {/* Left Column: Title and Paragraphs */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Hudayriyat Island Overview and Location
            </h2>

            <div className={styles.paragraphs}>
              <p>
                Hudayriyat Island is a growing waterfront destination in Abu
                Dhabi, offering a mix of residential, leisure, and outdoor
                experiences. Its location makes it easy to reach Abu Dhabi city
                and other important areas through well-connected roads and
                bridges.
              </p>
              <p>
                The island is close to popular areas such as Al Bateen and
                Saadiyat Island, while Abu Dhabi city centre is also within easy
                reach. Residents can enjoy quick access to beaches, parks,
                restaurants, sports facilities, and other everyday amenities.
              </p>
              <p>
                Hudayriyat Island is also known for its wide range of outdoor
                attractions. Hudayriyat Beach, Marsana, cycling tracks, and
                sports facilities provide plenty of options for families and
                active lifestyles. Major attractions such as Qasr Al Watan,
                Emirates Palace, and Abu Dhabi Corniche are also nearby.
              </p>
              <p>
                With its waterfront setting, recreational facilities, and
                convenient location, Hudayriyat Island is becoming a popular
                choice for people looking for a modern lifestyle in Abu Dhabi.
              </p>
            </div>
          </div>

          {/* Right Column: Placeholder Image Box */}
          <div className={styles.rightCol}>
            <div className={styles.imagePlaceholderCard}>
              <div className={styles.placeholderInner}>
                <div className={styles.iconCircle}>
                  <ImageIcon size={38} strokeWidth={1.4} />
                </div>
                <span className={styles.placeholderLabel}>
                  Hudayriyat Island Location Image
                </span>
                <span className={styles.placeholderBadge}>Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Location Highlights Grid */}
        <div className={styles.locationBar}>
          {keyLocations.map((item, idx) => (
            <div key={idx} className={styles.locationCard}>
              <h3 className={styles.locationTitle}>{item.name}</h3>
              <p className={styles.locationSub}>{item.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
