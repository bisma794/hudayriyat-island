import React from 'react';
import styles from './NawayefArticle.module.css';

export default function NawayefArticle() {
  return (
    <article className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleContainer}>
          <h2 className={styles.mainHeading}>
            Nawayef East Hills for Elevated Island Living
          </h2>

          <p className={styles.leadText}>
            Nawayef East Hills is planned for residents who want a spacious private home in an elevated island setting while remaining connected to Abu Dhabi&apos;s main areas. The development combines residential privacy with landscaped surroundings, outdoor facilities, sports amenities, and access to the wider attractions of Hudayriyat Island.
          </p>

          <p className={styles.paragraph}>
            The residential collection ranges from four-bedroom Homes to larger Heights and Mansions with up to eight bedrooms. This gives buyers different options depending on their preferred home size, outdoor space, privacy, and family requirements.
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
                  <td>Nawayef East Hills</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Hudayriyat Island, Abu Dhabi</td>
                </tr>
                <tr>
                  <td>Property Types</td>
                  <td>Villas and Mansions</td>
                </tr>
                <tr>
                  <td>Unit Types</td>
                  <td>4–5 Bedroom Homes, 5–7 Bedroom Heights, 6–8 Bedroom Mansions</td>
                </tr>
                <tr>
                  <td>Starting Price</td>
                  <td>AED 6.6 million</td>
                </tr>
                <tr>
                  <td>Payment Plan</td>
                  <td>40/60</td>
                </tr>
                <tr>
                  <td>Down Payment</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Handover</td>
                  <td>December 2028</td>
                </tr>
                <tr>
                  <td>Ownership</td>
                  <td>Freehold for All Nationalities</td>
                </tr>
                <tr>
                  <td>Hill Height</td>
                  <td>Up to 60 metres</td>
                </tr>
                <tr>
                  <td>Lifestyle</td>
                  <td>Elevated Island Living</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Property Details</h3>
          <p className={styles.paragraph}>
            Nawayef East Hills offers three distinct residential collections: Homes, Heights, and Mansions. The Homes collection includes four- and five-bedroom villas, Heights offer five- to seven-bedroom villas, while the Mansions collection provides six- to eight-bedroom residences.
          </p>
          <p className={styles.paragraph}>
            The Homes collection ranges from approximately 370 to 468 sq. m. The wider east hill development includes larger residences with generous indoor and outdoor areas, creating different options for families looking for more space and privacy.
          </p>
          <p className={styles.paragraph}>
            Each residence is planned with spacious living areas, terraces, private swimming pools, gardens, and majlis spaces. Large windows and open layouts help bring natural light into the interiors while allowing residents to enjoy the surrounding landscape and elevated views.
          </p>

          <h3 className={styles.subHeading}>Lifestyle &amp; Amenities</h3>
          <p className={styles.paragraph}>
            Life at Nawayef East Hills is centred around privacy, outdoor living, and access to recreational facilities. Residents can enjoy landscaped parkland, jogging trails, swimming pools, tennis facilities, a clubhouse, gym, children&apos;s play areas, and a mosque.
          </p>
          <p className={styles.paragraph}>
            The wider Hudayriyat Island lifestyle also offers a variety of destinations for sports and recreation. These include Surf Abu Dhabi, Velodrome Abu Dhabi, 321 Sports, Trail X, Circuit X, Marsana Beach, and extensive cycling tracks connecting different parts of the island.
          </p>

          <h3 className={styles.subHeading}>Architecture &amp; Interiors</h3>
          <p className={styles.paragraph}>
            Nawayef East Hills brings together different architectural styles to create a distinctive residential environment. The community includes Southern Californian-inspired homes alongside contemporary villas with striking architectural details and modern exterior finishes.
          </p>
          <p className={styles.paragraph}>
            The residences are designed around privacy, natural light, and outdoor living. Spacious terraces, private gardens, swimming pools, and majlis areas create a practical connection between indoor and outdoor spaces. The elevated setting also allows homes to benefit from views across the Arabian Gulf and Abu Dhabi skyline.
          </p>

          <h3 className={styles.subHeading}>Location &amp; Connectivity</h3>
          <p className={styles.paragraph}>
            Nawayef East Hills is located on Hudayriyat Island, Abu Dhabi, within the wider Nawayef masterplan. The development is positioned on elevated terrain reaching up to 60 metres and offers views towards the Abu Dhabi skyline and Arabian Gulf.
          </p>
          <p className={styles.paragraph}>
            The location provides access to the island&apos;s beaches, sports facilities, cycling routes, dining venues, hospitality destinations, and leisure attractions. Residents can also reach central Abu Dhabi and other major areas of the emirate through the island&apos;s road connections.
          </p>
        </div>
      </div>
    </article>
  );
}
