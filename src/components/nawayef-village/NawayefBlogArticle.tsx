import React from 'react';
import Link from 'next/link';
import styles from './NawayefBlogArticle.module.css';

export default function NawayefBlogArticle() {
  return (
    <article className={styles.articleSection} id="overview-article">
      <div className="container">
        <div className={styles.articleCard}>
          {/* Main Title & Lead */}
          <div className={styles.header}>
            <h2 className={styles.mainTitle}>
              Nawayef Village at Hudayriyat Island &ndash; Exclusive Hillside Villas with Scenic Views
            </h2>
            <p className={styles.leadText}>
              Developed by Modon Properties, Nawayef Village is a distinguished
              gated residential community nestled between the East and West Hills
              of Hudayriyat Island, Abu Dhabi. As the first townhouse offering on
              the island, it introduces a new standard of modern family living in
              a serene natural setting. Designed with a contemporary aesthetic and
              Mediterranean influences, Nawayef Village presents a refined
              collection of 3- to 5-bedroom townhouses and twin villas, making it
              a sought-after option for those looking for{" "}
              <Link href="/">
                <strong>Hudayriyat Island townhouses</strong>
              </Link>{" "}
              that combine luxury with functionality
            </p>
          </div>

          {/* At a Glance Specs Grid */}
          <div className={styles.specsSection}>
            <h3 className={styles.sectionHeading}>Nawayef Village &ndash; At a Glance</h3>
            <div className={styles.specsGrid}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Developer</span>
                <span className={styles.specValue}>Modon Properties</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Property Type</span>
                <span className={styles.specValue}>3 to 5 Bedroom Townhouses &amp; Twin Villas</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Location</span>
                <span className={styles.specValue}>Hudayriyat Island, Abu Dhabi</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Architectural Style</span>
                <span className={styles.specValue}>Contemporary / Modern</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Community Type</span>
                <span className={styles.specValue}>Gated Residential Community</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Handover</span>
                <span className={styles.specValue}>Q1 2029</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Payment Plan</span>
                <span className={styles.specValue}>50/50 Flexible Plan</span>
              </div>
            </div>
          </div>

          {/* Architecture & Design */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Architecture &amp; Design</h3>
            <p className={styles.bodyText}>
              The residences at <strong>Nawayef Village</strong> are thoughtfully crafted to reflect modern architectural elegance while maximizing comfort for family living. Each unit features sleek lines, expansive floor-to-ceiling windows, and open-plan interiors that invite natural light and airiness. Drawing inspiration from Mediterranean and Tuscan styles, the facades incorporate earth-toned finishes, textured materials, and shaded terraces&mdash;creating a warm yet upscale atmosphere. Private gardens, rooftop terraces, and flexible interior layouts make every home ideal for entertaining or relaxed island living.
            </p>
          </div>

          {/* Community Highlights & Amenities */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Community Highlights &amp; Amenities</h3>
            <ul className={styles.bulletList}>
              <li>Secure gated entry with 24/7 security</li>
              <li>Lush parks and landscaped open spaces</li>
              <li>Pedestrian-friendly walkways and jogging paths</li>
              <li>Community pools and leisure centers</li>
              <li>Retail Avenue with cafes, fine dining, and essential services</li>
              <li>Clubhouse, cinema, and family entertainment zones</li>
              <li>Close to beaches, cycling tracks, and Hudayriyat’s wellness attractions</li>
              <li>Proximity to schools, clinics, and recreational hubs</li>
            </ul>
          </div>

          {/* Luxury Modern Homes in Nawayef Village */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Luxury Modern Homes in Nawayef Village</h3>
            <p className={styles.bodyText}>
              Discover the ultimate in comfort, elegance, and functionality with <strong>Nawayef Village’s</strong> luxury modern homes, a stunning collection of <strong>3 to 5 bedroom townhouses</strong> and twin villas nestled on Hudayriyat Island, Abu Dhabi. Designed for discerning homeowners, these residences blend sophisticated architecture with smart layouts and premium finishes.
            </p>
          </div>

          {/* Key Features */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Key Features:</h3>
            <ul className={styles.bulletList}>
              <li>
                <strong>Modern Open-Plan Layout:</strong> Seamlessly integrated living, dining, and kitchen areas that are ideal for entertaining guests or enjoying relaxed family moments.
              </li>
              <li>
                <strong>Spacious Interiors:</strong> Generously sized bedrooms and living areas designed to provide maximum comfort and flexibility for modern families.
              </li>
              <li>
                <strong>High-End Finishes &amp; Premium Materials:</strong> Every detail is thoughtfully selected from elegant flooring and sleek cabinetry to designer fixtures and contemporary lighting.
              </li>
              <li>
                <strong>Private Gardens &amp; Rooftop Terraces:</strong> Select units feature landscaped outdoor areas and sun-soaked rooftop terraces, perfect for leisure, gatherings, or enjoying the island breeze.
              </li>
            </ul>
            <p className={styles.bodyText} style={{ marginTop: '20px' }}>
              Whether you're seeking a stylish family home or a sound long-term investment, Nawayef Village offers a unique opportunity to own a modern luxury home in one of Abu Dhabi’s most prestigious waterfront communities.
            </p>
          </div>

          {/* Seamless Access, Endless Possibilities */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Seamless Access, Endless Possibilities</h3>
            <p className={styles.bodyText}>
              Strategically positioned on Hudayriyat Island, Nawayef Village offers effortless access to Abu Dhabi’s most iconic landmarks and lifestyle destinations:
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
                <span className={styles.connectTime}>23 mins</span>
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

          {/* Nawayef Village Hudayriyat Island – Abu Dhabi Homes for Sale */}
          <div className={styles.closingSection}>
            <h3 className={styles.closingTitle}>
              Nawayef Village Hudayriyat Island &ndash; Abu Dhabi Homes for Sale
            </h3>
            <p className={styles.bodyText}>
              Nawayef Village offers a warm neighborhood concept of living on Hudayriyat Island. Conceived as a suburb with an environmentally considerate development, it has contemporary homes within the relaxed village setting. For those who seek connectivity, walkability and community in a well-conceived village environment, the perfect home is coming.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
