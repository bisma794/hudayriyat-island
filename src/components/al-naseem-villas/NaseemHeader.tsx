'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NaseemHeader.module.css';

interface HeaderProps {
  onOpenBrochure?: () => void;
  onOpenListProperty?: () => void;
}

export default function NaseemHeader({ onOpenBrochure, onOpenListProperty }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/Hudayriyat Logo new-01.svg"
            alt="Hudayriyat Island"
            width={160}
            height={45}
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>HOME</Link>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.navLink} style={{ cursor: 'pointer' }}>
                PROJECTS
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/wadeem-gardens" className={styles.dropdownItem}>Wadeem Gardens</Link></li>
                <li><Link href="/hudayriyat-golf-estates" className={styles.dropdownItem}>Hudayriyat Golf Estates</Link></li>
                <li><Link href="/bashayer-residences" className={styles.dropdownItem}>Bashayer Residences</Link></li>
                <li><Link href="/nawayef-east-hills" className={styles.dropdownItem}>Nawayef East Hills</Link></li>
                <li><Link href="/bashayer-villas" className={styles.dropdownItem}>Bashayer Villas</Link></li>
                <li><Link href="/al-naseem-villas" className={`${styles.dropdownItem} ${styles.dropdownActive}`}>Al Naseem Villas</Link></li>
                <li><Link href="/masyaf-plots" className={styles.dropdownItem}>Masyaf Plots</Link></li>
                <li><Link href="/nawayef-village" className={styles.dropdownItem}>Nawayef Village</Link></li>
                <li><Link href="/wadeem-plots" className={styles.dropdownItem}>Wadeem Plots</Link></li>
                <li><Link href="/nawayef-park-views" className={styles.dropdownItem}>Nawayef Park Views</Link></li>
              </ul>
            </li>
            <li><a href="#floor" className={styles.navLink}>FLOOR PLAN</a></li>
            <li><a href="#masterplan" className={styles.navLink}>MASTER PLAN</a></li>
            <li><a href="#payment_plan" className={styles.navLink}>PAYMENT PLAN</a></li>
            <li><a href="#faq" className={styles.navLink}>FAQ</a></li>
            <li><Link href="/contact-us" className={styles.navLink}>CONTACT US</Link></li>
          </ul>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>HOME</Link>
          <div style={{ color: '#ae774e', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.5px' }}>PROJECTS</div>
          <Link href="/wadeem-gardens" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Wadeem Gardens</Link>
          <Link href="/hudayriyat-golf-estates" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Hudayriyat Golf Estates</Link>
          <Link href="/bashayer-residences" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Bashayer Residences</Link>
          <Link href="/nawayef-east-hills" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Nawayef East Hills</Link>
          <Link href="/bashayer-villas" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Bashayer Villas</Link>
          <Link href="/al-naseem-villas" className={`${styles.mobileSublink} ${styles.dropdownActive}`} onClick={() => setMobileOpen(false)}>Al Naseem Villas</Link>
          <Link href="/masyaf-plots" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Masyaf Plots</Link>
          <Link href="/nawayef-village" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Nawayef Village</Link>
          <Link href="/wadeem-plots" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Wadeem Plots</Link>
          <Link href="/nawayef-park-views" className={styles.mobileSublink} onClick={() => setMobileOpen(false)}>Nawayef Park Views</Link>
          <a href="#floor" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>FLOOR PLAN</a>
          <a href="#masterplan" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>MASTER PLAN</a>
          <a href="#payment_plan" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>PAYMENT PLAN</a>
          <a href="#faq" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>FAQ</a>
          <Link href="/contact-us" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>CONTACT US</Link>
          <button
            type="button"
            className={styles.mobileBtnAction}
            onClick={() => {
              setMobileOpen(false);
              if (onOpenListProperty) onOpenListProperty();
              else if (onOpenBrochure) onOpenBrochure();
            }}
          >
            LIST YOUR PROPERTY
          </button>
        </div>
      )}
    </header>
  );
}
