import React from 'react';
import styles from './VillasArticle.module.css';

export default function VillasArticle() {
  return (
    <article className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleContainer}>
          <h2 className={styles.mainHeading}>
            Bashayer Villas &ndash; Premium Waterfront Villas on Hudayriyat Island, Abu Dhabi
          </h2>

          <p className={styles.leadText}>
            Bashayer Villas represents the pinnacle of island living, masterfully planned by Modon Properties along the tranquil waterfront of Hudayriyat Island in Abu Dhabi. Blending modern architectural elegance with the gentle serenity of coastal nature, these expansive 4 and 5-bedroom villas are crafted for families seeking privacy, prestige, and seamless indoor-outdoor living.
          </p>

          <h3 className={styles.subHeading}>Key Project Highlights</h3>
          <ul className={styles.highlightList}>
            <li className={styles.highlightItem}>
              <span className={styles.checkIcon}>✦</span>
              <span><strong>Exclusive Waterfront Enclave:</strong> Limited collection of 4 and 5-bedroom luxury villas on Hudayriyat Island.</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.checkIcon}>✦</span>
              <span><strong>Freehold Ownership:</strong> 100% freehold titles available for all nationalities.</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.checkIcon}>✦</span>
              <span><strong>Attractive 50/50 Payment Plan:</strong> 10% on booking, staged construction installments, and 50% on completion (March 2029).</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.checkIcon}>✦</span>
              <span><strong>World-Class Island Lifestyle:</strong> Immediate access to Surf Abu Dhabi, Velodrome, 321 Sports Village, and private beaches.</span>
            </li>
          </ul>

          <h3 className={styles.subHeading}>Property Details &amp; Configurations</h3>
          <p className={styles.paragraph}>
            Bashayer Villas offers two distinct architectural layouts: the 4-Bedroom Select Villas and 5-Bedroom Shore Villas. Every home features dual show and prep kitchens, private driver and maid&rsquo;s quarters, expansive family lounges across multiple levels, dedicated home offices, and private landscaped courtyards with optional swimming pools.
          </p>

          <h3 className={styles.subHeading}>Architecture &amp; Interior Craftsmanship</h3>
          <p className={styles.paragraph}>
            Each villa is built with clean horizontal lines, warm earthy stone textures, floor-to-ceiling glass facades, and generous overhangs that maximize natural light while ensuring thermal efficiency. Interiors are finished with European porcelain tiles, bespoke joinery, smart home automation, and energy-efficient climate control systems.
          </p>

          <h3 className={styles.subHeading}>Location &amp; Connectivity</h3>
          <p className={styles.paragraph}>
            Strategically located on Hudayriyat Island, Bashayer Villas offers unparalleled connectivity to Abu Dhabi&rsquo;s core hubs: 12 minutes to Downtown Abu Dhabi, 15 minutes to Marina Mall, 20 minutes to Sheikh Zayed Grand Mosque, and 25 minutes to Zayed International Airport.
          </p>
        </div>
      </div>
    </article>
  );
}
