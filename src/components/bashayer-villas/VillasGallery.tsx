'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './VillasGallery.module.css';

interface GalleryItem {
  id: number;
  src: string;
  category: 'interior' | 'exterior';
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/bashayer-villas/gallery-1.jpg', category: 'exterior', alt: 'Bashayer Villas Waterfront Facade' },
  { id: 2, src: '/images/bashayer-villas/gallery-2.jpg', category: 'exterior', alt: 'Bashayer Villas Private Garden & Pool' },
  { id: 3, src: '/images/bashayer-villas/gallery-3.jpg', category: 'interior', alt: 'Bashayer Villas Grand Living Space' },
  { id: 4, src: '/images/bashayer-villas/gallery-4.jpg', category: 'interior', alt: 'Bashayer Villas Dining & Entertaining' },
  { id: 5, src: '/images/bashayer-villas/gallery-5.jpg', category: 'exterior', alt: 'Bashayer Villas Architectural View' },
  { id: 6, src: '/images/bashayer-villas/gallery-6.jpg', category: 'interior', alt: 'Bashayer Villas Master Bedroom Suite' },
  { id: 7, src: '/images/bashayer-villas/gallery-7.jpg', category: 'interior', alt: 'Bashayer Villas Gourmet Kitchen' },
  { id: 8, src: '/images/bashayer-villas/gallery-8.jpg', category: 'exterior', alt: 'Bashayer Villas Coastal Sunset View' },
];

export default function VillasGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'interior' | 'exterior'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeTab);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleLightboxNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Villas Gallery</h2>
          <p className={styles.subtitle}>
            Explore the striking coastal beauty and architectural brilliance of Bashayer Villas through curated imagery of refined waterfront homes,
            lush landscaped surrounds, expansive open-plan interiors, and world-class luxury finishes crafted by Modon Properties.
          </p>

          <div className={styles.tabNav}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('all'); setCurrentIndex(0); }}
            >
              ALL
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'interior' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('interior'); setCurrentIndex(0); }}
            >
              Interior
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'exterior' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('exterior'); setCurrentIndex(0); }}
            >
              Exterior
            </button>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <button
            className={styles.navArrowPrev}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.carouselTrackWrapper}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(-${currentIndex * (600 + 24)}px))`,
              }}
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={styles.carouselSlide}
                  onClick={() => openLightbox(idx)}
                >
                  <div className={styles.imgWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className={styles.galleryImg}
                      sizes="(max-width: 768px) 88vw, 600px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.navArrowNext}
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className={styles.dotsWrapper}>
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className={styles.lightboxPrev}
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            aria-label="Previous"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.alt}
              className={styles.lightboxImg}
            />
          </div>

          <button
            className={styles.lightboxNext}
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            aria-label="Next"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
