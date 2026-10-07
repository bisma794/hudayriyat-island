import React from "react";
import Link from "next/link";
import styles from "./BashayerArticle.module.css";

export default function BashayerArticle() {
  return (
    <article className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleContainer}>
          <h2 className={styles.mainHeading}>
            Bashayer Residences for Contemporary Waterfront Living
          </h2>

          <p className={styles.leadText}>
            Bashayer Residences is planned for residents who want modern homes in an island setting without being far from Abu Dhabi&apos;s main areas. The development combines residential comfort with outdoor spaces, waterfront activities, dining, shopping, and leisure facilities.
          </p>

          <p className={styles.paragraph}>
            The available residences range from practical one-bedroom apartments to larger family homes, townhomes, and spacious penthouses. This gives buyers different options depending on their preferred home size and lifestyle.
          </p>

          <h3 className={styles.subHeading}>Key Project Highlights</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.highlightsTable}>
              <tbody>
                <tr>
                  <td>Developer</td>
                  <td>Modon Properties</td>
                </tr>
                <tr>
                  <td>Community</td>
                  <td>Bashayer Residences</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Hudayriyat Island, Abu Dhabi</td>
                </tr>
                <tr>
                  <td>Property Types</td>
                  <td>Apartments, Townhomes and Penthouses</td>
                </tr>
                <tr>
                  <td>Unit Types</td>
                  <td>1, 2 and 3-bedroom Apartments, 2 and 4-bedroom Townhomes, Penthouses</td>
                </tr>
                <tr>
                  <td>Starting Price</td>
                  <td>AED 2.5 million</td>
                </tr>
                <tr>
                  <td>Payment Plan</td>
                  <td>50/50</td>
                </tr>
                <tr>
                  <td>Down Payment</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Handover</td>
                  <td>30 April 2030</td>
                </tr>
                <tr>
                  <td>Ownership</td>
                  <td>Freehold for All Nationalities</td>
                </tr>
                <tr>
                  <td>Waterfront Promenade</td>
                  <td>3.5 km</td>
                </tr>
                <tr>
                  <td>Lifestyle</td>
                  <td>Waterfront and Island Living</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Property Details</h3>
          <p className={styles.paragraph}>
            Bashayer Residences offers a variety of residential layouts across apartments, townhomes, and penthouses. The latest release includes one to three-bedroom apartments, two and four-bedroom townhomes, and a signature penthouse collection.
          </p>
          <p className={styles.paragraph}>
            Apartment sizes range from around 872 to 3,218 sq ft, while townhomes range from approximately 1,765 to 4,155 sq ft. The penthouses range from around 4,198 to 5,264 sq ft.
          </p>
          <p className={styles.paragraph}>
            The homes feature contemporary interiors, spacious living areas, and layouts planned to provide comfortable everyday living. Selected residences also benefit from views towards the sea, promenade, or surrounding landscaped areas.
          </p>

          <h3 className={styles.subHeading}>Lifestyle &amp; Amenities</h3>
          <p className={styles.paragraph}>
            Life at Bashayer Residences is centred around the waterfront. A 3.5 km promenade creates a connected outdoor environment where residents can walk, cycle, relax, and spend time by the water.
          </p>
          <p className={styles.paragraph}>
            The community includes a clubhouse with a rooftop infinity pool, sports and padel courts, gym and wellness facilities, children&apos;s play areas, green spaces, cycling and jogging trails, restaurants, cafés, and retail outlets. Additional facilities include a spa, hydrotherapy and salt room, library, indoor kids&apos; club, and gaming room.
          </p>

          <h3 className={styles.subHeading}>Architecture &amp; Interiors</h3>
          <p className={styles.paragraph}>
            Bashayer Residences uses a contemporary architectural style that complements its coastal surroundings. The buildings are positioned around landscaped areas and the waterfront promenade, creating a connection between the homes and outdoor spaces.
          </p>
          <p className={styles.paragraph}>
            The residences feature practical floor plans, modern finishes, open living areas, and large windows. The penthouses provide larger layouts with panoramic sea and skyline views, while townhomes offer additional space for families.
          </p>

          <h3 className={styles.subHeading}>Location &amp; Connectivity</h3>
          <p className={styles.paragraph}>
            Bashayer Residences is located on Hudayriyat Island, Abu Dhabi, a
            growing destination for waterfront living, sports, recreation,
            dining, and outdoor activities. The development offers{" "}
            <Link href="/">
              <strong>Hudayriyat Island villas for sale</strong>
            </Link>
            , providing residents with a comfortable lifestyle in a
            well-connected island community
          </p>
          <p className={styles.paragraph}>
            The development is positioned close to central Abu Dhabi while also providing access to major destinations across the emirate. Zayed International Airport is around 25 minutes away, Yas Island is around 30 minutes away, Abu Dhabi Global Market is around 25 minutes away, and Saadiyat Island is around 35 minutes away.
          </p>
        </div>
      </div>
    </article>
  );
}
