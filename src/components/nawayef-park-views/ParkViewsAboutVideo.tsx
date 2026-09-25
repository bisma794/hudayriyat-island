"use client";

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";
import styles from "./ParkViewsAboutVideo.module.css";

export default function ParkViewsAboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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
    <section id="alt-services" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Text Column */}
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Nawayef Park Views, Hudayriyat Island</h2>
            <p className={styles.description}>
              <strong>Nawayef Park Views </strong>is a premium residential development by Modon Properties, and the first-ever freehold apartment community on Abu Dhabi’s vibrant Hudayriyat Island. Set amidst lush greenery and parklands, this low-rise neighborhood offers a refined island lifestyle that blends urban sophistication with coastal tranquility. The development features spacious one- to four-bedroom apartments, ranging from 1,044 sq ft to 5,328 sq ft, many with staff rooms and optional home offices, ideal for modern families and professionals. With prices starting from AED 2M and a flexible 60/40 payment plan, this community presents a rare opportunity to own a park-facing home in one of Abu Dhabi’s most dynamic new destinations.
            </p>
          </div>

          {/* Right: Video with solid brown background shape */}
          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              {/* Solid Brown Background Backdrop Accent */}
              <div className={styles.brownBackdrop} />

              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  poster="/images/nawayef-park-views/asset_14.jpg"
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src="/images/nawayef-park-views/asset_15.mp4" type="video/mp4" />
                  <source
                    src="https://www.hudayriyat-island.com/storage/communities/project_description/DwkT77jxFMePFbYgzVQKBFTI1WSXo7LbBcVfvtRs.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <button
                    type="button"
                    className={styles.playButton}
                    onClick={togglePlay}
                    aria-label="Play project video"
                  >
                    <Play size={24} fill="#ffffff" />
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
