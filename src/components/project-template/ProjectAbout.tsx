'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './ProjectAbout.module.css';

interface ProjectAboutProps {
  name: string;
  title: string;
  description: string;
  mediaPlaceholder?: string;
  videoUrl?: string;
  poster?: string;
  onOpenBrochure?: () => void;
  slug?: string;
}

export default function ProjectAbout({
  name,
  title,
  description,
  mediaPlaceholder = '/images/placeholder.svg',
  videoUrl,
  poster,
  onOpenBrochure,
  slug,
}: ProjectAboutProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  // If Masyaf Plots: render the clean aesthetic editorial text section with the brown backdrop behind it
  if (slug === 'masyaf-plots') {
    return (
      <section className={styles.aboutSection} id="about">
        <div className="container">
          <div className={styles.editorialWrapper}>
            {/* Solid Brown Background Block Behind It */}
            <div className={styles.editorialBackdrop} />

            {/* Clean Aesthetic Luxury Text Card */}
            <div className={styles.editorialCard}>
              <span className={styles.tagline}>ABOUT MASYAF PLOTS</span>
              <h2 className={styles.editorialTitle}>Masyaf by Hudayriyat Development</h2>
              <div className={styles.editorialText}>
                <p>
                  <strong>Masyaf</strong> is an exclusive residential development nestled on the prestigious{' '}
                  <strong>Hudayriyat Island in Abu Dhabi</strong>, featuring{' '}
                  <strong>199 premium plots</strong> tailored for fully customized villa construction. Developed by{' '}
                  <strong>Hudayriyat Development LLC</strong>, Masyaf forms part of the island’s visionary master plan focused on sustainable luxury and coastal living. This vibrant community offers seamless access to iconic Abu Dhabi landmarks, pristine Hudayriyat beaches, lush green spaces and creating an ideal blend of natural beauty, active lifestyle, and urban connectivity. All this, just minutes from the heart of the city.
                </p>
              </div>

              {onOpenBrochure && (
                <div className={styles.editorialCtaRow}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standard 2-column layout for other projects
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
                {videoUrl ? (
                  <div className={styles.videoPlayerWrap} onClick={handlePlay}>
                    <video
                      ref={videoRef}
                      src={videoUrl}
                      poster={poster || mediaPlaceholder}
                      playsInline
                      controls={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className={styles.videoElement}
                    />
                    {!isPlaying && (
                      <button
                        type="button"
                        className={styles.playButton}
                        aria-label={`Play ${name} video`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlay();
                        }}
                      >
                        <div className={styles.playIconContainer}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="6 3 20 12 6 21 6 3" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
