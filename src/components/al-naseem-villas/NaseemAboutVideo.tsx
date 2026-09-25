'use client';

import React, { useRef, useState } from 'react';
import styles from './NaseemAboutVideo.module.css';

interface AboutProps {
  onOpenBrochure?: () => void;
}

export default function NaseemAboutVideo({ onOpenBrochure }: AboutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.leftCol}>
            <span className={styles.tagline}>ABOUT AL NASEEM VILLAS</span>
            <h2 className={styles.title}>Where Island Living Meets Modern Luxury</h2>
            <p className={styles.description}>
              <strong>Al Naseem Villas</strong> on <em><strong>Hudayriyat Island</strong></em> offer elegant <strong>4 to 6 bedroom</strong> residences ranging from 750 to 930 SQM, thoughtfully designed for comfort, privacy, and style. With <strong>freehold ownership open to all nationalities</strong>, these off-plan homes feature two distinctive fa&ccedil;ade styles &ndash; South Californian and Modern Contemporary.
              <br /><br />
              Residents enjoy access to premium island-wide amenities including cycling tracks, beach access, and a private country club with gym, spa, and pool. <strong>A gated entrance</strong>, lush surroundings, and a community mosque enhance the sense of security and harmony. Al Naseem Villas offer more than a home &ndash; they deliver a lifestyle of prestige, tranquility, and long-term value.
            </p>

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
              {/* Solid Brown Background Block Behind Video */}
              <div className={styles.brownBackdrop} />

              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  poster="/images/al-naseem-villas/video-poster.jpg"
                  src="/images/al-naseem-villas/video.mp4"
                  controls={isPlaying}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                />

                {!isPlaying && (
                  <button
                    type="button"
                    className={styles.playButton}
                    onClick={handlePlayToggle}
                    aria-label="Play Video"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
