'use client';

import React, { useRef, useState } from 'react';
import styles from './NawayefAboutVideo.module.css';

export default function NawayefAboutVideo() {
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
            <h2 className={styles.title}>Nawayef East Hills by Modon</h2>
            <div className={styles.description}>
              <p style={{ marginBottom: "14px" }}>
                <strong>Nawayef East Hills by Modon</strong> offers a collection of spacious residences designed around privacy, elevated living, and open views. The development features three residential collections: 4 and 5-bedroom Homes, 5 to 7-bedroom Heights, and 6 to 8-bedroom Mansions.
              </p>
              <p style={{ marginBottom: "14px" }}>
                The residences are designed with generous layouts, large terraces, private swimming pools, gardens, and majlis areas. Different architectural styles create a distinctive streetscape while maintaining a strong connection with the surrounding landscape. Residents also benefit from access to swimming pools, a clubhouse, gym, tennis facilities, jogging trails, parks, and children&apos;s play areas.
              </p>
              <p>
                Nawayef East is scheduled for handover in <strong>December 2028</strong>, with Homes starting from <strong>AED 6.6 million</strong> and a <strong>40/60 payment plan</strong> with a 10% down payment.
              </p>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              {/* Solid Brown Background Block Behind Video */}
              <div className={styles.brownBackdrop} />

              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  poster="/images/nawayef-east-hills/video-poster.jpg"
                  src="/images/nawayef-east-hills/video.mp4"
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
