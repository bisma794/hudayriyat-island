import React from 'react';
import styles from './NaseemArticle.module.css';

export default function NaseemArticle() {
  return (
    <article className={styles.articleSection} id="description">
      <div className="container">
        <div className={styles.articleCard}>
          <div className={styles.header}>
            <span className={styles.subTitle}>DETAILED COMMUNITY OVERVIEW</span>
            <h1 className={styles.mainTitle}>
              Al Naseem Villas, Hudayriyat Island &ndash; A Lifestyle of Elegance and Space
            </h1>
            <p className={styles.leadText}>
              <strong>Welcome to Al Naseem Villas by Modon</strong>, a prestigious off-plan residential community located on the stunning Hudayriyat Island, Abu Dhabi. Designed for those who seek a harmonious blend of luxury, space, and lifestyle, these contemporary villas offer unmatched comfort in a serene island setting.
            </p>
          </div>

          {/* Quick Specifications Table */}
          <div className={styles.specsSection}>
            <h2 className={styles.sectionHeading}>Project Overview - Al Naseem Villas</h2>
            <div className={styles.specsGrid}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Location</span>
                <span className={styles.specValue}>Hudayriyat Island, Abu Dhabi</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Developer</span>
                <span className={styles.specValue}>Modon Properties</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Property Type</span>
                <span className={styles.specValue}>Luxurious Detached Villas</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Project Status</span>
                <span className={styles.specValue}>Off-Plan (Under Construction)</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Handover</span>
                <span className={styles.specValue}>Q4 2026</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Ownership Type</span>
                <span className={styles.specValue}>Freehold &ndash; All Nationalities</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Configurations</span>
                <span className={styles.specValue}>4, 5 &amp; 6 Bedroom Villas</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Built-up Area</span>
                <span className={styles.specValue}>7,200 &ndash; 10,010 sqft</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Starting Price</span>
                <span className={styles.specValue}>From AED 7.8 Million</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Payment Plan</span>
                <span className={styles.specValue}>10% Down Payment (10/30/60)</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Architectural Styles</span>
                <span className={styles.specValue}>South Californian &amp; Modern Contemporary</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Special Feature</span>
                <span className={styles.specValue}>Eligible for UAE 10-Yr Golden Visa</span>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className={styles.contentSection}>
            <h2 className={styles.sectionHeading}>Key Highlights</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureBullet}>✦</div>
                <div>
                  <h3 className={styles.featureTitle}>Freehold Ownership for All Nationalities</h3>
                  <p className={styles.featureDesc}>
                    Al Naseem Villas are available on a 100% freehold basis, welcoming UAE nationals and international buyers with complete ownership security in Abu Dhabi&rsquo;s most sought-after island enclave.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureBullet}>✦</div>
                <div>
                  <h3 className={styles.featureTitle}>Spacious 4 to 6 Bedroom Villas</h3>
                  <p className={styles.featureDesc}>
                    Designed for expansive family living, each villa showcases high ceilings, floor-to-ceiling windows, en-suite bathrooms for every bedroom, maid&rsquo;s quarters, and dedicated multi-vehicle garages.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureBullet}>✦</div>
                <div>
                  <h3 className={styles.featureTitle}>Generous Plot &amp; Garden Sizes</h3>
                  <p className={styles.featureDesc}>
                    Villa plots range from 724 to 1,024 SQM, affording grand private gardens, optional bespoke swimming pools, outdoor BBQ lounges, and expansive landscaped sun decks.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureBullet}>✦</div>
                <div>
                  <h3 className={styles.featureTitle}>Prime Island Waterfront Location</h3>
                  <p className={styles.featureDesc}>
                    Enjoy peaceful maritime tranquility while staying effortlessly connected via dedicated road links to Downtown Abu Dhabi, Al Bateen, and the Corniche in just minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Styles */}
          <div className={styles.stylesSection}>
            <h2 className={styles.sectionHeading}>Architectural Styles &amp; Design Facades</h2>
            <p className={styles.bodyText}>
              Homeowners can select between two distinct, masterfully conceived architectural façades designed to cater to diverse aesthetic sensibilities:
            </p>
            <div className={styles.stylesGrid}>
              <div className={styles.styleCard}>
                <div className={styles.styleBadge}>OPTION 01</div>
                <h3 className={styles.styleTitle}>South Californian Style</h3>
                <p className={styles.styleDesc}>
                  Characterized by earthy tones, exposed wooden pergolas, textured stone masonry, and gently sloped tiled roofs that evoke breezy Pacific coastal sophistication.
                </p>
              </div>

              <div className={styles.styleCard}>
                <div className={styles.styleBadge}>OPTION 02</div>
                <h3 className={styles.styleTitle}>Modern Contemporary Style</h3>
                <p className={styles.styleDesc}>
                  Defined by sleek geometric lines, pristine white façades, expansive glazed glass curtain walls, and minimalist architecture that captures maximum natural coastal sunlight.
                </p>
              </div>
            </div>
          </div>

          {/* Island Activations */}
          <div className={styles.activationsSection}>
            <h2 className={styles.sectionHeading}>Island-Wide World-Class Attractions</h2>
            <p className={styles.bodyText}>
              Living at Al Naseem Villas places you at the center of Abu Dhabi&rsquo;s most anticipated master-planned destination:
            </p>
            <ul className={styles.activationsList}>
              <li><strong>Surf Abu Dhabi:</strong> The world&rsquo;s largest and most advanced artificial wave facility, engineered in partnership with Kelly Slater Wave Co.</li>
              <li><strong>Velodrome Abu Dhabi:</strong> The region&rsquo;s premier UCI-certified indoor cycling track and rooftop jogging circuit.</li>
              <li><strong>321 Sports Hub:</strong> Elite indoor and outdoor sports grounds including football pitches, tennis, padel courts, and athletic facilities.</li>
              <li><strong>Marsana Promenade:</strong> Vibrant beachside dining, waterfront food trucks, marina berths, splash parks, and boutique retail.</li>
              <li><strong>Hudayriyat Beach &amp; Trail:</strong> Over 16 kilometers of dedicated cycling and running tracks winding along unspoiled natural coastline.</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
