"use client";

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";
import styles from "./BashayerAboutVideo.module.css";

export default function BashayerAboutVideo() {
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

  return (
    <section className={styles.aboutSection} id="alt-services">
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left: Content */}
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Bashayer Residences by Modon</h2>
            <div className={styles.description}>
              <p style={{ marginBottom: "14px" }}>
                <strong>Bashayer Residences by Modon</strong> offers a collection of contemporary homes designed around waterfront living. The latest release includes 1, 2, and 3-bedroom apartments, 2 and 4-bedroom townhomes, and premium penthouses.
              </p>
              <p style={{ marginBottom: "14px" }}>
                Homes are designed with modern layouts, large windows, and open living spaces that make the most of natural light and waterfront surroundings. The development also provides access to a range of community facilities, including a clubhouse, infinity pool, parks, sports areas, dining, and retail options.
              </p>
              <p>
                The latest Residences 5 &amp; 6 release is scheduled for handover in <strong>April 2030</strong>, with a <strong>50/50 payment plan</strong> and a <strong>5% reservation payment</strong>.
              </p>
            </div>
          </div>

          {/* Right: Video with solid brown background banner */}
          <div className={styles.rightCol}>
            <div className={styles.videoWrapper}>
              <div className={styles.brownBackdrop} />
              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  poster="/images/bashayer-residences/video-poster.jpg"
                  className={styles.videoPlayer}
                  controls={isPlaying}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source
                    src="/images/bashayer-residences/video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <button
                    type="button"
                    className={styles.playButton}
                    onClick={handlePlay}
                    aria-label="Play video"
                  >
                    <Play size={28} fill="#ffffff" />
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
