"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const communities = [
  { name: "Wadeem Gardens", href: "/wadeem-gardens" },
  { name: "Hudayriyat Golf Estates", href: "/hudayriyat-golf-estates" },
  { name: "Bashayer Villas", href: "/bashayer-villas" },
  { name: "Bashayer Residences", href: "/bashayer-residences" },
  { name: "Al Naseem Villas", href: "/al-naseem-villas" },
  { name: "Nawayef East Hills", href: "/nawayef-east-hills" },
  { name: "Masyaf Plots", href: "/masyaf-plots" },
  { name: "Nawayef Village", href: "/nawayef-village" },
  { name: "Wadeem Plots", href: "/wadeem-plots" },
  { name: "Nawayef Park Views", href: "/nawayef-park-views" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#communities" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Condition", href: "/terms-and-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className={styles.footerGrid}>
          {/* Col 1: Brand Logo & Description */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo.png"
                alt="Hudayriyat Island Logo"
                width={160}
                height={55}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandDescription}>
              Hudayriyat Island trusted property advisory serving local and
              international buyers. We specialize in residential and investment
              properties, offering clear guidance, market insight, and long term
              value.
            </p>
          </div>

          {/* Col 2: About / Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>About Hudayriyat</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Properties */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Properties</h4>
            <ul className={styles.linksList}>
              {communities.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect With Us */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Connect With Us</h4>
            <ul className={styles.contactList}>
              <li>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <MessageCircle size={18} className={styles.contactIcon} />
                  <span>Connect on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="tel:+971500000000" className={styles.contactLink}>
                  <Phone size={18} className={styles.contactIcon} />
                  <span>+971 50 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hudayriyat-island.com"
                  className={styles.contactLink}
                >
                  <Mail size={18} className={styles.contactIcon} />
                  <span>info@hudayriyat-island.com</span>
                </a>
              </li>
              <li>
                <div className={styles.contactItemStatic}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <span>Hudayriyat Island, Abu Dhabi, UAE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className={styles.bottomBar}>
          <p className={styles.disclaimerText}>
            <strong>Disclaimer:</strong> Its not official website. We inform that all property information provided on this website is for general guidance only and does not constitute a formal offer. Prices, availability, and property details may change at any time without prior notice. Images are for illustrative purposes and may not reflect actual properties. For the most accurate and up-to-date information, please contact us directly through the details provided on the website.
          </p>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} hudayriyat-island.com All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
