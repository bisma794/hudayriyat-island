'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectHeader.module.css';

interface HeaderProps {
  currentSlug: string;
  onOpenBrochure?: () => void;
  onOpenListProperty?: () => void;
}

const allCommunities = [
  { name: 'Wadeem Gardens', href: '/wadeem-gardens', slug: 'wadeem-gardens' },
  { name: 'Hudayriyat Golf Estates', href: '/hudayriyat-golf-estates', slug: 'hudayriyat-golf-estates' },
  { name: 'Bashayer Residences', href: '/bashayer-residences', slug: 'bashayer-residences' },
  { name: 'Nawayef East Hills', href: '/nawayef-east-hills', slug: 'nawayef-east-hills' },
  { name: 'Bashayer Villas', href: '/bashayer-villas', slug: 'bashayer-villas' },
  { name: 'Al Naseem Villas', href: '/al-naseem-villas', slug: 'al-naseem-villas' },
  { name: 'Masyaf Plots', href: '/masyaf-plots', slug: 'masyaf-plots' },
  { name: 'Nawayef Village', href: '/nawayef-village', slug: 'nawayef-village' },
  { name: 'Wadeem Plots', href: '/wadeem-plots', slug: 'wadeem-plots' },
  { name: 'Nawayef Park Views', href: '/nawayef-park-views', slug: 'nawayef-park-views' },
];

export default function ProjectHeader({ currentSlug, onOpenBrochure, onOpenListProperty }: HeaderProps) {
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
                {allCommunities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={c.href}
                      className={`${styles.dropdownItem} ${currentSlug === c.slug ? styles.dropdownActive : ''}`}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
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
          {allCommunities.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className={`${styles.mobileSublink} ${currentSlug === c.slug ? styles.dropdownActive : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {c.name}
            </Link>
          ))}
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
