import React from 'react';
import styles from './WadeemPlotsArticle.module.css';

export default function WadeemPlotsArticle() {
  return (
    <article className={styles.articleSection} id="overview-article">
      <div className="container">
        <div className={styles.articleCard}>
          {/* Main Title & Lead */}
          <div className={styles.header}>
            <h2 className={styles.mainTitle}>
              Wadeem Plots by Modon &ndash; Custom 4 to 6 Bedroom Villa Plots in a Gated Hudayriyat Island Community
            </h2>
            <p className={styles.leadText}>
              Wadeem Plots by Modon is a high-end gated villa plot community located on Hudayriyat Island, Abu Dhabi, offering discerning buyers the rare opportunity to design and build a custom dream home in a serene, wellness-driven, and master-planned environment. With spacious <strong>4 to 6-bedroom villa plots</strong>, nature-inspired design, and exceptional connectivity to Abu Dhabi’s core destinations, <strong>Wadeem</strong> is the perfect blend of tranquil island living and urban accessibility.
            </p>
          </div>

          {/* Project Overview */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Project Overview</h3>
            <ul className={styles.bulletList}>
              <li>
                <strong>Location:</strong> Prime gated community on Hudayriyat Island, Abu Dhabi
              </li>
              <li>
                <strong>Plot Types:</strong> Expansive 4 to 6-bedroom villa plots, with optional basement layouts
              </li>
              <li>
                <strong>Architectural Styles:</strong> Choose from Modern Arabic, Mediterranean, or Contemporary
              </li>
              <li>
                <strong>Developer:</strong> By Modon Properties, a government-backed Abu Dhabi master developer
              </li>
              <li>
                <strong>Ownership:</strong> Freehold available to all nationalities
              </li>
              <li>
                <strong>Payment Plan:</strong> Flexible 50/50 post-handover payment structure
              </li>
            </ul>
          </div>

          {/* Design Highlights */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Design Highlights</h3>
            <p className={styles.bodyText}>
              Wadeem offers a thoughtfully curated design language that promotes architectural freedom while maintaining a cohesive community identity:
            </p>
            <ul className={styles.bulletList}>
              <li>Front-facing entrances with elegant porch detailing</li>
              <li>Shading elements like pergolas, balconies, and roof overhangs for climate comfort</li>
              <li>Privacy-focused design with recessed doorways, screens, and covered patios</li>
              <li>Flat or sloped roofs with concealed MEP systems for a clean, modern look</li>
              <li>Generous window openings and airy interiors for seamless indoor-outdoor transitions</li>
            </ul>
            <p className={styles.bodyText}>
              The design guidelines strike a balance between individuality and neighborhood harmony, empowering homeowners to personalize their villas while maintaining the aesthetic integrity of the community.
            </p>
          </div>

          {/* Villa Plot Categories */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Villa Plot Categories</h3>
            <p className={styles.bodyText}>
              Wadeem features four distinct villa plot types, carefully tailored for various lifestyle needs and architectural visions:
            </p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Select Plot</strong> &ndash; 4 Bedroom Villa
              </li>
              <li>
                <strong>Prestige Plot</strong> &ndash; 5 Bedroom Villa
              </li>
              <li>
                <strong>Elite Plot</strong> &ndash; 6 Bedroom Villa
              </li>
              <li>
                <strong>Signature Plot</strong> &ndash; 6 Bedroom Villa with optional basement
              </li>
            </ul>
            <p className={styles.bodyText}>
              Each plot is strategically oriented to maximize privacy, daylight, and open views. Whether you&apos;re building a family residence or an investment property, Wadeem offers unmatched flexibility and freedom in design.
            </p>
          </div>

          {/* Nature-Inspired Community Living */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Nature-Inspired Community Living</h3>
            <p className={styles.bodyText}>
              Wadeem is masterfully designed around green living, wellness, and walkability, placing nature and well-being at the forefront of daily life:
            </p>
            <ul className={styles.bulletList}>
              <li>16 hectare Central Park &ndash; a lush core offering open spaces for leisure</li>
              <li>6 neighborhood parks with playgrounds and swimming pools</li>
              <li>4.9 km scenic loop for walking, running, and cycling</li>
              <li>10.7 km green buffer park &ndash; enhancing privacy and natural balance</li>
              <li>Linear parks and pocket gardens &ndash; connecting all villa clusters</li>
              <li>Outdoor seating areas, shaded walkways, and fitness trails promote a healthy, active lifestyle</li>
            </ul>
          </div>

          {/* Amenities & Lifestyle Features */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Amenities &amp; Lifestyle Features</h3>
            <p className={styles.bodyText}>
              Wadeem integrates lifestyle, convenience, and community engagement through a wide range of family-friendly amenities:
            </p>
            <ul className={styles.bulletList}>
              <li>2 x Community Retail Centres</li>
              <li>2 x Mosques, including a Friday (Juma) Mosque</li>
              <li>Community Centre with event spaces, cultural zones, and resident services</li>
              <li>Children&apos;s Playgrounds across multiple parks</li>
              <li>Outdoor Gyms &amp; Sports Hubs</li>
              <li>Shaded pedestrian walkways for safe, year round mobility</li>
              <li>Nearby Schools &amp; Early Learning Centres for families</li>
              <li>Planned Marina &amp; East Town Centre within walking distance</li>
              <li>Pet-friendly spaces and dedicated green areas for leisure</li>
            </ul>
            <p className={styles.bodyText}>
              This combination of wellness-focused design and practical conveniences makes Wadeem an ideal community for modern families.
            </p>
          </div>

          {/* Key Connectivity – Central Yet Secluded */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Key Connectivity &ndash; Central Yet Secluded</h3>
            <p className={styles.bodyText}>
              Enjoy smooth access to Abu Dhabi&apos;s major destinations and landmarks:
            </p>
            <div className={styles.connectivityGrid}>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>20 mins</span>
                <span className={styles.connectDestination}>Downtown Abu Dhabi</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>23 mins</span>
                <span className={styles.connectDestination}>Sheikh Zayed Grand Mosque</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>25 mins</span>
                <span className={styles.connectDestination}>Yas Island</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>30 mins</span>
                <span className={styles.connectDestination}>Louvre Abu Dhabi</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>33 mins</span>
                <span className={styles.connectDestination}>Zayed International Airport</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>39 mins</span>
                <span className={styles.connectDestination}>Saadiyat Island</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>90 mins</span>
                <span className={styles.connectDestination}>Dubai Marina</span>
              </div>
            </div>
            <p className={styles.bodyText} style={{ marginTop: '16px' }}>
              Wadeem offers the luxury of island living without compromising urban accessibility.
            </p>
          </div>

          {/* Why Invest in Wadeem by Modon? */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Why Invest in Wadeem by Modon?</h3>
            <p className={styles.bodyText}>
              Wadeem presents a high value proposition for families, homeowners, and lifestyle investors:
            </p>
            <ul className={styles.bulletList}>
              <li>Freehold ownership open to all nationalities</li>
              <li>Prime island location with capital appreciation potential</li>
              <li>Custom villa designs within a structured, premium master plan</li>
              <li>Robust infrastructure and community management by Modon</li>
              <li>Proximity to Abu Dhabi&apos;s cultural, business, and leisure districts</li>
              <li>Smart community concept with sustainability and wellness at its core</li>
            </ul>
            <p className={styles.bodyText}>
              Whether you&apos;re building a forever home or securing a strategic real estate asset, Wadeem offers lasting value, lifestyle quality, and investment potential in one of Abu Dhabi&apos;s most visionary developments.
            </p>
          </div>

          {/* Wadeem Plots Hudayriyat Island – Plots for Sale Abu Dhabi */}
          <div className={styles.closingSection}>
            <h3 className={styles.closingTitle}>
              Wadeem Plots Hudayriyat Island &ndash; Plots for Sale Abu Dhabi
            </h3>
            <p className={styles.bodyText}>
              The land for sale at Wadeem Plots is a rare opportunity to own land within this visionary island development from Abu Dhabi&apos;s leading developer. Made for buyers who desire control and flexibility along with long-term value, Wadeem is focused on residential plots allowing owners to design and build homes that suit their needs. Situated on Hudayriyat Island, Wadeem allows for freedom of design while providing an organically structured community.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
