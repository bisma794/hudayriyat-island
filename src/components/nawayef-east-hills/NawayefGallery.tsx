'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './NawayefGallery.module.css';

interface GalleryItem {
  id: number;
  src: string;
  category: 'community' | 'interior' | 'exterior';
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/nawayef-east-hills/gallery-1.jpg', category: 'community', alt: 'Nawayef East Hills Landscape View' },
  { id: 2, src: '/images/nawayef-east-hills/gallery-2.jpg', category: 'community', alt: 'Nawayef East Hills Elevated Perspective' },
  { id: 3, src: '/images/nawayef-east-hills/gallery-3.jpg', category: 'exterior', alt: 'Nawayef East Hills Luxury Villa Facade' },
  { id: 4, src: '/images/nawayef-east-hills/gallery-4.jpg', category: 'exterior', alt: 'Nawayef East Hills Grand Entrance' },
  { id: 5, src: '/images/nawayef-east-hills/gallery-5.jpg', category: 'interior', alt: 'Nawayef East Hills Majlis & Living Room' },
  { id: 6, src: '/images/nawayef-east-hills/gallery-6.jpg', category: 'interior', alt: 'Nawayef East Hills Dining Space' },
  { id: 7, src: '/images/nawayef-east-hills/gallery-7.jpg', category: 'interior', alt: 'Nawayef East Hills Master Bedroom Suite' },
  { id: 8, src: '/images/nawayef-east-hills/gallery-8.jpg', category: 'interior', alt: 'Nawayef East Hills Designer Bathroom' },
  { id: 9, src: '/images/nawayef-east-hills/gallery-9.jpg', category: 'community', alt: 'Nawayef East Hills Parkways' },
  { id: 10, src: '/images/nawayef-east-hills/gallery-10.jpg', category: 'exterior', alt: 'Nawayef East Hills Private Swimming Pool' },
  { id: 11, src: '/images/nawayef-east-hills/gallery-11.jpg', category: 'exterior', alt: 'Nawayef East Hills Mansion Courtyard' },
  { id: 12, src: '/images/nawayef-east-hills/gallery-12.jpg', category: 'interior', alt: 'Nawayef East Hills Gourmet Kitchen' },
  { id: 13, src: '/images/nawayef-east-hills/gallery-13.jpg', category: 'community', alt: 'Nawayef East Hills Sunset Vista' },
  { id: 14, src: '/images/nawayef-east-hills/gallery-14.jpg', category: 'interior', alt: 'Nawayef East Hills Family Lounge' },
  { id: 15, src: '/images/nawayef-east-hills/gallery-15.jpg', category: 'exterior', alt: 'Nawayef East Hills Outdoor Terrace' },
  { id: 16, src: '/images/nawayef-east-hills/gallery-16.jpg', category: 'interior', alt: 'Nawayef East Hills Dressing Area' },
  { id: 17, src: '/images/nawayef-east-hills/gallery-17.jpg', category: 'exterior', alt: 'Nawayef East Hills Garden Villa' },
  { id: 18, src: '/images/nawayef-east-hills/gallery-18.jpg', category: 'interior', alt: 'Nawayef East Hills Private Study' },
  { id: 19, src: '/images/nawayef-east-hills/gallery-19.jpg', category: 'community', alt: 'Nawayef East Hills Walkway' },
  { id: 20, src: '/images/nawayef-east-hills/gallery-20.jpg', category: 'exterior', alt: 'Nawayef East Hills Hillside View' },
  { id: 21, src: '/images/nawayef-east-hills/gallery-21.jpg', category: 'interior', alt: 'Nawayef East Hills Spa Bathroom' },
  { id: 22, src: '/images/nawayef-east-hills/gallery-22.jpg', category: 'exterior', alt: 'Nawayef East Hills Villa Exterior' },
  { id: 23, src: '/images/nawayef-east-hills/gallery-23.jpg', category: 'community', alt: 'Nawayef East Hills Community Club' },
  { id: 24, src: '/images/nawayef-east-hills/gallery-24.jpg', category: 'exterior', alt: 'Nawayef East Hills Panoramic Estate' },
];

export default function NawayefGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'community' | 'interior' | 'exterior'>('all');
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
          <h2 className={styles.title}>Nawayef East Hills Gallery</h2>
          <p className={styles.subtitle}>
            The Nawayef East Hills gallery highlights the development&apos;s elevated setting, contemporary villas, landscaped surroundings, private swimming pools, spacious terraces, and views across the Arabian Gulf and Abu Dhabi skyline. The residences combine modern architecture with generous outdoor spaces and a private community environment.
          </p>

          <div className={styles.tabNav}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('all'); setCurrentIndex(0); }}
            >
              ALL
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'community' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('community'); setCurrentIndex(0); }}
            >
              Community
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
            {filteredItems.slice(0, Math.min(8, filteredItems.length)).map((_, idx) => (
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
