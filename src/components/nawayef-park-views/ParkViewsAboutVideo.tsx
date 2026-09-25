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
        <div className={styles.grid}>
          {/* Text Column */}
          <div className={styles.textCol}>
            <h2 className={styles.title}>Nawayef Park Views, Hudayriyat Island</h2>
            <p className={styles.description}>
              <strong>Nawayef Park Views </strong>is a premium residential development by Modon Properties, and the first-ever freehold apartment community on Abu Dhabi’s vibrant Hudayriyat Island. Set amidst lush greenery and parklands, this low-rise neighborhood offers a refined island lifestyle that blends urban sophistication with coastal tranquility. The development features spacious one- to four-bedroom apartments, ranging from 1,044 sq ft to 5,328 sq ft, many with staff rooms and optional home offices, ideal for modern families and professionals. With prices starting from AED 2M and a flexible 60/40 payment plan, this community presents a rare opportunity to own a park-facing home in one of Abu Dhabi’s most dynamic new destinations.
            </p>
          </div>

          {/* Video Column */}
          <div className={styles.videoCol}>
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef}
                className={styles.videoElement}
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
                <div
                  className={styles.playOverlay}
                  onClick={togglePlay}
                  role="button"
                  aria-label="Play project video"
                  tabIndex={0}
                >
                  <button type="button" className={styles.playBtn}>
                    <Play size={28} fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
