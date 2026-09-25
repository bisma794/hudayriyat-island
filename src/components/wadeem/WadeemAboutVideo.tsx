"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./WadeemAboutVideo.module.css";

export default function WadeemAboutVideo() {
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
            <h2 className={styles.title}>Wadeem Gardens by Modon</h2>
            <p className={styles.description}>
              Wadeem Gardens by Modon is an upcoming villa community on
              Hudayriyat Island, Abu Dhabi, offering spacious 4, 5 and 6-bedroom
              villas across three gated clusters. The community features
              Contemporary Arabic and Modernist façades, allowing residents to
              choose from varied layouts designed around individual
              preferences. Villa sizes range from 430 to 591 sqm, with plot sizes
              from 532 to 720 sqm. The development includes a 2.3 km waterfront
              lifestyle spine, six clubhouses, retail and dining, healthcare
              centres, cinemas, two international schools and an office park.
              Handover is scheduled for April 2031, with Freehold ownership
              available.
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
                  poster="/images/wadeem-gardens/video-poster.png"
                  controls={isPlaying}
                  className={styles.videoPlayer}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src="https://www.hudayriyat-island.com/storage/communities/project_description/OYGgT2yU41G6E7lesAFfLZMA79aeqE2lJBhCcHJw.mp4"
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
