import React from "react";
import Link from "next/link";
import styles from "./WadeemArticle.module.css";

const keyProjectHighlights = [
  { label: "Developer", value: "Modon" },
  { label: "Property Type", value: "Villas" },
  { label: "Unit Types", value: "4, 5 and 6-bedroom Villas" },
  { label: "Launch Price", value: "AED 8,700,000" },
  { label: "Size Range", value: "430 to 591 sqm" },
  { label: "Plot Size", value: "532 to 720 sqm" },
  { label: "Handover", value: "April 2031" },
  { label: "Ownership", value: "Freehold" },
  { label: "Location", value: "Hudayriyat Island, Abu Dhabi" },
  { label: "Payment Plan", value: "25% / 75%" },
  { label: "Down Payment", value: "5%" },
  { label: "Lifestyle Spine", value: "2.3 km" },
  { label: "Clubhouses", value: "6" },
  { label: "International Schools", value: "2" },
];

export default function WadeemArticle() {
  return (
    <article className={styles.articleSection}>
      <div className="container">
        <div className={styles.articleContent}>
          <h2 className={styles.mainTitle}>
            Wadeem Gardens Villas Designed Around Modern Family Living
          </h2>

          <p className={styles.paragraph}>
            Wadeem Gardens by Modon is an upcoming residential community on
            Hudayriyat Island, Abu Dhabi, designed around a combination of
            spacious homes, connected neighbourhoods, and everyday convenience.
            The development comprises three gated villa clusters, offering
            Contemporary Arabic and Modernist façades with varied layouts that
            allow each home to reflect individual preferences. With 4-, 5- and
            6-bedroom villas, generous plot sizes, a 2.3 km waterfront lifestyle
            spine, and a selection of community facilities, Wadeem Gardens
            creates a residential setting shaped around different rhythms of
            life.
          </p>

          <h3 className={styles.sectionHeading}>Key Project Highlights</h3>
          <ul className={styles.highlightsList}>
            {keyProjectHighlights.map((item, idx) => (
              <li key={idx} className={styles.highlightItem}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <h3 className={styles.sectionHeading}>Property Details</h3>
          <p className={styles.paragraph}>
            Wadeem Gardens on Hudayriyat Island offers a selection of spacious
            4-, 5- and 6-bedroom villas within three gated clusters. These{" "}
            <Link href="/">
              <strong>Hudayriyat Island villas</strong>
            </Link>{" "}
            feature thoughtfully planned layouts and generous spaces designed
            for comfortable family living. The 4-bedroom villas have unit
            sizes of 430 sqm and plot sizes of 532 sqm, with prices from AED 8.7
            million. The 5-bedroom villas offer 510 sqm of unit space on 630 sqm
            plots, with prices from AED 10.2 million. The 6-bedroom villas
            provide 591 sqm of unit space and 720 sqm plots, with prices from
            AED 11.6 million. Across the development, varied layouts and two
            façade styles provide residents with different architectural
            choices while maintaining a cohesive community character.
          </p>

          <h3 className={styles.sectionHeading}>Lifestyle &amp; Amenities</h3>
          <p className={styles.paragraph}>
            Wadeem Gardens is planned around a 2.3 km spine and waterfront
            promenade that form an important part of the community setting. The
            development includes six clubhouses alongside retail and dining
            facilities, healthcare centres, cinemas, an office park, and two
            international schools. The community is designed to bring everyday
            facilities and social spaces into the wider residential environment,
            supporting convenient access to essential services and leisure
            destinations. The combination of gated villa clusters, landscaped
            areas, community facilities, and waterfront surroundings contributes
            to the overall residential character of Wadeem Gardens.
          </p>

          <h3 className={styles.sectionHeading}>Architecture &amp; Interiors</h3>
          <p className={styles.paragraph}>
            Wadeem Gardens offers a choice between Contemporary Arabic and
            Modernist façades. Contemporary Arabic architecture provides a
            distinctive regional character, while Modernist façades offer an
            alternative architectural expression within the community. The
            varied layouts allow each home to reflect the individual taste of
            its residents. With spacious 4-, 5- and 6-bedroom villas and
            generous plot sizes, the development provides different residential
            configurations while maintaining a consistent visual identity
            across its three gated clusters.
          </p>

          <h3 className={styles.sectionHeading}>Location &amp; Connectivity</h3>
          <p className={styles.paragraph}>
            Located on Hudayriyat Island in Abu Dhabi, Wadeem Gardens provides
            access to several significant destinations across the city. Zayed
            International Airport is approximately 15 minutes away, while Abu
            Dhabi Global Market (ADGM) is approximately 20 minutes away. Louvre
            Museum is approximately 23 minutes away, and Disneyland is
            approximately 25 minutes away. The location places residents within
            reach of business, cultural, entertainment, and transport
            destinations while remaining within the wider Hudayriyat Island
            setting.
          </p>

          <p className={styles.paragraph}>
            Wadeem Gardens brings together spacious villas, gated residential
            clusters, architectural choice, and community facilities on
            Hudayriyat Island. With 4-, 5- and 6-bedroom villas, a 2.3 km
            lifestyle spine, six clubhouses, retail and dining, healthcare
            centres, cinemas, and two international schools, the development is
            designed around connected everyday living. The 25% / 75% payment
            plan includes a 5% down payment, with handover scheduled for April
            2031.
          </p>
        </div>
      </div>
    </article>
  );
}
