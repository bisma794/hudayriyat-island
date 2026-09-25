"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./BashayerHeader.module.css";

interface BashayerHeaderProps {
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

export default function BashayerHeader({ onOpenListModal }: BashayerHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isCommOpen, setIsCommOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCommOpen, setMobileCommOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
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
                  COMMUNITIES
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
                <a href="#floorplans" className={styles.navLink}>
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

            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileDrawerOverlay}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${
          mobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
      >
        <button
          type="button"
          className={styles.mobileCloseBtn}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>

        <ul className={styles.mobileNavList}>
          <li>
            <Link
              href="/"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.mobileNavLink}
              onClick={() => setMobileCommOpen((prev) => !prev)}
            >
              Communities
              <ChevronDown
                size={16}
                style={{
                  transform: mobileCommOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              />
            </button>
            {mobileCommOpen && (
              <div className={styles.mobileSubList}>
                {communitiesList.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={styles.mobileSubItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <a
              href="#floorplans"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Floor Plans
            </a>
          </li>
          <li>
            <a
              href="#master"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Master Plan
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#paymentplan"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Payment Plan
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li style={{ marginTop: "12px" }}>
            <button
              type="button"
              className={styles.listPropBtnMobile}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenListModal?.();
              }}
            >
              LIST YOUR PROPERTY
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
