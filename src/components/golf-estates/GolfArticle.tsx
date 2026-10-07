import React from "react";
import Link from "next/link";
import styles from "./GolfArticle.module.css";

const keyProjectHighlights = [
  { label: "Developer", value: "Modon Properties" },
  { label: "Property Type", value: "Villas" },
  { label: "Launch Price", value: "AED 4,300,000*" },
  { label: "Handover", value: "Q3 2030" },
  { label: "Ownership", value: "Freehold" },
  { label: "Location", value: "Hudayriyat Island, Abu Dhabi" },
  { label: "Payment Plan", value: "5% / 35% / 60%" },
  { label: "Lifestyle", value: "Golf and Waterfront Living" },
];

export default function GolfArticle() {
  return (
    <article className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleContent}>
          <h2 className={styles.mainTitle}>
            Hudayriyat Golf Estates Villas for Modern Family Living
          </h2>

          <p className={styles.paragraph}>
            Hudayriyat Golf Estates is designed for families looking for spacious villas in a well-planned community on Hudayriyat Island. The project combines residential comfort with access to golf, outdoor activities, waterfront attractions, and everyday amenities.
          </p>

          <p className={styles.paragraph}>
            The community offers a private residential environment while keeping residents close to the major attractions and facilities of Hudayriyat Island.
          </p>

          <h3 className={styles.sectionHeading}>Key Project Highlights</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.highlightsTable}>
              <tbody>
                {keyProjectHighlights.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.sectionHeading}>Property Details</h3>
          <p className={styles.paragraph}>
            Hudayriyat Golf Estates by Modon offers villas in a carefully planned residential community on Hudayriyat Island. The project is designed around a golf lifestyle, giving residents access to green surroundings and outdoor spaces.
          </p>
          <p className={styles.paragraph}>
            The villas feature modern designs and spacious layouts suitable for families. The development also benefits from its location within Hudayriyat Island, providing access to beaches, restaurants, sports facilities, leisure attractions, and other community amenities.
          </p>

          <h3 className={styles.sectionHeading}>Lifestyle &amp; Amenities</h3>
          <p className={styles.paragraph}>
            Hudayriyat Golf Estates offers a lifestyle focused on outdoor activities, golf, relaxation, and family time. The surrounding area includes landscaped spaces, recreational facilities, waterfront attractions, restaurants, and sports destinations.
          </p>
          <p className={styles.paragraph}>
            Its location on Hudayriyat Island allows residents to enjoy a balance between a peaceful residential environment and access to the island&apos;s growing range of leisure and lifestyle facilities.
          </p>

          <h3 className={styles.sectionHeading}>Architecture &amp; Interiors</h3>
          <p className={styles.paragraph}>
            Hudayriyat Golf Estates features modern villa architecture designed to complement its green and golf-focused surroundings.
          </p>
          <p className={styles.paragraph}>
            The villas are planned with spacious interiors, practical layouts, and large living areas suitable for modern family living. The combination of contemporary design and landscaped surroundings creates a comfortable residential setting.
          </p>

          <h3 className={styles.sectionHeading}>Location &amp; Connectivity</h3>
          <p className={styles.paragraph}>
            Hudayriyat Golf Estates is located on{" "}
            <Link href="/">
              <strong>Hudayriyat Island in Abu Dhabi.</strong>
            </Link>{" "}
            The island is home to residential communities, beaches, sports
            facilities, restaurants, cycling tracks, and leisure attractions.
          </p>
          <p className={styles.paragraph}>
            The development offers convenient access to key destinations across Abu Dhabi. Zayed International Airport, Abu Dhabi city centre, major business districts, schools, hospitals, and leisure destinations can be reached within a reasonable drive.
          </p>
        </div>
      </div>
    </article>
  );
}
