'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ProjectAbout.module.css';

interface ProjectAboutProps {
  name: string;
  title: string;
  description: string;
  mediaPlaceholder?: string;
  onOpenBrochure?: () => void;
}

export default function ProjectAbout({
  name,
  title,
  description,
  mediaPlaceholder = '/images/placeholder.svg',
  onOpenBrochure,
}: ProjectAboutProps) {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.leftCol}>
            <span className={styles.tagline}>ABOUT {name.toUpperCase()}</span>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
              <p>{description}</p>
            </div>

            {onOpenBrochure && (
              <button
                type="button"
                className={styles.ctaButton}
                onClick={onOpenBrochure}
              >
                <span>Download Brochure</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            )}
          </div>

          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              {/* Solid Brown Background Block */}
              <div className={styles.brownBackdrop} />

              <div className={styles.mediaContainer}>
                <Image
                  src={mediaPlaceholder}
                  alt={`${name} showcase`}
                  fill
                  className={styles.mediaImg}
                />
                <div className={styles.mediaOverlay}>
                  <div className={styles.playIconPlaceholder}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span className={styles.overlayText}>{name} Video Showcase Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
