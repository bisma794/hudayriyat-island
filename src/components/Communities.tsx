import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import styles from "./Communities.module.css";

interface CommunityItem {
  name: string;
  image: string;
  location: string;
  price: string;
  delivery: string;
  developer: string;
  paymentPlan: string;
  href?: string;
}

const communitiesData: CommunityItem[] = [
  {
    name: "Wadeem Gardens",
    image: "/images/communities/wadeem-gardens.png",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 8.7M AED",
    delivery: "Delivery Date: Q2 2031",
    developer: "Modon Properties",
    paymentPlan: "Flexible Payment Plan",
    href: "/wadeem-gardens",
  },
  {
    name: "Hudayriyat Golf Estates",
    image: "/images/communities/golf-estates.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 4.3M AED*",
    delivery: "Delivery Date: Q3 2030",
    developer: "Modon Properties",
    paymentPlan: "5/35/60 Payment Plan",
    href: "/hudayriyat-golf-estates",
  },
  {
    name: "Bashayer Residences",
    image: "/images/communities/bashayer-residences.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 2.4M AED",
    delivery: "Delivery Date: Q1 2030",
    developer: "Modon Properties",
    paymentPlan: "10/40/50 Payment Plan",
    href: "/bashayer-residences",
  },
  {
    name: "Nawayef East Hills",
    image: "/images/communities/nawayef-east.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 6.6M AED",
    delivery: "Delivery Date: Q1 2028",
    developer: "Modon Properties",
    paymentPlan: "10/30/60 Payment Plan",
    href: "/nawayef-east-hills",
  },
  {
    name: "Bashayer Villas",
    image: "/images/communities/bashayer-villas.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 6M AED",
    delivery: "Delivery Date: Q3 2028",
    developer: "Modon Properties",
    paymentPlan: "20/30/50 Payment Plan",
    href: "/bashayer-villas",
  },
  {
    name: "Al Naseem Villas",
    image: "/images/communities/al-naseem.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 7.8M AED",
    delivery: "Delivery Date: Q4 2026",
    developer: "Modon Properties",
    paymentPlan: "10/30/60 Payment Plan",
    href: "/al-naseem-villas",
  },
  {
    name: "Masyaf Plots",
    image: "/images/communities/masyaf-plots.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: Launch Soon",
    delivery: "Delivery Date: Launch Soon",
    developer: "Modon Properties",
    paymentPlan: "Payment Plan: Launch Soon",
    href: "/masyaf-plots",
  },
  {
    name: "Nawayef Village",
    image: "/images/communities/nawayef-village.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 4.1M AED",
    delivery: "Delivery Date: Q1 2029",
    developer: "Modon Properties",
    paymentPlan: "10/40/50 Payment Plan",
    href: "/nawayef-village",
  },
  {
    name: "Wadeem Plots",
    image: "/images/communities/wadeem-plots.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 3.7M AED",
    delivery: "Delivery Date: Q4 2028",
    developer: "Modon Properties",
    paymentPlan: "10/40/50 Payment Plan",
    href: "/wadeem-plots",
  },
  {
    name: "Nawayef Park Views",
    image: "/images/communities/nawayef-park-views.jpg",
    location: "Hudayriyat Island, Abu Dhabi",
    price: "Launch Price: 2.1M AED",
    delivery: "Delivery Date: Q1 2028",
    developer: "Modon Properties",
    paymentPlan: "10/40/50 Payment Plan",
    href: "/nawayef-park-views",
  },
];

export default function Communities() {
  return (
    <section
      id="communities"
      aria-label="Featured Residential Projects and Communities"
      className={styles.communitiesSection}
    >
      <div className="container">
        {/* Section Header: Heading changed to Projects */}
        <div className="section-header" style={{ paddingBottom: "40px" }}>
          <h2>Projects</h2>
        </div>

        {/* Communities Grid */}
        <div className={styles.communitiesGrid}>
          {communitiesData.map((item, index) => {
            const CardInner = (
              <>
                {/* Top-Left Launch Price & Delivery Badges */}
                <div className={styles.topTags}>
                  <span className={styles.badgeTag}>{item.price}</span>
                  <span className={styles.badgeTag}>{item.delivery}</span>
                </div>

                {/* Top-Right Purple Sparkle Icon */}
                <div className={styles.sparkleBtn}>
                  <Sparkles size={18} color="#ffffff" />
                </div>

                {/* Main Community Photo */}
                <Image
                  src={item.image}
                  alt={`${item.name} luxury property by Modon Properties at Hudayriyat Island Abu Dhabi`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className={styles.mainImage}
                />

                {/* Bottom Content Area */}
                <div className={styles.bottomContent}>
                  {/* Developer Modon Badge */}
                  <div className={styles.modonBadge}>
                    <span className={styles.modonText}>MÖDON</span>
                  </div>

                  {/* Community Title */}
                  <h3 className={styles.cardTitle}>{item.name}</h3>

                  {/* Location */}
                  <p className={styles.cardLocation}>{item.location}</p>

                  {/* Payment Plan Badge */}
                  <div className={styles.planBadge}>{item.paymentPlan}</div>
                </div>
              </>
            );

            return item.href ? (
              <Link
                key={index}
                href={item.href}
                aria-label={`${item.name} by Modon Properties`}
                className={`${styles.cardCustom} ${index === 8 ? styles.centeredRowStart : ""}`}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                {CardInner}
              </Link>
            ) : (
              <article
                key={index}
                aria-label={`${item.name} by Modon Properties`}
                className={`${styles.cardCustom} ${index === 8 ? styles.centeredRowStart : ""}`}
              >
                {CardInner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
