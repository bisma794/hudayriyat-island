'use client';

import React, { useRef, useState } from 'react';
import styles from './VillasAboutVideo.module.css';

export default function VillasAboutVideo() {
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
            <h2 className={styles.title}>Bashayer Villas by Modon</h2>
            <p className={styles.description}>
              Set along the shores of Hudayriyat Island, <strong>Bashayer Villas</strong> is an exceptional waterfront
              development presenting premium <strong>4 and 5-bedroom villas</strong> crafted for the discerning homeowner
              in Abu Dhabi. Each residence unfolds across generous layouts, complete with dual kitchens, private outdoor
              retreats, and interiors tailored for family living at its finest.
              <br /><br />
              Framed by natural beauty, the villas fuse contemporary architectural expression with an unhurried coastal
              ambiance. Homeowners are welcomed by an array of world-class amenities &mdash; a clubhouse crowned with a rooftop
              infinity pool, verdant landscaped parks, dedicated sports facilities, scenic cycling tracks, and curated retail
              experiences. Anchored by its coveted island address and elevated lifestyle offering, Bashayer Villas presents a truly
              refined residential chapter, moments from Abu Dhabi&rsquo;s most celebrated attractions.
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              {/* Solid Brown Background Block Behind Video */}
              <div className={styles.brownBackdrop} />

              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  poster="/images/bashayer-villas/video-poster.jpg"
                  src="/images/bashayer-villas/video.mp4"
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
