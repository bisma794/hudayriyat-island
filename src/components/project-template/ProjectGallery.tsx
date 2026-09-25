'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectGalleryItem } from './ProjectTypes';
import styles from './ProjectGallery.module.css';

interface ProjectGalleryProps {
  name: string;
  subtitle?: string;
  items?: ProjectGalleryItem[];
}

export default function ProjectGallery({
  name,
  subtitle = 'Explore the master development, surroundings, and landscape architectural perspectives.',
  items = [],
}: ProjectGalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'community' | 'interior' | 'exterior'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryList = items && items.length > 0 ? items : [
    { id: 1, src: '/images/placeholder.svg', category: 'community' as const, alt: `${name} Community Vista` },
    { id: 2, src: '/images/placeholder.svg', category: 'exterior' as const, alt: `${name} Architectural Concept` },
    { id: 3, src: '/images/placeholder.svg', category: 'interior' as const, alt: `${name} Living Space Layout` },
    { id: 4, src: '/images/placeholder.svg', category: 'community' as const, alt: `${name} Green Landscapes` },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryList
    : galleryList.filter((item) => item.category === activeTab);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Gallery</h2>
          <p className={styles.subtitle}>{subtitle}</p>

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
              aria-label="Previous"
            >
              ❮
            </button>

            <div
              className={styles.mainImageWrapper}
              onClick={() => setLightboxIndex(currentIndex)}
            >
              <Image
                src={filteredItems[currentIndex]?.src || '/images/placeholder.svg'}
                alt={filteredItems[currentIndex]?.alt || name}
                fill
                priority
                className={styles.mainImg}
              />
              <div className={styles.imageOverlay}>
                <span className={styles.imageCaption}>{filteredItems[currentIndex]?.alt}</span>
                <span className={styles.zoomPrompt}>Click to Zoom</span>
              </div>
            </div>

            <button
              type="button"
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={handleNext}
              aria-label="Next"
            >
              ❯
            </button>
          </div>
        )}

        {/* Thumbnail Row */}
        <div className={styles.thumbGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={`thumb-${item.id || index}-${index}`}
              className={`${styles.thumbItem} ${index === currentIndex ? styles.thumbActive : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={item.src || '/images/placeholder.svg'}
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
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={filteredItems[lightboxIndex]?.src || '/images/placeholder.svg'}
                alt={filteredItems[lightboxIndex]?.alt || name}
                fill
                className={styles.lightboxImg}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {filteredItems[lightboxIndex]?.alt} ({lightboxIndex + 1} / {filteredItems.length})
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
