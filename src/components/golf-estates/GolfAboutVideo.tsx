"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./GolfAboutVideo.module.css";

export default function GolfAboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="alt-services" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left: Text Description */}
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Hudayriyat Golf Estates by Modon</h2>
            <div className={styles.description}>
              <p>
                Hudayriyat Golf Estates by Modon is a new villa community on Hudayriyat Island, Abu Dhabi. The project offers spacious villas designed around a golf and waterfront lifestyle.
              </p>
              <p style={{ marginTop: "1rem" }}>
                The community combines modern architecture, landscaped surroundings, and access to leisure and recreational facilities. Residents can enjoy a peaceful residential setting while staying connected to the wider attractions and amenities of Hudayriyat Island.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Handover is planned for Q3 2030, with freehold ownership available for all nationalities.
              </p>
            </div>
          </div>

          {/* Right: Video with solid brown background shape */}
          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              <div className={styles.brownBackdrop} />

              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  poster="/images/golf-estates/video-poster.jpg"
                  controls={isPlaying}
                  className={styles.videoPlayer}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src="https://www.hudayriyat-island.com/storage/communities/project_description/3ZADXnXTmIbZMrVsBFEsCxAN4vYhHKSeRNLwsGdd.mp4"
                    type="video/mp4"
                  />
                </video>

                {!isPlaying && (
                  <button
                    type="button"
                    className={styles.playButton}
                    onClick={togglePlay}
                    aria-label="Play video"
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
