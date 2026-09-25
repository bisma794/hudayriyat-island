import React from 'react';
import styles from './ProjectArticle.module.css';

interface ProjectArticleProps {
  name: string;
  leadTitle: string;
  leadText: string;
  specs?: { label: string; value: string }[];
  highlights?: { title: string; desc: string }[];
  stylesList?: { title: string; desc: string }[];
}

export default function ProjectArticle({
  name,
  leadTitle,
  leadText,
  specs = [],
  highlights = [],
  stylesList = [],
}: ProjectArticleProps) {
  return (
    <article className={styles.articleSection} id="description">
      <div className="container">
        <div className={styles.articleCard}>
          <div className={styles.header}>
            <span className={styles.subTitle}>DETAILED COMMUNITY OVERVIEW</span>
            <h1 className={styles.mainTitle}>{leadTitle}</h1>
            <p className={styles.leadText}>{leadText}</p>
          </div>

          {/* Quick Specifications Table */}
          {specs && specs.length > 0 && (
            <div className={styles.specsSection}>
              <h2 className={styles.sectionHeading}>Project Overview &mdash; {name}</h2>
              <div className={styles.specsGrid}>
                {specs.map((item, idx) => (
                  <div key={idx} className={styles.specBox}>
                    <span className={styles.specLabel}>{item.label}</span>
                    <span className={styles.specValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          {highlights && highlights.length > 0 && (
            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Key Project Highlights</h2>
              <div className={styles.featuresGrid}>
                {highlights.map((hl, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <div className={styles.featureBullet}>✦</div>
                    <div>
                      <h3 className={styles.featureTitle}>{hl.title}</h3>
                      <p className={styles.featureDesc}>{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Styles if applicable */}
          {stylesList && stylesList.length > 0 && (
            <div className={styles.stylesSection}>
              <h2 className={styles.sectionHeading}>Architectural Styles &amp; Design Concepts</h2>
              <div className={styles.stylesGrid}>
                {stylesList.map((st, idx) => (
                  <div key={idx} className={styles.styleCard}>
                    <div className={styles.styleBadge}>OPTION 0{idx + 1}</div>
                    <h3 className={styles.styleTitle}>{st.title}</h3>
                    <p className={styles.styleDesc}>{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Island Activations */}
          <div className={styles.activationsSection}>
            <h2 className={styles.sectionHeading}>Island-Wide World-Class Attractions</h2>
            <ul className={styles.activationsList}>
              <li><strong>Surf Abu Dhabi:</strong> The world&rsquo;s largest and most advanced artificial wave facility.</li>
              <li><strong>Velodrome Abu Dhabi:</strong> The region&rsquo;s premier UCI-certified indoor cycling track and rooftop jogging circuit.</li>
              <li><strong>321 Sports Hub:</strong> Elite indoor and outdoor sports grounds including football pitches, tennis, and padel courts.</li>
              <li><strong>Marsana Promenade:</strong> Vibrant beachside dining, waterfront food trucks, marina berths, and boutique retail.</li>
              <li><strong>Hudayriyat Beach &amp; Trail:</strong> Over 16 kilometers of dedicated cycling and running tracks winding along unspoiled coastline.</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
