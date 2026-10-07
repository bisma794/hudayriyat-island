import React from 'react';
import Link from 'next/link';
import styles from './MasyafBlogArticle.module.css';

export default function MasyafBlogArticle() {
  return (
    <article className={styles.articleSection} id="overview-article">
      <div className="container">
        <div className={styles.articleCard}>
          {/* Main Title & Lead */}
          <div className={styles.header}>
            <h2 className={styles.mainTitle}>Masyaf - Hudayriyat Island By Modon</h2>
            <p className={styles.leadText}>
              Masyaf is a premium residential plot development by Hudayriyat
              Development LLC, located on the vibrant and scenic{" "}
              <Link href="/">
                <strong>Hudayriyat Island in Abu Dhabi.</strong>
              </Link>{" "}
              Designed for those who value space, personalization, and a
              connection to nature, Masyaf offers 199 exclusive residential
              plots that empower homeowners to build their dream villas in a
              setting that combines tranquility with urban convenience.
            </p>
          </div>

          {/* Project Highlights Specs Grid */}
          <div className={styles.specsSection}>
            <h3 className={styles.sectionHeading}>Masyaf – Project Highlights</h3>
            <div className={styles.specsGrid}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Developer</span>
                <span className={styles.specValue}>Hudayriyat Development L.L.C – O.P.C</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Location</span>
                <span className={styles.specValue}>Hudayriyat Island, Abu Dhabi</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>District</span>
                <span className={styles.specValue}>Al Hidayriyyat</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Community</span>
                <span className={styles.specValue}>Masyaf</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Total Plots</span>
                <span className={styles.specValue}>199 Residential Plots</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Plot Type</span>
                <span className={styles.specValue}>Villa Plots</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Land Use</span>
                <span className={styles.specValue}>Residential</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Total Area</span>
                <span className={styles.specValue}>311,055 sqm</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Lifestyle</span>
                <span className={styles.specValue}>Lush green, island living with access to beaches &amp; parks</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Nearby Attractions</span>
                <span className={styles.specValue}>Nawayef Souq, Hudayriyat Beach, Sheikh Zayed Mosque</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Accessibility</span>
                <span className={styles.specValue}>Minutes from Downtown Abu Dhabi &amp; major city landmarks</span>
              </div>
            </div>
          </div>

          {/* Customizable Living in a Natural Setting */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Customizable Living in a Natural Setting</h3>
            <p className={styles.bodyText}>
              At Masyaf, every plot is a blank canvas, allowing residents to design and construct bespoke homes that suit their individual preferences and lifestyles. Surrounded by lush greenery, open spaces, and waterfront views, the community encourages a harmonious balance between indoor comfort and outdoor living.
            </p>
          </div>

          {/* Prime Location with Seamless Connectivity */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Prime Location with Seamless Connectivity</h3>
            <p className={styles.bodyText}>
              Perfectly positioned on Hudayriyat Island, Masyaf enjoys direct access to some of the capital’s most attractive destinations. Strategically positioned on Hudayriyat Island, Masyaf offers effortless access to Abu Dhabi’s most iconic landmarks and lifestyle destinations:
            </p>
            <div className={styles.connectivityGrid}>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>23 mins</span>
                <span className={styles.connectDestination}>Emirates Palace</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>33 mins</span>
                <span className={styles.connectDestination}>Louvre Abu Dhabi</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>30 mins</span>
                <span className={styles.connectDestination}>Abu Dhabi Global Financial Centre (ADGFC)</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>20 mins</span>
                <span className={styles.connectDestination}>Downtown Abu Dhabi</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>17 mins</span>
                <span className={styles.connectDestination}>Sheikh Zayed Grand Mosque</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>34 mins</span>
                <span className={styles.connectDestination}>Zayed International Airport</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>38 mins</span>
                <span className={styles.connectDestination}>New York University Abu Dhabi</span>
              </div>
              <div className={styles.connectItem}>
                <span className={styles.connectTime}>90 mins</span>
                <span className={styles.connectDestination}>Downtown Dubai</span>
              </div>
            </div>
          </div>

          {/* Hudayriyat Island Attractions */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Hudayriyat Island Attractions</h3>
            <p className={styles.bodyText}>
              Hudayriyat Island isn’t just a residential destination; it’s a vibrant lifestyle hub filled with adventure, wellness, and family fun. Residents of Masyaf enjoy direct access to a variety of recreational attractions, including:
            </p>
            <ul className={styles.attractionsList}>
              <li>
                <strong>Skate Park</strong> &ndash; A professionally designed space for skaters of all ages and skill levels
              </li>
              <li>
                <strong>BMX Park</strong> &ndash; High-energy cycling tracks and ramps built for thrill seekers and competitive riders
              </li>
              <li>
                <strong>Ropes Park</strong> &ndash; A fun and challenging obstacle course set among elevated ropes and wooden elements
              </li>
              <li>
                <strong>Splash Park</strong> &ndash; A refreshing, family-friendly water play zone perfect for kids and hot summer days
              </li>
            </ul>
            <p className={styles.bodyText} style={{ marginTop: '16px' }}>
              These attractions make Hudayriyat Island a unique coastal destination that blends luxury living with outdoor adventure and community spirit.
            </p>
          </div>

          {/* Masyaf Plots Hudayriyat Island – Modon Development */}
          <div className={styles.closingSection}>
            <h3 className={styles.closingTitle}>
              Masyaf Plots Hudayriyat Island &ndash; Modon Development
            </h3>
            <p className={styles.bodyText}>
              Masyaf Plots introduces a rare opportunity to design and build a home within one of Abu Dhabi’s most carefully planned island destinations. Located on Hudayriyat Island and developed by Modon, Masyaf is dedicated to buyers who value creative freedom, space, and long-term potential. These residential plots are designed for those who want a home shaped around their personal vision.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
