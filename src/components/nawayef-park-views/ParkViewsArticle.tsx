import React from "react";
import styles from "./ParkViewsArticle.module.css";

const commuteTimes = [
  { time: "20 mins", place: "Downtown Abu Dhabi" },
  { time: "23 mins", place: "Emirates Palace" },
  { time: "23 mins", place: "Sheikh Zayed Grand Mosque" },
  { time: "30 mins", place: "Abu Dhabi Global Financial Centre" },
  { time: "33 mins", place: "Louvre Abu Dhabi" },
  { time: "34 mins", place: "Zayed International Airport" },
  { time: "38 mins", place: "New York University Abu Dhabi" },
  { time: "90 mins", place: "Downtown Dubai" },
];

export default function ParkViewsArticle() {
  return (
    <section className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleCard}>
          <h1 className={styles.mainTitle}>
            Mediterranean-Inspired Luxury in the Heart of Hudayriyat Island
          </h1>
          <p className={styles.leadParagraph}>
            <strong>Nawayef Park Views </strong>is the first freehold apartment community on Hudayriyat Island, Abu Dhabi, developed by Modon Properties. Nestled between the scenic Nawayef Hills, this low-rise residential enclave harmoniously blends Mediterranean and Portuguese-inspired architecture with the calm elegance of coastal living. Designed with a village-style ethos, it offers thoughtfully curated homes that prioritise community, wellness, and panoramic natural vistas.
          </p>

          <h3 className={styles.subTitle}>Project Highlights – Nawayef Park Views</h3>
          <div className={styles.highlightsBox}>
            <ul className={styles.highlightsGrid}>
              <li className={styles.highlightItem}>
                <strong>Location: </strong>Hudayriyat Island, Abu Dhabi
              </li>
              <li className={styles.highlightItem}>
                <strong>Developer: </strong>Modon Properties
              </li>
              <li className={styles.highlightItem}>
                <strong>Status: </strong>Off-Plan
              </li>
              <li className={styles.highlightItem}>
                <strong>Property Type: </strong>1 to 4 Bedroom Apartments
              </li>
              <li className={styles.highlightItem}>
                <strong>Unit Sizes: </strong>Approx. 1,044 – 5,328 sq ft
              </li>
              <li className={styles.highlightItem}>
                <strong>Ownership: </strong>Freehold for All Nationalities
              </li>
              <li className={styles.highlightItem}>
                <strong>Starting Price: </strong>From AED 1.9 Million
              </li>
              <li className={styles.highlightItem}>
                <strong>Payment Plan: </strong>Flexible 60/40 Plan
              </li>
              <li className={styles.highlightItem}>
                <strong>Handover: </strong>Expected in Q4 2028
              </li>
              <li className={styles.highlightItem}>
                <strong>Design Aesthetic: </strong>Mediterranean and European styles with curved façades, off-white palettes, and natural stone details
              </li>
            </ul>
          </div>

          <h3 className={styles.subTitle}>Apartments Designed for Modern Coastal Living</h3>
          <p className={styles.paragraph}>
            <strong>Nawayef Park Views</strong> offers a refined collection of 1 to 4 bedroom apartments, ranging from approx. 1,044 to 5,328 sq ft. These spacious residences are tailored for modern lifestyles—ideal for individuals, couples, and families alike. Open-plan layouts ensure seamless living and dining experiences, while private balconies or terraces offer uninterrupted views of Hudayriyat’s central park and the Arabian Gulf. Select 2 to 4 bedroom units include dedicated staff quarters and multifunctional rooms, perfect for a home office, guest suite, or wellness studio.
          </p>

          <h3 className={styles.subTitle}>Mediterranean-Inspired Design &amp; Architecture</h3>
          <p className={styles.paragraph}>
            Drawing from Mediterranean and Portuguese influences, the architecture at Nawayef Park Views evokes timeless coastal charm. Soft curves, off-white tones, and artisanal finishes define the exteriors, while interiors feature warm wood accents, textured materials, and calming, sunlit spaces. Expansive glazing invites the outdoors in—framing sweeping views of the sea, skyline, and lush greenery—creating a tranquil and immersive living environment.
          </p>

          <h3 className={styles.subTitle}>Wellness-Centric Lifestyle Amenities</h3>
          <p className={styles.paragraph}>
            Nawayef Park Views promotes a balanced lifestyle through an array of thoughtfully curated amenities:
          </p>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Fully equipped gym and garden-facing yoga pavilion</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Family pool with lap and children’s splash zones</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Clubhouse, landscaped gardens, shaded BBQ areas</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Children’s play zone and interactive games room</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Dedicated co-working lounge</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <span>Premium hospitality services including valet, concierge, laundry, and catering</span>
            </li>
          </ul>

          <h3 className={styles.subTitle}>Seamless Access, Endless Possibilities</h3>
          <p className={styles.paragraph}>
            Strategically positioned on Hudayriyat Island, Nawayef Park Views offers effortless access to Abu Dhabi’s most iconic landmarks and lifestyle destinations:
          </p>
          <div className={styles.commuteGrid}>
            {commuteTimes.map((item, idx) => (
              <div key={idx} className={styles.commuteCard}>
                <div className={styles.commuteTime}>{item.time}</div>
                <div className={styles.commutePlace}>{item.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
