"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./ParkViewsHeader.module.css";

interface ParkViewsHeaderProps {
  onOpenListModal?: () => void;
}

const communitiesList = [
  { name: "Wadeem Gardens", href: "/wadeem-gardens" },
  { name: "Hudayriyat Golf Estates", href: "/hudayriyat-golf-estates" },
  { name: "Bashayer Residences", href: "/bashayer-residences" },
  { name: "Nawayef East Hills", href: "/nawayef-east-hills" },
  { name: "Bashayer Villas", href: "/bashayer-villas" },
  { name: "Al Naseem Villas", href: "/al-naseem-villas" },
  { name: "Masyaf Plots", href: "/masyaf-plots" },
  { name: "Nawayef Village", href: "/nawayef-village" },
  { name: "Wadeem Plots", href: "/wadeem-plots" },
  { name: "Nawayef Park Views", href: "/nawayef-park-views" },
];

export default function ParkViewsHeader({ onOpenListModal }: ParkViewsHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isCommOpen, setIsCommOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCommOpen, setMobileCommOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.stickyHeader : ""}`}>
        <div className={`container ${styles.headerContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Hudayriyat Island"
              width={160}
              height={55}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  HOME
                </Link>
              </li>

              {/* Communities Dropdown */}
              <li
                className={styles.navItem}
                onMouseEnter={() => setIsCommOpen(true)}
                onMouseLeave={() => setIsCommOpen(false)}
              >
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => setIsCommOpen((prev) => !prev)}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  PROJECTS
                  <ChevronDown size={14} />
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    isCommOpen ? styles.dropdownOpen : ""
                  }`}
                >
                  {communitiesList.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={styles.dropdownItem}
                      onClick={() => setIsCommOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className={styles.navItem}>
                <a href="#floor" className={styles.navLink}>
                  FLOOR PLAN
                </a>
              </li>

              <li className={styles.navItem}>
                <a href="#master" className={styles.navLink}>
                  MASTER PLAN
                </a>
              </li>

              <li className={styles.navItem}>
                <a href="#gallery" className={styles.navLink}>
                  GALLERY
                </a>
              </li>

              <li className={styles.navItem}>
                <a href="#paymentplan" className={styles.navLink}>
                  PAYMENT PLAN
                </a>
              </li>

              <li className={styles.navItem}>
                <a href="#faq" className={styles.navLink}>
                  FAQ
                </a>
              </li>

              <li className={styles.navItem}>
                <a href="#contact" className={styles.navLink}>
                  CONTACT
                </a>
              </li>

              {/* List Your Property CTA */}
              <li className={styles.navItem}>
                <button
                  type="button"
                  className={styles.listPropertyBtn}
                  onClick={onOpenListModal}
                >
                  LIST YOUR PROPERTY
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>

          <div>
            <button
              type="button"
              className={styles.mobileNavLink}
              style={{ width: "100%", background: "none", border: "none", cursor: "pointer" }}
              onClick={() => setMobileCommOpen((prev) => !prev)}
            >
              <span>PROJECTS</span>
              <ChevronDown
                size={16}
                style={{
                  transform: mobileCommOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              />
            </button>
            {mobileCommOpen && (
              <div className={styles.mobileSubMenu}>
                {communitiesList.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={styles.mobileSubLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="#floor"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            FLOOR PLAN
          </a>

          <a
            href="#master"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            MASTER PLAN
          </a>

          <a
            href="#gallery"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            GALLERY
          </a>

          <a
            href="#paymentplan"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            PAYMENT PLAN
          </a>

          <a
            href="#faq"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>

          <a
            href="#contact"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </a>

          <button
            type="button"
            className={styles.listPropertyBtn}
            style={{ width: "100%", marginTop: "12px", textAlign: "center" }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenListModal?.();
            }}
          >
            LIST YOUR PROPERTY
          </button>
        </div>
      )}
    </>
  );
}
