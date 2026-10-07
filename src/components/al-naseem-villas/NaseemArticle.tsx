import React from 'react';
import Link from 'next/link';
import styles from './NaseemArticle.module.css';

export default function NaseemArticle() {
  return (
    <article className={styles.articleSection} id="overview-article">
      <div className="container">
        <div className={styles.articleCard}>
          {/* Main Article Header */}
          <div className={styles.header}>
            <h2 className={styles.mainTitle}>
              Al Naseem Villas, Hudayriyat Island – A Lifestyle of Elegance and Space
            </h2>
            <p className={styles.leadText}>
              Welcome to Al Naseem Villas by Modon, a prestigious off-plan residential community located on the stunning Hudayriyat Island, Abu Dhabi. Designed for those who seek a harmonious blend of luxury, space, and lifestyle, these contemporary villas offer unmatched comfort in a serene island setting.
            </p>
          </div>

          {/* Project Overview - Al Naseem Villas */}
          <div className={styles.specsSection}>
            <h3 className={styles.sectionHeading}>Project Overview - Al Naseem Villas</h3>
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
                <span className={styles.specValue}>Luxurious Villas (Detached)</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Project Status</span>
                <span className={styles.specValue}>Off-Plan</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Handover</span>
                <span className={styles.specValue}>Q4 2026</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Ownership Type</span>
                <span className={styles.specValue}>Freehold – Open to All Nationalities</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Available Configurations</span>
                <span className={styles.specValue}>4, 5 &amp; 6 Bedroom Villas</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Built-up Area Range</span>
                <span className={styles.specValue}>7,200 – 8,417 sqft</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Starting Price</span>
                <span className={styles.specValue}>From AED 7.8 Million</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Payment Plan</span>
                <span className={styles.specValue}>10% Down Payment</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Architectural Styles</span>
                <span className={styles.specValue}>South Californian &amp; Modern Contemporary</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Facades</span>
                <span className={styles.specValue}>Two distinct design options to choose from</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Community Type</span>
                <span className={styles.specValue}>Gated with 24/7 Security</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Ideal For</span>
                <span className={styles.specValue}>Families, end-users, and investors</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Special Feature</span>
                <span className={styles.specValue}>Eligibility for UAE Golden Visa</span>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Key Highlights</h3>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <h4 className={styles.highlightTitle}>Freehold Ownership for all nationalities.</h4>
                <p className={styles.highlightDesc}>
                  Al Naseem Villas are available on a freehold basis, welcoming investors and homeowners from all nationalities with full ownership rights.
                </p>
              </div>

              <div className={styles.highlightItem}>
                <h4 className={styles.highlightTitle}>Spacious 4 to 6 Bedroom Villa</h4>
                <p className={styles.highlightDesc}>
                  Designed for modern families, each villa features large, airy bedrooms, open-plan layouts, en-suite bathrooms, and private outdoor spaces.
                </p>
              </div>

              <div className={styles.highlightItem}>
                <h4 className={styles.highlightTitle}>Generous Plot Size.</h4>
                <p className={styles.highlightDesc}>
                  With villa sizes ranging from 724 to 1,024 SQM, residents can enjoy flexible living, generous gardens, and options for personalized interior fit-outs.
                </p>
              </div>

              <div className={styles.highlightItem}>
                <h4 className={styles.highlightTitle}>Prime Island Location</h4>
                <p className={styles.highlightDesc}>
                  Situated on Hudayriyat Island, Al Naseem Villas offer tranquil waterfront living within close proximity to city conveniences, pristine beaches, and leisure attractions.
                </p>
              </div>

              <div className={styles.highlightItem}>
                <h4 className={styles.highlightTitle}>Off-plan Investment Potential</h4>
                <p className={styles.highlightDesc}>
                  An excellent opportunity to invest early in a landmark development backed by Modon. Enjoy attractive pricing, phased payments, and anticipated capital growth.
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Styles */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Architectural Styles</h3>
            <p className={styles.bodyText}>Choose from two distinct façade options:</p>
            <div className={styles.stylesGrid}>
              <div className={styles.styleCard}>
                <h4 className={styles.styleTitle}>South Californian Style</h4>
                <p className={styles.styleDesc}>
                  Featuring earthy tones, pergolas, wood textures, and sloped roofs for a warm, welcoming look.
                </p>
              </div>
              <div className={styles.styleCard}>
                <h4 className={styles.styleTitle}>Modern Contemporary Style</h4>
                <p className={styles.styleDesc}>
                  Defined by clean lines, white stucco finishes, dark metal trims, and expansive glass elements for a sleek, sophisticated appeal.
                </p>
              </div>
            </div>
          </div>

          {/* Island-Wide Activations */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Island-Wide Activations</h3>
            <p className={styles.bodyText}>
              Residents of Al Naseem Villas enjoy exclusive access to world-class recreational and lifestyle destinations across Hudayriyat Island, including:
            </p>
            <ul className={styles.activationsList}>
              <li><strong>Surf Abu Dhabi:</strong> The region’s premier surfing destination</li>
              <li><strong>Marsana:</strong> A vibrant waterfront dining and retail hub</li>
              <li><strong>321 Sports:</strong> A state-of-the-art sports complex for all ages</li>
              <li><strong>Hudayriyat Marina:</strong> Ideal for boating and leisure activities</li>
              <li><strong>Bab Al Najoum:</strong> A beachfront glamping and hospitality retreat</li>
              <li><strong>Road Cycling Track:</strong> Professional-grade cycling circuit</li>
              <li><strong>MTB Track:</strong> Mountain biking trail for adventure enthusiasts</li>
              <li><strong>Hudayriyat Beach:</strong> Pristine public beach with family-friendly facilities</li>
            </ul>
          </div>

          {/* Hill Community Amenities */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Hill Community Amenities</h3>
            <p className={styles.bodyText}>
              Located within a secure and serene hilltop neighbourhood, Al Naseem Villas also offer:
            </p>
            <ul className={styles.activationsList}>
              <li><strong>Country Club:</strong> Featuring a fully equipped gym, luxury spa, and swimming pool</li>
              <li><strong>Mosque:</strong> Community mosque for daily prayers and spiritual connection</li>
              <li><strong>Gated Entrance:</strong> Ensuring privacy and 24/7 security</li>
              <li><strong>Pedestrian Paths &amp; Cycle Routes:</strong> Lushly landscaped walkways and trails throughout the community</li>
            </ul>
          </div>

          {/* Invest in Your Dream Home Today */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Invest in Your Dream Home Today</h3>
            <div className={styles.paragraphsBlock}>
              <p className={styles.bodyText}>
                Don&apos;t miss out on the opportunity to own your slice of paradise at Al Naseem Villa. With freehold ownership, spacious living spaces, prime location, and a plethora of amenities, these villas offer the perfect blend of luxury and convenience. Contact us today to take the first step towards realizing your dream lifestyle.
              </p>
              <p className={styles.bodyText}>
                Al Naseem Villa stands as a testament to luxurious island living on Hudayriat Island. With its spacious interiors, prime location, and abundance of amenities, it&apos;s more than just a home – it&apos;s a lifestyle. Experience the epitome of comfort, convenience, and elegance at Al Naseem Villa, where your dream home awaits.
              </p>
              <p className={styles.bodyText}>
                Ready to embark on your journey to luxury living? Contact us today to learn more about ownership opportunities at Al Naseem Villa.
              </p>
            </div>
          </div>

          {/* Al Naseem Luxury Villas Abu Dhabi – Hudayriyat Island */}
          <div className={styles.closingSection}>
            <h3 className={styles.closingTitle}>
              Al Naseem Luxury Villas Abu Dhabi – Hudayriyat Island
            </h3>
            <p className={styles.bodyText}>
              <Link href="/">
                <strong>Hudayriyat Island Abu Dhabi</strong>
              </Link>{" "}
              Al Naseem is an elegant, residential community on Hudayriyat Island
              designed for those who love life to the fullest. This private villa
              community shows a modern coastal way of life, where architecture and
              comfort are perfectly matched with the environment. A peaceful and
              state-of-the-art lifestyle is what you need enjoy a family home
              beautiful designed so as Al Naseem.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
