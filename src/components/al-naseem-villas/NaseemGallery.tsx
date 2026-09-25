'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './NaseemGallery.module.css';

interface GalleryItem {
  id: number;
  src: string;
  category: 'community' | 'interior' | 'exterior';
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/al-naseem-villas/gallery-1.jpg', category: 'interior', alt: 'Modern open-plan living room at Al Naseem Villas Abu Dhabi' },
  { id: 2, src: '/images/al-naseem-villas/gallery-2.jpg', category: 'interior', alt: 'Contemporary kitchen design with high-end appliances' },
  { id: 3, src: '/images/al-naseem-villas/gallery-3.jpg', category: 'interior', alt: 'Spacious luxury villa interior with elegant lighting' },
  { id: 4, src: '/images/al-naseem-villas/gallery-4.jpg', category: 'interior', alt: 'Master bedroom with large windows and natural light' },
  { id: 5, src: '/images/al-naseem-villas/gallery-5.jpg', category: 'interior', alt: 'Elegant dining area with modern decor' },
  { id: 6, src: '/images/al-naseem-villas/gallery-6.jpg', category: 'interior', alt: 'Stylish bathroom with premium fittings' },
  { id: 7, src: '/images/al-naseem-villas/gallery-7.jpg', category: 'interior', alt: 'Bright and airy interiors featuring large windows' },
  { id: 8, src: '/images/al-naseem-villas/gallery-8.jpg', category: 'interior', alt: 'Cozy family lounge space with modern furnishings' },
  { id: 9, src: '/images/al-naseem-villas/gallery-9.jpg', category: 'interior', alt: 'Maid’s room interior with efficient layout' },
  { id: 10, src: '/images/al-naseem-villas/gallery-10.jpg', category: 'interior', alt: 'Luxurious villa interiors showcasing comfort' },
  { id: 11, src: '/images/al-naseem-villas/gallery-11.jpg', category: 'exterior', alt: 'South Californian style villa exterior at Al Naseem' },
  { id: 12, src: '/images/al-naseem-villas/gallery-12.jpg', category: 'exterior', alt: 'Modern Contemporary villa façade with sleek finishes' },
  { id: 13, src: '/images/al-naseem-villas/gallery-13.jpg', category: 'community', alt: 'Lush landscaped gardens surrounding luxury villas' },
  { id: 14, src: '/images/al-naseem-villas/gallery-14.jpg', category: 'community', alt: 'Gated community entrance with 24/7 security' },
  { id: 15, src: '/images/al-naseem-villas/gallery-15.jpg', category: 'exterior', alt: 'Spacious villa driveway and parking area' },
  { id: 16, src: '/images/al-naseem-villas/gallery-16.jpg', category: 'exterior', alt: 'Private outdoor pool area at luxury villas' },
  { id: 17, src: '/images/al-naseem-villas/gallery-17.jpg', category: 'community', alt: 'Scenic pedestrian and cycling paths' },
  { id: 18, src: '/images/al-naseem-villas/gallery-18.jpg', category: 'exterior', alt: 'Villa exterior with large terraces and panoramic views' },
  { id: 19, src: '/images/al-naseem-villas/gallery-19.jpg', category: 'exterior', alt: 'Night view of illuminated luxury villas' },
  { id: 20, src: '/images/al-naseem-villas/gallery-20.jpg', category: 'exterior', alt: 'Architectural detail of Modern Contemporary façade' },
];

export default function NaseemGallery() {
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
          <h2 className={styles.title}>Al Naseem Villas Gallery</h2>
          <p className={styles.subtitle}>
            Explore the captivating beauty of Al Naseem Villas through curated imagery capturing its grand architectural design,
            expansive private residences, lush gardens, and world-class waterfront island lifestyle in Abu Dhabi.
          </p>

          <div className={styles.tabNav}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('all'); setCurrentIndex(0); }}
            >
              ALL
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'exterior' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('exterior'); setCurrentIndex(0); }}
            >
              Exterior
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'interior' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('interior'); setCurrentIndex(0); }}
            >
              Interior
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'community' ? styles.tabActive : ''}`}
              onClick={() => { setActiveTab('community'); setCurrentIndex(0); }}
            >
              Community
            </button>
          </div>
        </div>

        {/* Main Feature Carousel */}
        {filteredItems.length > 0 && (
          <div className={styles.carouselContainer}>
            <button
              type="button"
              className={`${styles.navArrow} ${styles.prevArrow}`}
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div
              className={styles.mainImageWrapper}
              onClick={() => openLightbox(currentIndex)}
            >
              <Image
                src={filteredItems[currentIndex]?.src || galleryData[0].src}
                alt={filteredItems[currentIndex]?.alt || 'Al Naseem Villas'}
                fill
                priority
                className={styles.mainImg}
              />
              <div className={styles.imageOverlay}>
                <span className={styles.imageCaption}>{filteredItems[currentIndex]?.alt}</span>
                <span className={styles.zoomPrompt}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to Zoom
                </span>
              </div>
            </div>

            <button
              type="button"
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={handleNext}
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}

        {/* Thumbnail Grid */}
        <div className={styles.thumbGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.thumbItem} ${index === currentIndex ? styles.thumbActive : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={styles.thumbImg}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            ✕
          </button>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            aria-label="Previous Image"
          >
            ❮
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={filteredItems[lightboxIndex]?.src}
                alt={filteredItems[lightboxIndex]?.alt}
                fill
                className={styles.lightboxImg}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {filteredItems[lightboxIndex]?.alt} ({lightboxIndex + 1} / {filteredItems.length})
            </p>
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            aria-label="Next Image"
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
}
