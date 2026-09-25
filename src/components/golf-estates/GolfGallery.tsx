"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./GolfGallery.module.css";

const galleryImages = [
  {
    src: "/images/golf-estates/gallery-1.jpg",
    alt: "Hudayriyat Golf Estates luxury modern mansion architecture with floor-to-ceiling glass and private pool",
    category: "Exterior",
  },
  {
    src: "/images/golf-estates/gallery-2.jpg",
    alt: "Hudayriyat Golf Estates scenic fairway views and bespoke villa outdoor terrace",
    category: "Exterior",
  },
  {
    src: "/images/golf-estates/gallery-3.jpg",
    alt: "Hudayriyat Golf Estates expansive lush green landscape and contemporary villa facade",
    category: "Exterior",
  },
  {
    src: "/images/golf-estates/gallery-4.jpg",
    alt: "Hudayriyat Golf Estates twilight view of luxury villa estate on Hudayriyat Island Abu Dhabi",
    category: "Exterior",
  },
];

export default function GolfGallery() {
  const [activeTab, setActiveTab] = useState<"ALL" | "Exterior">("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const filteredImages =
    activeTab === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || filteredImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, filteredImages.length]);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevSlide();
    }
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        {/* Header with Title, Left-Aligned 3-Line Text and Filter Tabs */}
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Gallery</h2>
          <p className={styles.subtitle}>
            The Hudayriyat Golf Estates gallery showcases the villas, golf surroundings, landscaped areas, community spaces, and modern architectural design. The project is planned to offer a calm residential environment with easy access to outdoor and leisure facilities.
          </p>

          {/* Filter Tabs */}
          <div className={styles.tabNav}>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                activeTab === "ALL" ? styles.tabActive : ""
              }`}
              onClick={() => {
                setActiveTab("ALL");
                setCurrentIndex(0);
              }}
            >
              ALL
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                activeTab === "Exterior" ? styles.tabActive : ""
              }`}
              onClick={() => {
                setActiveTab("Exterior");
                setCurrentIndex(0);
              }}
            >
              Exterior
            </button>
          </div>
        </div>

        {/* 600x400 Carousel Track */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.carouselTrackWrapper}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(-${currentIndex} * (min(600px, 88vw) + 24px)))`,
              }}
            >
              {filteredImages.concat(filteredImages).map((item, idx) => {
                const originalIdx = idx % filteredImages.length;
                return (
                  <div
                    key={idx}
                    className={styles.carouselSlide}
                    onClick={() => openLightbox(originalIdx)}
                  >
                    <div className={styles.imgWrapper}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 88vw, 600px"
                        className={styles.galleryImg}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            className={styles.navArrowPrev}
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className={styles.navArrowNext}
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className={styles.dotsWrapper}>
          {filteredImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${
                idx === currentIndex % filteredImages.length
                  ? styles.dotActive
                  : ""
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            className={styles.lightboxPrev}
            onClick={handleLightboxPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className={styles.lightboxImg}
            />
          </div>

          <button
            type="button"
            className={styles.lightboxNext}
            onClick={handleLightboxNext}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
